import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buy.css";
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";

function CardUpload() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="card-upload-container" onClick={handleUploadClick}>
      {" "}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        hidden
        onChange={handleFileChange}
      />{" "}
      <div className="card-upload-label">
        {" "}
        <div className="label-text">صوره البطاقه الخاصه من الوجه</div>{" "}
      </div>{" "}
      <div className="upload-box" />{" "}
      <div className="upload-text-container">
        {" "}
        <div className="upload-text">
          {fileName ? `تم اختيار: ${fileName}` : "تحميل صوره البطاقه من الوجه"}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

function BackCardUpload() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="back-id-upload-section" onClick={handleUploadClick}>
      {" "}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        hidden
        onChange={handleFileChange}
      />{" "}
      <div className="back-id-label-wrapper">
        {" "}
        <div className="back-id-label-text">
          صوره البطاقه الخاصه بك من الخلف
        </div>{" "}
      </div>{" "}
      <div className="back-id-upload-box" />{" "}
      <div className="back-id-placeholder-wrapper">
        {" "}
        <div className="back-id-placeholder-text">
          {fileName ? `تم اختيار: ${fileName}` : "تحميل صوره البطاقه من الخلف"}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

function SmartcardFrontUpload() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="smartcard-front-upload-section" onClick={handleUploadClick}>
      {" "}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        hidden
        onChange={handleFileChange}
      />{" "}
      <div className="smartcard-front-label-wrapper">
        {" "}
        <div className="smartcard-front-label-text">
          صوره الكارت الذكي الخاص بك من الوجه{" "}
        </div>{" "}
      </div>{" "}
      <div className="smartcard-front-upload-box" />{" "}
      <div className="smartcard-front-placeholder-wrapper">
        {" "}
        <div className="smartcard-front-placeholder-text">
          {fileName
            ? `تم اختيار: ${fileName}`
            : "تحميل صوره الكارت الذكي من الوجه"}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

function SmartcardBackUpload() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="smartcard-back-upload-section" onClick={handleUploadClick}>
      {" "}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        hidden
        onChange={handleFileChange}
      />{" "}
      <div className="smartcard-back-label-wrapper">
        {" "}
        <div className="smartcard-back-label-text">
          صوره الكارت الذكي الخاص بك من الخلف{" "}
        </div>{" "}
      </div>{" "}
      <div className="smartcard-back-upload-box" />{" "}
      <div className="smartcard-back-placeholder-wrapper">
        {" "}
        <div className="smartcard-back-placeholder-text">
          {fileName
            ? `تم اختيار: ${fileName}`
            : "تحميل صوره الكارت الذكي من الخلف"}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [selectedColor, setSelectedColor] = useState("red");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

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

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const validatePhone = (number) => {
    const egyptPhoneRegex = /^01[0-9]{9}$/;
    return egyptPhoneRegex.test(number);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (value === "" || validatePhone(value)) {
      setError("");
    } else {
      setError("رقم الهاتف المصري غير صحيح");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "" || validateEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("البريد الالكتروني غير صحيح");
    }
  };

  return (
    <div
      className={`app-container ${isDarkMode ? "dark-mode" : ""}`}
      dir={isEnglish ? "ltr" : "rtl"}
    >
      {" "}
      <header className="header">
        {" "}
        <div className="logo">{isEnglish ? "Otlobha" : "اطلبها"}</div>{" "}
        <div className="search-bar">
          <input
            type="text"
            placeholder={isEnglish ? "Search for a car..." : "ابحث عن سيارة..."}
          />{" "}
          <button className="search-button">
            {" "}
            <img
              src={searchIcon}
              alt="search"
              className="big-search-icon"
            />{" "}
          </button>{" "}
        </div>{" "}
        <nav className="nav-bar">
          {" "}
          <div className="nav-item-with-icon">
            {" "}
            <img src={carIcon} alt="car" className="car-icon" />{" "}
            <Link to="/about">{isEnglish ? "Old Cars" : "سيارات مستعمله"}</Link>{" "}
          </div>{" "}
          <div className="nav-item-with-icon">
            {" "}
            <img src={carIcon} alt="car" className="car-icon" />{" "}
            <Link to="/sit">{isEnglish ? "New Cars" : "سيارات جديده"}</Link>{" "}
          </div>{" "}
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
        <div className="language-switch" onClick={toggleLanguage}>
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
      <div className="contact-seller-container">
        <div className="contact-seller-header">
          <div className="contact-seller-title">الاتصال بالبائع</div>
          <div className="contact-seller-empty" />
        </div>
        <div className="contact-seller-line" />
      </div>
      <div className="car-card-container">
        <div className="car-card-bg" />
        <img
          className="car-card-img"
          src="https://th.bing.com/th/id/OIP.0z6IjdejM9jKjk0aKaVyLgAAAA?w=363&h=363&rs=1&pid=ImgDetMain"
          alt="car"
        />
        <div className="car-card-title-container">
          <div className="car-card-title">هيونداي إلنترا 2025</div>
        </div>
        <div className="car-card-feature" style={{ left: 363, top: 126 }}>
          <div className="car-card-feature-text">اتوماتيك</div>
          <div className="car-card-feature-icon">
            <div className="feature-icon-1" />
          </div>
        </div>
        <div className="car-card-feature" style={{ left: 110, top: 126 }}>
          <div className="car-card-feature-text">128 HP</div>
          <div className="car-card-feature-icon">
            <div className="feature-icon-2a" />
            <div className="feature-icon-2b" />
          </div>
        </div>
        <div className="car-card-feature" style={{ left: 26, top: 126 }}>
          <div className="car-card-feature-text">92</div>
          <div className="car-card-feature-icon">
            <div className="feature-icon-3a" />
            <div className="feature-icon-3b" />
          </div>
        </div>
        <div className="car-card-feature" style={{ left: 231, top: 126 }}>
          <div className="car-card-feature-text">CC 1600</div>
          <div className="car-card-feature-icon">
            <div className="feature-icon-4" />
          </div>
        </div>
        <div className="car-card-price-container">
          <div className="car-card-price">$50,000</div>
        </div>
        <div className="car-card-origin">
          <div className="car-card-feature-text">مستورد من الامارات</div>
        </div>
      </div>
      <div className="color-picker-container">
        <div className="color-picker-bg" />
        <div className="color-picker-title-container">
          <div className="color-picker-title">اختر اللون</div>
        </div>
        <div className="color-picker-subtitle-container">
          <div className="color-picker-subtitle">الالوان المتاحه</div>
        </div>

        {["white", "black", "gray", "red", "brown"].map((color) => (
          <div
            key={color}
            className={`color-option color-${color} ${
              selectedColor === color ? "selected" : ""
            }`}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
      <div className="email-box">
        <label className="email-label" htmlFor="email-input">
          البريد الالكتروني
        </label>
        <input
          id="email-input"
          type="email"
          className="email-input"
          placeholder="ادخل البريد الالكتروني"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div className="email-error">{emailError}</div>}
      </div>
      <div className="phone-input-container">
        <label className="phone-label" htmlFor="phone-input">
          رقم الهاتف
        </label>
        <input
          id="phone-input"
          type="tel"
          className="phone-input-box"
          placeholder="ادخل رقم الهاتف"
          value={phone}
          onChange={handleChange}
          maxLength={11}
        />
        {error && <div className="phone-error">{error}</div>}
      </div>
      <CardUpload />
      <BackCardUpload />
      <SmartcardFrontUpload />
      <SmartcardBackUpload />
      <select className="pickup-method-select smartcard-back-upload-box">
        <option value="">-- اختر طريقه الاستلام --</option>
        <option value="suez">ميناء السويس</option>
        <option value="alex">الإسكندرية</option>
        <option value="beheira">البحيرة</option>
        <option value="hurghada">الغردقة</option>
      </select>
      <button className="next-button" onClick={() => navigate("/buy2")}>
        <div className="next-button-content">
          <div className="next-button-icon">
            <div className="next-button-icon-shape" />
          </div>
          <div className="next-button-text">التالي</div>
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
