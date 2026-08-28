import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'src', 'data');

const BASE_URL = 'https://www.indiamart.com';
const MAIN_URL = 'https://www.indiamart.com/medicospharma/products.html';

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};

async function fetchHtml(url) {
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.warn(`Failed to fetch ${url}: status ${res.status}`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return null;
  }
}

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractCompanyData(html) {
  const match = html.match(/window\.__COMPANY_DATA__\s*=\s*(\{[\s\S]*?\});\s*window\.__SPRITE_URL__/);
  if (match && match[1]) {
    try {
      return JSON.parse(match[1]);
    } catch (e) {
      console.error('Failed to parse window.__COMPANY_DATA__ JSON:', e.message);
    }
  }
  return null;
}

function parseCategoryPage(html, categoryName, categoryUrl) {
  const products = [];

  // Check if __COMPANY_DATA__ exists in category page
  const compData = extractCompanyData(html);
  
  // Also parse HTML product cards / sections
  // IndiaMART product sections often have id / class with product details
  // Let's parse product cards in horizontal / grid layout
  
  // Pattern 1: Table or list of products in category layout
  // Matching product blocks
  const productBlocks = html.split(/(?=<div[^>]*class="[^"]*(?:cat-prod-item|product-item|catindex-product-item|prd_card|prod-card|wh-card|card-body)[^"]*")/gi);
  
  // Also match JSON-LD scripts if any
  const jsonLdMatches = html.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
  for (const ld of jsonLdMatches) {
    try {
      const jsonStr = ld.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed)) {
        for (const item of parsed) {
          if (item['@type'] === 'Product') {
            products.push({
              name: cleanText(item.name),
              category: categoryName,
              price: item.offers ? cleanText(`${item.offers.priceCurrency || '₹'} ${item.offers.price || ''}`) : 'Price on Request',
              image: item.image || '',
              description: cleanText(item.description || ''),
              url: item.url || categoryUrl,
            });
          }
        }
      } else if (parsed['@type'] === 'Product') {
        products.push({
          name: cleanText(parsed.name),
          category: categoryName,
          price: parsed.offers ? cleanText(`${parsed.offers.priceCurrency || '₹'} ${parsed.offers.price || ''}`) : 'Price on Request',
          image: parsed.image || '',
          description: cleanText(parsed.description || ''),
          url: parsed.url || categoryUrl,
        });
      }
    } catch (e) {}
  }

  return products;
}

async function scrapeAll() {
  console.log('Fetching main products page:', MAIN_URL);
  const mainHtml = await fetchHtml(MAIN_URL);
  if (!mainHtml) {
    console.error('Could not fetch main products page');
    return;
  }

  const companyData = extractCompanyData(mainHtml);
  if (!companyData) {
    console.error('Could not find window.__COMPANY_DATA__ in main products page');
    return;
  }

  const rawCategories = companyData.categories || [];
  console.log(`Found ${rawCategories.length} categories in company data.`);

  // Category links mapping
  const categoryLinks = [
    { label: "Pharmaceutical Tablets", link: "/medicospharma/pharmaceutical-tablets.html" },
    { label: "Pharmaceutical Capsules", link: "/medicospharma/pharmaceutical-capsules.html" },
    { label: "Pharmaceutical Injection", link: "/medicospharma/pharmaceutical-injection.html" },
    { label: "Anti Depressants Medicines", link: "/medicospharma/anti-depressants-medicines.html" },
    { label: "Skin Care Products", link: "/medicospharma/skin-care-products.html" },
    { label: "Pharmaceutical Medicines", link: "/medicospharma/pharmaceutical-medicines.html" },
    { label: "Pharmaceutical Ointment", link: "/medicospharma/pharmaceutical-ointment.html" },
    { label: "Antibiotic Medicines", link: "/medicospharma/antibiotic-medicines.html" },
    { label: "Steroids Injections", link: "/medicospharma/steroids-injections.html" },
    { label: "Antimalarial Medicine", link: "/medicospharma/antimalarial-medicine.html" },
    { label: "Anti Cancer Medicine", link: "/medicospharma/anti-cancer-medicine.html" },
    { label: "Antidiabetic Medicine", link: "/medicospharma/antidiabetic-medicine.html" },
    { label: "Erectile Dysfunction Medicine", link: "/medicospharma/erectile-dysfunction-medicine.html" },
    { label: "Pain Relief Medicines", link: "/medicospharma/pain-relief-medicines.html" },
    { label: "Herbal Capsul", link: "/medicospharma/herbal-capsul.html" },
    { label: "Anti Psychotic Medicines", link: "/medicospharma/anti-psychotic-medicines.html" },
    { label: "Antiparasitic Medicine", link: "/medicospharma/antiparasitic-medicine.html" },
    { label: "Pharmaceutical Syrup", link: "/medicospharma/pharmaceutical-syrup.html" },
    { label: "Anti Fungal Medicine", link: "/medicospharma/anti-fungal-medicine.html" },
    { label: "Steroids Tablets", link: "/medicospharma/steroids-tablets.html" },
    { label: "Protein Powder", link: "/medicospharma/protein-powder.html" },
    { label: "Anti Acne Medicines", link: "/medicospharma/anti-acne-medicines.html" },
    { label: "Hypertension Medicine", link: "/medicospharma/hypertension-medicine.html" },
    { label: "Analgesic And Anti Inflammatory Drugs", link: "/medicospharma/analgesic-and-anti-inflammatory-drugs.html" },
    { label: "pharmaceutical cream", link: "/medicospharma/pharmaceutical-cream.html" },
    { label: "Foam Face Wash", link: "/medicospharma/foam-face-wash.html" },
    { label: "Variable Auto Transformer", link: "/medicospharma/variable-auto-transformer.html" },
    { label: "Minoxidil Topical Solution", link: "/medicospharma/minoxidil-topical-solution.html" },
    { label: "Check Shirt", link: "/medicospharma/check-shirt.html" },
    { label: "Womens Health", link: "/medicospharma/womens-health.html" },
    { label: "Hair Loss Medicine", link: "/medicospharma/hair-loss-medicine.html" },
    { label: "Eye Care Medicine", link: "/medicospharma/eye-care-medicine.html" },
    { label: "Testosterone Gel", link: "/medicospharma/testosterone-gel.html" },
    { label: "Anti Alcohol Drugs", link: "/medicospharma/anti-alcohol-drugs.html" },
    { label: "Pain Relief Gel", link: "/medicospharma/pain-relief-gel.html" },
    { label: "Other Products", link: "/medicospharma/other-products.html" }
  ];

  const allProducts = [];
  const categorizedData = [];

  for (const cat of rawCategories) {
    const catName = cat.name;
    const linkObj = categoryLinks.find(c => c.label.toLowerCase() === catName.toLowerCase()) || { link: `/medicospharma/${catName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.html` };
    const catUrl = `${BASE_URL}${linkObj.link}`;

    console.log(`Processing Category: "${catName}" -> ${catUrl}`);
    
    // Process products already in company data
    const catProducts = [];
    if (cat.products && Array.isArray(cat.products)) {
      for (const prod of cat.products) {
        const prodId = prod.display_id || prod.id;
        const img = prod.img125 || prod.image || '';
        // High quality image replacement if available (replace 250x250 with 500x500)
        const highResImg = img.replace('-250x250', '-500x500').replace('-125x125', '-500x500');

        const productObj = {
          id: String(prodId),
          name: cleanText(prod.name),
          category: catName,
          price: "Price on Request", // Default for B2B wholesale medicines
          currency: "INR",
          image: highResImg || img,
          thumbnail: img,
          productUrl: `${catUrl}#${prodId}`,
          mcatId: prod.mcatId || null,
          catId: prod.catId || null
        };
        catProducts.push(productObj);
        allProducts.push(productObj);
      }
    }

    categorizedData.push({
      categoryName: catName,
      slug: linkObj.link.replace('/medicospharma/', '').replace('.html', ''),
      categoryUrl: catUrl,
      productCount: catProducts.length,
      products: catProducts
    });
  }

  // Create data directory if it doesn't exist
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const summary = {
    company: "Medicos Pharma",
    source: MAIN_URL,
    lastUpdated: new Date().toISOString(),
    totalCategories: categorizedData.length,
    totalProducts: allProducts.length,
    categories: categorizedData
  };

  // Write master products.json
  const productsJsonPath = path.join(DATA_DIR, 'products.json');
  fs.writeFileSync(productsJsonPath, JSON.stringify(summary, null, 2), 'utf-8');
  console.log(`\nSuccessfully generated ${productsJsonPath}`);
  console.log(`Total Categories: ${summary.totalCategories}`);
  console.log(`Total Products: ${summary.totalProducts}`);

  // Write flat products list
  const flatProductsPath = path.join(DATA_DIR, 'products-flat.json');
  fs.writeFileSync(flatProductsPath, JSON.stringify(allProducts, null, 2), 'utf-8');
  console.log(`Successfully generated ${flatProductsPath}`);

  // Write categories metadata list
  const categoriesList = categorizedData.map(c => ({
    name: c.categoryName,
    slug: c.slug,
    url: c.categoryUrl,
    productCount: c.productCount,
  }));
  const categoriesJsonPath = path.join(DATA_DIR, 'categories.json');
  fs.writeFileSync(categoriesJsonPath, JSON.stringify(categoriesList, null, 2), 'utf-8');
  console.log(`Successfully generated ${categoriesJsonPath}`);
}

scrapeAll().catch(console.error);
