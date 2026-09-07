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

export const CROPS = [
  "Paddy", "Corn", "Chilli", "Tomato", "Potato", "Shallot", "Oil Palm", "Sugarcane",
  "Banana", "Durian", "Cacao", "Citrus", "Avocado", "Cabbage", "Cucumber", "Dragon Fruit",
  "Edamame", "Melon", "Patchouli", "Radish", "Watermelon"
];

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
    activeOrganism: "Pseudomonas fluorescens + Bacillus subtilis + Bacillus velezensis",
    regNo: "RI.01060120258873",
    cardCrops: ["Banana","Chilli","Tomato"],
    crops: ["Banana","Chilli","Tomato","Potato","Melon"],
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
    formulation: {
      en: [
        ["Active organism", "Pseudomonas fluorescens + Bacillus subtilis + Bacillus velezensis"],
        ["Concentration", "≥ 1 × 10⁸ CFU/g"],
        ["Formulation type", "Wettable powder (WP)"],
        ["Shelf life", "60 months (ANHYDRIOM™)"],
      ],
      id: [
        ["Organisme aktif", "Pseudomonas fluorescens + Bacillus subtilis + Bacillus velezensis"],
        ["Konsentrasi", "≥ 1 × 10⁸ CFU/g"],
        ["Jenis formulasi", "Tepung yang Dapat Disuspensikan (WP)"],
        ["Masa simpan", "60 bulan (ANHYDRIOM™)"],
      ],
    },
    application: {
      en: [
        ["Chilli / Tomato", "400 g/Ha/app", "Root drench / soil spray", "At planting & every 10–14 days"],
        ["Potato / Melon", "400 g/Ha/app", "Root drench", "Pre-planting & every 10–14 days"],
      ],
      id: [
        ["Cabai / Tomat", "400 g/Ha/app", "Kocor akar / semprot tanah", "Saat tanam & setiap 10–14 hari"],
        ["Kentang / Melon", "400 g/Ha/app", "Kocor akar", "Pra-tanam & setiap 10–14 hari"],
      ],
    },
  },
  {
    name: "BIOTRACOL",
    type: "Bio Fungicide",
    activeOrganism: "Trichoderma sp. + Streptomyces sp.",
    regNo: "RI.01020120186156",
    cardCrops: ["Banana","Chilli","Tomato"],
    crops: ["Banana","Chilli","Tomato","Potato","Cacao","Avocado","Cabbage","Citrus","Durian"],
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
    formulation: {
      en: [
        ["Active organism", "Trichoderma sp. + Streptomyces sp."],
        ["Concentration", "≥ 1 × 106 CFU/g"],
        ["Formulation type", "Wettable powder (WP)"],
        ["Shelf life", "60 months (ANHYDRIOM™)"],
      ],
      id: [
        ["Organisme aktif", "Trichoderma sp. + Streptomyces sp."],
        ["Konsentrasi", "≥ 1 × 106 CFU/g"],
        ["Jenis formulasi", "Tepung yang Dapat Disuspensikan (WP)"],
        ["Masa simpan", "60 bulan (ANHYDRIOM™)"],
      ],
    },
    application: {
      en: [
        ["Banana", "0,5 - 1 g/L water", "Foliar Spray", "Every 7 – 14 days"],
        ["Durian", "0,5 - 1 g/L water", "Foliar spray / Soil drench", "Monthly"],
        ["Cacao", "0,5 - 1 g/L water", "Foliar spray / Soil drench", "Every 14 days"],
      ],
      id: [
        ["Pisang", "0,5 – 1 g/L air", "Semprot daun", "Setiap 7–14 hari"],
        ["Durian", "0,5 – 1 g/L air", "Semprot daun / Kocor tanah", "Bulanan"],
        ["Kakao", "0,5 – 1 g/L air", "Semprot daun / Kocor tanah", "Setiap 14 hari"],
      ],
    },
  },
  {
    name: "BT PLUS",
    type: "Bio Insecticide",
    activeOrganism: "Bacillus thuringiensis + Serratia marcescens",
    regNo: "RI.01010120175741",
    cardCrops: ["Oil Palm","Paddy","Banana"],
    crops: ["Oil Palm","Paddy","Banana","Corn","Sugarcane"],
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
    formulation: {
      en: [
        ["Active organism", "Bacillus thuringiensis + Serratia marcescens"],
        ["Concentration", "≥ 1 × 10⁸ CFU/g"],
        ["Formulation type", "Wettable powder (WP)"],
        ["Shelf life", "60 months (ANHYDRIOM™)"],
      ],
      id: [
        ["Organisme aktif", "Bacillus thuringiensis + Serratia marcescens"],
        ["Konsentrasi", "≥ 1 × 10⁸ CFU/g"],
        ["Jenis formulasi", "Tepung yang Dapat Disuspensikan (WP)"],
        ["Masa simpan", "60 bulan (ANHYDRIOM™)"],
      ],
    },
    application: {
      en: [
        ["Paddy", "300 g/Ha/app", "Mix Fertilizer (Direct Spread)", "1st and 2nd fertilizing"],
        ["Oil Palm", "250 – 500 g/Ha/app", "Foliar Spray", "Approaching the treshold"],
      ],
      id: [
        ["Padi", "300 g/Ha/app", "Campur pupuk (sebar langsung)", "Pemupukan pertama dan kedua"],
        ["Kelapa Sawit", "250 – 500 g/Ha/app", "Semprot daun", "Mendekati ambang batas (threshold)"],
      ],
    },
  },
  {
    name: "BT MAX",
    type: "Bio Insecticide",
    activeOrganism: "Bacillus thuringiensis + Serratia marcescens",
    regNo: "RI.01010120227288",
    cardCrops: ["Oil Palm","Paddy","Shallot"],
    crops: ["Oil Palm","Paddy","Shallot","Banana","Corn","Sugarcane","Cabbage","Edamame"],
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
    formulation: {
      en: [
        ["Active organism", "Bacillus thuringiensis + Serratia marcescens"],
        ["Concentration", "≥ 1 × 107 CFU/g"],
        ["Formulation type", "Wettable powder (WP)"],
        ["Shelf life", "60 months (ANHYDRIOM™)"],
      ],
      id: [
        ["Organisme aktif", "Bacillus thuringiensis + Serratia marcescens"],
        ["Konsentrasi", "≥ 1 × 107 CFU/g"],
        ["Jenis formulasi", "Tepung yang Dapat Disuspensikan (WP)"],
        ["Masa simpan", "60 bulan (ANHYDRIOM™)"],
      ],
    },
    application: {
      en: [
        ["Oil Palm", "250 – 500 g/Ha/App", "Mix with fertilizer / spray", "Approaching the treshold"],
        ["Corn / Cabbage", "1 g/L", "Foliar spray", "Once a week"],
      ],
      id: [
        ["Kelapa Sawit", "250 – 500 g/Ha/App", "Campur dengan pupuk / semprot", "Mendekati ambang batas (threshold)"],
        ["Jagung / Kubis", "1 g/L", "Semprot daun", "Sekali seminggu"],
      ],
    },
  },
  {
    name: "METARIZEP",
    type: "Bio Insecticide",
    activeOrganism: "Metarhizium anisopliae + Beauveria bassiana",
    regNo: "RI.01010120175772",
    cardCrops: ["Paddy","Chilli","Shallot"],
    crops: ["Paddy","Chilli","Shallot","Oil Palm"],
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
    formulation: {
      en: [
        ["Active organism", "Metarhizium anisopliae + Beauveria bassiana"],
        ["Concentration", "≥ 1 × 106 CFU/g"],
        ["Formulation type", "Wettable powder (WP)"],
        ["Shelf life", "60 months (ANHYDRIOM™)"],
      ],
      id: [
        ["Organisme aktif", "Metarhizium anisopliae + Beauveria bassiana"],
        ["Konsentrasi", "≥ 1 × 106 CFU/g"],
        ["Jenis formulasi", "Tepung yang Dapat Disuspensikan (WP)"],
        ["Masa simpan", "60 bulan (ANHYDRIOM™)"],
      ],
    },
    application: {
      en: [
        ["Paddy", "1 - 2 g/L water", "Foliar spray", "At first sign of planthoppers"],
        ["Chilli / Melon", "1 - 2 g/L water", "Foliar spray", "1 – 2 times a week"],
      ],
      id: [
        ["Padi", "1 – 2 g/L air", "Semprot daun", "Saat tanda awal wereng muncul"],
        ["Cabai / Melon", "1 – 2 g/L air", "Semprot daun", "1–2 kali seminggu"],
      ],
    },
  },
  {
    name: "ENTOMOBAC",
    type: "Bio Insecticide",
    activeOrganism: "Metarhizium anisopliae + Beauveria bassiana",
    regNo: "RI.01010120186029",
    cardCrops: ["Paddy","Cacao","Oil Palm"],
    crops: ["Paddy","Cacao","Oil Palm","Shallot","Cucumber","Edamame","Melon","Watermelon"],
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
    formulation: {
      en: [
        ["Active organism", "Metarhizium anisopliae + Beauveria bassiana"],
        ["Concentration", "≥ 1 × 106 CFU/g"],
        ["Formulation type", "Wettable powder (WP)"],
        ["Shelf life", "60 months (ANHYDRIOM™)"],
      ],
      id: [
        ["Organisme aktif", "Metarhizium anisopliae + Beauveria bassiana"],
        ["Konsentrasi", "≥ 1 × 106 CFU/g"],
        ["Jenis formulasi", "Tepung yang Dapat Disuspensikan (WP)"],
        ["Masa simpan", "60 bulan (ANHYDRIOM™)"],
      ],
    },
    application: {
      en: [
        ["Paddy", "1 - 2 g/L water", "Foliar spray", "At first sign of planthoppers"],
        ["Chilli / Melon", "1 - 2 g/L water", "Foliar spray", "1 – 2 times a week"],
      ],
      id: [
        ["Padi", "1 – 2 g/L air", "Semprot daun", "Saat tanda awal wereng muncul"],
        ["Cabai / Melon", "1 – 2 g/L air", "Semprot daun", "1–2 kali seminggu"],
      ],
    },
  },
  {
    name: "CRYSOKILL",
    type: "Bio Insecticide",
    activeOrganism: "Metarhizium robertsii + Cordyceps fumosorosea",
    regNo: "RI.01010120227511",
    cardCrops: ["Sugarcane","Citrus","Avocado"],
    crops: ["Sugarcane","Citrus","Avocado","Dragon Fruit","Durian"],
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
    formulation: {
      en: [
        ["Active organism", "Metarhizium robertsii + Cordyceps fumosorosea"],
        ["Concentration", "≥ 1 × 106 CFU/g"],
        ["Formulation type", "Wettable powder (WP)"],
        ["Shelf life", "60 months (ANHYDRIOM™)"],
      ],
      id: [
        ["Organisme aktif", "Metarhizium robertsii + Cordyceps fumosorosea"],
        ["Konsentrasi", "≥ 1 × 106 CFU/g"],
        ["Jenis formulasi", "Tepung yang Dapat Disuspensikan (WP)"],
        ["Masa simpan", "60 bulan (ANHYDRIOM™)"],
      ],
    },
    application: {
      en: [
        ["Sugarcane", "200 g/Ha/app", "Foliar spray", "Early scale insect detection"],
        ["Citrus", "1 g/L", "Foliar spray", "Every 10–14 days"],
        ["Dragon Fruit", "1 g/L", "Foliar spray", "Every 10–14 days"],
      ],
      id: [
        ["Tebu", "200 g/Ha/app", "Semprot daun", "Deteksi dini serangan kutu perisai"],
        ["Jeruk", "1 g/L", "Semprot daun", "Setiap 10–14 hari"],
        ["Buah Naga", "1 g/L", "Semprot daun", "Setiap 10–14 hari"],
      ],
    },
  },
  {
    name: "BIOKILLIA",
    type: "Bio Insecticide",
    activeOrganism: "Verticillium lecanii + Isaria fumosorosea",
    regNo: "RI.01010120206816",
    cardCrops: ["Chilli","Melon"],
    crops: ["Chilli","Melon"],
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
    formulation: {
      en: [
        ["Active organism", "Verticillium lecanii + Isaria fumosorosea"],
        ["Concentration", "≥ 1 × 106 CFU/g"],
        ["Formulation type", "Wettable powder (WP)"],
        ["Shelf life", "60 months (ANHYDRIOM™)"],
      ],
      id: [
        ["Organisme aktif", "Verticillium lecanii + Isaria fumosorosea"],
        ["Konsentrasi", "≥ 1 × 106 CFU/g"],
        ["Jenis formulasi", "Tepung yang Dapat Disuspensikan (WP)"],
        ["Masa simpan", "60 bulan (ANHYDRIOM™)"],
      ],
    },
    application: {
      en: [
        ["Chilli", "1 - 2 g/L water", "Foliar spray", "At first appearance of aphids/thrips"],
        ["Melon", "1 - 2 g/L water", "Foliar spray", "Every 3 - 7 days"],
      ],
      id: [
        ["Cabai", "1 – 2 g/L air", "Semprot daun", "Saat kutu daun/thrips pertama muncul"],
        ["Melon", "1 – 2 g/L air", "Semprot daun", "Setiap 3 – 7 hari"],
      ],
    },
  },
  {
    name: "DECOPRIMA",
    type: "Bio Decomposer",
    activeOrganism: "Streptomyces thermovulgaris + Geobacillus thermocatenulatus + Trichoderma harzianum",
    regNo: "03.03.2022.1126",
    cardCrops: ["Paddy","Banana","Chilli"],
    crops: ["Paddy","Banana","Chilli","Tomato","Shallot","Potato","Avocado","Cabbage","Citrus","Cucumber","Dragon Fruit","Durian","Edamame","Melon","Patchouli","Radish","Watermelon"],
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
    formulation: {
      en: [
        ["Active organism", "Streptomyces thermovulgaris + Geobacillus thermocatenulatus + Trichoderma harzianum"],
        ["Concentration", "≥ 1 × 105 CFU/g"],
        ["Formulation type", "Powder"],
        ["Shelf life", "60 months"],
      ],
      id: [
        ["Organisme aktif", "Streptomyces thermovulgaris + Geobacillus thermocatenulatus + Trichoderma harzianum"],
        ["Konsentrasi", "≥ 1 × 105 CFU/g"],
        ["Jenis formulasi", "Tepung"],
        ["Masa simpan", "60 bulan"],
      ],
    },
    application: {
      en: [
        ["Rice straw composting", "1 kg/tonne", "Spray & incorporate", "Post-harvest"],
        ["Soil Preparation", "400 g/Ha", "Soil Spray", "After land preparation"],
        ["Fusarium Control", "400 g/Ha/App", "Soil Drench", "Every 14 – 30 days"],
      ],
      id: [
        ["Pengomposan Jerami Padi", "1 kg/ton", "Semprot & campur", "Pasca panen"],
        ["Persiapan Tanah", "400 g/Ha", "Semprot Tanah", "Setelah persiapan lahan"],
        ["Kontrol Fusarium", "400 g/Ha/App", "Kocor Tanah", "Setiap 14 – 30 hari"],
      ],
    },
  },
  {
    name: "TERAPALMA",
    type: "Bio Decomposer",
    activeOrganism: "Bacillus subtilis + Enterobacter sacchari + Trichoderma harzianum + Streptomyces sp.",
    regNo: {"en":"Registration number on progress.","id":"Nomor registrasi dalam proses."},
    cardCrops: ["Oil Palm","Sugarcane"],
    crops: ["Oil Palm","Sugarcane"],
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
    formulation: {
      en: [
        ["Active organism", "Bacillus subtilis + Enterobacter sacchari + Trichoderma harzianum + Streptomyces sp."],
        ["Concentration", "≥ 1 × 105 CFU/g"],
        ["Formulation type", "Powder"],
        ["Shelf life", "60 months"],
      ],
      id: [
        ["Organisme aktif", "Bacillus subtilis + Enterobacter sacchari + Trichoderma harzianum + Streptomyces sp."],
        ["Konsentrasi", "≥ 1 × 105 CFU/g"],
        ["Jenis formulasi", "Tepung"],
        ["Masa simpan", "60 bulan"],
      ],
    },
    application: {
      en: [
        ["Oil Palm Trunk Composting", "1 kg/Ha", "Spray on shred / windrow", "2 – 4 weeks after chipping"],
        ["EFB Composting", "1 kg/ 5 tonne", "Spray", "1 – 2 weeks after production"],
        ["Ganoderma Prevention", "500 g/Ha/app", "Soil & Trunk Spray (mix with Endopalma)", "2 times a year"],
      ],
      id: [
        ["Pengomposan Batang Kelapa Sawit", "1 kg/Ha", "Semprot pada hasil cacahan / windrow", "2 – 4 minggu setelah pencacahan"],
        ["Pengomposan EFB", "1 kg / 5 ton", "Semprot", "1 – 2 minggu setelah produksi"],
        ["Pencegahan Ganoderma", "500 g/Ha/app", "Semprot Tanah & Batang (dicampur dengan Endopalma)", "2 kali setahun"],
      ],
    },
  },
  {
    name: "DECOPALMA",
    type: "Bio Decomposer",
    activeOrganism: "Bacillus subtilis + Enterobacter sacchari + Trichoderma harzianum + Streptomyces sp.",
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
    formulation: {
      en: [
        ["Active organism", "Bacillus subtilis + Enterobacter sacchari + Trichoderma harzianum + Streptomyces sp."],
        ["Concentration", "≥ 1 × 105 CFU/g"],
        ["Formulation type", "Powder"],
        ["Shelf life", "60 months"],
      ],
      id: [
        ["Organisme aktif", "Bacillus subtilis + Enterobacter sacchari + Trichoderma harzianum + Streptomyces sp."],
        ["Konsentrasi", "≥ 1 × 105 CFU/g"],
        ["Jenis formulasi", "Tepung"],
        ["Masa simpan", "60 bulan"],
      ],
    },
    application: {
      en: [
        ["Oil Palm Trunk Composting", "1 kg/Ha", "Spray on shred / windrow", "2 – 4 weeks after chipping"],
        ["EFB Composting", "1 kg/ 5 tonne", "Spray", "1 – 2 weeks after production"],
        ["Ganoderma Prevention", "500 g/Ha/app", "Soil & Trunk Spray (mix with Endopalma)", "2 times a year"],
      ],
      id: [
        ["Pengomposan Batang Kelapa Sawit", "1 kg/Ha", "Semprot pada hasil cacahan / windrow", "2 – 4 minggu setelah pencacahan"],
        ["Pengomposan EFB", "1 kg / 5 ton", "Semprot", "1 – 2 minggu setelah produksi"],
        ["Pencegahan Ganoderma", "500 g/Ha/app", "Semprot Tanah & Batang (dicampur dengan Endopalma)", "2 kali setahun"],
      ],
    },
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
    formulation: {
      en: [
        ["Active organism", "Endophytic PGPR Consortium"],
        ["Concentration", "≥ 1 × 105 CFU/g"],
        ["Formulation type", "Soluble powder"],
        ["Shelf life", "60 months"],
      ],
      id: [
        ["Organisme aktif", "Konsorsium PGPR Endofit"],
        ["Konsentrasi", "≥ 1 × 105 CFU/g"],
        ["Jenis formulasi", "Tepung larut"],
        ["Masa simpan", "60 bulan"],
      ],
    },
    application: {
      en: [
        ["Oil Palm Seedlings", "2,5 g/polybag/app", "Soil apply / drench", "During nursery stage"],
        ["Ganoderma Prevention", "500 g/Ha/app", "Soil & Trunks spray (mix with Decopalma/Terapalma)", "2 times a year"],
      ],
      id: [
        ["Bibit Kelapa Sawit", "2,5 g/polybag/app", "Aplikasi tanah / kocor", "Saat fase pembibitan"],
        ["Pencegahan Ganoderma", "500 g/Ha/app", "Semprot Tanah & Batang (dicampur dengan Decopalma/Terapalma)", "2 kali setahun"],
      ],
    },
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
    formulation: {
      en: [
        ["Active organism", "Rice-specific Endophytic PGPR Consortium"],
        ["Concentration", "≥ 1 × 107 CFU/g"],
        ["Formulation type", "Carrier-based powder"],
        ["Shelf life", "60 months"],
      ],
      id: [
        ["Organisme aktif", "Konsorsium PGPR Endofit Spesifik Padi"],
        ["Konsentrasi", "≥ 1 × 107 CFU/g"],
        ["Jenis formulasi", "Tepung berbahan pembawa"],
        ["Masa simpan", "60 bulan"],
      ],
    },
    application: {
      en: [
        ["Paddy Seed Treatment", "100 g / 25 kg seed", "Soak / coat", "Pre-germination"],
        ["Paddy Field", "400 g / Ha / App", "Spray", "2 times a season (vegetative phase)"],
      ],
      id: [
        ["Perlakuan Benih Padi", "100 g / 25 kg benih", "Rendam / lapisi", "Pra-perkecambahan"],
        ["Lahan Padi", "400 g/Ha/App", "Semprot", "2 kali per musim (fase vegetatif)"],
      ],
    },
  },
  {
    name: "TERRABIO",
    type: "Bio Fertilizer",
    activeOrganism: "Nitrogen-fixing & Phosphate-solubilizing Microbes",
    regNo: "03.03.2021.472",
    cardCrops: ["Corn","Edamame","Avocado"],
    crops: ["Corn","Edamame","Avocado","Dragon Fruit","Durian","Patchouli"],
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
    formulation: {
      en: [
        ["Active organism", "Nitrogen-fixing & Phosphate-solubilizing Microbes"],
        ["Concentration", "≥ 1 × 105 CFU/g"],
        ["Formulation type", "Carrier-based powder"],
        ["Shelf life", "60 months"],
      ],
      id: [
        ["Organisme aktif", "Mikroba Penambat Nitrogen & Pelarut Fosfat"],
        ["Konsentrasi", "≥ 1 × 105 CFU/g"],
        ["Jenis formulasi", "Tepung berbahan pembawa"],
        ["Masa simpan", "60 bulan"],
      ],
    },
    application: {
      en: [
        ["Seed Treatment", "200 gram / 25 kg seed", "Spray / Coat", "Pre-germination"],
        ["Plant Growth", "400 gram / Ha / App", "Soil Spray", "2 times a season"],
        ["Fruit trees", "400 gram / Ha / App", "Soil Spray / Drench", "Every 3 months"],
      ],
      id: [
        ["Perlakuan Benih", "200 gram / 25 kg benih", "Semprot / Lapisi", "Pra-perkecambahan"],
        ["Pertumbuhan Tanaman", "400 gram/Ha/App", "Semprot Tanah", "2 kali per musim"],
        ["Tanaman Buah", "400 gram/Ha/App", "Semprot Tanah / Kocor", "Setiap 3 bulan"],
      ],
    },
  },
  {
    name: "HUMATOP",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Leonardite Humic Acid Complex (>65%) + K₂O (10.30%)",
    regNo: "04.03.2022.911 (100g/1kg pupuk organik); 04.03.2023.308 (100g/1kg pembenah tanah senyawa humat); 04.02.2023.738 (1 liter)",
    cardCrops: ["Paddy","Shallot","Chilli"],
    crops: ["Paddy","Shallot","Chilli","Tomato","Potato","Corn","Cacao","Avocado","Cabbage","Citrus","Cucumber","Dragon Fruit","Durian","Edamame","Melon","Patchouli","Radish","Watermelon","Oil Palm"],
    image: "/images/products/humatop.jpg",
    keyBenefit: {
      en: "A leonardite-based organic soil conditioner that raises and stabilizes soil pH, creating a healthier root-zone environment for beneficial microbes.",
      id: "Pembenah tanah organik berbahan leonardite yang meningkatkan dan menstabilkan pH tanah, menciptakan area perakaran yang sehat bagi mikroba bermanfaat.",
    },
    benefits: {
      en: [
        "Made from leonardite mineral, the highest-quality source of humic acid",
        "Helps raise and stabilize soil pH by binding excess Fe (iron) and Al (aluminium)",
        "Maximizes the absorption of macro and micro nutrients by plant root systems",
        "Formulated with potassium enrichment to enhance nutrient mobility and uptake",
        "Creates a healthy root-zone environment ideal for beneficial microbes (Trichoderma, Pseudomonas, Bacillus, etc.)",
      ],
      id: [
        "Terbuat dari mineral leonardite sebagai sumber asam humat dengan kualitas terbaik",
        "Mampu meningkatkan pH tanah secara stabil dan konsisten melalui mekanisme pengikatan Fe (besi) dan Al (Alumunium) berlebih",
        "Memaksimalkan penyerapan unsur hara makro dan mikro oleh perakaran tanaman",
        "Diformulasikan dengan pengkayaan Kalium untuk meningkatkan mobilitas hara",
        "Menciptakan area perakaran yang sehat dan ideal bagi mikroba bermanfaat (Trichoderma, Pseudomonas, Bacillus, dsb.)",
      ],
    },
    formulation: {
      en: [
        ["Active content", "C-organik 31.10% + K₂O 10.30% + Ca 1.70% + SiO2 3.40% + Zn 70 ppm + Senyawa Humat >65% (pH 8.8)"],
        ["Source", "Leonardite complex"],
        ["Formulation type", "Soluble powder"],
        ["Shelf life", "36 months"],
      ],
      id: [
        ["Kandungan aktif", "C-organik 31,10% + K₂O 10,30% + Ca 1,70% + SiO2 3,40% + Zn 70 ppm + Senyawa Humat >65% (pH 8,8)"],
        ["Sumber", "Kompleks leonardite"],
        ["Jenis formulasi", "Tepung larut"],
        ["Masa simpan", "36 bulan"],
      ],
    },
    application: {
      en: [
        ["Paddy & Corn", "2 – 4 kg / Ha", "Direct Cast", "1st and 2nd fertilizing"],
        ["Horticulture", "1 – 2 kg / Ha / app", "Soil Drench", "Every 30 days"],
        ["Palm Oil", "3,5 – 7 kg / Ha / app", "Directs Cast", "2 times a year"],
      ],
      id: [
        ["Padi & Jagung", "2 – 4 kg/Ha", "Tabur Langsung", "Pemupukan pertama dan kedua"],
        ["Hortikultura", "1 – 2 kg/Ha/app", "Kocor Tanah", "Setiap 30 hari"],
        ["Kelapa Sawit", "3,5 – 7 kg/Ha/app", "Tabur Langsung", "2 kali setahun"],
      ],
    },
  },
  {
    name: "KALSIKA",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Potassium (K) + Silica (Si) Mineral Complex",
    regNo: "01.03.2024.111",
    cardCrops: ["Shallot","Paddy","Chilli"],
    crops: ["Shallot","Paddy","Chilli","Tomato","Potato","Corn","Sugarcane","Avocado","Cucumber","Dragon Fruit","Radish","Oil Palm"],
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
    formulation: {
      en: [
        ["Active content", "Potassium (K) + Silica (Si) Mineral Complex"],
        ["Formulation type", "Soluble powder"],
        ["Shelf life", "36 months"],
      ],
      id: [
        ["Kandungan aktif", "Kompleks Mineral Kalium (K) + Silika (Si)"],
        ["Jenis formulasi", "Tepung larut"],
        ["Masa simpan", "36 bulan"],
      ],
    },
    application: {
      en: [
        ["Paddy", "1–2 g/L water", "Foliar spray", "Vegetative & generative stages"],
        ["Shallot", "1 - 2 g/L water", "Foliar spray", "Pre-flowering & fruit sizing"],
        ["Chilli", "1 - 2 g/L water", "Foliar spray", "Pre-flowering & fruit sizing"],
      ],
      id: [
        ["Padi", "1 – 2 g/L air", "Semprot daun", "Fase vegetatif & generatif"],
        ["Bawang Merah", "1 – 2 g/L air", "Semprot daun", "Pra-berbunga & pembesaran buah"],
        ["Cabai", "1 – 2 g/L air", "Semprot daun", "Pra-berbunga & pembesaran buah"],
      ],
    },
  },
  {
    name: "BOOSBLOOM",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Ascophyllum nodosum Seaweed Extract + Cytokinin, Gibberellin, B, Zn, K",
    regNo: "02.03.2022.895",
    cardCrops: ["Chilli","Tomato","Shallot"],
    crops: ["Chilli","Tomato","Shallot","Potato","Cacao","Cabbage","Citrus","Cucumber","Edamame","Melon","Patchouli","Radish","Watermelon"],
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
    formulation: {
      en: [
        ["Active content", "Ascophyllum nodosum Seaweed Extract + Cytokinin, Gibberellin, B, Zn, K"],
        ["Formulation type", "Soluble powder"],
        ["Shelf life", "36 months"],
      ],
      id: [
        ["Kandungan aktif", "Ekstrak Rumput Laut Ascophyllum nodosum + Sitokinin, Giberelin, B, Zn, K"],
        ["Jenis formulasi", "Tepung larut"],
        ["Masa simpan", "36 bulan"],
      ],
    },
    application: {
      en: [
        ["Horticultural crops", "1–2 g/L water", "Foliar spray", "Early vegetative & flowering stage"],
      ],
      id: [
        ["Tanaman Hortikultura", "1 – 2 g/L air", "Semprot daun", "Fase vegetatif awal & pembungaan"],
      ],
    },
  },
  {
    name: "KALIMAGSU",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "K₂O 17.0%, MgO 12.2%, S 21.0%, Cl <3%",
    regNo: "01.03.2023.629",
    cardCrops: ["Chilli","Tomato","Shallot"],
    crops: ["Chilli","Tomato","Shallot","Cucumber","Melon","Watermelon"],
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
    formulation: {
      en: [
        ["Active content", "K₂O 17.0%, MgO 12.2%, S 21.0%, Cl <3%"],
        ["Formulation type", "Soluble powder (pH 7)"],
        ["Shelf life", "36 months"],
      ],
      id: [
        ["Kandungan aktif", "K₂O 17,0%, MgO 12,2%, S 21,0%, Cl <3%"],
        ["Jenis formulasi", "Tepung larut (pH 7)"],
        ["Masa simpan", "36 bulan"],
      ],
    },
    application: {
      en: [
        ["Shallot / Chilli / Melon", "2–5 g/L water", "Foliar / fertigation", "During generative filling"],
      ],
      id: [
        ["Bawang Merah / Cabai / Melon", "2 – 5 g/L air", "Semprot daun / fertigasi", "Saat pengisian generatif"],
      ],
    },
  },
  {
    name: "BIOSTICK",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Cellulose Derivative (water-based bio-adjuvant / microfiber technology)",
    regNo: {"en":"Not registered separately (adjuvant)","id":"Tidak didaftarkan terpisah (adjuvan)"},
    cardCrops: ["Oil Palm","Chilli","Tomato"],
    crops: ["Oil Palm","Chilli","Tomato","Potato","Banana","Sugarcane","Cacao","Avocado","Citrus","Cucumber","Dragon Fruit","Durian","Melon","Watermelon"],
    image: "/images/products/biostick.jpg",
    keyBenefit: {
      en: "A water-based bio-adjuvant built on microfiber technology that improves spray coverage and is compatible with fertilizers, pesticides, and herbicides.",
      id: "Bio-adjuvan berbasis air dengan teknologi microfiber yang meningkatkan daya sebar semprotan serta kompatibel dengan pupuk, pestisida, dan herbisida.",
    },
    benefits: {
      en: [
        "A water-based bio-adjuvant built on microfiber technology, supporting sustainable spray application practices",
        "Increases spreading and surface wetting by optimally lowering the spray solution's surface tension",
        "Highly stable across variations in pH, temperature, ionic strength, and salinity",
        "Compatible with biological pesticides, synthetic pesticides, foliar fertilizers, and herbicides — improving the field performance of the product it's tank-mixed with",
      ],
      id: [
        "Formulasi berbasis air yang mendukung praktik aplikasi semprot yang berkelanjutan",
        "Meningkatkan daya sebar dan pembasahan permukaan melalui penurunan tegangan permukaan larutan semprot secara optimal",
        "Stabilitas tinggi terhadap variasi pH, suhu, kekuatan ionik, dan salinitas",
        "Kompatibel dengan pestisida biologi, pestisida sintetik, pupuk daun, dan herbisida — meningkatkan performa produk yang dicampurkan bersamanya",
      ],
    },
    formulation: {
      en: [
        ["Active content", "Cellulose Derivative (water-based bio-adjuvant / microfiber technology)"],
        ["Formulation type", "Liquid adjuvant"],
        ["Shelf life", "36 months"],
      ],
      id: [
        ["Kandungan aktif", "Turunan Selulosa (bio-adjuvant berbasis air / teknologi microfiber)"],
        ["Jenis formulasi", "Adjuvan cair"],
        ["Masa simpan", "36 bulan"],
      ],
    },
    application: {
      en: [
        ["All crops (tank mix)", "0.5 ml/L water", "Knapsack / Air Blast / Steam Sprayer — add to spray solution", "After fertilizer/pesticide/herbicide is already mixed in"],
        ["All crops (tank mix, drone application)", "0.25 ml/L water", "Drone Sprayer — add to spray solution", "After fertilizer/pesticide/herbicide is already mixed in"],
      ],
      id: [
        ["Semua tanaman (campur tangki)", "0,5 ml/L air", "Knapsack / Air Blast / Steam Sprayer — tambahkan ke larutan semprot", "Setelah pupuk/pestisida/herbisida sudah tercampur"],
        ["Semua tanaman (campur tangki, aplikasi drone)", "0,25 ml/L air", "Drone Sprayer — tambahkan ke larutan semprot", "Setelah pupuk/pestisida/herbisida sudah tercampur"],
      ],
    },
  },
  {
    name: "AMINOTOP",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "L-Amino Acids (17 types, 12.9%) + Fulvic Compound (39.0%) + C-Organic (26.92%)",
    regNo: "02.03.2023.373",
    cardCrops: ["Paddy","Corn","Shallot"],
    crops: ["Paddy","Corn","Shallot","Chilli","Tomato","Potato","Watermelon","Durian","Citrus"],
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
        "Enriched with high fulvic content to help speed up nutrient uptake, increase stress tolerance, and optimize harvest yield",
      ],
      id: [
        "Booster generatif berbasis asam amino & fulvat tinggi untuk memaksimalkan pembungaan dan pembentukan buah",
        "Meningkatkan fruit set & pengisian hasil sehingga bulir lebih penuh dan buah lebih optimal serta seragam",
        "Mengandung Ca, K, dan asam amino untuk memperkuat jaringan tanaman dan mengurangi kerontokan bulir/buah",
        "Diperkaya fulvat tinggi untuk mempercepat serapan hara, meningkatkan ketahanan stres, dan mengoptimalkan hasil panen",
      ],
    },
    formulation: {
      en: [
        ["Active content", "C-Organic 26.92% + C/N 9 + N 3.24% + P2O5 0.13% + K2O 2.95% + Fulvic Compound 39.0% + Amino Acids (17 types) 12.9% + Fe-total 5866 ppm + Fe-available 156 ppm + Zn 16 ppm (pH 7.6, Moisture 8.28%)"],
        ["Formulation type", "Solid organic fertilizer, water-soluble powder"],
        ["Shelf life", "36 months"],
      ],
      id: [
        ["Kandungan aktif", "C-Organik 26,92% + C/N 9 + N 3,24% + P2O5 0,13% + K2O 2,95% + Senyawa Fulvat 39,0% + Asam Amino (17 jenis) 12,9% + Fe-total 5866 ppm + Fe-tersedia 156 ppm + Zn 16 ppm (pH 7,6, Kadar Air 8,28%)"],
        ["Jenis formulasi", "Pupuk organik padat, tepung larut air"],
        ["Masa simpan", "36 bulan"],
      ],
    },
    application: {
      en: [
        ["Paddy, Corn, Shallot, Chilli, Tomato, Potato, Watermelon", "1–2 g/L water", "Foliar spray", "Not specified on brochure — apply per routine program"],
        ["Durian, Citrus", "2–4 g/L water", "Foliar spray", "Not specified on brochure — apply per routine program"],
      ],
      id: [
        ["Padi, Jagung, Bawang Merah, Cabai, Tomat, Kentang, Semangka", "1 – 2 g/L air", "Semprot daun", "Tidak dicantumkan pada brosur — aplikasikan sesuai program rutin"],
        ["Durian, Jeruk", "2 – 4 g/L air", "Semprot daun", "Tidak dicantumkan pada brosur — aplikasikan sesuai program rutin"],
      ],
    },
  },
  {
    name: "NUTRI BK+",
    type: "Bio Fertilizer",
    activeOrganism: "Water-soluble Micronutrient & Plant Nutrition Complex (Zn, Mn, Ca, B, K, Amino Acids, Fulvic Acid)",
    regNo: {"en":"01.03.2023.1531 (registered under prior product name \"Nutriplan (Mikro Majemuk)\") — number carried over from the Product Directory; not shown on the brosur baru image itself, so unverified against packaging.","id":"01.03.2023.1531 (terdaftar dengan nama sebelumnya \"Nutriplan (Mikro Majemuk)\") — nomor diambil dari Direktori Produk; tidak tercantum pada gambar brosur baru sehingga belum terverifikasi dengan kemasan."},
    cardCrops: ["Oil Palm","Cacao","Avocado"],
    crops: ["Oil Palm","Cacao","Avocado","Citrus","Dragon Fruit","Durian"],
    image: "/images/products/nutribk.jpg",
    keyBenefit: {
      en: "Powder-form nutrition product formulated for spray or soil-drench application across immature and mature plant phases.",
      id: "Produk nutrisi berbentuk tepung yang diformulasikan untuk aplikasi semprot atau pengocoran pada fase TBM dan TM.",
    },
    benefits: {
      en: [
        "A fruiting-stage nutrition product combining Zn, Mn, Ca, B, and K with amino acids and fulvic acid, helping plants produce more uniform flowering for higher fruit-set potential",
        "Reduces flower and young-fruit drop, increasing the number of fruits that develop through to harvest",
        "Supports optimal fruit filling for better size, weight, and harvest quality",
        "Helps plants stay healthy, recover faster from stress, and sustain productivity season after season",
        "Can be mixed with synthetic fertilizers or pesticides as part of a routine application program; suited to fruit crops such as durian, mango, avocado, and citrus",
      ],
      id: [
        "Nutrisi esensial pembuahan tanaman berbasis Zn, Mn, Ca, B, dan K yang diperkaya asam amino dan asam fulvat, membantu tanaman menghasilkan pembungaan yang lebih seragam sehingga potensi pembentukan buah menjadi lebih tinggi",
        "Mengurangi kehilangan bunga dan buah muda serta meningkatkan jumlah buah yang berkembang hingga panen",
        "Mendukung pengisian buah secara optimal sehingga menghasilkan ukuran, bobot, dan kualitas panen yang lebih baik",
        "Membantu tanaman tetap sehat, pulih lebih cepat dari cekaman, dan mempertahankan produktivitas secara berkelanjutan",
        "Dapat dicampur dengan pupuk atau pestisida sintetik lainnya; cocok untuk komoditas buah seperti durian, mangga, alpukat, dan jeruk",
      ],
    },
    formulation: {
      en: [
        ["Active content", "Water-soluble micronutrient and plant nutrition complex"],
        ["Formulation type", "Soluble powder"],
        ["Shelf life", "36 months"],
      ],
      id: [
        ["Kandungan aktif", "Kompleks nutrisi tanaman & mikronutrien larut air"],
        ["Jenis formulasi", "Tepung larut"],
        ["Masa simpan", "36 bulan"],
      ],
    },
    application: {
      en: [
        ["Plantations (TBM & TM)", "2–5 kg/ha", "Foliar / soil drench", "Per routine schedule"],
      ],
      id: [
        ["Perkebunan (TBM & TM)", "2 – 5 kg/ha", "Semprot daun / Kocor tanah", "Sesuai jadwal rutin"],
      ],
    },
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
    thumb: "/images/testimonials/thumb-paprika-cisarua.jpg",
    url: "https://www.youtube.com/watch?v=NITS6bAB8pg&t=11s",
    embedId: "NITS6bAB8pg",
  },
  {
    title: "Cerita Tani — Padi, Karangsambung",
    crop: "Padi",
    location: "Karangsambung",
    thumb: "/images/testimonials/thumb-padi-karangsambung.jpg",
    url: "https://www.youtube.com/watch?v=tj89dLIYVLg&t=38s",
    embedId: "tj89dLIYVLg",
  },
  {
    title: "Cerita Tani — Toko Siar Pusaka Tani, Karawang",
    crop: "Toko Pertanian / Padi",
    location: "Karawang",
    thumb: "/images/testimonials/thumb-kios-karawang.jpg",
    url: "https://www.youtube.com/watch?v=UY6IsAgmBv4&t=1s",
    embedId: "UY6IsAgmBv4",
  },
];
