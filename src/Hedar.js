import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Hedar.css";

// أيقونات وصور
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";
import hyundai from "./image/to.png";
import toyota from "./image/sh.png";
import ford from "./image/pe.png";
import peugeot from "./image/ho.png";
import chevrolet from "./image/fo.png";
import suvImg from "./image/si.png";
import sedanImg from "./image/su.png";

// Images for car list (you need to import these images or update paths accordingly)
import car1Img from "./image/car1.png";
import car2Img from "./image/car2.png";
import car3Img from "./image/car3.png";
import car4Img from "./image/car4.png";
import car5Img from "./image/car5.png";
import car6Img from "./image/car6.png";
import car7Img from "./image/car7.png";
import car8Img from "./image/car8.png";

// ✅ مكون خيارات السيارات
function CarOptions({ isEnglish }) {
  const [showBrands, setShowBrands] = useState(false);
  const [showTypes, setShowTypes] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const toggleBrands = () => {
    setShowBrands(!showBrands);
    setShowTypes(false);
    setShowFilters(false);
  };

  const toggleTypes = () => {
    setShowTypes(!showTypes);
    setShowBrands(false);
    setShowFilters(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    setShowBrands(false);
    setShowTypes(false);
  };

  const brands = [
    { name: "هيونداي", img: hyundai },
    { name: "تويوتا", img: toyota },
    { name: "فورد", img: ford },
    { name: "بيجو", img: peugeot },
    { name: "شيفروليه", img: chevrolet },
  ];

  const types = [
    { name: "SUV", img: suvImg },
    { name: "Sedan", img: sedanImg },
  ];

  return (
    <div className="car-options-wrapper">
      <div className="car-options-container">
        <button className="car-option-button" onClick={toggleBrands}>
          {isEnglish ? "Choose Brand" : "اختر الماركة"}
        </button>
        <button className="car-option-button" onClick={toggleTypes}>
          {isEnglish ? "Car Type" : "نوع السيارة"}
        </button>
        <button className="car-option-button" onClick={toggleFilters}>
          {isEnglish ? "Search for a car" : "ابحث عن سيارة"}
        </button>
      </div>

      {showBrands && (
        <div className="brand-list">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.img} alt={brand.name} className="brand-logo" />
              {/* <div className="brand-name">{brand.name}</div> */}
            </div>
          ))}
        </div>
      )}

      {showTypes && (
        <div className="brand-list">
          {types.map((type, index) => (
            <div key={index} className="brand-item">
              <img src={type.img} alt={type.name} className="brand-logo" />
              {/* <div className="brand-name">{type.name}</div> */}
            </div>
          ))}
        </div>
      )}

      {showFilters && (
        <div className="filter-section">
          <div className="filter-row">
            <select>
              <option>{isEnglish ? "Choose Brand" : "اختر ماركة"}</option>
            </select>
            <select>
              <option>{isEnglish ? "Choose Model" : "اختر موديل"}</option>
            </select>
            <select>
              <option>{isEnglish ? "Choose Country" : "اختر دولة"}</option>
            </select>
            <select>
              <option>{isEnglish ? "Choose Type" : "اختر نوع"}</option>
            </select>
          </div>
          <div className="filter-row">
            <select>
              <option>{isEnglish ? "Choose Year" : "اختر سنة الصنع"}</option>
            </select>
            <select>
              <option>
                {isEnglish ? "Delivery Method" : "اختر طريقة الاستلام"}
              </option>
            </select>
            <button className="search-button-rounded">
              {isEnglish ? "Search" : "بحث"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ✅ الصفحة الرئيسية
function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setIsEnglish(!isEnglish);
  const toggleLoginDropdown = () => setShowLoginDropdown(!showLoginDropdown);
  const handleLogoutClick = () => navigate("/");

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
            <img src={searchIcon} alt="Search" className="big-search-icon" />
          </button>
        </div>

        <nav className="nav-bar">
          <div className="nav-item-with-icon">
            <img src={carIcon} alt="Car" className="car-icon" />
            <Link to="/about">{isEnglish ? "Old Cars" : "سيارات مستعمله"}</Link>
          </div>
          <div className="nav-item-with-icon">
            <img src={carIcon} alt="Car" className="car-icon" />
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
              <div className="login-dropdown-item my-car">سيارتي</div>
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

      {/* ✅ مكون الفلترة والاختيارات */}
      <CarOptions isEnglish={isEnglish} />

      <main className="main-content">
        <section className="car-list-section">
          <h2>{isEnglish ? "Cars for sale" : "سيارات جديده للبيع "}</h2>
          <div className="car-list">
            <div className="car-card">
              <img
                src={car1Img}
                alt={isEnglish ? "Car 1" : "سيارة 1"}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/car1")}
              />
              <h3>{isEnglish ? "Ford Transit 2021" : "فورد ترانزيت 2021"}</h3>
              <p>$22,000</p>
            </div>

            <div className="car-card">
              <img
                src={car2Img}
                alt={isEnglish ? "Car 2" : "سيارة 2"}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/car-details?car=toyota-camry-2022")}
              />
              <h3>{isEnglish ? "Toyota Camry 2022" : "تويوتا كامري 2022"}</h3>
              <p>$19,500</p>
            </div>

            <div className="car-card">
              <img src={car3Img} alt={isEnglish ? "Car 3" : "سيارة 3"} />
              <h3>
                {isEnglish ? "Hyundai Elantra 2021" : "هيونداي النترا 2021"}
              </h3>
              <p>$17,800</p>
            </div>

            <div className="car-card">
              <img src={car4Img} alt={isEnglish ? "Car 4" : "سيارة 4"} />
              <h3>{isEnglish ? "Toyota Camry 2020" : "تويوتا كامري 2020"}</h3>
              <p>$19,500</p>
            </div>

            <div className="car-card">
              <img src={car5Img} alt={isEnglish ? "Car 5" : "سيارة 5"} />
              <h3>
                {isEnglish ? "Hyundai Elantra 2021" : "هيونداي إلنترا 2021"}
              </h3>
              <p>$17,200</p>
            </div>

            <div className="car-card">
              <img src={car6Img} alt={isEnglish ? "Car 6" : "سيارة 6"} />
              <h3>{isEnglish ? "Toyota Camry 2020" : "تويوتا كامري 2020"}</h3>
              <p>$19,500</p>
            </div>

            <div className="car-card">
              <img src={car7Img} alt={isEnglish ? "Car 7" : "سيارة 7"} />
              <h3>{isEnglish ? "Nissan Altima 2021" : "نيسان التيما 2021"}</h3>
              <p>$21,800</p>
            </div>

            <div className="car-card">
              <img src={car8Img} alt={isEnglish ? "Car 8" : "سيارة 8"} />
              <h3>
                {isEnglish ? "Hyundai Tucson 2022" : "هيونداي توسان 2022"}
              </h3>
              <p>$24,500</p>
            </div>
          </div>
        </section>
      </main>

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
