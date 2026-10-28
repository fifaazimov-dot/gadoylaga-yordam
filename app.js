// TELEGRAM KONFIGURATSIYASI
const TG_BOT_TOKEN = "8746272362:AAGuDaAxP0xZXv53B3RzP1JXr3OcsJv0BJU";
const TG_CHAT_ID = "7881483007";

// MAHSULOTLAR RO'YXATI (12 TA ASOSIY TIBBIY VA SALOMATLIK TOVUSHLARI)
const products = [
  {
    id: 1,
    category: "devices",
    price: 260000,
    badge: "Bestseller",
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Omron Avtomat Raqamli Tonometr",
      ru: "Автоматический тонометр Omron",
      en: "Omron Digital Blood Pressure Monitor"
    },
    desc: {
      uz: "Yurak aritmiyasini erta aniqlovchi va xotiraga ega yuqori aniqlikdagi tonometr.",
      ru: "Высокоточный прибор с датчиком аритмии и встроенной памятью измерений.",
      en: "High-precision arm monitor featuring arrhythmia sensor and dual-user memory."
    }
  },
  {
    id: 2,
    category: "devices",
    price: 95000,
    badge: "Top",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "OLED Barmoq Pulsoksimetri",
      ru: "Пульсоксиметр с OLED экраном",
      en: "Fingertip OLED Pulse Oximeter"
    },
    desc: {
      uz: "Qondagi kislorod miqdori (SpO2) va pulsni 5 soniyada yuqori aniqlikda ko'rsatadi.",
      ru: "Мгновенное измерение сатурации кислорода в крови (SpO2) и частоты пульса.",
      en: "Instant 5-second SpO2 blood oxygen saturation and pulse rate monitor."
    }
  },
  {
    id: 3,
    category: "care",
    price: 195000,
    badge: "Zarur",
    rating: 5.0,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "To'liq Uy Shoshilinch Aptechkasi",
      ru: "Домашняя аптечка первой помощи",
      en: "Universal Emergency First Aid Kit"
    },
    desc: {
      uz: "Bint, bintlar, antiseptiklar, kuyishga qarshi vositalar va qutqaruv jildini o'z ichiga oladi.",
      ru: "Комплект для дома и авто: бинты, антисептики, жгуты и ножницы экстренной помощи.",
      en: "Compact hard-shell case packed with 45+ medical grade essentials."
    }
  },
  {
    id: 4,
    category: "vitamins",
    price: 85000,
    badge: "Eco",
    rating: 4.7,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Vitamin C 1000mg + Rux (Sink) Chelated",
      ru: "Витамин C 1000мг + Хелатный Цинк",
      en: "Vitamin C 1000mg + Zinc Chelate"
    },
    desc: {
      uz: "Mavsumiy shamollash va viruslarga qarshi organizm immunitetini mustahkamlovchi vosita.",
      ru: "Мощная поддержка иммунитета и антиоксидантная защита на каждый день.",
      en: "Daily high-potency immune support supplement with superior bioavailability."
    }
  },
  {
    id: 5,
    category: "ortho",
    price: 175000,
    badge: "Tavsiya",
    rating: 4.9,
    reviews: 77,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Xotirali Ortopedik Bo'yin Yostig'i",
      ru: "Анатомическая подушка Memory Foam",
      en: "Orthopedic Memory Foam Neck Pillow"
    },
    desc: {
      uz: "Bo'yin umurtqasidagi og'riqlarni kamaytiradi va chuqur oromli uyquni ta'minlaydi.",
      ru: "Обеспечивает физиологически правильное положение головы и шейного отдела.",
      en: "Ergonomic contour design for spine alignment and chronic pain relief."
    }
  },
  {
    id: 6,
    category: "devices",
    price: 135000,
    badge: "Smart",
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Infraqizil Kontaktsiz Termometr",
      ru: "Бесконтактный инфракрасный термометр",
      en: "Infrared Non-Contact Thermometer"
    },
    desc: {
      uz: "1 soniyada bolalar va kattalar tana haroratini teginmasdan xavfsiz o'lchaydi.",
      ru: "Безопасное и гигиеничное измерение температуры тела без прямого контакта.",
      en: "Rapid 1-second hygienic fever scanning with clear color-coded display."
    }
  },
  {
    id: 7,
    category: "devices",
    price: 340000,
    badge: "Mashhur",
    rating: 4.9,
    reviews: 53,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Ultrasonik Kompressorli Ingalyator (Nebulayzer)",
      ru: "Компрессорный небулайзер (Ингалятор)",
      en: "Portable Ultrasonic Mesh Nebulizer"
    },
    desc: {
      uz: "Nafas yo'llari, yo'tal va bronxit kasalliklarida dori vositalarini mayda zarrachalarga bo'lib beradi.",
      ru: "Эффективная доставка лекарств в верхние и нижние дыхательные пути.",
      en: "Targeted respiratory therapy device suitable for all ages, whisper-quiet."
    }
  },
  {
    id: 8,
    category: "vitamins",
    price: 110000,
    badge: "Premium",
    rating: 5.0,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1550572017-ed200f5e6343?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Omega-3 Baliq Moyi 1200mg (EPA / DHA)",
      ru: "Омега-3 концентрат рыбьего жира",
      en: "Ultra Pure Omega-3 Fish Oil 1200mg"
    },
    desc: {
      uz: "Yurak qon-tomir tizimi, miya faoliyati va ko'z ravshanligini qo'llab-quvvatlaydi.",
      ru: "Для здоровья сердца, сосудов, поддержки функций мозга и эластичности суставов.",
      en: "Purified molecularly distilled fish oil for optimum cardiovascular and brain health."
    }
  },
  {
    id: 9,
    category: "ortho",
    price: 115000,
    badge: "Top",
    rating: 4.6,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Aqlli Qomat To'g'rilovchi Korset (Sensori bilan)",
      ru: "Умный корректор осанки с вибрацией",
      en: "Smart Vibration Posture Corrector"
    },
    desc: {
      uz: "Bukchayganingizda tebranish berib, qomatni tekis tutishni o'rgatadi.",
      ru: "Встроенный гироскоп вибрирует при отклонении спины более чем на 25 градусов.",
      en: "Smart sensor buzzes gently when slouching beyond healthy spine posture."
    }
  },
  {
    id: 10,
    category: "care",
    price: 45000,
    badge: "Hamyonbop",
    rating: 4.9,
    reviews: 160,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Tibbiy 3 Qavatli Filtrli Niqoblar (50 dona)",
      ru: "Маски медицинские трехслойные (50 шт)",
      en: "Certified 3-Ply Medical Masks (Pack of 50)"
    },
    desc: {
      uz: "Bakteriya va changlardan 99% himoya qiluvchi qulay elastik tasmali niqoblar.",
      ru: "Мягкие гипоаллергенные маски с эффективным средним фильтрующим слоем meltblown.",
      en: "High-filtration breathable face masks with skin-friendly inner lining."
    }
  },
  {
    id: 11,
    category: "devices",
    price: 180000,
    badge: "Yangi",
    rating: 4.8,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Elektron Glyukometr (Test poloskalari bilan)",
      ru: "Глюкометр экспресс с тест-полосками",
      en: "Blood Glucose Monitoring System Kit"
    },
    desc: {
      uz: "Qondagi qand miqdorini uy sharoitida 5 soniyada xatosiz tekshiruvchi apparat.",
      ru: "Быстрое и безболезненное определение уровня сахара в капиллярной крови.",
      en: "Convenient at-home blood sugar monitor with automatic calibration."
    }
  },
  {
    id: 12,
    category: "vitamins",
    price: 95000,
    badge: "Muhim",
    rating: 4.9,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=600&auto=format&fit=crop&q=80",
    name: {
      uz: "Magniy B6 Anti-Stress Kompleksi",
      ru: "Магний B6 Антистресс Комплекс",
      en: "Magnesium B6 Stress & Sleep Complex"
    },
    desc: {
      uz: "Asab tizimini tinchlantirish, uyqu sifatini yaxshilash va mushak tortishishlariga qarshi.",
      ru: "Снижает раздражительность, нормализует сон и снимает мышечные спазмы.",
      en: "Synergistic blend reducing fatigue and promoting restorative nervous system balance."
    }
  }
];

// TARJIMALAR KUTUBXONASI (UZ / RU / EN)
const i18n = {
  uz: {
    home: "Bosh sahifa",
    products: "Mahsulotlar",
    favorites: "Saralanganlar",
    cart: "Savatcha",
    about: "Biz haqimizda",
    heroTitle: "Sog'liqni Saqlash — Har Bir Xonadon Uchun Qulay va Ishonchli",
    heroSub: "Sertifikatlangan tibbiy buyumlar, oilaviy parvarish vositalari va vitaminlar. Buyurtmalar zudlik bilan Telegram bot orqali operatorga yo'naltiriladi.",
    shopNow: "Katalogni ko'rish",
    exploreFeatures: "Afzalliklar",
    searchPlaceholder: "Mahsulot nomi yoki xususiyati bo'yicha qidiring...",
    allCategories: "Barchasi",
    catDevices: "Tibbiy Apparatlar",
    catVitamins: "Vitamin va Qo'shimchalar",
    catCare: "Uy Aptechkasi va Parvarish",
    catOrtho: "Ortopediya",
    sortDefault: "Saralash: Standart",
    sortPriceAsc: "Narx: Avval arzonlari",
    sortPriceDesc: "Narx: Avval qimmatlari",
    addToCart: "Savatga qo'shish",
    addedToCart: "Savatga qo'shildi!",
    cartEmpty: "Savatchangiz hozircha bo'sh",
    favEmpty: "Saralangan mahsulotlar mavjud emas",
    total: "Jami to'lov:",
    checkoutTitle: "Buyurtmani Rasmiylashtirish",
    namePlaceholder: "To'liq ism-familiyangiz",
    phonePlaceholder: "+998 (90) 123-45-67",
    addressPlaceholder: "Shahar, tuman, ko'cha va uy raqami",
    paymentMethod: "To'lov turi",
    payCash: "Yetkazilganda naqd / karta",
    payClick: "Click / Payme (Online)",
    deliveryNotes: "Yetkazib berish bo'yicha qo'shimcha izoh",
    submitOrder: "Buyurtmani Tasdiqlash (Telegram Bot)",
    orderSuccess: "Buyurtmangiz muvaffaqiyatli qabul qilindi va Telegram botga yuborildi! Tez orada operatorimiz bog'lanadi.",
    orderFail: "Buyurtma yuborishda xatolik yuz berdi. Iltimos qayta urinib ko'ring.",
    currency: "so'm",
    reviewsCount: "ta xaridor bahosi",
    clearCart: "Savatni tozalash",
    addAllFavsToCart: "Barchasini savatga o'tkazish"
  },
  ru: {
    home: "Главная",
    products: "Каталог",
    favorites: "Избранное",
    cart: "Корзина",
    about: "О нас",
    heroTitle: "Забота о здоровье — Доступно и Надежно для Каждого",
    heroSub: "Сертифицированная медицинская техника, витамины и товары первой помощи. Заказы мгновенно поступают прямо в Telegram-бот администратора.",
    shopNow: "Перейти в каталог",
    exploreFeatures: "Преимущества",
    searchPlaceholder: "Поиск по названию или описанию...",
    allCategories: "Все категории",
    catDevices: "Медицинские приборы",
    catVitamins: "Витамины и добавки",
    catCare: "Аптечка и уход",
    catOrtho: "Ортопедия",
    sortDefault: "Сортировка: По умолчанию",
    sortPriceAsc: "Цена: Сначала дешевле",
    sortPriceDesc: "Цена: Сначала дороже",
    addToCart: "В корзину",
    addedToCart: "Добавлено в корзину!",
    cartEmpty: "Ваша корзина пока пуста",
    favEmpty: "В избранном пока нет товаров",
    total: "Итого к оплате:",
    checkoutTitle: "Оформление заказа",
    namePlaceholder: "Ваше полное имя",
    phonePlaceholder: "+998 (90) 123-45-67",
    addressPlaceholder: "Город, район, улица и дом",
    paymentMethod: "Способ оплаты",
    payCash: "При получении (Наличные / Терминал)",
    payClick: "Click / Payme (Онлайн)",
    deliveryNotes: "Комментарий к доставке (ориентир, подъезд)",
    submitOrder: "Подтвердить заказ (Telegram)",
    orderSuccess: "Ваш заказ успешно оформлен и передан в Telegram! Мы скоро свяжемся с вами.",
    orderFail: "Ошибка при отправке заказа в Telegram. Попробуйте еще раз.",
    currency: "сум",
    reviewsCount: "отзывов",
    clearCart: "Очистить корзину",
    addAllFavsToCart: "Добавить все в корзину"
  },
  en: {
    home: "Home",
    products: "Products",
    favorites: "Wishlist",
    cart: "Cart",
    about: "About Us",
    heroTitle: "Your Health & Wellness — Trusted Care Delivered to Your Home",
    heroSub: "Certified medical devices, wellness supplements, and first aid solutions. Direct, automated Telegram order processing.",
    shopNow: "Browse Catalog",
    exploreFeatures: "Key Benefits",
    searchPlaceholder: "Search by medical equipment, vitamins...",
    allCategories: "All Products",
    catDevices: "Medical Devices",
    catVitamins: "Vitamins & Minerals",
    catCare: "First Aid & Home Care",
    catOrtho: "Orthopedics",
    sortDefault: "Sort: Default",
    sortPriceAsc: "Price: Low to High",
    sortPriceDesc: "Price: High to Low",
    addToCart: "Add to Cart",
    addedToCart: "Added to Cart!",
    cartEmpty: "Your cart is currently empty",
    favEmpty: "Your wishlist is empty",
    total: "Order Total:",
    checkoutTitle: "Fast Checkout",
    namePlaceholder: "Full Name",
    phonePlaceholder: "+998 (90) 123-45-67",
    addressPlaceholder: "City, district, street, apt #",
    paymentMethod: "Payment Method",
    payCash: "Cash / Card on Delivery",
    payClick: "Click / Payme (Online)",
    deliveryNotes: "Additional delivery notes or landmarks",
    submitOrder: "Complete Order (Telegram Bot)",
    orderSuccess: "Your order was successfully sent to the Telegram bot! Our team will contact you shortly.",
    orderFail: "An error occurred while transmitting to Telegram.",
    currency: "UZS",
    reviewsCount: "reviews",
    clearCart: "Empty Cart",
    addAllFavsToCart: "Move all to cart"
  }
};

// STORAGE HOLATI
let currentLang = localStorage.getItem("medhelp_lang") || "uz";
let cart = JSON.parse(localStorage.getItem("medhelp_cart") || "[]");
let favorites = JSON.parse(localStorage.getItem("medhelp_favs") || "[]");

// THEME (DARK / LIGHT)
function initTheme() {
  const isDark = localStorage.getItem("medhelp_theme") === "dark";
  document.body.classList.toggle("dark", isDark);
  updateThemeIcon(isDark);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("medhelp_theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const btn = document.getElementById("themeToggleBtn");
  if (btn) {
    btn.innerHTML = isDark 
      ? '<i class="fas fa-sun text-amber-400 text-lg"></i>' 
      : '<i class="fas fa-moon text-slate-700 text-lg"></i>';
  }
}

// TOAST XABARNOMA
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "fixed bottom-6 right-6 z-50 bg-teal-600 text-white px-5 py-3 rounded-xl shadow-2xl font-semibold flex items-center gap-3";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fas fa-check-circle text-lg"></i> <span>${message}</span>`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

// TIL ALMASHTIRISH
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("medhelp_lang", lang);
  applyTranslations();
  updateBadges();
  if (window.renderPageContent) window.renderPageContent();
}

function applyTranslations() {
  const t = i18n[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });
  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = currentLang;
}

// BADGE VA SAVAT METRIKALARI
function updateBadges() {
  const cartBadge = document.getElementById("cartCount");
  const favBadge = document.getElementById("favCount");
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cartBadge) cartBadge.textContent = totalCount;
  if (favBadge) favBadge.textContent = favorites.length;
}

// SAVAT FUNKSIYALARI
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  localStorage.setItem("medhelp_cart", JSON.stringify(cart));
  updateBadges();
  showToast(i18n[currentLang].addedToCart);
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  localStorage.setItem("medhelp_cart", JSON.stringify(cart));
  updateBadges();
  if (window.renderCartPage) window.renderCartPage();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem("medhelp_cart", JSON.stringify(cart));
  updateBadges();
  if (window.renderCartPage) window.renderCartPage();
}

function clearCart() {
  if (confirm(currentLang === 'uz' ? "Savatni tozalashni xohlaysizmi?" : "Очистить корзину?")) {
    cart = [];
    localStorage.setItem("medhelp_cart", JSON.stringify(cart));
    updateBadges();
    if (window.renderCartPage) window.renderCartPage();
  }
}

// SEVIMLILAR FUNKSIYALARI
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
    showToast(currentLang === 'uz' ? "Sevimlilarga qo'shildi" : "Добавлено в избранное");
  }
  localStorage.setItem("medhelp_favs", JSON.stringify(favorites));
  updateBadges();
  if (window.renderProductsPage) window.renderProductsPage();
  if (window.renderFavoritesPage) window.renderFavoritesPage();
}

function moveAllFavoritesToCart() {
  favorites.forEach(id => {
    if (!cart.some(c => c.id === id)) {
      cart.push({ id, qty: 1 });
    }
  });
  localStorage.setItem("medhelp_cart", JSON.stringify(cart));
  updateBadges();
  showToast(currentLang === 'uz' ? "Barcha sevimlilar savatga o'tkazildi!" : "Все товары перенесены в корзину!");
}

// TELEGRAM BOTGA BUYURTMA YUBORISH (ADVANCED FORMATTING)
async function submitOrderToTelegram(event) {
  event.preventDefault();
  if (cart.length === 0) {
    alert(i18n[currentLang].cartEmpty);
    return;
  }

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const payment = document.getElementById("custPayment").value;
  const notes = document.getElementById("custNotes") ? document.getElementById("custNotes").value.trim() : "";

  let totalSum = 0;
  let itemsListMarkdown = "";

  cart.forEach((item, index) => {
    const prod = products.find(p => p.id === item.id);
    if (prod) {
      const lineTotal = prod.price * item.qty;
      totalSum += lineTotal;
      itemsListMarkdown += `${index + 1}. *${prod.name[currentLang]}*\n   ├ Soni: ${item.qty} dona\n   └ Narxi: ${lineTotal.toLocaleString()} so'm\n`;
    }
  });

  const orderId = "MD-" + Math.floor(100000 + Math.random() * 900000);

  const telegramMessage = 
`🔔 *YANGI TIBBIY BUYURTMA #${orderId}*
━━━━━━━━━━━━━━━━━━━━
👤 *Mijoz:* ${name}
📞 *Telefon:* ${phone}
📍 *Manzil:* ${address}
💳 *To'lov usuli:* ${payment}
${notes ? `📝 *Izoh:* ${notes}\n` : ''}
📦 *BUYURTMA TARKIBI:*
${itemsListMarkdown}
━━━━━━━━━━━━━━━━━━━━
💰 *JAMI SUMMA:* *${totalSum.toLocaleString()} ${i18n[currentLang].currency}*
🌐 *Buyurtma tili:* ${currentLang.toUpperCase()}
⏰ *Sana:* ${new Date().toLocaleString('uz-UZ')}
━━━━━━━━━━━━━━━━━━━━
_MedHelp Pro avtomatlashtirilgan veb-tizimi_`;

  const btn = document.getElementById("submitOrderBtn");
  const originalHtml = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Telegramga yuborilmoqda...`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: telegramMessage,
        parse_mode: "Markdown"
      })
    });

    const resData = await response.json();
    if (resData.ok) {
      alert(`✅ ${i18n[currentLang].orderSuccess}\nBuyurtma raqamingiz: ${orderId}`);
      cart = [];
      localStorage.setItem("medhelp_cart", JSON.stringify(cart));
      updateBadges();
      window.location.href = "index.html";
    } else {
      throw new Error(resData.description || "Telegram API rad etdi");
    }
  } catch (err) {
    console.error("Xatolik:", err);
    alert(`${i18n[currentLang].orderFail}\nSabab: ${err.message}`);
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalHtml;
  }
}

// SAHIFA ISHGA TUSHGANDA
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  applyTranslations();
  updateBadges();

  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => setLanguage(e.target.value));
  }
});