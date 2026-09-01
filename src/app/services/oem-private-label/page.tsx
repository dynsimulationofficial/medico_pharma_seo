import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "OEM & Private Label Pharmaceutical Manufacturing in India | Medico Pharma",
  description: "Medico Pharma provides OEM and private label pharmaceutical manufacturing in India with custom products, packaging, labelling and scalable production support for brands.",
  alternates: { canonical: "/services/oem-private-label" },
};

type IconName =
  | "tablet"
  | "capsule"
  | "bottle"
  | "injectable"
  | "topical"
  | "antibiotic"
  | "shield"
  | "package"
  | "network"
  | "layers"
  | "route"
  | "globe"
  | "factory"
  | "check";

const revealScript = `
(function () {
  var root = document.documentElement;
  function init() {
    var nodes = document.querySelectorAll('.pmx-reveal:not(.is-visible)');
    if (!nodes.length) return;
    root.classList.add('pmx-js');
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(nodes, function (n) { n.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(nodes, function (n) { io.observe(n); });
  }
  init();
  window.addEventListener('load', init);
})();
`;

const heroIndex = [
  [
    "01",
    "Product formats",
    "Tablets · Capsules · Syrups · Topicals"
  ],
  [
    "02",
    "Manufacturing models",
    "OEM · Private label · Own brand"
  ],
  [
    "03",
    "Brand support",
    "Packaging · Labelling · Brand integration"
  ],
  [
    "04",
    "Commercial supply",
    "Domestic · International supply support"
  ]
] as const;
const introServices = [
  "Pharmaceutical product selection",
  "Custom pharmaceutical formulation manufacturing",
  "Pharmaceutical formulation planning",
  "OEM pharmaceutical manufacturing",
  "Private label pharma manufacturing",
  "Product-specific manufacturing coordination",
  "Custom packaging selection",
  "Pharmaceutical branding and packaging",
  "OEM labeling and private label design requirements",
  "Product labelling",
  "Commercial pack configuration",
  "Scalable manufacturing support",
  "Documentation coordination",
  "Domestic and international supply support"
] as const;
const oemCapabilities = [
  [
    "01",
    "Private Label Pharmaceutical Products",
    "Choose suitable pharmaceutical products that can be manufactured and prepared under your own commercial brand. Our Private Label Pharma Manufacturing support can cover multiple dosage forms and product categories based on manufacturing feasibility.",
    []
  ],
  [
    "02",
    "OEM Pharmaceutical Manufacturing",
    "Our OEM Pharmaceutical Manufacturing model supports businesses that require pharmaceutical products manufactured according to defined specifications, product requirements and commercial branding. Product specifications can include formulation, dosage strength, pack configuration, labelling and packaging requirements.",
    []
  ],
  [
    "03",
    "Custom Product Selection",
    "Businesses can discuss suitable products according to their intended pharmaceutical portfolio. Product selection may include: This enables companies to build a more focused private label pharmaceutical range.",
    [
      "Tablets",
      "Capsules",
      "Syrups and oral liquids",
      "Selected injectable formulations",
      "Ointments",
      "Creams",
      "Gels",
      "Topical formulations",
      "Antibiotic products",
      "Generic pharmaceutical formulations"
    ]
  ],
  [
    "04",
    "Custom Packaging & Labelling",
    "Packaging is one of the most important elements of Private Label Pharmaceutical Manufacturing. Our support can include suitable primary packaging, secondary packaging, product labels, commercial pack configurations and Pharmaceutical Branding and Packaging requirements.",
    []
  ],
  [
    "05",
    "Brand-Ready Pharmaceutical Solutions",
    "Our private label model combines manufacturing, packaging and brand presentation to help prepare pharmaceutical products for commercial use. This creates a structured solution for companies requiring Pharmaceutical Products Under Own Brand.",
    []
  ],
  [
    "06",
    "Bulk & Scalable Production Support",
    "Manufacturing requirements can be discussed according to product category, dosage form, formulation and expected production volume. Production quantities remain subject to manufacturing feasibility, formulation requirements and the selected product.",
    []
  ]
] as const;
const productCards = [
  {
    "number": "01",
    "title": "Private Label Tablet Manufacturing",
    "label": "Oral solid dosage",
    "icon": "tablet",
    "intro": "Private label tablets can help pharmaceutical brands expand their product range across different therapeutic and commercial categories. Medico Pharma supports tablet-based Private Label Pharmaceutical Manufacturing according to defined formulation, strength, packaging and branding requirements.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical tablets"
      ],
      [
        "Product Type",
        "Generic or selected pharmaceutical formulation"
      ],
      [
        "Formulation",
        "Approved or agreed product formulation"
      ],
      [
        "Strength",
        "According to product specification"
      ],
      [
        "Excipients",
        "According to formulation requirement"
      ],
      [
        "Tablet Format",
        "Product dependent"
      ],
      [
        "Coating",
        "According to formulation requirement"
      ],
      [
        "Primary Packaging",
        "Blister, strip, bottle or suitable format"
      ],
      [
        "Secondary Packaging",
        "Carton or agreed commercial presentation"
      ],
      [
        "Brand Label",
        "Custom brand-specific label"
      ],
      [
        "Pack Size",
        "According to commercial requirement"
      ],
      [
        "Manufacturing Model",
        "OEM / private label pharmaceutical manufacturing"
      ],
      [
        "Production Quantity",
        "Subject to product and manufacturing feasibility"
      ]
    ],
    "outro": "Tablet manufacturing can be incorporated into a broader Own Brand Pharmaceutical Manufacturing programme containing multiple dosage forms."
  },
  {
    "number": "02",
    "title": "Private Label Capsule Manufacturing",
    "label": "Capsule formulation",
    "icon": "capsule",
    "intro": "Our private label capsule manufacturing support allows pharmaceutical companies to introduce capsule formulations under their own brand identity. Capsule specifications can be planned according to formulation, strength, fill composition, packaging and commercial presentation.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical capsules"
      ],
      [
        "Formulation",
        "According to agreed product formulation"
      ],
      [
        "Capsule Format",
        "Product-specific"
      ],
      [
        "Fill Composition",
        "Formulation dependent"
      ],
      [
        "Strength",
        "According to product specification"
      ],
      [
        "Excipients",
        "Selected according to formulation"
      ],
      [
        "Primary Packaging",
        "Blister, strip or bottle"
      ],
      [
        "Secondary Packaging",
        "Custom carton configuration"
      ],
      [
        "Product Label",
        "Own-brand pharmaceutical labelling"
      ],
      [
        "Pack Configuration",
        "According to commercial requirement"
      ],
      [
        "Manufacturing",
        "Private label / OEM pharma manufacturing"
      ],
      [
        "Production",
        "Flexible according to manufacturing feasibility"
      ]
    ],
    "outro": "Our capsule capabilities can form part of an integrated Pharmaceutical Manufacturing for Brands solution."
  },
  {
    "number": "03",
    "title": "Private Label Syrup & Oral Liquid Manufacturing",
    "label": "Syrup & oral liquid",
    "icon": "bottle",
    "intro": "Medico Pharma can support selected syrup and oral liquid formulations for businesses developing private label pharmaceutical portfolios.",
    "rows": [
      [
        "Dosage Form",
        "Syrup / oral liquid"
      ],
      [
        "Formulation",
        "Product-specific pharmaceutical formulation"
      ],
      [
        "Strength",
        "According to agreed specification"
      ],
      [
        "Base",
        "Formulation dependent"
      ],
      [
        "Flavour Requirement",
        "Product dependent"
      ],
      [
        "Bottle Format",
        "Suitable pharmaceutical bottle"
      ],
      [
        "Bottle Size",
        "According to pack requirement"
      ],
      [
        "Closure",
        "Product-specific"
      ],
      [
        "Measuring Component",
        "Where applicable"
      ],
      [
        "Product Label",
        "Custom pharmaceutical label"
      ],
      [
        "Secondary Packaging",
        "Custom carton"
      ],
      [
        "Manufacturing Model",
        "OEM / private label production"
      ]
    ],
    "outro": "Syrup manufacturing can be combined with tablets, capsules and other dosage forms to create a broader own-brand pharmaceutical product portfolio."
  },
  {
    "number": "04",
    "title": "Private Label Injectable Pharmaceutical Products",
    "label": "Controlled injectable support",
    "icon": "injectable",
    "intro": "Selected injectable formulations may be considered for private label manufacturing depending on product specifications, facility capabilities and applicable manufacturing requirements. Injectable products require controlled manufacturing, packaging and documentation processes.",
    "rows": [
      [
        "Dosage Form",
        "Selected injectable formulations"
      ],
      [
        "Formulation",
        "Product-specific approved formulation"
      ],
      [
        "Strength",
        "According to product specification"
      ],
      [
        "Container Format",
        "Based on product requirements"
      ],
      [
        "Primary Packaging",
        "Injectable-specific packaging"
      ],
      [
        "Secondary Packaging",
        "Appropriate commercial packaging"
      ],
      [
        "Labelling",
        "Brand-specific pharmaceutical labelling"
      ],
      [
        "Manufacturing Model",
        "Private label / OEM pharmaceutical manufacturing"
      ],
      [
        "Documentation",
        "Product-specific requirements"
      ],
      [
        "Production",
        "Subject to manufacturing feasibility"
      ]
    ],
    "outro": "Injectable private label projects are assessed individually before manufacturing specifications are confirmed."
  },
  {
    "number": "05",
    "title": "Private Label Ointment & Topical Manufacturing",
    "label": "Ointment · Cream · Gel",
    "icon": "topical",
    "intro": "Build your own-brand topical pharmaceutical portfolio with selected ointments, creams, gels and other suitable topical formulations. Our Custom Pharmaceutical Manufacturing support can incorporate formulation production, packaging, private label design requirements and final product presentation.",
    "rows": [
      [
        "Dosage Form",
        "Ointment, cream, gel or topical formulation"
      ],
      [
        "Formulation",
        "Product-specific"
      ],
      [
        "Base / Excipients",
        "According to formulation"
      ],
      [
        "Strength",
        "Product dependent"
      ],
      [
        "Texture",
        "According to formulation"
      ],
      [
        "Primary Packaging",
        "Tube, container or suitable format"
      ],
      [
        "Pack Size",
        "According to commercial requirement"
      ],
      [
        "Label",
        "Custom private label"
      ],
      [
        "Secondary Packaging",
        "Brand-specific carton"
      ],
      [
        "Manufacturing",
        "OEM / private label pharmaceutical manufacturing"
      ],
      [
        "Production Quantity",
        "Subject to manufacturing requirements"
      ]
    ],
    "outro": ""
  },
  {
    "number": "06",
    "title": "Private Label Antibiotic Pharmaceutical Products",
    "label": "Selected antibiotic products",
    "icon": "antibiotic",
    "intro": "Selected antibiotic formulations can be evaluated for private label production according to dosage form, formulation requirements and available manufacturing capability.",
    "rows": [
      [
        "Product Category",
        "Selected antibiotic formulations"
      ],
      [
        "Dosage Form",
        "Product dependent"
      ],
      [
        "Formulation",
        "According to approved specification"
      ],
      [
        "Strength",
        "Product-specific"
      ],
      [
        "Pharmaceutical Excipients",
        "According to formulation"
      ],
      [
        "Packaging",
        "Suitable pharmaceutical packaging"
      ],
      [
        "Pack Configuration",
        "According to commercial requirement"
      ],
      [
        "Product Label",
        "Own-brand labelling"
      ],
      [
        "Manufacturing Model",
        "OEM / private label manufacturing"
      ],
      [
        "Documentation",
        "Applicable product documentation"
      ],
      [
        "Production",
        "Subject to manufacturing feasibility"
      ]
    ],
    "outro": ""
  },
  {
    "number": "07",
    "title": "Private Label Generic Medicine Manufacturing",
    "label": "Generic medicines",
    "icon": "layers",
    "intro": "Generic pharmaceutical products can provide businesses with opportunities to develop broader branded portfolios across suitable pharmaceutical categories. Our Private Label Medicine Manufacturer support can cover selected generic tablets, capsules, syrups and other compatible dosage forms.",
    "rows": [
      [
        "Product Category",
        "Generic medicines"
      ],
      [
        "Dosage Form",
        "Product dependent"
      ],
      [
        "Formulation",
        "Approved or agreed formulation"
      ],
      [
        "Strength",
        "According to specification"
      ],
      [
        "Excipients",
        "Formulation dependent"
      ],
      [
        "Packaging",
        "Product-specific packaging"
      ],
      [
        "Product Label",
        "Custom brand identity"
      ],
      [
        "Pack Size",
        "According to commercial requirement"
      ],
      [
        "Manufacturing Model",
        "Private label / OEM pharmaceutical manufacturing"
      ],
      [
        "Production",
        "Scalable according to feasibility"
      ],
      [
        "Supply",
        "Domestic and suitable international requirements"
      ]
    ],
    "outro": "This provides a flexible route for companies seeking Medicine Manufacturing Under Own Brand without establishing a separate manufacturing facility for every pharmaceutical formulation."
  }
] as const;
const audiences = [
  [
    "01",
    "Pharmaceutical Startups",
    "New pharmaceutical businesses can use Private Label Pharmaceutical Manufacturing in India to build an initial product portfolio without investing immediately in complete manufacturing infrastructure."
  ],
  [
    "02",
    "Established Pharma Brands",
    "Existing pharmaceutical brands can expand into additional product categories through flexible OEM and private label manufacturing arrangements."
  ],
  [
    "03",
    "Distributors & Wholesalers",
    "Pharmaceutical distributors and wholesalers can explore own-brand product development through Third Party Private Label Pharmaceutical Manufacturing and private-label production support."
  ],
  [
    "04",
    "Healthcare Companies",
    "Healthcare companies seeking to introduce pharmaceutical products can use our production, packaging and branding support to develop suitable market-ready products."
  ],
  [
    "05",
    "Pharmaceutical Marketing Companies",
    "Companies focused on pharmaceutical marketing and distribution can outsource suitable manufacturing activities while concentrating internal resources on commercial growth."
  ],
  [
    "06",
    "International Pharmaceutical Companies",
    "International pharmaceutical organisations exploring OEM Pharmaceutical Manufacturing in India can discuss suitable products, formulations, packaging and production requirements with Medico Pharma."
  ]
] as const;
const processSteps = [
  [
    "01",
    "Understand Your Product Requirements",
    "The process begins by understanding what you want to develop under your pharmaceutical brand. Initial requirements may include:",
    [
      "Product category",
      "Dosage form",
      "Formulation",
      "Strength",
      "Product range",
      "Expected production requirement",
      "Packaging format",
      "Pack size",
      "Brand presentation",
      "Supply requirements"
    ]
  ],
  [
    "02",
    "Select Products & Formulations",
    "Suitable pharmaceutical formulations are identified according to your intended product portfolio and manufacturing feasibility. This stage can include existing product options or suitable Custom Pharmaceutical Formulation Manufacturing requirements.",
    []
  ],
  [
    "03",
    "Finalize Packaging & Branding Requirements",
    "Once the product requirements are defined, packaging and private label requirements can be planned. This can include: This stage is particularly important for OEM ODM Private Label and own-brand manufacturing models where product presentation forms a major part of the commercial identity.",
    [
      "Packaging format",
      "Pack configuration",
      "Product label",
      "Brand name placement",
      "Product information layout",
      "Secondary packaging",
      "Carton requirements",
      "Commercial presentation"
    ]
  ],
  [
    "04",
    "Manufacturing & Quality Checks",
    "Products are manufactured according to agreed formulation and production specifications. Applicable quality checks depend on the pharmaceutical product, dosage form and manufacturing requirements.",
    []
  ],
  [
    "05",
    "Labelling & Packaging",
    "After manufacturing, products move through the agreed Private Label Pharmaceutical Packaging process. Brand-specific labels and secondary packaging can then be applied according to agreed requirements.",
    []
  ],
  [
    "06",
    "Documentation & Final Dispatch",
    "Following manufacturing, relevant checks, packaging and documentation, products are prepared according to the agreed commercial supply requirements. This creates an integrated route from product selection to finished private label OEM products.",
    []
  ]
] as const;
const brandingItems = [
  [
    "01",
    "Custom Product Labels",
    "Product labels can be developed according to the agreed pharmaceutical product, packaging format and commercial brand requirements. Your brand presentation can be incorporated into suitable product-label layouts while required pharmaceutical product information is handled according to applicable requirements.",
    []
  ],
  [
    "02",
    "Packaging Format Selection",
    "Depending on the dosage form, packaging options can include: The final packaging format depends on product compatibility and manufacturing requirements.",
    []
  ],
  [
    "03",
    "Brand Identity Integration",
    "Private label manufacturing allows your pharmaceutical products to carry your approved commercial brand identity. Brand integration can involve: This creates a more unified pharmaceutical product portfolio.",
    [
      "Brand name placement",
      "Logo placement",
      "Product naming",
      "Label layout",
      "Pack configuration",
      "Carton presentation",
      "Consistent visual presentation across a product range"
    ]
  ],
  [
    "04",
    "Market-Ready Product Packaging",
    "Our private label approach brings together manufacturing, OEM labeling, pharmaceutical packaging and commercial presentation so finished products can be prepared for the next stage of your supply process.",
    []
  ]
] as const;
const packagingRows = [
  [
    "Tablets",
    "Blister, strip or bottle"
  ],
  [
    "Capsules",
    "Blister, strip or bottle"
  ],
  [
    "Syrups",
    "Pharmaceutical bottles"
  ],
  [
    "Ointments",
    "Tubes or suitable containers"
  ],
  [
    "Creams & Gels",
    "Tubes, containers or suitable formats"
  ],
  [
    "Selected Injectables",
    "Product-specific primary packaging"
  ],
  [
    "Generic Medicines",
    "Dosage-form appropriate packaging"
  ]
] as const;
const flexibleSupport = [
  [
    "01",
    "Flexible Product Selection",
    "Choose suitable pharmaceutical products according to the portfolio you want to develop rather than being limited to a single dosage category.",
    []
  ],
  [
    "02",
    "Multiple Dosage Forms",
    "Our OEM and private label capabilities can include selected:",
    [
      "Tablets",
      "Capsules",
      "Syrups",
      "Oral liquids",
      "Injectable formulations",
      "Ointments",
      "Creams",
      "Gels",
      "Topical products",
      "Antibiotic formulations",
      "Generic medicines"
    ]
  ],
  [
    "03",
    "Scalable Manufacturing Quantities",
    "Production quantities can be planned according to the specific product, formulation and manufacturing feasibility. For companies looking for flexible or low MOQ private label pharmaceutical manufacturing, minimum production requirements must be evaluated individually because they differ by formulation, packaging and production process.",
    []
  ],
  [
    "04",
    "Custom Packaging Requirements",
    "Packaging can be selected according to product format and commercial requirements rather than using the same presentation across every product.",
    []
  ],
  [
    "05",
    "Domestic & International Supply Support",
    "Medico Pharma can support suitable private label pharmaceutical requirements intended for Indian markets as well as selected international pharmaceutical programmes, subject to applicable product and supply requirements.",
    []
  ]
] as const;
const benefits = [
  [
    "01",
    "Launch Products Under Your Own Brand",
    "Private label manufacturing enables suitable pharmaceutical formulations to be manufactured and prepared under your commercial brand identity."
  ],
  [
    "02",
    "Expand Your Product Portfolio Faster",
    "Access to multiple pharmaceutical dosage forms can make it easier to introduce additional products without establishing dedicated manufacturing lines for each category."
  ],
  [
    "03",
    "Reduce Manufacturing Infrastructure Costs",
    "Building pharmaceutical manufacturing infrastructure requires investment in facilities, equipment, personnel, systems, maintenance and production processes. Private label manufacturing allows eligible production requirements to be outsourced."
  ],
  [
    "04",
    "Focus on Sales & Brand Growth",
    "With suitable manufacturing activities outsourced, businesses can dedicate more internal resources to pharmaceutical marketing, distribution, product positioning and brand development."
  ],
  [
    "05",
    "Access Established Manufacturing Support",
    "Working with an OEM or Private Label Pharma Manufacturer gives businesses access to existing pharmaceutical production capabilities instead of establishing every manufacturing process independently."
  ],
  [
    "06",
    "Scale Your Pharmaceutical Business",
    "As your pharmaceutical portfolio develops, additional formulations, packaging configurations and production requirements can be evaluated. This makes private label manufacturing suitable for long-term pharmaceutical brand development."
  ]
] as const;
const manufacturingModels = [
  [
    "01",
    "What Is OEM Pharmaceutical Manufacturing?",
    "OEM Pharmaceutical Manufacturing generally involves manufacturing pharmaceutical products according to defined specifications for another company. The requirements can include: OEM manufacturing can provide greater control over how a pharmaceutical product is prepared for a specific brand.",
    [
      "Product formulation",
      "Dosage form",
      "Strength",
      "Packaging",
      "Product specifications",
      "Branding",
      "Labelling"
    ]
  ],
  [
    "02",
    "What Is Private Label Pharmaceutical Manufacturing?",
    "Private Label Pharmaceutical Manufacturing allows a business to select suitable pharmaceutical products and market them under its own commercial brand, subject to applicable requirements. The manufacturing partner manages eligible production requirements while the finished commercial product carries the intended brand presentation.",
    []
  ],
  [
    "03",
    "What Is White Label Pharmaceutical Manufacturing?",
    "White Label Pharmaceutical Manufacturing generally refers to products based on an existing or standardised product format that can be commercially presented under another brand, depending on the manufacturing arrangement. This can provide a streamlined option where extensive product-level customisation is not required.",
    []
  ]
] as const;
const comparisonRows = [
  [
    "Own Brand",
    "Yes",
    "Yes"
  ],
  [
    "Product Selection",
    "Yes",
    "Yes"
  ],
  [
    "Custom Requirements",
    "Greater potential for specification-based requirements",
    "Typically based on suitable available product options"
  ],
  [
    "Packaging Customisation",
    "Available according to requirements",
    "Available according to requirements"
  ],
  [
    "Custom Labelling",
    "Yes",
    "Yes"
  ],
  [
    "Multiple Dosage Forms",
    "Product dependent",
    "Product dependent"
  ],
  [
    "Manufacturing Outsourcing",
    "Yes",
    "Yes"
  ],
  [
    "Suitable for Brand Expansion",
    "Yes",
    "Yes"
  ]
] as const;
const qualityChecklist = [
  "Product specifications",
  "Pharmaceutical formulation requirements",
  "Raw material specifications",
  "Manufacturing processes",
  "Production consistency",
  "Packaging compatibility",
  "Labelling requirements",
  "Applicable quality checks",
  "Product documentation",
  "Traceability requirements"
] as const;
const whyChoose = [
  [
    "01",
    "Diverse Pharmaceutical Product Portfolio",
    "Explore suitable products across multiple pharmaceutical dosage forms to create a broader branded product portfolio."
  ],
  [
    "02",
    "Flexible Private Label Solutions",
    "Select suitable products, packaging formats and manufacturing requirements according to your pharmaceutical business strategy."
  ],
  [
    "03",
    "Custom Packaging Support",
    "Combine pharmaceutical manufacturing with custom private label packaging and brand-specific product presentation."
  ],
  [
    "04",
    "Quality-Focused Manufacturing",
    "Product specifications and manufacturing requirements are coordinated with attention to applicable quality and production processes."
  ],
  [
    "05",
    "Documentation Support",
    "Relevant manufacturing and product documentation requirements can be coordinated according to the pharmaceutical project."
  ],
  [
    "06",
    "Domestic & International Supply Capabilities",
    "Suitable manufacturing projects can be prepared for domestic or international supply requirements based on the applicable product, manufacturing and commercial conditions."
  ]
] as const;
const launchSteps = [
  [
    "01",
    "Choose Your Products",
    "Select suitable pharmaceutical products and dosage forms according to the portfolio you want to build."
  ],
  [
    "02",
    "Define Your Brand Requirements",
    "Determine how your commercial brand should be presented across product labels and packaging."
  ],
  [
    "03",
    "Finalize Packaging",
    "Choose suitable pharmaceutical packaging and pack configurations according to the product."
  ],
  [
    "04",
    "Begin Manufacturing",
    "Once product specifications and applicable requirements are agreed, manufacturing can proceed according to the defined production plan."
  ],
  [
    "05",
    "Receive Brand-Ready Products",
    "Following manufacturing, quality requirements, packaging, labelling and applicable documentation, the products can be prepared in their agreed commercial format. From a single selected product to a broader pharmaceutical range, this End-to-End Private Label Pharmaceutical Manufacturing approach provides a structured pathway for creating Pharmaceutical Products Under Own Brand."
  ]
] as const;
const relatedServices = [
  [
    "01",
    "Pharmaceutical Manufacturing",
    "Explore pharmaceutical manufacturing capabilities across multiple dosage forms and pharmaceutical formulations.",
    "Explore Pharmaceutical Manufacturing",
    "/services/pharmaceutical-manufacturing"
  ],
  [
    "02",
    "Contract Manufacturing",
    "Outsource selected pharmaceutical production through flexible pharmaceutical contract manufacturing solutions.",
    "Explore Contract Manufacturing",
    "/services/contract-manufacturing"
  ],
  [
    "03",
    "Third-Party Manufacturing",
    "Expand your pharmaceutical portfolio using structured third-party pharmaceutical manufacturing support.",
    "Explore Third-Party Manufacturing",
    "/services/third-party-manufacturing"
  ],
  [
    "04",
    "Pharmaceutical Export Services",
    "Connect suitable pharmaceutical production requirements with international supply and export-support services.",
    "Explore Pharmaceutical Export Services",
    "/services/export-services"
  ]
] as const;
const faqs = [
  [
    "What is private label pharmaceutical manufacturing?",
    "Private label pharmaceutical manufacturing is an arrangement in which suitable pharmaceutical products are manufactured and commercially prepared under another company’s own brand identity. Depending on the project, the service can include product selection, manufacturing, custom labelling, pharmaceutical packaging and final commercial presentation."
  ],
  [
    "What is OEM pharmaceutical manufacturing?",
    "OEM pharmaceutical manufacturing involves producing pharmaceutical products according to defined specifications for another company. An OEM Pharmaceutical Manufacturer can support requirements such as formulation, dosage form, strength, production, packaging and labelling depending on the manufacturing arrangement."
  ],
  [
    "What is the difference between OEM and private label manufacturing?",
    "OEM pharmaceutical manufacturing generally provides greater scope for specification-based product requirements, while private label manufacturing often focuses on suitable pharmaceutical products that can be manufactured and commercially presented under a company’s own brand. The exact model depends on the required formulation and level of customisation."
  ],
  [
    "Can I sell pharmaceutical products under my own brand name?",
    "Private label and Own Brand Pharmaceutical Manufacturing are designed to support pharmaceutical products intended for commercial presentation under a company’s own brand. All branding, manufacturing, regulatory and market requirements applicable to the product must still be properly addressed."
  ],
  [
    "What pharmaceutical products are available for private label manufacturing?",
    "Suitable private label manufacturing requirements can include selected tablets, capsules, syrups, oral liquids, injectables, ointments, creams, gels, topical products, antibiotic formulations and generic medicines. Availability depends on product and manufacturing feasibility."
  ],
  [
    "Do you provide custom pharmaceutical packaging and labelling?",
    "Yes. Depending on the product, Medico Pharma can coordinate Private Label Pharmaceutical Packaging, OEM labeling, primary packaging, secondary packaging, custom labels and brand-specific commercial presentation."
  ],
  [
    "Can I choose the products I want to sell under my brand?",
    "Businesses can discuss suitable pharmaceutical products and dosage forms according to their intended portfolio. Product availability and private label feasibility depend on formulation, manufacturing requirements and applicable product considerations."
  ],
  [
    "Do you support bulk private label pharmaceutical manufacturing?",
    "Yes, scalable manufacturing requirements can be evaluated based on the product category, dosage form, formulation, packaging and production volume. Final quantities depend on manufacturing feasibility and agreed production requirements."
  ],
  [
    "Can you manufacture private label pharmaceutical products for international markets?",
    "Suitable international private label pharmaceutical manufacturing projects can be discussed according to product specifications, manufacturing capability, documentation requirements and applicable market requirements."
  ],
  [
    "Who can start a private label pharmaceutical business?",
    "Private label manufacturing can support pharmaceutical startups, established pharmaceutical brands, healthcare businesses, distributors, wholesalers, pharmaceutical marketing companies and other eligible organisations seeking to develop their own branded pharmaceutical portfolio."
  ],
  [
    "What information is required to start a private label project?",
    "Useful initial information includes the required product category, dosage form, formulation or product specifications, strength, expected quantities, packaging requirements, preferred pack size, branding requirements and intended supply requirements."
  ],
  [
    "How can I request an OEM or private label manufacturing quotation?",
    "Share your required pharmaceutical products, dosage forms, expected quantities, packaging preferences and branding requirements with Medico Pharma. Once the project requirements and manufacturing feasibility are reviewed, the appropriate OEM or private label manufacturing arrangement can be discussed."
  ]
] as const;

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "tablet") return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="m7.5 16.5 9-9" /></svg>;
  if (name === "capsule") return <svg {...common}><rect x="3" y="8" width="18" height="8" rx="4" /><path d="M12 8v8" /></svg>;
  if (name === "bottle") return <svg {...common}><path d="M9 3h6M10 3v4l-2 2v11h8V9l-2-2V3" /><path d="M8 12h8" /></svg>;
  if (name === "injectable") return <svg {...common}><path d="m14 3 7 7M13 6l5 5M5 14l5 5M4 20l5-5 7-7M16 4l4-2 2 4-4 2" /></svg>;
  if (name === "topical") return <svg {...common}><path d="M7 3h10l1 5-2 13H8L6 8l1-5Z" /><path d="M7 8h10M9 13h6" /></svg>;
  if (name === "antibiotic") return <svg {...common}><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z" /></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 3 5 6v6c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z" /><path d="m8.5 12 2.1 2.1 4.6-4.7" /></svg>;
  if (name === "package") return <svg {...common}><path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z" /><path d="m4 7 8 4 8-4M12 11v10" /></svg>;
  if (name === "network") return <svg {...common}><circle cx="6" cy="7" r="2.4" /><circle cx="18" cy="7" r="2.4" /><circle cx="12" cy="18" r="2.4" /><path d="m8 8.4 2.6 7M16 8.4l-2.6 7M8.5 7h7" /></svg>;
  if (name === "layers") return <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>;
  if (name === "route") return <svg {...common}><circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><path d="M7 5h5a4 4 0 0 1 4 4 4 4 0 0 1-4 4H9a4 4 0 0 0-4 4" /></svg>;
  if (name === "globe") return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></svg>;
  if (name === "factory") return <svg {...common}><path d="M3 21V9l6 3V8l6 4V5h6v16H3Z" /><path d="M7 17h2M12 17h2M17 17h2" /></svg>;
  return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
}

const delay = (ms: number) => ({ "--pmx-delay": `${ms}ms` } as CSSProperties);

export default function OEMPrivateLabelPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OEM & Private Label Pharmaceutical Manufacturing",
    provider: { "@type": "Organization", name: "Medico Pharma" },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "OEM & Private Label Pharmaceutical Manufacturing",
    description: "Medico Pharma provides OEM and private label pharmaceutical manufacturing in India with custom products, packaging, labelling and scalable production support for brands.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
      { "@type": "ListItem", position: 3, name: "OEM / Private Label" },
    ],
  };

  return (
    <main className="pmx-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO — the only image on this page */}
      <section className="pmx-hero">
        <div className="pmx-hero-orb pmx-hero-orb-a" aria-hidden="true" />
        <div className="pmx-hero-orb pmx-hero-orb-b" aria-hidden="true" />

        <div className="pmx-container pmx-hero-grid">
          <div className="pmx-hero-copy">
            <h1 className="hero-anim" style={{ animationDelay: "180ms" }}>
              OEM &amp; Private Label Manufacturing in <em>India</em>
            </h1>

            <p className="pmx-anim" style={delay(260)}>
              Medico Pharma provides OEM and private label pharmaceutical manufacturing in India for brands seeking
              flexible product, packaging, labelling and scalable production support.
            </p>

            <div className="pmx-hero-actions pmx-anim" style={delay(360)}>
              <Link href="/contact" className="pmx-button pmx-button-solid">
                Start Your Private Label Project <span aria-hidden="true">→</span>
              </Link>
              <a href="#products" className="pmx-button pmx-button-quiet">
                Explore Private Label Products <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="pmx-hero-visual pmx-anim" style={delay(300)}>
            <div
              className="pmx-image-slot pmx-image-slot-hero has-image"
              style={{ backgroundImage: 'url("/OEM & Private Label Manufacturing.png")' }}
              role="img"
              aria-label="OEM and private label pharmaceutical manufacturing"
            />

            <article className="pmx-hero-float pmx-hero-float-a">
              <span><i aria-hidden="true" /> Brand production signal</span>
              <svg viewBox="0 0 200 42" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 21h48l7-14 8 28 7-22 6 8h20l7-6 7 12 6-6h84" />
              </svg>
              <strong>Brand-ready process</strong>
            </article>

            <article className="pmx-hero-float pmx-hero-float-b">
              <span>Private label capability</span>
              <strong>07 product routes</strong>
              <div className="pmx-hero-bars" aria-hidden="true"><b /><b /><b /><b /></div>
            </article>
          </div>
        </div>

        <div className="pmx-container">
          <div className="pmx-hero-index" aria-label="OEM and private label overview">
            {heroIndex.map(([number, title, meta]) => (
              <div key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <small>{meta}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — OVERVIEW */}
      <section className="pmx-section pmx-intro">
        <div className="pmx-container pmx-intro-grid pmx-reveal">
          <div className="pmx-section-code"><span>01</span><b>Overview</b></div>
          <div className="pmx-intro-copy">
            <p><strong>Launch Pharmaceutical Products Under Your Own Brand with Flexible Manufacturing, Packaging & Private Label Support</strong></p>
            <p>Build and expand your pharmaceutical product portfolio with Medico Pharma’s flexible OEM Private Label manufacturing solutions.</p><p>We provide Private Label Pharmaceutical Manufacturing and OEM Pharmaceutical Manufacturing support for pharmaceutical brands, healthcare companies, distributors and businesses that want to introduce pharmaceutical products under their own commercial brand.</p><p>Our services can support product selection, pharmaceutical formulation manufacturing, production coordination, OEM labeling, custom pharmaceutical packaging, brand integration and market-ready product preparation.</p><p>From tablets and capsules to syrups, selected injectables, ointments, topical formulations, antibiotic products and generic medicines, Medico Pharma provides an integrated approach to Own Brand Pharmaceutical Manufacturing.</p><p>Whether you are launching your first product range or expanding an established pharmaceutical portfolio, our goal is to provide flexible OEM Pharma Manufacturing and private label solutions built around your product, packaging and production requirements.</p>
          </div>
        </div>
      </section>

      {/* 02 — INTRODUCTION */}
      <section className="pmx-section pmx-intro">
        <div className="pmx-container pmx-intro-grid pmx-reveal">
          <div className="pmx-section-code"><span>02</span><b>Introduction</b></div>
          <div className="pmx-intro-copy">
            <h2>Build Your Pharmaceutical Brand with OEM & Private Label Solutions</h2>
            <p>Launching pharmaceutical products under your own brand does not always require establishing a complete manufacturing facility.</p><p>With Pharmaceutical Private Label Manufacturing, businesses can develop a branded pharmaceutical product portfolio while outsourcing suitable manufacturing, packaging and labelling requirements to an experienced production partner.</p><p>Medico Pharma provides Private Label Pharmaceutical Manufacturing Services designed to simplify this process.</p><p>Our OEM and private label support can include:</p>
          </div>
        </div>

        <div className="pmx-container">
          <div className="pmx-service-ledger pmx-reveal" style={delay(80)}>
            {introServices.map((item, index) => (
              <div className="pmx-service-ledger-row" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <i aria-hidden="true">↗</i>
              </div>
            ))}
          </div>

          <div className="pmx-ledger-note pmx-reveal" style={delay(120)}>
            <p>Through a structured End-to-End Private Label Pharmaceutical Manufacturing approach, we help companies move from product requirements to finished, brand-ready pharmaceutical products.</p><p>For businesses searching for a Private Label Pharma Manufacturer in India or an OEM Pharma Manufacturer in India, Medico Pharma provides flexible pharmaceutical production solutions designed around individual business requirements.</p>
          </div>
        </div>
      </section>

      {/* 03 — OEM & PRIVATE LABEL CAPABILITIES */}
      <section className="pmx-section pmx-audience-section" id="capabilities">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>03</b> OEM &amp; private label capabilities</span>
              <h2>Our OEM & Private Label Pharmaceutical Capabilities</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Our OEM Pharmaceutical Manufacturing Services are designed to give businesses flexibility in choosing products, formulations, packaging and brand presentation.</p><p>Rather than providing only manufacturing, we coordinate multiple stages required to prepare pharmaceutical products for commercial distribution.</p>
            </div>
          </div>

          <div className="pmx-audience-list">
            {oemCapabilities.map(([number, title, text, items], index) => (
              <article className="pmx-audience-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <h3>{title}</h3>
                <div>
                  <p>{text}</p>
                  {items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}
                </div>
                <i aria-hidden="true">→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — PRIVATE LABEL PRODUCTS */}
      <section className="pmx-section pmx-capabilities" id="products">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>04</b> Products available for private label</span>
              <h2>Pharmaceutical Products for Your Private Label Brand</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Medico Pharma supports Private Label Medicine Manufacturing across selected pharmaceutical dosage forms.</p>
              <p>Each product category has different formulation, manufacturing, packaging and labelling requirements.</p>
              <p>Final specifications depend on the agreed product formulation and manufacturing feasibility.</p>
            </div>
          </div>

          <div className="pmx-capability-list">
            {productCards.map((capability, index) => (
              <article className="pmx-capability-row pmx-reveal" key={capability.title} style={delay(index * 60)}>
                <div className="pmx-capability-id">
                  <span>{capability.number}</span>
                  <i aria-hidden="true"><Icon name={capability.icon as IconName} /></i>
                  <small>{capability.label}</small>
                </div>

                <div className="pmx-capability-story">
                  <h3>{capability.title}</h3>
                  <p>{capability.intro}</p>
                  {capability.outro && <p className="pmx-capability-outro">{capability.outro}</p>}
                </div>

                <div className="pmx-spec-panel">
                  <div className="pmx-spec-head">
                    <span>Specification</span>
                    <span>Available options</span>
                  </div>
                  <dl className="pmx-spec-matrix">
                    {capability.rows.map(([label, value]) => (
                      <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — WHO WE HELP */}
      <section className="pmx-section pmx-audience-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>05</b> Who we help</span>
              <h2>Private Label Solutions for Pharmaceutical & Healthcare Businesses</h2>
            </div>
            <p className="pmx-heading-copy">Our OEM and private label pharmaceutical services can support different types of organisations looking to create or expand pharmaceutical product portfolios.</p>
          </div>

          <div className="pmx-audience-list">
            {audiences.map(([number, title, text], index) => (
              <article className="pmx-audience-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i aria-hidden="true">→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — PROCESS */}
      <section className="pmx-process-section">
        <div className="pmx-container">
          <div className="pmx-process-heading pmx-reveal">
            <div>
              <span className="pmx-kicker pmx-kicker-light"><b>06</b> OEM &amp; private label process</span>
              <h2>Our OEM & Private Label Manufacturing Process</h2>
            </div>
            <p>Our process is designed to connect product selection, manufacturing, packaging and brand requirements through a structured workflow.</p>
          </div>

          <div className="pmx-process-line">
            {processSteps.map(([number, title, text, items], index) => (
              <article className="pmx-process-step pmx-reveal" key={title} style={delay(index * 60)}>
                <span className="pmx-process-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}
                </div>
                <i aria-hidden="true">↘</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — CUSTOM BRANDING & PACKAGING */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>07</b> Custom branding &amp; packaging</span>
              <h2>Custom Packaging & Branding for Your Pharmaceutical Products</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>The key difference between standard pharmaceutical manufacturing and Private Label Pharmaceutical Manufacturing is not only what is produced, but how the finished product represents your brand.</p><p>Medico Pharma can coordinate Pharmaceutical Branding and Packaging requirements to help transform suitable pharmaceutical formulations into brand-ready commercial products.</p>
            </div>
          </div>

          <div className="pmx-model-list">
            {brandingItems.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "package" : index === 1 ? "layers" : index === 2 ? "network" : "check"} /></i>
                <h3>{title}</h3>
                <div>
                  <p>{text}</p>
                  {items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}
                </div>
              </article>
            ))}
          </div>

          <div className="pmx-table-wrap pmx-reveal" style={delay(100)}>
            <table className="pmx-table">
              <thead><tr><th>Product Format</th><th>Possible Packaging Formats</th></tr></thead>
              <tbody>
                {packagingRows.map(([format, packaging]) => (
                  <tr key={format}><td>{format}</td><td>{packaging}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 08 — FLEXIBLE PRIVATE LABEL MANUFACTURING */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>08</b> Flexible private label manufacturing</span>
              <h2>Flexible Private Label Solutions Designed Around Your Business</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Different pharmaceutical businesses have different portfolio sizes, product categories and production requirements.</p><p>Our Private Label Pharmaceutical Manufacturing Services are designed to offer flexibility across product selection, dosage forms, packaging and production planning.</p>
            </div>
          </div>

          <div className="pmx-model-list">
            {flexibleSupport.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "layers" : index === 1 ? "factory" : index === 2 ? "route" : index === 3 ? "package" : "globe"} /></i>
                <h3>{title}</h3>
                <div>
                  <p>{text}</p>
                  {items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — BENEFITS */}
      <section className="pmx-section pmx-audience-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>09</b> Benefits of private label manufacturing</span>
              <h2>Benefits of Private Label Pharmaceutical Manufacturing</h2>
            </div>
            <p className="pmx-heading-copy">Working with a Private Label Pharmaceutical Manufacturer can provide a practical way to develop a pharmaceutical brand without establishing all production capabilities internally.</p>
          </div>

          <div className="pmx-audience-list">
            {benefits.map(([number, title, text], index) => (
              <article className="pmx-audience-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i aria-hidden="true">→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — OEM VS PRIVATE LABEL */}
      <section className="pmx-section pmx-glance-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>10</b> OEM vs private label manufacturing</span>
              <h2>OEM vs Private Label Pharmaceutical Manufacturing</h2>
            </div>
            <p className="pmx-heading-copy">The terms OEM, private label and white label are sometimes used interchangeably, but the manufacturing arrangements can differ depending on how much product customisation is required.</p>
          </div>

          <div className="pmx-model-list">
            {manufacturingModels.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "factory" : index === 1 ? "package" : "layers"} /></i>
                <h3>{title}</h3>
                <div>
                  <p>{text}</p>
                  {items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}
                </div>
              </article>
            ))}
          </div>

          <div className="pmx-table-wrap pmx-reveal" style={delay(100)}>
            <table className="pmx-table">
              <thead>
                <tr><th>Requirement</th><th>OEM Manufacturing</th><th>Private Label Manufacturing</th></tr>
              </thead>
              <tbody>
                {comparisonRows.map(([requirement, oem, privateLabel]) => (
                  <tr key={requirement}><td>{requirement}</td><td>{oem}</td><td>{privateLabel}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pmx-ledger-note pmx-reveal" style={delay(120)}>
            <p>The best model depends on how much formulation, manufacturing and packaging customisation your pharmaceutical project requires.</p>
          </div>
        </div>
      </section>

      {/* 11 — QUALITY */}
      <section className="pmx-section pmx-quality-section">
        <div className="pmx-container pmx-quality-grid pmx-quality-grid-balanced">
          <div className="pmx-quality-copy pmx-reveal">
            <span className="pmx-kicker"><b>11</b> Quality-focused private label manufacturing</span>
            <h2>Quality-Focused OEM & Private Label Pharmaceutical Manufacturing</h2>
            <p>Quality considerations remain important whether pharmaceutical products are manufactured for an established company or under a new private label brand.</p>
            <p>Our approach focuses on clearly defined product requirements, manufacturing coordination, suitable packaging and relevant documentation.</p>
          </div>

          <div className="pmx-quality-side pmx-reveal" style={delay(90)}>
            <div className="pmx-quality-list pmx-quality-list-balanced">
              {qualityChecklist.map((item) => (
                <span key={item}><i aria-hidden="true"><Icon name="check" /></i>{item}</span>
              ))}
            </div>

            <div className="pmx-quality-cert-note">
              <p>Specific certification requirements must always be verified for the manufacturing facility associated with the applicable product.</p>
              <p>If your project specifically requires a WHO GMP Private Label Pharmaceutical Manufacturer or a GMP Certified Private Label Pharmaceutical Manufacturer, the relevant facility certification and product capability should be confirmed before finalising the manufacturing arrangement.</p>
              <p>This avoids making certification claims that do not apply to a particular product or facility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12 — WHY CHOOSE */}
      <section className="pmx-section pmx-why-section">
        <div className="pmx-container pmx-why-grid">
          <div className="pmx-why-intro pmx-reveal">
            <span className="pmx-kicker"><b>12</b> Why choose Medico Pharma</span>
            <h2>Why Choose Medico Pharma for OEM & Private Label Manufacturing?</h2>
            <p>Choosing a Private Label Pharmaceutical Manufacturing Company requires more than simply selecting products from a catalogue.</p><p>Your manufacturing partner should be able to coordinate product requirements, manufacturing, packaging, labelling and commercial preparation through a structured process.</p><p>Medico Pharma provides flexible OEM Pharma Manufacturing and private label support designed around these requirements.</p>
          </div>

          <div className="pmx-proof-ledger pmx-reveal" style={delay(100)}>
            {whyChoose.map(([number, title, text]) => (
              <article className="pmx-proof-row" key={title}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — LAUNCH YOUR OWN BRAND */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>13</b> Launch your own pharmaceutical brand</span>
              <h2>From Product Selection to Market-Ready Pharmaceutical Products</h2>
            </div>
            <p className="pmx-heading-copy">Medico Pharma helps simplify the journey from choosing pharmaceutical products to developing a complete own-brand product range.</p>
          </div>

          <div className="pmx-model-list">
            {launchSteps.map(([number, title, text], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "layers" : index === 1 ? "network" : index === 2 ? "package" : index === 3 ? "factory" : "check"} /></i>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — RELATED SERVICES */}
      <section className="pmx-section pmx-related-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>14</b> Related pharmaceutical services</span>
              <h2>Explore Our Other Pharmaceutical Services</h2>
            </div>
            <p className="pmx-heading-copy">OEM and private label production can be combined with other Medico Pharma pharmaceutical services depending on your manufacturing and supply requirements.</p>
          </div>

          <div className="pmx-related-list">
            {relatedServices.map(([number, title, text, cta, href], index) => (
              <Link className="pmx-related-row pmx-reveal" href={href} key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p><p><strong>{cta}</strong></p></div>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 15 — FINAL CTA — animated visual, no image */}
      <section className="pmx-final-cta">
        <div className="pmx-container pmx-final-grid pmx-final-grid-rich">
          <div className="pmx-final-copy pmx-reveal" style={delay(100)}>
            <span className="pmx-kicker pmx-kicker-light"><b>15</b> Own-brand pharmaceutical manufacturing</span>
            <h2>Ready to Launch Pharmaceutical Products Under Your Own Brand?</h2>
            <p>Turn suitable pharmaceutical products into a professional own-brand portfolio with Medico Pharma.</p><p>Our OEM & Private Label Pharmaceutical Manufacturing in India solutions combine product selection, pharmaceutical manufacturing, custom packaging, OEM labeling and brand presentation through one coordinated process.</p><p>Whether you require Private Label Pharma Manufacturing, OEM Pharmaceutical Manufacturing, custom pharmaceutical manufacturing or complete own-brand product support, we can help you explore a solution aligned with your product and production requirements.</p>

            <div className="pmx-final-actions">
              <Link href="/contact" className="pmx-button pmx-button-light">
                Discuss Your Private Label Requirements <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="pmx-text-link">
                Request a Private Label Quote <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="pmx-final-system pmx-reveal" style={delay(220)} aria-label="OEM and private label manufacturing workflow overview">
            <div className="pmx-final-system-glow" aria-hidden="true" />
            <div className="pmx-system-topline">
              <span><i aria-hidden="true" /> Own-brand manufacturing route</span>
              <small>Structured workflow</small>
            </div>

            <div className="pmx-system-route">
              <div className="pmx-system-rail" aria-hidden="true"><i /></div>

              <div className="pmx-system-stage">
                <span>01</span>
                <div><strong>Product selection</strong><small>Dosage form · Portfolio · Quantity</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>02</span>
                <div><strong>Formulation &amp; specifications</strong><small>Strength · Requirements · Feasibility</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>03</span>
                <div><strong>Brand &amp; packaging</strong><small>Label · Carton · Pack configuration</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>04</span>
                <div><strong>Manufacturing</strong><small>Production · Quality coordination</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>05</span>
                <div><strong>Brand-ready supply</strong><small>Documentation · Final commercial format</small></div>
                <b aria-hidden="true">✓</b>
              </div>
            </div>

            <div className="pmx-system-metrics" aria-label="OEM and private label capability highlights">
              <div><strong>07</strong><span>Product routes</span></div>
              <div><strong>05</strong><span>Brand steps</span></div>
              <div><strong>OEM</strong><span>Own-brand model</span></div>
            </div>

            <div className="pmx-system-status">
              <span><i aria-hidden="true" /> Private label workflow active</span>
              <strong>Brand-ready support</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 16 — FAQ */}
      <section className="pmx-section pmx-faq-section" id="faq">
        <div className="pmx-container pmx-faq-grid">
          <div className="pmx-faq-intro pmx-reveal">
            <span className="pmx-kicker"><b>16</b> Frequently asked questions</span>
            <h2>Frequently Asked Questions About OEM & Private Label Pharmaceutical Manufacturing</h2>
            <p>Answers to common questions about OEM, private label pharmaceutical manufacturing, packaging, labelling and own-brand production requirements.</p>
          </div>

          <div className="pmx-faq-list">
            {faqs.map(([question, answer], index) => (
              <details className="pmx-faq-item pmx-reveal" key={question} open={index === 0} style={delay(index * 60)}>
                <summary><span>{question}</span><i aria-hidden="true" /></summary>
                <div className="pmx-faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>


      <style>{`
        .pmx-final-grid-rich {
          grid-template-columns: minmax(0, 1.04fr) minmax(390px, .96fr);
          gap: clamp(40px, 6vw, 92px);
          align-items: center;
        }

        .pmx-final-grid-rich .pmx-final-copy {
          max-width: 720px;
        }

        .pmx-final-system {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          min-height: 520px;
          padding: clamp(22px, 3vw, 34px);
          border: 1px solid rgba(255, 255, 255, .22);
          border-radius: 30px;
          background:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.035));
          background-size: 38px 38px, 38px 38px, auto;
          box-shadow: 0 30px 80px rgba(0, 0, 0, .16), inset 0 1px 0 rgba(255, 255, 255, .12);
          backdrop-filter: blur(8px);
        }

        .pmx-final-system::before,
        .pmx-final-system::after {
          content: "";
          position: absolute;
          z-index: -1;
          border-radius: 999px;
          pointer-events: none;
        }

        .pmx-final-system::before {
          width: 260px;
          height: 260px;
          right: -110px;
          top: -90px;
          border: 1px solid rgba(184, 255, 75, .20);
          box-shadow: 0 0 0 34px rgba(184, 255, 75, .035), 0 0 0 68px rgba(184, 255, 75, .018);
          animation: pmxOrbit 11s linear infinite;
        }

        .pmx-final-system::after {
          width: 170px;
          height: 170px;
          left: -70px;
          bottom: -80px;
          background: radial-gradient(circle, rgba(184, 255, 75, .14), rgba(184, 255, 75, 0) 68%);
          animation: pmxBreathe 5s ease-in-out infinite;
        }

        .pmx-final-system-glow {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(circle at 78% 30%, rgba(184,255,75,.10), transparent 34%);
          animation: pmxGlowShift 8s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .pmx-system-topline,
        .pmx-system-status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .pmx-system-topline {
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,.14);
          color: rgba(255,255,255,.82);
          font-size: 12px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .pmx-system-topline span,
        .pmx-system-status span {
          display: inline-flex;
          align-items: center;
          gap: 9px;
        }

        .pmx-system-topline i,
        .pmx-system-status i {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #b8ff4b;
          box-shadow: 0 0 0 6px rgba(184,255,75,.10);
          animation: pmxPulse 2.2s ease-in-out infinite;
        }

        .pmx-system-topline small {
          color: rgba(255,255,255,.48);
          font-size: 10px;
          letter-spacing: .09em;
        }

        .pmx-system-route {
          position: relative;
          display: grid;
          gap: 10px;
          padding: 24px 0 22px;
        }

        .pmx-system-rail {
          position: absolute;
          left: 19px;
          top: 39px;
          bottom: 37px;
          width: 1px;
          background: linear-gradient(to bottom, rgba(184,255,75,.12), rgba(184,255,75,.60), rgba(184,255,75,.12));
          overflow: hidden;
        }

        .pmx-system-rail i {
          position: absolute;
          left: -2px;
          top: -18px;
          width: 5px;
          height: 22px;
          border-radius: 999px;
          background: #d7ff94;
          box-shadow: 0 0 14px rgba(184,255,75,.9);
          animation: pmxSignal 3.8s ease-in-out infinite;
        }

        .pmx-system-stage {
          position: relative;
          display: grid;
          grid-template-columns: 40px minmax(0, 1fr) 20px;
          align-items: center;
          gap: 13px;
          min-height: 62px;
          padding: 11px 14px 11px 0;
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 16px;
          background: rgba(2, 45, 24, .34);
          color: white;
          transition: transform .35s ease, border-color .35s ease, background .35s ease;
          animation: pmxStageFloat 7s ease-in-out infinite;
        }

        .pmx-system-stage:nth-of-type(3) { animation-delay: -1.2s; }
        .pmx-system-stage:nth-of-type(4) { animation-delay: -2.4s; }
        .pmx-system-stage:nth-of-type(5) { animation-delay: -3.6s; }
        .pmx-system-stage:nth-of-type(6) { animation-delay: -4.8s; }

        .pmx-system-stage:hover {
          transform: translateX(6px);
          border-color: rgba(184,255,75,.42);
          background: rgba(255,255,255,.085);
        }

        .pmx-system-stage > span {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          margin-left: 0;
          border-radius: 999px;
          border: 1px solid rgba(184,255,75,.34);
          background: rgba(3, 58, 30, .78);
          color: #d7ff94;
          font-size: 10px;
          letter-spacing: .08em;
        }

        .pmx-system-stage strong {
          display: block;
          margin-bottom: 4px;
          font-size: 14px;
          line-height: 1.25;
        }

        .pmx-system-stage small {
          display: block;
          color: rgba(255,255,255,.50);
          font-size: 10px;
          line-height: 1.35;
        }

        .pmx-system-stage > b {
          color: #b8ff4b;
          font-size: 13px;
          font-weight: 600;
        }

        .pmx-system-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 18px;
        }

        .pmx-system-metrics > div {
          padding: 14px 12px;
          border: 1px solid rgba(255,255,255,.11);
          border-radius: 14px;
          background: rgba(255,255,255,.045);
        }

        .pmx-system-metrics strong {
          display: block;
          margin-bottom: 3px;
          color: #fff;
          font-size: 20px;
          line-height: 1;
        }

        .pmx-system-metrics span {
          color: rgba(255,255,255,.47);
          font-size: 9px;
          letter-spacing: .04em;
          text-transform: uppercase;
        }

        .pmx-system-status {
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,.14);
          color: rgba(255,255,255,.66);
          font-size: 11px;
        }

        .pmx-system-status strong {
          color: #d7ff94;
          font-size: 11px;
          font-weight: 600;
        }

        @keyframes pmxSignal {
          0% { top: -18px; opacity: 0; }
          12% { opacity: 1; }
          82% { opacity: 1; }
          100% { top: calc(100% - 4px); opacity: 0; }
        }

        @keyframes pmxPulse {
          0%, 100% { transform: scale(.82); opacity: .65; }
          50% { transform: scale(1.08); opacity: 1; }
        }

        @keyframes pmxOrbit {
          to { transform: rotate(360deg); }
        }

        @keyframes pmxBreathe {
          0%, 100% { transform: scale(.86); opacity: .55; }
          50% { transform: scale(1.14); opacity: .95; }
        }

        @keyframes pmxGlowShift {
          from { transform: translate3d(-2%, -2%, 0) scale(.96); }
          to { transform: translate3d(5%, 4%, 0) scale(1.08); }
        }

        @keyframes pmxStageFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }


        /* Balance the Quality section without adding another image. */
        .pmx-quality-grid-balanced {
          grid-template-columns: minmax(0, .9fr) minmax(420px, 1.1fr);
          align-items: start;
          gap: clamp(48px, 7vw, 110px);
        }

        .pmx-quality-grid-balanced .pmx-quality-copy {
          max-width: 560px;
        }

        .pmx-quality-side {
          min-width: 0;
          padding-top: 4px;
        }

        .pmx-quality-list-balanced {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin: 0 0 24px;
        }

        .pmx-quality-list-balanced > span {
          min-height: 50px;
          margin: 0;
        }

        .pmx-quality-cert-note {
          padding-top: 20px;
          border-top: 1px solid rgba(10, 100, 45, .16);
        }

        .pmx-quality-cert-note p {
          max-width: 680px;
          margin: 0 0 12px;
        }

        @media (max-width: 980px) {
          .pmx-quality-grid-balanced {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .pmx-quality-grid-balanced .pmx-quality-copy {
            max-width: 760px;
          }
        }

        @media (max-width: 620px) {
          .pmx-quality-list-balanced {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 980px) {
          .pmx-final-grid-rich {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .pmx-final-grid-rich .pmx-final-copy {
            max-width: 760px;
          }

          .pmx-final-system {
            min-height: auto;
          }
        }

        @media (max-width: 560px) {
          .pmx-final-system {
            padding: 18px;
            border-radius: 22px;
          }

          .pmx-system-topline small { display: none; }
          .pmx-system-metrics { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pmx-final-system::before,
          .pmx-final-system::after,
          .pmx-final-system-glow,
          .pmx-system-topline i,
          .pmx-system-status i,
          .pmx-system-rail i,
          .pmx-system-stage {
            animation: none !important;
          }
        }
      `}</style>

      <Script id="pmx-reveal" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: revealScript }} />
    </main>
  );
}
