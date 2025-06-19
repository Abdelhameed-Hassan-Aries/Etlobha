import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buy2.css";
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [fileName, setFileName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const handleLogoutClick = () => {
    navigate("/");
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

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const months = [
    { label: "يناير", value: "01" },
    { label: "فبراير", value: "02" },
    { label: "مارس", value: "03" },
    { label: "أبريل", value: "04" },
    { label: "مايو", value: "05" },
    { label: "يونيو", value: "06" },
    { label: "يوليو", value: "07" },
    { label: "أغسطس", value: "08" },
    { label: "سبتمبر", value: "09" },
    { label: "أكتوبر", value: "10" },
    { label: "نوفمبر", value: "11" },
    { label: "ديسمبر", value: "12" },
  ];

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y <= currentYear + 10; y++) {
    years.push(y);
  }

  const [selectedYear, setSelectedYear] = useState("");

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
            <Link to="/about">{isEnglish ? "Old Cars" : "سيارات مستعمله"}</Link>
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
              <div className="login-dropdown-item my-car">سيارتي</div>
              <div
                className="login-dropdown-item logout"
                onClick={handleLogoutClick}
                style={{ cursor: "pointer" }}
              >
                تسجيل خروج
              </div>
              <div
                className="settings-password-link"
                onClick={() => navigate("/forgit")}
                style={{ cursor: "pointer" }}
              >
                تغيير كلمه السر
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

      {/* بيانات البطاقة */}
      <div className="card-inputs-row">
        <div className="card-holder-input">
          <div className="card-holder-input__label-wrapper">
            <div className="card-holder-input__label">اسم حامل البطاقة</div>
          </div>
          <input
            type="text"
            className="card-holder-input__input"
            placeholder="ادخل اسم حامل البطاقة"
          />
        </div>

        <div className="card-number-input">
          <div className="card-number-input__label-wrapper">
            <div className="card-number-input__label">رقم البطاقة</div>
          </div>
          <input
            type="text"
            className="card-number-input__input"
            placeholder="ادخل رقم البطاقة"
          />
        </div>
      </div>

      <div className="expiration-date-wrapper">
        <label className="expiration-date-label">شهر الانتهاء</label>
        <div className="expiration-date-container">
          <div className="expiration-date-row">
            <div className="expiration-date-picker">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="expiration-select"
              >
                <option value="" disabled>
                  اختر الشهر
                </option>
                {months.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="expiration-year-container">
        <label className="expiration-year-label">سنة الانتهاء</label>
        <select
          className="expiration-year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="" disabled>
            اختر السنة
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* حقل الرقم السري مع العين السحرية تحت */}
      <div className="password-field-container">
        <label htmlFor="password" className="password-label">
          الرقم السري
        </label>
        <div className="password-input-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="password-input"
            placeholder="ادخل الرقم السري"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="toggle-password-visibility"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={
              showPassword ? "اخفاء الرقم السري" : "اظهار الرقم السري"
            }
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
      </div>
      <button
        className="clickable-box"
        data-size="48"
        onClick={() => alert("تم الضغط!")}
      >
        <div className="clickable-box-content">
          <img
            src="https://arabianbetting.com/app/uploads/2020/08/fr-image-visa.png"
            alt="description"
            className="clickable-box-image"
          />
        </div>
      </button>

      <button
        className="btn-box"
        data-size="48"
        onClick={() => alert("تم الضغط!")}
      >
        <div className="btn-box-wrapper">
          <img
            src="https://st4.depositphotos.com/5225467/22068/v/950/depositphotos_220680152-stock-illustration-paypal-logo-printed-white-paper.jpg"
            alt="description"
            className="btn-box-img"
          />
        </div>
      </button>
      <button
        className="payment-button"
        data-size="48"
        onClick={() => alert("تم الضغط!")}
      >
        <div className="payment-button-inner">
          <img
            src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg?quality=90&strip=all&crop=0,16.666666666667,100,66.666666666667"
            alt="paypal"
            className="payment-button-image"
          />
        </div>
      </button>
      <button className="nav-btn" onClick={() => navigate("/buy")}>
        <div className="nav-btn-content">
          <span className="nav-btn-text">
            <span className="arrow-icon">←</span> السابق
          </span>
        </div>
      </button>
      <button className="btn-confirm">
        <div className="btn-confirm-content">
          <span className="btn-confirm-text">تأكيد الدفع</span>
        </div>
      </button>
      <button className="btn-cancel">
        <div className="btn-cancel-content">
          <span className="btn-cancel-text">إلغاء</span>
        </div>
      </button>

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
