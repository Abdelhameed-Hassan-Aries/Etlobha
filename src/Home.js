import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { homeAPI, brandsAPI } from "./services/clientAPI";
import { useAppContext } from "./contexts/AppContext";
import { getAllCars } from "./data/carsData";
import "./Home.css";
import "./styles/global.css";
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";
import hyundaiIcon from "./image/ho.png";
import fordIcon from "./image/fo.png";
import chevroletIcon from "./image/sh.png";
import toyotaIcon from "./image/to.png";
import peugeotIcon from "./image/pe.png";
import suvImg from "./image/image.png";
import sedanImg from "./image/image.png";
import selectAllIcon from "./image/select-all-svgrepo-com.svg";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]);

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

  const [filters, setFilters] = useState({
    model: "",
    brand: "",
    type: "",
    country: "",
    delivery: "",
    year: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands();
    fetchCars();
  }, []);

  useEffect(() => {
    fetchCars();
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

  const fetchCars = () => {
    try {
      // Get first 8 cars for the featured section
      const allCars = getAllCars();
      const featuredCars = allCars.slice(0, 8).map((car) => ({
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
      setCars(featuredCars);
    } catch (error) {
      console.error("Error loading cars:", error);
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
      // Navigate to search results page
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleReset = () => {
    setFilters({
      model: "",
      brand: "",
      type: "",
      country: "",
      delivery: "",
      year: "",
    });
  };

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Toggle functions are now provided by the context

  // Brands are now loaded dynamically from the API
  // Cars are now loaded from carsData.js

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
            <h1 className="logo">{isEnglish ? "Otlobha" : "اطلبها"}</h1>
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
            {isEnglish ? "Find Your Perfect Car" : "اعثر على سيارتك المثالية"}
          </h1>
          <p className="hero-subtitle">
            {isEnglish
              ? "Browse thousands of cars from trusted dealers across the region"
              : "تصفح آلاف السيارات من وكلاء موثوقين في جميع أنحاء المنطقة"}
          </p>
          {/* <div className="hero-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/brands")}
            >
              {isEnglish ? "Browse Cars" : "تصفح السيارات"}
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => navigate("/about")}
            >
              {isEnglish ? "Learn More" : "اعرف المزيد"}
            </button>
          </div> */}
        </div>
      </section>

      {/* Search Filters */}
      {/* <section className="filters-section">
        <div className="container">
          <div className="filters-card">
            <h2 className="filters-title">
              {isEnglish ? "Advanced Search" : "البحث المتقدم"}
            </h2>
            <div className="filters-grid">
              <div className="filter-group">
                <label>{isEnglish ? "Brand" : "الماركة"}</label>
                <select
                  name="brand"
                  value={filters.brand}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">
                    {isEnglish ? "Select Brand" : "اختر الماركة"}
                  </option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {isEnglish ? brand.name : brand.nameAr}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label>{isEnglish ? "Model" : "الموديل"}</label>
                <input
                  type="text"
                  name="model"
                  value={filters.model}
                  onChange={handleChange}
                  placeholder={isEnglish ? "Enter model" : "أدخل الموديل"}
                  className="input"
                />
              </div>
              <div className="filter-group">
                <label>{isEnglish ? "Year" : "السنة"}</label>
                <select
                  name="year"
                  value={filters.year}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">
                    {isEnglish ? "Select Year" : "اختر السنة"}
                  </option>
                  {Array.from({ length: 20 }, (_, i) => 2024 - i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="filter-group">
                <label>{isEnglish ? "Type" : "النوع"}</label>
                <select
                  name="type"
                  value={filters.type}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">
                    {isEnglish ? "Select Type" : "اختر النوع"}
                  </option>
                  <option value="sedan">{isEnglish ? "Sedan" : "سيدان"}</option>
                  <option value="suv">{isEnglish ? "SUV" : "دفع رباعي"}</option>
                  <option value="hatchback">
                    {isEnglish ? "Hatchback" : "هاتشباك"}
                  </option>
                </select>
              </div>
            </div>
            <div className="filters-actions">
              <button className="btn btn-primary" onClick={handleSearch}>
                {isEnglish ? "Search" : "بحث"}
              </button>
              <button className="btn btn-secondary" onClick={handleReset}>
                {isEnglish ? "Reset" : "إعادة تعيين"}
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title">
            {isEnglish ? "Popular Brands" : "البراندات الشائعة"}
          </h2>
          <div className="brands-grid">
            {/* All Brands option */}
            <div
              className="brand-card all-brands-card"
              onClick={() => navigate("/brands")}
            >
              <h3 className="brand-name">
                {isEnglish ? "All Brands" : "جميع البراندات"}
              </h3>
            </div>

            {brands.map((brand) => (
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
        </div>
      </section>

      {/* Featured Cars */}
      <section className="cars-section">
        <div className="container">
          <h2 className="section-title">
            {isEnglish ? "Featured Cars" : "السيارات المميزة"}
          </h2>
          <div className="cars-grid">
            {cars.map((car) => (
              <div
                key={car.id}
                className="car-card"
                onClick={() => handleCarClick(car.id)}
              >
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="car-info">
                  <h3 className="car-name">{car.name}</h3>
                  <div className="car-details">
                    <span className="car-year">
                      <i className="icon-calendar"></i>
                      {car.year}
                    </span>
                    <span className="car-mileage">
                      <i className="icon-mileage"></i>
                      {car.mileage}
                    </span>
                    <span className="car-condition">
                      <i className="icon-condition"></i>
                      {car.condition}
                    </span>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{isEnglish ? "Otlobha" : "اطلبها"}</h3>
              <p>
                {isEnglish
                  ? "Your trusted partner for finding the perfect car"
                  : "شريكك الموثوق للعثور على السيارة المثالية"}
              </p>
            </div>
            <div className="footer-section">
              <h4>{isEnglish ? "Quick Links" : "روابط سريعة"}</h4>
              <ul>
                <li>
                  <Link to="/about">{isEnglish ? "About Us" : "من نحن"}</Link>
                </li>
                <li>
                  <Link to="/contact">
                    {isEnglish ? "Contact" : "اتصل بنا"}
                  </Link>
                </li>
                <li>
                  <Link to="/brands">{isEnglish ? "Brands" : "البراندات"}</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{isEnglish ? "Support" : "الدعم"}</h4>
              <ul>
                <li>
                  <Link to="/help">
                    {isEnglish ? "Help Center" : "مركز المساعدة"}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy">
                    {isEnglish ? "Privacy Policy" : "سياسة الخصوصية"}
                  </Link>
                </li>
                <li>
                  <Link to="/terms">
                    {isEnglish ? "Terms of Service" : "شروط الخدمة"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2024 {isEnglish ? "Otlobha" : "اطلبها"}.{" "}
              {isEnglish ? "All rights reserved." : "جميع الحقوق محفوظة."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
