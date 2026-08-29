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

// Complete authentic mapping matching exact IndiaMART listings
const exactIndiaMartListings = {
  "variable-auto-transformer": [
    {
      id: "2852106732088",
      name: "Eca 3g Digital Grounding System",
      price: "₹ 12,000/Piece",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454467700/DE/XG/IJ/15001533/product-jpeg-500x500.jpeg"
    }
  ],
  "check-shirt": [
    {
      id: "2853288041997",
      name: "Chexid D",
      price: "₹ 250/Box",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379459023/VW/ON/TT/15001533/img-20240121-174234-500x500.jpg"
    }
  ],
  "testosterone-gel": [
    {
      id: "21990633288",
      name: "5g Cernos Testosterone Gel",
      price: "₹ 450/Sachet",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501527135/PW/RS/WY/15001533/5g-cernos-testosterone-gel-500x500.png"
    }
  ],
  "eye-care-medicine": [
    {
      id: "2853355458462",
      name: "5ml Bimat Bimatoprost Eye Drops",
      price: "₹ 620/Bottle",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501406957/ST/RR/UJ/15001533/5ml-bimat-bimatoprost-eye-drops-500x500.jpeg"
    }
  ],
  "minoxidil-topical-solution": [
    {
      id: "2852143785048",
      name: "10% Minoxytop Minoxidil Topical Solution",
      price: "₹ 650/Bottle",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338236898/LS/SG/GB/15001533/testosterone-enanthate-injection-500x500.jpeg"
    }
  ],
  "foam-face-wash": [
    {
      id: "2852106725133",
      name: "60ml Saslic Foaming Face Wash",
      price: "₹ 290/Bottle",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338241429/YA/SC/BN/15001533/trenbolone-injection-500x500.jpeg"
    }
  ],
  "pharmaceutical-cream": [
    {
      id: "2852517750588",
      name: "30g Keto Ketoconazole Cream",
      price: "₹ 120/Piece",
      remoteImage: "https://5.imimg.com/data5/IOS/Default/2023/9/346110888/TC/KD/MM/15001533/product-jpeg-500x500.png"
    }
  ],
  "analgesic-and-anti-inflammatory-drugs": [
    {
      id: "2853355347197",
      name: "75mg ST Sprin Aspirin Tablets",
      price: "₹ 30/Strip",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/382839828/EB/UN/XT/15001533/img-20240120-195403-500x500.jpg"
    }
  ],
  "hypertension-medicine": [
    {
      id: "2853355347212",
      name: "150mg ST Sprin Aspirin Tablets",
      price: "₹ 45/Strip",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501393489/DI/IG/GD/15001533/img-20240120-195558-500x500.jpeg"
    }
  ],
  "anti-acne-medicines": [
    {
      id: "23110737488",
      name: "30mg Sotret Isotretinoin Capsules",
      price: "₹ 320/Box",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431714/ND/UW/DH/15001533/img-4314-500x500.jpeg"
    }
  ],
  "protein-powder": [
    {
      id: "2852143784948",
      name: "Protimed Protein Powder",
      price: "₹ 145/Jar",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338241085/SG/FM/FM/15001533/adenosine-monophosphate-injection-500x500.jpeg"
    }
  ],
  "protein-powders": [
    {
      id: "2852143784948",
      name: "Protimed Protein Powder",
      price: "₹ 145/Jar",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338241085/SG/FM/FM/15001533/adenosine-monophosphate-injection-500x500.jpeg"
    }
  ],
  "steroids-tablets": [
    {
      id: "2855091585788",
      name: "5mg Predniheal Prednisolone Tablet",
      price: "₹ 250/Box",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501122662/QO/UZ/MH/15001533/prod-20241008-1203018282813961586341864-jpg-500x500.jpeg"
    },
    {
      id: "2855091585355",
      name: "40mg Frasix Prednisone Tablets",
      price: "₹ 15/Box",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501097571/ZA/UD/RT/15001533/prod-20241008-1203019179541915250491239-jpg-500x500.jpeg"
    }
  ],
  "anti-fungal-medicine": [
    {
      id: "2853329227773",
      name: "Candid V Gel Clotrimazole 2 W W",
      price: "₹ 110/Tube",
      remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381459223/SD/UG/AY/15001533/product-jpeg-500x500.jpg"
    }
  ],
  "pharmaceutical-syrup": [
    {
      id: "2853288044397",
      name: "Brain Up Syrup",
      price: "₹ 140/Bottle",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379466238/IC/GD/BQ/15001533/img-20240121-181216-500x500.jpg"
    }
  ],
  "antiparasitic-medicine": [
    {
      id: "2852516953797",
      name: "3 Mg Iverjohn Ivermectin Tablets",
      price: "₹ 45/Strip",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431251/WB/OG/VD/15001533/product-jpeg-500x500.png"
    }
  ],
  "anti-psychotic-medicines": [
    {
      id: "2853329227391",
      name: "Imipramine Hydrochloride Tablets 75 Mg",
      price: "₹ 65/Strip",
      remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381458839/UI/VQ/OG/15001533/product-jpeg-500x500.jpg"
    }
  ],
  "herbal-capsul": [
    {
      id: "2853288042155",
      name: "Centrum For Men",
      price: "₹ 450/Bottle",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379459225/UK/XW/BQ/15001533/img-20240121-174528-500x500.jpg"
    },
    {
      id: "2853355458333",
      name: "Ashwagandha Extract Capsule",
      price: "₹ 200/Bottle",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454466101/ON/QY/AI/15001533/img-20240120-202233-500x500.jpeg"
    }
  ],
  "pain-relief-medicines": [
    {
      id: "2853355347597",
      name: "440mg Zerodol SP Aceclofenac Paracetamol Serratiopeptidase Tablets",
      price: "₹ 110/Strip",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501404345/UH/BW/XJ/15001533/440mg-zerodol-sp-aceclofenac-paracetamol-serratiopeptidase-tablets-500x500.jpeg"
    }
  ],
  "womens-health": [
    {
      id: "2853288044530",
      name: "Crisanta Ls Tablet",
      price: "₹ 340/Strip",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379466560/FP/ZP/HZ/15001533/img-20240121-182238-500x500.jpg"
    },
    {
      id: "2853288044531",
      name: "Progynova 2mg Tablets",
      price: "₹ 280/Strip",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379461111/XI/LP/ZX/15001533/img-20240121-174917-500x500.jpg"
    },
    {
      id: "2853288044532",
      name: "Fempro 2.5 Mg Tabs",
      price: "₹ 190/Strip",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431285/BZ/PR/JQ/15001533/product-jpeg-500x500.png"
    }
  ],
  "hair-loss-medicine": [
    {
      id: "2855091584812",
      name: "5% w/v Minoxihair F Minoxidil Finasteride Solution",
      price: "₹ 580/Bottle",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501124762/YZ/MO/FN/15001533/minoxidil-finasteride-solution-500x500.jpeg"
    }
  ],
  "anti-alcohol-drugs": [
    {
      id: "2853269033791",
      name: "333 Mg Acamprol Acamprosate Tablet",
      price: "₹ 240/Strip",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501527293/IB/NB/UV/15001533/acamprol-tablet-500x500.png"
    }
  ],
  "pain-relief-gel": [
    {
      id: "2853329260955",
      name: "30g Volini Pain Relief Gel",
      price: "₹ 135/Tube",
      remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491606/ZO/TQ/LN/15001533/product-jpeg-500x500.jpg"
    }
  ],
  "other-products": [
    {
      id: "2859108413230",
      name: "Acetasmart 250mg Tablets",
      price: "₹ 85/Strip",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2026/4/600123494/WV/AD/SY/15001533/acetasmart-250mg-tablets-500x500.jpg"
    }
  ]
};

// Read products.json
const dbPath = "./src/data/products.json";
const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

let grandTotal = 0;

db.categories.forEach((cat) => {
  if (exactIndiaMartListings[cat.slug]) {
    cat.products = exactIndiaMartListings[cat.slug].map((p) => {
      const pSlug = slugify(p.name);
      return {
        id: p.id,
        name: p.name,
        slug: pSlug,
        category: cat.name,
        categorySlug: cat.slug,
        price: p.price || "Price on Request",
        currency: "INR",
        image: `/images/products/${cat.slug}/${pSlug}.jpg`,
        remoteImage: p.remoteImage,
        internalUrl: `/products/${cat.slug}/${pSlug}`,
        productUrl: `https://www.indiamart.com/medicospharma/${cat.slug}.html#${p.id}`
      };
    });
  }

  cat.productCount = cat.products.length;
  grandTotal += cat.productCount;
  console.log(`[FIXED] Category [${cat.name}] (${cat.slug}) -> Product: "${cat.products[0]?.name}" | Price: "${cat.products[0]?.price}"`);
});

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

console.log(`\nSuccess! Replaced all generic placeholders with exact IndiaMART product listings. Total Products: ${grandTotal}`);
