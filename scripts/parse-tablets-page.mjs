import fs from "fs";

const text = fs.readFileSync("scratch_tablets.html", "utf-8");

// Try window.__COMPANY_DATA__
const match = text.match(/window\.__COMPANY_DATA__\s*=\s*({.*?});/s);
if (match) {
  try {
    const data = JSON.parse(match[1]);
    console.log("Found __COMPANY_DATA__!");
    if (data.catdata) {
      for (const c of data.catdata) {
        console.log(`Category: ${c.mcat_name} -> ${c.pdata ? c.pdata.length : 0} products`);
        if (c.pdata) {
          for (const p of c.pdata) {
            console.log(` - [${p.p_id || p.display_id}] ${p.p_name || p.name} | Price: ${p.price || p.price_formatted || 'N/A'}`);
          }
        }
      }
    }
  } catch (err) {
    console.error("JSON parse error:", err.message);
  }
} else {
  console.log("No window.__COMPANY_DATA__ found. Searching HTML structure...");
}

// Regex extraction from HTML
const itemRegex = /<div[^>]*class=["'][^"']*product[^"']*card[^"']*["'][^>]*>(.*?)<\/div>\s*<\/div>/gs;
const cardMatches = text.match(/<a[^>]+href=["']\/medicospharma\/[^"']*#(\d+)["'][^>]*>(.*?)<\/a>/gi);
console.log("HTML Link matches count:", cardMatches ? cardMatches.length : 0);
