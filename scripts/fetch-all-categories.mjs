import fs from "fs";
import path from "path";

// Read existing categories
const categoriesFile = path.resolve("./src/data/categories.json");
const categories = JSON.parse(fs.readFileSync(categoriesFile, "utf-8"));

console.log(`Loaded ${categories.length} categories.`);

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function scrapeCategory(cat) {
  const url = `https://www.indiamart.com/medicospharma/${cat.slug}.html`;
  console.log(`Fetching ${url}...`);

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) {
      console.log(`Failed to fetch ${url}: ${res.status}`);
      return [];
    }

    const html = await res.text();

    // Check for __COMPANY_DATA__
    const match = html.match(/window\.__COMPANY_DATA__\s*=\s*({.*?});/s);
    const products = [];

    if (match) {
      try {
        const data = JSON.parse(match[1]);
        if (data.catdata && Array.isArray(data.catdata)) {
          for (const c of data.catdata) {
            if (c.mcat_name?.toLowerCase() === cat.name?.toLowerCase() || slugify(c.mcat_name || "") === cat.slug) {
              if (c.pdata && Array.isArray(c.pdata)) {
                for (const p of c.pdata) {
                  const pName = p.p_name || p.title || p.name;
                  if (!pName) continue;

                  const pId = String(p.p_id || p.display_id || p.id || Math.random().toString().slice(2, 12));
                  const pSlug = slugify(pName);

                  let imgUrl = p.img_url || p.image || p.img || "";
                  if (imgUrl.startsWith("//")) imgUrl = "https:" + imgUrl;
                  const highResImg = imgUrl ? imgUrl.replace(/-\d+x\d+/, "-500x500") : "";

                  let priceStr = "Price on Request";
                  if (p.price) {
                    priceStr = `₹ ${p.price}`;
                    if (p.unit) priceStr += `/${p.unit}`;
                  } else if (p.price_formatted) {
                    priceStr = p.price_formatted;
                  }

                  products.push({
                    id: pId,
                    name: pName,
                    slug: pSlug,
                    category: cat.name,
                    categorySlug: cat.slug,
                    price: priceStr,
                    currency: "INR",
                    image: `/images/products/${cat.slug}/${pSlug}.jpg`,
                    remoteImage: highResImg || imgUrl,
                    internalUrl: `/products/${cat.slug}/${pSlug}`,
                    productUrl: `https://www.indiamart.com/medicospharma/${cat.slug}.html#${pId}`,
                  });
                }
              }
            }
          }
        }
      } catch (err) {
        console.error("Error parsing JSON:", err.message);
      }
    }

    // HTML regex fallback if JSON didn't catch all
    if (products.length === 0) {
      // Find product blocks in HTML
      const itemRegex = /<a[^>]+href=["']([^"']*#(\d+))["'][^>]*>(.*?)<\/a>/gs;
      // Also look for images and prices
      const prodRegex = /href=["']\/medicospharma\/[^"']*#(\d+)["'][^>]*>(.*?)<\/a>/gi;
      
      // Extract from product cards in HTML
      const cardRegex = /<div[^>]*class=["'][^"']*product-item[^"']*["'][^>]*>(.*?)<\/div>\s*<\/div>/gs;
      let cardMatch;
      while ((cardMatch = cardRegex.exec(html)) !== null) {
        const cardHtml = cardMatch[1];
        const idMatch = cardHtml.match(/#(\d+)/);
        const nameMatch = cardHtml.match(/alt=["']([^"']+)["']/i) || cardHtml.match(/class=["'][^"']*product-name[^"']*["'][^>]*>(.*?)<\/a>/s);
        const imgMatch = cardHtml.match(/src=["'](https?:\/\/[^"']+)["']/i);
        const priceMatch = cardHtml.match(/₹\s*[\d,]+(?:\/[a-zA-Z]+)?/i);

        if (nameMatch) {
          const rawName = nameMatch[1].replace(/<[^>]+>/g, "").trim();
          const pId = idMatch ? idMatch[1] : Math.random().toString().slice(2, 12);
          const pSlug = slugify(rawName);
          const imgUrl = imgMatch ? imgMatch[1] : "";
          const highRes = imgUrl ? imgUrl.replace(/-\d+x\d+/, "-500x500") : "";

          products.push({
            id: pId,
            name: rawName,
            slug: pSlug,
            category: cat.name,
            categorySlug: cat.slug,
            price: priceMatch ? priceMatch[0] : "Price on Request",
            currency: "INR",
            image: `/images/products/${cat.slug}/${pSlug}.jpg`,
            remoteImage: highRes || imgUrl,
            internalUrl: `/products/${cat.slug}/${pSlug}`,
            productUrl: `https://www.indiamart.com/medicospharma/${cat.slug}.html#${pId}`,
          });
        }
      }
    }

    console.log(`Found ${products.length} products for category: ${cat.name}`);
    return products;
  } catch (err) {
    console.error(`Error scraping ${cat.name}:`, err.message);
    return [];
  }
}

async function main() {
  const allCategoriesData = [];
  let totalProductsCount = 0;

  for (const cat of categories) {
    const prods = await scrapeCategory(cat);
    
    // Deduplicate products by ID or name
    const uniqueProds = [];
    const seen = new Set();
    for (const p of prods) {
      const key = `${p.id}-${p.name.toLowerCase()}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueProds.push(p);
      }
    }

    totalProductsCount += uniqueProds.length;
    allCategoriesData.push({
      ...cat,
      description: cat.description || `Browse our collection of ${cat.name} from Medico Pharma.`,
      productCount: uniqueProds.length,
      products: uniqueProds,
    });

    // Pause briefly to be polite to server
    await new Promise((r) => setTimeout(r, 200));
  }

  const finalDatabase = {
    company: {
      name: "Medicos Pharma",
      location: "Mumbai, Maharashtra, India",
      sourceUrl: "https://www.indiamart.com/medicospharma/products.html",
    },
    totalCategories: allCategoriesData.length,
    totalProducts: totalProductsCount,
    categories: allCategoriesData,
  };

  fs.writeFileSync(
    "./src/data/products.json",
    JSON.stringify(finalDatabase, null, 2),
    "utf-8"
  );

  // Also update categories.json with new product counts
  const categoriesList = allCategoriesData.map((c) => ({
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
    JSON.stringify(categoriesList, null, 2),
    "utf-8"
  );

  console.log(`Done! Saved ${totalProductsCount} products across ${allCategoriesData.length} categories.`);
}

main();
