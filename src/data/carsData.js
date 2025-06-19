// Client-side car data - complete database replacement
import fordImage from "../image/fo.png";
import hyundaiImage from "../image/ho.png";
import chevroletImage from "../image/sh.png";
import toyotaImage from "../image/to.png";
import peugeotImage from "../image/peugeot-new.svg";
import bmwImage from "../image/bmw-logo.svg";
import mercedesImage from "../image/mercedes-new.svg";
import audiImage from "../image/audi-new.svg";
import car1Image from "../image/car1.png";
import car2Image from "../image/car2.png";
import car3Image from "../image/car3.png";
import car4Image from "../image/car4.png";
import car5Image from "../image/car5.png";
import car6Image from "../image/car6.png";
import car7Image from "../image/car7.png";
import car8Image from "../image/car8.png";

// Import specific car model images
import fordTransit2021 from "../image/ford_transit_2021.jpg";
import bmwX52023 from "../image/bmw_x5_2023.jpg";
import bmw3Series2022 from "../image/bmw_3_series_2022.jpg";
import toyotaCamry2022 from "../image/toyota_camry_2022.jpg";
import chevroletCamaro2021 from "../image/chevrolet_camaro_2021.jpg";
import mercedesCClass2021 from "../image/mercedes_c_class_2021.jpg";
import mercedesGLC2022 from "../image/mercedes_glc_2022.jpg";
import toyotaRAV42023 from "../image/toyota_rav4_2023.jpg";
import mercedesGLCSecondary from "../image/mercedes_glc_secondary.jpg";

// Brand data with logos
export const BRANDS = {
  1: {
    id: 1,
    name: "Ford",
    nameAr: "فورد",
    logo: fordImage,
    description: "American automotive manufacturer",
    descriptionAr: "شركة سيارات أمريكية",
  },
  2: {
    id: 2,
    name: "Chevrolet",
    nameAr: "شيفروليه",
    logo: chevroletImage,
    description: "American automobile division of General Motors",
    descriptionAr: "قسم السيارات الأمريكي لشركة جنرال موتورز",
  },
  3: {
    id: 3,
    name: "BMW",
    nameAr: "بي ام دبليو",
    logo: bmwImage,
    description: "German luxury vehicle manufacturer",
    descriptionAr: "شركة سيارات فاخرة ألمانية",
  },
  4: {
    id: 4,
    name: "Mercedes-Benz",
    nameAr: "مرسيدس بنز",
    logo: mercedesImage,
    description: "German luxury automotive brand",
    descriptionAr: "علامة تجارية ألمانية للسيارات الفاخرة",
  },
  5: {
    id: 5,
    name: "Hyundai",
    nameAr: "هيونداي",
    logo: hyundaiImage,
    description: "South Korean automotive manufacturer",
    descriptionAr: "شركة سيارات كورية جنوبية",
  },
  6: {
    id: 6,
    name: "Toyota",
    nameAr: "تويوتا",
    logo: toyotaImage,
    description: "Japanese automotive manufacturer",
    descriptionAr: "شركة سيارات يابانية",
  },
  7: {
    id: 7,
    name: "Peugeot",
    nameAr: "بيجو",
    logo: peugeotImage,
    description: "French automotive manufacturer",
    descriptionAr: "شركة سيارات فرنسية",
  },
  8: {
    id: 8,
    name: "Audi",
    nameAr: "أودي",
    logo: audiImage,
    description: "German luxury automotive brand",
    descriptionAr: "علامة تجارية ألمانية للسيارات الفاخرة",
  },
};

// Car models for each brand
export const MODELS = {
  1: [
    // Ford
    { id: 101, name: "Transit", nameAr: "ترانزيت", brandId: 1 },
    { id: 102, name: "Focus", nameAr: "فوكوس", brandId: 1 },
    { id: 103, name: "Mustang", nameAr: "موستانغ", brandId: 1 },
    { id: 104, name: "Explorer", nameAr: "إكسبلورر", brandId: 1 },
  ],
  2: [
    // Chevrolet
    { id: 201, name: "Camaro", nameAr: "كامارو", brandId: 2 },
    { id: 202, name: "Tahoe", nameAr: "تاهو", brandId: 2 },
    { id: 203, name: "Malibu", nameAr: "ماليبو", brandId: 2 },
    { id: 204, name: "Suburban", nameAr: "سوبربان", brandId: 2 },
  ],
  3: [
    // BMW
    { id: 301, name: "X5", nameAr: "إكس 5", brandId: 3 },
    { id: 302, name: "3 Series", nameAr: "الفئة الثالثة", brandId: 3 },
    { id: 303, name: "5 Series", nameAr: "الفئة الخامسة", brandId: 3 },
    { id: 304, name: "X3", nameAr: "إكس 3", brandId: 3 },
  ],
  4: [
    // Mercedes-Benz
    { id: 401, name: "C-Class", nameAr: "الفئة C", brandId: 4 },
    { id: 402, name: "E-Class", nameAr: "الفئة E", brandId: 4 },
    { id: 403, name: "GLC", nameAr: "جي إل سي", brandId: 4 },
    { id: 404, name: "S-Class", nameAr: "الفئة S", brandId: 4 },
  ],
  5: [
    // Hyundai
    { id: 501, name: "Elantra", nameAr: "النترا", brandId: 5 },
    { id: 502, name: "Sonata", nameAr: "سوناتا", brandId: 5 },
    { id: 503, name: "Tucson", nameAr: "توكسون", brandId: 5 },
    { id: 504, name: "Santa Fe", nameAr: "سانتا في", brandId: 5 },
  ],
  6: [
    // Toyota
    { id: 601, name: "Camry", nameAr: "كامري", brandId: 6 },
    { id: 602, name: "Corolla", nameAr: "كورولا", brandId: 6 },
    { id: 603, name: "RAV4", nameAr: "راف 4", brandId: 6 },
    { id: 604, name: "Highlander", nameAr: "هايلاندر", brandId: 6 },
  ],
  7: [
    // Peugeot
    { id: 701, name: "208", nameAr: "208", brandId: 7 },
    { id: 702, name: "308", nameAr: "308", brandId: 7 },
    { id: 703, name: "3008", nameAr: "3008", brandId: 7 },
    { id: 704, name: "5008", nameAr: "5008", brandId: 7 },
  ],
  8: [
    // Audi
    { id: 801, name: "A4", nameAr: "إيه 4", brandId: 8 },
    { id: 802, name: "A6", nameAr: "إيه 6", brandId: 8 },
    { id: 803, name: "Q5", nameAr: "كيو 5", brandId: 8 },
    { id: 804, name: "Q7", nameAr: "كيو 7", brandId: 8 },
  ],
};

// Comprehensive car data
export const CARS = [
  // Ford Cars
  {
    id: 1,
    name: "Ford Transit 2021",
    nameAr: "فورد ترانزيت 2021",
    brandId: 1,
    modelId: 101,
    year: 2021,
    price: 22000,
    currency: "USD",
    mileage: 45000,
    condition: "Excellent",
    conditionAr: "ممتاز",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Manual",
    transmissionAr: "يدوي",
    color: "White",
    colorAr: "أبيض",
    bodyType: "Van",
    bodyTypeAr: "فان",
    engineCapacity: "2.0L",
    seats: 8,
    doors: 4,
    images: [fordTransit2021, car2Image],
    description: "Reliable commercial van perfect for business use",
    descriptionAr: "فان تجاري موثوق مثالي للاستخدام التجاري",
    features: ["Air Conditioning", "Power Steering", "ABS", "Airbags"],
    featuresAr: ["تكييف هواء", "مقود معزز", "مكابح ABS", "وسائد هوائية"],
    isAvailable: true,
    location: "Riyadh",
    locationAr: "الرياض",
    seller: {
      name: "Ahmed Al-Rashid",
      nameAr: "أحمد الراشد",
      phone: "+966501234567",
      rating: 4.8,
    },
  },
  {
    id: 2,
    name: "Ford Focus 2022",
    nameAr: "فورد فوكوس 2022",
    brandId: 1,
    modelId: 102,
    year: 2022,
    price: 18500,
    currency: "USD",
    mileage: 25000,
    condition: "Very Good",
    conditionAr: "جيد جداً",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Blue",
    colorAr: "أزرق",
    bodyType: "Sedan",
    bodyTypeAr: "سيدان",
    engineCapacity: "1.6L",
    seats: 5,
    doors: 4,
    images: [car2Image, car3Image],
    description: "Compact and fuel-efficient sedan perfect for city driving",
    descriptionAr: "سيدان مدمجة واقتصادية في الوقود مثالية لقيادة المدينة",
    features: ["Bluetooth", "Cruise Control", "Backup Camera", "USB Port"],
    featuresAr: ["بلوتوث", "مثبت سرعة", "كاميرا خلفية", "منفذ USB"],
    isAvailable: true,
    location: "Dammam",
    locationAr: "الدمام",
    seller: {
      name: "Mohammed Al-Sayed",
      nameAr: "محمد السيد",
      phone: "+966502345678",
      rating: 4.5,
    },
  },

  // Chevrolet Cars
  {
    id: 3,
    name: "Chevrolet Camaro 2021",
    nameAr: "شيفروليه كامارو 2021",
    brandId: 2,
    modelId: 201,
    year: 2021,
    price: 35000,
    currency: "USD",
    mileage: 15000,
    condition: "Excellent",
    conditionAr: "ممتاز",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Manual",
    transmissionAr: "يدوي",
    color: "Red",
    colorAr: "أحمر",
    bodyType: "Coupe",
    bodyTypeAr: "كوبيه",
    engineCapacity: "6.2L V8",
    seats: 4,
    doors: 2,
    images: [chevroletCamaro2021, car4Image],
    description: "Powerful sports car with aggressive styling",
    descriptionAr: "سيارة رياضية قوية بتصميم عدواني",
    features: [
      "Performance Mode",
      "Racing Stripes",
      "Sport Exhaust",
      "Premium Audio",
    ],
    featuresAr: [
      "وضع الأداء",
      "خطوط السباق",
      "العادم الرياضي",
      "نظام صوتي متميز",
    ],
    isAvailable: true,
    location: "Jeddah",
    locationAr: "جدة",
    seller: {
      name: "Omar Al-Harbi",
      nameAr: "عمر الحربي",
      phone: "+966503456789",
      rating: 4.9,
    },
  },
  {
    id: 4,
    name: "Chevrolet Tahoe 2022",
    nameAr: "شيفروليه تاهو 2022",
    brandId: 2,
    modelId: 202,
    year: 2022,
    price: 48000,
    currency: "USD",
    mileage: 8000,
    condition: "Like New",
    conditionAr: "كالجديد",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Black",
    colorAr: "أسود",
    bodyType: "SUV",
    bodyTypeAr: "دفع رباعي",
    engineCapacity: "5.3L V8",
    seats: 8,
    doors: 4,
    images: [car4Image, car5Image],
    description: "Full-size SUV perfect for families",
    descriptionAr: "دفع رباعي بحجم كامل مثالي للعائلات",
    features: [
      "Third Row Seating",
      "Towing Package",
      "Entertainment System",
      "Leather Seats",
    ],
    featuresAr: [
      "مقاعد الصف الثالث",
      "حزمة القطر",
      "نظام ترفيهي",
      "مقاعد جلدية",
    ],
    isAvailable: true,
    location: "Riyadh",
    locationAr: "الرياض",
    seller: {
      name: "Fahad Al-Qahtani",
      nameAr: "فهد القحطاني",
      phone: "+966504567890",
      rating: 4.7,
    },
  },

  // BMW Cars
  {
    id: 5,
    name: "BMW X5 2023",
    nameAr: "بي ام دبليو إكس 5 2023",
    brandId: 3,
    modelId: 301,
    year: 2023,
    price: 65000,
    currency: "USD",
    mileage: 12500,
    condition: "Like New",
    conditionAr: "كالجديد",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Silver",
    colorAr: "فضي",
    bodyType: "SUV",
    bodyTypeAr: "دفع رباعي",
    engineCapacity: "3.0L Turbo",
    seats: 5,
    doors: 4,
    images: [bmwX52023, car5Image],
    description: "Luxury SUV with advanced technology",
    descriptionAr: "سيارة دفع رباعي فاخرة بتقنية متطورة",
    features: [
      "iDrive System",
      "Panoramic Roof",
      "Adaptive Cruise Control",
      "Premium Leather",
    ],
    featuresAr: ["نظام آي درايف", "سقف بانورامي", "مثبت سرعة ذكي", "جلد فاخر"],
    isAvailable: true,
    location: "Jeddah",
    locationAr: "جدة",
    seller: {
      name: "Khalid Al-Mutairi",
      nameAr: "خالد المطيري",
      phone: "+966505678901",
      rating: 4.8,
    },
  },
  {
    id: 6,
    name: "BMW 3 Series 2022",
    nameAr: "بي ام دبليو الفئة الثالثة 2022",
    brandId: 3,
    modelId: 302,
    year: 2022,
    price: 42000,
    currency: "USD",
    mileage: 18000,
    condition: "Excellent",
    conditionAr: "ممتاز",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "White",
    colorAr: "أبيض",
    bodyType: "Sedan",
    bodyTypeAr: "سيدان",
    engineCapacity: "2.0L Turbo",
    seats: 5,
    doors: 4,
    images: [bmw3Series2022, car7Image],
    description: "Sport luxury sedan with excellent performance",
    descriptionAr: "سيدان رياضية فاخرة بأداء ممتاز",
    features: [
      "Sport Package",
      "Navigation",
      "Heated Seats",
      "Wireless Charging",
    ],
    featuresAr: ["حزمة رياضية", "نظام ملاحة", "مقاعد مدفأة", "شحن لاسلكي"],
    isAvailable: true,
    location: "Khobar",
    locationAr: "الخبر",
    seller: {
      name: "Saud Al-Dosari",
      nameAr: "سعود الدوسري",
      phone: "+966506789012",
      rating: 4.6,
    },
  },

  // Mercedes-Benz Cars
  {
    id: 7,
    name: "Mercedes-Benz C-Class 2023",
    nameAr: "مرسيدس بنز الفئة C 2023",
    brandId: 4,
    modelId: 401,
    year: 2023,
    price: 45000,
    currency: "USD",
    mileage: 8500,
    condition: "Like New",
    conditionAr: "كالجديد",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Gray",
    colorAr: "رمادي",
    bodyType: "Sedan",
    bodyTypeAr: "سيدان",
    engineCapacity: "2.0L Turbo",
    seats: 5,
    doors: 4,
    images: [car7Image, car8Image],
    description: "Luxury sedan with cutting-edge technology",
    descriptionAr: "سيدان فاخرة بتقنية متطورة",
    features: [
      "MBUX System",
      "AMG Package",
      "Burmester Audio",
      "Massage Seats",
    ],
    featuresAr: ["نظام MBUX", "حزمة AMG", "نظام صوتي بورمستر", "مقاعد تدليك"],
    isAvailable: true,
    location: "Riyadh",
    locationAr: "الرياض",
    seller: {
      name: "Nasser Al-Shammari",
      nameAr: "ناصر الشمري",
      phone: "+966507890123",
      rating: 4.9,
    },
  },
  {
    id: 8,
    name: "Mercedes-Benz GLC 2022",
    nameAr: "مرسيدس بنز جي إل سي 2022",
    brandId: 4,
    modelId: 403,
    year: 2022,
    price: 52000,
    currency: "USD",
    mileage: 15200,
    condition: "Excellent",
    conditionAr: "ممتاز",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Blue",
    colorAr: "أزرق",
    bodyType: "SUV",
    bodyTypeAr: "دفع رباعي",
    engineCapacity: "2.0L Turbo",
    seats: 5,
    doors: 4,
    images: [mercedesGLCSecondary, mercedesGLCSecondary],
    description: "Compact luxury SUV with advanced safety features",
    descriptionAr: "دفع رباعي فاخر مدمج بميزات أمان متقدمة",
    features: [
      "Pre-Safe System",
      "Air Suspension",
      "360 Camera",
      "Premium Interior",
    ],
    featuresAr: [
      "نظام السلامة المسبق",
      "تعليق هوائي",
      "كاميرا 360",
      "تصميم داخلي متميز",
    ],
    isAvailable: true,
    location: "Dammam",
    locationAr: "الدمام",
    seller: {
      name: "Ali Al-Ghamdi",
      nameAr: "علي الغامدي",
      phone: "+966508901234",
      rating: 4.7,
    },
  },

  // Hyundai Cars
  {
    id: 9,
    name: "Hyundai Elantra 2022",
    nameAr: "هيونداي النترا 2022",
    brandId: 5,
    modelId: 501,
    year: 2022,
    price: 16500,
    currency: "USD",
    mileage: 22000,
    condition: "Very Good",
    conditionAr: "جيد جداً",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "CVT",
    transmissionAr: "CVT",
    color: "Silver",
    colorAr: "فضي",
    bodyType: "Sedan",
    bodyTypeAr: "سيدان",
    engineCapacity: "2.0L",
    seats: 5,
    doors: 4,
    images: [car2Image, car3Image],
    description: "Reliable and fuel-efficient compact sedan",
    descriptionAr: "سيدان مدمجة موثوقة واقتصادية في الوقود",
    features: [
      "SmartSense Safety",
      "Apple CarPlay",
      "Wireless Phone Charger",
      "Digital Cluster",
    ],
    featuresAr: [
      "نظام الأمان الذكي",
      "أبل كار بلاي",
      "شاحن هاتف لاسلكي",
      "عداد رقمي",
    ],
    isAvailable: true,
    location: "Mecca",
    locationAr: "مكة",
    seller: {
      name: "Ibrahim Al-Zahrani",
      nameAr: "إبراهيم الزهراني",
      phone: "+966509012345",
      rating: 4.4,
    },
  },
  {
    id: 10,
    name: "Hyundai Tucson 2023",
    nameAr: "هيونداي توكسون 2023",
    brandId: 5,
    modelId: 503,
    year: 2023,
    price: 28000,
    currency: "USD",
    mileage: 5000,
    condition: "Like New",
    conditionAr: "كالجديد",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Red",
    colorAr: "أحمر",
    bodyType: "SUV",
    bodyTypeAr: "دفع رباعي",
    engineCapacity: "2.5L",
    seats: 5,
    doors: 4,
    images: [car4Image, car5Image],
    description: "Modern compact SUV with bold design",
    descriptionAr: "دفع رباعي مدمج حديث بتصميم جريء",
    features: [
      "Panoramic Sunroof",
      "Bose Audio",
      "Highway Assist",
      "Remote Start",
    ],
    featuresAr: [
      "فتحة سقف بانورامية",
      "نظام صوتي بوز",
      "مساعد الطريق السريع",
      "تشغيل عن بعد",
    ],
    isAvailable: true,
    location: "Taif",
    locationAr: "الطائف",
    seller: {
      name: "Yousef Al-Malki",
      nameAr: "يوسف المالكي",
      phone: "+966500123456",
      rating: 4.6,
    },
  },

  // Toyota Cars
  {
    id: 11,
    name: "Toyota Camry 2022",
    nameAr: "تويوتا كامري 2022",
    brandId: 6,
    modelId: 601,
    year: 2022,
    price: 24000,
    currency: "USD",
    mileage: 18500,
    condition: "Excellent",
    conditionAr: "ممتاز",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Black",
    colorAr: "أسود",
    bodyType: "Sedan",
    bodyTypeAr: "سيدان",
    engineCapacity: "2.5L",
    seats: 5,
    doors: 4,
    images: [toyotaCamry2022, car7Image],
    description: "Mid-size sedan known for reliability and comfort",
    descriptionAr: "سيدان متوسطة الحجم معروفة بالموثوقية والراحة",
    features: [
      "Toyota Safety Sense",
      "JBL Audio",
      "Wireless Charging",
      "Dual-Zone Climate",
    ],
    featuresAr: [
      "نظام الأمان تويوتا",
      "نظام صوتي JBL",
      "شحن لاسلكي",
      "تكييف منطقتين",
    ],
    isAvailable: true,
    location: "Medina",
    locationAr: "المدينة",
    seller: {
      name: "Hassan Al-Otaibi",
      nameAr: "حسن العتيبي",
      phone: "+966501234560",
      rating: 4.8,
    },
  },
  {
    id: 12,
    name: "Toyota RAV4 2023",
    nameAr: "تويوتا راف 4 2023",
    brandId: 6,
    modelId: 603,
    year: 2023,
    price: 32000,
    currency: "USD",
    mileage: 7500,
    condition: "Like New",
    conditionAr: "كالجديد",
    fuelType: "Hybrid",
    fuelTypeAr: "هايبرد",
    transmission: "CVT",
    transmissionAr: "CVT",
    color: "White",
    colorAr: "أبيض",
    bodyType: "SUV",
    bodyTypeAr: "دفع رباعي",
    engineCapacity: "2.5L Hybrid",
    seats: 5,
    doors: 4,
    images: [toyotaRAV42023, car8Image],
    description: "Fuel-efficient hybrid SUV perfect for adventures",
    descriptionAr: "دفع رباعي هايبرد اقتصادي في الوقود مثالي للمغامرات",
    features: [
      "All-Wheel Drive",
      "Toyota Hybrid System",
      "Trail Mode",
      "Power Liftgate",
    ],
    featuresAr: [
      "دفع رباعي",
      "نظام تويوتا الهايبرد",
      "وضع الطرق الوعرة",
      "باب خلفي كهربائي",
    ],
    isAvailable: true,
    location: "Abha",
    locationAr: "أبها",
    seller: {
      name: "Turki Al-Asiri",
      nameAr: "تركي العسيري",
      phone: "+966502345670",
      rating: 4.9,
    },
  },

  // Peugeot Cars
  {
    id: 13,
    name: "Peugeot 308 2022",
    nameAr: "بيجو 308 2022",
    brandId: 7,
    modelId: 702,
    year: 2022,
    price: 19500,
    currency: "USD",
    mileage: 14000,
    condition: "Very Good",
    conditionAr: "جيد جداً",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Blue",
    colorAr: "أزرق",
    bodyType: "Hatchback",
    bodyTypeAr: "هاتشباك",
    engineCapacity: "1.6L Turbo",
    seats: 5,
    doors: 5,
    images: [car2Image, car4Image],
    description: "Stylish French hatchback with excellent fuel economy",
    descriptionAr: "هاتشباك فرنسية أنيقة باقتصاد ممتاز في الوقود",
    features: [
      "i-Cockpit",
      "LED Headlights",
      "Lane Assist",
      "Auto Emergency Braking",
    ],
    featuresAr: [
      "آي كوكبيت",
      "مصابيح LED",
      "مساعد المسار",
      "فرامل طوارئ تلقائية",
    ],
    isAvailable: true,
    location: "Jubail",
    locationAr: "الجبيل",
    seller: {
      name: "Rayan Al-Harbi",
      nameAr: "ريان الحربي",
      phone: "+966503456780",
      rating: 4.3,
    },
  },
  {
    id: 14,
    name: "Peugeot 3008 2023",
    nameAr: "بيجو 3008 2023",
    brandId: 7,
    modelId: 703,
    year: 2023,
    price: 29000,
    currency: "USD",
    mileage: 6000,
    condition: "Like New",
    conditionAr: "كالجديد",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Gray",
    colorAr: "رمادي",
    bodyType: "SUV",
    bodyTypeAr: "دفع رباعي",
    engineCapacity: "1.6L Turbo",
    seats: 5,
    doors: 5,
    images: [car3Image, car6Image],
    description: "Compact SUV with distinctive French design",
    descriptionAr: "دفع رباعي مدمج بتصميم فرنسي مميز",
    features: [
      "Peugeot i-Cockpit",
      "Panoramic Roof",
      "Grip Control",
      "360° Camera",
    ],
    featuresAr: ["بيجو آي كوكبيت", "سقف بانورامي", "تحكم بالجر", "كاميرا 360"],
    isAvailable: true,
    location: "Buraidah",
    locationAr: "بريدة",
    seller: {
      name: "Majed Al-Rasheed",
      nameAr: "ماجد الرشيد",
      phone: "+966504567890",
      rating: 4.5,
    },
  },

  // Audi Cars
  {
    id: 15,
    name: "Audi A4 2022",
    nameAr: "أودي إيه 4 2022",
    brandId: 8,
    modelId: 801,
    year: 2022,
    price: 38000,
    currency: "USD",
    mileage: 16000,
    condition: "Excellent",
    conditionAr: "ممتاز",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Silver",
    colorAr: "فضي",
    bodyType: "Sedan",
    bodyTypeAr: "سيدان",
    engineCapacity: "2.0L Turbo",
    seats: 5,
    doors: 4,
    images: [car5Image, car7Image],
    description: "Premium luxury sedan with sophisticated technology",
    descriptionAr: "سيدان فاخرة متميزة بتقنية راقية",
    features: [
      "Audi Virtual Cockpit",
      "Quattro AWD",
      "B&O Audio",
      "Adaptive Suspension",
    ],
    featuresAr: [
      "شاشة أودي الافتراضية",
      "كواترو دفع رباعي",
      "نظام صوتي B&O",
      "تعليق تكيفي",
    ],
    isAvailable: true,
    location: "Hail",
    locationAr: "حائل",
    seller: {
      name: "Faisal Al-Tamimi",
      nameAr: "فيصل التميمي",
      phone: "+966505678901",
      rating: 4.7,
    },
  },
  {
    id: 16,
    name: "Audi Q5 2023",
    nameAr: "أودي كيو 5 2023",
    brandId: 8,
    modelId: 803,
    year: 2023,
    price: 48000,
    currency: "USD",
    mileage: 9500,
    condition: "Like New",
    conditionAr: "كالجديد",
    fuelType: "Gasoline",
    fuelTypeAr: "بنزين",
    transmission: "Automatic",
    transmissionAr: "أوتوماتيك",
    color: "Black",
    colorAr: "أسود",
    bodyType: "SUV",
    bodyTypeAr: "دفع رباعي",
    engineCapacity: "2.0L Turbo",
    seats: 5,
    doors: 4,
    images: [car8Image, car2Image],
    description: "Luxury compact SUV with exceptional build quality",
    descriptionAr: "دفع رباعي مدمج فاخر بجودة تصنيع استثنائية",
    features: [
      "Matrix LED Lights",
      "Virtual Cockpit Plus",
      "Air Suspension",
      "Bang & Olufsen",
    ],
    featuresAr: [
      "مصابيح LED ماتريكس",
      "شاشة افتراضية بلس",
      "تعليق هوائي",
      "نظام صوتي Bang & Olufsen",
    ],
    isAvailable: true,
    location: "Najran",
    locationAr: "نجران",
    seller: {
      name: "Saad Al-Dawsari",
      nameAr: "سعد الدوسري",
      phone: "+966506789012",
      rating: 4.8,
    },
  },
];

// Helper functions for data retrieval
export const getBrandById = (id) => BRANDS[id];
export const getAllBrands = () => Object.values(BRANDS);

export const getModelById = (id) => {
  for (const brandModels of Object.values(MODELS)) {
    const model = brandModels.find((model) => model.id === id);
    if (model) return model;
  }
  return null;
};

export const getModelsByBrandId = (brandId) => MODELS[brandId] || [];

export const getCarById = (id) => CARS.find((car) => car.id === id);
export const getAllCars = () => CARS;
export const getCarsByBrandId = (brandId) =>
  CARS.filter((car) => car.brandId === brandId);

export const getCarsByModelId = (modelId) =>
  CARS.filter((car) => car.modelId === modelId);

// Search functionality
export const searchCars = (query) => {
  if (!query) return [];

  const searchTerm = query.toLowerCase();
  return CARS.filter((car) => {
    const brand = getBrandById(car.brandId);
    return (
      car.name.toLowerCase().includes(searchTerm) ||
      car.nameAr.includes(searchTerm) ||
      brand?.name.toLowerCase().includes(searchTerm) ||
      brand?.nameAr.includes(searchTerm) ||
      car.color.toLowerCase().includes(searchTerm) ||
      car.colorAr.includes(searchTerm) ||
      car.bodyType.toLowerCase().includes(searchTerm) ||
      car.bodyTypeAr.includes(searchTerm) ||
      car.year.toString().includes(searchTerm)
    );
  });
};

export const searchAll = (query) => {
  if (!query) return { cars: [], brands: [] };

  const searchTerm = query.toLowerCase();

  const cars = searchCars(query);
  const brands = Object.values(BRANDS).filter(
    (brand) =>
      brand.name.toLowerCase().includes(searchTerm) ||
      brand.nameAr.includes(searchTerm)
  );

  return { cars, brands };
};
