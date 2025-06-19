// Base API configuration
const API_BASE_URL = "http://localhost:8080/api"; // Adjust this to your backend URL

// Helper function to get auth token
const getAuthToken = () => {
  const authData = localStorage.getItem("jwt");
  if (authData) {
    try {
      const parsed = JSON.parse(authData);
      return parsed.access_token || parsed.token;
    } catch (e) {
      return null;
    }
  }
  return null;
};

// Helper function to check if backend is running
const checkBackendConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.status === "success";
    }
    return false;
  } catch (error) {
    console.error("Backend connection check failed:", error);
    return false;
  }
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getAuthToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
    },
    ...options,
  };

  // Add authorization header if token exists
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);

    // Handle network errors
    if (!response.ok) {
      if (response.status === 0) {
        throw new Error(
          "فشل في الاتصال بالخادم. تأكد من أن الخادم يعمل على localhost:8000"
        );
      }

      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `خطأ في الخادم: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Handle connection refused and CORS errors
    if (
      error.name === "TypeError" &&
      error.message.includes("Failed to fetch")
    ) {
      throw new Error(
        "فشل في الاتصال بالخادم. تأكد من:\n1. أن الخادم يعمل على localhost:8000\n2. أن إعدادات CORS مضبوطة بشكل صحيح"
      );
    }

    console.error("API Request Error:", error);
    throw error;
  }
};

// Authentication API
export const authAPI = {
  // Register user
  register: async (userData) => {
    return apiRequest("/register", {
      method: "POST",
      body: JSON.stringify({
        phone: userData.phone,
        password: userData.password,
      }),
    });
  },

  // Login user
  login: async (credentials) => {
    return apiRequest("/login", {
      method: "POST",
      body: JSON.stringify({
        phone: credentials.phone,
        password: credentials.password,
      }),
    });
  },

  // Logout user
  logout: async () => {
    return apiRequest("/logout", {
      method: "POST",
    });
  },

  // Forgot password
  forgotPassword: async (phone) => {
    return apiRequest("/forgot-password", {
      method: "POST",
      body: JSON.stringify({ phone }),
    });
  },

  // Reset password
  resetPassword: async (resetData) => {
    return apiRequest("/reset-password", {
      method: "POST",
      body: JSON.stringify({
        phone: resetData.phone,
        password: resetData.password,
        password_confirmation: resetData.password_confirmation,
      }),
    });
  },
};

// Customer/Profile API
export const customerAPI = {
  // Get profile
  getProfile: async () => {
    return apiRequest("/profile");
  },

  // Update profile
  updateProfile: async (profileData) => {
    return apiRequest("/profile/update", {
      method: "POST",
      body: JSON.stringify(profileData),
    });
  },

  // Change password
  changePassword: async (passwordData) => {
    return apiRequest("/profile/change-password", {
      method: "POST",
      body: JSON.stringify({
        current_password: passwordData.currentPassword,
        password: passwordData.newPassword,
        password_confirmation: passwordData.confirmPassword,
      }),
    });
  },
};

// Brands API
export const brandsAPI = {
  // Get all brands
  getAllBrands: async () => {
    return apiRequest("/brands");
  },

  // Get cars by brand
  getCarsByBrand: async (brandId) => {
    return apiRequest(`/brands/${brandId}/cars`);
  },
};

// Models API
export const modelsAPI = {
  // Get all models
  getAllModels: async () => {
    return apiRequest("/models");
  },

  // Get cars by model
  getCarsByModel: async (modelId) => {
    return apiRequest(`/models/${modelId}/cars`);
  },
};

// Body Types API
export const bodyTypesAPI = {
  // Get all body types
  getAllBodyTypes: async () => {
    return apiRequest("/body-types");
  },

  // Get cars by body type
  getCarsByBodyType: async (bodyTypeId) => {
    return apiRequest(`/body-types/${bodyTypeId}/cars`);
  },
};

// Orders API
export const ordersAPI = {
  // Create new order
  createOrder: async (orderData) => {
    return apiRequest("/orders", {
      method: "POST",
      body: JSON.stringify({
        car_id: orderData.carId,
        payment_method: orderData.paymentMethod,
      }),
    });
  },

  // Get order status
  getOrderStatus: async (orderId) => {
    return apiRequest(`/orders/status/${orderId}`);
  },

  // Get my orders
  getMyOrders: async () => {
    return apiRequest("/orders/my-orders");
  },
};

// Home/Search API
export const homeAPI = {
  // Search cars, brands, models, etc.
  search: async (query) => {
    const url = new URL(`${API_BASE_URL}/search`);
    url.searchParams.append("query", query);

    const token = getAuthToken();
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }).then((res) => res.json());
  },
};

// Settings API
export const settingsAPI = {
  // Get settings
  getSettings: async () => {
    return apiRequest("/settings");
  },
};

// Payment API (for handling payment callbacks)
export const paymentAPI = {
  // Payment success
  paymentSuccess: async (params) => {
    return apiRequest(
      "/payment/success?" + new URLSearchParams(params).toString()
    );
  },

  // Payment cancel
  paymentCancel: async (params) => {
    return apiRequest(
      "/payment/cancel?" + new URLSearchParams(params).toString()
    );
  },
};

// Export default API object with all modules
const API = {
  auth: authAPI,
  customer: customerAPI,
  brands: brandsAPI,
  models: modelsAPI,
  bodyTypes: bodyTypesAPI,
  orders: ordersAPI,
  home: homeAPI,
  settings: settingsAPI,
  payment: paymentAPI,
  checkConnection: checkBackendConnection,
};

export default API;
