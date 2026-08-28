import fs from "fs";
import path from "path";

// Read products.json
const dbPath = "./src/data/products.json";
const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

const publicDir = "./public";

// Helper to create directory if not exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function downloadFile(url, destPath) {
  if (fs.existsSync(destPath)) {
    // Already downloaded
    return true;
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!res.ok) {
      return false;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    ensureDir(path.dirname(destPath));
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    return false;
  }
}

async function main() {
  console.log("Starting image downloader...");

  let totalDownloaded = 0;
  let totalSkipped = 0;
  let totalFailed = 0;

  for (const cat of db.categories) {
    // 1. Category Image
    if (cat.remoteImage) {
      const catDest = path.join(publicDir, cat.image);
      const ok = await downloadFile(cat.remoteImage, catDest);
      if (ok) totalDownloaded++;
    }

    // 2. Product Images
    for (const prod of cat.products || []) {
      if (prod.remoteImage) {
        const prodDest = path.join(publicDir, prod.image);
        if (fs.existsSync(prodDest)) {
          totalSkipped++;
          continue;
        }

        console.log(`Downloading: [${cat.slug}] ${prod.name}...`);
        const ok = await downloadFile(prod.remoteImage, prodDest);
        if (ok) {
          totalDownloaded++;
        } else {
          totalFailed++;
        }

        // Small delay to avoid rate limiting
        await new Promise((r) => setTimeout(r, 100));
      }
    }
  }

  console.log(`\nFinished! Downloaded: ${totalDownloaded}, Skipped: ${totalSkipped}, Failed: ${totalFailed}`);
}

main();
