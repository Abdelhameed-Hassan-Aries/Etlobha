import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("isDarkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const [isEnglish, setIsEnglish] = useState(() => {
    const saved = localStorage.getItem("isEnglish");
    return saved ? JSON.parse(saved) : false;
  });

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // User authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = localStorage.getItem("authToken");
    const jwt = localStorage.getItem("jwt");
    return !!(token || jwt);
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      return JSON.parse(savedUser);
    }

    // Check for existing JWT data
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const jwtData = JSON.parse(jwt);
        const userData = jwtData.user || { name: "User", phone: "" };
        return userData;
      } catch (error) {
        console.error("Error parsing JWT data:", error);
      }
    }

    return null;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("isEnglish", JSON.stringify(isEnglish));
    document.body.setAttribute("dir", isEnglish ? "ltr" : "rtl");
  }, [isEnglish]);

  // Sync authentication state on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const jwt = localStorage.getItem("jwt");
    const savedUser = localStorage.getItem("userData");

    if (!token && jwt && !savedUser) {
      // Migrate from old JWT system to new auth system
      try {
        const jwtData = JSON.parse(jwt);
        const userData = jwtData.user || { name: "User", phone: "" };
        const authToken = jwtData.token || jwtData.access_token || jwt;

        // Update to new system
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("userData", JSON.stringify(userData));

        setIsLoggedIn(true);
        setUser(userData);
      } catch (error) {
        console.error("Error migrating JWT data:", error);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Authentication functions
  const login = (userData, token) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("jwt"); // Clear JWT for backward compatibility
  };

  const value = {
    isDarkMode,
    isEnglish,
    showMobileMenu,
    isLoggedIn,
    user,
    toggleDarkMode,
    toggleLanguage,
    toggleMobileMenu,
    setShowMobileMenu,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
