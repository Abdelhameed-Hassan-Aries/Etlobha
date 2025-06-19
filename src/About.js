import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "./contexts/AppContext";
import "./About.css";
import "./styles/global.css";
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";
import car1Img from "./image/car1.png";
import car2Img from "./image/car2.png";
import car3Img from "./image/car3.png";
import car4Img from "./image/car4.png";
import car5Img from "./image/car5.png";
import car6Img from "./image/car6.png";
import car7Img from "./image/car7.png";
import car8Img from "./image/car8.png";

function About() {
  const {
    isDarkMode,
    isEnglish,
    toggleDarkMode,
    toggleLanguage,
    isLoggedIn,
    user,
    logout,
  } = useAppContext();

  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    setShowLoginDropdown(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    // Simulate search delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSearching(false);
  };

  const usedCars = [
    {
      id: 1,
      name: isEnglish ? "Ford Transit 2021" : "فورد ترانزيت 2021",
      price: "$22,000",
      image: car1Img,
      year: 2021,
      mileage: "45,000 km",
      condition: isEnglish ? "Excellent" : "ممتاز",
    },
    {
      id: 2,
      name: isEnglish ? "Toyota Camry 2022" : "تويوتا كامري 2022",
      price: "$19,500",
      image: car2Img,
      year: 2022,
      mileage: "25,000 km",
      condition: isEnglish ? "Excellent" : "ممتاز",
    },
    {
      id: 3,
      name: isEnglish ? "Hyundai Elantra 2021" : "هيونداي النترا 2021",
      price: "$17,800",
      image: car3Img,
      year: 2021,
      mileage: "38,000 km",
      condition: isEnglish ? "Very Good" : "جيد جداً",
    },
    {
      id: 4,
      name: isEnglish ? "Toyota Camry 2020" : "تويوتا كامري 2020",
      price: "$18,500",
      image: car4Img,
      year: 2020,
      mileage: "52,000 km",
      condition: isEnglish ? "Good" : "جيد",
    },
    {
      id: 5,
      name: isEnglish ? "Hyundai Elantra 2021" : "هيونداي إلنترا 2021",
      price: "$17,200",
      image: car5Img,
      year: 2021,
      mileage: "41,000 km",
      condition: isEnglish ? "Very Good" : "جيد جداً",
    },
    {
      id: 6,
      name: isEnglish ? "BMW X5 2019" : "بي إم دبليو إكس 5 2019",
      price: "$45,000",
      image: car6Img,
      year: 2019,
      mileage: "65,000 km",
      condition: isEnglish ? "Excellent" : "ممتاز",
    },
    {
      id: 7,
      name: isEnglish ? "Mercedes C200 2020" : "مرسيدس سي 200 2020",
      price: "$38,000",
      image: car7Img,
      year: 2020,
      mileage: "48,000 km",
      condition: isEnglish ? "Excellent" : "ممتاز",
    },
    {
      id: 8,
      name: isEnglish ? "Audi A4 2019" : "أودي إيه 4 2019",
      price: "$32,000",
      image: car8Img,
      year: 2019,
      mileage: "58,000 km",
      condition: isEnglish ? "Good" : "جيد",
    },
  ];

  const handleCarClick = (carId) => {
    navigate(`/car/${carId}`);
  };

  return (
    <div
      className={`modern-about-app ${isDarkMode ? "dark-mode" : ""}`}
      dir={isEnglish ? "ltr" : "rtl"}
    >
      {/* Header */}
      <header className="modern-header">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-section">
            <h1 className="logo" onClick={() => navigate("/")}>
              {isEnglish ? "Otlobha" : "اطلبها"}
            </h1>
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
              <Link to="/" className="nav-link">
                <img src={carIcon} alt="Home" className="nav-icon" />
                <span>{isEnglish ? "Home" : "الرئيسية"}</span>
              </Link>
              <Link to="/used-cars" className="nav-link">
                <img src={carIcon} alt="Used Cars" className="nav-icon" />
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
                onClick={() => setShowLoginDropdown(!showLoginDropdown)}
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
                {showLoginDropdown && (
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
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              {isEnglish ? "Quality Used Cars" : "سيارات مستعملة عالية الجودة"}
            </h1>
            <p className="hero-subtitle">
              {isEnglish
                ? "Find reliable pre-owned vehicles inspected by our experts"
                : "اعثر على مركبات مستعملة موثوقة تم فحصها من قبل خبرائنا"}
            </p>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <main className="cars-main">
        <div className="container">
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
                  <div className="car-badge">
                    {isEnglish ? "Used" : "مستعمل"}
                  </div>
                </div>
                <div className="car-info">
                  <h3 className="car-name">{car.name}</h3>
                  <div className="car-details">
                    <span className="car-year">{car.year}</span>
                    <span className="car-mileage">{car.mileage}</span>
                    <span className="car-condition">{car.condition}</span>
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
      </main>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{isEnglish ? "Otlobha" : "اطلبها"}</h3>
              <p>
                {isEnglish
                  ? "Your trusted partner for finding quality used cars"
                  : "شريكك الموثوق للعثور على سيارات مستعملة عالية الجودة"}
              </p>
            </div>
            <div className="footer-section">
              <h4>{isEnglish ? "Quick Links" : "روابط سريعة"}</h4>
              <ul>
                <li>
                  <Link to="/">{isEnglish ? "Home" : "الرئيسية"}</Link>
                </li>
                <li>
                  <Link to="/brands">{isEnglish ? "Brands" : "البراندات"}</Link>
                </li>
                <li>
                  <Link to="/contact">
                    {isEnglish ? "Contact" : "اتصل بنا"}
                  </Link>
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
                  <Link to="/warranty">
                    {isEnglish ? "Warranty" : "الضمان"}
                  </Link>
                </li>
                <li>
                  <Link to="/inspection">
                    {isEnglish ? "Car Inspection" : "فحص السيارات"}
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

export default About;
