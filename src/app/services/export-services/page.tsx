import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Pharmaceutical Export Services from India | Medico Pharma",
  description:
    "Medico Pharma provides pharmaceutical export services from India for medicines, formulations and healthcare products with packaging, documentation and global supply support.",
  alternates: { canonical: "/services/export-services" },
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
  ["01", "Product supply", "Tablets · Capsules · Syrups · Topicals"],
  ["02", "Export support", "Packaging · Documentation · Coordination"],
  ["03", "Supply models", "Bulk · Recurring · Private label"],
  ["04", "Global markets", "International B2B pharmaceutical supply"],
] as const;

const introServices = [
  "Pharmaceutical product export",
  "Medicine export services",
  "Generic medicine export",
  "Pharmaceutical formulation export",
  "Finished dosage form export",
  "Bulk pharmaceutical supply",
  "Pharmaceutical manufacturing for export",
  "Private label pharmaceutical export",
  "Third party pharmaceutical manufacturing for export",
  "Pharmaceutical contract manufacturing for export",
  "Export packaging",
  "Export packing",
  "Export documentation assistance",
  "Pharmaceutical regulatory documentation coordination",
  "Pharmaceutical export logistics",
  "Export shipping coordination",
  "International supply support"
] as const;
const capabilities = [
  [
    "01",
    "Pharmaceutical Product Export",
    "Medico Pharma coordinates the supply of selected pharmaceutical products across multiple dosage forms. As a Pharmaceutical Products Exporter from India, our role is to connect product requirements with manufacturing availability, packaging, documentation and international supply coordination.",
    []
  ],
  [
    "02",
    "Generic Medicine Export",
    "We support suitable Generic Medicine Exporter from India requirements for companies sourcing generic pharmaceutical formulations. Products can include selected tablets, capsules, syrups and other compatible dosage forms based on manufacturing and export feasibility.",
    []
  ],
  [
    "03",
    "Bulk Pharmaceutical Supply",
    "Companies requiring recurring or larger pharmaceutical quantities can discuss bulk supply requirements based on product category, dosage form and available manufacturing capacity.",
    []
  ],
  [
    "04",
    "Export Packaging Support",
    "Our Pharmaceutical Export Packaging support can include suitable primary packaging, secondary packaging, commercial packing and shipment-ready product preparation.",
    []
  ],
  [
    "05",
    "Export Documentation Assistance",
    "Pharmaceutical exports may require commercial, product, shipping and destination-specific documentation. Medico Pharma can coordinate applicable Pharmaceutical Export Documentation Services according to the individual product and export requirement.",
    []
  ],
  [
    "06",
    "International Supply Coordination",
    "Our export support connects manufacturing, packaging, documentation and shipment preparation to create a more organised international pharmaceutical supply process.",
    []
  ]
] as const;
const productCards = [
  {
    "number": "01",
    "title": "Pharmaceutical Tablet Export",
    "intro": "Pharmaceutical tablets are available across selected product categories and formulations depending on manufacturing and export requirements.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical tablets"
      ],
      [
        "Formulation",
        "Generic or selected pharmaceutical formulation"
      ],
      [
        "Strength",
        "According to approved product specification"
      ],
      [
        "Tablet Type",
        "Product dependent"
      ],
      [
        "Coating",
        "Where applicable"
      ],
      [
        "Primary Packaging",
        "Blister, strip, bottle or suitable format"
      ],
      [
        "Secondary Packaging",
        "Export carton / commercial packaging"
      ],
      [
        "Pack Size",
        "According to product requirement"
      ],
      [
        "Labelling",
        "Product and destination-specific where applicable"
      ],
      [
        "Supply Format",
        "Commercial or bulk pharmaceutical supply"
      ],
      [
        "Manufacturing Model",
        "Direct, contract or third-party manufacturing support"
      ],
      [
        "Documentation",
        "Applicable product and export documentation"
      ],
      [
        "Export Supply",
        "Subject to destination and product feasibility"
      ]
    ],
    "outro": "Tablet products can form part of broader Finished Pharmaceutical Formulations Exporter requirements.",
    "icon": "globe",
    "label": "Tablet international supply"
  },
  {
    "number": "02",
    "title": "Pharmaceutical Capsule Export",
    "intro": "Medico Pharma supports suitable capsule formulations for international pharmaceutical supply.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical capsules"
      ],
      [
        "Formulation",
        "Product-specific"
      ],
      [
        "Capsule Type",
        "According to formulation"
      ],
      [
        "Strength",
        "Product dependent"
      ],
      [
        "Fill Composition",
        "According to pharmaceutical formulation"
      ],
      [
        "Primary Packaging",
        "Blister, strip or bottle"
      ],
      [
        "Secondary Packaging",
        "Export-ready carton"
      ],
      [
        "Pack Configuration",
        "According to commercial requirement"
      ],
      [
        "Labelling",
        "Suitable destination-specific format where required"
      ],
      [
        "Production",
        "Pharmaceutical manufacturing for export"
      ],
      [
        "Supply",
        "Commercial / bulk"
      ],
      [
        "Documentation",
        "Applicable export documentation"
      ]
    ],
    "outro": "Capsules can be supplied as part of broader Pharmaceutical Formulations Exporter from India requirements.",
    "icon": "layers",
    "label": "Capsule international supply"
  },
  {
    "number": "03",
    "title": "Pharmaceutical Syrup & Oral Liquid Export",
    "intro": "Selected pharmaceutical syrups and oral liquid formulations can be prepared for international supply based on product and destination requirements.",
    "rows": [
      [
        "Dosage Form",
        "Syrup / oral liquid"
      ],
      [
        "Formulation",
        "Product-specific"
      ],
      [
        "Strength",
        "According to specification"
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
        "Product dependent"
      ],
      [
        "Measuring Component",
        "Where applicable"
      ],
      [
        "Labelling",
        "Product-specific"
      ],
      [
        "Secondary Packaging",
        "Export carton"
      ],
      [
        "Shipment Preparation",
        "Suitable export packing"
      ],
      [
        "Documentation",
        "Applicable pharmaceutical export documentation"
      ],
      [
        "Supply",
        "Subject to product and destination feasibility"
      ]
    ],
    "outro": "",
    "icon": "factory",
    "label": "Liquid dosage export"
  },
  {
    "number": "04",
    "title": "Injectable Pharmaceutical Export",
    "intro": "Selected injectable products may be considered for international pharmaceutical supply depending on formulation, production capability, packaging and destination requirements.",
    "rows": [
      [
        "Dosage Form",
        "Selected injectable products"
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
        "Product dependent"
      ],
      [
        "Primary Packaging",
        "Injectable-specific pharmaceutical packaging"
      ],
      [
        "Secondary Packaging",
        "Export-compatible commercial packaging"
      ],
      [
        "Labelling",
        "Product and destination dependent"
      ],
      [
        "Documentation",
        "Product-specific"
      ],
      [
        "Manufacturing",
        "Pharmaceutical manufacturing for export"
      ],
      [
        "Supply",
        "Subject to regulatory and export feasibility"
      ]
    ],
    "outro": "All injectable export requirements should be evaluated individually.",
    "icon": "package",
    "label": "Injectable product export"
  },
  {
    "number": "05",
    "title": "Antibiotic Medicine Export",
    "intro": "Medico Pharma supports suitable antibiotic pharmaceutical formulations for international supply based on product feasibility and applicable manufacturing requirements.",
    "rows": [
      [
        "Product Category",
        "Selected antibiotic medicines"
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
        "Primary Packaging",
        "Suitable pharmaceutical packaging"
      ],
      [
        "Secondary Packaging",
        "Export-ready packaging"
      ],
      [
        "Labelling",
        "Product-specific"
      ],
      [
        "Commercial Configuration",
        "According to agreed requirement"
      ],
      [
        "Supply",
        "Bulk / commercial pharmaceutical supply"
      ],
      [
        "Documentation",
        "Applicable export documentation"
      ]
    ],
    "outro": "",
    "icon": "shield",
    "label": "Antibiotic medicine export"
  },
  {
    "number": "06",
    "title": "Ointment & Topical Pharmaceutical Export",
    "intro": "Selected ointments, creams, gels and topical pharmaceutical formulations can be considered for export according to formulation, packaging and destination requirements.",
    "rows": [
      [
        "Dosage Form",
        "Ointment, cream, gel or topical"
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
        "Primary Packaging",
        "Tube, container or suitable format"
      ],
      [
        "Pack Size",
        "According to commercial requirement"
      ],
      [
        "Secondary Packaging",
        "Export carton"
      ],
      [
        "Labelling",
        "Product-specific"
      ],
      [
        "Manufacturing",
        "Pharmaceutical manufacturing for export"
      ],
      [
        "Export Packing",
        "Appropriate shipment-ready packing"
      ],
      [
        "Documentation",
        "Applicable product documentation"
      ]
    ],
    "outro": "",
    "icon": "network",
    "label": "Topical product export"
  },
  {
    "number": "07",
    "title": "Generic Pharmaceutical Product Export",
    "intro": "Medico Pharma can support Generic Pharmaceutical Exporter from India requirements across suitable pharmaceutical formulations.",
    "rows": [
      [
        "Product Type",
        "Generic pharmaceutical product"
      ],
      [
        "Dosage Form",
        "Product dependent"
      ],
      [
        "Formulation",
        "Approved / suitable formulation"
      ],
      [
        "Strength",
        "Product-specific"
      ],
      [
        "Primary Packaging",
        "Dosage-form appropriate"
      ],
      [
        "Secondary Packaging",
        "Commercial / export configuration"
      ],
      [
        "Labelling",
        "Product-specific"
      ],
      [
        "Quantity",
        "According to supply requirement"
      ],
      [
        "Manufacturing",
        "Direct / contract / third-party manufacturing support"
      ],
      [
        "Supply Model",
        "Recurring or project-based"
      ],
      [
        "Documentation",
        "Applicable pharmaceutical documentation"
      ],
      [
        "Export Support",
        "Subject to destination requirements"
      ]
    ],
    "outro": "",
    "icon": "route",
    "label": "Generic pharmaceutical export"
  },
  {
    "number": "08",
    "title": "Healthcare & Medical Product Export",
    "intro": "Suitable healthcare and medical products can also form part of Medico Pharma’s broader international supply requirements where product availability and destination regulations permit. Product categories and specifications should be reviewed individually before export commitments are made.",
    "rows": [],
    "outro": "",
    "icon": "check",
    "label": "Healthcare & medical products"
  }
] as const;
const whoServe = [
  [
    "01",
    "Pharmaceutical Importers",
    "Import-focused pharmaceutical businesses can work with Medico Pharma to coordinate suitable product sourcing, manufacturing, packaging and export requirements from India.",
    [],
    []
  ],
  [
    "02",
    "International Pharmaceutical Distributors",
    "Pharmaceutical distributors can source multiple dosage forms through a coordinated international supply model designed for recurring pharmaceutical requirements.",
    [],
    []
  ],
  [
    "03",
    "Pharmaceutical Wholesalers",
    "Wholesalers can discuss bulk and repeat pharmaceutical supply requirements across suitable product categories.",
    [],
    []
  ],
  [
    "04",
    "Healthcare Companies",
    "Healthcare companies expanding their pharmaceutical portfolio can work with us for suitable product sourcing and international pharmaceutical supply.",
    [],
    []
  ],
  [
    "05",
    "Hospitals & Institutions",
    "Suitable institutional pharmaceutical requirements can be evaluated based on product category, quantity, packaging and applicable destination requirements.",
    [],
    []
  ],
  [
    "06",
    "International Pharmaceutical Brands",
    "Pharmaceutical brands can use Medico Pharma for suitable contract manufacturing, private-label manufacturing or Pharmaceutical Manufacturing for Export programmes.",
    [],
    []
  ]
] as const;
const globalSupport = [
  [
    "01",
    "Product Selection & Sourcing",
    "We begin by identifying suitable pharmaceutical products according to dosage form, formulation, strength, quantity and intended market requirements. Our exporter services can support both individual pharmaceutical products and broader multi-product portfolios.",
    [],
    []
  ],
  [
    "02",
    "Manufacturing Coordination",
    "Where manufacturing is required, Medico Pharma can coordinate suitable: This provides flexibility for businesses sourcing finished pharmaceutical formulations from India.",
    [
      "Pharmaceutical Manufacturing for Export",
      "Third Party Pharmaceutical Manufacturing for Export",
      "Pharmaceutical Contract Manufacturing for Export",
      "Private Label Pharmaceutical Export"
    ],
    []
  ],
  [
    "03",
    "Packaging Requirements",
    "Suitable packaging can be coordinated according to pharmaceutical dosage form, product stability requirements, commercial configuration and destination needs.",
    [],
    []
  ],
  [
    "04",
    "Documentation Support",
    "Applicable commercial, product, shipping and regulatory documentation requirements can be identified according to the export project.",
    [],
    []
  ],
  [
    "05",
    "Shipment Coordination",
    "After manufacturing, packaging and documentation requirements are completed, the order can move into export shipping and logistics coordination.",
    [],
    []
  ],
  [
    "06",
    "International Supply Assistance",
    "Our goal is to create a dependable International Pharmaceutical Supplier relationship rather than limiting support to a single shipment. Recurring supply requirements can be discussed according to product availability and manufacturing capacity.",
    [],
    []
  ]
] as const;
const exportProcess = [
  [
    "01",
    "Share Your Product Requirements",
    "The process starts with understanding:",
    [
      "Product category",
      "Product name",
      "Dosage form",
      "Formulation",
      "Strength",
      "Required quantity",
      "Packaging",
      "Destination",
      "Supply schedule",
      "Documentation requirements"
    ],
    []
  ],
  [
    "02",
    "Product Selection & Availability Review",
    "The required products are reviewed for sourcing or manufacturing availability. Where required, suitable pharmaceutical manufacturing arrangements can also be evaluated.",
    [],
    []
  ],
  [
    "03",
    "Finalize Quantity & Packaging",
    "Product quantities, pack sizes, primary packaging, secondary packaging and export packing requirements are finalised.",
    [],
    []
  ],
  [
    "04",
    "Documentation Preparation",
    "Applicable export, commercial, pharmaceutical product and shipping documentation requirements are identified and coordinated.",
    [],
    []
  ],
  [
    "05",
    "Quality & Order Verification",
    "Before dispatch preparation, the agreed product, quantity, packaging and relevant order requirements are reviewed.",
    [],
    []
  ],
  [
    "06",
    "Shipment & Export Coordination",
    "The finished order is prepared for appropriate Pharmaceutical Export Logistics, export shipping and international supply coordination according to the agreed requirements.",
    [],
    []
  ]
] as const;
const documentation = [
  [
    "01",
    "Commercial Documentation",
    "Commercial documentation requirements can vary according to order structure, destination and shipping arrangement. Applicable documents are reviewed according to individual export requirements.",
    [],
    []
  ],
  [
    "02",
    "Product Documentation",
    "Pharmaceutical products may require specific formulation, quality, batch or technical documentation depending on the product and destination. Availability should be verified before confirming an export order.",
    [],
    []
  ],
  [
    "03",
    "Packaging & Shipping Documents",
    "Shipment documentation can be coordinated according to the applicable export packing, logistics and shipping arrangement.",
    [],
    []
  ],
  [
    "04",
    "Destination-Specific Documentation Support",
    "Different countries and pharmaceutical markets may have different product-registration and documentation requirements. Where applicable, requirements relating to Pharmaceutical Regulatory Documentation, Pharmaceutical Export Regulatory Support, Pharmaceutical Product Registration Services or Pharmaceutical Dossier Services should be evaluated according to the specific product and destination. Requirements involving CTD ACTD Dossier Preparation should only be confirmed where the appropriate product and technical documentation support is available.",
    [],
    []
  ],
  [
    "05",
    "Import Export Code & Export Registration Requirements",
    "Companies engaged in international trade may encounter terms such as: These requirements relate to the legal and operational structure of international trade. Medico Pharma does not represent such registrations or licences as automatically included within every pharmaceutical export project. Applicable requirements should be determined according to the responsible exporting entity, product and destination.",
    [
      "Import Export Code",
      "IEC Code",
      "Import and Export Code",
      "Export Registration",
      "Import and Export Registration",
      "Export Licence",
      "Export Licenses",
      "Import and Export Code Registration"
    ],
    []
  ]
] as const;
const packaging = [
  [
    "01",
    "International Packaging Requirements",
    "Packaging requirements are evaluated according to:",
    [
      "Pharmaceutical dosage form",
      "Product specification",
      "Primary packaging",
      "Secondary packaging",
      "Shipment configuration",
      "Destination requirements"
    ],
    []
  ],
  [
    "02",
    "Product Labelling Support",
    "Product labelling requirements can be coordinated according to the agreed commercial and destination requirements where applicable.",
    [],
    []
  ],
  [
    "03",
    "Bulk & Commercial Packaging",
    "Both bulk pharmaceutical supply and commercially packed pharmaceutical products can be discussed depending on product availability and supply requirements.",
    [],
    []
  ],
  [
    "04",
    "Custom Packaging Requirements",
    "Selected products can support customised commercial packaging requirements where manufacturing and packaging feasibility permits. This can be particularly relevant for Private Label Pharmaceutical Export programmes.",
    [],
    []
  ],
  [
    "05",
    "Shipment-Ready Product Preparation",
    "Products are prepared with appropriate secondary packing and shipping configuration before export logistics are coordinated.",
    [],
    []
  ]
] as const;
const whyIndia = [
  [
    "01",
    "Wide Pharmaceutical Product Availability",
    "India’s pharmaceutical manufacturing ecosystem supports a broad range of generic medicines, finished formulations and dosage forms. This gives international organisations more flexibility when building pharmaceutical product portfolios.",
    [],
    []
  ],
  [
    "02",
    "Scalable Supply Capabilities",
    "Existing pharmaceutical manufacturing infrastructure can support both recurring and larger production requirements, depending on product and manufacturing capacity.",
    [],
    []
  ],
  [
    "03",
    "Diverse Dosage Forms",
    "Pharmaceutical supply can cover multiple dosage forms including:",
    [
      "Tablets",
      "Capsules",
      "Syrups",
      "Oral liquids",
      "Injectables",
      "Ointments",
      "Creams",
      "Topical formulations",
      "Generic medicines"
    ],
    []
  ],
  [
    "04",
    "Flexible B2B Sourcing Opportunities",
    "Businesses can evaluate direct supply, third-party manufacturing, contract manufacturing and private-label manufacturing according to their pharmaceutical sourcing strategy.",
    [],
    []
  ],
  [
    "05",
    "Established Pharmaceutical Manufacturing Ecosystem",
    "Working with a Pharmaceutical Manufacturer and Exporter in India can combine product manufacturing and international supply coordination within a more integrated sourcing model.",
    [],
    []
  ]
] as const;
const marketRegions = [
  "Africa",
  "Middle East",
  "Asia",
  "CIS markets",
  "Latin America",
  "Other international pharmaceutical markets"
] as const;
const flexible = [
  [
    "01",
    "Diverse Product Requirements",
    "Source suitable pharmaceutical formulations across multiple dosage forms and product categories.",
    [],
    []
  ],
  [
    "02",
    "Bulk Order Support",
    "Bulk pharmaceutical supply requirements can be evaluated according to manufacturing capacity, product availability and agreed quantities.",
    [],
    []
  ],
  [
    "03",
    "Multiple Dosage Forms",
    "Combine tablets, capsules, syrups, topical formulations and other suitable pharmaceutical products within a broader international supply portfolio.",
    [],
    []
  ],
  [
    "04",
    "Custom Packaging Requirements",
    "Packaging formats can be planned according to product compatibility, commercial presentation and applicable destination requirements.",
    [],
    []
  ],
  [
    "05",
    "Repeat Supply Requirements",
    "Businesses requiring recurring pharmaceutical products can discuss repeat production and supply requirements.",
    [],
    []
  ],
  [
    "06",
    "Long-Term International Partnerships",
    "Our objective is to develop long-term Pharmaceutical Export Partner relationships built around product availability, reliable coordination and scalable supply.",
    [],
    []
  ]
] as const;
const quality = [
  [
    "01",
    "Product Quality Verification",
    "Applicable quality requirements depend on the pharmaceutical product, manufacturing arrangement and destination market.",
    [],
    []
  ],
  [
    "02",
    "Controlled Supply Processes",
    "Product sourcing, manufacturing, packing and shipment preparation are coordinated according to agreed order requirements.",
    [],
    []
  ],
  [
    "03",
    "Documentation & Traceability",
    "Relevant product and manufacturing documentation requirements help support traceability throughout the pharmaceutical supply process.",
    [],
    []
  ],
  [
    "04",
    "Packaging & Order Accuracy",
    "Before shipment preparation, product quantity, pack configuration, labelling and other agreed order requirements should be verified.",
    [],
    []
  ],
  [
    "05",
    "GMP & WHO-GMP Requirements",
    "Some international pharmaceutical projects specifically require suppliers or manufacturing facilities associated with terms such as: Such claims should only be made when the applicable manufacturing facility, product and documentation actually satisfy the required certification conditions. Medico Pharma therefore evaluates certification requirements at the product and manufacturing-facility level rather than applying an unsupported certification claim to every export project.",
    [
      "WHO GMP Pharmaceutical Exporter",
      "WHO GMP Pharmaceutical Exporter from India",
      "WHO GMP Certified Pharmaceutical Exporter",
      "GMP Certified Pharmaceutical Exporter"
    ],
    []
  ]
] as const;
const whyChoose = [
  [
    "01",
    "Diverse Pharmaceutical Product Portfolio",
    "Access suitable products across multiple pharmaceutical formulations and dosage forms.",
    [],
    []
  ],
  [
    "02",
    "Export-Focused B2B Support",
    "Our services are designed around pharmaceutical companies, distributors, wholesalers, healthcare organisations and international supply partners.",
    [],
    []
  ],
  [
    "03",
    "Flexible Product Requirements",
    "Product specifications, quantities and supply requirements can be discussed according to the pharmaceutical project.",
    [],
    []
  ],
  [
    "04",
    "Packaging & Documentation Assistance",
    "We coordinate applicable pharmaceutical packaging and documentation requirements according to the selected products and destination.",
    [],
    []
  ],
  [
    "05",
    "Reliable Supply Coordination",
    "From sourcing through shipment preparation, we focus on maintaining communication and coordination across the export process.",
    [],
    []
  ],
  [
    "06",
    "Long-Term International Partnership Approach",
    "Our objective is to become a dependable Global Pharmaceutical Supplier and pharmaceutical export partner for organisations requiring recurring international supply.",
    [],
    []
  ]
] as const;
const manufacturingExport = [
  [
    "01",
    "Pharmaceutical Manufacturing for Export",
    "Selected pharmaceutical products can be manufactured according to agreed formulation, dosage form, packaging and export requirements.",
    [],
    []
  ],
  [
    "02",
    "Contract Manufacturing for Export",
    "Our Pharmaceutical Contract Manufacturing for Export model can support companies requiring products manufactured according to defined specifications before international supply.",
    [],
    []
  ],
  [
    "03",
    "Third-Party Manufacturing for Export",
    "Third Party Pharmaceutical Manufacturing for Export enables suitable pharmaceutical products to be manufactured externally and coordinated for international supply.",
    [],
    []
  ],
  [
    "04",
    "Private Label Pharmaceutical Export",
    "Companies developing their own international pharmaceutical brand can explore suitable private-label manufacturing, packaging and export coordination.",
    [],
    []
  ],
  [
    "05",
    "Finished Formulation Export",
    "As a potential Pharmaceutical Formulation Exporter and supplier of suitable finished formulations, Medico Pharma can coordinate selected dosage forms according to product and destination requirements. This approach can support requirements associated with a Finished Dosage Form Exporter or Finished Pharmaceutical Formulations Exporter from India.",
    [],
    []
  ]
] as const;
const relatedServices = [
  [
    "01",
    "Pharmaceutical Manufacturing",
    "Explore manufacturing capabilities across suitable tablets, capsules, syrups, injectables, topical formulations and generic medicines.",
    "Explore Pharmaceutical Manufacturing",
    "/services/pharmaceutical-manufacturing"
  ],
  [
    "02",
    "Contract Manufacturing",
    "Manufacture suitable pharmaceutical products according to defined commercial and product specifications.",
    "Explore Contract Manufacturing",
    "/services/contract-manufacturing"
  ],
  [
    "03",
    "Third-Party Manufacturing",
    "Expand pharmaceutical product availability through external production support.",
    "Explore Third-Party Manufacturing",
    "/services/third-party-manufacturing"
  ],
  [
    "04",
    "OEM & Private Label Manufacturing",
    "Develop suitable pharmaceutical products under your own commercial brand for domestic or international supply.",
    "Explore OEM & Private Label Manufacturing",
    "/services/oem-private-label"
  ]
] as const;
const faqs = [
  [
    "Does Medico Pharma export pharmaceutical products from India?",
    "Medico Pharma provides pharmaceutical export support for suitable products manufactured or sourced from India. Export feasibility depends on the pharmaceutical product, destination, manufacturing availability, documentation and applicable market requirements."
  ],
  [
    "What pharmaceutical products are available for export?",
    "Suitable export requirements can include pharmaceutical tablets, capsules, syrups, oral liquids, selected injectable products, antibiotics, ointments, topical products, generic medicines and other compatible healthcare products. Final availability depends on product and manufacturing feasibility."
  ],
  [
    "Which organisations can work with Medico Pharma for international pharmaceutical supply?",
    "Our Pharma Export Services can support pharmaceutical companies, importers, distributors, wholesalers, healthcare companies, institutions, pharmaceutical brands and other eligible organisations requiring international pharmaceutical supply."
  ],
  [
    "Do you supply pharmaceutical products in bulk quantities?",
    "Bulk pharmaceutical supply requirements can be discussed according to product availability, manufacturing capacity and required quantities. Final quantities depend on the specific pharmaceutical product and production feasibility."
  ],
  [
    "Do you export generic medicines from India?",
    "Medico Pharma can support suitable generic medicine export requirements across selected pharmaceutical formulations. Products may include tablets, capsules, syrups and other compatible dosage forms depending on availability and destination requirements."
  ],
  [
    "Can you support pharmaceutical distributors and importers?",
    "Yes. Pharmaceutical distributors and importing organisations can discuss product sourcing, manufacturing, packaging, documentation and recurring international supply requirements with Medico Pharma."
  ],
  [
    "Do you provide pharmaceutical export documentation support?",
    "Medico Pharma can coordinate applicable commercial, product, shipping and pharmaceutical documentation requirements. The exact documentation required depends on the pharmaceutical product, destination and applicable regulations."
  ],
  [
    "Can you provide custom packaging and labelling for export orders?",
    "Suitable pharmaceutical products can support custom packaging and labelling requirements where manufacturing, product and destination conditions permit. This can include primary packaging, secondary packaging, pack configuration and suitable commercial presentation."
  ],
  [
    "Can Medico Pharma support private label products for international markets?",
    "Yes, suitable Private Label Pharmaceutical Export requirements can be discussed. Private-label projects may combine pharmaceutical manufacturing, brand-specific packaging, labelling and export coordination depending on product feasibility and destination requirements."
  ],
  [
    "How does the pharmaceutical export process work?",
    "The process generally includes product requirement review, product availability or manufacturing assessment, quantity and packaging confirmation, documentation preparation, order verification and shipment coordination."
  ],
  [
    "What information should I provide for an export enquiry?",
    "Useful initial information includes: Providing this information helps Medico Pharma evaluate product availability and the appropriate export arrangement."
  ],
  [
    "How can I request a pharmaceutical export quotation?",
    "Share your pharmaceutical products, quantities, dosage forms, packaging requirements and intended destination with Medico Pharma. After reviewing product availability, manufacturing requirements, packaging and export feasibility, the appropriate commercial export solution can be discussed."
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

export default function ExportServicesPage() {
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
    name: "Pharmaceutical Export Services",
    provider: { "@type": "Organization", name: "Medico Pharma" },
    areaServed: "International",
    serviceType: "Pharmaceutical Export Services",
    description:
      "Pharmaceutical export services from India for medicines, formulations and healthcare products with packaging, documentation and global supply support.",
  };

  return (
    <main className="pmx-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* HERO — only image on the complete page */}
      <section className="pmx-hero">
        <div className="pmx-hero-orb pmx-hero-orb-a" aria-hidden="true" />
        <div className="pmx-hero-orb pmx-hero-orb-b" aria-hidden="true" />

        <div className="pmx-container pmx-hero-grid">
          <div className="pmx-hero-copy">
            <h1 className="hero-anim" style={{ animationDelay: "180ms" }}>
              Pharmaceutical Export Services from <em>India</em>
            </h1>

            <p className="pmx-anim" style={delay(260)}>
              Medico Pharma provides pharmaceutical export services from India for international partners requiring
              dependable product supply, export packaging, documentation support and coordinated global distribution.
            </p>

            <div className="pmx-hero-actions pmx-anim" style={delay(360)}>
              <Link href="/contact" className="pmx-button pmx-button-solid">
                Discuss Your Export Requirements <span aria-hidden="true">→</span>
              </Link>
              <a href="#capabilities" className="pmx-button pmx-button-quiet">
                Explore Pharmaceutical Export Capabilities <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="pmx-hero-visual pmx-anim" style={delay(300)}>
            <div
              className="pmx-image-slot pmx-image-slot-hero has-image"
              style={{ backgroundImage: 'url("/export-services.png")' }}
              role="img"
              aria-label="Pharmaceutical export and supply operations"
            />

            <article className="pmx-hero-float pmx-hero-float-a">
              <span><i aria-hidden="true" /> Export supply signal</span>
              <svg viewBox="0 0 200 42" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 21h48l7-14 8 28 7-22 6 8h20l7-6 7 12 6-6h84" />
              </svg>
              <strong>Global coordination</strong>
            </article>

            <article className="pmx-hero-float pmx-hero-float-b">
              <span>Export capability</span>
              <strong>08 product routes</strong>
              <div className="pmx-hero-bars" aria-hidden="true"><b /><b /><b /><b /></div>
            </article>
          </div>
        </div>

        <div className="pmx-container">
          <div className="pmx-hero-index" aria-label="Pharmaceutical export overview">
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
            <p><strong>Reliable Pharmaceutical Export Solutions for Distributors, Healthcare Companies & International Pharmaceutical Partners</strong></p>
            <p>Expand your international pharmaceutical supply network with professional Export Services from Medico Pharma.</p><p>We provide Pharmaceutical Export Services for pharmaceutical companies, distributors, wholesalers, healthcare organisations, institutions and international partners seeking dependable access to pharmaceutical products manufactured and supplied from India.</p><p>Our export capabilities can support pharmaceutical tablets, capsules, syrups, selected injectable products, antibiotic medicines, ointments, topical formulations, generic medicines and other suitable healthcare products.</p><p>From product sourcing and manufacturing coordination to pharmaceutical export packaging, documentation support, shipment preparation and pharmaceutical export logistics, Medico Pharma provides a structured approach to international pharmaceutical supply.</p><p>Whether you require recurring medicine supply, bulk pharmaceutical products, private label products for overseas markets or a long-term Pharmaceutical Export Partner, our team can help coordinate an export solution around your product and destination requirements.</p>
          </div>
        </div>
      </section>

      {/* 02 — INTRODUCTION */}
      <section className="pmx-section pmx-intro">
        <div className="pmx-container pmx-intro-grid pmx-reveal">
          <div className="pmx-section-code"><span>02</span><b>Introduction</b></div>
          <div className="pmx-intro-copy">
            <h2>Reliable Pharmaceutical Export Solutions for Global Markets</h2>
            <p>International pharmaceutical supply involves much more than shipping medicines from one country to another.</p><p>Product availability, manufacturing capability, pharmaceutical packaging, product documentation, export documentation, logistics coordination and destination-specific requirements all need to work together.</p><p>Medico Pharma provides Pharma Export Services designed to connect these requirements through one coordinated export process.</p><p>Our pharmaceutical export support can include:</p>
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
            <p>For organisations searching for a Pharmaceutical Exporter from India, Pharma Export Company in India or Pharmaceutical Manufacturer and Exporter in India, Medico Pharma provides a flexible supply model built around product requirements, packaging specifications and international supply needs.</p><p>Our focus is to simplify international export requirements while maintaining clear coordination throughout sourcing, manufacturing, packing, documentation and shipment preparation.</p>
          </div>
        </div>
      </section>

      {/* 03 — EXPORT CAPABILITIES */}
      <section className="pmx-section pmx-audience-section" id="capabilities">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>03</b> Pharmaceutical export capabilities</span>
              <h2>Our Pharmaceutical Export Capabilities</h2>
            </div>
            <p className="pmx-heading-copy">Our export model is designed to support pharmaceutical companies and healthcare organisations requiring reliable access to suitable pharmaceutical products from India.</p>
          </div>
          <div className="pmx-audience-list">
            {capabilities.map(([number, title, text], index) => (
              <article className="pmx-audience-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — PRODUCTS */}
      <section className="pmx-section pmx-capabilities">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>04</b> Products for international markets</span>
              <h2>Pharmaceutical Products for International Markets</h2>
            </div>
            <div className="pmx-heading-copy"><p>Medico Pharma can support export requirements across selected pharmaceutical formulations and healthcare product categories.</p><p>Final product availability, specification and export feasibility depend on the required formulation, manufacturing capability, destination market and applicable requirements.</p></div>
          </div>

          <div className="pmx-capability-list">
            {productCards.map((product, index) => (
              <article className="pmx-capability-row pmx-reveal" key={product.title} style={delay(index * 60)}>
                <div className="pmx-capability-id">
                  <span>{product.number}</span>
                  <i aria-hidden="true"><Icon name={product.icon as IconName} /></i>
                  <small>{product.label}</small>
                </div>
                <div className="pmx-capability-story">
                  <h3>{product.title}</h3>
                  <p>{product.intro}</p>
                  {product.outro && <p className="pmx-capability-outro">{product.outro}</p>}
                </div>
                {product.rows.length > 0 ? (
                  <div className="pmx-spec-panel">
                    <div className="pmx-spec-head"><span>Specification</span><span>Available requirement options</span></div>
                    <dl className="pmx-spec-matrix">
                      {product.rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
                    </dl>
                  </div>
                ) : (
                  <div className="pmx-spec-panel">
                    <div className="pmx-spec-head"><span>Export assessment</span><span>Project-specific</span></div>
                    <dl className="pmx-spec-matrix">
                      <div><dt>Availability</dt><dd>Subject to product availability and destination regulations</dd></div>
                      <div><dt>Specifications</dt><dd>Reviewed individually before export commitment</dd></div>
                    </dl>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — WHO WE SERVE */}
      <section className="pmx-section pmx-audience-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>05</b> Who we serve</span><h2>Pharmaceutical Export Solutions for International Businesses</h2></div>
            <p className="pmx-heading-copy">Our International Pharmaceutical Export Services can support different types of organisations involved in pharmaceutical supply, distribution, healthcare and institutional procurement.</p>
          </div>
          <div className="pmx-audience-list">
            {whoServe.map(([number, title, text], index) => (
              <article className="pmx-audience-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — GLOBAL SUPPLY SUPPORT */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>06</b> Global pharmaceutical supply support</span><h2>End-to-End Pharmaceutical Supply Support for Global Markets</h2></div>
            <div className="pmx-heading-copy"><p>A successful pharmaceutical export programme requires multiple activities to be coordinated accurately.</p><p>Medico Pharma provides End-to-End Pharmaceutical Export Services covering the major stages between product requirement and shipment preparation.</p></div>
          </div>
          <div className="pmx-model-list">
            {globalSupport.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "layers" : index === 1 ? "factory" : index === 2 ? "package" : index === 3 ? "shield" : index === 4 ? "route" : "globe"} /></i>
                <h3>{title}</h3>
                <div><p>{text}</p>{items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — EXPORT PROCESS */}
      <section className="pmx-process-section">
        <div className="pmx-container">
          <div className="pmx-process-heading pmx-reveal">
            <div><span className="pmx-kicker pmx-kicker-light"><b>07</b> Export process</span><h2>Our Pharmaceutical Export Process</h2></div>
            <p>Our export workflow is designed to create clear coordination between pharmaceutical product requirements, manufacturing, packing, documentation and shipment.</p>
          </div>
          <div className="pmx-process-line">
            {exportProcess.map(([number, title, text, items], index) => (
              <article className="pmx-process-step pmx-reveal" key={title} style={delay(index * 60)}>
                <span className="pmx-process-number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p>{items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}</div>
                <i aria-hidden="true">↘</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — DOCUMENTATION */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>08</b> Export documentation</span><h2>Pharmaceutical Export Documentation Support</h2></div>
            <div className="pmx-heading-copy"><p>Documentation is an important part of international pharmaceutical trade.</p><p>Different products and destinations can require different commercial, product, shipping and regulatory documents.</p><p>Medico Pharma provides coordination support for applicable Pharmaceutical Export Documentation Services.</p></div>
          </div>
          <div className="pmx-model-list">
            {documentation.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span><i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "layers" : index === 1 ? "shield" : index === 2 ? "package" : index === 3 ? "globe" : "check"} /></i>
                <h3>{title}</h3><div><p>{text}</p>{items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — PACKAGING */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>09</b> Export packaging &amp; labelling</span><h2>Export-Ready Pharmaceutical Packaging & Labelling</h2></div>
            <div className="pmx-heading-copy"><p>Correct Export Packaging is essential for maintaining product organisation, protection and commercial presentation throughout international pharmaceutical supply.</p><p>Our pharmaceutical export support can incorporate suitable packing and labelling requirements according to the product.</p></div>
          </div>
          <div className="pmx-model-list">
            {packaging.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span><i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "package" : index === 1 ? "layers" : index === 2 ? "factory" : index === 3 ? "network" : "route"} /></i>
                <h3>{title}</h3><div><p>{text}</p>{items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — WHY INDIA */}
      <section className="pmx-section pmx-audience-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>10</b> Pharmaceutical sourcing from India</span><h2>Why Source Pharmaceutical Products from India?</h2></div>
            <div className="pmx-heading-copy"><p>India has a broad pharmaceutical manufacturing ecosystem covering multiple dosage forms, formulations and pharmaceutical product categories.</p><p>For international pharmaceutical organisations, sourcing from India can provide access to a diverse manufacturing and supply network.</p></div>
          </div>
          <div className="pmx-audience-list">
            {whyIndia.map(([number, title, text, items], index) => (
              <article className="pmx-audience-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span><h3>{title}</h3><div><p>{text}</p>{items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}</div><i aria-hidden="true">→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — INTERNATIONAL MARKETS — balanced full-width content */}
      <section className="pmx-section pmx-ledger-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>11</b> International market support</span><h2>Supporting Pharmaceutical Supply Across International Markets</h2></div>
            <div className="pmx-heading-copy"><p>Medico Pharma can evaluate suitable pharmaceutical supply opportunities across different international regions according to product, destination, documentation and regulatory feasibility.</p></div>
          </div>
          <div className="pmx-service-ledger pmx-reveal" style={delay(80)}>
            {marketRegions.map((item, index) => (
              <div className="pmx-service-ledger-row" key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><i aria-hidden="true">↗</i></div>
            ))}
          </div>
          <div className="pmx-ledger-note pmx-reveal" style={delay(120)}>
            <p>Potential market requirements may include:</p><p>Specific countries should only be confirmed once the relevant product availability, destination requirements and supply feasibility have been reviewed.</p><p>This approach helps ensure that Pharmaceutical Export to International Markets is based on realistic product and compliance requirements rather than an unsupported country list.</p>
          </div>
        </div>
      </section>

      {/* 12 — FLEXIBLE EXPORT SOLUTIONS */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>12</b> Flexible export solutions</span><h2>Flexible Pharmaceutical Export Solutions for Your Business</h2></div>
            <div className="pmx-heading-copy"><p>International pharmaceutical requirements differ by product, market, quantity and supply schedule.</p><p>Medico Pharma provides flexible Pharma Export Services designed around these variations.</p></div>
          </div>
          <div className="pmx-model-list">
            {flexible.map(([number, title, text], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span><i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "layers" : index === 1 ? "factory" : index === 2 ? "network" : index === 3 ? "package" : index === 4 ? "route" : "globe"} /></i>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — QUALITY */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>13</b> Quality-focused export supply</span><h2>Quality-Focused Pharmaceutical Supply for International Markets</h2></div>
            <div className="pmx-heading-copy"><p>Quality, product accuracy and documentation are important throughout international pharmaceutical supply.</p><p>Medico Pharma focuses on maintaining clear product specifications, appropriate manufacturing coordination, suitable packaging and order verification.</p></div>
          </div>
          <div className="pmx-model-list">
            {quality.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span><i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "shield" : index === 1 ? "route" : index === 2 ? "layers" : index === 3 ? "package" : "check"} /></i>
                <h3>{title}</h3><div><p>{text}</p>{items.length > 0 && <p className="pmx-capability-outro">{items.join(" · ")}</p>}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — WHY CHOOSE */}
      <section className="pmx-section pmx-why-section">
        <div className="pmx-container pmx-why-grid">
          <div className="pmx-why-intro pmx-reveal">
            <span className="pmx-kicker"><b>14</b> Why choose Medico Pharma</span>
            <h2>Why Choose Medico Pharma as Your Pharmaceutical Export Partner?</h2>
            <p>Choosing a pharmaceutical export partner involves more than comparing product availability.</p><p>International supply requires coordination between pharmaceutical products, manufacturing, packaging, documentation and logistics.</p><p>Medico Pharma focuses on providing structured International Pharmaceutical Export Services across these areas.</p>
          </div>
          <div className="pmx-proof-ledger pmx-reveal" style={delay(100)}>
            {whyChoose.map(([number, title, text]) => (
              <article className="pmx-proof-row" key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      {/* 15 — MANUFACTURING FOR EXPORT */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>15</b> Pharmaceutical manufacturing for export</span><h2>Manufacturing Solutions for International Pharmaceutical Supply</h2></div>
            <p className="pmx-heading-copy">Medico Pharma can combine pharmaceutical manufacturing and export support for companies requiring products manufactured specifically for international supply.</p>
          </div>
          <div className="pmx-model-list">
            {manufacturingExport.map(([number, title, text], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span><i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "factory" : index === 1 ? "network" : index === 2 ? "layers" : index === 3 ? "package" : "globe"} /></i>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 16 — RELATED SERVICES */}
      <section className="pmx-section pmx-related-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div><span className="pmx-kicker"><b>16</b> Related pharmaceutical services</span><h2>Explore Our Pharmaceutical Manufacturing Services</h2></div>
            <p className="pmx-heading-copy">Our export services can be combined with other Medico Pharma manufacturing solutions where pharmaceutical products need to be produced before international supply.</p>
          </div>
          <div className="pmx-related-list">
            {relatedServices.map(([number, title, text, cta, href], index) => (
              <Link className="pmx-related-row pmx-reveal" href={href} key={title} style={delay(index * 70)}>
                <span>{number}</span><div><h3>{title}</h3><p>{text}</p><p><strong>{cta}</strong></p></div><i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 17 — FINAL CTA — right side intentionally filled with animated export workflow; no image */}
      <section className="pmx-final-cta">
        <div className="pmx-container pmx-final-grid pmx-final-grid-rich">
          <div className="pmx-final-copy pmx-reveal" style={delay(100)}>
            <span className="pmx-kicker pmx-kicker-light"><b>17</b> Pharmaceutical export partner</span>
            <h2>Looking for a Reliable Pharmaceutical Export Partner from India?</h2>
            <p>Build a more dependable international pharmaceutical supply chain with Medico Pharma.</p><p>Our Pharmaceutical Export Services from India can support suitable tablets, capsules, syrups, injectable formulations, topical products, generic medicines and other pharmaceutical products through coordinated sourcing, manufacturing, export packaging, documentation and international supply support.</p><p>Whether you require bulk pharmaceutical supply, recurring product sourcing, pharmaceutical manufacturing for export, private-label products or complete End-to-End Pharmaceutical Export Services, Medico Pharma can help structure a solution around your product and destination requirements.</p>
            <div className="pmx-final-actions">
              <Link href="/contact" className="pmx-button pmx-button-light">Request an Export Quote <span aria-hidden="true">→</span></Link>
              <Link href="/contact" className="pmx-text-link">Discuss Your Export Requirements <span aria-hidden="true">↗</span></Link>
            </div>
          </div>

          <div className="pmx-final-system pmx-reveal" style={delay(220)} aria-label="Pharmaceutical export workflow overview">
            <div className="pmx-final-system-glow" aria-hidden="true" />
            <div className="pmx-system-topline"><span><i aria-hidden="true" /> Export supply route</span><small>International workflow</small></div>
            <div className="pmx-system-route">
              <div className="pmx-system-rail" aria-hidden="true"><i /></div>
              <div className="pmx-system-stage"><span>01</span><div><strong>Product requirement</strong><small>Products · Quantity · Destination</small></div><b aria-hidden="true">↘</b></div>
              <div className="pmx-system-stage"><span>02</span><div><strong>Sourcing &amp; manufacturing</strong><small>Availability · Formulation · Supply model</small></div><b aria-hidden="true">↘</b></div>
              <div className="pmx-system-stage"><span>03</span><div><strong>Export packaging</strong><small>Primary · Secondary · Shipment-ready</small></div><b aria-hidden="true">↘</b></div>
              <div className="pmx-system-stage"><span>04</span><div><strong>Documentation</strong><small>Product · Commercial · Shipping</small></div><b aria-hidden="true">↘</b></div>
              <div className="pmx-system-stage"><span>05</span><div><strong>Shipment coordination</strong><small>Logistics · Dispatch · Global supply</small></div><b aria-hidden="true">✓</b></div>
            </div>
            <div className="pmx-system-metrics">
              <div><strong>08</strong><span>Product routes</span></div>
              <div><strong>06</strong><span>Export stages</span></div>
              <div><strong>B2B</strong><span>Global supply</span></div>
            </div>
            <div className="pmx-system-status"><span><i aria-hidden="true" /> Export workflow active</span><strong>International support</strong></div>
          </div>
        </div>
      </section>

      {/* 18 — FAQ */}
      <section className="pmx-section pmx-faq-section" id="faq">
        <div className="pmx-container pmx-faq-grid">
          <div className="pmx-faq-intro pmx-reveal">
            <span className="pmx-kicker"><b>18</b> Frequently asked questions</span>
            <h2>Frequently Asked Questions About Pharmaceutical Export Services</h2>
            <p>Answers to common questions about pharmaceutical export supply, packaging, documentation, sourcing and international coordination.</p>
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
