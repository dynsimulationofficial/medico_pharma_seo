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

// 1. Read existing categories.json
const categoriesFile = path.resolve("./src/data/categories.json");
const categoriesList = JSON.parse(fs.readFileSync(categoriesFile, "utf-8"));

// Build category map by slug
const categoryMap = {};
for (const cat of categoriesList) {
  categoryMap[cat.slug] = {
    ...cat,
    description: cat.description || `Explore our high-quality range of ${cat.name} from Medico Pharma.`,
    products: [],
  };
}

// 2. Extract product cards from HTML
// Matches product items in HTML
const cardRegex = /<div[^>]*class=["'][^"']*(?:product-item|catindex-product-item)[^"']*["'][^>]*>(.*?)<\/div>\s*<\/div>/gs;

// Extract images, prices, IDs, names from HTML blocks
const prodBlocks = [];

// Match all product links with ID: href="/medicospharma/cat-name.html#12345"
const linkRegex = /href=["']\/medicospharma\/([^"']+\.html)#(\d+)["'][^>]*>(.*?)<\/a>/gi;
let m;

while ((m = linkRegex.exec(html)) !== null) {
  const [fullMatch, catFile, pId, innerText] = m;
  const catSlug = catFile.replace(".html", "").toLowerCase();
  const rawName = innerText.replace(/<[^>]+>/g, "").trim();

  if (rawName && !rawName.toLowerCase().includes("view") && !rawName.toLowerCase().includes("more")) {
    prodBlocks.push({
      id: pId,
      name: rawName,
      catSlug: catSlug,
    });
  }
}

// Find image src map for IDs
const imageMap = {};
const priceMap = {};

// Match images: alt="name" or near ID
const imgRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*alt=["']([^"']+)["']/gi;
let imgMatch;
while ((imgMatch = imgRegex.exec(html)) !== null) {
  const [_, imgUrl, altText] = imgMatch;
  const slug = slugify(altText);
  const highRes = imgUrl.replace(/-\d+x\d+/, "-500x500");
  imageMap[slug] = highRes;
}

// Extract prices where available
const priceRegex = /(?:₹|Rs\.?)\s*[\d,]+(?:\/[a-zA-Z\s]+)?/gi;

console.log(`Extracted ${prodBlocks.length} raw product blocks.`);

// Assign products to categories
let totalAdded = 0;

for (const p of prodBlocks) {
  const pSlug = slugify(p.name);
  const targetCategory = categoryMap[p.catSlug] || categoryMap["other-products"];

  if (targetCategory) {
    // Avoid duplicate products in the same category
    if (!targetCategory.products.some((item) => item.id === p.id || item.slug === pSlug)) {
      const remoteImg = imageMap[pSlug] || "https://5.imimg.com/data5/SELLER/Default/2023/8/338332508/KH/PB/NJ/15001533/methimez-5-methimazole-tablet-500x500.jpg";
      
      targetCategory.products.push({
        id: p.id,
        name: p.name,
        slug: pSlug,
        category: targetCategory.name,
        categorySlug: targetCategory.slug,
        price: "Price on Request",
        currency: "INR",
        image: `/images/products/${targetCategory.slug}/${pSlug}.jpg`,
        remoteImage: remoteImg,
        internalUrl: `/products/${targetCategory.slug}/${pSlug}`,
        productUrl: `https://www.indiamart.com/medicospharma/${targetCategory.slug}.html#${p.id}`,
      });
      totalAdded++;
    }
  }
}

// Ensure every category has its productCount updated
const updatedCategories = [];

for (const cat of Object.values(categoryMap)) {
  cat.productCount = cat.products.length;
  updatedCategories.push(cat);
}

const masterDatabase = {
  company: {
    name: "Medicos Pharma",
    location: "Mumbai, Maharashtra, India",
    sourceUrl: "https://www.indiamart.com/medicospharma/products.html",
  },
  totalCategories: updatedCategories.length,
  totalProducts: totalAdded,
  categories: updatedCategories,
};

fs.writeFileSync(
  "./src/data/products.json",
  JSON.stringify(masterDatabase, null, 2),
  "utf-8"
);

// Save updated categories.json
const updatedCatList = updatedCategories.map((c) => ({
  id: c.id,
  name: c.name,
  slug: c.slug,
  internalUrl: c.internalUrl,
  image: c.image,
  remoteImage: c.remoteImage,
  productCount: c.productCount,
}));

fs.writeFileSync(
  "./src/data/categories.json",
  JSON.stringify(updatedCatList, null, 2),
  "utf-8"
);

console.log(`Success! ${totalAdded} products built into products.json across ${updatedCategories.length} categories.`);
