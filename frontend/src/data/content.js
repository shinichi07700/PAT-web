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
  { value: 2008, suffix: "", key: "founded" },
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
    title: { en: "Bio Fertilizers & Biostimulants", id: "Pupuk Hayati & Biostimulan" },
    desc: {
      en: "Live microbes that fix nitrogen, solubilize phosphate and trigger a plant's own defenses — a stronger foundation from the roots up.",
      id: "Mikroba hidup yang mengikat nitrogen, melarutkan fosfat, dan memicu pertahanan alami tanaman — fondasi lebih kuat dari akar.",
    },
    image: IMAGES.farm,
    accent: "#43B14B",
  },
  {
    slug: "bio-crop-protection",
    title: { en: "Bio Crop Protection", id: "Perlindungan Tanaman Hayati" },
    desc: {
      en: "Insect-specific fungi and bacteria that control pests and disease through targeted infection — sparing pollinators and beneficials.",
      id: "Jamur dan bakteri spesifik yang mengendalikan hama dan penyakit lewat infeksi tertarget — aman bagi penyerbuk dan serangga bermanfaat.",
    },
    image: IMAGES.greenhouse,
    accent: "#2D6A35",
  },
  {
    slug: "soil-remediation",
    title: { en: "Soil Remediation", id: "Remediasi Tanah" },
    desc: {
      en: "Bio-decomposers that turn crop residue and plantation waste into usable soil — a practical alternative to open burning.",
      id: "Bio-decomposer yang mengubah sisa panen dan limbah perkebunan menjadi tanah subur — alternatif praktis pembakaran terbuka.",
    },
    image: IMAGES.soil,
    accent: "#E8A500",
  },
];

// 5 detailed filter categories + their category grid pages
export const SOLUTION_TYPES = [
  "Bio-Fertilizer",
  "Bio-Insecticide",
  "Bio-Fungicide",
  "Bio-Stimulant & Nutrition",
  "Bio-Decomposer",
];

export const CATEGORY_PAGES = {
  "bio-fertilizers": {
    type: "Bio-Fertilizer",
    title: "Bio Fertilizers",
    image: IMAGES.farm,
    desc: {
      en: "Our bio-fertilizers work through the roots, building healthier plants from the ground up. Each formulation carries live microbes that fix nitrogen, solubilize phosphate or trigger a plant's own natural defenses, giving crops a stronger foundation without relying on synthetic inputs alone.",
      id: "Pupuk hayati kami bekerja melalui akar, membangun tanaman lebih sehat dari dasar. Setiap formulasi membawa mikroba hidup yang mengikat nitrogen, melarutkan fosfat, atau memicu pertahanan alami tanaman.",
    },
  },
  "bio-fungicides": {
    type: "Bio-Fungicide",
    title: "Bio Fungicides",
    image: IMAGES.greenhouse,
    desc: {
      en: "Our bio-fungicides use living organisms, not synthetic chemicals, to suppress the fungal and bacterial diseases that threaten yield. Each product is built around microbes proven to compete with, infect or block the pathogens they target, from root rot to fruit rot to blast disease.",
      id: "Bio-fungisida kami memakai organisme hidup, bukan bahan kimia sintetis, untuk menekan penyakit jamur dan bakteri yang mengancam hasil panen.",
    },
  },
  "bio-insecticides": {
    type: "Bio-Insecticide",
    title: "Bio Insecticides",
    image: IMAGES.farmerField,
    desc: {
      en: "Our bio-insecticides control pests the way nature does, through targeted infection rather than broad spectrum poison. Each formulation is built around insect-specific fungi or bacteria that leave pollinators and natural predators alone, so the rest of the ecosystem around your crop keeps working for you.",
      id: "Bio-insektisida kami mengendalikan hama seperti cara alam, lewat infeksi tertarget bukan racun spektrum luas — membiarkan penyerbuk dan predator alami tetap bekerja.",
    },
  },
  "soil-remediation": {
    type: "Bio-Decomposer",
    title: "Soil Remediation",
    image: IMAGES.soil,
    desc: {
      en: "Our bio-decomposers turn crop residue, plantation waste and manure into usable soil far faster than nature would on its own, while rebuilding the biological activity that healthy soil depends on. From rice straw to oil palm empty bunches, these products shorten the wait between harvest and healthy ground.",
      id: "Bio-decomposer kami mengubah sisa panen, limbah perkebunan, dan kotoran menjadi tanah subur jauh lebih cepat, sekaligus memulihkan aktivitas biologis tanah.",
    },
  },
  "biostimulant-nutrition": {
    type: "Bio-Stimulant & Nutrition",
    title: "Bio-Stimulant & Nutrition",
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
    type: "Bio-Fungicide",
    categorySlug: "bio-fungicides",
    crops: ["Banana", "Durian", "Cacao"],
    regNo: "RI. 03020120XXXXX",
    image: IMAGES.greenhouse,
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
    type: "Bio-Insecticide",
    categorySlug: "bio-insecticides",
    crops: ["Oil Palm", "Sugarcane", "Corn", "Banana", "Chilli"],
    regNo: "RI. 22010120XXXXX",
    image: IMAGES.farmerField,
    keyBenefit: {
      en: "Endophytic protection against armyworm, cabbage worm and stem borer that mixes straight into fertilizer — no stock solution needed.",
      id: "Perlindungan endofit melawan ulat grayak, ulat kubis, dan penggerek batang yang bisa dicampur langsung ke pupuk — tanpa larutan induk.",
    },
    what: {
      en: "BT-MAX delivers a high-potency Bacillus thuringiensis strain that targets lepidopteran larvae from inside the plant. Its endophytic action means protection persists after application, and the dry formulation mixes straight into granular fertilizer for zero extra labour.",
      id: "BT-MAX menghadirkan strain Bacillus thuringiensis berpotensi tinggi yang menyasar larva lepidoptera dari dalam tanaman. Formulasi kering dapat dicampur langsung ke pupuk butiran.",
    },
    formulation: [
      ["Active organism", "Bacillus thuringiensis var. kurstaki"],
      ["Concentration", "≥ 2 × 10¹⁰ CFU/g"],
      ["Formulation type", "Dry granule blend"],
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
    type: "Bio-Stimulant & Nutrition",
    categorySlug: "biostimulant-nutrition",
    crops: ["Paddy", "Corn", "Shallot", "Chilli", "Tomato", "Potato", "Citrus", "Durian", "Oil Palm"],
    regNo: "RI. 01050120XXXXX",
    image: IMAGES.ricePaddy,
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
    type: "Bio-Decomposer",
    categorySlug: "soil-remediation",
    crops: ["Oil Palm"],
    regNo: "RI. 04070120XXXXX",
    image: IMAGES.palmOil,
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
    type: "Bio-Fertilizer",
    categorySlug: "bio-fertilizers",
    crops: ["Paddy", "Corn"],
    regNo: "RI. 01020120XXXXX",
    image: IMAGES.ricePaddy,
    keyBenefit: {
      en: "Nitrogen-fixing and phosphate-solubilizing consortium tuned for paddy and corn systems.",
      id: "Konsorsium pengikat nitrogen dan pelarut fosfat yang disetel untuk sistem padi dan jagung.",
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
    slug: "endopama",
    name: "ENDOPAMA",
    type: "Bio-Fertilizer",
    categorySlug: "bio-fertilizers",
    crops: ["Chilli", "Tomato", "Potato", "Citrus"],
    regNo: "RI. 01030120XXXXX",
    image: IMAGES.greenhouse,
    keyBenefit: {
      en: "Endophytic bio-fertilizer that colonises plant tissue to boost nutrient efficiency and stress tolerance.",
      id: "Pupuk hayati endofit yang mengoloni jaringan tanaman untuk meningkatkan efisiensi nutrisi dan toleransi stres.",
    },
    what: {
      en: "ENDOPAMA establishes endophytic bacteria inside the plant, improving nutrient-use efficiency and resilience to drought and salinity stress. Especially suited to high-value horticulture where quality and consistency matter.",
      id: "ENDOPAMA membangun bakteri endofit di dalam tanaman, meningkatkan efisiensi nutrisi dan ketahanan terhadap kekeringan serta salinitas.",
    },
    formulation: [
      ["Active organism", "Endophytic Bacillus + Serratia marcescens"],
      ["Concentration", "≥ 1 × 10⁸ CFU/g"],
      ["Formulation type", "Soluble powder"],
      ["Shelf life", "24 months"],
    ],
    application: [
      ["Chilli / Tomato", "2 g/L", "Drench", "Every 2 weeks"],
      ["Potato", "3 kg/ha", "Soil", "At planting"],
    ],
    trials: [
      ["Chilli (West Java)", "Farmer trial", "1 season", "+17% grade-A fruit"],
    ],
  },
  {
    slug: "decoprima",
    name: "DECOPRIMA",
    type: "Bio-Decomposer",
    categorySlug: "soil-remediation",
    crops: ["Paddy", "Corn", "Sugarcane"],
    regNo: "RI. 04050120XXXXX",
    image: IMAGES.soil,
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

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const getRelated = (product) =>
  PRODUCTS.filter((p) => p.slug !== product.slug && p.crops.some((c) => product.crops.includes(c))).slice(0, 3);

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
  { name: "Pak Sutrisno", role: "farmer", crop: "Paddy", province: "West Java", quote: { en: "After switching to ORIZAPLUS I cut my urea by a quarter and still got a better harvest. The field agent came back twice to check on me.", id: "Setelah beralih ke ORIZAPLUS, urea saya turun seperempat dan panen tetap lebih baik. Petugas lapangan datang dua kali untuk memantau." } },
  { name: "Bu Ratna", role: "dealer", crop: "Horticulture", province: "Central Java", quote: { en: "Dealers trust products that keep. The powder format lasts on my shelf and the farmers keep coming back for BT-MAX.", id: "Dealer percaya produk yang tahan lama. Format bubuk awet di rak saya dan petani terus kembali untuk BT-MAX." } },
  { name: "Estate Manager, Riau", role: "plantation", crop: "Oil Palm", province: "Riau", quote: { en: "DECOPALMA turned our replanting waste into compost in half the time. For our RSPO reporting, that's a documented win.", id: "DECOPALMA mengubah limbah peremajaan kami menjadi kompos dalam separuh waktu. Untuk pelaporan RSPO kami, itu kemenangan terdokumentasi." } },
  { name: "Pak Hendra", role: "farmer", crop: "Chilli", province: "West Java", quote: { en: "My grade-A chilli went up noticeably with ENDOPAMA. Less disease, better looking fruit at market.", id: "Cabai grade-A saya naik jelas dengan ENDOPAMA. Penyakit berkurang, buah lebih bagus di pasar." } },
];
