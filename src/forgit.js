import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "./services/clientAPI";
import "./forgit.css";
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";

function Forgit() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [step, setStep] = useState(1); // 1 for phone verification, 2 for password reset
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    password_confirmation: "",
  });

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  // Handle phone verification
  const handlePhoneVerification = async () => {
    if (!formData.phone.trim()) {
      setError("يرجى إدخال رقم الهاتف");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await authAPI.forgotPassword(formData.phone);
      setSuccess("تم التحقق من رقم الهاتف بنجاح");
      setStep(2);
    } catch (error) {
      console.error("Phone verification error:", error);
      setError(error.message || "حدث خطأ أثناء التحقق من رقم الهاتف");
    } finally {
      setLoading(false);
    }
  };

  // Handle password reset
  const handlePasswordReset = async () => {
    if (!formData.password.trim() || !formData.password_confirmation.trim()) {
      setError("يرجى ملء جميع الحقول");
      return;
    }

    if (formData.password !== formData.password_confirmation) {
      setError("كلمة المرور غير متطابقة");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await authAPI.resetPassword({
        phone: formData.phone,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      });
      setSuccess("تم تغيير كلمة المرور بنجاح");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Password reset error:", error);
      setError(error.message || "حدث خطأ أثناء تغيير كلمة المرور");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccess("");
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
            <Link to="/about">{isEnglish ? "Old Cars" : "سيارات مستعمله"}</Link>
          </div>

          <div className="nav-item-with-icon">
            <img
              src={carIcon}
              alt={isEnglish ? "Car" : "سيارة"}
              className="car-icon"
            />
            <Link to="/brands">{isEnglish ? "Brands" : "البراندات"}</Link>
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

      <div className="zafrin-container">
        <div className="qubli-bg" />
        <div className="xalor-header">
          <div className="proni-row">
            <div className="felni-title">
              <div>
                {step === 1 ? "التحقق من رقم الهاتف" : "تغيير كلمة المرور"}
              </div>
            </div>
            <div className="dobra-spacer"></div>
          </div>
          <div className="hemdi-divider"></div>
        </div>
        <div className="girno-form-bg" />

        {error && (
          <div
            className="error-message"
            style={{ color: "red", textAlign: "center", marginBottom: "15px" }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            className="success-message"
            style={{
              color: "green",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            {success}
          </div>
        )}

        {step === 1 ? (
          <>
            <label className="bafil-label" htmlFor="phone">
              رقم الهاتف
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="narmi-input"
              placeholder="ادخل رقم الهاتف"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <button
              className="confirm-button"
              onClick={handlePhoneVerification}
              disabled={loading}
            >
              {loading ? "جارٍ التحقق..." : "تحقق من رقم الهاتف"}
            </button>
          </>
        ) : (
          <>
            <label className="bafil-label" htmlFor="password">
              كلمة المرور الجديدة
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="narmi-input"
              placeholder="ادخل كلمة المرور الجديدة"
              value={formData.password}
              onChange={handleInputChange}
            />

            <label className="bafil-label" htmlFor="password_confirmation">
              تأكيد كلمة المرور الجديدة
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              className="narmi-input"
              placeholder="أعد إدخال كلمة المرور الجديدة"
              value={formData.password_confirmation}
              onChange={handleInputChange}
            />

            <button
              className="confirm-button"
              onClick={handlePasswordReset}
              disabled={loading}
            >
              {loading ? "جارٍ تغيير كلمة المرور..." : "تغيير كلمة المرور"}
            </button>
          </>
        )}

        <div className="back-to-login">
          <Link to="/login">العودة لتسجيل الدخول</Link>
        </div>
      </div>
    </div>
  );
}

export default Forgit;
