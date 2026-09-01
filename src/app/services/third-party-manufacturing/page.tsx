import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Third-Party Pharmaceutical Manufacturing in India | Medico Pharma",
  description:
    "Medico Pharma provides third-party pharmaceutical manufacturing in India for tablets, capsules, syrups and formulations with packaging and scalable production support.",
  alternates: { canonical: "/services/third-party-manufacturing" },
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
  ["01", "Dosage forms", "Tablets · Capsules · Syrups · Topicals"],
  ["02", "Manufacturing model", "Third-party · Outsourced · Scalable"],
  ["03", "Packaging support", "Primary · Secondary · Labelling"],
  ["04", "Commercial supply", "Domestic · International support"],
] as const;

const introServices = [
  "Third Party Pharmaceutical Formulation Manufacturing",
  "Third Party Medicine Manufacturing",
  "Tablet Third Party Manufacturing",
  "Capsule Third Party Manufacturing",
  "Syrup Third Party Manufacturing",
  "Generic Third Party Manufacturing",
  "Pharmaceutical formulation manufacturing",
  "Finished formulation manufacturing",
  "Finished dosage form manufacturing",
  "Third party pharmaceutical packaging",
  "Pharmaceutical manufacturing and packaging",
  "Custom packaging and labelling",
  "Pharmaceutical production coordination",
  "Scalable production requirements",
  "Domestic and suitable international supply support"
] as const;
const capabilityCards = [
  {
    "title": "Tablet Third-Party Manufacturing",
    "intro": "Medico Pharma provides Tablet Third Party Manufacturing support for pharmaceutical companies requiring outsourced tablet production. Tablet manufacturing requirements can be planned according to formulation, dosage strength, tablet format, packaging and commercial requirements.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical tablets"
      ],
      [
        "Formulation Type",
        "Generic or selected pharmaceutical formulation"
      ],
      [
        "Strength",
        "According to approved product specification"
      ],
      [
        "Tablet Format",
        "Product and formulation dependent"
      ],
      [
        "Excipients",
        "According to formulation requirements"
      ],
      [
        "Coating",
        "Product-specific where applicable"
      ],
      [
        "Primary Packaging",
        "Blister, strip, bottle or suitable pharmaceutical packaging"
      ],
      [
        "Secondary Packaging",
        "Carton or agreed product configuration"
      ],
      [
        "Pack Size",
        "According to commercial requirement"
      ],
      [
        "Labelling",
        "Product-specific or brand-specific labelling"
      ],
      [
        "Manufacturing Model",
        "Third-party pharmaceutical manufacturing"
      ],
      [
        "Production Quantity",
        "Based on formulation and manufacturing feasibility"
      ],
      [
        "Documentation",
        "Applicable production documentation"
      ]
    ],
    "outro": "Tablet manufacturing can support both individual products and larger portfolios requiring recurring 3rd Party Pharma Manufacturing.",
    "number": "01",
    "icon": "tablet",
    "label": "Oral solid dosage"
  },
  {
    "title": "Capsule Third-Party Manufacturing",
    "intro": "Our Capsule Third Party Manufacturing services support pharmaceutical businesses seeking outsourced manufacturing for suitable capsule formulations. Product requirements can include capsule format, formulation, strength, fill composition, packaging and commercial pack configuration.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical capsules"
      ],
      [
        "Formulation",
        "According to approved or agreed specification"
      ],
      [
        "Capsule Type",
        "Product dependent"
      ],
      [
        "Fill Composition",
        "According to formulation"
      ],
      [
        "Strength",
        "Product-specific"
      ],
      [
        "Excipients",
        "Formulation dependent"
      ],
      [
        "Primary Packaging",
        "Blister, strip or bottle"
      ],
      [
        "Secondary Packaging",
        "Product-specific carton"
      ],
      [
        "Pack Size",
        "According to commercial requirement"
      ],
      [
        "Labelling",
        "Brand or product-specific"
      ],
      [
        "Manufacturing",
        "Third Party Pharma Manufacturing"
      ],
      [
        "Production Volume",
        "Subject to manufacturing feasibility"
      ],
      [
        "Documentation",
        "Relevant manufacturing documentation"
      ]
    ],
    "outro": "Companies requiring a flexible Third Party Medicine Manufacturer can combine capsule production with other dosage forms to build a broader pharmaceutical portfolio.",
    "number": "02",
    "icon": "capsule",
    "label": "Capsule formulation"
  },
  {
    "title": "Syrup Third-Party Manufacturing",
    "intro": "Medico Pharma supports selected Syrup Third Party Manufacturing requirements for pharmaceutical products supplied in liquid dosage formats. Syrup production specifications depend on formulation, strength, bottle configuration and applicable product requirements.",
    "rows": [
      [
        "Dosage Form",
        "Pharmaceutical syrup / oral liquid"
      ],
      [
        "Formulation",
        "Product-specific"
      ],
      [
        "Strength",
        "According to approved specification"
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
        "Bottle Type",
        "Suitable pharmaceutical container"
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
        "Labelling",
        "Product-specific pharmaceutical labelling"
      ],
      [
        "Secondary Packaging",
        "Carton or agreed packaging"
      ],
      [
        "Manufacturing Model",
        "Third-party pharmaceutical manufacturing"
      ],
      [
        "Documentation",
        "Applicable manufacturing documentation"
      ]
    ],
    "outro": "Syrup production can form part of broader Finished Formulation Manufacturing requirements for companies expanding across multiple dosage categories.",
    "number": "03",
    "icon": "bottle",
    "label": "Liquid dosage"
  },
  {
    "title": "Injectable Third-Party Manufacturing",
    "intro": "Selected injectable pharmaceutical formulations require controlled production, handling, packaging and documentation processes. Medico Pharma can support suitable injectable third party manufacturing projects depending on formulation, manufacturing feasibility and applicable production requirements.",
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
        "Container",
        "Appropriate product-specific format"
      ],
      [
        "Filling Requirement",
        "Product dependent"
      ],
      [
        "Primary Packaging",
        "Injectable-specific pharmaceutical packaging"
      ],
      [
        "Secondary Packaging",
        "According to commercial requirement"
      ],
      [
        "Labelling",
        "Product-specific labelling"
      ],
      [
        "Production Model",
        "Third-party pharmaceutical manufacturing"
      ],
      [
        "Documentation",
        "Applicable product documentation"
      ],
      [
        "Production Requirement",
        "Subject to manufacturing feasibility"
      ]
    ],
    "outro": "Injectable projects are evaluated individually before product specifications and production requirements are confirmed.",
    "number": "04",
    "icon": "injectable",
    "label": "Controlled injectable production"
  },
  {
    "title": "Ointment & Topical Third-Party Manufacturing",
    "intro": "Medico Pharma supports suitable ointments, creams, gels and topical pharmaceutical formulations through our Pharmaceutical Third Party Manufacturing Services. Topical products can be manufactured according to defined formulation, strength, product consistency, packaging and commercial requirements.",
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
        "According to formulation requirements"
      ],
      [
        "Strength",
        "Product dependent"
      ],
      [
        "Texture / Consistency",
        "According to formulation"
      ],
      [
        "Primary Packaging",
        "Tube, container or suitable format"
      ],
      [
        "Pack Size",
        "According to product requirement"
      ],
      [
        "Secondary Packaging",
        "Product-specific carton"
      ],
      [
        "Labelling",
        "Brand or product-specific"
      ],
      [
        "Manufacturing Model",
        "Third-party pharmaceutical manufacturing"
      ],
      [
        "Production Quantity",
        "Subject to manufacturing feasibility"
      ],
      [
        "Documentation",
        "Relevant production documentation"
      ]
    ],
    "outro": "This enables pharmaceutical businesses to include topical formulations within a broader third party manufacturing pharma products portfolio.",
    "number": "05",
    "icon": "topical",
    "label": "Ointment, cream & topical"
  },
  {
    "title": "Antibiotic Third-Party Manufacturing",
    "intro": "Selected antibiotic pharmaceutical formulations can be considered for Third Party Drug Manufacturing according to dosage form, formulation requirements and production feasibility.",
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
        "According to approved product specification"
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
        "Manufacturing Requirement",
        "Defined according to product"
      ],
      [
        "Primary Packaging",
        "Suitable pharmaceutical packaging"
      ],
      [
        "Pack Configuration",
        "According to commercial requirement"
      ],
      [
        "Labelling",
        "Product-specific"
      ],
      [
        "Production Model",
        "Third-party medicine manufacturing"
      ],
      [
        "Documentation",
        "Applicable manufacturing documentation"
      ]
    ],
    "outro": "Each antibiotic manufacturing project must be evaluated individually according to the specific formulation and manufacturing requirements.",
    "number": "06",
    "icon": "antibiotic",
    "label": "Selected antibiotic products"
  },
  {
    "title": "Generic Medicine Third-Party Manufacturing",
    "intro": "Medico Pharma provides generic third party manufacturing support for selected pharmaceutical formulations across suitable dosage forms. Generic medicine manufacturing can support pharmaceutical businesses that want to expand their product portfolio through an external production partner.",
    "rows": [
      [
        "Product Category",
        "Generic pharmaceutical products"
      ],
      [
        "Dosage Form",
        "Product dependent"
      ],
      [
        "Formulation",
        "Approved or agreed pharmaceutical formulation"
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
        "Primary Packaging",
        "Dosage-form appropriate"
      ],
      [
        "Secondary Packaging",
        "Product-specific"
      ],
      [
        "Labelling",
        "Commercial product labelling"
      ],
      [
        "Pack Configuration",
        "According to requirement"
      ],
      [
        "Production Model",
        "Third Party Medicine Manufacturing"
      ],
      [
        "Supply",
        "Domestic and suitable international requirements"
      ],
      [
        "Documentation",
        "Applicable product documentation"
      ]
    ],
    "outro": "Generic manufacturing can be combined with tablets, capsules, syrups and other compatible pharmaceutical products through an End-to-End Third Party Pharmaceutical Manufacturing arrangement.",
    "number": "07",
    "icon": "layers",
    "label": "Generic medicines"
  }
] as const;
const audiences = [
  [
    "01",
    "Pharmaceutical Marketing Companies",
    "Pharmaceutical marketing companies can outsource eligible manufacturing requirements while concentrating on product positioning, pharmaceutical sales, market development and distribution. Third-party manufacturing can provide access to an established production setup without requiring every manufacturing function to be built internally.",
    []
  ],
  [
    "02",
    "Pharma Distributors & Wholesalers",
    "Distributors and wholesalers looking to expand into additional pharmaceutical products can use Third Party Pharma Manufacturing to develop a more diverse product portfolio.",
    []
  ],
  [
    "03",
    "Healthcare Brands",
    "Healthcare companies expanding into pharmaceutical products can discuss suitable formulations and dosage forms through our third-party manufacturing services.",
    []
  ],
  [
    "04",
    "Product Marketing Companies",
    "Businesses focused primarily on product marketing and distribution can outsource pharmaceutical production while retaining greater focus on commercial operations.",
    []
  ],
  [
    "05",
    "International Pharmaceutical Companies",
    "International companies exploring Third Party Pharmaceutical Manufacturing in India can discuss suitable pharmaceutical formulations, production requirements, packaging and documentation with Medico Pharma. Manufacturing feasibility depends on the individual pharmaceutical product and applicable requirements.",
    []
  ],
  [
    "06",
    "Businesses Expanding Their Product Portfolio",
    "Companies with an existing pharmaceutical range can use an external Pharmaceutical Manufacturing Partner to add suitable tablets, capsules, syrups, topical products and other formulations without establishing additional production lines internally.",
    []
  ]
] as const;
const processSteps = [
  [
    "01",
    "Share Your Product Requirements",
    "The process begins with understanding your pharmaceutical manufacturing requirements. Useful information can include: This allows us to evaluate the most suitable Third Party Manufacturing arrangement.",
    [
      "Product category",
      "Dosage form",
      "Formulation",
      "Strength",
      "Required products",
      "Expected production quantity",
      "Packaging requirements",
      "Pack size",
      "Labelling requirements",
      "Supply requirements"
    ]
  ],
  [
    "02",
    "Select Products & Dosage Forms",
    "Suitable products and pharmaceutical dosage forms are identified according to the intended portfolio and available manufacturing capabilities. Options can include suitable:",
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
    "Finalize Manufacturing Requirements",
    "After product selection, manufacturing specifications are defined. This may include: Clearly defining these requirements helps create a more organised third party manufacturing contract and production workflow.",
    [
      "Formulation requirements",
      "Product strength",
      "Pharmaceutical excipients",
      "Production quantity",
      "Pack size",
      "Packaging configuration",
      "Labelling",
      "Applicable documentation"
    ]
  ],
  [
    "04",
    "Production & Quality Checks",
    "Products are manufactured according to the agreed formulation and applicable production requirements. Relevant quality checks depend on the product category, dosage form and manufacturing process.",
    []
  ],
  [
    "05",
    "Packaging & Labelling",
    "Following pharmaceutical production, the finished dosage form is prepared using the agreed packaging configuration. Depending on the product, Third Party Pharmaceutical Packaging can include: Packaging requirements are coordinated according to dosage form and commercial presentation.",
    [
      "Blister packaging",
      "Strip packaging",
      "Pharmaceutical bottles",
      "Tubes",
      "Containers",
      "Product labels",
      "Secondary cartons",
      "Product-specific pack formats"
    ]
  ],
  [
    "06",
    "Documentation & Dispatch",
    "After production, applicable quality procedures, packaging and documentation are completed, products can be prepared for the agreed supply process. This creates a more coordinated Pharmaceutical Manufacturing and Packaging workflow from initial requirement to finished pharmaceutical product.",
    []
  ]
] as const;
const portfolioPoints = [
  [
    "01",
    "Add New Pharmaceutical Products Faster",
    "Introducing an additional dosage form internally can require new equipment, production systems, specialised personnel and operational planning. Working with a Third Party Pharma Manufacturer can provide access to existing production capabilities and simplify pharmaceutical portfolio expansion.",
    []
  ],
  [
    "02",
    "Reduce Manufacturing Infrastructure Investment",
    "Building and maintaining a pharmaceutical manufacturing facility requires significant capital and operational resources. Third-party manufacturing allows suitable production requirements to be outsourced, reducing the need to establish complete manufacturing infrastructure internally.",
    []
  ],
  [
    "03",
    "Access Multiple Dosage Forms",
    "Businesses can develop portfolios across selected tablets, capsules, syrups, topical products, injectables and generic medicines without maintaining dedicated production infrastructure for every formulation category.",
    []
  ],
  [
    "04",
    "Scale Production as Demand Grows",
    "Third-party manufacturing gives businesses greater flexibility to discuss changing production requirements as their pharmaceutical portfolio develops. Production quantities remain subject to product type, formulation and manufacturing feasibility.",
    []
  ]
] as const;
const flexiblePoints = [
  [
    "01",
    "Multiple Product Categories",
    "Medico Pharma can support selected pharmaceutical formulations across multiple dosage forms, allowing businesses to develop a more diverse portfolio through a single coordinated manufacturing approach.",
    []
  ],
  [
    "02",
    "Flexible Production Requirements",
    "Manufacturing requirements can be discussed according to: Final production quantities depend on manufacturing feasibility.",
    [
      "Product category",
      "Pharmaceutical formulation",
      "Dosage form",
      "Strength",
      "Production quantity",
      "Packaging configuration",
      "Commercial requirements"
    ]
  ],
  [
    "03",
    "Custom Packaging Options",
    "Different dosage forms require different packaging. Depending on the pharmaceutical product, packaging can include blisters, strips, bottles, tubes, containers, cartons and other suitable formats.",
    []
  ],
  [
    "04",
    "Scalable Manufacturing Support",
    "As product demand develops, additional manufacturing requirements can be evaluated without requiring a company to establish equivalent internal production capacity.",
    []
  ],
  [
    "05",
    "Domestic & International Supply Coordination",
    "Our manufacturing services can support pharmaceutical products intended for domestic requirements as well as suitable international supply programmes, subject to applicable product and market requirements.",
    []
  ]
] as const;
const qualityPoints = [
  [
    "01",
    "Controlled Manufacturing Processes",
    "Each pharmaceutical dosage form follows a defined manufacturing process based on its formulation and product requirements. Production specifications are established before manufacturing begins to support process consistency.",
    []
  ],
  [
    "02",
    "Quality Assurance & Product Checks",
    "Relevant quality checks depend on the pharmaceutical formulation, dosage form and manufacturing requirements. The applicable quality process should always align with the specific pharmaceutical product being manufactured.",
    []
  ],
  [
    "03",
    "Batch Documentation",
    "Pharmaceutical manufacturing involves documentation throughout different stages of production. Depending on the manufacturing arrangement, documentation requirements can relate to:",
    [
      "Product specifications",
      "Manufacturing information",
      "Batch-related records",
      "Packaging requirements",
      "Quality procedures",
      "Product identification",
      "Applicable supply documentation"
    ]
  ],
  [
    "04",
    "Packaging & Traceability Support",
    "Appropriate packaging and product identification help maintain visibility across finished pharmaceutical products and production requirements. Traceability requirements depend on the applicable manufacturing and product standards.",
    []
  ],
  [
    "05",
    "Manufacturing Facility Requirements",
    "If a project specifically requires a WHO GMP Third Party Pharmaceutical Manufacturer, WHO GMP Third Party Pharma Manufacturer, GMP Certified Third Party Pharmaceutical Manufacturer or GMP Certified Third Party Pharma Manufacturer, the certification status and relevant product capability of the applicable manufacturing facility should be verified before production is confirmed. Specific certification claims should only be applied where they are supported by valid facility documentation.",
    []
  ]
] as const;
const benefits = [
  [
    "01",
    "Lower Manufacturing Infrastructure Costs",
    "Third-party manufacturing reduces the need to establish dedicated production infrastructure for every pharmaceutical product or dosage form.",
    []
  ],
  [
    "02",
    "Faster Product Portfolio Expansion",
    "Access to existing pharmaceutical manufacturing capabilities can make it easier to introduce suitable additional formulations into an existing product portfolio.",
    []
  ],
  [
    "03",
    "Focus More on Sales & Distribution",
    "Outsourcing production can allow internal business resources to focus more heavily on pharmaceutical marketing, distribution, sales management and portfolio development.",
    []
  ],
  [
    "04",
    "Flexible Production Capacity",
    "Manufacturing requirements can be planned according to product demand and agreed production capacity instead of being limited exclusively to internal manufacturing infrastructure.",
    []
  ],
  [
    "05",
    "Access Diverse Product Categories",
    "Working with a suitable Pharma Manufacturing Partner can provide access to multiple dosage forms and pharmaceutical formulation categories.",
    []
  ],
  [
    "06",
    "Scale Your Pharmaceutical Business Efficiently",
    "An outsourced manufacturing model can evolve alongside commercial requirements, making 3rd Party Manufacturing Pharmaceuticals suitable for both growing and established pharmaceutical businesses.",
    []
  ]
] as const;
const inhousePoints = [
  [
    "01",
    "Lower Initial Investment",
    "Third-party production can significantly reduce the infrastructure requirements associated with establishing pharmaceutical manufacturing operations internally.",
    []
  ],
  [
    "02",
    "Faster Market Entry",
    "Accessing existing production capability can help streamline the operational process required to introduce additional pharmaceutical formulations.",
    []
  ],
  [
    "03",
    "Reduced Operational Complexity",
    "A Third Party Manufacturing Company manages eligible production activities, reducing the number of manufacturing functions that need to be maintained internally.",
    []
  ],
  [
    "04",
    "Flexible Product Expansion",
    "Businesses can evaluate additional pharmaceutical formulations as their portfolio develops without necessarily establishing a new production line for every product.",
    []
  ],
  [
    "05",
    "Easier Production Scaling",
    "When commercial demand grows, manufacturing requirements can be reviewed according to available production capacity and product feasibility.",
    []
  ]
] as const;
const inhouseComparison = [
  [
    "Manufacturing Facility",
    "External manufacturing capacity is utilised",
    "Company operates its own facility"
  ],
  [
    "Initial Infrastructure",
    "Lower infrastructure requirement",
    "Significant facility investment"
  ],
  [
    "Equipment Requirement",
    "Existing manufacturing equipment can be utilised",
    "Equipment must be purchased and maintained"
  ],
  [
    "Product Expansion",
    "Access to suitable additional manufacturing capability",
    "May require new internal production lines"
  ],
  [
    "Operational Management",
    "Production is outsourced",
    "Manufacturing managed internally"
  ],
  [
    "Production Capacity",
    "Based on agreed manufacturing arrangement",
    "Based on internal facility capacity"
  ],
  [
    "Product Categories",
    "Can support multiple available dosage forms",
    "Limited by installed capability"
  ],
  [
    "Packaging",
    "Can form part of manufacturing service",
    "Managed internally or separately"
  ],
  [
    "Scaling",
    "Additional requirements can be discussed",
    "May require additional infrastructure"
  ],
  [
    "Commercial Focus",
    "More internal focus can remain on market activities",
    "Manufacturing requires significant internal management"
  ]
] as const;
const modelPoints = [
  [
    "01",
    "What Is Third-Party Pharmaceutical Manufacturing?",
    "Third Party Pharmaceutical Manufacturing involves outsourcing pharmaceutical production to an external manufacturer. A pharmaceutical company, distributor or marketing organisation can use this model to obtain suitable pharmaceutical products without operating the complete manufacturing process internally. Depending on the arrangement, the service can include:",
    [
      "Product manufacturing",
      "Formulation production",
      "Pharmaceutical packaging",
      "Labelling",
      "Production documentation",
      "Finished dosage form preparation"
    ]
  ],
  [
    "02",
    "What Is Contract Pharmaceutical Manufacturing?",
    "Pharmaceutical Contract Manufacturing generally involves manufacturing products according to defined specifications under a contractual production arrangement. Contract manufacturing may involve more detailed product-specific requirements depending on the project.",
    []
  ]
] as const;
const modelComparison = [
  [
    "Outsourced Production",
    "Yes",
    "Yes"
  ],
  [
    "Own Manufacturing Facility Required",
    "No",
    "No"
  ],
  [
    "Pharmaceutical Formulations",
    "Available according to manufacturing capability",
    "Based on agreed contract requirements"
  ],
  [
    "Custom Specifications",
    "Product dependent",
    "Can involve greater specification detail"
  ],
  [
    "Packaging Support",
    "Can be included",
    "Can be included"
  ],
  [
    "Labelling",
    "Can be included",
    "Can be included"
  ],
  [
    "Suitable for Portfolio Expansion",
    "Yes",
    "Yes"
  ],
  [
    "Scalable Production",
    "Subject to manufacturing capability",
    "Subject to contract and manufacturing capability"
  ],
  [
    "Commercial Arrangement",
    "Third-party production arrangement",
    "Contract-based manufacturing arrangement"
  ]
] as const;
const whyChoose = [
  [
    "01",
    "Diverse Pharmaceutical Product Portfolio",
    "Our third-party manufacturing capabilities can cover multiple dosage forms and pharmaceutical product categories, allowing companies to build a more diverse product portfolio.",
    []
  ],
  [
    "02",
    "Flexible Manufacturing Support",
    "Manufacturing requirements can be planned according to the product category, formulation, dosage form, quantity, packaging and commercial requirements.",
    []
  ],
  [
    "03",
    "Quality-Focused Approach",
    "Our approach focuses on clearly defined product specifications, controlled production requirements and applicable quality processes.",
    []
  ],
  [
    "04",
    "Packaging & Labelling Support",
    "Suitable Third Party Pharmaceutical Packaging and product labelling can be coordinated as part of the manufacturing project.",
    []
  ],
  [
    "05",
    "Documentation Assistance",
    "Applicable product and production documentation requirements can be coordinated according to the individual manufacturing project.",
    []
  ],
  [
    "06",
    "Domestic & Export Supply Support",
    "Suitable pharmaceutical manufacturing projects can support domestic requirements as well as selected international supply programmes subject to applicable manufacturing and market requirements.",
    []
  ]
] as const;
const endToEnd = [
  [
    "01",
    "Select Your Pharmaceutical Products",
    "Identify suitable pharmaceutical products and dosage forms based on the portfolio you want to develop.",
    []
  ],
  [
    "02",
    "Finalize Formulations & Specifications",
    "Define the formulation, strength, dosage form and other important product specifications.",
    []
  ],
  [
    "03",
    "Confirm Production Requirements",
    "Determine expected manufacturing quantities, packaging formats and other production requirements.",
    []
  ],
  [
    "04",
    "Begin Pharmaceutical Manufacturing",
    "Production is coordinated according to the agreed formulation and manufacturing specifications.",
    []
  ],
  [
    "05",
    "Complete Packaging & Labelling",
    "Finished pharmaceutical products move through appropriate packaging and labelling requirements.",
    []
  ],
  [
    "06",
    "Prepare Finished Products for Supply",
    "After relevant manufacturing, quality, packaging and documentation processes, finished products can be prepared for the agreed supply requirements. This integrated model enables businesses to work with a Pharmaceutical Manufacturing Partner across multiple stages instead of coordinating each manufacturing requirement independently.",
    []
  ]
] as const;
const relatedServices = [
  [
    "01",
    "Pharmaceutical Manufacturing",
    "Explore broader pharmaceutical manufacturing capabilities across selected dosage forms and pharmaceutical formulations.",
    "Explore Pharmaceutical Manufacturing",
    "/services/pharmaceutical-manufacturing"
  ],
  [
    "02",
    "Contract Manufacturing",
    "Outsource pharmaceutical production according to defined manufacturing and product specifications through flexible contract manufacturing services.",
    "Explore Contract Manufacturing",
    "/services/contract-manufacturing"
  ],
  [
    "03",
    "OEM & Private Label Manufacturing",
    "Develop suitable Pharmaceutical Products Under Own Brand with manufacturing, custom packaging and private-label support.",
    "Explore OEM & Private Label Manufacturing",
    "/services/oem-private-label"
  ],
  [
    "04",
    "Pharmaceutical Export Services",
    "Connect suitable pharmaceutical manufacturing requirements with international supply and export-support services.",
    "Explore Pharmaceutical Export Services",
    "/services/export-services"
  ]
] as const;
const faqs = [
  [
    "What is third-party pharmaceutical manufacturing?",
    "Third-party pharmaceutical manufacturing is an outsourcing model in which a pharmaceutical business uses an external manufacturing company to produce suitable pharmaceutical products. Depending on the arrangement, Third Party Pharmaceutical Manufacturing Services can include formulation production, manufacturing, packaging, labelling and applicable documentation."
  ],
  [
    "How does third-party pharmaceutical manufacturing work?",
    "The process generally begins with product and dosage-form requirements. Suitable formulations and manufacturing specifications are then identified, followed by pharmaceutical production, applicable quality checks, packaging, labelling and final product preparation."
  ],
  [
    "What products are available for third-party manufacturing?",
    "Suitable third-party manufacturing requirements can include selected pharmaceutical tablets, capsules, syrups, oral liquids, injectable formulations, ointments, creams, gels, topical products, antibiotic formulations and generic medicines. Final availability depends on formulation and manufacturing feasibility."
  ],
  [
    "Who can use third-party pharmaceutical manufacturing services?",
    "Third-party manufacturing can support pharmaceutical marketing companies, healthcare companies, distributors, wholesalers, established pharmaceutical brands and other businesses seeking to outsource eligible pharmaceutical production requirements."
  ],
  [
    "Do you provide tablet and capsule third-party manufacturing?",
    "Yes. Medico Pharma supports suitable Tablet Third Party Manufacturing and Capsule Third Party Manufacturing requirements. Specifications such as formulation, strength, pharmaceutical excipients, packaging, pack configuration and production quantities are evaluated according to the project."
  ],
  [
    "Can I expand my product portfolio through third-party manufacturing?",
    "Yes. One of the key benefits of Third Party Pharma Manufacturing is the ability to add suitable pharmaceutical products without establishing separate internal manufacturing infrastructure for every dosage form."
  ],
  [
    "Do you provide packaging and labelling support?",
    "Yes. Depending on the pharmaceutical product, third-party manufacturing can include suitable primary packaging, secondary packaging, product labelling and commercial pack configuration support."
  ],
  [
    "Can you handle bulk pharmaceutical manufacturing requirements?",
    "Scalable manufacturing requirements can be discussed according to the pharmaceutical product, dosage form, formulation, required production volume and available manufacturing capacity. Final quantities depend on production feasibility."
  ],
  [
    "What is the difference between third-party and contract manufacturing?",
    "Both models involve outsourcing pharmaceutical production. Third-party manufacturing commonly focuses on manufacturing suitable products through an external manufacturer, while contract manufacturing can involve more specifically defined production requirements under a contractual arrangement. The appropriate model depends on the product and manufacturing specifications."
  ],
  [
    "Can third-party manufactured products be supplied to international markets?",
    "Suitable pharmaceutical manufacturing projects intended for international supply can be evaluated according to the product, manufacturing facility, documentation and applicable market requirements."
  ],
  [
    "What information is required to start a third-party manufacturing project?",
    "Useful initial information includes the required product category, dosage form, formulation or specifications, strength, expected production quantity, packaging requirements, pack size, labelling requirements and intended supply requirements."
  ],
  [
    "How can I request a third-party manufacturing quotation?",
    "Share your pharmaceutical product requirements, dosage forms, required quantities, formulations and packaging specifications with Medico Pharma. After the manufacturing requirements and feasibility are evaluated, the appropriate third-party manufacturing arrangement can be discussed."
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

export default function ThirdPartyManufacturingPage() {
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
    name: "Third-Party Pharmaceutical Manufacturing Services",
    provider: { "@type": "Organization", name: "Medico Pharma" },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Third-Party Pharmaceutical Manufacturing",
    description:
      "Medico Pharma provides third-party pharmaceutical manufacturing in India for tablets, capsules, syrups and formulations with packaging and scalable production support.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
      { "@type": "ListItem", position: 3, name: "Third-Party Manufacturing" },
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
              Third-Party Pharmaceutical Manufacturing Services in <em>India</em>
            </h1>

            <p className="pmx-anim" style={delay(260)}>
              Medico Pharma provides flexible third-party pharmaceutical manufacturing in India for pharmaceutical
              brands, distributors and marketing companies seeking scalable outsourced production support.
            </p>

            <div className="pmx-hero-actions pmx-anim" style={delay(360)}>
              <Link href="/contact" className="pmx-button pmx-button-solid">
                Discuss Your Third-Party Manufacturing Requirements <span aria-hidden="true">→</span>
              </Link>
              <a href="#capabilities" className="pmx-button pmx-button-quiet">
                Explore Manufacturing Capabilities <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="pmx-hero-visual pmx-anim" style={delay(300)}>
            <div
              className="pmx-image-slot pmx-image-slot-hero has-image"
              style={{ backgroundImage: 'url("/third-party-manufacturing.png")' }}
              role="img"
              aria-label="Third-party pharmaceutical manufacturing facility"
            />

            <article className="pmx-hero-float pmx-hero-float-a">
              <span><i aria-hidden="true" /> Production signal</span>
              <svg viewBox="0 0 200 42" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 21h48l7-14 8 28 7-22 6 8h20l7-6 7 12 6-6h84" />
              </svg>
              <strong>Outsourced production</strong>
            </article>

            <article className="pmx-hero-float pmx-hero-float-b">
              <span>Third-party capability</span>
              <strong>07 product routes</strong>
              <div className="pmx-hero-bars" aria-hidden="true"><b /><b /><b /><b /></div>
            </article>
          </div>
        </div>

        <div className="pmx-container">
          <div className="pmx-hero-index" aria-label="Third-party manufacturing overview">
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
            <p><strong>Reliable Third-Party Manufacturing Solutions for Pharmaceutical Brands, Distributors & Marketing Companies</strong></p>
            <p>Expand your pharmaceutical product portfolio with flexible Third Party Manufacturing solutions from Medico Pharma.</p><p>We provide Third Party Pharmaceutical Manufacturing Services for pharmaceutical brands, marketing companies, healthcare businesses, distributors and organisations that want to expand their product range without establishing additional manufacturing infrastructure.</p><p>Our Third Party Pharma Manufacturing support covers multiple pharmaceutical dosage forms, including tablets, capsules, syrups, selected injectable formulations, ointments, topical products, antibiotic formulations and generic medicines.</p><p>From product selection and pharmaceutical formulation manufacturing to production coordination, packaging, labelling, documentation and final supply preparation, Medico Pharma provides a structured approach to outsourced pharmaceutical manufacturing.</p><p>Whether you require additional production capacity, new pharmaceutical products or an ongoing Pharma Manufacturing Partner, we can help you develop a third-party manufacturing solution around your product and commercial requirements.</p>
          </div>
        </div>
      </section>

      {/* 02 — INTRODUCTION */}
      <section className="pmx-section pmx-intro">
        <div className="pmx-container pmx-intro-grid pmx-reveal">
          <div className="pmx-section-code"><span>02</span><b>Introduction</b></div>
          <div className="pmx-intro-copy">
            <h2>Reliable Third-Party Pharmaceutical Manufacturing Solutions</h2>
            <p>Building a pharmaceutical product portfolio does not necessarily require establishing and operating a complete manufacturing facility.</p><p>Through Pharmaceutical Third Party Manufacturing, pharmaceutical businesses can outsource suitable production requirements to an external manufacturing partner while concentrating their resources on product strategy, pharmaceutical marketing, distribution and business development.</p><p>Medico Pharma provides Third Party Pharmaceutical Manufacturing in India with flexible manufacturing support for companies requiring dependable pharmaceutical production across different dosage forms.</p><p>Our third-party manufacturing services can support:</p>
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
            <p>As a Third Party Pharmaceutical Manufacturer, our role is to help connect product requirements with manufacturing, packaging and final product preparation through one coordinated process.</p>
            <p>For businesses evaluating third party manufacturing pharma companies or looking for a dependable Third Party Pharma Manufacturer in India, Medico Pharma provides manufacturing solutions designed around individual pharmaceutical product requirements.</p>
          </div>
        </div>
      </section>

      {/* 03 — CAPABILITIES */}
      <section className="pmx-section pmx-capabilities" id="capabilities">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>03</b> Third-party manufacturing capabilities</span>
              <h2>Our Third-Party Pharmaceutical Manufacturing Capabilities</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Different pharmaceutical formulations require different manufacturing processes, dosage forms, strengths, packaging configurations and production conditions.</p><p>Our Third Party Pharma Manufacturing Services are structured to support multiple pharmaceutical product categories while maintaining flexibility around product specifications and production requirements.</p><p>Final manufacturing specifications depend on formulation feasibility, dosage form, available production capability and applicable pharmaceutical requirements.</p>
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
                  {capability.outro && <p className="pmx-capability-outro">{capability.outro}</p>}
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

      {/* 04 — WHO WE SERVE */}
      <section className="pmx-section pmx-audience-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>04</b> Who we serve</span>
              <h2>Third-Party Manufacturing for Growing Pharmaceutical Businesses</h2>
            </div>
            <p className="pmx-heading-copy">Our Third Party Manufacturing for Pharma Companies model can support businesses at different stages of pharmaceutical growth.</p>
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
              <span className="pmx-kicker pmx-kicker-light"><b>05</b> Third-party manufacturing process</span>
              <h2>Our Third-Party Pharmaceutical Manufacturing Process</h2>
            </div>
            <p>Our manufacturing process is designed to establish a clear pathway from product requirements to manufacturing, packaging and final product preparation.</p>
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

      {/* 06 — PORTFOLIO EXPANSION */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>06</b> Expand your pharmaceutical portfolio</span>
              <h2>Expand Your Product Portfolio Without Setting Up a Manufacturing Facility</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>One of the biggest advantages of Pharmaceutical Third Party Manufacturing is the ability to expand pharmaceutical product offerings without developing an entirely new production facility for every dosage form.</p><p>Medico Pharma helps businesses access suitable pharmaceutical manufacturing capabilities through an outsourced manufacturing model.</p>
            </div>
          </div>

          <div className="pmx-model-list">
            {portfolioPoints.map(([number, title, text], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "route" : index === 1 ? "factory" : index === 2 ? "layers" : "network"} /></i>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — FLEXIBLE SOLUTIONS */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>07</b> Flexible third-party manufacturing</span>
              <h2>Flexible Manufacturing Solutions for Your Business Requirements</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Every pharmaceutical business has different products, production volumes and growth plans.</p><p>Our Third Party Pharma Manufacturing Services are designed to provide flexibility around dosage form, product selection, packaging and production requirements.</p>
            </div>
          </div>

          <div className="pmx-model-list">
            {flexiblePoints.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "layers" : index === 1 ? "route" : index === 2 ? "package" : index === 3 ? "factory" : "globe"} /></i>
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

      {/* 08 — QUALITY */}
      <section className="pmx-section pmx-quality-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>08</b> Quality-focused manufacturing</span>
              <h2>Quality-Focused Third-Party Pharmaceutical Manufacturing</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Quality remains a critical part of Third Party Pharmaceutical Manufacturing Services.</p><p>Our approach focuses on clearly defined product specifications, controlled manufacturing requirements, applicable quality checks, suitable packaging and relevant production documentation.</p>
            </div>
          </div>

          <div className="pmx-model-list">
            {qualityPoints.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "factory" : index === 1 ? "shield" : index === 2 ? "layers" : index === 3 ? "package" : "check"} /></i>
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
              <span className="pmx-kicker"><b>09</b> Benefits of third-party manufacturing</span>
              <h2>Benefits of Third-Party Pharmaceutical Manufacturing</h2>
            </div>
            <p className="pmx-heading-copy">Working with a professional Third Party Pharmaceutical Manufacturer can provide pharmaceutical companies with a more flexible route to product expansion.</p>
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

      {/* 10 — THIRD-PARTY VS IN-HOUSE */}
      <section className="pmx-section pmx-glance-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>10</b> Third-party vs in-house manufacturing</span>
              <h2>Third-Party Manufacturing vs In-House Pharmaceutical Manufacturing</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>Both manufacturing models can be appropriate depending on a company’s resources, production strategy and long-term requirements.</p><p>However, third-party manufacturing can provide greater operational flexibility for businesses that do not want to establish every manufacturing capability internally.</p>
            </div>
          </div>

          <div className="pmx-table-wrap pmx-reveal" style={delay(90)}>
            <table className="pmx-table">
              <thead><tr><th>Factor</th><th>Third-Party Manufacturing</th><th>In-House Manufacturing</th></tr></thead>
              <tbody>
                {inhouseComparison.map(([factor, thirdParty, inHouse]) => (
                  <tr key={factor}><td>{factor}</td><td>{thirdParty}</td><td>{inHouse}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pmx-model-list">
            {inhousePoints.map(([number, title, text], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "factory" : index === 1 ? "route" : index === 2 ? "network" : index === 3 ? "layers" : "check"} /></i>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — THIRD-PARTY VS CONTRACT */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>11</b> Third-party vs contract manufacturing</span>
              <h2>Third-Party Manufacturing vs Contract Manufacturing</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>The terms Third Party Manufacturing and Contract Pharmaceutical Manufacturing are often used closely within the pharmaceutical industry.</p><p>Both involve outsourcing pharmaceutical production, but the exact commercial arrangement, manufacturing responsibility and level of product customisation can vary.</p>
            </div>
          </div>

          <div className="pmx-model-list">
            {modelPoints.map(([number, title, text, items], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "network" : "factory"} /></i>
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
              <thead><tr><th>Requirement</th><th>Third-Party Manufacturing</th><th>Contract Manufacturing</th></tr></thead>
              <tbody>
                {modelComparison.map(([requirement, thirdParty, contract]) => (
                  <tr key={requirement}><td>{requirement}</td><td>{thirdParty}</td><td>{contract}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pmx-ledger-note pmx-reveal" style={delay(120)}>
            <p>The most suitable approach depends on product specifications, manufacturing requirements, required level of customisation and long-term production strategy.</p>
            <p>Medico Pharma can help evaluate whether a third party contract manufacturing model or pharmaceutical contract manufacturing arrangement is better aligned with the project.</p>
          </div>
        </div>
      </section>

      {/* 12 — WHY CHOOSE */}
      <section className="pmx-section pmx-why-section">
        <div className="pmx-container pmx-why-grid">
          <div className="pmx-why-intro pmx-reveal">
            <span className="pmx-kicker"><b>12</b> Why choose Medico Pharma</span>
            <h2>Why Choose Medico Pharma for Third-Party Pharmaceutical Manufacturing?</h2>
            <p>Choosing a Third Party Pharmaceutical Manufacturing Company involves more than finding available production capacity.</p><p>The manufacturing partner should be able to coordinate pharmaceutical product requirements, formulation considerations, manufacturing, packaging and relevant documentation through a structured process.</p><p>Medico Pharma provides flexible manufacturing support designed around these requirements.</p>
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

      {/* 13 — END-TO-END */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>13</b> End-to-end third-party manufacturing</span>
              <h2>From Product Requirements to Finished Pharmaceutical Products</h2>
            </div>
            <p className="pmx-heading-copy">Medico Pharma’s End-to-End Third Party Pharmaceutical Manufacturing approach is designed to connect the major stages required to turn a pharmaceutical requirement into a finished product.</p>
          </div>

          <div className="pmx-model-list">
            {endToEnd.map(([number, title, text], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={index === 0 ? "layers" : index === 1 ? "network" : index === 2 ? "route" : index === 3 ? "factory" : index === 4 ? "package" : "check"} /></i>
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
            <p className="pmx-heading-copy">Third-party manufacturing can be combined with other Medico Pharma pharmaceutical services according to your production and commercial requirements.</p>
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
            <span className="pmx-kicker pmx-kicker-light"><b>15</b> Third-party manufacturing partner</span>
            <h2>Looking for a Reliable Third-Party Pharmaceutical Manufacturing Partner?</h2>
            <p>Expand your pharmaceutical product portfolio without establishing every manufacturing capability internally.</p><p>Medico Pharma provides flexible Third Party Pharmaceutical Manufacturing Services in India for suitable tablets, capsules, syrups, injectable formulations, ointments, topical products, antibiotic formulations and generic medicines.</p><p>From Pharmaceutical Formulation Manufacturing and finished dosage form production to packaging, labelling and production coordination, we help create a structured manufacturing solution around your pharmaceutical requirements.</p><p>Discuss your products, dosage forms, formulations, production quantities and packaging requirements with Medico Pharma and explore a scalable third-party manufacturing solution for your business.</p>

            <div className="pmx-final-actions">
              <Link href="/contact" className="pmx-button pmx-button-light">
                Request a Third-Party Manufacturing Quote <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="pmx-text-link">
                Talk to Our Pharmaceutical Team <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="pmx-final-system pmx-reveal" style={delay(220)} aria-label="Third-party manufacturing workflow overview">
            <div className="pmx-final-system-glow" aria-hidden="true" />
            <div className="pmx-system-topline">
              <span><i aria-hidden="true" /> Third-party manufacturing route</span>
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
                <div><strong>Product &amp; formulation selection</strong><small>Portfolio · Feasibility · Specifications</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>03</span>
                <div><strong>Manufacturing</strong><small>Production · Quality coordination</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>04</span>
                <div><strong>Packaging &amp; labelling</strong><small>Primary · Secondary · Commercial pack</small></div>
                <b aria-hidden="true">↘</b>
              </div>
              <div className="pmx-system-stage">
                <span>05</span>
                <div><strong>Dispatch &amp; supply</strong><small>Documentation · Domestic · International</small></div>
                <b aria-hidden="true">✓</b>
              </div>
            </div>

            <div className="pmx-system-metrics" aria-label="Third-party manufacturing capability highlights">
              <div><strong>07</strong><span>Product routes</span></div>
              <div><strong>06</strong><span>Process stages</span></div>
              <div><strong>B2B</strong><span>Supply model</span></div>
            </div>

            <div className="pmx-system-status">
              <span><i aria-hidden="true" /> Manufacturing workflow active</span>
              <strong>Scalable support</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 16 — FAQ */}
      <section className="pmx-section pmx-faq-section" id="faq">
        <div className="pmx-container pmx-faq-grid">
          <div className="pmx-faq-intro pmx-reveal">
            <span className="pmx-kicker"><b>16</b> Frequently asked questions</span>
            <h2>Frequently Asked Questions About Third-Party Pharmaceutical Manufacturing</h2>
            <p>Answers to common questions about third-party pharmaceutical manufacturing, production, packaging, outsourcing and supply requirements.</p>
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
