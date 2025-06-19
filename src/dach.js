import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dach.css";
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [activeTab, setActiveTab] = useState("used");

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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

      <div className="main-container-box">
        <div className="navigation-tabs-container">
          <div className="navigation-wrapper">
            <div className="navigation-item-block">
              <button
                className={`navigation-item-text ${
                  activeTab === "used" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("used")}
              >
                بيع سياره مستعمله
              </button>
            </div>
            <div className="navigation-item-block">
              <button
                className={`navigation-item-text ${
                  activeTab === "new" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("new")}
              >
                بيع سياره جديده
              </button>
            </div>
            <div className="navigation-item-block">
              <button
                className={`navigation-item-text ${
                  activeTab === "mycar" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("mycar")}
              >
                سيارتي
              </button>
            </div>
          </div>
        </div>

        <div className="tab-content">
          {activeTab === "used" && (
            <div>
              <h2>بيع سيارة مستعملة</h2>
              <div className="filter-container">
                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر موديل</option>
                    <option value="model1">موديل 1</option>
                    <option value="model2">موديل 2</option>
                    <option value="model3">موديل 3</option>
                  </select>
                </div>

                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر ماركة السياره</option>
                    <option value="toyota">تويوتا</option>
                    <option value="nissan">نيسان</option>
                    <option value="bmw">بي إم دبليو</option>
                  </select>
                </div>

                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر هيكل السياره</option>
                    <option value="sedan">سيدان</option>
                    <option value="suv">دفع رباعي</option>
                    <option value="pickup">بيك أب</option>
                  </select>
                </div>

                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر الدولة المستورد منها السياره</option>
                    <option value="germany">ألمانيا</option>
                    <option value="japan">اليابان</option>
                    <option value="usa">أمريكا</option>
                  </select>
                </div>

                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر ناقل الحركه</option>
                    <option value="auto">أوتوماتيك</option>
                    <option value="manual">عادي</option>
                  </select>
                </div>

                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر سنة الصنع</option>
                    {Array.from({ length: 15 }, (_, i) => {
                      const year = 2025 - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">نوع الوقود</option>
                    <option value="petrol">بنزين</option>
                    <option value="diesel">ديزل</option>
                    <option value="electric">كهرباء</option>
                  </select>
                </div>

                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اللون</option>
                    <option value="black">أسود</option>
                    <option value="white">أبيض</option>
                    <option value="red">أحمر</option>
                  </select>
                </div>
              </div>

              <div className="ec-container">
                <div className="ec-header">
                  <div className="ec-title">سعه المحرك (CC)</div>
                </div>
                <div className="ec-input-wrapper">
                  <input
                    type="number"
                    placeholder="ادخل سعه المحرك"
                    className="ec-input"
                    min="0"
                  />
                </div>
              </div>

              <div className="ep-wrapper">
                <div className="ep-header">
                  <div className="ep-title">قوه المحرك (HP)</div>
                </div>
                <div className="ep-input-container">
                  <input
                    type="number"
                    placeholder="ادخل قوه المحرك"
                    className="ep-input"
                    min="0"
                  />
                </div>
              </div>

              <div className="kc-wrapper">
                <div className="kc-header">
                  <div className="kc-title">عداد الكيلومتر (Km)</div>
                </div>
                <div className="kc-input-container">
                  <input
                    type="number"
                    placeholder="ادخل عداد الكيلومتر"
                    className="kc-input"
                    min="0"
                  />
                </div>
              </div>

              <div className="pi-wrapper">
                <div className="pi-header">
                  <div className="pi-title">السعر</div>
                </div>
                <div className="pi-input-container">
                  <input
                    type="number"
                    placeholder="ادخل السعر"
                    className="pi-input"
                    min="0"
                  />
                </div>
              </div>

              <div className="features-row">
                <div className="feature-tech-container">
                  <div className="feature-tech-header">
                    <div className="feature-tech-title">
                      الميزات التكنولوجيه
                    </div>
                  </div>
                  <div className="feature-tech-background" />
                  <div className="feature-tech-input-wrapper">
                    <textarea
                      className="feature-tech-textarea"
                      placeholder="ادخل الميزات التكنولوجيه...."
                    ></textarea>
                  </div>
                </div>

                <div className="safety-container">
                  <div className="safety-header">
                    <div className="safety-title">وسائل الامان</div>
                  </div>
                  <div className="safety-background" />
                  <div className="safety-input-wrapper">
                    <textarea
                      className="safety-textarea"
                      placeholder="ادخل وسائل الامان...."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="dimensions-container">
                <div className="dimensions-header">
                  <div className="dimensions-title">الابعاد</div>
                </div>
                <div className="dimensions-background" />
                <div className="dimensions-input-wrapper">
                  <textarea
                    className="dimensions-textarea"
                    placeholder="ادخل ابعاد السياره...."
                  ></textarea>
                </div>
              </div>

              <div className="car-images-container">
                <div className="car-images-title">
                  <div>صور السياره</div>
                </div>

                {[...Array(5)].map((_, index) => (
                  <div
                    className={`image-box image-box-${index}`}
                    key={index}
                    style={{
                      position: "relative",
                      width: "150px",
                      height: "150px",
                      border: "1px solid #ccc",
                      margin: "5px",
                    }}
                  >
                    <div
                      className="image-placeholder"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="upload-text"> 📷</div>
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: "pointer",
                      }}
                      onChange={(e) => {
                        // هنا ممكن تضيف كود يعرض الصورة أو يخزنها
                        console.log("صورة مختارة", e.target.files[0]);
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="image-limit-note">
                <div className="image-limit-text">
                  الحد المسموح به خمس صور فقط
                </div>
              </div>

              <div className="container">
                <button className="car-banner">
                  <span className="car-banner-text">عرض السياره</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === "new" && (
            <div>
              <h2>بيع سيارة جديدة</h2>
              {/* نفس حقول اختيار موديل، ماركة، هيكل، إلخ */}
              <div className="filter-container">
                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر ماركة السياره</option>
                    <option value="toyota">تويوتا</option>
                    <option value="nissan">نيسان</option>
                    <option value="bmw">بي إم دبليو</option>
                  </select>
                </div>
                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر ماركه</option>
                    <option value="model1">موديل 1</option>
                    <option value="model2">موديل 2</option>
                    <option value="model3">موديل 3</option>
                  </select>
                </div>
                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر الدوله المستورد منها</option>
                    <option value="sedan">الايمارات</option>
                    <option value="suv"> السعوديه</option>
                    <option value="pickup"> قطر</option>
                  </select>
                </div>
                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر هيكل السياره</option>
                    <option value="auto">سيدان</option>
                    <option value="manual">دفع رباعي</option>
                  </select>
                </div>
                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر سنة الصنع</option>
                    {Array.from({ length: 15 }, (_, i) => {
                      const year = 2025 - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اختر ناقل السياره</option>
                    <option value="auto">أوتوماتيك</option>
                    <option value="manual">عادي</option>
                  </select>
                </div>

                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">نوع الوقود</option>
                    <option value="petrol">بنزين</option>
                    <option value="diesel">ديزل</option>
                    <option value="electric">كهرباء</option>
                  </select>
                </div>
                <div className="filter-box">
                  <select className="filter-select">
                    <option value="">اللون</option>
                    <option value="black">أسود</option>
                    <option value="white">أبيض</option>
                    <option value="red">أحمر</option>
                  </select>
                </div>
              </div>

              <div className="ec-container">
                <div className="ec-header">
                  <div className="ec-title">سعه المحرك (CC)</div>
                </div>
                <div className="ec-input-wrapper">
                  <input
                    type="number"
                    placeholder="ادخل سعه المحرك"
                    className="ec-input"
                    min="0"
                  />
                </div>
              </div>

              <div className="ep-wrapper">
                <div className="ep-header">
                  <div className="ep-title">قوه المحرك (HP)</div>
                </div>
                <div className="ep-input-container">
                  <input
                    type="number"
                    placeholder="ادخل قوه المحرك"
                    className="ep-input"
                    min="0"
                  />
                </div>
              </div>
              <div className="ep-wrapper">
                <div className="ep-header">
                  <div className="ep-title">عداد الكيلوميترات (km)</div>
                </div>
                <div className="ep-input-container">
                  <input
                    type="number"
                    placeholder="ادخل قوه المحرك"
                    className="ep-input"
                    min="0"
                  />
                </div>
              </div>
              <div className="pi-wrapper">
                <div className="pi-header">
                  <div className="pi-title">السعر</div>
                </div>
                <div className="pi-input-container">
                  <input
                    type="number"
                    placeholder="ادخل السعر"
                    className="pi-input"
                    min="0"
                  />
                </div>
              </div>

              <div className="features-row">
                <div className="feature-tech-container">
                  <div className="feature-tech-header">
                    <div className="feature-tech-title">
                      الميزات التكنولوجيه
                    </div>
                  </div>
                  <div className="feature-tech-background" />
                  <div className="feature-tech-input-wrapper">
                    <textarea
                      className="feature-tech-textarea"
                      placeholder="ادخل الميزات التكنولوجيه...."
                    ></textarea>
                  </div>
                </div>

                <div className="safety-container">
                  <div className="safety-header">
                    <div className="safety-title">وسائل الامان</div>
                  </div>
                  <div className="safety-background" />
                  <div className="safety-input-wrapper">
                    <textarea
                      className="safety-textarea"
                      placeholder="ادخل وسائل الامان...."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="dimensions-container">
                <div className="dimensions-header">
                  <div className="dimensions-title">الابعاد</div>
                </div>
                <div className="dimensions-background" />
                <div className="dimensions-input-wrapper">
                  <textarea
                    className="dimensions-textarea"
                    placeholder="ادخل ابعاد السياره...."
                  ></textarea>
                </div>
              </div>

              <div className="car-images-container">
                <div className="car-images-title">
                  <div>صور السياره</div>
                </div>

                {[...Array(5)].map((_, index) => (
                  <div
                    className={`image-box image-box-${index}`}
                    key={index}
                    style={{
                      position: "relative",
                      width: "150px",
                      height: "150px",
                      border: "1px solid #ccc",
                      margin: "5px",
                    }}
                  >
                    <div
                      className="image-placeholder"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="upload-text"> 📷</div>
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: "pointer",
                      }}
                      onChange={(e) => {
                        // هنا ممكن تضيف كود يعرض الصورة أو يخزنها
                        console.log("صورة مختارة", e.target.files[0]);
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="image-limit-note">
                <div className="image-limit-text">
                  الحد المسموح به خمس صور فقط
                </div>
              </div>

              <div className="container">
                <button className="car-banner">
                  <span className="car-banner-text">عرض السياره</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === "mycar" && (
            <div>
              <div className="card-container">
                <div className="card-background" />
                <img
                  className="card-image"
                  src="https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Small/News/62f3959513224410a3a77719_07b4ff8b-5445-482b-9ec8-c4cf579ba992.jpeg"
                  alt="car"
                />

                <div className="card-title-wrapper">
                  <div className="card-title">فورد ترانسيت_2021</div>
                </div>

                <div className="card-spec card-transmission">
                  <div className="spec-text">اتوماتيك</div>
                  <div className="spec-icon">
                    <div className="icon-box-a" />
                  </div>
                </div>

                <div className="card-spec card-horsepower">
                  <div className="spec-text">128 HP</div>
                  <div className="spec-icon">
                    <div className="icon-box-b" />
                    <div className="icon-box-c" />
                  </div>
                </div>

                <div className="card-spec card-speed">
                  <div className="spec-text">92</div>
                  <div className="spec-icon">
                    <div className="icon-box-d" />
                    <div className="icon-box-e" />
                  </div>
                </div>

                <div className="card-spec card-engine">
                  <div className="spec-text">CC 1600</div>
                  <div className="spec-icon">
                    <div className="icon-box-f" />
                  </div>
                </div>

                <div className="card-price">
                  <div className="price-text">$22,000</div>
                </div>

                <div className="card-origin">
                  <div className="origin-text">مستورد من الامارات</div>
                </div>

                <div className="card-avatar">
                  <div className="avatar-background" />
                  <div className="avatar-icon">
                    <div className="icon-avatar" />
                  </div>
                </div>

                <div className="card-button">
                  <div className="btn-icon" />
                  <div className="btn-dot" />
                  <div className="btn-text">تفاصيل</div>
                </div>
              </div>
              <div className="vehicle-wrapper">
                <div className="vehicle-bg" />
                <img
                  className="vehicle-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkpswg4D6qnyE2gABSEVnt9X9vlV79ustmw&s"
                  alt="vehicle"
                />

                <div className="vehicle-title-box">
                  <div className="vehicle-title">فورد ترانسيت_2021</div>
                </div>

                <div className="info-box info-transmission">
                  <div className="info-text">اتوماتيك</div>
                  <div className="info-icon">
                    <div className="shape-transmission" />
                  </div>
                </div>

                <div className="info-box info-power">
                  <div className="info-text">128 HP</div>
                  <div className="info-icon">
                    <div className="shape-power1" />
                    <div className="shape-power2" />
                  </div>
                </div>

                <div className="info-box info-speed">
                  <div className="info-text">92</div>
                  <div className="info-icon">
                    <div className="shape-speed1" />
                    <div className="shape-speed2" />
                  </div>
                </div>

                <div className="info-box info-engine">
                  <div className="info-text">CC 1600</div>
                  <div className="info-icon">
                    <div className="shape-engine" />
                  </div>
                </div>

                <div className="price-section">
                  <div className="price-text">$22,000</div>
                </div>

                <div className="import-box">
                  <div className="import-text">مستورد من الامارات</div>
                </div>

                <div className="avatar-box">
                  <div className="avatar-circle" />
                  <div className="avatar-inner">
                    <div className="avatar-icon" />
                  </div>
                </div>

                <div className="details-btn">
                  <div className="btn-shape" />
                  <div className="btn-dot" />
                  <div className="btn-label">تفاصيل</div>
                </div>
              </div>
              <div className="vehicle-wrapper">
                <div className="vehicle-bg" />
                <img
                  className="vehicle-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZCBg5xCg8oXU5GsPDPzvJY9h7QgCSS4S8Kkw_MbylCl4HMtUGbfvvQRV5Aw1lukeQcM&usqp=CAU"
                  alt="car"
                />

                <div className="vehicle-title-box">
                  <div className="vehicle-title">فورد ترانسيت_2021</div>
                </div>

                <div className="info-box info-transmission">
                  <div className="info-text">اتوماتيك</div>
                  <div className="info-icon">
                    <div className="shape-transmission" />
                  </div>
                </div>

                <div className="info-box info-power">
                  <div className="info-text">128 HP</div>
                  <div className="info-icon">
                    <div className="shape-power1" />
                    <div className="shape-power2" />
                  </div>
                </div>

                <div className="info-box info-speed">
                  <div className="info-text">92</div>
                  <div className="info-icon">
                    <div className="shape-speed1" />
                    <div className="shape-speed2" />
                  </div>
                </div>

                <div className="info-box info-engine">
                  <div className="info-text">CC 1600</div>
                  <div className="info-icon">
                    <div className="shape-engine" />
                  </div>
                </div>

                <div className="price-section">
                  <div className="price-text">$22,000</div>
                </div>

                <div className="import-box">
                  <div className="import-text">مستورد من الامارات</div>
                </div>

                <div className="avatar-box">
                  <div className="avatar-circle" />
                  <div className="avatar-inner">
                    <div className="avatar-icon" />
                  </div>
                </div>

                <div className="details-btn">
                  <div className="btn-shape" />
                  <div className="btn-dot" />
                  <div className="btn-label">تفاصيل</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
