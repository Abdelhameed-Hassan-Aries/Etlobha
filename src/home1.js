import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  const [filters, setFilters] = useState({
    model: "",
    brand: "",
    type: "",
    country: "",
    delivery: "",
    year: "",
  });

  const navigate = useNavigate();

  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const handleLogoutClick = () => {
    navigate("/");
  };

  // Remove handleLoginClick as navigation is no longer needed
  // const handleLoginClick = () => {
  //   navigate('/login');
  // };

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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div
      className={`app-container ${isDarkMode ? "dark-mode" : ""}`}
      dir={isEnglish ? "ltr" : "rtl"}
    >
      <header className="header">
        <div className="logo">{isEnglish ? "Otlobha" : "اطلبها"}</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder={isEnglish ? "Search for a car..." : "ابحث عن سيارة..."}
          />
          <button className="search-button">
            <img
              src={searchIcon}
              alt={isEnglish ? "Search" : "بحث"}
              className="big-search-icon"
            />
          </button>
        </div>
        <nav className="nav-bar">
          <div className="nav-item-with-icon">
            <img
              src={carIcon}
              alt={isEnglish ? "Car" : "سيارة"}
              className="car-icon"
            />
            <Link to="/about">{isEnglish ? "Old Cars" : "سيارات قديمه"}</Link>
          </div>

          <div className="nav-item-with-icon">
            <img
              src={carIcon}
              alt={isEnglish ? "Car" : "سيارة"}
              className="car-icon"
            />
            <Link to="/sit">{isEnglish ? "New Cars" : "سيارات جديده"}</Link>
          </div>
        </nav>

        <div className="icon-container" onClick={toggleDropdown}>
          <div className="icon-box">
            <div className="icon-inner" />
          </div>
        </div>

        <div className="login-section" onClick={toggleLoginDropdown}>
          <div className="login-icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1d2c6b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          {showLoginDropdown && (
            <div className="login-dropdown">
              <div className="login-dropdown-header">حسابي</div>
              <div
                className="login-dropdown-item settings"
                onClick={() => navigate("/sit")}
                style={{ cursor: "pointer" }}
              >
                إعدادات
              </div>
              <div
                className="login-dropdown-item my-car"
                onClick={() => navigate("/dach")}
                style={{ cursor: "pointer" }}
              >
                سيارتي
              </div>
              <div
                className="login-dropdown-item logout"
                onClick={handleLogoutClick}
                style={{ cursor: "pointer" }}
              >
                تسجيل خروج
              </div>
            </div>
          )}
        </div>

        <div
          className="language-switch"
          onClick={toggleLanguage}
          style={{ cursor: "pointer" }}
        >
          <div className="language-text">
            {isEnglish ? "العربية" : "English"}
          </div>
          <div className="language-icon">
            <div className="language-icon-inner" />
          </div>
        </div>

        <div
          className={`toggle-switch ${isDarkMode ? "active" : ""}`}
          onClick={toggleDarkMode}
        >
          <div className="switch-track">
            <div className="switch-thumb">
              <span className="mode-icon" role="img" aria-label="mode icon">
                {isDarkMode ? "🌙" : "🌞"}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-title">
          {isEnglish ? "Find Your Dream Car" : "اعثر على سيارتك المثالية"}
        </div>
      </div>

      <div className="container">
        <div className="search-header">
          <div className="title">
            {isEnglish ? "Search for a Used Car" : "ابحث عن سيارة مستعملة"}
          </div>
          <div className="divider"></div>
        </div>

        <div className="filters-wrapper">
          <div className="filters">
            <div className="select-box">
              <select
                name="model"
                value={filters.model}
                onChange={handleChange}
              >
                <option value="" disabled>
                  {isEnglish ? "Select Model" : "اختر موديل"}
                </option>
                <option value="موديل1">
                  {isEnglish ? "Model 1" : "موديل 1"}
                </option>
                <option value="موديل2">
                  {isEnglish ? "Model 2" : "موديل 2"}
                </option>
              </select>
            </div>
            <div className="select-box">
              <select
                name="brand"
                value={filters.brand}
                onChange={handleChange}
              >
                <option value="" disabled>
                  {isEnglish ? "Select Brand" : "اختر ماركة"}
                </option>
                <option value="هيونداي">
                  {isEnglish ? "Hyundai" : "هيونداي"}
                </option>
                <option value="تويوتا">
                  {isEnglish ? "Toyota" : "تويوتا"}
                </option>
              </select>
            </div>
            <div className="select-box">
              <select name="type" value={filters.type} onChange={handleChange}>
                <option value="" disabled>
                  {isEnglish ? "Select Type" : "اختر نوع"}
                </option>
                <option value="سيدان">{isEnglish ? "Sedan" : "سيدان"}</option>
                <option value="SUV">{isEnglish ? "SUV" : "SUV"}</option>
              </select>
            </div>
            <div className="select-box">
              <select
                name="country"
                value={filters.country}
                onChange={handleChange}
              >
                <option value="" disabled>
                  {isEnglish ? "Select Country" : "اختر دولة"}
                </option>
                <option value="مصر">{isEnglish ? "Egypt" : "مصر"}</option>
                <option value="السعودية">
                  {isEnglish ? "Saudi Arabia" : "السعودية"}
                </option>
              </select>
            </div>
            <div className="select-box">
              <select
                name="delivery"
                value={filters.delivery}
                onChange={handleChange}
              >
                <option value="" disabled>
                  {isEnglish ? "Select Delivery Method" : "اختر طريقة الاستلام"}
                </option>
                <option value="مباشر">{isEnglish ? "Direct" : "مباشر"}</option>
                <option value="توصيل">
                  {isEnglish ? "Delivery" : "توصيل"}
                </option>
              </select>
            </div>
            <div className="select-box">
              <select name="year" value={filters.year} onChange={handleChange}>
                <option value="" disabled>
                  {isEnglish ? "Select Year" : "اختر سنة الصنع"}
                </option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>

          <div className="buttons-wrapper">
            <div className="search-car-button">
              <img
                src={searchIcon}
                alt={isEnglish ? "Search" : "بحث"}
                style={{ width: "20px", marginRight: "8px" }}
              />
              <span>{isEnglish ? "Search" : "بحث"}</span>
            </div>
            <div className="reset-button" onClick={handleReset}>
              <span>{isEnglish ? "Reset" : "إعادة تعيين"}</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
          {isEnglish
            ? "Copyright © 2024 Car Website"
            : "حقوق النشر © 2024 موقع السيارات"}
        </p>
      </footer>
    </div>
  );
}

export default Home;
