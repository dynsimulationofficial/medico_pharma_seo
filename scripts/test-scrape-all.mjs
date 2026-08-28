import fs from "fs";
import path from "path";

const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
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

const categoriesList = JSON.parse(fs.readFileSync("./src/data/categories.json", "utf-8"));

async function fetchCategoryPage(catSlug) {
  const url = `https://www.indiamart.com/medicospharma/${catSlug}.html`;
  console.log(`Fetching ${catSlug}...`);
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.log(`Status ${res.status} for ${catSlug}`);
      return [];
    }
    const html = await res.text();
    
    // Extract products from HTML
    const linkRegex = /href=["']\/medicospharma\/[^"']*#(\d+)["'][^>]*>(.*?)<\/a>/gi;
    const imgRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*alt=["']([^"']+)["']/gi;
    
    // Extract image map
    const imageMap = {};
    let imgM;
    while ((imgM = imgRegex.exec(html)) !== null) {
      const [_, imgUrl, altText] = imgM;
      imageMap[slugify(altText)] = imgUrl.replace(/-\d+x\d+/, "-500x500");
    }

    const products = [];
    const seen = new Set();
    let m;
    while ((m = linkRegex.exec(html)) !== null) {
      const [_, pId, innerText] = m;
      const rawName = innerText.replace(/<[^>]+>/g, "").trim();
      if (rawName && !rawName.toLowerCase().includes("view") && !rawName.toLowerCase().includes("more")) {
        const pSlug = slugify(rawName);
        if (!seen.has(pId)) {
          seen.add(pId);
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
    return products;
  } catch (err) {
    console.error(`Error for ${catSlug}:`, err.message);
    return [];
  }
}

async function main() {
  const masterMap = {};
  let totalCount = 0;

  for (const cat of categoriesList) {
    const prods = await fetchCategoryPage(cat.slug);
    console.log(`Fetched ${prods.length} products for ${cat.name}`);
    masterMap[cat.slug] = prods;
    totalCount += prods.length;
    // Delay 1 second between requests to avoid rate limits
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\nTotal Scraped Products across all categories: ${totalCount}`);
}

// Test first 5 categories
async function testRun() {
  for (let i = 0; i < 5; i++) {
    const cat = categoriesList[i];
    const prods = await fetchCategoryPage(cat.slug);
    console.log(`${cat.name} -> ${prods.length} products`);
    await new Promise(r => setTimeout(r, 800));
  }
}

testRun();
