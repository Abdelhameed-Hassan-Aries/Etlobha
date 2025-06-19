// Client-side API service - replaces all backend calls
import {
  getAllBrands,
  getBrandById,
  getAllCars,
  getCarsByBrandId,
  getCarById,
  searchCars,
  searchAll,
} from "../data/carsData";

// Simulate async operations
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

// localStorage keys
const STORAGE_KEYS = {
  USERS: "otlobha_users",
  CURRENT_USER: "otlobha_current_user",
  ORDERS: "otlobha_orders",
  JWT: "jwt",
};

// User management
const getUsersFromStorage = () => {
  const users = localStorage.getItem(STORAGE_KEYS.USERS);
  return users ? JSON.parse(users) : [];
};

const saveUsersToStorage = (users) => {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

const getCurrentUser = () => {
  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return user ? JSON.parse(user) : null;
};

const setCurrentUser = (user) => {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  localStorage.setItem(
    STORAGE_KEYS.JWT,
    JSON.stringify({
      access_token: `fake_token_${user.id}`,
      token_type: "Bearer",
      user: user,
    })
  );
};

const clearCurrentUser = () => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  localStorage.removeItem(STORAGE_KEYS.JWT);
};

// Orders management
const getOrdersFromStorage = () => {
  const orders = localStorage.getItem(STORAGE_KEYS.ORDERS);
  return orders ? JSON.parse(orders) : [];
};

const saveOrdersToStorage = (orders) => {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
};

// Authentication API
export const authAPI = {
  // Register user
  register: async (userData) => {
    await delay();

    const users = getUsersFromStorage();
    const existingUser = users.find((u) => u.phone === userData.phone);

    if (existingUser) {
      throw new Error("رقم الهاتف مسجل مسبقاً");
    }

    const newUser = {
      id: Date.now(),
      phone: userData.phone,
      password: userData.password, // In real app, this would be hashed
      name: userData.name || "مستخدم جديد",
      email: userData.email || "",
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsersToStorage(users);

    return {
      success: true,
      message: "تم إنشاء الحساب بنجاح",
      user: { ...newUser, password: undefined },
    };
  },

  // Login user
  login: async (credentials) => {
    await delay();

    const users = getUsersFromStorage();
    const user = users.find(
      (u) =>
        u.phone === credentials.phone && u.password === credentials.password
    );

    if (!user) {
      throw new Error("رقم الهاتف أو كلمة المرور غير صحيحة");
    }

    const userWithoutPassword = { ...user, password: undefined };
    setCurrentUser(userWithoutPassword);

    return {
      success: true,
      message: "تم تسجيل الدخول بنجاح",
      access_token: `fake_token_${user.id}`,
      token_type: "Bearer",
      user: userWithoutPassword,
    };
  },

  // Logout user
  logout: async () => {
    await delay();
    clearCurrentUser();
    return {
      success: true,
      message: "تم تسجيل الخروج بنجاح",
    };
  },

  // Forgot password
  forgotPassword: async (phone) => {
    await delay();

    const users = getUsersFromStorage();
    const user = users.find((u) => u.phone === phone);

    if (!user) {
      throw new Error("رقم الهاتف غير مسجل");
    }

    return {
      success: true,
      message: "تم التحقق من رقم الهاتف بنجاح",
    };
  },

  // Reset password
  resetPassword: async (resetData) => {
    await delay();

    const users = getUsersFromStorage();
    const userIndex = users.findIndex((u) => u.phone === resetData.phone);

    if (userIndex === -1) {
      throw new Error("رقم الهاتف غير مسجل");
    }

    if (resetData.password !== resetData.password_confirmation) {
      throw new Error("كلمة المرور غير متطابقة");
    }

    users[userIndex].password = resetData.password;
    saveUsersToStorage(users);

    return {
      success: true,
      message: "تم تغيير كلمة المرور بنجاح",
    };
  },
};

// Customer/Profile API
export const customerAPI = {
  // Get profile
  getProfile: async () => {
    await delay();

    const user = getCurrentUser();
    if (!user) {
      throw new Error("يجب تسجيل الدخول أولاً");
    }

    return {
      success: true,
      data: user,
    };
  },

  // Update profile
  updateProfile: async (profileData) => {
    await delay();

    const user = getCurrentUser();
    if (!user) {
      throw new Error("يجب تسجيل الدخول أولاً");
    }

    const users = getUsersFromStorage();
    const userIndex = users.findIndex((u) => u.id === user.id);

    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...profileData };
      saveUsersToStorage(users);
      setCurrentUser(users[userIndex]);
    }

    return {
      success: true,
      message: "تم تحديث الملف الشخصي بنجاح",
      data: users[userIndex],
    };
  },

  // Change password
  changePassword: async (passwordData) => {
    await delay();

    const user = getCurrentUser();
    if (!user) {
      throw new Error("يجب تسجيل الدخول أولاً");
    }

    const users = getUsersFromStorage();
    const userIndex = users.findIndex((u) => u.id === user.id);

    if (userIndex === -1) {
      throw new Error("المستخدم غير موجود");
    }

    if (users[userIndex].password !== passwordData.current_password) {
      throw new Error("كلمة المرور الحالية غير صحيحة");
    }

    if (passwordData.password !== passwordData.password_confirmation) {
      throw new Error("كلمة المرور الجديدة غير متطابقة");
    }

    users[userIndex].password = passwordData.password;
    saveUsersToStorage(users);

    return {
      success: true,
      message: "تم تغيير كلمة المرور بنجاح",
    };
  },
};

// Brands API
export const brandsAPI = {
  // Get all brands
  getAllBrands: async () => {
    await delay();

    return {
      success: true,
      data: getAllBrands(),
    };
  },

  // Get cars by brand
  getCarsByBrand: async (brandId) => {
    await delay();

    const cars = getCarsByBrandId(parseInt(brandId));
    const brand = getBrandById(parseInt(brandId));

    return {
      success: true,
      data: cars,
      brand: brand,
    };
  },
};

// Cars API
export const carsAPI = {
  // Get all cars
  getAllCars: async () => {
    await delay();

    return {
      success: true,
      data: getAllCars(),
    };
  },

  // Get car by ID
  getCarById: async (carId) => {
    await delay();

    const car = getCarById(parseInt(carId));
    if (!car) {
      throw new Error("السيارة غير موجودة");
    }

    return {
      success: true,
      data: car,
    };
  },
};

// Orders API
export const ordersAPI = {
  // Create new order
  createOrder: async (orderData) => {
    await delay();

    const user = getCurrentUser();
    if (!user) {
      throw new Error("يجب تسجيل الدخول أولاً");
    }

    const car = getCarById(orderData.carId);
    if (!car) {
      throw new Error("السيارة غير موجودة");
    }

    const orders = getOrdersFromStorage();
    const newOrder = {
      id: Date.now(),
      carId: orderData.carId,
      car: car,
      userId: user.id,
      user: user,
      paymentMethod: orderData.paymentMethod,
      amount: car.price,
      status: "pending",
      paymentStatus: "pending",
      createdAt: new Date().toISOString(),
    };

    orders.push(newOrder);
    saveOrdersToStorage(orders);

    return {
      success: true,
      message: "تم إنشاء الطلب بنجاح",
      data: newOrder,
    };
  },

  // Get order status
  getOrderStatus: async (orderId) => {
    await delay();

    const orders = getOrdersFromStorage();
    const order = orders.find((o) => o.id === parseInt(orderId));

    if (!order) {
      throw new Error("الطلب غير موجود");
    }

    return {
      success: true,
      data: order,
    };
  },

  // Get my orders
  getMyOrders: async () => {
    await delay();

    const user = getCurrentUser();
    if (!user) {
      throw new Error("يجب تسجيل الدخول أولاً");
    }

    const orders = getOrdersFromStorage();
    const userOrders = orders.filter((o) => o.userId === user.id);

    return {
      success: true,
      data: userOrders,
    };
  },
};

// Home/Search API
export const homeAPI = {
  // Search cars, brands, models, etc.
  search: async (query) => {
    await delay();

    const results = searchAll(query);

    return {
      success: true,
      data: results,
    };
  },
};

// Settings API
export const settingsAPI = {
  // Get settings
  getSettings: async () => {
    await delay();

    return {
      success: true,
      data: {
        appName: "اطلبها",
        version: "1.0.0",
        currency: "USD",
        language: "ar",
        theme: "light",
      },
    };
  },
};

// Payment API (for handling payment callbacks)
export const paymentAPI = {
  // Payment success
  paymentSuccess: async (params) => {
    await delay();

    const orderId = params.order_id;
    const orders = getOrdersFromStorage();
    const orderIndex = orders.findIndex((o) => o.id === parseInt(orderId));

    if (orderIndex !== -1) {
      orders[orderIndex].paymentStatus = "completed";
      orders[orderIndex].status = "confirmed";
      saveOrdersToStorage(orders);
    }

    return {
      success: true,
      message: "تم الدفع بنجاح",
    };
  },

  // Payment cancel
  paymentCancel: async (params) => {
    await delay();

    const orderId = params.order_id;
    const orders = getOrdersFromStorage();
    const orderIndex = orders.findIndex((o) => o.id === parseInt(orderId));

    if (orderIndex !== -1) {
      orders[orderIndex].paymentStatus = "failed";
      orders[orderIndex].status = "cancelled";
      saveOrdersToStorage(orders);
    }

    return {
      success: true,
      message: "تم إلغاء الدفع",
    };
  },
};

// Export default API object with all modules
const ClientAPI = {
  auth: authAPI,
  customer: customerAPI,
  brands: brandsAPI,
  cars: carsAPI,
  orders: ordersAPI,
  home: homeAPI,
  settings: settingsAPI,
  payment: paymentAPI,
};

export default ClientAPI;
