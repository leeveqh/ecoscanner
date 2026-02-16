const labelsData = [

  // ===== ПЛАСТИК =====
  { id: "PET", icon: "🥤", name: "PET (1)", category: "Пластик", safe: true, ecoScore: 4, desc: "Бутылки." },
  { id: "HDPE", icon: "🧴", name: "HDPE (2)", category: "Пластик", safe: true, ecoScore: 5, desc: "Флаконы." },
  { id: "PVC", icon: "☠️", name: "PVC (3)", category: "Пластик", safe: false, ecoScore: 1, desc: "Опасный пластик." },
  { id: "LDPE", icon: "🛍️", name: "LDPE (4)", category: "Пластик", safe: true, ecoScore: 3, desc: "Пакеты." },
  { id: "PP", icon: "🍱", name: "PP (5)", category: "Пластик", safe: true, ecoScore: 4, desc: "Контейнеры." },
  { id: "PS", icon: "📦", name: "PS (6)", category: "Пластик", safe: false, ecoScore: 2, desc: "Пенопласт." },

  // ===== МАКУЛАТУРА =====
  { id: "PAPER", icon: "📄", name: "Макулатура", category: "Бумага", safe: true, ecoScore: 5, desc: "Газеты, бумага." },
  { id: "CARDBOARD", icon: "📦", name: "Картон", category: "Бумага", safe: true, ecoScore: 5, desc: "Коробки." },

  // ===== МЕТАЛЛ =====
  { id: "METAL", icon: "🥫", name: "Металл", category: "Металл", safe: true, ecoScore: 5, desc: "Банки." },
  { id: "SCRAP", icon: "🔩", name: "Металлолом", category: "Металл", safe: true, ecoScore: 5, desc: "Лом металлов." },

  // ===== СТЕКЛО =====
  { id: "GLASS", icon: "🍾", name: "Стекло", category: "Стекло", safe: true, ecoScore: 4, desc: "Бутылки." },

  // ===== ОПАСНЫЕ =====
  { id: "BATTERY", icon: "🔋", name: "Батарейки", category: "Опасные отходы", safe: false, ecoScore: 5, desc: "Требует спец. утилизации." },
  { id: "ELECTRO", icon: "💻", name: "Электроника", category: "Опасные отходы", safe: false, ecoScore: 5, desc: "Техника и платы." }

];


const recyclePoints = [
  {
    name: "Экоцентр Абая",
    address: "Кокшетау, ул. Абая 45",
    types: ["PET","HDPE","PP","PAPER","CARDBOARD","GLASS"],
    lat: 53.283,
    lng: 69.383
  },
  {
    name: "Сбор вторсырья",
    address: "Кокшетау, ул. Ауэзова 12",
    types: ["PET","LDPE","METAL","SCRAP"],
    lat: 53.286,
    lng: 69.39
  },
  {
    name: "ЭкоПункт Центральный",
    address: "Кокшетау, мкр. Центральный",
    types: ["PET","HDPE","LDPE","PP","PAPER","GLASS","METAL"],
    lat: 53.29,
    lng: 69.37
  },
  {
    name: "Пункт приёма батареек",
    address: "Кокшетау, ТЦ Green Mall",
    types: ["BATTERY","ELECTRO"],
    lat: 53.295,
    lng: 69.375
  }
];
