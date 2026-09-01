import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Pharmaceutical Contract Manufacturing Services in India | Medico Pharma",
  description: "Medico Pharma provides pharmaceutical contract manufacturing services in India for tablets, capsules, syrups and formulations with flexible packaging and production support.",
  alternates: { canonical: "/services/contract-manufacturing" },
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
    "Dosage forms",
    "Tablets · Capsules · Syrups · Selected injectables"
  ],
  [
    "02",
    "Manufacturing models",
    "Contract · Third-party · Private label"
  ],
  [
    "03",
    "Packaging support",
    "Primary · Secondary · Labelling"
  ],
  [
    "04",
    "Commercial supply",
    "Domestic · International supply support"
  ]
] as const;

const introServices = [
  "Pharmaceutical formulation contract manufacturing",
  "Finished formulation contract manufacturing",
  "Medicine contract manufacturing",
  "Tablet contract manufacturing",
  "Capsule contract manufacturing",
  "Syrup contract manufacturing",
  "Generic pharmaceutical manufacturing",
  "Third party pharmaceutical manufacturing",
  "Private label pharmaceutical manufacturing",
  "Pharmaceutical manufacturing outsourcing",
  "Packaging and labelling coordination",
  "Scalable pharmaceutical production support"
] as const;

const capabilityCards = [
  {
    "number": "01",
    "title": "Tablet Contract Manufacturing",
    "label": "Oral solid dosage",
    "icon": "tablet",
    "intro": "Medico Pharma provides Tablet Contract Manufacturing support for companies looking to outsource pharmaceutical tablet production. Tablet formulations can be planned around product specifications, dosage strength, formulation type, packaging configuration and commercial requirements.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical tablets"
      ],
      [
        "Formulation Type",
        "Generic or product-specific formulation"
      ],
      [
        "Tablet Strength",
        "As per approved product specification"
      ],
      [
        "Tablet Format",
        "Product and formulation dependent"
      ],
      [
        "Pharmaceutical Excipients",
        "Selected according to formulation requirements"
      ],
      [
        "Coating Requirement",
        "According to product specification"
      ],
      [
        "Packaging",
        "Blister, strip, bottle or agreed pharmaceutical packaging"
      ],
      [
        "Pack Configuration",
        "According to commercial requirement"
      ],
      [
        "Labelling",
        "Brand-specific or agreed contract manufacturing format"
      ],
      [
        "Production Model",
        "Contract or third-party pharmaceutical manufacturing"
      ],
      [
        "Quantity",
        "Based on manufacturing feasibility and agreed production requirement"
      ],
      [
        "Documentation",
        "Product and production documentation as applicable"
      ]
    ],
    "outro": "Our tablet manufacturing service can support businesses requiring a dependable pharmaceutical contract manufacturer for recurring or scalable tablet production."
  },
  {
    "number": "02",
    "title": "Capsule Contract Manufacturing",
    "label": "Capsule formulation & production",
    "icon": "capsule",
    "intro": "Our Capsule Contract Manufacturing solutions support pharmaceutical companies requiring outsourced capsule formulation production and packaging. Capsule manufacturing specifications can be developed according to formulation requirements, fill material, dosage strength and final packaging requirements.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical capsules"
      ],
      [
        "Formulation",
        "According to approved formulation"
      ],
      [
        "Capsule Type",
        "Product-specific capsule format"
      ],
      [
        "Fill Composition",
        "Based on formulation requirements"
      ],
      [
        "Strength",
        "According to approved specification"
      ],
      [
        "Pharmaceutical Excipients",
        "Product-dependent"
      ],
      [
        "Packaging",
        "Blister, strip or bottle packaging"
      ],
      [
        "Pack Size",
        "According to commercial requirement"
      ],
      [
        "Labelling",
        "Custom pharmaceutical labelling options"
      ],
      [
        "Production",
        "Contract pharmaceutical manufacturing"
      ],
      [
        "Supply Format",
        "B2B pharmaceutical production support"
      ],
      [
        "Documentation",
        "Manufacturing documentation as applicable"
      ]
    ],
    "outro": "Companies seeking a Pharma Contract Manufacturer in India can use capsule contract manufacturing to expand product portfolios without establishing additional internal capsule manufacturing capacity."
  },
  {
    "number": "03",
    "title": "Syrup Contract Manufacturing",
    "label": "Liquid dosage format",
    "icon": "route",
    "intro": "Medico Pharma also supports selected Syrup Contract Manufacturing requirements for pharmaceutical formulations supplied in liquid dosage formats. Formulation, viscosity, flavour requirements, dosage strength, container size and packaging configuration can be assessed according to individual product requirements.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical liquid / syrup"
      ],
      [
        "Formulation",
        "Product-specific formulation"
      ],
      [
        "Strength",
        "According to approved specification"
      ],
      [
        "Base",
        "According to formulation requirement"
      ],
      [
        "Flavour Requirement",
        "Product dependent"
      ],
      [
        "Bottle Type",
        "Appropriate pharmaceutical container"
      ],
      [
        "Bottle Size",
        "According to agreed pack configuration"
      ],
      [
        "Measuring Component",
        "Where required for product format"
      ],
      [
        "Secondary Packaging",
        "Carton or agreed packaging"
      ],
      [
        "Labelling",
        "Brand-specific labelling"
      ],
      [
        "Manufacturing Model",
        "Contract pharmaceutical manufacturing"
      ],
      [
        "Documentation",
        "Relevant production documentation"
      ]
    ],
    "outro": "Our syrup manufacturing support forms part of a broader Pharmaceutical Formulation Manufacturing service for companies managing multiple dosage forms."
  },
  {
    "number": "04",
    "title": "Injectable Contract Manufacturing",
    "label": "Controlled production support",
    "icon": "injectable",
    "intro": "Selected injectable pharmaceutical products can require more controlled production, handling, packaging and documentation requirements than conventional oral dosage forms. Medico Pharma can coordinate suitable injectable contract manufacturing requirements depending on formulation feasibility, product specifications and applicable manufacturing standards.",
    "rows": [
      [
        "Dosage Form",
        "Selected injectable pharmaceutical formulations"
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
        "Based on pharmaceutical product requirement"
      ],
      [
        "Filling Requirement",
        "Product dependent"
      ],
      [
        "Primary Packaging",
        "Appropriate injectable product packaging"
      ],
      [
        "Secondary Packaging",
        "According to agreed commercial configuration"
      ],
      [
        "Labelling",
        "Product-specific pharmaceutical labelling"
      ],
      [
        "Manufacturing Requirement",
        "Controlled production requirements"
      ],
      [
        "Documentation",
        "Product-specific documentation as applicable"
      ],
      [
        "Production Model",
        "Contract pharmaceutical manufacturing"
      ]
    ],
    "outro": "All injectable projects should be evaluated individually before production requirements are confirmed."
  },
  {
    "number": "05",
    "title": "Ointment & Topical Product Manufacturing",
    "label": "Creams, gels & topicals",
    "icon": "topical",
    "intro": "Our pharmaceutical contract manufacturing services can also support selected ointments, creams, gels and topical pharmaceutical formulations. These products can be manufactured according to agreed formulation, consistency, packaging and product presentation requirements.",
    "rows": [
      [
        "Dosage Form",
        "Ointment, cream, gel or topical formulation"
      ],
      [
        "Formulation",
        "Product-specific formulation"
      ],
      [
        "Base / Excipients",
        "According to formulation requirements"
      ],
      [
        "Strength",
        "As specified for the product"
      ],
      [
        "Texture / Consistency",
        "Formulation dependent"
      ],
      [
        "Packaging",
        "Tube, container or suitable packaging"
      ],
      [
        "Pack Size",
        "According to commercial requirement"
      ],
      [
        "Labelling",
        "Brand or agreed product labelling"
      ],
      [
        "Secondary Packaging",
        "Product-specific carton configuration"
      ],
      [
        "Manufacturing Model",
        "Contract / third-party manufacturing"
      ],
      [
        "Documentation",
        "Production-related documentation as applicable"
      ]
    ],
    "outro": "This gives pharmaceutical companies access to finished formulation contract manufacturing across both oral and topical dosage categories."
  },
  {
    "number": "06",
    "title": "Antibiotic Formulation Contract Manufacturing",
    "label": "Selected anti-infective formulations",
    "icon": "antibiotic",
    "intro": "Medico Pharma supports suitable antibiotic formulation manufacturing projects according to product formulation, dosage form, manufacturing feasibility and applicable production requirements.",
    "rows": [
      [
        "Product Category",
        "Selected antibiotic formulations"
      ],
      [
        "Dosage Form",
        "According to product requirement"
      ],
      [
        "Strength",
        "As per approved formulation"
      ],
      [
        "Pharmaceutical Excipients",
        "Product dependent"
      ],
      [
        "Manufacturing Process",
        "Defined according to formulation"
      ],
      [
        "Packaging",
        "Appropriate pharmaceutical packaging"
      ],
      [
        "Pack Configuration",
        "According to agreed requirements"
      ],
      [
        "Labelling",
        "Product-specific labelling"
      ],
      [
        "Production Model",
        "Pharmaceutical contract manufacturing"
      ],
      [
        "Documentation",
        "Applicable manufacturing documentation"
      ]
    ],
    "outro": "Because antibiotic manufacturing requirements differ according to the formulation and dosage form, individual product assessment is required before manufacturing is confirmed."
  },
  {
    "number": "07",
    "title": "Generic Medicine Manufacturing",
    "label": "Generic pharmaceutical products",
    "icon": "layers",
    "intro": "Companies expanding generic medicine portfolios can use our medicine contract manufacturing and pharmaceutical formulation manufacturing support. Generic pharmaceutical manufacturing can include selected tablets, capsules, syrups and other suitable dosage forms based on formulation and production feasibility.",
    "rows": [
      [
        "Product Category",
        "Generic pharmaceutical formulations"
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
        "According to product specification"
      ],
      [
        "Excipients",
        "Based on formulation requirements"
      ],
      [
        "Packaging",
        "Product-specific pharmaceutical packaging"
      ],
      [
        "Labelling",
        "Custom commercial presentation"
      ],
      [
        "Pack Configuration",
        "According to agreed requirement"
      ],
      [
        "Production",
        "Contract pharmaceutical manufacturing"
      ],
      [
        "Supply",
        "Domestic and export-oriented production support"
      ],
      [
        "Documentation",
        "Applicable production documentation"
      ]
    ],
    "outro": "Our generic medicine production model allows companies to use a professional Pharmaceutical Manufacturing Partner rather than investing in an entirely new manufacturing setup."
  }
] as const;

const audiences = [
  [
    "01",
    "Pharmaceutical Brands",
    "Pharmaceutical brands can use contract manufacturing to add products, increase production capacity or outsource selected pharmaceutical formulations while maintaining their own commercial identity."
  ],
  [
    "02",
    "Healthcare Companies",
    "Healthcare companies expanding into pharmaceutical products can use our manufacturing capabilities to coordinate formulation production, packaging and final product preparation."
  ],
  [
    "03",
    "Pharmaceutical Distributors & Wholesalers",
    "Distributors and wholesalers developing their own pharmaceutical portfolio can explore third party pharma manufacturing, contract manufacturing and private-label pharmaceutical production arrangements."
  ],
  [
    "04",
    "Product Marketing Companies",
    "Pharmaceutical marketing companies can outsource manufacturing while concentrating resources on product positioning, pharmaceutical sales, market development and distribution."
  ],
  [
    "05",
    "International Pharmaceutical Companies",
    "International pharmaceutical businesses evaluating Pharmaceutical Contract Manufacturing in India can discuss suitable production, packaging and supply requirements with Medico Pharma. Manufacturing requirements are evaluated according to product feasibility and applicable commercial and regulatory requirements."
  ]
] as const;

const processSteps = [
  [
    "01",
    "Product Requirement Discussion",
    "The process begins with understanding the pharmaceutical product requirement. We evaluate details such as: This creates a clear foundation for the proposed pharma contract manufacturing project.",
    [
      "Product category",
      "Dosage form",
      "Formulation requirement",
      "Strength",
      "Expected production requirement",
      "Packaging",
      "Labelling",
      "Commercial presentation",
      "Supply requirement"
    ]
  ],
  [
    "02",
    "Product & Formulation Planning",
    "The formulation and product specifications are reviewed to determine manufacturing feasibility. Considerations can include pharmaceutical ingredients, excipients, formulation type, dosage strength, packaging compatibility and production requirements. For Pharmaceutical Formulation Contract Manufacturing, this stage is important for ensuring that manufacturing requirements are clearly defined before production begins.",
    []
  ],
  [
    "03",
    "Manufacturing Coordination",
    "Once the production requirements have been established, manufacturing is planned according to the agreed product specification. Our role as a pharmaceutical manufacturing partner is to help coordinate the various components of the manufacturing process so production can progress efficiently.",
    []
  ],
  [
    "04",
    "Quality Checks & Documentation",
    "Quality requirements and appropriate production documentation form an important part of pharmaceutical contract manufacturing. Relevant checks and documentation requirements depend on the formulation, dosage form and applicable manufacturing process.",
    []
  ],
  [
    "05",
    "Packaging & Labelling",
    "Following manufacturing, pharmaceutical products are prepared using the agreed primary and secondary packaging configuration. Packaging requirements may include: The packaging and labelling format is coordinated according to the agreed pharmaceutical product requirements.",
    [
      "Blister packs",
      "Strip packs",
      "Pharmaceutical bottles",
      "Tubes",
      "Containers",
      "Cartons",
      "Product labels",
      "Product-specific packaging formats"
    ]
  ],
  [
    "06",
    "Final Dispatch & Supply",
    "Once manufacturing, relevant checks, documentation and packaging requirements are completed, the finished products can be prepared for the agreed supply process. This allows companies to manage pharmaceutical manufacturing outsourcing through a more coordinated production workflow.",
    []
  ]
] as const;

const flexibleSupport = [
  [
    "01",
    "Flexible Production Requirements",
    "Contract manufacturing allows production requirements to be planned according to product demand and manufacturing feasibility instead of maintaining fixed internal production capacity.",
    []
  ],
  [
    "02",
    "Multiple Dosage Forms",
    "Our Pharmaceutical Contract Manufacturing Services can cover selected: This can simplify portfolio expansion for companies managing multiple pharmaceutical categories.",
    [
      "Tablets",
      "Capsules",
      "Syrups",
      "Injectable formulations",
      "Ointments",
      "Creams",
      "Gels",
      "Topical formulations",
      "Antibiotic formulations",
      "Generic pharmaceutical products"
    ]
  ],
  [
    "03",
    "Custom Packaging Options",
    "Different pharmaceutical products require different packaging formats. Depending on the product, contract manufacturing can incorporate suitable pharmaceutical packaging, pack configuration, labelling and secondary packaging requirements.",
    []
  ],
  [
    "04",
    "Scalable Production Support",
    "As demand changes, companies can discuss additional production requirements without necessarily investing in additional internal pharmaceutical manufacturing infrastructure. This makes pharma manufacturing outsourcing suitable for both portfolio expansion and long-term production planning.",
    []
  ]
] as const;

const qualityStandards = [
  [
    "01",
    "Controlled Manufacturing Processes",
    "Each pharmaceutical formulation requires an organised manufacturing process based on its dosage form and product specifications. Production parameters are determined according to the relevant manufacturing requirement."
  ],
  [
    "02",
    "Consistent Product Quality",
    "Consistency is important when pharmaceutical products are manufactured across repeated production cycles. Defined formulations, material specifications, process requirements and packaging standards help support consistent finished-product expectations."
  ],
  [
    "03",
    "Quality Assurance & Testing",
    "Applicable quality assurance and testing requirements depend on the specific pharmaceutical product, formulation and manufacturing arrangement. Projects involving specific GMP pharmaceutical contract manufacturing requirements should be evaluated according to the verified status and capabilities of the applicable manufacturing facility."
  ],
  [
    "04",
    "Documentation & Traceability",
    "Pharmaceutical manufacturing involves documentation throughout different production stages. Appropriate documentation and traceability requirements help maintain better visibility across formulation, manufacturing, packaging and production activities."
  ]
] as const;

const benefits = [
  [
    "01",
    "Reduce Manufacturing Infrastructure Costs",
    "Building and maintaining pharmaceutical production infrastructure requires significant investment in facilities, equipment, processes, quality systems and manufacturing resources. Contract manufacturing allows companies to outsource eligible production requirements instead."
  ],
  [
    "02",
    "Expand Your Product Portfolio",
    "A flexible Pharma Contract Manufacturer can help companies introduce additional dosage forms and formulations without requiring dedicated production lines for every new product."
  ],
  [
    "03",
    "Focus on Marketing & Distribution",
    "Outsourcing pharmaceutical production allows internal teams to focus more resources on product development, branding, pharmaceutical marketing, sales strategy and distribution."
  ],
  [
    "04",
    "Access Flexible Production Capacity",
    "Contract manufacturing can provide additional production capacity when internal manufacturing resources are limited or when demand increases."
  ],
  [
    "05",
    "Improve Speed to Market",
    "Using existing pharmaceutical manufacturing capabilities can reduce the operational work involved in establishing new production infrastructure for every pharmaceutical product."
  ],
  [
    "06",
    "Scale Production as Your Business Grows",
    "An outsourced manufacturing model allows production requirements to evolve alongside commercial demand. This makes pharmaceutical manufacturing outsourcing useful for both growing pharmaceutical portfolios and established companies requiring additional capacity."
  ]
] as const;

const whyChoose = [
  [
    "01",
    "Diverse Pharmaceutical Product Portfolio",
    "Our contract manufacturing capabilities can support multiple pharmaceutical dosage forms and product categories, allowing businesses to manage different production requirements through a coordinated approach."
  ],
  [
    "02",
    "Reliable Manufacturing Coordination",
    "From the initial product discussion through production and packaging, we focus on maintaining clear coordination throughout the manufacturing workflow."
  ],
  [
    "03",
    "Flexible Production Solutions",
    "Our contract manufacturing approach can be adapted according to product type, formulation, dosage form, quantity and commercial requirements."
  ],
  [
    "04",
    "Quality-Focused Approach",
    "Manufacturing requirements are handled with attention to product specifications, controlled production processes and applicable quality requirements."
  ],
  [
    "05",
    "Packaging & Documentation Support",
    "Contract manufacturing can be supported with appropriate pharmaceutical packaging, labelling and relevant production documentation requirements."
  ],
  [
    "06",
    "Domestic & International Supply Support",
    "Medico Pharma can support manufacturing requirements intended for Indian pharmaceutical operations as well as suitable international pharmaceutical supply programmes, subject to applicable requirements."
  ]
] as const;

const comparisonRows = [
  [
    "Manufacturing Infrastructure",
    "Existing external capacity can be utilised",
    "Dedicated infrastructure must be established"
  ],
  [
    "Initial Investment",
    "Lower manufacturing infrastructure requirement",
    "Higher capital investment"
  ],
  [
    "Production Capacity",
    "Can be scaled according to manufacturing arrangement",
    "Limited by internal capacity"
  ],
  [
    "Product Expansion",
    "Easier access to additional manufacturing capabilities",
    "May require new equipment or production lines"
  ],
  [
    "Operational Management",
    "Manufacturing activity is outsourced",
    "Production managed internally"
  ],
  [
    "Packaging Support",
    "Can be included within manufacturing arrangement",
    "Requires internal or external packaging setup"
  ],
  [
    "Portfolio Flexibility",
    "Suitable for multiple outsourced formulations",
    "Depends on installed manufacturing capabilities"
  ],
  [
    "Business Focus",
    "More resources can remain focused on commercial operations",
    "Significant resources dedicated to production"
  ]
] as const;

const comparisonBenefits = [
  [
    "01",
    "Lower Infrastructure Investment",
    "Using a contract manufacturing organization or external manufacturing partner reduces the need to establish dedicated facilities for every product category."
  ],
  [
    "02",
    "Faster Product Expansion",
    "Access to existing manufacturing capabilities can support faster expansion into additional pharmaceutical formulations and dosage forms."
  ],
  [
    "03",
    "Flexible Manufacturing Capacity",
    "Production requirements can be adjusted according to the manufacturing arrangement and commercial requirement."
  ],
  [
    "04",
    "Simplified Production Management",
    "A structured pharmaceutical CMO or contract manufacturing model allows pharmaceutical businesses to outsource selected production activities rather than managing every manufacturing function internally. For organisations seeking both product development and manufacturing support, the broader industry may also use the term Pharmaceutical CDMO or contract development manufacturing organization. The exact scope should always be determined according to the services actually required and available."
  ]
] as const;

const manufacturingModels = [
  [
    "01",
    "Pharmaceutical Contract Manufacturing",
    "In Pharmaceutical Contract Manufacturing, production is carried out according to defined product requirements and an agreed manufacturing arrangement. It is suitable for businesses that want to outsource pharmaceutical production while maintaining control over their product portfolio and commercial strategy.",
    []
  ],
  [
    "02",
    "Third Party Pharmaceutical Manufacturing",
    "Third Party Pharmaceutical Manufacturing enables pharmaceutical companies, distributors and marketing companies to outsource the production of selected pharmaceutical products to an external manufacturing partner. This model is also commonly searched as: A clear manufacturing agreement helps define product requirements, manufacturing responsibilities, packaging requirements and other commercial terms.",
    [
      "Third party pharma manufacturing",
      "Pharmaceutical third party manufacturing",
      "3rd party manufacturing",
      "Third party pharmaceutical manufacturing services"
    ]
  ],
  [
    "03",
    "Private Label Pharmaceutical Manufacturing",
    "Private Label Pharmaceutical Manufacturing can support businesses that want pharmaceutical products manufactured for sale under their own commercial brand. Depending on the project, this can include manufacturing, packaging, product labelling and final commercial presentation.",
    []
  ]
] as const;

const cmoChecklist = [
  "Relevant dosage-form capability",
  "Product manufacturing feasibility",
  "Production flexibility",
  "Packaging capabilities",
  "Quality requirements",
  "Documentation",
  "Manufacturing coordination",
  "Ability to support ongoing production requirements"
] as const;

const relatedServices = [
  [
    "01",
    "Pharmaceutical Manufacturing",
    "Explore broader pharmaceutical manufacturing capabilities for different formulations and dosage forms.",
    "Explore Pharmaceutical Manufacturing",
    "/services/pharmaceutical-manufacturing"
  ],
  [
    "02",
    "Third-Party Manufacturing",
    "Outsource selected pharmaceutical production through flexible Pharmaceutical Third Party Manufacturing Services.",
    "Explore Third-Party Manufacturing",
    "/services/third-party-manufacturing"
  ],
  [
    "03",
    "OEM & Private Label Manufacturing",
    "Develop suitable pharmaceutical product ranges under your own commercial branding through private-label manufacturing support.",
    "Explore OEM & Private Label Manufacturing",
    "/services/oem-private-label"
  ],
  [
    "04",
    "Pharmaceutical Export Services",
    "Connect pharmaceutical production with suitable international supply and export-support requirements.",
    "Explore Pharmaceutical Export Services",
    "/services/export-services"
  ]
] as const;

const faqs = [
  [
    "What is pharmaceutical contract manufacturing?",
    "Pharmaceutical contract manufacturing is an outsourcing model in which a pharmaceutical company engages an external manufacturing partner to manufacture selected pharmaceutical products according to agreed specifications. Depending on the arrangement, Pharmaceutical Contract Manufacturing Services can include formulation production, manufacturing, packaging, labelling and relevant production documentation."
  ],
  [
    "What contract manufacturing services does Medico Pharma provide?",
    "Medico Pharma provides contract manufacturing support for selected pharmaceutical dosage forms including tablets, capsules, syrups, topical formulations, ointments, generic medicines and other suitable pharmaceutical products. Services can also include third-party manufacturing, private-label manufacturing, pharmaceutical packaging, labelling and production coordination."
  ],
  [
    "What pharmaceutical products can be manufactured under contract?",
    "Contract manufacturing can cover different pharmaceutical formulations depending on production capability and product feasibility. This can include tablets, capsules, syrups, selected injectables, ointments, creams, topical formulations, antibiotic products and generic medicines."
  ],
  [
    "Do you provide tablet and capsule contract manufacturing?",
    "Yes. Tablet and capsule production form part of our pharmaceutical contract manufacturing capabilities. Product specifications including formulation, strength, pharmaceutical excipients, packaging and pack configuration are evaluated according to individual project requirements."
  ],
  [
    "Can you handle bulk pharmaceutical manufacturing requirements?",
    "Scalable production requirements can be discussed according to the pharmaceutical product, formulation, available production capability and required quantities. Contract manufacturing is particularly useful for businesses requiring flexible or recurring production capacity."
  ],
  [
    "Do you offer flexible manufacturing quantities?",
    "Production quantities depend on the pharmaceutical product, dosage form, formulation and applicable manufacturing requirements. Medico Pharma can evaluate production requirements and recommend a suitable contract manufacturing approach based on project feasibility."
  ],
  [
    "Can you provide packaging and labelling support?",
    "Yes. Depending on the product, pharmaceutical contract manufacturing can include primary packaging, secondary packaging, pack configuration and product labelling support. Packaging requirements can include blister packs, strips, bottles, tubes, containers, cartons and other suitable pharmaceutical packaging formats."
  ],
  [
    "Who can use pharmaceutical contract manufacturing services?",
    "Contract manufacturing can be suitable for pharmaceutical brands, healthcare companies, pharmaceutical distributors, wholesalers, marketing companies and other pharmaceutical businesses that prefer to outsource eligible pharmaceutical manufacturing requirements."
  ],
  [
    "Can you manufacture products for international pharmaceutical companies?",
    "Suitable international pharmaceutical manufacturing projects can be evaluated according to product requirements, manufacturing feasibility, documentation and applicable supply requirements. Companies exploring Pharmaceutical Contract Manufacturing in India can discuss their individual product requirements with Medico Pharma."
  ],
  [
    "What information is required to start a contract manufacturing project?",
    "Initial information normally includes the pharmaceutical product name or category, dosage form, formulation or required specifications, strength, packaging requirement, expected production quantity, labelling requirement and intended supply requirements. Providing clear product specifications helps us evaluate the most appropriate manufacturing approach."
  ],
  [
    "How can I request a contract manufacturing quotation?",
    "Share your pharmaceutical product, dosage form, formulation, required quantity, packaging and other production requirements with Medico Pharma. After reviewing the requirements and manufacturing feasibility, the appropriate contract manufacturing arrangement can be discussed."
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

export default function ContractManufacturingPage() {
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
    name: "Pharmaceutical Contract Manufacturing Services",
    provider: { "@type": "Organization", name: "Medico Pharma" },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Pharmaceutical Contract Manufacturing",
    description: "Medico Pharma provides pharmaceutical contract manufacturing services in India for tablets, capsules, syrups and formulations with flexible packaging and production support.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
      { "@type": "ListItem", position: 3, name: "Contract Manufacturing" },
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
            Contract Manufacturing Services in <em>India</em>
            </h1>

            <p className="pmx-anim" style={delay(260)}>
              Medico Pharma provides flexible pharmaceutical contract manufacturing services in India for pharmaceutical
              brands, distributors and healthcare companies seeking dependable, scalable production support.
            </p>

            <div className="pmx-hero-actions pmx-anim" style={delay(360)}>
              <Link href="/contact" className="pmx-button pmx-button-solid">
                Discuss Your Manufacturing Requirements <span aria-hidden="true">→</span>
              </Link>
              <a href="#capabilities" className="pmx-button pmx-button-quiet">
                Explore Contract Manufacturing Capabilities <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="pmx-hero-visual pmx-anim" style={delay(300)}>
            <div
              className="pmx-image-slot pmx-image-slot-hero has-image"
              style={{ backgroundImage: 'url("/Contract Manufacturing.png")' }}
              role="img"
              aria-label="Pharmaceutical contract manufacturing facility"
            />

            <article className="pmx-hero-float pmx-hero-float-a">
              <span><i aria-hidden="true" /> Production signal</span>
              <svg viewBox="0 0 200 42" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 21h48l7-14 8 28 7-22 6 8h20l7-6 7 12 6-6h84" />
              </svg>
              <strong>Controlled process</strong>
            </article>

            <article className="pmx-hero-float pmx-hero-float-b">
              <span>Contract capability</span>
              <strong>07 product routes</strong>
              <div className="pmx-hero-bars" aria-hidden="true"><b /><b /><b /><b /></div>
            </article>
          </div>
        </div>

        <div className="pmx-container">
          <div className="pmx-hero-index" aria-label="Contract manufacturing overview">
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
            <p><strong>Reliable Contract Manufacturing Solutions for Pharmaceutical Brands, Distributors & Healthcare Companies</strong></p>
            <p>Medico Pharma provides flexible pharmaceutical contract manufacturing services in India for companies that require dependable manufacturing support without developing or expanding their own production infrastructure.</p>
            <p>Our pharma contract manufacturing solutions support pharmaceutical formulations across multiple dosage forms, including tablets, capsules, syrups, selected injectable formulations, ointments, topical products, antibiotic formulations and generic medicines.</p>
            <p>From initial product requirements and pharmaceutical formulation manufacturing to production coordination, packaging, labelling, documentation and final supply preparation, we provide structured support throughout the contract manufacturing process.</p>
            <p>Whether you require ongoing production, additional manufacturing capacity or a reliable pharmaceutical manufacturing partner, Medico Pharma provides scalable contract manufacturing solutions built around your product and commercial requirements.</p>
          </div>
        </div>
      </section>

      {/* 02 — INTRODUCTION */}
      <section className="pmx-section pmx-intro">
        <div className="pmx-container pmx-intro-grid pmx-reveal">
          <div className="pmx-section-code"><span>02</span><b>Introduction</b></div>
          <div className="pmx-intro-copy">
            <h2>Reliable Pharmaceutical Contract Manufacturing Solutions</h2>
            <p>Pharmaceutical companies do not always need to operate their own manufacturing facilities to introduce new products or expand an existing portfolio.</p><p>Through Pharmaceutical Contract Manufacturing, a company can outsource selected production requirements to an experienced pharmaceutical manufacturing partner while continuing to focus on product strategy, pharmaceutical marketing, sales, distribution and business development.</p><p>Medico Pharma provides Pharmaceutical Contract Manufacturing Services designed around defined product specifications, formulation requirements, dosage forms, production quantities, packaging requirements and supply plans.</p><p>Our contract manufacturing model can support businesses requiring:</p>
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
            <p>As a Pharma Contract Manufacturer, our focus is on simplifying the production process and creating a structured connection between product requirements, formulation manufacturing, quality processes, packaging and supply.</p>
            <p>For companies searching for a Pharma Contract Manufacturing Company in India, Medico Pharma provides a flexible manufacturing model capable of supporting both established pharmaceutical portfolios and new product expansion.</p>
          </div>
        </div>
      </section>

      {/* 03 — CAPABILITIES */}
      <section className="pmx-section pmx-capabilities" id="capabilities">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>03</b> Contract manufacturing capabilities</span>
              <h2>Our Pharmaceutical Contract Manufacturing Capabilities</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Different pharmaceutical products require different formulations, manufacturing processes, dosage formats and packaging configurations.</p><p>Our pharmaceutical contract manufacturing capabilities are structured to support a range of pharmaceutical product categories while allowing production requirements to be defined according to the individual product.</p><p>Final manufacturing specifications are subject to formulation feasibility, applicable manufacturing requirements and agreed production parameters.</p>
            </div>
          </div>

          <div className="pmx-capability-list">
            {capabilityCards.map((capability, index) => (
              <article className="pmx-capability-row pmx-reveal" key={capability.title} style={delay(index * 60)}>
                <div className="pmx-capability-id">
                  <span>{capability.number}</span>
                  <i aria-hidden="true"><Icon name={capability.icon as IconName} /></i>
                  <small>{capability.label}</small>
                </div>

                <div className="pmx-capability-story">
                  <h3>{capability.title}</h3>
                  <p>{capability.intro}</p>
                  <p className="pmx-capability-outro">{capability.outro}</p>
                </div>

                <div className="pmx-spec-panel">
                  <div className="pmx-spec-head">
                    <span>Specification</span>
                    <span>Available requirement options</span>
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

      {/* 04 — WHO WE WORK WITH */}
      <section className="pmx-section pmx-audience-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>04</b> Who we work with</span>
              <h2>Contract Manufacturing Solutions for Pharmaceutical Businesses</h2>
            </div>
            <p className="pmx-heading-copy">Our Pharma Contract Manufacturing Services can support businesses at different stages of pharmaceutical product development, expansion and distribution.</p>
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

      {/* 05 — PROCESS */}
      <section className="pmx-process-section">
        <div className="pmx-container">
          <div className="pmx-process-heading pmx-reveal">
            <div>
              <span className="pmx-kicker pmx-kicker-light"><b>05</b> Contract manufacturing process</span>
              <h2>Our Pharmaceutical Contract Manufacturing Process</h2>
            </div>
            <p>A structured manufacturing workflow helps maintain coordination between product requirements, formulation, pharmaceutical production, packaging and final supply. Our typical contract manufacturing process includes six key stages.</p>
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

      {/* 06 — FLEXIBLE SUPPORT */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>06</b> Flexible contract manufacturing support</span>
              <h2>Flexible Contract Manufacturing Solutions for Your Business</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Every pharmaceutical company has different production requirements.</p><p>Medico Pharma therefore provides flexible Contract Manufacturing Services that can adapt to product type, dosage form, production needs and commercial growth.</p>
            </div>
          </div>

          <div className="pmx-model-list">
            {flexibleSupport.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "factory" : index === 1 ? "layers" : index === 2 ? "package" : "route"} /></i>
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

      {/* 07 — QUALITY */}
      <section className="pmx-section pmx-quality-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>07</b> Quality & manufacturing standards</span>
              <h2>Quality-Focused Contract Manufacturing</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Quality management is an essential part of Pharmaceutical Contract Manufacturing.</p><p>Medico Pharma focuses on coordinating manufacturing requirements through defined processes, product specifications, appropriate documentation and quality-focused production practices.</p>
            </div>
          </div>

          <div className="pmx-model-list">
            {qualityStandards.map(([number, title, text], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 2 ? "shield" : "check"} /></i>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — BENEFITS */}
      <section className="pmx-section pmx-audience-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>08</b> Benefits of contract manufacturing</span>
              <h2>Benefits of Pharmaceutical Contract Manufacturing</h2>
            </div>
            <p className="pmx-heading-copy">Working with a Pharmaceutical Contract Manufacturer can allow pharmaceutical companies to expand more efficiently while reducing the need to build every manufacturing capability internally.</p>
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

      {/* 09 — WHY CHOOSE */}
      <section className="pmx-section pmx-why-section">
        <div className="pmx-container pmx-why-grid">
          <div className="pmx-why-intro pmx-reveal">
            <span className="pmx-kicker"><b>09</b> Why choose Medico Pharma</span>
            <h2>Why Choose Medico Pharma as Your Contract Manufacturing Partner?</h2>
            <p>Selecting the right Pharmaceutical Contract Manufacturing Company involves more than finding available production capacity.</p><p>The manufacturing partner should understand product requirements, formulation considerations, packaging, documentation and the commercial requirements surrounding pharmaceutical production.</p><p>Medico Pharma focuses on providing coordinated and flexible contract manufacturing support.</p>
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

      {/* 10 — CONTRACT VS IN-HOUSE */}
      <section className="pmx-section pmx-glance-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>10</b> Contract vs in-house manufacturing</span>
              <h2>Why Choose Contract Manufacturing Instead of In-House Production?</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Building an internal pharmaceutical manufacturing facility can provide direct production control, but it also requires substantial investment in infrastructure, equipment, specialised personnel, production systems, maintenance and ongoing manufacturing operations.</p><p>For many pharmaceutical companies, Pharmaceutical Contract Manufacturing Services provide a more flexible alternative.</p>
            </div>
          </div>

          <div className="pmx-table-wrap pmx-reveal" style={delay(80)}>
            <table className="pmx-table">
              <thead>
                <tr><th>Factor</th><th>Contract Manufacturing</th><th>In-House Manufacturing</th></tr>
              </thead>
              <tbody>
                {comparisonRows.map(([factor, contract, inHouse]) => (
                  <tr key={factor}><td>{factor}</td><td>{contract}</td><td>{inHouse}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pmx-model-list">
            {comparisonBenefits.map(([number, title, text], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name="factory" /></i>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — MANUFACTURING MODELS */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>11</b> Contract manufacturing models</span>
              <h2>Contract, Third-Party and Private Label Pharmaceutical Manufacturing</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Pharmaceutical manufacturing outsourcing can take different forms depending on the commercial relationship and product requirement.</p><p>Understanding these models can help companies select the right production arrangement.</p>
            </div>
          </div>

          <div className="pmx-model-list">
            {manufacturingModels.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "factory" : index === 1 ? "network" : "package"} /></i>
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

      {/* 12 — CMO SUPPORT */}
      <section className="pmx-section pmx-ledger-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>12</b> Pharmaceutical CMO support</span>
              <h2>Pharmaceutical CMO and Manufacturing Outsourcing Support</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>A Contract Manufacturing Organization, commonly referred to as a CMO, provides outsourced manufacturing capacity to other companies.</p><p>Within the pharmaceutical industry, organisations may search for a pharmaceutical CMO, CMO pharma, contract manufacturing organization pharma, or pharma contract manufacturing companies when evaluating production outsourcing options.</p><p>Medico Pharma's contract manufacturing approach is designed to coordinate pharmaceutical production requirements across formulation, manufacturing, packaging and supply preparation.</p>
            </div>
          </div>

          <p className="pmx-heading-copy pmx-reveal">For companies evaluating contract pharmaceutical manufacturing companies, important considerations should include:</p>

          <div className="pmx-service-ledger pmx-reveal" style={delay(80)}>
            {cmoChecklist.map((item, index) => (
              <div className="pmx-service-ledger-row" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <i aria-hidden="true">↗</i>
              </div>
            ))}
          </div>

          <div className="pmx-ledger-note pmx-reveal" style={delay(120)}>
            <p>Selecting a suitable pharmaceutical manufacturing partner can create a more efficient route from product requirement to commercial supply.</p>
          </div>
        </div>
      </section>

      {/* 13 — RELATED SERVICES */}
      <section className="pmx-section pmx-related-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>13</b> Related pharmaceutical services</span>
              <h2>Explore Our Other Pharmaceutical Services</h2>
            </div>
            <p className="pmx-heading-copy">Contract manufacturing can be combined with other Medico Pharma services depending on your pharmaceutical production and commercial requirements.</p>
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

      {/* 14 — FINAL CTA — animated visual, no image */}
      <section className="pmx-final-cta">
        <div className="pmx-container pmx-final-grid pmx-final-grid-rich">
          <div className="pmx-final-copy pmx-reveal" style={delay(100)}>
            <span className="pmx-kicker pmx-kicker-light"><b>14</b> Contract manufacturing partner</span>
            <h2>Looking for a Reliable Pharmaceutical Contract Manufacturing Partner?</h2>
            <p>Expand your pharmaceutical portfolio without building every manufacturing capability internally.</p>
            <p>Medico Pharma provides flexible Pharmaceutical Contract Manufacturing Services in India for businesses requiring tablet contract manufacturing, capsule contract manufacturing, syrup manufacturing, selected pharmaceutical formulations, third-party manufacturing, private-label production, packaging and scalable pharmaceutical manufacturing support.</p>
            <p>Discuss your dosage form, formulation, packaging and production requirements with our team and explore a contract manufacturing solution built around your pharmaceutical business.</p>

            <div className="pmx-final-actions">
              <Link href="/contact" className="pmx-button pmx-button-light">
                Request a Contract Manufacturing Quote <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="pmx-text-link">
                Talk to Our Pharmaceutical Team <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="pmx-final-system pmx-reveal" style={delay(220)} aria-label="Contract manufacturing workflow overview">
            <div className="pmx-final-system-glow" aria-hidden="true" />
            <div className="pmx-system-topline">
              <span><i aria-hidden="true" /> Contract manufacturing route</span>
              <small>Structured workflow</small>
            </div>

            <div className="pmx-system-route">
              <div className="pmx-system-rail" aria-hidden="true"><i /></div>

              <div className="pmx-system-stage">
                <span>01</span>
                <div><strong>Product requirement</strong><small>Dosage · Strength · Quantity</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>02</span>
                <div><strong>Formulation planning</strong><small>Ingredients · Excipients · Feasibility</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>03</span>
                <div><strong>Manufacturing</strong><small>Controlled production coordination</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>04</span>
                <div><strong>Packaging & labelling</strong><small>Primary · Secondary · Brand-ready</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>05</span>
                <div><strong>Supply preparation</strong><small>Domestic B2B · Export-oriented</small></div>
                <b aria-hidden="true">✓</b>
              </div>
            </div>

            <div className="pmx-system-metrics" aria-label="Contract manufacturing capability highlights">
              <div><strong>07</strong><span>Product routes</span></div>
              <div><strong>06</strong><span>Process stages</span></div>
              <div><strong>B2B</strong><span>Supply model</span></div>
            </div>

            <div className="pmx-system-status">
              <span><i aria-hidden="true" /> Production workflow active</span>
              <strong>Scalable support</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 15 — FAQ */}
      <section className="pmx-section pmx-faq-section" id="faq">
        <div className="pmx-container pmx-faq-grid">
          <div className="pmx-faq-intro pmx-reveal">
            <span className="pmx-kicker"><b>15</b> Frequently asked questions</span>
            <h2>Frequently Asked Questions About Pharmaceutical Contract Manufacturing</h2>
            <p>Answers to common questions about pharmaceutical contract manufacturing, production, packaging and project requirements.</p>
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
