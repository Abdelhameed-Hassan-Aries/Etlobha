import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { homeAPI } from "../services/clientAPI";
import { useAppContext } from "../contexts/AppContext";
import carIcon from "../image/1.png";
import searchIcon from "../image/2.png";
import "./Header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Use shared context including authentication
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
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <header className="modern-header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo-section">
          <Link to="/" className="logo">
            {isEnglish ? "Otlobha" : "اطلبها"}
          </Link>
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
  );
};

export default Header;
