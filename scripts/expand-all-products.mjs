import fs from "fs";
import path from "path";

// Read products.json
const dbPath = "./src/data/products.json";
const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Full rich product dictionary for categories that need extra products
const categoryExtraProducts = {
  "protein-powder": [
    { id: "2852143784948", name: "Protimed Protein Powder", price: "₹ 450/Tin", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338241085/SG/FM/FM/15001533/adenosine-monophosphate-injection-500x500.jpeg" },
    { id: "2852143784949", name: "Whey Protein Concentrate 80%", price: "₹ 1,200/Kg", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454466101/ON/QY/AI/15001533/img-20240120-202233-500x500.jpeg" },
    { id: "2852143784950", name: "Plant Based Vegan Protein Powder", price: "₹ 850/Jar", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379459225/UK/XW/BQ/15001533/img-20240121-174528-500x500.jpg" },
    { id: "2852143784951", name: "Custom B2B Nutritional Protein Powder", price: "₹ 650/Jar", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338241085/SG/FM/FM/15001533/adenosine-monophosphate-injection-500x500.jpeg" }
  ],
  "anti-acne-medicines": [
    { id: "23110737488", name: "30mg Sotret Isotretinoin Capsules", price: "₹ 320/Box", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431714/ND/UW/DH/15001533/img-4314-500x500.jpeg" },
    { id: "23110737489", name: "20mg Sotret Isotretinoin Capsules", price: "₹ 240/Box", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491453/VH/AS/SA/15001533/product-jpeg-500x500.jpg" },
    { id: "23110737490", name: "10mg Isotretinoin Soft Gelatin Capsules", price: "₹ 180/Box", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491873/GL/TB/UA/15001533/product-jpeg-500x500.jpg" },
    { id: "23110737491", name: "Adapalene Benzoyl Peroxide Gel", price: "₹ 210/Tube", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338240720/WC/AX/MN/15001533/steroid-500x500.jpeg" }
  ],
  "hypertension-medicine": [
    { id: "2853355347212", name: "150mg ST Sprin Aspirin Tablets", price: "₹ 45/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501393489/DI/IG/GD/15001533/img-20240120-195558-500x500.jpeg" },
    { id: "2853355347213", name: "5mg Amloheal Amlodipine Tablets", price: "₹ 35/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2026/4/600123553/GE/VZ/IF/15001533/amloheal-5mg-tablets-500x500.jpg" },
    { id: "2853355347214", name: "50mg Atenheal Atenolol Tablets", price: "₹ 40/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454467879/HP/EB/AO/15001533/product-jpeg-500x500.jpeg" },
    { id: "2853355347215", name: "40mg Telmisartan Tablets IP", price: "₹ 55/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501393489/DI/IG/GD/15001533/img-20240120-195558-500x500.jpeg" }
  ],
  "analgesic-and-anti-inflammatory-drugs": [
    { id: "2853355347197", name: "75mg ST Sprin Aspirin Tablets", price: "₹ 30/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/382839828/EB/UN/XT/15001533/img-20240120-195403-500x500.jpg" },
    { id: "2853355347198", name: "Diclofenac Potassium Paracetamol Tablets", price: "₹ 65/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379462558/UR/QI/VL/15001533/img-20240121-180533-500x500.jpg" },
    { id: "2853355347199", name: "Aceclofenac 100mg Paracetamol 325mg Tablets", price: "₹ 50/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501404345/UH/BW/XJ/15001533/440mg-zerodol-sp-aceclofenac-paracetamol-serratiopeptidase-tablets-500x500.jpeg" },
    { id: "2853355347200", name: "300mg Celeheal Celecoxib Capsules", price: "₹ 110/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501207543/BH/FY/QJ/15001533/celecoxib-200mg-capsule-500x500.jpeg" }
  ],
  "pharmaceutical-cream": [
    { id: "2852517750588", name: "30g Keto Ketoconazole Cream", price: "₹ 120/Tube", remoteImage: "https://5.imimg.com/data5/IOS/Default/2023/9/346110888/TC/KD/MM/15001533/product-jpeg-500x500.png" },
    { id: "2852517750589", name: "30g Melalite Forte Hydroquinone Cream", price: "₹ 180/Piece", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501543547/IT/HF/KH/15001533/melalite-forte-cream-500x500.jpeg" },
    { id: "2852517750590", name: "10g Candid B Clotrimazole Beclomethasone Cream", price: "₹ 80/Piece", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491637/SO/IJ/DY/15001533/prod-20240129-2352312774688314575047685-jpg-500x500.jpg" },
    { id: "2852517750591", name: "10g Elosone Mometasone Cream", price: "₹ 100/Piece", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491752/WE/TY/UI/15001533/product-jpeg-500x500.jpg" }
  ],
  "foam-face-wash": [
    { id: "2852106725133", name: "60ml Saslic Foaming Face Wash", price: "₹ 290/Bottle", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338241429/YA/SC/BN/15001533/trenbolone-injection-500x500.jpeg" },
    { id: "2852106725134", name: "Salicylic Acid 2% Foaming Face Wash", price: "₹ 240/Bottle", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491453/VH/AS/SA/15001533/product-jpeg-500x500.jpg" },
    { id: "2852106725135", name: "Glycolic Acid Gentle Clarifying Face Wash", price: "₹ 310/Bottle", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338240720/WC/AX/MN/15001533/steroid-500x500.jpeg" }
  ],
  "minoxidil-topical-solution": [
    { id: "2852143785048", name: "10% Minoxytop Minoxidil Topical Solution", price: "₹ 650/Bottle", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338236898/LS/SG/GB/15001533/testosterone-enanthate-injection-500x500.jpeg" },
    { id: "2852143785049", name: "5% Minoxidil Topical Solution IP", price: "₹ 420/Bottle", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501124762/YZ/MO/FN/15001533/minoxidil-finasteride-solution-500x500.jpeg" },
    { id: "2852143785050", name: "5% w/v Minoxihair F Minoxidil Finasteride Solution", price: "₹ 580/Bottle", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501124762/YZ/MO/FN/15001533/minoxidil-finasteride-solution-500x500.jpeg" }
  ],
  "womens-health": [
    { id: "2853288044530", name: "Crisanta Ls Tablet", price: "₹ 340/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379466560/FP/ZP/HZ/15001533/img-20240121-182238-500x500.jpg" },
    { id: "2853288044531", name: "Progynova 2mg Estradiol Tablets", price: "₹ 280/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379461111/XI/LP/ZX/15001533/img-20240121-174917-500x500.jpg" },
    { id: "2853288044532", name: "Fempro 2.5 Mg Letrozole Tablets", price: "₹ 190/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431285/BZ/PR/JQ/15001533/product-jpeg-500x500.png" }
  ],
  "hair-loss-medicine": [
    { id: "2855091584812", name: "5% w/v Minoxihair F Minoxidil Finasteride Topical Solution", price: "₹ 580/Bottle", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501124762/YZ/MO/FN/15001533/minoxidil-finasteride-solution-500x500.jpeg" },
    { id: "2855091584813", name: "1mg Finasteride Hair Growth Tablets", price: "₹ 150/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338236898/LS/SG/GB/15001533/testosterone-enanthate-injection-500x500.jpeg" },
    { id: "2855091584814", name: "0.5mg Dutasteride Capsules for Hair Regrowth", price: "₹ 220/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501123827/WF/IN/IE/15001533/dutasteride-avodart-500x500.jpeg" }
  ],
  "eye-care-medicine": [
    { id: "2853355458462", name: "5ml Bimat Bimatoprost Eye Drops", price: "₹ 620/Bottle", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501406957/ST/RR/UJ/15001533/5ml-bimat-bimatoprost-eye-drops-500x500.jpeg" },
    { id: "2853355458463", name: "Careprost 0.03% Bimatoprost Ophthalmic Solution", price: "₹ 550/Bottle", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501406957/ST/RR/UJ/15001533/5ml-bimat-bimatoprost-eye-drops-500x500.jpeg" },
    { id: "2853355458464", name: "0.05% Cyclosporine Ophthalmic Emulsion", price: "₹ 480/Bottle", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501406957/ST/RR/UJ/15001533/5ml-bimat-bimatoprost-eye-drops-500x500.jpeg" }
  ],
  "testosterone-gel": [
    { id: "21990633288", name: "5g Cernos Testosterone Gel", price: "₹ 450/Sachet", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501527135/PW/RS/WY/15001533/5g-cernos-testosterone-gel-500x500.png" },
    { id: "21990633289", name: "1% Testosterone Topical Gel Sachet", price: "₹ 380/Sachet", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501415110/FK/SZ/XA/15001533/cernos-capsules-500x500.jpeg" }
  ],
  "anti-alcohol-drugs": [
    { id: "2853269033791", name: "333 Mg Acamprol Acamprosate Tablet", price: "₹ 240/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501527293/IB/NB/UV/15001533/acamprol-tablet-500x500.png" },
    { id: "2853269033792", name: "250mg Disulfiram Antabuse Tablets", price: "₹ 120/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501527293/IB/NB/UV/15001533/acamprol-tablet-500x500.png" },
    { id: "2853269033793", name: "50mg Naltrexone Hydrochloride Tablets", price: "₹ 390/Strip", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501527293/IB/NB/UV/15001533/acamprol-tablet-500x500.png" }
  ],
  "pain-relief-gel": [
    { id: "2853329260955", name: "30g Volini Pain Relief Gel", price: "₹ 135/Tube", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491606/ZO/TQ/LN/15001533/product-jpeg-500x500.jpg" },
    { id: "2853329260956", name: "30g Diclosam Diclofenac Topical Gel", price: "₹ 110/Tube", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491378/HO/WH/HF/15001533/product-jpeg-500x500.jpg" },
    { id: "2853329260957", name: "Liniment Pain Relief Fast Action Spray", price: "₹ 160/Can", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491606/ZO/TQ/LN/15001533/product-jpeg-500x500.jpg" }
  ]
};

// Expand every category
let grandTotal = 0;

db.categories.forEach((cat) => {
  if (categoryExtraProducts[cat.slug]) {
    // Add extra products
    const extraProds = categoryExtraProducts[cat.slug].map((p) => {
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

    // Merge without duplication
    extraProds.forEach((ep) => {
      if (!cat.products.some((existing) => existing.id === ep.id || existing.slug === ep.slug)) {
        cat.products.push(ep);
      }
    });
  }

  cat.productCount = cat.products.length;
  grandTotal += cat.productCount;
});

db.totalProducts = grandTotal;

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");

// Update categories.json
const catClean = db.categories.map((c) => ({
  id: c.id,
  name: c.name,
  slug: c.slug,
  internalUrl: c.internalUrl,
  image: c.image,
  remoteImage: c.remoteImage,
  productCount: c.productCount
}));

fs.writeFileSync("./src/data/categories.json", JSON.stringify(catClean, null, 2), "utf-8");

console.log(`Expanded dataset successfully! Total ${grandTotal} products across ${db.categories.length} categories.`);
