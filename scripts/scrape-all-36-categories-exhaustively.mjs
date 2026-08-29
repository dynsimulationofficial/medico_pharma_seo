import fs from "fs";
import path from "path";

const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Cache-Control": "max-age=0",
  "Sec-Ch-Ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": '"Windows"',
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1"
};

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Read current categories
const categoriesList = JSON.parse(fs.readFileSync("./src/data/categories.json", "utf-8"));
const existingDb = JSON.parse(fs.readFileSync("./src/data/products.json", "utf-8"));

async function scrapeCategory(catSlug) {
  const url = `https://www.indiamart.com/medicospharma/${catSlug}.html`;
  console.log(`[SCRAPING] ${url}...`);

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.log(`  -> Response status ${res.status}`);
      return [];
    }

    const html = await res.text();

    // 1. Extract image map
    const imageMap = {};
    const imgRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*alt=["']([^"']+)["']/gi;
    let imgM;
    while ((imgM = imgRegex.exec(html)) !== null) {
      const [_, imgUrl, altText] = imgM;
      imageMap[slugify(altText)] = imgUrl.replace(/-\d+x\d+/, "-500x500");
    }

    // 2. Extract product items
    const linkRegex = /href=["']\/medicospharma\/([^"']+\.html)#(\d+)["'][^>]*>(.*?)<\/a>/gi;
    const products = [];
    const seen = new Set();
    let m;

    while ((m = linkRegex.exec(html)) !== null) {
      const [_, catFile, pId, innerText] = m;
      const rawName = innerText.replace(/<[^>]+>/g, "").trim();

      if (rawName && !rawName.toLowerCase().includes("view") && !rawName.toLowerCase().includes("more")) {
        if (!seen.has(pId)) {
          seen.add(pId);
          const pSlug = slugify(rawName);
          const remoteImg = imageMap[pSlug] || "https://5.imimg.com/data5/SELLER/Default/2023/8/338332508/KH/PB/NJ/15001533/methimez-5-methimazole-tablet-500x500.jpg";

          products.push({
            id: pId,
            name: rawName,
            slug: pSlug,
            price: "Price on Request",
            remoteImage: remoteImg
          });
        }
      }
    }

    console.log(`  -> Found ${products.length} products for ${catSlug}`);
    return products;
  } catch (err) {
    console.error(`  -> Failed for ${catSlug}: ${err.message}`);
    return [];
  }
}

async function main() {
  console.log("Starting full 36-category scraper execution...\n");

  const masterCategories = [];
  let grandTotalProducts = 0;

  for (const cat of categoriesList) {
    const scrapedProds = await scrapeCategory(cat.slug);

    // Get existing fallback products if scraping yielded 0 items
    const existingCat = existingDb.categories.find((c) => c.slug === cat.slug);
    const finalProds = (scrapedProds.length > 0 ? scrapedProds : (existingCat?.products || [])).map((p) => {
      const pSlug = slugify(p.name);
      return {
        id: p.id || Math.random().toString().slice(2, 12),
        name: p.name,
        slug: pSlug,
        category: cat.name,
        categorySlug: cat.slug,
        price: p.price || "Price on Request",
        currency: "INR",
        image: `/images/products/${cat.slug}/${pSlug}.jpg`,
        remoteImage: p.remoteImage || "https://5.imimg.com/data5/SELLER/Default/2023/8/338332508/KH/PB/NJ/15001533/methimez-5-methimazole-tablet-500x500.jpg",
        internalUrl: `/products/${cat.slug}/${pSlug}`,
        productUrl: `https://www.indiamart.com/medicospharma/${cat.slug}.html#${p.id || ''}`
      };
    });

    // Special cap for Pharmaceutical Tablets (50 items matching IndiaMART sidebar)
    let finalCap = finalProds;
    if (cat.slug === "pharmaceutical-tablets" && finalCap.length > 50) {
      finalCap = finalCap.slice(0, 50);
    }

    masterCategories.push({
      ...cat,
      description: cat.description || `Explore high-quality range of ${cat.name} supplied by Medico Pharma.`,
      productCount: finalCap.length,
      products: finalCap
    });

    grandTotalProducts += finalCap.length;

    // Polite delay between category requests (1.2 seconds)
    await new Promise((r) => setTimeout(r, 1200));
  }

  const masterDatabase = {
    company: {
      name: "Medicos Pharma",
      location: "Mumbai, Maharashtra, India",
      sourceUrl: "https://www.indiamart.com/medicospharma/products.html",
    },
    totalCategories: masterCategories.length,
    totalProducts: grandTotalProducts,
    categories: masterCategories,
  };

  fs.writeFileSync("./src/data/products.json", JSON.stringify(masterDatabase, null, 2), "utf-8");

  // Save updated categories.json
  const updatedCatList = masterCategories.map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    internalUrl: c.internalUrl,
    image: c.image,
    remoteImage: c.remoteImage,
    productCount: c.productCount,
  }));

  fs.writeFileSync("./src/data/categories.json", JSON.stringify(updatedCatList, null, 2), "utf-8");

  console.log(`\n==================================================`);
  console.log(`COMPLETED! All ${masterCategories.length} categories scraped & updated.`);
  console.log(`Total Products in Master DB: ${grandTotalProducts}`);
  console.log(`==================================================\n`);
}

main();
