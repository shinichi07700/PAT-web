// Central content & product data for PT. Prima Agro Tech
// Technical/product specs are representative placeholders — editable before launch.

export const IMAGES = {
  heroField: "https://images.pexels.com/photos/5555232/pexels-photo-5555232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  lab: "/images/facilities/facility-lab.jpg",
  microbes: "https://images.pexels.com/photos/5842129/pexels-photo-5842129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  testTubes: "/images/facilities/facility-warehouse.jpg",
  facilityComplex: "/images/facilities/facility-complex.jpg",
  facilityLab: "/images/facilities/facility-lab.jpg",
  facilityWarehouse: "/images/facilities/facility-warehouse.jpg",
  farm: "https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  ricePaddy: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  palmOil: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  scientist: "https://images.pexels.com/photos/8539770/pexels-photo-8539770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  soil: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  farmerField: "https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  greenhouse: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  expedition: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  production: "/images/facilities/facility-complex.jpg",
  teamField: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  careerLab: "./images/career/career-lab.jpg",
};

export const WHATSAPP_NUMBER = "6285283790848";
export const LINKEDIN_URL = "https://www.linkedin.com/company/primaagrotech";

export const STATS = [
  { value: 2008, suffix: "", key: "founded", noFormat: true },
  { value: 120, suffix: "+", key: "isolates" },
  { value: 16, suffix: "+", key: "provinces" },
  { value: 15000, suffix: "+", key: "farmers" },
];

export const CERTIFICATIONS = [
  "Komite Akreditasi Nasional (KAN)",
  "ISO 9001:2015",
  "Organik Indonesia",
  "Control Union / INOFICE",
  "ISO 17025",
];

// 3 homepage / overview cards
export const CATEGORY_CARDS = [
  {
    slug: "bio-fertilizers",
    targetUrl: "/solutions?type=Bio%20Fertilizer,Bio%20Stimulant%20%26%20Nutrition",
    title: { en: "Bio Fertilizers & Biostimulant", id: "Bio Fertilizers & Biostimulant" },
    desc: {
      en: "Live microbes that fix nitrogen, solubilize phosphate and trigger a plant's own defenses — a stronger foundation from the roots up.",
      id: "Mikroba hidup yang mengikat nitrogen, melarutkan fosfat, dan memicu pertahanan alami tanaman — fondasi lebih kuat dari akar.",
    },
    image: "/images/solution-bio-fertilizer.jpg",
    accent: "#43B14B",
  },
  {
    slug: "bio-crop-protection",
    targetUrl: "/solutions?type=Bio%20Insecticide,Bio%20Fungicide",
    title: { en: "Bio Crop Protection", id: "Bio Crop Protection" },
    desc: {
      en: "Insect-specific fungi and bacteria that control pests and disease through targeted infection — sparing pollinators and beneficials.",
      id: "Jamur dan bakteri spesifik yang mengendalikan hama dan penyakit lewat infeksi tertarget — aman bagi penyerbuk dan serangga bermanfaat.",
    },
    image: "/images/solution-bio-protection.jpg",
    accent: "#2D6A35",
  },
  {
    slug: "soil-remediation",
    targetUrl: "/solutions?type=Bio%20Decomposer",
    title: { en: "Bio Decomposer", id: "Bio Decomposer" },
    desc: {
      en: "Bio-decomposers that turn crop residue and plantation waste into usable soil — a practical alternative to open burning.",
      id: "Bio-decomposer yang mengubah sisa panen dan limbah perkebunan menjadi tanah subur — alternatif praktis pembakaran terbuka.",
    },
    image: "/images/bio-decomposer.jpg",
    accent: "#E8A500",
  },
];

// 5 detailed filter categories + their category grid pages
export const SOLUTION_TYPES = [
  "Bio Fertilizer",
  "Bio Insecticide",
  "Bio Fungicide",
  "Bio Stimulant & Nutrition",
  "Bio Decomposer",
];

export const CATEGORY_PAGES = {
  "bio-fertilizers": {
    type: "Bio Fertilizer",
    title: "Bio Fertilizers",
    image: IMAGES.farm,
    desc: {
      en: "Our bio-fertilizers work through the roots, building healthier plants from the ground up. Each formulation carries live microbes that fix nitrogen, solubilize phosphate or trigger a plant's own natural defenses, giving crops a stronger foundation without relying on synthetic inputs alone.",
      id: "Pupuk hayati kami bekerja melalui akar, membangun tanaman lebih sehat dari dasar. Setiap formulasi membawa mikroba hidup yang mengikat nitrogen, melarutkan fosfat, atau memicu pertahanan alami tanaman.",
    },
  },
  "bio-fungicides": {
    type: "Bio Fungicide",
    title: "Bio Fungicides",
    image: IMAGES.greenhouse,
    desc: {
      en: "Our bio-fungicides use living organisms, not synthetic chemicals, to suppress the fungal and bacterial diseases that threaten yield. Each product is built around microbes proven to compete with, infect or block the pathogens they target, from root rot to fruit rot to blast disease.",
      id: "Bio-fungisida kami memakai organisme hidup, bukan bahan kimia sintetis, untuk menekan penyakit jamur dan bakteri yang mengancam hasil panen.",
    },
  },
  "bio-insecticides": {
    type: "Bio Insecticide",
    title: "Bio Insecticides",
    image: IMAGES.farmerField,
    desc: {
      en: "Our bio-insecticides control pests the way nature does, through targeted infection rather than broad spectrum poison. Each formulation is built around insect-specific fungi or bacteria that leave pollinators and natural predators alone, so the rest of the ecosystem around your crop keeps working for you.",
      id: "Bio-insektisida kami mengendalikan hama seperti cara alam, lewat infeksi tertarget bukan racun spektrum luas — membiarkan penyerbuk dan predator alami tetap bekerja.",
    },
  },
  "soil-remediation": {
    type: "Bio Decomposer",
    title: "Bio Decomposer",
    image: IMAGES.soil,
    desc: {
      en: "Our bio-decomposers turn crop residue, plantation waste and manure into usable soil far faster than nature would on its own, while rebuilding the biological activity that healthy soil depends on. From rice straw to oil palm empty bunches, these products shorten the wait between harvest and healthy ground.",
      id: "Bio-decomposer kami mengubah sisa panen, limbah perkebunan, dan kotoran menjadi tanah subur jauh lebih cepat, sekaligus memulihkan aktivitas biologis tanah.",
    },
  },
  "biostimulant-nutrition": {
    type: "Bio Stimulant & Nutrition",
    title: "Bio Stimulant & Nutrition",
    image: IMAGES.ricePaddy,
    desc: {
      en: "Our bio-stimulant and nutrition products fill the gaps that fertilizer alone cannot reach, from micronutrients and amino acids to natural plant hormones and soil conditioners. Each one is built to support a specific stage of growth, whether that is stronger roots early on or fuller grain and fruit at the finish.",
      id: "Produk bio-stimulan dan nutrisi kami mengisi celah yang tak terjangkau pupuk saja — dari mikronutrien dan asam amino hingga hormon tanaman alami dan pembenah tanah.",
    },
  },
};

export const CROPS = ["Paddy", "Corn", "Chilli", "Tomato", "Potato", "Shallot", "Oil Palm", "Sugarcane", "Banana", "Durian", "Cacao", "Citrus"];

const TYPE_META = {
  "Bio Fertilizer": {
    slug: "bio-fertilizers",
    image: IMAGES.farm,
    form: [
      ["Active organism", "Beneficial bacteria consortium"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Carrier-based powder"],
      ["Shelf life", "24 months (ANHYDRIOM™)"],
    ],
    app: [["General use", "2 kg/ha", "Soil / seed", "At planting / land prep"]],
  },
  "Bio Insecticide": {
    slug: "bio-insecticides",
    image: IMAGES.farmerField,
    form: [
      ["Active organism", "Entomopathogenic microbe"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "36 months (ANHYDRIOM™)"],
    ],
    app: [["General use", "1–2 kg/ha or 5 g/L", "Foliar / soil", "At pest onset, repeat 10–14 days"]],
  },
  "Bio Fungicide": {
    slug: "bio-fungicides",
    image: IMAGES.greenhouse,
    form: [
      ["Active organism", "Antagonist microbe(s)"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "24 months (ANHYDRIOM™)"],
    ],
    app: [["General use", "5 g/L water", "Foliar & drench", "Preventive, every 10–14 days"]],
  },
  "Bio Stimulant & Nutrition": {
    slug: "biostimulant-nutrition",
    image: IMAGES.ricePaddy,
    form: [
      ["Active content", "Humic / amino / mineral complex"],
      ["Source", "Natural extract"],
      ["Formulation type", "Soluble powder / liquid"],
      ["Shelf life", "36 months"],
    ],
    app: [["General use", "2–3 g/L or per label", "Foliar / fertigation", "Per growth stage"]],
  },
  "Bio Decomposer": {
    slug: "soil-remediation",
    image: IMAGES.soil,
    form: [
      ["Active organism", "Cellulolytic & lignolytic consortium"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Powder"],
      ["Shelf life", "24 months"],
    ],
    app: [["Crop residue", "1–2 kg/tonne", "Spray & incorporate", "Post-harvest"]],
  },
};

const slugify = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const normCrop = (c) => (c === "Rice" ? "Paddy" : c);

export const ALL_PRODUCTS_DATA = [
  {
    name: "SEUDOFLOR",
    type: "Bio Fungicide",
    activeOrganism: "Pseudomonas fluorescens",
    regNo: "RI.01060120258873",
    cardCrops: ["Banana", "Chilli", "Tomato"],
    crops: ["Banana", "Chilli", "Tomato", "Potato", "Melon"],
    image: "/images/products/seudoflor.jpg",
    keyBenefit: {
      en: "Formulated as a soil protector & root activator for horticultural crops, preventing sudden wilting and Pythium infection.",
      id: "Diformulasikan sebagai pelindung akar & aktivator tanah untuk tanaman hortikultura, mencegah layu mendadak dan serangan Pythium.",
    },
    benefits: {
      en: [
        "Helps prevent plants from wilting suddenly during cultivation",
        "Supports seedling protection against Pythium infection from the start of planting",
        "Activates beneficial microbes in the plant root zone",
        "Helps support phosphate availability for optimal root development",
        "Formulated as a soil protector & root activator for horticultural crops",
      ],
      id: [
        "Membantu tanaman tidak mudah layu mendadak saat budidaya",
        "Melindungi bibit dari serangan Pythium sejak awal tanam",
        "Mengaktifkan mikroba baik di zona perakaran tanaman",
        "Membantu ketersediaan fosfat untuk perakaran yang optimal",
        "Diformulasikan sebagai pelindung akar & aktivator tanah untuk tanaman hortikultura",
      ],
    },
    what: {
      en: "SEUDOFLOR is formulated with Pseudomonas fluorescens to protect root zones against sudden wilt and early Pythium damping-off while mobilizing bound phosphate for vigorous root establishment.",
      id: "SEUDOFLOR diformulasikan dengan Pseudomonas fluorescens untuk melindungi zona perakaran dari layu mendadak dan infeksi Pythium sejak awal tanam, sekaligus melarutkan fosfat untuk pertumbuhan akar yang optimal.",
    },
    formulation: [
      ["Active organism", "Pseudomonas fluorescens"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "24 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Chilli / Tomato", "2.5–5 g/L water", "Root drench / spray", "At planting & every 10–14 days"],
      ["Potato / Melon", "2–5 kg/ha", "Soil application", "Pre-planting soil treatment"],
    ],
  },
  {
    name: "PAENAMAXI",
    type: "Bio Fungicide",
    activeOrganism: "Paenibacillus polymyxa + Bacillus amyloliquefaciens",
    regNo: "RI.01020120227340",
    cardCrops: ["Shallot", "Paddy", "Cucumber"],
    crops: ["Shallot", "Paddy", "Cucumber", "Melon", "Watermelon"],
    image: "/images/products/paenamaxi.jpg",
    keyBenefit: {
      en: "Contains bioactive compounds that help control Rice Blast, Bacterial Leaf Blight, and shallot Purple Spot.",
      id: "Mengandung senyawa bioaktif untuk membantu mengendalikan Blas, Hawar Daun Bakteri pada padi, dan Bercak Ungu bawang merah.",
    },
    benefits: {
      en: [
        "Developed to help control Rice Blast and Bacterial Leaf Blight in rice",
        "Helps control Purple Spot/Alternaria Leaf Spot in shallot",
        "Supports control of Powdery Mildew and Downy Mildew",
        "Helps manage Coffee Leaf Rust; preventive application is recommended",
        "Contains Paenibacillus polymyxa and Bacillus amyloliquefaciens, which produce bioactive compounds that inhibit fungal and bacterial pathogens",
      ],
      id: [
        "Dikembangkan untuk membantu mengendalikan Blas dan Hawar Daun Bakteri pada padi",
        "Membantu mengendalikan Bercak Ungu/Alternaria pada bawang merah",
        "Mendukung pengendalian Embun Tepung dan Embun Bulu",
        "Membantu mengatasi Karat Daun pada tanaman kopi; aplikasi preventif disarankan",
        "Mengandung Paenibacillus polymyxa dan Bacillus amyloliquefaciens yang menghasilkan senyawa bioaktif penghambat patogen jamur dan bakteri",
      ],
    },
    what: {
      en: "PAENAMAXI uses a dual-strain bacterial biofungicide (Paenibacillus polymyxa and Bacillus amyloliquefaciens) to produce bioactive secondary metabolites that inhibit both fungal and bacterial leaf and panicle diseases.",
      id: "PAENAMAXI menggunakan biofungisida bakteri ganda (Paenibacillus polymyxa dan Bacillus amyloliquefaciens) yang menghasilkan metabolit sekunder bioaktif untuk menghambat patogen jamur dan bakteri pada daun dan malai.",
    },
    formulation: [
      ["Active organism", "Paenibacillus polymyxa + Bacillus amyloliquefaciens"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "24 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Paddy", "2.5–5 g/L water", "Foliar spray", "At tillering and booting stage"],
      ["Shallot", "2.5–5 g/L water", "Foliar spray", "Every 7–10 days preventive"],
    ],
  },
  {
    name: "BIOTRACOL",
    type: "Bio Fungicide",
    activeOrganism: "Trichoderma asperellum + Bacillus subtilis",
    regNo: "RI.01020120186156",
    cardCrops: ["Banana", "Chilli", "Cacao"],
    crops: ["Banana", "Chilli", "Tomato", "Potato", "Cacao", "Avocado", "Cabbage", "Citrus", "Durian"],
    image: "/images/products/biotracol.jpg",
    keyBenefit: {
      en: "Contains active microorganisms that help suppress symptoms of Phytophthora (fruit rot, root rot) and Sigatoka disease.",
      id: "Mengandung mikroba aktif penghambat patogen untuk menekan gejala penyakit Phytophthora dan Sigatoka.",
    },
    benefits: {
      en: [
        "Contains active microorganisms that help inhibit plant pathogens",
        "Helps suppress symptoms of Phytophthora (fruit rot, root rot) and Sigatoka disease",
        "Environmentally friendly, leaves no harmful residue",
        "Supports healthy, productive chili, cocoa, and banana crops with regular, proper application",
      ],
      id: [
        "Mengandung mikroba aktif penghambat patogen",
        "Menekan gejala penyakit Phytoptora dan Sigatoka",
        "Ramah lingkungan dan tidak meninggalkan residu",
        "Mendukung kondisi tanaman cabai, kakao, dan pisang tetap sehat dan produktif dengan aplikasi yang tepat dan teratur",
      ],
    },
    what: {
      en: "BIOTRACOL combines active antagonist microorganisms that colonize crop surfaces to outcompete and suppress Phytophthora fruit/root rot and Sigatoka disease, leaving zero chemical residue.",
      id: "BIOTRACOL menggabungkan mikroorganisme antagonis aktif yang mengoloni permukaan tanaman untuk menekan penyakit busuk Phytophthora dan Sigatoka tanpa meninggalkan residu kimia berbahaya.",
    },
    formulation: [
      ["Active organism", "Trichoderma asperellum + Bacillus subtilis"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "24 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Banana", "5 g/L water", "Foliar & drench", "Every 10–14 days"],
      ["Durian", "10 g/L water", "Soil drench", "Monthly"],
      ["Cacao", "5 g/L water", "Foliar spray", "Every 14 days"],
    ],
  },
  {
    name: "MOLERIMAX",
    type: "Bio Fungicide",
    activeOrganism: "Acremonium variecolor",
    regNo: "RI.01020120258841",
    cardCrops: ["Shallot"],
    crops: ["Shallot"],
    image: "/images/products/molerimax.jpg",
    keyBenefit: {
      en: "Developed specifically to help control Fusarium Wilt (Moler disease) in shallot using endophytic Acremonium variecolor.",
      id: "Dikembangkan khusus untuk membantu mengendalikan penyakit Layu Fusarium (Moler) pada bawang merah dengan cendawan endofit.",
    },
    benefits: {
      en: [
        "Developed specifically to help control Fusarium Wilt (Moler disease) in shallot",
        "Contains an endophytic fungus (Acremonium variecolor) that enters plant tissue to help defend against Fusarium oxysporum",
        "Works by boosting the plant's own defensive exudates against the pathogen",
        "Soluble powder formulation, easy to apply mixed with fertilizer or as a drench",
      ],
      id: [
        "Dikembangkan khusus untuk membantu mengendalikan penyakit Layu Fusarium (Moler) pada bawang merah",
        "Mengandung cendawan endofit (Acremonium variecolor) yang masuk ke jaringan tanaman untuk membantu melawan Fusarium oxysporum",
        "Bekerja dengan meningkatkan eksudat pertahanan alami tanaman terhadap patogen",
        "Formulasi tepung larut, mudah diaplikasikan dicampur pupuk atau dikocorkan",
      ],
    },
    what: {
      en: "MOLERIMAX is an endophytic biofungicide containing Acremonium variecolor that colonizes shallot vascular tissue, stimulating defensive exudates that suppress Fusarium oxysporum (Moler disease).",
      id: "MOLERIMAX adalah biofungisida endofit berbahan aktif Acremonium variecolor yang mengoloni jaringan tanaman bawang merah, memicu eksudat pertahanan alami untuk melawan Fusarium oxysporum (penyakit Moler).",
    },
    formulation: [
      ["Active organism", "Acremonium variecolor (endophytic fungus)"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "24 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Shallot", "2–5 kg/ha or 5 g/L", "Soil drench / fertilizer mix", "At planting, 15, and 30 DAP"],
    ],
  },
  {
    name: "BT PLUS",
    type: "Bio Insecticide",
    activeOrganism: "Bacillus thuringiensis + Serratia marcescens",
    regNo: "RI.01010120175741",
    cardCrops: ["Oil Palm", "Paddy", "Banana"],
    crops: ["Oil Palm", "Paddy", "Banana", "Corn", "Sugarcane"],
    image: "/images/products/bt-plus.jpg",
    keyBenefit: {
      en: "Helps control armyworm, rice leaf folder, stem borer, and fire caterpillar specifically without harming pollinators.",
      id: "Membantu mengendalikan ulat grayak, hama putih palsu, penggerek padi & ulat api secara spesifik dan aman bagi musuh alami.",
    },
    benefits: {
      en: [
        "Helps control armyworm, rice leaf folder (\"hama putih palsu\"), rice stem borer, and fire caterpillar",
        "Targets Lepidoptera pests specifically, while remaining safe for natural enemies and pollinators",
        "Supports Integrated Pest Management (IPM) rotation programs",
        "Bacillus thuringiensis and Serratia marcescens combination works through the larval digestive system",
      ],
      id: [
        "Membantu mengendalikan ulat grayak, hama putih palsu, penggerek padi & ulat api",
        "Menyasar hama target Lepidoptera secara spesifik, aman bagi musuh alami dan serangga penyerbuk",
        "Mendukung program pengendalian hama terpadu (IPM)",
        "Kombinasi Bacillus thuringiensis dan Serratia marcescens bekerja melalui sistem pencernaan larva",
      ],
    },
    what: {
      en: "BT PLUS combines Bacillus thuringiensis and Serratia marcescens to deliver potent biological control targeting the digestive systems of Lepidopteran larvae across food crops and plantations.",
      id: "BT PLUS memadukan Bacillus thuringiensis dan Serratia marcescens untuk memberikan pengendalian hayati efektif yang merusak sistem pencernaan larva Lepidoptera pada tanaman pangan dan perkebunan.",
    },
    formulation: [
      ["Active organism", "Bacillus thuringiensis + Serratia marcescens"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "36 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Paddy", "1–2 kg/ha", "Foliar spray", "At early larval infestation"],
      ["Oil Palm", "2 kg/ha", "Foliar / fogging", "Targeting fire caterpillar"],
    ],
  },
  {
    name: "BT-MAX",
    type: "Bio Insecticide",
    activeOrganism: "Bacillus thuringiensis + Serratia marcescens",
    regNo: "RI.01010120227288",
    cardCrops: ["Oil Palm", "Paddy", "Shallot"],
    crops: ["Oil Palm", "Paddy", "Shallot", "Banana", "Corn", "Sugarcane", "Cabbage", "Edamame"],
    image: "/images/products/bt-max.jpg",
    keyBenefit: {
      en: "Targets Lepidoptera pests specifically to stop feeding activity while reducing pest resistance risk.",
      id: "Menyasar hama Lepidoptera secara spesifik untuk menghentikan aktivitas makan dan mengurangi risiko resistensi.",
    },
    benefits: {
      en: [
        "Helps control armyworm, cabbage worm, rice stem borer, and fire caterpillar",
        "Targets Lepidoptera pests specifically, safe for natural enemies and pollinators",
        "Helps reduce the risk of pest resistance",
        "Works through the larval digestive system to help stop feeding activity",
      ],
      id: [
        "Membantu mengendalikan ulat grayak, ulat kubis, penggerek padi & ulat api",
        "Menyasar hama target Lepidoptera secara spesifik, aman bagi musuh alami dan serangga penyerbuk",
        "Membantu mengurangi risiko resistensi hama",
        "Bekerja melalui sistem pencernaan larva untuk menghentikan aktivitas makan hama",
      ],
    },
    what: {
      en: "BT-MAX delivers high-potency Bacillus thuringiensis and Serratia marcescens that act on larval midguts to quickly halt feeding and control destructive caterpillar populations.",
      id: "BT-MAX menghadirkan Bacillus thuringiensis dan Serratia marcescens berpotensi tinggi yang bekerja pada saluran cerna larva untuk segera menghentikan aktivitas makan ulat hama.",
    },
    formulation: [
      ["Active organism", "Bacillus thuringiensis + Serratia marcescens"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "36 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Oil Palm", "2 kg/ha", "Mix with fertilizer / spray", "Per fertilization cycle"],
      ["Corn / Cabbage", "1 kg/ha", "Foliar spray", "At early vegetative stage"],
    ],
  },
  {
    name: "BIONEMATO",
    type: "Bio Insecticide",
    activeOrganism: "Acremonium variecolor + Cordyceps fumosorosea",
    regNo: "RI.01130120259178",
    cardCrops: ["Potato", "Tomato"],
    crops: ["Potato", "Tomato", "Cabbage"],
    image: "/images/products/bionemato.jpg",
    keyBenefit: {
      en: "Bio-nematicide containing entomopathogenic fungi to control Yellow Cyst Nematode in potato and Root-Knot Nematode in tomato.",
      id: "Bio-nematisida berbahan cendawan entomopatogen untuk mengendalikan Nematoda Sista Kuning pada kentang dan Puru Akar pada tomat.",
    },
    benefits: {
      en: [
        "Developed as a bio-nematicide to help control Yellow Cyst Nematode in potato",
        "Helps control Root-Knot Nematode in tomato",
        "Contains entomopathogenic fungi (Acremonium variecolor and Cordyceps fumosorosea) that target nematode eggs and larvae",
        "Recommended as a preventive soil drench at planting, with follow-up applications at 30, 45, and 60 days after planting",
      ],
      id: [
        "Dikembangkan sebagai bio-nematisida untuk membantu mengendalikan Nematoda Sista Kuning pada kentang",
        "Membantu mengendalikan Nematoda Puru Akar pada tomat",
        "Mengandung cendawan entomopatogen (Acremonium variecolor dan Cordyceps fumosorosea) yang menyasar telur dan larva nematoda",
        "Direkomendasikan sebagai pengocoran preventif saat tanam, dilanjutkan pada 30, 45, dan 60 hari setelah tanam",
      ],
    },
    what: {
      en: "BIONEMATO is an innovative bio-nematicide formulated with Acremonium variecolor and Cordyceps fumosorosea to parasitize and destroy plant-parasitic nematode eggs and juveniles in the root zone.",
      id: "BIONEMATO adalah bio-nematisida inovatif berbahan aktif Acremonium variecolor dan Cordyceps fumosorosea yang memparasit dan merusak telur serta larva nematoda parasit tanaman di zona perakaran.",
    },
    formulation: [
      ["Active organism", "Acremonium variecolor + Cordyceps fumosorosea"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "24 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Potato", "5 kg/ha or 5 g/L", "Soil drench", "At planting, 30, 45, 60 DAP"],
      ["Tomato", "5 g/L water", "Root zone drench", "At planting & monthly"],
    ],
  },
  {
    name: "METARIZEP",
    type: "Bio Insecticide",
    activeOrganism: "Metarhizium anisopliae + Beauveria bassiana",
    regNo: "RI.01010120175772",
    cardCrops: ["Paddy", "Chilli", "Shallot"],
    crops: ["Paddy", "Chilli", "Shallot", "Oil Palm"],
    image: "/images/products/metarizep.jpg",
    keyBenefit: {
      en: "Dual entomopathogenic fungi protecting rice from brown planthopper/rice bug and controlling thrips on chili and shallot.",
      id: "Dual entomopatogen fungi untuk melindungi padi dari wereng coklat & walang sangit serta mengendalikan thrips pada cabai dan bawang.",
    },
    benefits: {
      en: [
        "Helps protect rice from brown planthopper and rice bug damage",
        "Also helps control thrips on chili and shallot",
        "Dual entomopathogenic fungi formulation for stronger efficacy",
        "Supports pest control rotation programs",
      ],
      id: [
        "Membantu melindungi padi dari serangan wereng batang coklat & walang sangit",
        "Juga membantu mengendalikan thrips pada cabai dan bawang merah",
        "Formulasi dual entomopatogen fungi untuk efikasi maksimal",
        "Mendukung rotasi program pengendalian hama",
      ],
    },
    what: {
      en: "METARIZEP uses a dual entomopathogenic fungi formulation that infects sap-sucking and chewing insect pests through direct cuticle contact, providing broad protection with minimal resistance risk.",
      id: "METARIZEP menggunakan formulasi jamur entomopatogen ganda yang menginfeksi hama pengisap dan pengunyah melalui kontak kutikula, memberikan perlindungan luas dengan risiko resistensi minimal.",
    },
    formulation: [
      ["Active organism", "Metarhizium anisopliae + Beauveria bassiana"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "36 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Paddy", "2–4 g/L water", "Foliar spray", "At first sign of planthoppers"],
      ["Chilli / Shallot", "2–3 g/L water", "Foliar spray", "Targeting thrips preventive"],
    ],
  },
  {
    name: "ENTOMOBAC",
    type: "Bio Insecticide",
    activeOrganism: "Metarhizium anisopliae + Beauveria bassiana",
    regNo: "RI.01010120186029",
    cardCrops: ["Paddy", "Cacao", "Oil Palm"],
    crops: ["Paddy", "Cacao", "Oil Palm", "Shallot", "Cucumber", "Edamame", "Melon", "Watermelon"],
    image: "/images/products/entomobac.jpg",
    keyBenefit: {
      en: "Dual entomopathogenic fungi formulation to control brown planthopper, legume leafminer, and coffee berry borer.",
      id: "Formulasi dual entomopatogen fungi untuk mengendalikan wereng batang coklat, penggorok daun, dan penggerek buah kopi.",
    },
    benefits: {
      en: [
        "Helps control brown planthopper in rice",
        "Helps control leafminer in legume crops",
        "Helps control coffee berry borer",
        "Dual entomopathogenic fungi formulation, lower resistance risk than single-agent products",
        "Supports pest control rotation programs",
      ],
      id: [
        "Membantu mengendalikan wereng batang coklat pada padi",
        "Membantu mengendalikan penggorok daun pada tanaman kacang-kacangan",
        "Membantu mengendalikan penggerek buah kopi",
        "Formulasi dual entomopatogen fungi, minim risiko resistensi",
        "Mendukung rotasi program pengendalian hama",
      ],
    },
    what: {
      en: "ENTOMOBAC is a purely fungal dual-agent bioinsecticide combining Metarhizium anisopliae and Beauveria bassiana to control difficult plantation and horticultural insect pests.",
      id: "ENTOMOBAC adalah bioinsektisida berbahan aktif dua jamur (Metarhizium anisopliae dan Beauveria bassiana) untuk mengendalikan hama penting pada tanaman perkebunan dan hortikultura.",
    },
    formulation: [
      ["Active organism", "Metarhizium anisopliae + Beauveria bassiana"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "36 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Paddy", "2–4 g/L water", "Foliar spray", "At early pest onset"],
      ["Legumes", "2 g/L water", "Foliar spray", "Every 7–10 days"],
    ],
  },
  {
    name: "CRYSOKILL",
    type: "Bio Insecticide",
    activeOrganism: "Lecanicillium lecanii",
    regNo: "RI.01010120227511",
    cardCrops: ["Sugarcane", "Citrus", "Avocado"],
    crops: ["Sugarcane", "Citrus", "Avocado", "Dragon Fruit", "Durian"],
    image: "/images/products/crysokill.jpg",
    keyBenefit: {
      en: "Natural entomopathogenic fungi controlling sap-sucking and chewing pests, including Oteng-oteng and scale insects.",
      id: "Jamur entomopatogen alami untuk menekan hama pengisap & pengunyah, termasuk oteng-oteng dan kutu perisai.",
    },
    benefits: {
      en: [
        "Helps control sap-sucking and chewing pests, including Oteng-oteng beetle, apple scale insect, and sugarcane scale insect",
        "Contains natural entomopathogenic fungi that work through contact infection",
        "Environmentally friendly, safe for natural enemies and applicators",
        "Suited for early-stage pest management on horticultural and plantation crops",
      ],
      id: [
        "Membantu menekan hama pengisap & pengunyah, termasuk oteng-oteng, kutu perisai apel, dan kutu perisai tebu",
        "Mengandung jamur entomopatogen alami yang bekerja melalui mekanisme kontak",
        "Ramah lingkungan, aman terhadap musuh alami dan aplikator",
        "Cocok untuk pengendalian tahap awal serangan hama pada tanaman hortikultura dan perkebunan",
      ],
    },
    what: {
      en: "CRYSOKILL contains natural entomopathogenic fungi that infect sap-sucking and chewing insect pests on contact, suited for early preventive management in orchards and plantations.",
      id: "CRYSOKILL mengandung cendawan entomopatogen alami yang menginfeksi hama pengisap dan pengunyah melalui kontak langsung, cocok untuk pengendalian preventif pada tanaman buah dan perkebunan.",
    },
    formulation: [
      ["Active organism", "Lecanicillium lecanii"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "36 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Sugarcane", "2 kg/ha", "Foliar spray", "Early scale insect detection"],
      ["Citrus / Avocado", "2–3 g/L water", "Foliar spray", "Every 10–14 days"],
    ],
  },
  {
    name: "BIOKILLIA",
    type: "Bio Insecticide",
    activeOrganism: "Beauveria bassiana",
    regNo: "RI.01010120206816",
    cardCrops: ["Chilli", "Melon"],
    crops: ["Chilli", "Melon"],
    image: "/images/products/biokillia.jpg",
    keyBenefit: {
      en: "Natural pest control without inducing resistance, helping control aphids, leafhoppers, and mealybugs.",
      id: "Pengendalian alami tanpa resistensi kimia, membantu mengendalikan kutu daun, empoasca, dan kutu putih.",
    },
    benefits: {
      en: [
        "Provides natural pest control without inducing resistance, working through biological infection",
        "Environmentally friendly, safe for natural enemies and applicators",
        "A sustainable IPM solution, suited for preventive programs and rotation strategies",
        "Helps control aphids, leafhoppers, and mealybugs",
      ],
      id: [
        "Pengendalian alami tanpa menimbulkan resistensi, bekerja melalui infeksi biologis",
        "Ramah lingkungan, aman terhadap musuh alami dan aplikator",
        "Solusi IPM berkelanjutan, cocok untuk program preventif dan rotasi",
        "Membantu mengendalikan kutu daun, empoasca, dan kutu putih",
      ],
    },
    what: {
      en: "BIOKILLIA leverages biological infection to suppress homopteran pests like aphids and leafhoppers while conserving beneficial predators in integrated pest management systems.",
      id: "BIOKILLIA memanfaatkan mekanisme infeksi biologis untuk menekan populasi kutu daun dan empoasca sekaligus menjaga kelestarian predator alami dalam sistem PHT.",
    },
    formulation: [
      ["Active organism", "Beauveria bassiana"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "36 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Chilli", "2–3 g/L water", "Foliar spray", "At first appearance of aphids/thrips"],
      ["Melon", "2–3 g/L water", "Foliar spray", "Every 7–10 days"],
    ],
  },
  {
    name: "DECOPRIMA",
    type: "Bio Decomposer",
    activeOrganism: "Mixed cellulolytic & lignolytic consortium",
    regNo: "03.03.2022.1126",
    cardCrops: ["Paddy", "Banana", "Chilli"],
    crops: ["Paddy", "Banana", "Chilli", "Tomato", "Shallot", "Potato", "Avocado", "Cabbage", "Citrus", "Cucumber", "Dragon Fruit", "Durian", "Edamame", "Melon", "Patchouli", "Radish", "Watermelon"],
    image: "/images/products/decoprima.jpg",
    keyBenefit: {
      en: "Aerobic decomposer that accelerates decomposition of rice straw, crop residues, and animal manure into fertile soil.",
      id: "Dekomposer aerob yang mempercepat penguraian jerami padi, sisa panen, dan kotoran hewan menjadi tanah subur alami.",
    },
    benefits: {
      en: [
        "Helps accelerate the decomposition of rice straw, crop residues, animal manure, and similar organic materials",
        "Helps enhance beneficial microorganisms in the soil, supporting naturally fertile soil",
        "Helps control soil-borne diseases, supporting stronger, healthier root systems",
        "An aerobic decomposer in soluble powder form, easy and practical to apply",
      ],
      id: [
        "Membantu mempercepat penguraian jerami padi, sisa tanaman, kotoran hewan, dan bahan organik sejenis",
        "Meningkatkan mikroba bermanfaat di tanah, mendukung tanah subur alami",
        "Membantu mengendalikan penyakit tular tanah, mendukung akar yang lebih sehat",
        "Dekomposer aerob berbentuk tepung larut, mudah dan praktis diaplikasikan",
      ],
    },
    what: {
      en: "DECOPRIMA is a soluble aerobic decomposer consortium that rapidly breaks down cellulose and lignin in agricultural waste, preventing soil-borne disease and restoring biological activity.",
      id: "DECOPRIMA adalah konsorsium dekomposer aerob larut yang dengan cepat menguraikan selulosa dan lignin pada limbah pertanian, mencegah patogen tular tanah, dan memulihkan aktivitas biologis tanah.",
    },
    formulation: [
      ["Active organism", "Mixed cellulolytic & lignolytic consortium"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Rice straw", "1 kg/tonne", "Spray & incorporate", "Post-harvest"],
      ["Corn stover", "1 kg/tonne", "Windrow composting", "Post-harvest"],
    ],
  },
  {
    name: "TERAPALMA",
    type: "Bio Decomposer",
    activeOrganism: "Bacillus subtilis + Enterobacter sacchari + Trichoderma harzianum + Streptomyces sp.",
    regNo: "Registration number on progress",
    cardCrops: ["Oil Palm", "Sugarcane"],
    crops: ["Oil Palm", "Sugarcane"],
    image: "/images/products/terapalma.jpg",
    keyBenefit: {
      en: "Facultative aerobic decomposer producing enzymes to decompose oil palm trunk, empty fruit bunches, and bagasse.",
      id: "Mikroba decomposer fakultatif aerob untuk mendekomposisi batang kelapa sawit, tandan kosong, dan blotong tebu.",
    },
    benefits: {
      en: [
        "Facultative aerobic decomposer producing cellulolytic, lignolytic, proteolytic, and chitinolytic enzymes to help decompose oil palm trunk, empty fruit bunches, and sugarcane bagasse (blotong)",
        "Faster, more effective decomposition helps reduce potential breeding sites for Oryctes sp. larvae",
        "Supports root-zone ecosystem biocontrol, helping suppress potential Ganoderma sp. attack",
      ],
      id: [
        "Mikroba decomposer fakultatif aerob penghasil enzim selulotik, lignolitik, proteolitik, dan kitinolitik untuk mendekomposisi batang kelapa sawit, tandan kosong kelapa sawit, dan ampas tebu (blotong)",
        "Dekomposisi yang lebih cepat dan efektif membantu mengurangi potensi terciptanya sarang larva Oryctes sp.",
        "Berperan sebagai biokontrol ekosistem perakaran tanaman untuk membantu menekan potensi serangan Ganoderma sp.",
      ],
    },
    what: {
      en: "TERAPALMA delivers robust multi-enzyme producing microbes (cellulolytic, lignolytic, proteolytic, chitinolytic) to decompose bulky oil palm and sugarcane residues while reducing Oryctes breeding sites and Ganoderma pressure.",
      id: "TERAPALMA menghadirkan mikroba penghasil enzim lengkap (selulolitik, lignolitik, proteolitik, kitinolitik) untuk mendekomposisi limbah padat sawit dan tebu sekaligus menekan sarang hama kumbang tanduk Oryctes dan jamur Ganoderma.",
    },
    formulation: [
      ["Active organism", "Bacillus subtilis + Enterobacter sacchari + Trichoderma harzianum + Streptomyces sp."],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Oil Palm Trunk / EFB", "1–2 kg/tonne", "Spray on shred / windrow", "During replanting / composting"],
      ["Sugarcane Bagasse", "1 kg/tonne", "Moisten & pile", "Post-milling"],
    ],
  },
  {
    name: "DECOPALMA",
    type: "Bio Decomposer",
    activeOrganism: "Geobacillus thermocatenulatus + Trichoderma harzianum + Streptomyces thermovulgaris",
    regNo: "03.03.2023.936",
    cardCrops: ["Oil Palm"],
    crops: ["Oil Palm"],
    image: "/images/products/decopalma.jpg",
    keyBenefit: {
      en: "Antagonist against Ganoderma boninense that shortens EFB and trunk replanting decomposition from 8–10 months to 3–5 months.",
      id: "Biokontrol terhadap Ganoderma boninense yang mempersingkat waktu dekomposisi replanting sawit dari 8–10 bulan menjadi 3–5 bulan.",
    },
    benefits: {
      en: [
        "Functions as a biocontrol and antagonist against Ganoderma boninense, helping suppress its development and break down inoculum sources",
        "Helps decompose oil palm empty fruit bunches, sugarcane bagasse, and coffee waste; remains active above 50°C, suited to plantation industrial waste ponds",
        "As an aerobic decomposer, helps shorten trunk/frond/empty-bunch decomposition time from roughly 8-10 months to about 3-5 months during replanting",
        "Helps reduce reliance on repeated heavy-equipment use and supports alignment with RSPO Climate Change/GHG principles and carbon-credit schemes",
      ],
      id: [
        "Berfungsi sebagai biokontrol dan antagonis terhadap Ganoderma boninense, membantu menekan perkembangannya dan menghancurkan sumber inokulumnya",
        "Membantu mendekomposisi tandan kosong kelapa sawit, ampas tebu (blotong), dan ampas kopi; tetap aktif di atas suhu 50°C, cocok diaplikasikan pada kolam limbah industri perkebunan",
        "Sebagai dekomposer aerob, membantu mempersingkat waktu dekomposisi batang, pelepah, dan tandan kosong dari sekitar 8-10 bulan menjadi sekitar 3-5 bulan saat replanting",
        "Membantu mengurangi ketergantungan pada penggunaan alat berat secara berulang serta mendukung prinsip RSPO (Climate Change/GHG) dan skema carbon credit",
      ],
    },
    what: {
      en: "DECOPALMA features thermophilic and antagonist microbes (Geobacillus, Trichoderma, Streptomyces) that remain active above 50°C to dismantle Ganoderma inoculum sources and accelerate organic replanting decomposition.",
      id: "DECOPALMA mengandung mikroba termofilik dan antagonis (Geobacillus, Trichoderma, Streptomyces) yang tetap aktif di atas 50°C untuk menghancurkan inokulum Ganoderma serta mempercepat proses dekomposisi saat replanting.",
    },
    formulation: [
      ["Active organism", "Geobacillus thermocatenulatus + Trichoderma harzianum + Streptomyces thermovulgaris"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Empty fruit bunch", "2 kg/tonne", "Layer & moisten", "Once per pile"],
      ["Frond stacking", "1 kg/tonne", "Spray on windrow", "Per cycle"],
    ],
  },
  {
    name: "ENDOPALMA",
    type: "Bio Fertilizer",
    activeOrganism: "Endophytic PGPR Consortium",
    regNo: "03.03.2024.3",
    cardCrops: ["Oil Palm"],
    crops: ["Oil Palm"],
    image: "/images/products/endopalma.jpg",
    keyBenefit: {
      en: "Functions as PGPR to enhance oil palm seedling growth performance and boost Induced Systemic Resistance (ISR).",
      id: "Berfungsi sebagai PGPR untuk meningkatkan pertumbuhan bibit kelapa sawit dan meningkatkan Induced Systemic Resistance (ISR).",
    },
    benefits: {
      en: [
        "Functions as PGPR (Plant Growth Promoting Rhizobacteria) to help enhance oil palm seedling growth performance",
        "Contains endophytic microbes that help boost Induced Systemic Resistance (ISR), supporting plant resilience against disease",
        "Helps improve microbial population density to support nutrient uptake",
        "Acts as biocontrol to help suppress potential attacks from Ganoderma sp. and Fusarium sp.",
      ],
      id: [
        "Berfungsi sebagai PGPR (Plant Growth Promoting Rhizobacteria) untuk membantu meningkatkan performa pertumbuhan bibit kelapa sawit",
        "Mengandung mikroba endofit yang membantu meningkatkan Induced Systemic Resistance (ISR), mendukung ketahanan tanaman terhadap serangan penyakit",
        "Membantu meningkatkan kepadatan populasi mikroba untuk mendukung optimalisasi penyerapan hara",
        "Berperan sebagai biokontrol untuk membantu menekan potensi serangan Ganoderma sp. dan Fusarium sp.",
      ],
    },
    what: {
      en: "ENDOPALMA introduces endophytic bacteria into oil palm seedling vascular systems, stimulating root elongation, nutrient uptake, and systemic resistance against soil pathogens like Ganoderma and Fusarium.",
      id: "ENDOPALMA memasukkan bakteri endofit ke dalam sistem perakaran bibit kelapa sawit, merangsang penyerapan hara dan memperkuat ketahanan sistemik terhadap serangan jamur Ganoderma dan Fusarium.",
    },
    formulation: [
      ["Active organism", "Endophytic PGPR Consortium"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Oil Palm Seedlings", "25–50 g/polybag", "Soil apply / drench", "During nursery stage"],
      ["Mature Palm", "50 g/tree", "Soil application", "Per fertilization cycle"],
    ],
  },
  {
    name: "ORIZAPLUS",
    type: "Bio Fertilizer",
    activeOrganism: "Rice-specific Endophytic PGPR Consortium",
    regNo: "03.03.2022.813",
    cardCrops: ["Paddy"],
    crops: ["Paddy"],
    image: "/images/products/orizaplus.jpg",
    keyBenefit: {
      en: "PGPR consortium that helps increase tiller number and grain fill in rice while suppressing bacterial leaf blight.",
      id: "Konsorsium PGPR untuk meningkatkan jumlah anakan dan pengisian bulir padi serta menekan penyakit hawar daun.",
    },
    benefits: {
      en: [
        "PGPR consortium that helps increase tiller number and grain fill in rice",
        "Helps suppress Kresek (bacterial leaf blight) symptoms",
        "May offer a potential yield increase of around 10-20%",
        "Formulated with endophytic microbes specific to rice, supporting stronger root development and nutrient uptake",
      ],
      id: [
        "Konsorsium PGPR yang membantu meningkatkan jumlah anakan dan pengisian bulir padi",
        "Membantu menekan gejala kresek & hawar daun",
        "Berpotensi memberikan peningkatan hasil sekitar 10-20%",
        "Diformulasikan dengan mikroba endofitik spesifik pada tanaman padi, mendukung pertumbuhan akar yang lebih kuat dan penyerapan nutrisi",
      ],
    },
    what: {
      en: "ORIZAPLUS is a specialized rice endophytic biofertilizer that stimulates productive tillering, enhances nutrient uptake, and reduces bacterial leaf blight symptoms, supporting yield increases of 10–20%.",
      id: "ORIZAPLUS adalah pupuk hayati endofit khusus padi yang merangsang anakan produktif, meningkatkan serapan nutrisi, serta menekan penyakit kresek/hawar daun dengan potensi peningkatan hasil 10–20%.",
    },
    formulation: [
      ["Active organism", "Rice-specific Endophytic PGPR Consortium"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Carrier-based powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Paddy Seed Treatment", "25 g/kg seed", "Soak / coat", "Pre-germination"],
      ["Paddy Field", "2 kg/ha", "Soil broadcast / spray", "At land prep & tillering"],
    ],
  },
  {
    name: "TERRABIO",
    type: "Bio Fertilizer",
    activeOrganism: "Nitrogen-fixing & Phosphate-solubilizing Microbes",
    regNo: "03.03.2026.295",
    cardCrops: ["Corn", "Edamame", "Avocado"],
    crops: ["Corn", "Edamame", "Avocado", "Dragon Fruit", "Durian", "Patchouli"],
    image: "/images/products/terrabio.jpg",
    keyBenefit: {
      en: "Contains N-fixing and P-solubilizing microbes that strengthen root development and improve synthetic fertilizer efficiency.",
      id: "Mengandung mikroba penambat N dan pelarut P untuk memperkuat perakaran dan mengefisienkan penggunaan pupuk sintetis.",
    },
    benefits: {
      en: [
        "Contains nitrogen-fixing and phosphate-solubilizing microbes",
        "Helps strengthen root development and supports higher production potential",
        "Helps improve the efficiency of synthetic fertilizer use",
        "Suited to legume and corn crops, supporting nodule formation and nitrogen fixation in legumes",
      ],
      id: [
        "Mengandung mikroba penambat N dan pelarut P",
        "Mendukung penguatan akar dan peningkatan produksi",
        "Meningkatkan efisiensi penggunaan pupuk sintetis",
        "Cocok untuk tanaman kacang-kacangan dan jagung, mendukung viabilitas dan pembentukan bintil akar pada kacang-kacangan",
      ],
    },
    what: {
      en: "TERRABIO supplies beneficial nitrogen-fixing and phosphate-solubilizing soil microbes that enhance root nodulation in legumes and improve fertilizer efficiency across corn and horticulture.",
      id: "TERRABIO menyediakan mikroba penambat nitrogen dan pelarut fosfat tanah yang mendukung pembentukan bintil akar pada tanaman kacang-kacangan dan mengefisienkan pupuk anorganik pada jagung dan hortikultura.",
    },
    formulation: [
      ["Active organism", "Nitrogen-fixing & Phosphate-solubilizing Microbes"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Carrier-based powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Corn / Legumes", "2 kg/ha", "Soil / in-furrow", "At planting"],
      ["Fruit trees", "50 g/tree", "Root drench", "Every 3 months"],
    ],
  },
  {
    name: "BACTOHORTI",
    type: "Bio Fertilizer",
    activeOrganism: "Bacillus velezensis + Pseudomonas fluorescens + Trichoderma viride",
    regNo: "03.03.2022.1135",
    cardCrops: ["Citrus", "Chilli", "Tomato"],
    crops: ["Citrus", "Chilli", "Tomato", "Potato", "Shallot"],
    image: "/images/products/bactohorti.jpg",
    keyBenefit: {
      en: "Helps improve vegetative growth, boost plant immunity, and make fertilizer uptake up to 30% more efficient.",
      id: "Meningkatkan pertumbuhan vegetatif, imunitas tanaman, dan efisiensi serapan pupuk hingga 30%.",
    },
    benefits: {
      en: [
        "Helps improve vegetative growth and fruit/tuber production",
        "Helps boost plant immunity/preventive resistance against disease",
        "Helps make fertilizer uptake more efficient, with potential to reduce synthetic fertilizer use by up to 30%",
        "Helps restore soil fertility and beneficial soil microbe populations",
        "Contains nitrogen-fixing and phosphate-solubilizing endophytic bacteria plus Trichoderma",
      ],
      id: [
        "Meningkatkan pertumbuhan vegetatif dan produksi buah/umbi",
        "Meningkatkan imunitas/preventif tanaman terhadap penyakit",
        "Mengefektifkan serapan pupuk oleh tanaman, berpotensi mengurangi dosis pupuk anorganik hingga 30%",
        "Mengembalikan tingkat kesuburan dan populasi mikroba tanah",
        "Mengandung bakteri endofit penambat nitrogen dan pelarut fosfat, serta cendawan Trichoderma",
      ],
    },
    what: {
      en: "BACTOHORTI combines endophytic bacteria (Bacillus velezensis, Pseudomonas fluorescens) with Trichoderma viride to restore soil fertility, prime systemic immunity, and increase fertilizer absorption efficiency by up to 30%.",
      id: "BACTOHORTI menggabungkan bakteri endofit (Bacillus velezensis, Pseudomonas fluorescens) dan jamur Trichoderma viride untuk memulihkan kesuburan tanah, meningkatkan kekebalan tanaman, serta mengoptimalkan serapan pupuk hingga 30%.",
    },
    formulation: [
      ["Active organism", "Bacillus velezensis + Pseudomonas fluorescens + Trichoderma viride"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Carrier-based powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Citrus / Horticulture", "2.5–5 g/L water", "Soil drench / spray", "Every 2–3 weeks"],
    ],
  },
  {
    name: "HUMATOP",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "High Fulvic Acid + Potassium (Leonardite Complex)",
    regNo: "04.03.2022.911",
    cardCrops: ["Paddy", "Shallot", "Chilli"],
    crops: ["Paddy", "Shallot", "Chilli", "Tomato", "Potato", "Corn", "Cacao", "Avocado", "Cabbage", "Citrus", "Cucumber", "Dragon Fruit", "Durian", "Edamame", "Melon", "Patchouli", "Radish", "Watermelon", "Oil Palm"],
    image: "/images/products/humatop.jpg",
    keyBenefit: {
      en: "High fulvic and potassium combination supporting photosynthesis translocation, optimal grain filling, and fruit/tuber size.",
      id: "Kombinasi fulvat tinggi dan kalium untuk memperlancar translokasi fotosintesis, pengisian bulir padi, dan pembesaran umbi/buah.",
    },
    benefits: {
      en: [
        "Helps improve translocation of photosynthesis products to fruit and tubers, supporting more optimal, even filling",
        "Acts as an easily absorbed energy source and metabolic activator, supporting fruit and tuber tissue formation",
        "Helps make micro and macro nutrients easier for plants to absorb, especially during the critical filling stage",
        "Helps increase grain fill in rice and fruit/tuber size, as well as seed/pod count",
        "Natural essential nutrients absorbable directly through foliar application",
      ],
      id: [
        "Kombinasi fulvat tinggi dan kalium membantu memperlancar translokasi hasil fotosintesis ke buah dan umbi, sehingga pengisian lebih optimal dan seragam",
        "Berperan sebagai sumber energi siap serap dan aktivator metabolisme, mendukung pembentukan jaringan buah dan umbi secara maksimal",
        "Membantu unsur hara mikro dan makro lebih mudah diserap tanaman, terutama pada fase kritis pengisian hasil",
        "Meningkatkan pengisian bulir padi, besar buah dan umbi, serta jumlah biji/polong",
        "Nutrisi esensial alami yang dapat diserap langsung melalui daun (Foliar Application)",
      ],
    },
    what: {
      en: "HUMATOP delivers concentrated fulvic acid and potassium designed for rapid foliar uptake, accelerating carbohydrate translocation during critical generative filling stages.",
      id: "HUMATOP menghadirkan asam fulvat pekat dan kalium yang diformulasikan untuk serapan daun cepat, mempercepat translokasi karbohidrat pada fase generatif pengisian buah dan umbi.",
    },
    formulation: [
      ["Active content", "High Fulvic Acid + Potassium + Organic Nutrients"],
      ["Source", "Leonardite complex"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "36 months"],
    ],
    application: [
      ["Paddy", "1–2 g/L water", "Foliar spray", "At generative filling stage (45 & 65 DAP)"],
      ["Horticulture / Fruit", "1–2 g/L water", "Foliar spray", "Every 7–10 days during fruit sizing"],
    ],
  },
  {
    name: "KALSIKA",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Potassium (K) & Silica (Si) Complex",
    regNo: "01.03.2024.111",
    cardCrops: ["Shallot", "Paddy", "Chilli"],
    crops: ["Shallot", "Paddy", "Chilli", "Tomato", "Potato", "Corn", "Sugarcane", "Avocado", "Cucumber", "Dragon Fruit", "Radish", "Oil Palm"],
    image: "/images/products/kalsika.jpg",
    keyBenefit: {
      en: "Potassium and Silica combination that thickens cell walls, prevents lodging in rice/shallot, and reduces flower/fruit drop.",
      id: "Kombinasi Kalium dan Silika untuk memperkokoh dinding sel, mencegah rebah tanaman, dan mengurangi kerontokan bunga/buah.",
    },
    benefits: {
      en: [
        "On shallot, helps produce upright, stronger leaves that are less prone to lodging",
        "Helps thicken rice stems, supporting resistance to lodging from wind, rain, or grain-fill weight",
        "Helps strengthen flower and young-fruit tissue, reducing drop and supporting fruit formation",
        "Helps improve tolerance to mechanical stress and weather changes",
        "Potassium (K) and Silica (Si) combination that supports plant cell-wall thickening",
      ],
      id: [
        "Pada tanaman bawang, aplikasi Kalsika membantu menghasilkan daun yang tumbuh lebih tegak, kuat, dan tidak mudah rebah",
        "Meningkatkan ketebalan batang tanaman padi sehingga lebih tahan terhadap rebah akibat angin, hujan, maupun beban malai saat pengisian bulir",
        "Memperkuat jaringan bunga dan bakal buah sehingga mengurangi kerontokan dan mendukung pembentukan buah yang maksimal",
        "Membantu tanaman lebih tahan terhadap stres mekanis dan perubahan cuaca",
        "Kombinasi Kalium (K) dan Silika (Si) berperan memperkokoh jaringan tanaman melalui penebalan dinding sel",
      ],
    },
    what: {
      en: "KALSIKA fortifies plant structural tissues with bioavailable Potassium and Silica, strengthening stem rigidity against weather-induced lodging and reducing blossom drop.",
      id: "KALSIKA memperkokoh struktur jaringan tanaman dengan kalium dan silika yang mudah diserap, meningkatkan ketahanan batang terhadap angin dan hujan serta mencegah kerontokan bunga.",
    },
    formulation: [
      ["Active content", "Potassium (K) + Silica (Si) Mineral Complex"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "36 months"],
    ],
    application: [
      ["Paddy / Shallot", "1–2 g/L water", "Foliar spray", "Vegetative & generative stages"],
      ["Chilli / Fruit", "2 g/L water", "Foliar spray", "Pre-flowering & fruit sizing"],
    ],
  },
  {
    name: "BOOSBLOOM",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Organic Seaweed Extract (Cytokinin & Gibberellin) + Micronutrients",
    regNo: "02.03.2022.895",
    cardCrops: ["Chilli", "Tomato", "Shallot"],
    crops: ["Chilli", "Tomato", "Shallot", "Potato", "Cacao", "Cabbage", "Citrus", "Cucumber", "Edamame", "Melon", "Patchouli", "Radish", "Watermelon"],
    image: "/images/products/boosbloom.jpg",
    keyBenefit: {
      en: "Natural seaweed extract with cytokinin and gibberellin hormones to stimulate branching, uniform flowering, and fruit formation.",
      id: "Ekstrak rumput laut dengan sitokinin dan giberelin alami untuk merangsang tunas, keseragaman bunga, dan pembentukan bakal buah.",
    },
    benefits: {
      en: [
        "Cytokinin combination (kinetin & zeatin) helps stimulate cell division and new shoot formation for more balanced branching",
        "Nitrogen, gibberellin, and cytokinin work together to support leaf elongation and wider, more photosynthetically active leaves",
        "Boron, zinc, and potassium help support flower and young-fruit formation for more even output",
        "Helps thicken leaf cell walls, supporting resistance to fungal disease pressure",
        "Contains natural cytokinin and gibberellin growth hormones from seaweed extract",
      ],
      id: [
        "Kombinasi sitokinin (kinetin & zeatin) membantu merangsang pembelahan sel dan pembentukan tunas baru, sehingga tanaman memiliki cabang lebih banyak dan pertumbuhan lebih seimbang",
        "Nitrogen, giberelin, dan sitokinin bekerja sinergis mendorong pemanjangan sel dan pembentukan jaringan daun, menghasilkan daun yang lebih lebar, hijau, dan aktif berfotosintesis",
        "Peran boron (B), zinc (Zn), dan kalium (K) membantu proses diferensiasi jaringan generatif, sehingga jumlah bunga dan bakal buah meningkat dan lebih seragam",
        "Membantu mempertebal dinding sel daun sehingga dapat menekan tekanan penyakit akibat cendawan",
        "Hormon pertumbuhan sitokinin dan giberelin alami dari ekstrak rumput laut",
      ],
    },
    what: {
      en: "BOOSBLOOM pairs natural seaweed phytohormones (cytokinins, gibberellins) with essential micronutrients (B, Zn, K) to stimulate balanced shoot branching, leaf expansion, and prolific fruit set.",
      id: "BOOSBLOOM memadukan fitohormon alami ekstrak rumput laut (sitokinin, giberelin) dengan unsur mikro esensial (B, Zn, K) untuk memacu percabangan tunas, pembesaran daun, dan pembentukan bakal buah.",
    },
    formulation: [
      ["Active content", "Ascophyllum nodosum Seaweed Extract + Cytokinin, Gibberellin, B, Zn, K"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "36 months"],
    ],
    application: [
      ["Horticultural crops", "1–2 g/L water", "Foliar spray", "Early vegetative & flowering stage"],
    ],
  },
  {
    name: "KALIMAGSU",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "K₂O >21% + S >16% + Mg >6% + Cl <3%",
    regNo: "01.03.2023.629",
    cardCrops: ["Chilli", "Tomato", "Shallot"],
    crops: ["Chilli", "Tomato", "Shallot", "Cucumber", "Melon", "Watermelon"],
    image: "/images/products/kalimagsu.jpg",
    keyBenefit: {
      en: "99% soluble neutral mineral nutrition (K-Mg-S) that improves photosynthesis and harvest quality without soil salt buildup.",
      id: "Nutrisi mineral larut 99% ber-pH netral untuk meningkatkan efisiensi fotosintesis dan kualitas panen tanpa degradasi tanah.",
    },
    benefits: {
      en: [
        "99% solubility and neutral pH (7), suitable for drenching and fertigation applications",
        "Helps improve photosynthesis efficiency, supporting more energy available for yield formation",
        "Sulfur supports the formation of essential amino acids and enzymes, contributing to result quality and stress tolerance",
        "Low chloride content and neutral pH make it suitable for routine use without added risk of soil degradation or salt buildup",
        "Helps improve harvest quality (fruit/tuber taste and color)",
      ],
      id: [
        "Kelarutan bahan 99% dan pH 7 (netral) sehingga aman untuk aplikasi pengocoran maupun fertigasi",
        "Meningkatkan efisiensi fotosintesis, sehingga energi tanaman untuk pembentukan hasil lebih maksimal",
        "Sulfur berperan dalam pembentukan asam amino esensial dan enzim, yang berdampak pada kualitas hasil dan ketahanan tanaman terhadap stres",
        "Dengan klorida rendah dan pH netral, pupuk ini aman diaplikasikan secara rutin tanpa meningkatkan risiko degradasi tanah atau akumulasi garam",
        "Meningkatkan kualitas hasil panen (rasa dan warna buah/umbi)",
      ],
    },
    what: {
      en: "KALIMAGSU provides a high-purity (99% soluble, pH 7) mineral source of potassium, magnesium, and sulfur to fuel chlorophyll synthesis and enzyme activity without chloride toxicity or soil salinization.",
      id: "KALIMAGSU menyediakan sumber mineral murni (larut 99%, pH 7) kalium, magnesium, dan sulfur untuk fotosintesis dan sintesis enzim tanaman tanpa risiko akumulasi garam atau toksisitas klorida.",
    },
    formulation: [
      ["Active content", "K₂O >21%, S >16%, Mg >6%, Cl <3%"],
      ["Formulation type", "Soluble powder (pH 7)"],
      ["Shelf life", "36 months"],
    ],
    application: [
      ["Shallot / Chilli / Melon", "2–3 g/L water", "Foliar / fertigation", "During generative filling"],
    ],
  },
  {
    name: "BIOSTICK",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Ekstrak Bawang Putih (Allium sativum) 25% + Adjuvant 75%",
    regNo: "",
    cardCrops: ["Chilli", "Tomato", "Shallot"],
    crops: ["Oil Palm", "Chilli", "Tomato", "Potato", "Banana", "Sugarcane", "Cacao", "Avocado", "Citrus", "Cucumber", "Dragon Fruit", "Durian", "Melon", "Watermelon"],
    image: "/images/products/biostick.jpg",
    keyBenefit: {
      en: "Adjuvant and spreader-sticker with garlic extract providing natural repellent action and micronutrients (Mn, Zn) against thrips and mites.",
      id: "Perekat & adjuvan dengan ekstrak bawang putih sebagai penolak hama alami serta diperkaya mikro Mn dan Zn untuk mengendalikan thrips dan tungau.",
    },
    benefits: {
      en: [
        "An adjuvant/spreader-sticker containing garlic extract, which also functions as a natural repellent",
        "Contains the micronutrients Mn and Zn, which can help support leaf greenness",
        "Helps control thrips and mites",
        "Helps improve the effectiveness of biopesticide applications when tank-mixed",
      ],
      id: [
        "Perekat/adjuvan yang mengandung ekstrak bawang putih, yang juga berfungsi sebagai repellent (penolak hama)",
        "Mengandung unsur mikro Mn dan Zn yang dapat membantu meningkatkan zat hijau daun",
        "Mampu membantu mengendalikan thrips dan tungau/mites",
        "Membantu meningkatkan efektivitas aplikasi biopestisida saat dicampur dalam larutan semprot",
      ],
    },
    what: {
      en: "BIOSTICK acts as an advanced bio-adjuvant and spreader formulated with natural garlic extract and trace micronutrients (Mn, Zn), improving spray droplet adherence while deterring thrips and mites.",
      id: "BIOSTICK berfungsi sebagai perekat-perata semprot yang diformulasikan dengan ekstrak bawang putih alami dan unsur mikro (Mn, Zn) untuk meningkatkan efektivitas semprotan dan mengusir thrips serta tungau.",
    },
    formulation: [
      ["Active content", "Ekstrak Bawang Putih 25% + Adjuvant 75% + Mn, Zn"],
      ["Formulation type", "Liquid adjuvant"],
      ["Shelf life", "36 months"],
    ],
    application: [
      ["All crops (tank mix)", "0.5 ml / L water", "Spray mix addition", "With every pesticide/fertilizer application"],
    ],
  },
  {
    name: "AMINOTOP",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "L-Amino Acids + High Fulvic Acid + Ca + K",
    regNo: "02.03.2023.373",
    cardCrops: ["Paddy", "Chilli", "Tomato"],
    crops: ["Paddy", "Chilli", "Tomato", "Potato", "Cucumber"],
    image: "/images/products/aminotop.jpg",
    keyBenefit: {
      en: "Generative booster based on amino acids and high fulvic acid to maximize flowering, fruit set, and uniform grain/fruit fill.",
      id: "Booster generatif berbasis asam amino & asam fulvat tinggi untuk memaksimalkan pembungaan, fruit set, dan pengisian hasil.",
    },
    benefits: {
      en: [
        "A generative booster based on amino acids and high fulvic acid content, developed to help maximize flowering and fruit formation",
        "Helps improve fruit set and result filling, for fuller, more uniform grain and fruit",
        "Contains Ca, K, and amino acids to help strengthen plant tissue and reduce grain/fruit drop",
        "High fulvic content helps speed up nutrient uptake and supports stress tolerance",
      ],
      id: [
        "Booster generatif berbasis asam amino & asam fulvat tinggi untuk membantu memaksimalkan pembungaan dan pembentukan buah",
        "Membantu meningkatkan fruit set & pengisian hasil sehingga bulir lebih penuh dan buah lebih optimal serta seragam",
        "Mengandung Ca, K, dan asam amino untuk membantu memperkuat jaringan tanaman dan mengurangi kerontokan bulir/buah",
        "Diperkaya fulvat tinggi untuk membantu mempercepat serapan hara dan mendukung ketahanan terhadap stres",
      ],
    },
    what: {
      en: "AMINOTOP is a potent generative bio-stimulant rich in L-amino acids, fulvic acid, Calcium, and Potassium, designed to accelerate nutrient assimilation and prevent abortion of blossoms and young fruit.",
      id: "AMINOTOP adalah biostimulan generatif berbahan asam amino esensial, asam fulvat, Kalsium, dan Kalium untuk mempercepat serapan hara serta mencegah kerontokan bunga dan bakal buah.",
    },
    formulation: [
      ["Active content", "L-Amino Acids + Fulvic Acid + Ca + K"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "36 months"],
    ],
    application: [
      ["Paddy / Horticulture", "1–2 g/L water", "Foliar spray", "Pre-flowering & grain/fruit fill"],
    ],
  },
  {
    name: "NUTRI BK+",
    type: "Bio Fertilizer",
    activeOrganism: "Water-soluble Micronutrient / Nutrition Complex",
    regNo: "01.03.2023.1531",
    cardCrops: ["Oil Palm", "Cacao", "Avocado"],
    crops: ["Oil Palm", "Cacao", "Avocado", "Citrus", "Dragon Fruit", "Durian"],
    image: "/images/products/nutribk.jpg",
    keyBenefit: {
      en: "Powder-form nutrition product formulated for spray or soil-drench application across immature and mature plant phases.",
      id: "Produk nutrisi berbentuk tepung yang diformulasikan untuk aplikasi semprot atau pengocoran pada fase TBM dan TM.",
    },
    benefits: {
      en: [
        "A powder-form nutrition product formulated for spray or soil-drench application across immature-plant (TBM) and mature-plant (TM) phases",
        "Can be mixed with synthetic fertilizers or pesticides as part of a routine application program",
        "(Specific composition and crop benefit claims are not yet available)",
      ],
      id: [
        "Produk nutrisi berbentuk tepung yang diformulasikan untuk aplikasi semprot atau pengocoran pada fase TBM (Tanaman Belum Menghasilkan) dan TM (Tanaman Menghasilkan)",
        "Dapat dicampur dengan pupuk atau pestisida sintetis sebagai bagian dari program aplikasi rutin",
        "(Klaim komposisi dan manfaat spesifik per komoditas belum tersedia)",
      ],
    },
    what: {
      en: "NUTRI BK+ is a versatile powder nutrition supplement formulated for foliar spray or root drenching across both immature (TBM) and productive (TM) crop growth phases.",
      id: "NUTRI BK+ adalah suplemen nutrisi berbentuk tepung untuk aplikasi semprot daun atau kocor akar pada fase belum menghasilkan (TBM) maupun fase menghasilkan (TM).",
    },
    formulation: [
      ["Active content", "Water-soluble micronutrient and plant nutrition complex"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "36 months"],
    ],
    application: [
      ["Plantations (TBM & TM)", "2–5 kg/ha", "Foliar / soil drench", "Per routine schedule"],
    ],
  },
  {
    name: "BACTOPLUS",
    type: "Bio Fertilizer",
    activeOrganism: "Endophytic Bacillus + Pseudomonas sp.",
    regNo: "03.03.2023.417",
    cardCrops: [],
    crops: [],
    image: "/images/products/bactoplus.jpg",
    keyBenefit: {
      en: "Endophytic biofertilizer for increasing yield, immunity against White Root Fungus (JAP), and soil fertility.",
      id: "Pupuk hayati majemuk endofit untuk meningkatkan produksi getah/buah, imunitas terhadap Jamur Akar Putih (JAP), dan kesuburan tanah.",
    },
    benefits: {
      en: [
        "Helps enhance latex and fruit yield in plantation crops",
        "Boosts systemic immunity against White Root Fungus (JAP)",
        "Restores soil biological fertility and root health",
      ],
      id: [
        "Meningkatkan produksi getah dan buah pada tanaman perkebunan",
        "Meningkatkan imunitas terhadap Jamur Akar Putih (JAP)",
        "Memulihkan kesuburan biologi tanah dan kesehatan perakaran",
      ],
    },
    what: {
      en: "BACTOPLUS provides endophytic bacterial protection and nutrition, boosting resistance to root rot diseases like JAP.",
      id: "BACTOPLUS menyediakan nutrisi dan perlindungan bakteri endofit untuk meningkatkan ketahanan terhadap penyakit akar seperti JAP.",
    },
    formulation: [
      ["Active organism", "Endophytic Bacillus + Pseudomonas sp."],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Carrier-based powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Plantation crops", "50 g/tree", "Soil application", "Per fertilization cycle"],
    ],
  },
  {
    name: "PRIMADECO",
    type: "Bio Fungicide",
    activeOrganism: "Trichoderma harzianum + Streptomyces sp.",
    regNo: "",
    cardCrops: [],
    crops: [],
    image: "/images/products/primadeco.jpg",
    keyBenefit: {
      en: "Helps crops resist soil-borne diseases while building up beneficial soil microbial populations.",
      id: "Membantu tanaman menahan penyakit tular tanah sekaligus meningkatkan populasi mikroba bermanfaat tanah.",
    },
    benefits: {
      en: [
        "Protects against soil-borne root rots and wilts",
        "Enhances beneficial antagonist microbial colonies in the soil",
        "Supports vigorous root system expansion",
      ],
      id: [
        "Melindungi dari penyakit tular tanah dan busuk akar",
        "Meningkatkan koloni mikroba antagonis bermanfaat di dalam tanah",
        "Mendukung ekspansi sistem perakaran yang kuat",
      ],
    },
    what: {
      en: "PRIMADECO supplies active Trichoderma harzianum and Streptomyces to suppress soil-borne pathogens.",
      id: "PRIMADECO menghadirkan Trichoderma harzianum dan Streptomyces aktif untuk menekan patogen tular tanah.",
    },
    formulation: [
      ["Active organism", "Trichoderma harzianum + Streptomyces sp."],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["General crops", "2–5 kg/ha", "Soil broadcast", "At land prep"],
    ],
  },
  {
    name: "MICROBLAS",
    type: "Bio Fungicide",
    activeOrganism: "Streptomyces sp. + Trichoderma virens",
    regNo: "",
    cardCrops: ["Paddy"],
    crops: ["Paddy"],
    image: "/images/products/microblas.jpg",
    keyBenefit: {
      en: "Built to protect rice from blast disease that can spread quickly across fields.",
      id: "Diformulasikan untuk melindungi padi dari penyakit blas yang dapat menyebar cepat.",
    },
    benefits: {
      en: [
        "Targeted biological defense against Pyricularia oryzae (Rice Blast)",
        "Strengthens leaf sheath resistance against blast lesions",
        "Compatible with sustainable rice management programs",
      ],
      id: [
        "Pertahanan hayati tertarget melawan Pyricularia oryzae (Blas Padi)",
        "Memperkuat ketahanan pelepah daun terhadap bercak blas",
        "Cocok untuk program budidaya padi ramah lingkungan",
      ],
    },
    what: {
      en: "MICROBLAS provides biological antagonist microbes to prevent and manage blast disease outbreaks in wetland rice.",
      id: "MICROBLAS menyediakan mikroba antagonis biologis untuk mencegah dan mengendalikan serangan penyakit blas pada padi sawah.",
    },
    formulation: [
      ["Active organism", "Streptomyces sp. + Trichoderma virens"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Paddy", "2.5–5 g/L water", "Foliar spray", "At tillering & booting"],
    ],
  },
  {
    name: "BIOFUNGAL",
    type: "Bio Fungicide",
    activeOrganism: "Trichoderma viride + Gliocladium sp.",
    regNo: "",
    cardCrops: ["Banana", "Cacao", "Durian"],
    crops: ["Banana", "Cacao", "Durian"],
    image: "/images/products/biofungal.jpg",
    keyBenefit: {
      en: "Biofungicide containing antagonist fungi to control Phytophthora leaf rot, Alternaria, and powdery mildew.",
      id: "Bio fungisida tepung larut (WP) berbahan aktif cendawan antagonis untuk mengendalikan busuk daun Phytophthora, Alternaria, dan embun tepung.",
    },
    benefits: {
      en: [
        "Controls Phytophthora leaf and fruit rot on fruit trees",
        "Suppresses Alternaria spot and powdery mildew",
        "Leaves zero chemical residue on harvest",
      ],
      id: [
        "Mengendalikan busuk daun dan buah Phytophthora pada tanaman buah",
        "Menekan bercak Alternaria dan embun tepung",
        "Tidak meninggalkan residu kimia pada hasil panen",
      ],
    },
    what: {
      en: "BIOFUNGAL leverages Trichoderma viride and Gliocladium to protect fruit orchards and plantation crops against destructive foliar fungal diseases.",
      id: "BIOFUNGAL memanfaatkan Trichoderma viride dan Gliocladium untuk melindungi kebun buah dan tanaman perkebunan dari penyakit jamur daun.",
    },
    formulation: [
      ["Active organism", "Trichoderma viride + Gliocladium sp."],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Banana / Cacao / Durian", "5 g/L water", "Foliar spray", "Every 10–14 days"],
    ],
  },
  {
    name: "VERTIPLUS",
    type: "Bio Insecticide",
    activeOrganism: "Verticillium lecanii",
    regNo: "",
    cardCrops: ["Chilli", "Tomato"],
    crops: ["Chilli", "Tomato"],
    image: "/images/products/vertiplus.jpg",
    keyBenefit: {
      en: "Keeps aphids, whitefly, and thrips under control, performing exceptionally in humid growing conditions.",
      id: "Mengendalikan kutu daun, kutu kebul, dan thrips, bekerja sangat optimal pada kondisi kelembapan tinggi.",
    },
    benefits: {
      en: [
        "Controls aphids, whiteflies, and thrips via fungal infection",
        "High efficacy in greenhouse and humid tropical field conditions",
        "Safe for natural predators and pollinators",
      ],
      id: [
        "Mengendalikan kutu daun, kutu kebul, dan thrips lewat infeksi jamur",
        "Efikasi tinggi di lahan terbuka maupun greenhouse",
        "Aman bagi predator alami dan penyerbuk",
      ],
    },
    what: {
      en: "VERTIPLUS contains Verticillium lecanii to manage whiteflies and aphids through entomopathogenic fungal parasitism.",
      id: "VERTIPLUS mengandung Verticillium lecanii untuk mengendalikan kutu kebul dan kutu daun melalui parasitisme jamur entomopatogen.",
    },
    formulation: [
      ["Active organism", "Verticillium lecanii"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP)"],
      ["Shelf life", "36 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Chilli / Tomato", "2–3 g/L water", "Foliar spray", "At early pest onset"],
    ],
  },
  {
    name: "MICROBLOOM",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Chelated Micronutrient (Fe, Zn, Mn, B, Cu, Mo) + Amino Acids",
    regNo: "",
    cardCrops: ["Paddy", "Chilli", "Tomato"],
    crops: ["Paddy", "Chilli", "Tomato", "Shallot", "Cucumber", "Melon", "Watermelon"],
    image: "/images/products/microbloom.jpg",
    keyBenefit: {
      en: "Delivers balanced micronutrient and amino acid support for enhanced vigor, flowering, and fruit set.",
      id: "Menyediakan kombinasi mikronutrien kelat dan asam amino seimbang untuk meningkatkan vigor, pembungaan, dan fruit set.",
    },
    benefits: {
      en: [
        "Balanced chelated micronutrients (Fe, Zn, Mn, B, Cu, Mo) for rapid cellular uptake",
        "Enriched with amino acids to stimulate metabolic activity",
        "Prevents micronutrient deficiencies during peak vegetative and flowering phases",
      ],
      id: [
        "Mikronutrien kelat seimbang (Fe, Zn, Mn, B, Cu, Mo) untuk serapan seluler cepat",
        "Diperkaya asam amino untuk memicu metabolisme tanaman",
        "Mencegah defisiensi unsur mikro pada fase vegetatif dan pembungaan",
      ],
    },
    what: {
      en: "MICROBLOOM provides essential chelated trace minerals and amino acids for peak photosynthetic activity and fruit setting.",
      id: "MICROBLOOM menyediakan unsur mikro kelat esensial dan asam amino untuk memaksimalkan aktivitas fotosintesis dan pembentukan buah.",
    },
    formulation: [
      ["Active content", "Chelated Fe, Zn, Mn, B, Cu, Mo + Amino Acids"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "36 months"],
    ],
    application: [
      ["Paddy / Horticulture", "1–2 g/L water", "Foliar spray", "Every 10–14 days"],
    ],
  },
];

export const ALL_PRODUCTS = ALL_PRODUCTS_DATA.map((r) => {
  const m = TYPE_META[r.type] || TYPE_META["Bio Fertilizer"];
  const form = r.formulation || r.form || [
    [r.type.includes("Stimulant") ? "Active content" : "Active organism", r.activeOrganism || m.form[0][1]],
    ...m.form.slice(1),
  ];
  return {
    slug: slugify(r.name),
    name: r.name,
    type: r.type,
    activeOrganism: r.activeOrganism || m.form[0][1],
    categorySlug: m.slug,
    cardCrops: r.cardCrops || [],
    crops: (r.crops || []).map(normCrop),
    regNo: r.regNo || "",
    image: r.image || `/images/products/${slugify(r.name)}.jpg`,
    keyBenefit: typeof r.keyBenefit === "object" ? r.keyBenefit : { en: r.benefit, id: r.benefit },
    benefits: r.benefits || null,
    what: typeof r.what === "object" ? r.what : (r.what ? { en: r.what, id: r.what } : (typeof r.keyBenefit === "object" ? r.keyBenefit : { en: r.benefit, id: r.benefit })),
    formulation: form,
    application: r.application || r.app || m.app,
    trials: r.trials || [["Field validation (Indonesia)", "PAT trial network", "1 season", "Positive response vs untreated"]],
  };
});

export const PRODUCTS = ALL_PRODUCTS.slice(0, 6);
export const EXTRA_PRODUCTS = ALL_PRODUCTS.slice(6);

export const getProduct = (slug) => ALL_PRODUCTS.find((p) => p.slug === slug);
export const getRelated = (product) =>
  ALL_PRODUCTS.filter((p) => p.slug !== product.slug && p.categorySlug === product.categorySlug)
    .filter((p) => p.crops.length === 0 || p.crops.some((c) => product.crops.includes(c)) || product.crops.length === 0)
    .slice(0, 3);

export const SCIENCE_STAGES = [
  {
    n: "01",
    title: { en: "Bioprospecting", id: "Bioprospeksi" },
    body: {
      en: "50+ field expeditions across 6 Indonesian islands, collecting microbial material from soil, volcanic hot springs, plant tissue, pest specimens, and active disease outbreak sites.",
      id: "50+ ekspedisi lapangan di 6 pulau Indonesia, mengumpulkan material mikroba dari tanah, mata air panas vulkanik, jaringan tanaman, spesimen hama, dan lokasi wabah penyakit aktif.",
    },
    image: "/images/science/science-stage-1.jpg",
  },
  {
    n: "02",
    title: { en: "Isolate & Characterization", id: "Isolasi & Karakterisasi" },
    body: {
      en: "Each sample is cultured and molecularly identified (PCR-verified), building a proprietary library of 120+ characterized isolates.",
      id: "Setiap sampel dikultur dan diidentifikasi secara molekuler (terverifikasi PCR), membangun pustaka proprietary 120+ isolat terkarakterisasi.",
    },
    image: "/images/science/science-stage-2.jpg",
  },
  {
    n: "03",
    title: { en: "ANHYDRIOM™ Stabilization", id: "Stabilisasi ANHYDRIOM™" },
    body: {
      en: "Most beneficial microbes are metabolically active, moisture-dependent, and prone to losing potency within weeks unless kept refrigerated. ANHYDRIOM™ takes a different approach: by removing the moisture microbes need to stay active, it induces a dormant, biologically stable state that halts this decline. Many bacteria and fungi can enter a dormant, desiccation-tolerant state when moisture is removed, remaining biologically stable for extended periods before reactivating once rehydrated. ANHYDRIOM™ applies this principle at production scale, stabilizing our strains into a dry, dormant powder that holds its potency for 3+ years at room temperature.",
      id: "Sebagian besar mikroba bermanfaat memerlukan kelembapan agar tetap aktif secara metabolik. Namun, kondisi aktif ini membuatnya rentan, efikasinya bisa menurun seiring lama masa penyimpanan apabila tidak disimpan dalam suhu dingin. ANHYDRIOM™ menggunakan pendekatan berbeda: dengan menghilangkan kelembapan yang membuat mikroba tetap aktif, teknologi ini menginduksi kondisi dorman yang stabil secara biologis pada mikroba, sehingga penurunan efikasi tersebut terhenti. Banyak bakteri dan jamur memang secara alami mampu memasuki kondisi dorman yang tahan kekeringan saat kelembapan dihilangkan — tetap stabil secara biologis dalam waktu lama, lalu aktif kembali begitu terhidrasi. ANHYDRIOM™ menerapkan prinsip ini dalam skala produksi, menstabilkan mikroba kami dalam bubuk kering yang mempertahankan efikasinya hingga 3+ tahun pada suhu ruang.",
    },
    image: "/images/science/science-stage-3.jpg",
  },
  {
    n: "04",
    title: { en: "Product Formulation", id: "Formulasi Produk" },
    body: {
      en: "Strains combined into multi-strain formulations — broader spectrum, resilience built in, wider coverage, synergistic mechanisms.",
      id: "Strain digabung menjadi formulasi multi-strain — spektrum lebih luas, ketahanan bawaan, cakupan lebih lebar, mekanisme sinergis.",
    },
    image: "/images/science/science-stage-4.jpg",
  },
  {
    n: "05",
    title: { en: "Efficacy Validation", id: "Validasi Efikasi" },
    body: {
      en: "Every formulation is field-tested against real pest, disease, and soil conditions before commercialisation.",
      id: "Setiap formulasi diuji lapangan melawan kondisi hama, penyakit, dan tanah nyata sebelum dikomersialkan.",
    },
    image: "/images/science/science-stage-5.jpg",
  },
  {
    n: "06",
    title: { en: "Deploy & Scale", id: "Penyebaran & Skala" },
    body: {
      en: "Reaches 15,000+ farmer partners across 16+ provinces, with in-house field agent support and exports underway across South East Asia.",
      id: "Menjangkau 15.000+ mitra petani di 16+ provinsi, dengan dukungan petugas lapangan in-house dan ekspor berjalan di Asia Tenggara.",
    },
    image: "/images/science/science-stage-6.jpg",
  },
];

export const TIMELINE = [
  { year: "2008", en: "First entry into agri-tech, supporting rubber tree farmers", id: "Langkah pertama di agri-tech, mendukung petani karet" },
  { year: "2011", en: "Pivoted to a full microbial biological solutions platform", id: "Bertransformasi menjadi platform solusi biologis berbasis mikroba" },
  { year: "2013", en: "Organic certification obtained", id: "Sertifikasi organik diperoleh" },
  { year: "2016", en: "Production scale-up", id: "Peningkatan skala produksi" },
  { year: "2018", en: "ISO 9001:2015 certified", id: "Tersertifikasi ISO 9001:2015" },
  { year: "2020", en: "Molecular-level strain identification achieved", id: "Identifikasi strain tingkat molekuler tercapai" },
  { year: "2023", en: "Nation-wide distribution", id: "Distribusi ke seluruh Indonesia" },
  { year: "2026", en: "Entering markets across Southeast Asia", id: "Memasuki pasar di Asia Tenggara" },
];

export const FOOTPRINT_STATS = [
  { value: 16, suffix: "+", key: "provincesServed" },
  { value: 50, suffix: "+", key: "plantationsServed" },
  { value: 15000, suffix: "+", key: "farmerPartners" },
];

export const SEED_TESTIMONIALS = [
  {
    name: "Pak Ibrahim",
    role: { en: "Rice Farmer · Bekasi", id: "Petani Padi · Bekasi" },
    crop: "Padi",
    province: "Bekasi",
    image: "/images/testimonial-ibrahim.jpg",
    quote: {
      en: "At 30 days, my rice started turning red and got hit by stem borers. But after using Humatop, the leaves were green and healthy again in just 3 days. By 50 to 60 days, I followed up with Kalimagsu spraying, and the grains filled out fast and full. I used to get only 5 tons; this season I'm confident I can reach 7 to 8 tons per hectare.",
      id: "Awalnya di umur 30 hari, tanaman padi saya sempat memerah dan terserang sundep. Tapi setelah memakai Humatop, hanya dalam 3 hari warna daun kembali hijau segar. Memasuki umur 50–60 hari, saya lanjutkan penyemprotan Kalimagsu dan hasilnya bulir padi keluar cepat serta terisi sangat bagus. Dari yang sebelumnya cuma dapat 5 ton, musim ini saya optimis bisa capai 7–8 ton per hektar."
    }
  },
  {
    name: "Pak Rahmat",
    role: { en: "Paprika Farmer · West Bandung", id: "Petani Paprika · Bandung Barat" },
    crop: "Paprika",
    province: "Bandung Barat",
    image: "/images/testimonial-rahmat.jpg",
    quote: {
      en: "Before, my paprika took 90 to 100 days from planting to harvest. After using HumatPro, I could harvest faster, in 75 to 80 days. The results were very satisfying, so now I trust every stage of my crop care to Prima Agro Tech products.",
      id: "Sebelumnya, masa tanam paprika saya dari awal hingga panen memakan waktu 90 hingga 100 hari. Setelah menggunakan HumatPro, saya bisa panen lebih cepat di angka 75 sampai 80 hari. Hasilnya alhamdulillah sangat memuaskan, sehingga sekarang saya mempercayakan seluruh tahapan pemeliharaan tanaman ke produk-produk PT Prima Agro Tech."
    }
  },
  {
    name: "Pak Usep",
    role: { en: "Chilli Farmer · Garut", id: "Petani Cabai · Garut" },
    crop: "Cabai",
    province: "Garut",
    image: "/images/testimonial-usep.jpg",
    quote: {
      en: "Since using PAT products, my plants have grown well. The leaves are green and fewer plants are affected by wilt. PAT products are affordable, easy to apply, and the results show quickly. Now it's your turn, fellow farmers, to give it a try.",
      id: "Alhamdulillah setelah menggunakan produk PAT, pertumbuhan tanaman bagus dilihat dari daun yang hijau dan tanaman yang terkena layu berkurang. Produk PAT harga terjangkau, mudah diaplikasikan, hasilnya cepat terlihat di tanaman. Sekarang giliran sobat primatani untuk menggunakannya."
    }
  },
  {
    name: "Pak Atep",
    role: { en: "Tomato Farmer · Cianjur", id: "Petani Tomat · Cianjur" },
    crop: "Tomat",
    province: "Cianjur",
    image: "/images/testimonial-atep.jpg",
    quote: {
      en: "Growing tomatoes, I used to deal with a lot of problems: waterlogged roots, curled leaves, low fruit yield, and compacted soil. The first product I used was Humatop. My soil pH used to be 5.5; after using Humatop, it rose to 6.5.",
      id: "Selama saya menanam tomat, keluhan saya banyak, seperti lodoh, keriting daun, buah kurang banyak, dan tanah kurang gembur. Produk pertama kali yang saya gunakan Humatop. Dari dulunya pH tanah lima koma lima, setelah saya menggunakan Humatop menjadi enam koma lima."
    }
  }
];

export const FIELD_VIDEOS = [
  {
    title: "Cerita Tani — Paprika, Cisarua",
    crop: "Paprika",
    location: "Cisarua",
    thumb: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    url: "https://www.youtube.com/watch?v=NITS6bAB8pg&t=11s",
    embedId: "NITS6bAB8pg",
  },
  {
    title: "Cerita Tani — Padi, Karangsambung",
    crop: "Padi",
    location: "Karangsambung",
    thumb: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    url: "https://www.youtube.com/watch?v=tj89dLIYVLg&t=38s",
    embedId: "tj89dLIYVLg",
  },
  {
    title: "Cerita Tani — Toko Siar Pusaka Tani, Karawang",
    crop: "Toko Pertanian / Padi",
    location: "Karawang",
    thumb: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    url: "https://www.youtube.com/watch?v=UY6IsAgmBv4&t=1s",
    embedId: "UY6IsAgmBv4",
  },
];
