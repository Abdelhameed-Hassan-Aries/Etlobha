import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { homeAPI, brandsAPI } from "./services/clientAPI";
import { useAppContext } from "./contexts/AppContext";
import { getAllCars } from "./data/carsData";
import "./Home.css";
import "./styles/global.css";

// Import images
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";
import selectAllIcon from "./image/select-all-svgrepo-com.svg";

function UsedCars() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [brands, setBrands] = useState([]);
  const [usedCars, setUsedCars] = useState([]);

  // Use shared context for language, theme, and authentication
  const {
    isDarkMode,
    isEnglish,
    showMobileMenu,
    isLoggedIn,
    user,
    toggleDarkMode,
    toggleLanguage,
    toggleMobileMenu,
    logout,
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands();
    fetchUsedCars();
  }, []);

  useEffect(() => {
    fetchUsedCars();
  }, [isEnglish]);

  const fetchBrands = async () => {
    try {
      const response = await brandsAPI.getAllBrands();
      if (response.data) {
        setBrands(response.data);
      }
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const fetchUsedCars = () => {
    try {
      // Get cars with older years (below 2022) for the used cars section
      const allCars = getAllCars();
      const filteredUsedCars = allCars
        .filter((car) => car.year < 2022)
        .slice(0, 8)
        .map((car) => ({
          id: car.id,
          name: isEnglish ? car.name : car.nameAr,
          price: `$${car.price.toLocaleString()}`,
          image: car.images[0],
          year: car.year.toString(),
          mileage: isEnglish
            ? `${car.mileage.toLocaleString()} km`
            : `${car.mileage.toLocaleString()} كم`,
          condition: isEnglish ? car.condition : car.conditionAr,
        }));
      setUsedCars(filteredUsedCars);
    } catch (error) {
      console.error("Error loading used cars:", error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate("/");
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    try {
      setIsSearching(true);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  // Used cars are now loaded from carsData.js

  const handleCarClick = (carId) => {
    navigate(`/car/${carId}`);
  };

  const handleBrandClick = (brandId) => {
    navigate(`/brands/${brandId}/cars`);
  };

  return (
    <div
      className={`modern-app ${isDarkMode ? "dark-mode" : ""}`}
      dir={isEnglish ? "ltr" : "rtl"}
    >
      {/* Header */}
      <header className="modern-header">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-section">
            <Link to="/" className="logo">
              {isEnglish ? "Otlobha" : "اطلبها"}
            </Link>
          </div>

          {/* Search Bar */}
          <div className="search-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder={
                  isEnglish ? "Search for a car..." : "ابحث عن سيارة..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="search-input"
              />
              <button
                className="search-button"
                onClick={handleSearch}
                disabled={isSearching}
              >
                {isSearching ? (
                  <div className="spinner"></div>
                ) : (
                  <img src={searchIcon} alt="Search" className="search-icon" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className={`nav-section ${showMobileMenu ? "nav-mobile-open" : ""}`}
          >
            <div className="nav-links">
              <Link to="/used-cars" className="nav-link">
                <img src={carIcon} alt="Car" className="nav-icon" />
                <span>{isEnglish ? "Used Cars" : "سيارات مستعملة"}</span>
              </Link>
              <Link to="/new-cars" className="nav-link">
                <img src={carIcon} alt="New Cars" className="nav-icon" />
                <span>{isEnglish ? "New Cars" : "سيارات جديدة"}</span>
              </Link>
              <Link to="/brands" className="nav-link">
                <img src={carIcon} alt="Brands" className="nav-icon" />
                <span>{isEnglish ? "Brands" : "البراندات"}</span>
              </Link>
              {isLoggedIn && (
                <Link to="/orders" className="nav-link">
                  <img src={carIcon} alt="Orders" className="nav-icon" />
                  <span>{isEnglish ? "My Orders" : "طلباتي"}</span>
                </Link>
              )}
            </div>
          </nav>

          {/* User Actions */}
          <div className="user-actions">
            {isLoggedIn ? (
              <div
                className="user-menu"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className="user-name">
                  {user?.name || (isEnglish ? "User" : "المستخدم")}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
                {showDropdown && (
                  <div className="user-dropdown">
                    <button
                      onClick={() => navigate("/profile")}
                      className="dropdown-item"
                    >
                      {isEnglish ? "Profile" : "الملف الشخصي"}
                    </button>
                    <button onClick={handleLogout} className="dropdown-item">
                      {isEnglish ? "Logout" : "تسجيل الخروج"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="btn btn-primary" onClick={handleLoginClick}>
                {isEnglish ? "Login" : "تسجيل الدخول"}
              </button>
            )}

            <button className="language-toggle" onClick={toggleLanguage}>
              {isEnglish ? "العربية" : "English"}
            </button>

            <button className="theme-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            {isEnglish ? "Quality Used Cars" : "سيارات مستعملة عالية الجودة"}
          </h1>
          <p className="hero-subtitle">
            {isEnglish
              ? "Find reliable pre-owned vehicles inspected by our experts"
              : "اعثر على مركبات مستعملة موثوقة تم فحصها من قبل خبرائنا"}
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/brands")}
            >
              {isEnglish ? "Browse by Brand" : "تصفح حسب البراند"}
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => navigate("/search")}
            >
              {isEnglish ? "Advanced Search" : "بحث متقدم"}
            </button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="section-header">
          <h2 className="section-title">
            {isEnglish ? "Shop by Brand" : "تسوق حسب البراند"}
          </h2>
        </div>
        <div className="brands-grid">
          {/* All Brands option */}
          <div
            className="brand-card all-brands-card"
            onClick={() => navigate("/brands")}
          >
            <div className="brand-logo all-brands-logo">
              <div className="all-brands-icon">
                <img
                  src={selectAllIcon}
                  alt="Select All"
                  width="60"
                  height="60"
                  style={{ filter: "invert(1)" }}
                />
              </div>
            </div>
            <h3 className="brand-name">
              {isEnglish ? "All Brands" : "جميع البراندات"}
            </h3>
          </div>

          {brands.slice(0, 7).map((brand) => (
            <div
              key={brand.id}
              className="brand-card"
              onClick={() => handleBrandClick(brand.id)}
            >
              <div className="brand-logo">
                <img
                  src={brand.logo}
                  alt={isEnglish ? brand.name : brand.nameAr}
                />
              </div>
              <h3 className="brand-name">
                {isEnglish ? brand.name : brand.nameAr}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Cars Section */}
      <section className="cars-section">
        <div className="section-header">
          <h2 className="section-title">
            {isEnglish ? "Available Used Cars" : "السيارات المستعملة المتاحة"}
          </h2>
          <p className="section-subtitle">
            {isEnglish
              ? "Carefully selected and thoroughly inspected"
              : "مختارة بعناية ومفحوصة بدقة"}
          </p>
        </div>

        <div className="cars-grid">
          {usedCars.map((car) => (
            <div
              key={car.id}
              className="car-card"
              onClick={() => handleCarClick(car.id)}
            >
              <div className="car-image">
                <img src={car.image} alt={car.name} />
                <div className="car-badge">{isEnglish ? "Used" : "مستعمل"}</div>
              </div>
              <div className="car-info">
                <h3 className="car-name">{car.name}</h3>
                <div className="car-details">
                  <span className="car-year">📅 {car.year}</span>
                  <span className="car-mileage">🛣️ {car.mileage}</span>
                  <span className="car-condition">✅ {car.condition}</span>
                </div>
                <div className="car-footer">
                  <p className="car-price">{car.price}</p>
                  <button className="btn btn-primary btn-sm">
                    {isEnglish ? "View Details" : "عرض التفاصيل"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{isEnglish ? "Otlobha" : "اطلبها"}</h3>
            <p>
              {isEnglish
                ? "Your trusted partner for quality used cars"
                : "شريكك الموثوق للسيارات المستعملة عالية الجودة"}
            </p>
          </div>
          <div className="footer-section">
            <h4>{isEnglish ? "Quick Links" : "روابط سريعة"}</h4>
            <ul>
              <li>
                <Link to="/used-cars">
                  {isEnglish ? "Used Cars" : "سيارات مستعملة"}
                </Link>
              </li>
              <li>
                <Link to="/new-cars">
                  {isEnglish ? "New Cars" : "سيارات جديدة"}
                </Link>
              </li>
              <li>
                <Link to="/brands">{isEnglish ? "Brands" : "البراندات"}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{isEnglish ? "Contact" : "تواصل معنا"}</h4>
            <p>
              {isEnglish
                ? "Phone: +966 50 123 4567"
                : "الهاتف: +966 50 123 4567"}
            </p>
            <p>
              {isEnglish
                ? "Email: info@otlobha.com"
                : "البريد: info@otlobha.com"}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024{" "}
            {isEnglish
              ? "Otlobha. All rights reserved."
              : "اطلبها. جميع الحقوق محفوظة."}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default UsedCars;
