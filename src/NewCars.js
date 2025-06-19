import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "./contexts/AppContext";
import "./Home.css";

// Import car images
import car1Img from "./image/car1.png";
import car2Img from "./image/car2.png";
import car3Img from "./image/car3.png";
import car4Img from "./image/car4.png";
import car5Img from "./image/car5.png";
import car6Img from "./image/car6.png";
import car7Img from "./image/car7.png";
import car8Img from "./image/car8.png";

// Import other images
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";

function NewCars() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
    setIsSearching(true);
    try {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  // New cars data - same cars but with new car info
  const newCars = [
    {
      id: 1,
      name: isEnglish ? "Ford Transit 2024" : "فورد ترانزيت 2024",
      price: "$32,000",
      image: car1Img,
      year: "2024",
      mileage: isEnglish ? "0 km" : "0 كم",
      condition: isEnglish ? "New" : "جديد",
    },
    {
      id: 2,
      name: isEnglish ? "Toyota Camry 2024" : "تويوتا كامري 2024",
      price: "$28,500",
      image: car2Img,
      year: "2024",
      mileage: isEnglish ? "0 km" : "0 كم",
      condition: isEnglish ? "New" : "جديد",
    },
    {
      id: 3,
      name: isEnglish ? "Hyundai Elantra 2024" : "هيونداي النترا 2024",
      price: "$25,800",
      image: car3Img,
      year: "2024",
      mileage: isEnglish ? "0 km" : "0 كم",
      condition: isEnglish ? "New" : "جديد",
    },
    {
      id: 4,
      name: isEnglish ? "Toyota Corolla 2024" : "تويوتا كورولا 2024",
      price: "$24,500",
      image: car4Img,
      year: "2024",
      mileage: isEnglish ? "0 km" : "0 كم",
      condition: isEnglish ? "New" : "جديد",
    },
    {
      id: 5,
      name: isEnglish ? "Hyundai Elantra 2024" : "هيونداي إلنترا 2024",
      price: "$26,800",
      image: car5Img,
      year: "2024",
      mileage: isEnglish ? "0 km" : "0 كم",
      condition: isEnglish ? "New" : "جديد",
    },
    {
      id: 6,
      name: isEnglish ? "BMW X5 2024" : "بي إم دبليو إكس 5 2024",
      price: "$75,000",
      image: car6Img,
      year: "2024",
      mileage: isEnglish ? "0 km" : "0 كم",
      condition: isEnglish ? "New" : "جديد",
    },
    {
      id: 7,
      name: isEnglish ? "Mercedes C200 2024" : "مرسيدس سي 200 2024",
      price: "$55,000",
      image: car7Img,
      year: "2024",
      mileage: isEnglish ? "0 km" : "0 كم",
      condition: isEnglish ? "New" : "جديد",
    },
    {
      id: 8,
      name: isEnglish ? "Audi A4 2024" : "أودي إيه 4 2024",
      price: "$48,000",
      image: car8Img,
      year: "2024",
      mileage: isEnglish ? "0 km" : "0 كم",
      condition: isEnglish ? "New" : "جديد",
    },
  ];

  const handleCarClick = (carId) => {
    navigate(`/car/${carId}`);
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
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              {isEnglish ? "Browse New Cars" : "تصفح السيارات الجديدة"}
            </h1>
            <p className="hero-subtitle">
              {isEnglish
                ? "Discover the latest models with warranty and cutting-edge features"
                : "اكتشف أحدث الموديلات مع الضمان والميزات المتطورة"}
            </p>
            <div className="hero-actions">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/brands")}
              >
                {isEnglish ? "Browse All Models" : "تصفح جميع الموديلات"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Cars Section */}
      <section className="cars-section">
        <div className="container">
          <h2 className="section-title">
            {isEnglish ? "Latest New Cars" : "أحدث السيارات الجديدة"}
          </h2>
          <div className="cars-grid">
            {newCars.map((car) => (
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
                    <span className="car-condition new-car">
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
                  ? "Your trusted partner for finding the perfect new car"
                  : "شريكك الموثوق للعثور على السيارة الجديدة المثالية"}
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

export default NewCars;
