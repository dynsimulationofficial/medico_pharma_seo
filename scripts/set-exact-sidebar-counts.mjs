import fs from "fs";
import path from "path";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Read products.json
const dbPath = "./src/data/products.json";
const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

// 1. Pharmaceutical Injection (Exact 12 products from User Screenshot #1)
const injectionProducts = [
  { id: "2853355347933", name: "100mg Vitamin C Ascorbic Acid Injection", price: "₹ 1,000/Box", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501404744/LB/ZE/LF/15001533/100mg-vitamin-c-ascorbic-acid-injection-500x500.jpg" },
  { id: "2853329227233", name: "Imipramine 50 Mg", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381458996/YE/HR/NI/15001533/product-jpeg-500x500.jpg" },
  { id: "2853288044791", name: "Vilitra 10mg Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379466836/BB/KW/RD/15001533/img-20240121-183039-500x500.jpg" },
  { id: "2853329227988", name: "Retin A 0.1", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381490719/GA/SJ/IE/15001533/product-jpeg-500x500.jpg" },
  { id: "2853288042548", name: "Progynova 2mg Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379461111/XI/LP/ZX/15001533/img-20240121-174917-500x500.jpg" },
  { id: "2852516591533", name: "ZyhCG Human Chorionic Gonadotropin Injection", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/IOS/Default/2023/9/346073808/ON/LU/VE/15001533/product-jpeg-500x500.png" },
  { id: "2853329227012", name: "Danabol Tablet", price: "₹ 1,500/Box", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338330565/LG/DG/FU/15001533/stanozolol-tablets-and-capsules-500x500.jpeg" },
  { id: "2852143785049", name: "Tugain 5% Solution", price: "₹ 1,000/Unit", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338236898/LS/SG/GB/15001533/testosterone-enanthate-injection-500x500.jpeg" },
  { id: "26016481573", name: "Troikaa Mephentermine Sulphate Injection", price: "₹ 300/Box", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CE/GB/FS/15001533/m-termin-1-500x500.jpg" },
  { id: "2853288043992", name: "Trazodone 50mg", price: "₹ 100/Stripe", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381458996/YE/HR/NI/15001533/product-jpeg-500x500.jpg" },
  { id: "2853288043993", name: "Doxepin 25 Mg Capsules", price: "₹ 125/Stripe", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379462205/EF/KC/SI/15001533/img-20240121-180149-500x500.jpg" },
  { id: "2853329227013", name: "Primobolan Depot", price: "₹ 2,200/Box", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501393148/TU/PR/OP/15001533/testosterone-propionate-500x500.jpeg" }
];

// Update Pharmaceutical Injection
const injCat = db.categories.find((c) => c.slug === "pharmaceutical-injection");
if (injCat) {
  injCat.products = injectionProducts.map((p) => {
    const pSlug = slugify(p.name);
    return {
      id: p.id,
      name: p.name,
      slug: pSlug,
      category: "Pharmaceutical Injection",
      categorySlug: "pharmaceutical-injection",
      price: p.price,
      currency: "INR",
      image: `/images/products/pharmaceutical-injection/${pSlug}.jpg`,
      remoteImage: p.remoteImage,
      internalUrl: `/products/pharmaceutical-injection/${pSlug}`,
      productUrl: `https://www.indiamart.com/medicospharma/pharmaceutical-injection.html#${p.id}`
    };
  });
  injCat.productCount = injCat.products.length;
}

// 2. Pharmaceutical Tablets (Cap/Trim to EXACTLY 50 products matching User Screenshot #2 "50 products available")
const tabletsCat = db.categories.find((c) => c.slug === "pharmaceutical-tablets");
if (tabletsCat) {
  // Update exact prices from Screenshot #2 for top items
  const priceUpdates = {
    "5mg-methimez-methimazole-tablet": "₹ 156/Box",
    "150mg-buproban-bupropion-hydrochloride-extended-release-tablets": "₹ 130/Box",
    "10-mg-methimez-methimazole-tablet": "₹ 203/Box",
    "5mg-s-citadep-escitalopram-oxalate-tablets": "₹ 456/Stripe",
    "400mg-qutipin-sr-quetiapine-prolonged-release-tablets": "₹ 300/Stripe",
    "50mg-ocivox-fluvoxamine-maleate-tablets": "₹ 1,506/Box",
    "tadapox-tadalafil-dapoxetine-tablets": "₹ 200/Stripe"
  };

  tabletsCat.products.forEach((p) => {
    if (priceUpdates[p.slug]) {
      p.price = priceUpdates[p.slug];
    }
  });

  // Cap at 50 products
  if (tabletsCat.products.length > 50) {
    tabletsCat.products = tabletsCat.products.slice(0, 50);
  }
  tabletsCat.productCount = 50;
}

// Recalculate grand total
let grandTotal = 0;
db.categories.forEach((c) => (grandTotal += c.products.length));
db.totalProducts = grandTotal;

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");

// Also update categories.json
const cleanCatList = db.categories.map((c) => ({
  id: c.id,
  name: c.name,
  slug: c.slug,
  internalUrl: c.internalUrl,
  image: c.image,
  remoteImage: c.remoteImage,
  productCount: c.productCount
}));

fs.writeFileSync("./src/data/categories.json", JSON.stringify(cleanCatList, null, 2), "utf-8");

console.log(`\nUpdated Pharmaceutical Injection to EXACTLY 12 products.`);
console.log(`Updated Pharmaceutical Tablets to EXACTLY 50 products (with exact prices from Screenshot #2).`);
console.log(`Total Products in Master DB: ${grandTotal}`);
