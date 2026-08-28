import fs from "fs";

const fullCategoryProducts = {
  "pharmaceutical-tablets": [
    { id: "23144520573", name: "5mg Methimez Methimazole Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338332508/KH/PB/NJ/15001533/methimez-5-methimazole-tablet-500x500.jpg" },
    { id: "2852106725730", name: "150mg Buproban Bupropion Hydrochloride Extended Release Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338330565/LG/DG/FU/15001533/stanozolol-tablets-and-capsules-500x500.jpeg" },
    { id: "23144527062", name: "10 Mg Methimez Methimazole Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338234495/SN/CV/WR/15001533/methimez-10mg-methimazole-tablet-500x500.jpeg" },
    { id: "2852106726548", name: "5mg S Citadep Escitalopram Oxalate Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431790/DH/HF/TJ/15001533/oxandrolone-tablets-500x500.jpeg" },
    { id: "2852106725633", name: "400mg Qutipin SR Quetiapine Prolonged Release Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431537/BL/FV/NX/15001533/oxymetholone-tablets-500x500.jpeg" },
    { id: "23144565133", name: "50mg Ocivox Fluvoxamine Maleate Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338332508/KH/PB/NJ/15001533/methimez-5-methimazole-tablet-500x500.jpg" },
    { id: "2852143785533", name: "Tadapox Tadalafil Dapoxetine Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501526952/SB/FO/SO/15001533/erectile-dysfunction-tablets-500x500.png" }
  ],
  "pharmaceutical-capsules": [
    { id: "2852143785230", name: "Cephadex 250 Cephalexin Capsules", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/337927038/JX/ST/DG/15001533/glutathione-injection-500x500.jpeg" },
    { id: "2853288044397", name: "Brain Up Syrup", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379466238/IC/GD/BQ/15001533/img-20240121-181216-500x500.jpg" },
    { id: "2853329260388", name: "Cernos Testosterone Undecanoate Soft Gelatin Capsules", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501415110/FK/SZ/XA/15001533/cernos-capsules-500x500.jpeg" },
    { id: "2853329227533", name: "Duloxetine Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381459172/CB/PS/ZM/15001533/product-jpeg-500x500.jpg" },
    { id: "2853288042797", name: "Cephadex 250", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379461309/QW/HA/BT/15001533/img-20240121-175402-500x500.jpg" }
  ],
  "pharmaceutical-injection": [
    { id: "2853355347933", name: "100mg Vitamin C Ascorbic Acid Injection", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501404744/LB/ZE/LF/15001533/100mg-vitamin-c-ascorbic-acid-injection-500x500.jpg" },
    { id: "2853329227233", name: "Imipramine 50 Mg", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381458996/YE/HR/NI/15001533/product-jpeg-500x500.jpg" },
    { id: "2853288044791", name: "Vilitra 10mg Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379466836/BB/KW/RD/15001533/img-20240121-183039-500x500.jpg" },
    { id: "2853329227988", name: "Retin A 0.1", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381490719/GA/SJ/IE/15001533/product-jpeg-500x500.jpg" },
    { id: "2853288042548", name: "Progynova 2mg Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379461111/XI/LP/ZX/15001533/img-20240121-174917-500x500.jpg" }
  ],
  "anti-depressants-medicines": [
    { id: "2852516603788", name: "1mg Varenicline Tartrate Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431285/BZ/PR/JQ/15001533/product-jpeg-500x500.png" },
    { id: "2853329227173", name: "75mg Venorax SR Venlafaxine Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501100302/DB/MO/LH/15001533/effexor-venlafaxine-75-mg-capsule-500x500.jpeg" },
    { id: "2852360819830", name: "150mg Unidep SR Bupropion Hcl Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501526279/TK/PU/PM/15001533/150mg-bupropion-hci-extended-release-tablets-500x500.jpeg" },
    { id: "2852517770548", name: "300 Mg Lithosun Lithium Carbonate Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501526643/OB/ZA/QK/15001533/product-jpeg-500x500.png" },
    { id: "2852517841348", name: "300Mg Licab Lithium Carbonate Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501103667/GE/UB/NK/15001533/product-jpeg-500x500.png" }
  ],
  "skin-care-products": [
    { id: "2853329260797", name: "20g Facelin Clindamycin Nicotinamide Gel", price: "₹ 300/Piece", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491453/VH/AS/SA/15001533/product-jpeg-500x500.jpg" },
    { id: "2853329261612", name: "30g Melalite Forte Hydroquinone Cream", price: "₹ 180/Piece", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501543547/IT/HF/KH/15001533/melalite-forte-cream-500x500.jpeg" },
    { id: "2852517759773", name: "30g Prilox Lidocaine Prilocaine Cream", price: "₹ 350/Pack", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454466828/KT/QD/DY/15001533/product-jpeg-500x500.png" },
    { id: "2853329261233", name: "5g B Muce Mupirocin Ointment IP", price: "₹ 60/Piece", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491674/IC/BG/SE/15001533/product-jpeg-500x500.jpg" },
    { id: "2853329261097", name: "10g Candid B Clotrimazole Beclomethasone Cream", price: "₹ 80/Piece", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491637/SO/IJ/DY/15001533/prod-20240129-2352312774688314575047685-jpg-500x500.jpg" },
    { id: "2853329261488", name: "10g Elosone Mometasone Cream", price: "₹ 100/Piece", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491752/WE/TY/UI/15001533/product-jpeg-500x500.jpg" },
    { id: "2853329261773", name: "15g Aziderm Azelaic Acid Cream", price: "₹ 250/Piece", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491823/DF/GH/JK/15001533/product-jpeg-500x500.jpg" },
    { id: "2853329261933", name: "15g Fucidin Sodium Fusidate Ointment BP", price: "₹ 190/Piece", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491910/SD/WE/ER/15001533/product-jpeg-500x500.jpg" },
    { id: "2853329262155", name: "30g Prilox Lignocaine Prilocaine Cream", price: "₹ 350/Piece", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491988/QW/ER/TY/15001533/product-jpeg-500x500.jpg" }
  ],
  "pharmaceutical-medicines": [
    { id: "2853288044088", name: "Diclofenac Sodium Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379462558/UR/QI/VL/15001533/img-20240121-180533-500x500.jpg" },
    { id: "2852517745912", name: "100 Mg Lamotrig DT Lamotrigine Dispersible Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/IOS/Default/2023/9/346112674/VS/TI/UQ/15001533/product-jpeg-500x500.png" },
    { id: "26016481573", name: "Mephentermine Sulphate Injection", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CE/GB/FS/15001533/m-termin-1-500x500.jpg" },
    { id: "2853288044291", name: "250 Mg Enthrocin Erythromycin Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431323/OY/MT/DO/15001533/img-20240121-180938-500x500.jpeg" }
  ],
  "pharmaceutical-ointment": [
    { id: "2852106724962", name: "Ipca Acne UV Gel", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338240720/WC/AX/MN/15001533/steroid-500x500.jpeg" },
    { id: "2852143784812", name: "Keto Ketoconazole Cream", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338330629/RW/XQ/CF/15001533/keto-ketoconazole-cream-500x500.jpeg" },
    { id: "2853329261591", name: "30g Clincitop Clindamycin Phosphate Gel USP", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491873/GL/TB/UA/15001533/product-jpeg-500x500.jpg" },
    { id: "2852106724830", name: "Brilante Intense Brightening Serum", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/337957231/KQ/MX/SW/15001533/steroid-injections-500x500.jpeg" },
    { id: "2853329260597", name: "Luliconazole Cream", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491423/TC/NW/JB/15001533/product-jpeg-500x500.jpg" }
  ],
  "antibiotic-medicines": [
    { id: "2853355425073", name: "250 Mg Azee Azithromycin Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501405923/KJ/LB/HZ/15001533/img-20240120-202209-500x500.jpeg" },
    { id: "2855091585062", name: "500mg Amoxytor Amoxycillin Capsules", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501120374/DJ/KP/VE/15001533/prod-20241008-1203017478629327897990712-jpg-500x500.jpeg" },
    { id: "2853361502188", name: "250mg Paraxin Chloramphenicol Capsule", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501134646/RM/SB/AT/15001533/img-20240121-163701-500x500.jpeg" },
    { id: "2853355348033", name: "500mg Amoxicillin Trihydrate Capsules IP", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501405362/JZ/ZJ/TP/15001533/500mg-amoxicillin-trihydrate-capsules-ip-500x500.jpeg" }
  ],
  "steroids-injections": [
    { id: "2852106734212", name: "30mg ERX HGH Somatropin Injection", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454467402/YK/RQ/PC/15001533/product-500x500.jpeg" },
    { id: "2853313548588", name: "100mg Test Prop Testosterone Propionate Injection", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501393148/TU/PR/OP/15001533/testosterone-propionate-500x500.jpeg" },
    { id: "2852516591533", name: "2000 IU Zyhcg HP Human Chorionic Gonadotropin Injections", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/IOS/Default/2023/9/346073808/ON/LU/VE/15001533/product-jpeg-500x500.png" },
    { id: "2853355347762", name: "250mg Sustaviron Testosterone Injection", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/382840230/PH/QL/SZ/15001533/img-20240120-200314-500x500.jpg" }
  ],
  "antimalarial-medicine": [
    { id: "23144571162", name: "300mg Lariteg Quinine Sulphate Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501115664/DO/GC/DV/15001533/300mg-lariteg-quinine-sulphate-tablets-500x500.jpeg" },
    { id: "2853356414197", name: "250mg Lariago Chloroquine Phosphate Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/382874759/JK/ON/JZ/15001533/img-20240121-163456-500x500.jpg" },
    { id: "21990638612", name: "75mg Antiflu Oseltamivir Capsules", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501526898/KU/QA/FS/15001533/75mg-antiflu-oseltamivir-capsules-500x500.png" },
    { id: "2853356414088", name: "500mg Lariago DS Chloroquine Phosphate Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/382874719/CO/RP/UH/15001533/img-20240121-163126-500x500.jpg" }
  ],
  "anti-cancer-medicine": [
    { id: "2852451597955", name: "5% w/w Imiquad Imiquimod Cream", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2023/9/344665356/PK/YP/RF/15001533/product-jpeg-500x500.jpeg" },
    { id: "2855091584933", name: "0.5mg Deetor Dutasteride Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501123827/WF/IN/IE/15001533/dutasteride-avodart-500x500.jpeg" },
    { id: "2856430602597", name: "Hypnite 3 Mg", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/IOS/Default/2025/4/506258545/PO/DV/FP/15001533/product-jpeg-500x500.png" },
    { id: "2855091585488", name: "1mg Siromine Sirolimus Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501117233/IS/YS/DW/15001533/sirolimus-tablets-500x500.jpg" },
    { id: "2856430602873", name: "Hypnite 1 Mg", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/IOS/Default/2025/4/506258517/CY/DL/FN/15001533/product-jpeg-500x500.png" }
  ],
  "antidiabetic-medicine": [
    { id: "2853355458662", name: "14 Mg Rybelsus Semaglutide Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/382846419/CY/IO/RX/15001533/img-20240120-202645-500x500.jpg" },
    { id: "2853356347533", name: "3 Mg Rybelsus Semaglutide Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/382873625/EH/HR/QO/15001533/img-20240120-202813-500x500.jpg" },
    { id: "2853356347391", name: "7 Mg Rybelsus Semaglutide Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/382873482/CR/ZB/PH/15001533/img-20240120-202735-500x500.jpg" }
  ],
  "erectile-dysfunction-medicine": [
    { id: "21990633462", name: "100mg Femalegra Sildenafil Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501526952/SB/FO/SO/15001533/erectile-dysfunction-tablets-500x500.png" },
    { id: "2856430602973", name: "Sleepose 60", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/IOS/Default/2025/4/506258714/NB/OD/NN/15001533/product-jpeg-500x500.png" },
    { id: "2857021315030", name: "Sildalist 120 Mg", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/7/530768415/BP/DU/AE/15001533/img-20240126-163026-500x500.jpg" },
    { id: "2857021314991", name: "Sildigra Super Power Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/7/530766692/XV/CP/RG/15001533/img-20240126-164803-500x500.jpg" }
  ],
  "pain-relief-medicines": [
    { id: "2853355347597", name: "440mg Zerodol SP Aceclofenac Paracetamol Serratiopeptidase Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501404345/UH/BW/XJ/15001533/440mg-zerodol-sp-aceclofenac-paracetamol-serratiopeptidase-tablets-500x500.jpeg" },
    { id: "2853329260430", name: "30g Diclosam Diclofenac Gel", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491378/HO/WH/HF/15001533/product-jpeg-500x500.jpg" }
  ],
  "herbal-capsul": [
    { id: "2853288042155", name: "Centrum For Men", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379459225/UK/XW/BQ/15001533/img-20240121-174528-500x500.jpg" },
    { id: "2853355458333", name: "Ashwagandha Extract Capsule", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454466101/ON/QY/AI/15001533/img-20240120-202233-500x500.jpeg" }
  ],
  "anti-psychotic-medicines": [
    { id: "2853329227391", name: "Imipramine Hydrochloride Tablets 75 Mg", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381458839/UI/VQ/OG/15001533/product-jpeg-500x500.jpg" },
    { id: "2853288043991", name: "Doxepine 10 Mg Capsules", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379462205/EF/KC/SI/15001533/img-20240121-180149-500x500.jpg" }
  ],
  "antiparasitic-medicine": [
    { id: "2852516953797", name: "3 Mg Iverjohn Ivermectin Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431251/WB/OG/VD/15001533/product-jpeg-500x500.png" },
    { id: "2853361502391", name: "200mg Invado Cefixime Dispersible Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501136768/TF/JX/ZK/15001533/cefixime-500x500.jpeg" }
  ],
  "pharmaceutical-syrup": [
    { id: "2853269033633", name: "Atenheal 100mg tab", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454467879/HP/EB/AO/15001533/product-jpeg-500x500.jpeg" },
    { id: "2853269033991", name: "Amoxyheal cv 625", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454432291/UP/VY/GU/15001533/product-jpeg-500x500.jpeg" }
  ],
  "anti-fungal-medicine": [
    { id: "2853329227773", name: "Candid V Gel Clotrimazole 2 W W", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381459223/SD/UG/AY/15001533/product-jpeg-500x500.jpg" },
    { id: "2853356414548", name: "300mg Celeheal Celecoxib Capsules", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501207543/BH/FY/QJ/15001533/celecoxib-200mg-capsule-500x500.jpeg" }
  ],
  "steroids-tablets": [
    { id: "2855091585788", name: "5mg Predniheal Prednisolone Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501122662/QO/UZ/MH/15001533/prod-20241008-1203018282813961586341864-jpg-500x500.jpeg" },
    { id: "2855091585355", name: "40mg Frasix Prednisone Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501097571/ZA/UD/RT/15001533/prod-20241008-1203019179541915250491239-jpg-500x500.jpeg" }
  ],
  "protein-powder": [
    { id: "2852143784948", name: "Protimed Protein Powder", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338241085/SG/FM/FM/15001533/adenosine-monophosphate-injection-500x500.jpeg" }
  ],
  "anti-acne-medicines": [
    { id: "23110737488", name: "30mg Sotret Isotretinoin Capsules", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454431714/ND/UW/DH/15001533/img-4314-500x500.jpeg" }
  ],
  "hypertension-medicine": [
    { id: "2853355347212", name: "150mg ST Sprin Aspirin Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501393489/DI/IG/GD/15001533/img-20240120-195558-500x500.jpeg" }
  ],
  "analgesic-and-anti-inflammatory-drugs": [
    { id: "2853355347197", name: "75mg ST Sprin Aspirin Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/382839828/EB/UN/XT/15001533/img-20240120-195403-500x500.jpg" }
  ],
  "pharmaceutical-cream": [
    { id: "2852517750588", name: "30g Keto Ketoconazole Cream", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/IOS/Default/2023/9/346110888/TC/KD/MM/15001533/product-jpeg-500x500.png" }
  ],
  "foam-face-wash": [
    { id: "2852106725133", name: "60ml Saslic Foaming Face Wash", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338241429/YA/SC/BN/15001533/trenbolone-injection-500x500.jpeg" }
  ],
  "variable-auto-transformer": [
    { id: "2852106732088", name: "Eca 3g Digital Grounding System", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/9/454467700/DE/XG/IJ/15001533/product-jpeg-500x500.jpeg" }
  ],
  "minoxidil-topical-solution": [
    { id: "2852143785048", name: "10% Minoxytop Minoxidil Topical Solution", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338236898/LS/SG/GB/15001533/testosterone-enanthate-injection-500x500.jpeg" }
  ],
  "check-shirt": [
    { id: "2853288041997", name: "Chexid D", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379459023/VW/ON/TT/15001533/img-20240121-174234-500x500.jpg" }
  ],
  "womens-health": [
    { id: "2853288044530", name: "Crisanta Ls Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2024/1/379466560/FP/ZP/HZ/15001533/img-20240121-182238-500x500.jpg" }
  ],
  "hair-loss-medicine": [
    { id: "2855091584812", name: "5% w/v Minoxihair F Minoxidil Finasteride Topical Solution", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501124762/YZ/MO/FN/15001533/minoxidil-finasteride-solution-500x500.jpeg" }
  ],
  "eye-care-medicine": [
    { id: "2853355458462", name: "5ml Bimat Bimatoprost Eye Drops", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501406957/ST/RR/UJ/15001533/5ml-bimat-bimatoprost-eye-drops-500x500.jpeg" }
  ],
  "testosterone-gel": [
    { id: "21990633288", name: "5g Cernos Testosterone Gel", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501527135/PW/RS/WY/15001533/5g-cernos-testosterone-gel-500x500.png" }
  ],
  "anti-alcohol-drugs": [
    { id: "2853269033791", name: "333 Mg Acamprol Acamprosate Tablet", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2025/4/501527293/IB/NB/UV/15001533/acamprol-tablet-500x500.png" }
  ],
  "pain-relief-gel": [
    { id: "2853329260955", name: "30g Volini Pain Relief Gel", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/ANDROID/Default/2024/1/381491606/ZO/TQ/LN/15001533/product-jpeg-500x500.jpg" }
  ],
  "other-products": [
    { id: "2859108413230", name: "Acetasmart 250mg Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2026/4/600123494/WV/AD/SY/15001533/acetasmart-250mg-tablets-500x500.jpg" },
    { id: "2859108414262", name: "Atomoxet 40mg Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2026/4/600123764/MU/BX/ZQ/15001533/atomoxet-40mg-tablets-500x500.jpg" },
    { id: "2859108414730", name: "Cbenzprime ER 15mg Capsules", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2026/4/600123936/MM/ZM/QQ/15001533/cbenzprime-er-15mg-capsules-500x500.jpg" },
    { id: "2859108415155", name: "Cephadex 250mg Capsules", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2026/4/600124014/TN/YW/TZ/15001533/cephadex-250mg-capsules-500x500.jpg" },
    { id: "2859108413473", name: "Amloheal 5mg Tablets", price: "Price on Request", remoteImage: "https://5.imimg.com/data5/SELLER/Default/2026/4/600123553/GE/VZ/IF/15001533/amloheal-5mg-tablets-500x500.jpg" }
  ]
};

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 1. Read existing products.json
const dbRaw = fs.readFileSync("./src/data/products.json", "utf-8");
const db = JSON.parse(dbRaw);

let grandTotalProducts = 0;

db.categories.forEach((category) => {
  const seedProds = fullCategoryProducts[category.slug] || [
    {
      id: Math.random().toString().slice(2, 12),
      name: `${category.name} Sample Product`,
      price: "Price on Request",
      remoteImage: "https://5.imimg.com/data5/SELLER/Default/2023/8/338332508/KH/PB/NJ/15001533/methimez-5-methimazole-tablet-500x500.jpg"
    }
  ];

  category.products = seedProds.map((p) => {
    const pSlug = slugify(p.name);
    return {
      id: p.id,
      name: p.name,
      slug: pSlug,
      category: category.name,
      categorySlug: category.slug,
      price: p.price || "Price on Request",
      currency: "INR",
      image: `/images/products/${category.slug}/${pSlug}.jpg`,
      remoteImage: p.remoteImage,
      internalUrl: `/products/${category.slug}/${pSlug}`,
      productUrl: `https://www.indiamart.com/medicospharma/${category.slug}.html#${p.id}`
    };
  });

  category.productCount = category.products.length;
  grandTotalProducts += category.productCount;
});

db.totalProducts = grandTotalProducts;

fs.writeFileSync("./src/data/products.json", JSON.stringify(db, null, 2), "utf-8");

// Also update categories.json
const catList = db.categories.map((c) => ({
  id: c.id,
  name: c.name,
  slug: c.slug,
  internalUrl: c.internalUrl,
  image: c.image,
  remoteImage: c.remoteImage,
  productCount: c.productCount
}));

fs.writeFileSync("./src/data/categories.json", JSON.stringify(catList, null, 2), "utf-8");

console.log(`Successfully updated products.json! Total ${grandTotalProducts} products across ${db.categories.length} categories.`);
