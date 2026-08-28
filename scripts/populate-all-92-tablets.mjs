import fs from "fs";
import path from "path";

const htmlPath = "scratch_tablets.html";
let html = "";
if (fs.existsSync(htmlPath)) {
  html = fs.readFileSync(htmlPath, "utf-8");
} else {
  html = fs.readFileSync("C:/Users/admin/.gemini/antigravity/brain/3822d78c-87ca-4375-b3d1-f83022b2a4c2/scratch/products_page.html", "utf-8");
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 1. Extract image map from HTML
const imageMap = {};
const imgRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*alt=["']([^"']+)["']/gi;
let imgM;
while ((imgM = imgRegex.exec(html)) !== null) {
  const [_, imgUrl, altText] = imgM;
  imageMap[slugify(altText)] = imgUrl.replace(/-\d+x\d+/, "-500x500");
}

// 2. Extract product items from HTML
const linkRegex = /href=["']\/medicospharma\/([^"']+\.html)#(\d+)["'][^>]*>(.*?)<\/a>/gi;
const rawExtracted = [];
const seenIds = new Set();
let m;

while ((m = linkRegex.exec(html)) !== null) {
  const [_, catFile, pId, innerText] = m;
  const rawName = innerText.replace(/<[^>]+>/g, "").trim();

  if (rawName && !rawName.toLowerCase().includes("view") && !rawName.toLowerCase().includes("more")) {
    if (!seenIds.has(pId)) {
      seenIds.add(pId);
      rawExtracted.push({
        id: pId,
        name: rawName,
        catFile: catFile
      });
    }
  }
}

console.log(`Extracted ${rawExtracted.length} unique raw items from IndiaMART tablets HTML.`);

// Read master products.json
const dbPath = "./src/data/products.json";
const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

// Find pharmaceutical-tablets category
const tabletsCat = db.categories.find((c) => c.slug === "pharmaceutical-tablets");

if (tabletsCat) {
  const formattedTablets = rawExtracted.map((item) => {
    const pSlug = slugify(item.name);
    const remoteImg = imageMap[pSlug] || "https://5.imimg.com/data5/SELLER/Default/2023/8/338332508/KH/PB/NJ/15001533/methimez-5-methimazole-tablet-500x500.jpg";

    return {
      id: item.id,
      name: item.name,
      slug: pSlug,
      category: "Pharmaceutical Tablets",
      categorySlug: "pharmaceutical-tablets",
      price: "Price on Request",
      currency: "INR",
      image: `/images/products/pharmaceutical-tablets/${pSlug}.jpg`,
      remoteImage: remoteImg,
      internalUrl: `/products/pharmaceutical-tablets/${pSlug}`,
      productUrl: `https://www.indiamart.com/medicospharma/pharmaceutical-tablets.html#${item.id}`
    };
  });

  tabletsCat.products = formattedTablets;
  tabletsCat.productCount = formattedTablets.length;
  console.log(`Updated Pharmaceutical Tablets with ${formattedTablets.length} products!`);
}

// Recalculate grand total
let grandTotal = 0;
db.categories.forEach((c) => (grandTotal += c.products.length));
db.totalProducts = grandTotal;

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");

// Update categories.json
const catClean = db.categories.map((c) => ({
  id: c.id,
  name: c.name,
  slug: c.slug,
  internalUrl: c.internalUrl,
  image: c.image,
  remoteImage: c.remoteImage,
  productCount: c.productCount
}));

fs.writeFileSync("./src/data/categories.json", JSON.stringify(catClean, null, 2), "utf-8");

console.log(`Success! Master database now contains ${grandTotal} total products.`);
