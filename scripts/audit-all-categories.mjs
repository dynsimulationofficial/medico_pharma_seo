import fs from "fs";

const dbPath = "./src/data/products.json";
const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

console.log("=== COMPREHENSIVE CATEGORY AUDIT REPORT ===\n");
console.log(`Total Categories: ${db.categories.length}`);
console.log(`Total Products: ${db.totalProducts}\n`);

let emptyCount = 0;
let singleCount = 0;
let multiCount = 0;

db.categories.forEach((cat, index) => {
  const pCount = cat.products ? cat.products.length : 0;
  if (pCount === 0) emptyCount++;
  else if (pCount === 1) singleCount++;
  else multiCount++;

  console.log(`${index + 1}. [${cat.name}] (slug: ${cat.slug}) -> ${pCount} products`);
  if (cat.products && cat.products.length > 0) {
    cat.products.forEach((p, pIdx) => {
      console.log(`    ${pIdx + 1}. [ID: ${p.id}] ${p.name} | Price: ${p.price || 'N/A'} | Img: ${p.image}`);
    });
  } else {
    console.log(`    ⚠️ WARNING: ZERO PRODUCTS IN THIS CATEGORY!`);
  }
  console.log("--------------------------------------------------");
});

console.log(`\nAUDIT SUMMARY:`);
console.log(`Categories with Multi-products (>1): ${multiCount}`);
console.log(`Categories with Single-product (1): ${singleCount}`);
console.log(`Categories with Empty products (0): ${emptyCount}`);
