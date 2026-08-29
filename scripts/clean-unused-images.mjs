import fs from "fs";
import path from "path";

// Read active image paths from database
const productsDb = JSON.parse(fs.readFileSync("./src/data/products.json", "utf-8"));
const categoriesDb = JSON.parse(fs.readFileSync("./src/data/categories.json", "utf-8"));

const activeImages = new Set();

// Collect from products
productsDb.categories.forEach((cat) => {
  if (cat.image) activeImages.add(path.normalize(cat.image.replace(/^\//, "public/")));
  cat.products.forEach((p) => {
    if (p.image) activeImages.add(path.normalize(p.image.replace(/^\//, "public/")));
  });
});

// Collect from categories
categoriesDb.forEach((cat) => {
  if (cat.image) activeImages.add(path.normalize(cat.image.replace(/^\//, "public/")));
});

console.log(`Active images referenced in DB: ${activeImages.size}`);

// Scan public/images/products directory recursively
const productsImgDir = path.resolve("public/images/products");

let deletedCount = 0;
let keptCount = 0;
let totalBytesSaved = 0;

function scanAndDelete(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = path.relative(process.cwd(), fullPath);

    if (entry.isDirectory()) {
      scanAndDelete(fullPath);
      // Remove empty directory if clean
      try {
        if (fs.readdirSync(fullPath).length === 0) {
          fs.rmdirSync(fullPath);
        }
      } catch (e) {}
    } else if (entry.isFile()) {
      const normalizedRelPath = path.normalize(relPath);
      // Normalize slashes for comparison
      const normalizedPathLower = normalizedRelPath.toLowerCase().replace(/\\/g, "/");

      let isUsed = false;
      for (const activeImg of activeImages) {
        if (path.normalize(activeImg).toLowerCase().replace(/\\/g, "/") === normalizedPathLower) {
          isUsed = true;
          break;
        }
      }

      if (!isUsed) {
        const stats = fs.statSync(fullPath);
        totalBytesSaved += stats.size;
        fs.unlinkSync(fullPath);
        deletedCount++;
        console.log(`[DELETED UNUSED] ${relPath} (${(stats.size / 1024).toFixed(1)} KB)`);
      } else {
        keptCount++;
      }
    }
  }
}

console.log("\n--- Cleaning Unused Images ---\n");
scanAndDelete(productsImgDir);

console.log(`\n==================================================`);
console.log(`Kept Active Images: ${keptCount}`);
console.log(`Deleted Unused Images: ${deletedCount}`);
console.log(`Total Disk Space Saved: ${(totalBytesSaved / (1024 * 1024)).toFixed(2)} MB`);
console.log(`==================================================\n`);
