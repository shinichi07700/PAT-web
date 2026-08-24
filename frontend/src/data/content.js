// Central content & product data for PT. Prima Agro Tech
// Technical/product specs are representative placeholders — editable before launch.

export const IMAGES = {
  heroField: "https://images.pexels.com/photos/5555232/pexels-photo-5555232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  lab: "https://images.pexels.com/photos/3735711/pexels-photo-3735711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  microbes: "https://images.pexels.com/photos/5842129/pexels-photo-5842129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  testTubes: "https://images.pexels.com/photos/8533087/pexels-photo-8533087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  farm: "https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  ricePaddy: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  palmOil: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  scientist: "https://images.pexels.com/photos/8539770/pexels-photo-8539770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  soil: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  farmerField: "https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  greenhouse: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  expedition: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  production: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  teamField: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
};

export const WHATSAPP_NUMBER = "6285283790848";

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

export const PRODUCTS = [
  {
    slug: "biotracol",
    name: "BIOTRACOL",
    type: "Bio Fungicide",
    activeOrganism: "Trichoderma asperellum + Bacillus subtilis",
    categorySlug: "bio-fungicides",
    cardCrops: ["Banana", "Chilli", "Tomato"],
    crops: ["Banana", "Chilli", "Tomato", "Potato", "Cacao", "Avocado", "Cabbage", "Citrus", "Durian"],
    regNo: "RI. 03020120XXXXX",
    image: "/images/products/biotracol.jpg",
    keyBenefit: {
      en: "Dual-microbe defense against fruit rot, bacterial wilt and blast, listed in Kementan's e-Katalog.",
      id: "Pertahanan dua-mikroba melawan busuk buah, layu bakteri, dan blas. Terdaftar di e-Katalog Kementan.",
    },
    what: {
      en: "BIOTRACOL combines two complementary antagonist microbes that colonise the root zone and leaf surface, outcompeting and suppressing the fungal and bacterial pathogens behind fruit rot, bacterial wilt and blast. Applied preventively, it builds a living barrier that keeps working between sprays.",
      id: "BIOTRACOL menggabungkan dua mikroba antagonis komplementer yang mengoloni zona akar dan permukaan daun, menekan patogen jamur dan bakteri penyebab busuk buah, layu bakteri, dan blas.",
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
    trials: [
      ["Banana blast (Lampung)", "Smallholder co-op", "12 weeks", "−63% incidence vs control"],
      ["Cacao pod rot (Sulawesi)", "Plantation trial", "16 weeks", "+18% marketable yield"],
    ],
  },
  {
    slug: "bt-max",
    name: "BT-MAX",
    type: "Bio Insecticide",
    activeOrganism: "Bacillus thuringiensis strain 4042 + Serratia marcescens",
    categorySlug: "bio-insecticides",
    cardCrops: ["Oil Palm", "Paddy", "Shallot"],
    crops: ["Oil Palm", "Paddy", "Shallot", "Banana", "Corn", "Sugarcane", "Cabbage", "Edamame"],
    regNo: "RI. 22010120XXXXX",
    image: "/images/products/bt-max.jpg",
    keyBenefit: {
      en: "Endophytic protection against armyworm, cabbage worm and stem borer that mixes straight into fertilizer — no stock solution needed.",
      id: "Perlindungan endofit melawan ulat grayak, ulat kubis, dan penggerek batang yang bisa dicampur langsung ke pupuk — tanpa larutan induk.",
    },
    what: {
      en: "BT-MAX delivers a high-potency Bacillus thuringiensis strain that targets lepidopteran larvae from inside the plant. Its endophytic action means protection persists after application, and the dry formulation mixes straight into granular fertilizer for zero extra labour.",
      id: "BT-MAX menghadirkan strain Bacillus thuringiensis berpotensi tinggi yang menyasar larva lepidoptera dari dalam tanaman. Formulasi kering dapat dicampur langsung ke pupuk butiran.",
    },
    formulation: [
      ["Active organism", "Bacillus thuringiensis strain 4042 + Serratia marcescens"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Wettable powder (WP) - Sachet 50g"],
      ["Shelf life", "36 months (ANHYDRIOM™)"],
    ],
    application: [
      ["Oil Palm", "2 kg/ha", "Mix with fertilizer", "Per fertilisation cycle"],
      ["Corn", "1 kg/ha", "Broadcast", "At early vegetative stage"],
      ["Chilli", "500 g/ha", "Foliar", "Every 10 days"],
    ],
    trials: [
      ["Armyworm on corn (Java)", "15-farm trial", "1 season", "−71% larval count"],
      ["Stem borer, sugarcane (Lampung)", "Estate trial", "1 season", "+9% cane weight"],
    ],
  },
  {
    slug: "humatop",
    name: "HUMATOP",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Humic acid ≥ 12%, Fulvic acid ≥ 3% (Leonardite)",
    categorySlug: "biostimulant-nutrition",
    cardCrops: ["Oil Palm", "Paddy", "Chilli"],
    crops: ["Oil Palm", "Paddy", "Chilli", "Tomato", "Shallot", "Potato", "Corn", "Cacao", "Avocado", "Cabbage", "Citrus", "Cucumber", "Dragon Fruit", "Durian", "Edamame", "Melon", "Patchouli", "Radish", "Watermelon"],
    regNo: "RI. 01050120XXXXX",
    image: "/images/products/humatop.jpg",
    keyBenefit: {
      en: "A leonardite-based humic conditioner that stabilizes soil pH and unlocks nutrient uptake at the root.",
      id: "Pembenah humat berbasis leonardit yang menstabilkan pH tanah dan membuka penyerapan nutrisi di akar.",
    },
    what: {
      en: "HUMATOP is a concentrated humic and fulvic acid conditioner extracted from leonardite. It buffers soil pH, improves cation exchange capacity, and chelates nutrients so more of what you apply actually reaches the root — visible as stronger early root mass and better response to fertilizer.",
      id: "HUMATOP adalah pembenah asam humat dan fulvat pekat dari leonardit. Menstabilkan pH tanah, meningkatkan KTK, dan mengikat nutrisi agar lebih banyak yang sampai ke akar.",
    },
    formulation: [
      ["Active content", "Humic acid ≥ 12%, Fulvic acid ≥ 3%"],
      ["Source", "Leonardite extract"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "36 months"],
    ],
    application: [
      ["Paddy", "3 kg/ha", "Soil / fertigation", "Land prep + tillering"],
      ["Chilli / Tomato", "2–3 g/L", "Drench", "Every 2 weeks"],
      ["Oil Palm", "50 g/tree", "Soil apply", "Per fertilisation"],
    ],
    trials: [
      ["Shallot (Brebes)", "Farmer trial", "1 season", "+22% bulb yield"],
      ["Paddy (West Java)", "Demo plot", "1 season", "−20% urea, same yield"],
    ],
  },
  {
    slug: "decopalma",
    name: "DECOPALMA",
    type: "Bio Decomposer",
    activeOrganism: "Trichoderma spp. + cellulolytic Bacillus",
    categorySlug: "soil-remediation",
    cardCrops: ["Oil Palm"],
    crops: ["Oil Palm"],
    regNo: "RI. 04070120XXXXX",
    image: "/images/products/decopalma.jpg",
    keyBenefit: {
      en: "Accelerates decomposition of oil palm empty fruit bunches and replanting waste into usable organic matter.",
      id: "Mempercepat penguraian tandan kosong sawit dan limbah peremajaan menjadi bahan organik yang berguna.",
    },
    what: {
      en: "DECOPALMA is a lignocellulose-degrading consortium formulated for the specific waste streams of oil palm — empty fruit bunches, fronds and replanting biomass. It shortens composting time dramatically and returns nutrients to the estate instead of burning them.",
      id: "DECOPALMA adalah konsorsium pengurai lignoselulosa yang diformulasikan untuk limbah spesifik sawit — tandan kosong, pelepah, dan biomassa peremajaan.",
    },
    formulation: [
      ["Active organism", "Trichoderma spp. + cellulolytic Bacillus"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Empty fruit bunch", "2 kg/tonne", "Layer & moisten", "Once per pile"],
      ["Frond stacking", "1 kg/tonne", "Spray on windrow", "Per cycle"],
    ],
    trials: [
      ["EFB composting (Riau)", "Estate trial", "8 weeks", "Compost-ready vs 16 wk control"],
    ],
  },
  {
    slug: "orizaplus",
    name: "ORIZAPLUS",
    type: "Bio Fertilizer",
    activeOrganism: "Azospirillum sp. + Bacillus megaterium",
    categorySlug: "bio-fertilizers",
    cardCrops: ["Paddy"],
    crops: ["Paddy"],
    regNo: "RI. 01020120XXXXX",
    image: "/images/products/orizaplus.jpg",
    keyBenefit: {
      en: "Nitrogen-fixing and phosphate-solubilizing consortium tuned for paddy systems.",
      id: "Konsorsium pengikat nitrogen dan pelarut fosfat yang disetel untuk sistem padi.",
    },
    what: {
      en: "ORIZAPLUS pairs free-living nitrogen fixers with phosphate solubilisers selected from Indonesian paddy soils. It reduces synthetic nitrogen requirements while improving tillering and root vigour, and integrates into existing fertiliser schedules.",
      id: "ORIZAPLUS memadukan pengikat nitrogen hidup bebas dengan pelarut fosfat yang dipilih dari tanah sawah Indonesia, mengurangi kebutuhan nitrogen sintetis.",
    },
    formulation: [
      ["Active organism", "Azospirillum sp. + Bacillus megaterium"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Carrier-based powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Paddy", "2 kg/ha", "Seed / soil", "Land prep"],
      ["Corn", "2 kg/ha", "In-furrow", "At planting"],
    ],
    trials: [
      ["Paddy (Central Java)", "Demo plot", "1 season", "−25% urea, +6% yield"],
    ],
  },
  {
    slug: "endopalma",
    name: "ENDOPALMA",
    type: "Bio Fertilizer",
    activeOrganism: "Endophytic Bacillus + Serratia marcescens",
    categorySlug: "bio-fertilizers",
    cardCrops: ["Oil Palm"],
    crops: ["Oil Palm"],
    regNo: "RI. 01030120XXXXX",
    image: "/images/products/endopalma.jpg",
    keyBenefit: {
      en: "Feeds oil palm, coconut and sugarcane from the inside, strengthening the plant's own defenses against Ganoderma and Fusarium as it grows.",
      id: "Memberi nutrisi sawit, kelapa, dan tebu dari dalam, memperkuat pertahanan alami tanaman terhadap Ganoderma dan Fusarium.",
    },
    what: {
      en: "EndoPalma establishes endophytic bacteria inside oil palm, coconut and sugarcane tissue, improving nutrient-use efficiency while strengthening the plant's natural resistance to Ganoderma and Fusarium. Especially suited to estate crops where long-term disease pressure matters.",
      id: "EndoPalma membangun bakteri endofit di dalam jaringan sawit, kelapa, dan tebu, meningkatkan efisiensi nutrisi sekaligus memperkuat ketahanan alami tanaman terhadap Ganoderma dan Fusarium.",
    },
    formulation: [
      ["Active organism", "Endophytic Bacillus + Serratia marcescens"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Oil Palm", "50 g/tree", "Soil apply", "Per fertilisation"],
      ["Sugarcane", "3 kg/ha", "Soil", "At planting"],
    ],
    trials: [
      ["Oil palm Ganoderma (Riau)", "Estate trial", "12 months", "Lower infection vs control"],
    ],
  },
  {
    slug: "decoprima",
    name: "DECOPRIMA",
    type: "Bio Decomposer",
    activeOrganism: "Trichoderma spp. + cellulolytic & lignolytic consortium",
    categorySlug: "soil-remediation",
    cardCrops: ["Banana", "Paddy", "Chilli"],
    crops: ["Banana", "Paddy", "Chilli", "Tomato", "Shallot", "Potato", "Avocado", "Cabbage", "Citrus", "Cucumber", "Dragon Fruit", "Durian", "Edamame", "Melon", "Patchouli", "Radish", "Watermelon"],
    regNo: "RI. 04050120XXXXX",
    image: "/images/products/decoprima.jpg",
    keyBenefit: {
      en: "All-purpose decomposer that turns rice straw and crop residue into compost in weeks, not months.",
      id: "Decomposer serbaguna yang mengubah jerami padi dan sisa panen menjadi kompos dalam hitungan minggu.",
    },
    what: {
      en: "DECOPRIMA is a broad-spectrum decomposer for rice straw, corn stover and general farm residue. It offers growers a direct alternative to open burning while returning organic matter and nutrients to the soil.",
      id: "DECOPRIMA adalah pengurai spektrum luas untuk jerami padi, tongkol jagung, dan sisa panen umum — alternatif langsung untuk pembakaran terbuka.",
    },
    formulation: [
      ["Active organism", "Mixed cellulolytic & lignolytic consortium"],
      ["Concentration", "≥ 1 × 10⁹ CFU/g"],
      ["Formulation type", "Powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Rice straw", "1 kg/tonne", "Spray & incorporate", "Post-harvest"],
      ["Corn stover", "1 kg/tonne", "Windrow", "Post-harvest"],
    ],
    trials: [
      ["Rice straw (West Java)", "Farmer group", "5 weeks", "Full breakdown, no burning"],
    ],
  },
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

// Remaining catalogue (24 items), strictly following client per-product tag order
const RAW_PRODUCTS = [
  {
    name: "TERAPALMA",
    type: "Bio Decomposer",
    activeOrganism: "Trichoderma spp. + cellulolytic Bacillus",
    cardCrops: ["Oil Palm"],
    crops: ["Oil Palm"],
    benefit: "Breaks down oil palm fronds and empty bunches faster, building organic carbon back into plantation soil.",
    image: "/images/products/terapalma.jpg",
  },
  {
    name: "SEUDOFLOR",
    type: "Bio Fungicide",
    activeOrganism: "Pseudomonas fluorescens",
    cardCrops: ["Banana", "Chilli", "Tomato"],
    crops: ["Banana", "Chilli", "Tomato", "Potato", "Melon"],
    benefit: "Protects roots from sudden wilting and rot, working in the soil before problems ever reach the plant.",
    image: "/images/products/seudoflor.jpg",
  },
  {
    name: "MOLERIMAX",
    type: "Bio Fungicide",
    activeOrganism: "Trichoderma asperellum + Bacillus velezensis",
    cardCrops: ["Shallot"],
    crops: ["Shallot"],
    benefit: "Protects shallot from Moler disease, the fusarium wilt that can wipe out a crop before harvest.",
    image: "/images/products/molerimax.jpg",
  },
  {
    name: "PAENAMAXI",
    type: "Bio Fungicide",
    activeOrganism: "Paenibacillus polymyxa",
    cardCrops: ["Shallot", "Cucumber", "Melon"],
    crops: ["Shallot", "Cucumber", "Melon", "Watermelon"],
    benefit: "Keeps roots healthy by holding off the fungi and bacteria that cause root rot and wilting.",
    image: "/images/products/paenamaxi.jpg",
  },
  {
    name: "METARIZEP",
    type: "Bio Insecticide",
    activeOrganism: "Metarhizium anisopliae",
    cardCrops: ["Oil Palm", "Paddy"],
    crops: ["Oil Palm", "Paddy"],
    benefit: "Protects crops from brown planthopper, stink bug and thrips using entomopathogenic fungi that infect pests on contact.",
    image: "/images/products/metarizep.jpg",
  },
  {
    name: "ENTOMOBAC",
    type: "Bio Insecticide",
    activeOrganism: "Bacillus thuringiensis + Beauveria bassiana",
    cardCrops: ["Oil Palm", "Paddy", "Shallot"],
    crops: ["Oil Palm", "Paddy", "Shallot", "Cacao", "Cucumber", "Edamame", "Melon", "Watermelon"],
    benefit: "Controls planthoppers and borers across several crops while helping prevent pests from building resistance over time.",
    image: "/images/products/entomobac.jpg",
  },
  {
    name: "BT PLUS",
    type: "Bio Insecticide",
    activeOrganism: "Bacillus thuringiensis",
    cardCrops: ["Oil Palm", "Paddy", "Banana"],
    crops: ["Oil Palm", "Paddy", "Banana", "Corn", "Sugarcane"],
    benefit: "Targets armyworm and stem borer directly, without harming the beneficial insects working alongside your crop.",
    image: "/images/products/bt-plus.jpg",
  },
  {
    name: "BIOKILLIA",
    type: "Bio Insecticide",
    activeOrganism: "Beauveria bassiana",
    cardCrops: ["Chilli", "Melon"],
    crops: ["Chilli", "Melon"],
    benefit: "Controls aphids, leafhoppers and mealybugs through natural infection, avoiding chemical pesticide resistance.",
    image: "/images/products/biokillia.jpg",
  },
  {
    name: "CRYSOKILL",
    type: "Bio Insecticide",
    activeOrganism: "Lecanicillium lecanii",
    cardCrops: ["Sugarcane", "Avocado", "Citrus"],
    crops: ["Sugarcane", "Avocado", "Citrus", "Dragon Fruit", "Durian"],
    benefit: "Controls sucking and chewing pests on vegetables and fruit crops while staying safe for pollinators.",
    image: "/images/products/crysokill.jpg",
  },
  {
    name: "BIONEMATO",
    type: "Bio Insecticide",
    activeOrganism: "Purpureocillium lilacinum (Paecilomyces lilacinus)",
    cardCrops: ["Potato", "Cabbage"],
    crops: ["Potato", "Cabbage"],
    benefit: "Takes on pest larvae and plant-parasitic nematodes living in the soil, protecting roots without harming earthworms.",
    image: "/images/products/bionemato.jpg",
  },
  {
    name: "BACTOHORTI",
    type: "Bio Fertilizer",
    activeOrganism: "Endophytic Bacillus + Serratia marcescens",
    cardCrops: ["Citrus"],
    crops: ["Citrus"],
    regNo: "03.03.2022.1135",
    benefit: "Pupuk hayati majemuk endofit tepung untuk meningkatkan pertumbuhan vegetatif, imunitas tanaman, dan efisiensi serapan pupuk sampai 30%.",
    image: "/images/products/bactohorti.jpg",
  },
  {
    name: "TERRABIO",
    type: "Bio Fertilizer",
    activeOrganism: "Azotobacter sp. + Bacillus sp. + Trichoderma sp.",
    cardCrops: ["Corn", "Avocado", "Dragon Fruit"],
    crops: ["Corn", "Avocado", "Dragon Fruit", "Durian", "Edamame", "Patchouli"],
    benefit: "Helps crops pull more nutrients from the soil, working through the roots to build healthier plants from the ground up.",
    image: "/images/products/terrabio.jpg",
  },
  {
    name: "BOOSBLOOM",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Ascophyllum nodosum (Organic Seaweed extract) + Cytokinin & Gibberellin",
    cardCrops: ["Chilli", "Tomato", "Shallot"],
    crops: ["Chilli", "Tomato", "Shallot", "Potato", "Cacao", "Cabbage", "Citrus", "Cucumber", "Edamame", "Melon", "Patchouli", "Radish", "Watermelon"],
    regNo: "02.03.2022.895",
    benefit: "Organic seaweed micronutrient dengan hormon alami sitokinin & giberelin untuk memaksimalkan pembungaan dan pembuahan.",
    image: "/images/products/boosbloom.jpg",
  },
  {
    name: "KALSIKA",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Micronized Calcium (Ca) & Silica (Si) Complex",
    cardCrops: ["Oil Palm", "Paddy", "Chilli"],
    crops: ["Oil Palm", "Paddy", "Chilli", "Tomato", "Shallot", "Potato", "Corn", "Sugarcane", "Avocado", "Cucumber", "Dragon Fruit", "Radish"],
    benefit: "Strengthens plant stems and cell walls, helping crops stand up to wind, rain and pest pressure without falling over.",
    image: "/images/products/kalsika.jpg",
  },
  {
    name: "KALIMAGSU",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Potassium, Magnesium & Sulfur (K-Mg-S) Mineral Complex",
    cardCrops: ["Chilli", "Tomato", "Shallot"],
    crops: ["Chilli", "Tomato", "Shallot", "Cucumber", "Melon", "Watermelon"],
    benefit: "Supplies potassium, magnesium and sulfur from a natural mineral source, improving harvest quality without salt buildup in the soil.",
    image: "/images/products/kalimagsu.jpg",
  },
  {
    name: "AMINOTOP",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "L-Amino Acids 17+ Complex + Fulvic Acid",
    cardCrops: ["Paddy", "Chilli", "Tomato"],
    crops: ["Paddy", "Chilli", "Tomato", "Potato", "Cucumber"],
    benefit: "Booster generatif berbasis asam amino, asam fulvat, dan hara esensial untuk memaksimalkan pembungaan, fruit set, dan pengisian bulir/buah.",
    image: "/images/products/aminotop.jpg",
  },
  {
    name: "MICROBLOOM",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Chelated Micronutrient (Fe, Zn, Mn, B, Cu, Mo) + Amino Acids",
    cardCrops: ["Paddy", "Chilli", "Tomato"],
    crops: ["Paddy", "Chilli", "Tomato", "Shallot", "Cucumber", "Melon", "Watermelon"],
    benefit: "Delivers balanced micronutrient and amino acid support for enhanced vigor, flowering, and fruit set.",
    image: "/images/products/microbloom.jpg",
  },
  {
    name: "NUTRIBK+",
    type: "Bio Fertilizer",
    activeOrganism: "Water-soluble NPK + Trace Elements + Bacillus sp.",
    cardCrops: ["Oil Palm", "Cacao", "Avocado"],
    crops: ["Oil Palm", "Cacao", "Avocado", "Citrus", "Dragon Fruit", "Durian"],
    benefit: "A complete water-soluble NPK fertilizer blend, supporting both optimal vegetative growth and flowering/fruiting.",
    image: "/images/products/nutribk.jpg",
  },
  {
    name: "BIOSTICK",
    type: "Bio Stimulant & Nutrition",
    activeOrganism: "Bio-surfactant Adjuvant + Zinc (Zn) + Manganese (Mn)",
    cardCrops: ["Oil Palm", "Chilli", "Tomato"],
    crops: ["Oil Palm", "Chilli", "Tomato", "Potato", "Banana", "Sugarcane", "Cacao", "Avocado", "Citrus", "Cucumber", "Dragon Fruit", "Durian", "Melon", "Watermelon"],
    benefit: "Perekat pestisida biologi dengan kandungan Zinc dan Mangan, meningkatkan daya rekat dan perataan aplikasi pada daun serta efektivitas perlindungan.",
    image: "/images/products/biostick.jpg",
  },
  {
    name: "BACTOPLUS",
    type: "Bio Fertilizer",
    activeOrganism: "Endophytic Bacillus + Pseudomonas sp.",
    cardCrops: [],
    crops: [],
    regNo: "03.03.2023.417",
    benefit: "Pupuk hayati majemuk endofit untuk meningkatkan produksi getah/buah, imunitas terhadap Jamur Akar Putih (JAP), dan kesuburan tanah.",
    image: "/images/products/bactoplus.jpg",
  },
  {
    name: "PRIMADECO",
    type: "Bio Fungicide",
    activeOrganism: "Trichoderma harzianum + Streptomyces sp.",
    cardCrops: [],
    crops: [],
    benefit: "Helps food and horticultural crops resist soil-borne disease while building up the beneficial microbes already living in the soil.",
    image: "/images/products/primadeco.jpg",
  },
  {
    name: "MICROBLAS",
    type: "Bio Fungicide",
    activeOrganism: "Streptomyces sp. + Trichoderma virens",
    cardCrops: ["Paddy"],
    crops: ["Paddy"],
    benefit: "Built to protect rice from blast disease that can spread quickly across a field if left unchecked.",
    image: "/images/products/microblas.jpg",
  },
  {
    name: "BIOFUNGAL",
    type: "Bio Fungicide",
    activeOrganism: "Trichoderma viride + Gliocladium sp.",
    cardCrops: ["Banana", "Cacao", "Durian"],
    crops: ["Banana", "Cacao", "Durian"],
    benefit: "Bio fungisida tepung larut (WP) berbahan aktif cendawan antagonis untuk mengendalikan busuk daun Phytophthora, Alternaria, dan embun tepung.",
    image: "/images/products/biofungal.jpg",
  },
  {
    name: "VERTIPLUS",
    type: "Bio Insecticide",
    activeOrganism: "Verticillium lecanii",
    cardCrops: ["Chilli", "Tomato"],
    crops: ["Chilli", "Tomato"],
    benefit: "Keeps aphids, whitefly and thrips under control, and works especially well in humid conditions where these pests thrive.",
    image: "/images/products/vertiplus.jpg",
  },
];

export const EXTRA_PRODUCTS = RAW_PRODUCTS.map((r) => {
  const m = TYPE_META[r.type];
  const form = r.form || [
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
    regNo: r.regNo || "Available on request",
    image: r.image || `/images/products/${slugify(r.name)}.jpg`,
    keyBenefit: { en: r.benefit, id: r.benefit },
    what: { en: r.benefit, id: r.benefit },
    formulation: form,
    application: r.app || m.app,
    trials: [["Field validation (Indonesia)", "PAT trial network", "1 season", "Positive response vs untreated"]],
  };
});

export const ALL_PRODUCTS = [...PRODUCTS, ...EXTRA_PRODUCTS];

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
    image: IMAGES.expedition,
  },
  {
    n: "02",
    title: { en: "Isolate & Characterization", id: "Isolasi & Karakterisasi" },
    body: {
      en: "Each sample is cultured and molecularly identified (PCR-verified), building a proprietary library of 120+ characterized isolates.",
      id: "Setiap sampel dikultur dan diidentifikasi secara molekuler (terverifikasi PCR), membangun pustaka proprietary 120+ isolat terkarakterisasi.",
    },
    image: IMAGES.lab,
  },
  {
    n: "03",
    title: { en: "ANHYDRIOM™ Stabilization", id: "Stabilisasi ANHYDRIOM™" },
    body: {
      en: "Keeps live microbes dormant, stable, and potent — shelf-stable 3+ years in pure powder form. Prolonged shelf life, lighter and cheaper to ship, high purity.",
      id: "Menjaga mikroba hidup tetap dorman, stabil, dan potensial — tahan simpan 3+ tahun dalam bentuk bubuk murni. Umur simpan panjang, lebih ringan dan murah dikirim.",
    },
    image: IMAGES.testTubes,
  },
  {
    n: "04",
    title: { en: "Product Formulation", id: "Formulasi Produk" },
    body: {
      en: "Strains combined into multi-strain formulations — broader spectrum, resilience built in, wider coverage, synergistic mechanisms.",
      id: "Strain digabung menjadi formulasi multi-strain — spektrum lebih luas, ketahanan bawaan, cakupan lebih lebar, mekanisme sinergis.",
    },
    image: IMAGES.microbes,
  },
  {
    n: "05",
    title: { en: "Efficacy Validation", id: "Validasi Efikasi" },
    body: {
      en: "Every formulation is field-tested against real pest, disease, and soil conditions before commercialisation.",
      id: "Setiap formulasi diuji lapangan melawan kondisi hama, penyakit, dan tanah nyata sebelum dikomersialkan.",
    },
    image: IMAGES.farmerField,
  },
  {
    n: "06",
    title: { en: "Deploy & Scale", id: "Penyebaran & Skala" },
    body: {
      en: "Reaches 15,000+ farmer partners across 16+ provinces, with in-house field agent support and exports underway across South East Asia.",
      id: "Menjangkau 15.000+ mitra petani di 16+ provinsi, dengan dukungan petugas lapangan in-house dan ekspor berjalan di Asia Tenggara.",
    },
    image: IMAGES.farm,
  },
];

export const TIMELINE = [
  { year: "2008", en: "Prima Agro Tech founded — first microbial isolates cultured.", id: "Prima Agro Tech berdiri — isolat mikroba pertama dikultur." },
  { year: "2015", en: "Laboratory upgraded to expand strain characterization capacity.", id: "Laboratorium ditingkatkan untuk memperluas kapasitas karakterisasi strain." },
  { year: "2018", en: "Second lab upgrade; ANHYDRIOM™ stabilization scaled up.", id: "Peningkatan laboratorium kedua; stabilisasi ANHYDRIOM™ diperbesar." },
  { year: "2024", en: "ISO 17025:2017 accreditation achieved for testing lab.", id: "Akreditasi ISO 17025:2017 diperoleh untuk laboratorium uji." },
  { year: "Today", en: "120+ isolates, 15,000+ farmers, 16+ provinces, exports underway across SEA.", id: "120+ isolat, 15.000+ petani, 16+ provinsi, ekspor berjalan di Asia Tenggara." },
];

export const SEED_TESTIMONIALS = [
  {
    name: "Pak Ibrahim",
    role: "Petani Padi · Bekasi",
    crop: "Padi",
    province: "Bekasi",
    image: "/images/testimonial-ibrahim.jpg",
    quote: {
      en: "Awalnya di umur 30 hari, tanaman padi saya sempat memerah dan terserang sundep. Tapi setelah memakai Humatop, hanya dalam 3 hari warna daun kembali hijau segar. Memasuki umur 50–60 hari, saya lanjutkan penyemprotan Kalimagsu dan hasilnya bulir padi keluar cepat serta terisi sangat bagus. Dari yang sebelumnya cuma dapat 5 ton, musim ini saya optimis bisa capai 7–8 ton per hektar.",
      id: "Awalnya di umur 30 hari, tanaman padi saya sempat memerah dan terserang sundep. Tapi setelah memakai Humatop, hanya dalam 3 hari warna daun kembali hijau segar. Memasuki umur 50–60 hari, saya lanjutkan penyemprotan Kalimagsu dan hasilnya bulir padi keluar cepat serta terisi sangat bagus. Dari yang sebelumnya cuma dapat 5 ton, musim ini saya optimis bisa capai 7–8 ton per hektar."
    }
  },
  {
    name: "Pak Rahmat",
    role: "Petani Paprika · Bandung Barat",
    crop: "Paprika",
    province: "Bandung Barat",
    image: "/images/testimonial-rahmat.jpg",
    quote: {
      en: "Sebelumnya, masa tanam paprika saya dari awal hingga panen memakan waktu 90 hingga 100 hari. Setelah menggunakan HumatPro, saya bisa panen lebih cepat di angka 75 sampai 80 hari. Hasilnya alhamdulillah sangat memuaskan, sehingga sekarang saya mempercayakan seluruh tahapan pemeliharaan tanaman ke produk-produk PT Prima Agro Tech.",
      id: "Sebelumnya, masa tanam paprika saya dari awal hingga panen memakan waktu 90 hingga 100 hari. Setelah menggunakan HumatPro, saya bisa panen lebih cepat di angka 75 sampai 80 hari. Hasilnya alhamdulillah sangat memuaskan, sehingga sekarang saya mempercayakan seluruh tahapan pemeliharaan tanaman ke produk-produk PT Prima Agro Tech."
    }
  },
  {
    name: "Pak Usep",
    role: "Petani Cabai · Garut",
    crop: "Cabai",
    province: "Garut",
    image: "/images/testimonial-usep.jpg",
    quote: {
      en: "Alhamdulillah setelah menggunakan produk PAT, pertumbuhan tanaman bagus dilihat dari daun yang hijau dan tanaman yang terkena layu berkurang. Produk PAT harga terjangkau, mudah diaplikasikan, hasilnya cepat terlihat di tanaman. Sekarang giliran sobat primatani untuk menggunakannya.",
      id: "Alhamdulillah setelah menggunakan produk PAT, pertumbuhan tanaman bagus dilihat dari daun yang hijau dan tanaman yang terkena layu berkurang. Produk PAT harga terjangkau, mudah diaplikasikan, hasilnya cepat terlihat di tanaman. Sekarang giliran sobat primatani untuk menggunakannya."
    }
  },
  {
    name: "Pak Atep",
    role: "Petani Tomat · Cianjur",
    crop: "Tomat",
    province: "Cianjur",
    image: "/images/testimonial-atep.jpg",
    quote: {
      en: "Selama saya menanam tomat, keluhan saya banyak, seperti lodoh, keriting daun, buah kurang banyak, dan tanah kurang gembur. Produk pertama kali yang saya gunakan Humatop. Dari dulunya pH tanah lima koma lima, setelah saya menggunakan Humatop menjadi enam koma lima.",
      id: "Selama saya menanam tomat, keluhan saya banyak, seperti lodoh, keriting daun, buah kurang banyak, dan tanah kurang gembur. Produk pertama kali yang saya gunakan Humatop. Dari dulunya pH tanah lima koma lima, setelah saya menggunakan Humatop menjadi enam koma lima."
    }
  }
];
