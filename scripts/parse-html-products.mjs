import fs from "fs";
import path from "path";

const htmlPath = "C:/Users/admin/.gemini/antigravity/brain/3822d78c-87ca-4375-b3d1-f83022b2a4c2/scratch/products_page.html";
const html = fs.readFileSync(htmlPath, "utf-8");

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Find all category cards in HTML
const catCardRegex = /<div[^>]*class=["'][^"']*catindex-category-card[^"']*["'][^>]*>(.*?)<\/div>\s*<\/div>\s*<\/div>/gs;

const productsByCategory = {};
let categoryCardMatch;

// Alternative regex: extract product items directly
const itemRegex = /<div[^>]*class=["'][^"']*catindex-product-item[^"']*["'][^>]*>(.*?)<\/h3><\/div>/gs;
let match;
const allExtracted = [];

while ((match = itemRegex.exec(html)) !== null) {
  const itemHtml = match[1];

  // Link & ID & Category Slug
  const linkMatch = itemHtml.match(/href=["']\/medicospharma\/([^"']+\.html)#(\d+)["']/i);
  // Image
  const imgMatch = itemHtml.match(/src=["'](https?:\/\/[^"']+)["']/i) || itemHtml.match(/data-dataimg=["'](https?:\/\/[^"']+)["']/i);
  // Name
  const altMatch = itemHtml.match(/alt=["']([^"']+)["']/i);
  const nameLinkMatch = itemHtml.match(/class=["'][^"']*catindex-product-name[^"']*["'][^>]*><a[^>]*>(.*?)<\/a>/s);

  let rawName = "";
  if (altMatch && altMatch[1].trim()) {
    rawName = altMatch[1].trim();
  } else if (nameLinkMatch && nameLinkMatch[1].trim()) {
    rawName = nameLinkMatch[1].replace(/<[^>]+>/g, "").trim();
  }

  if (linkMatch && rawName) {
    const catFile = linkMatch[1]; // e.g. "pharmaceutical-tablets.html"
    const catSlug = catFile.replace(".html", "");
    const pId = linkMatch[2];
    const imgUrl = imgMatch ? imgMatch[1] : "";
    const highResImg = imgUrl ? imgUrl.replace(/-\d+x\d+/, "-500x500") : "";

    allExtracted.push({
      id: pId,
      name: rawName,
      catSlug: catSlug,
      imgUrl: highResImg || imgUrl,
    });
  }
}

console.log(`Parsed ${allExtracted.length} products from HTML!`);

// Group by catSlug
const grouped = {};
for (const item of allExtracted) {
  if (!grouped[item.catSlug]) grouped[item.catSlug] = [];
  // deduplicate
  if (!grouped[item.catSlug].some((p) => p.id === item.id)) {
    grouped[item.catSlug].push(item);
  }
}

for (const [cat, items] of Object.entries(grouped)) {
  console.log(`${cat}: ${items.length} products`);
}
