import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "./contexts/AppContext";
import "./sit.css";
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";

function Home() {
  const { isDarkMode, isEnglish, toggleDarkMode, toggleLanguage } =
    useAppContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const [saveMessage, setSaveMessage] = useState(""); // ✅ لإظهار رسالة الحفظ

  const navigate = useNavigate();
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const handleLogoutClick = () => {
    navigate("/");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSave = () => {
    setSaveMessage(isEnglish ? "Successfully saved!" : "تم الحفظ بنجاح!");
    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
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
            <img src={searchIcon} alt="بحث" className="big-search-icon" />
          </button>
        </div>

        <nav className="nav-bar">
          <div className="nav-item-with-icon">
            <img src={carIcon} alt="سيارة" className="car-icon" />
            <Link to="/used-cars">
              {isEnglish ? "Used Cars" : "سيارات مستعملة"}
            </Link>
          </div>
          <div className="nav-item-with-icon">
            <img src={carIcon} alt="سيارة" className="car-icon" />
            <Link to="/new-cars">
              {isEnglish ? "New Cars" : "سيارات جديدة"}
            </Link>
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
              <div className="login-dropdown-header">
                {isEnglish ? "My Account" : "حسابي"}
              </div>
              <div
                className="login-dropdown-item settings"
                onClick={() => navigate("/sit")}
              >
                {isEnglish ? "Settings" : "إعدادات"}
              </div>
              <div className="login-dropdown-item my-car">
                {isEnglish ? "My Car" : "سيارتي"}
              </div>
              <div
                className="login-dropdown-item logout"
                onClick={handleLogoutClick}
              >
                {isEnglish ? "Logout" : "تسجيل خروج"}
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

      {/* إعدادات المستخدم */}
      <div className="user-settings-page">
        <div className="settings-background">
          <div className="settings-header-container">
            <div className="settings-header-row">
              <div className="settings-title">
                {isEnglish ? "Settings" : "الإعدادات"}
              </div>
            </div>
            <div className="settings-header-divider" />
          </div>

          <div className="settings-content-card">
            <label className="settings-label settings-email-label">
              {isEnglish ? "Email" : "البريد الإلكتروني"}
            </label>
            <div className="settings-input-wrapper settings-email-input-wrapper">
              <input
                type="email"
                className="settings-input-field"
                placeholder={
                  isEnglish ? "Enter your email" : "اكتب بريدك الإلكتروني"
                }
              />
            </div>

            <label className="settings-label settings-phone-label">
              {isEnglish ? "Phone Number" : "رقم الهاتف"}
            </label>
            <div className="settings-input-wrapper settings-phone-input-wrapper">
              <input
                type="tel"
                className="settings-input-field"
                placeholder={
                  isEnglish ? "Enter your phone number" : "اكتب رقم الهاتف"
                }
              />
            </div>

            <div
              className="settings-password-link"
              onClick={() => navigate("/forgit")}
              style={{ cursor: "pointer" }}
            >
              {isEnglish ? "Change Password" : "تغيير كلمة السر"}
            </div>

            <button
              className="settings-button settings-save-btn"
              onClick={handleSave}
            >
              {isEnglish ? "Save Changes" : "حفظ التعديل"}
            </button>

            <button
              className="settings-button settings-cancel-btn"
              onClick={() => navigate("/")}
            >
              {isEnglish ? "Cancel" : "إلغاء"}
            </button>

            {/* عرض رسالة الحفظ */}
            {saveMessage && (
              <div className="settings-save-message">{saveMessage}</div>
            )}
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
