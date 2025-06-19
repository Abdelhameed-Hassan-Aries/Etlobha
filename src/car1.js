import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./car1.css";
import carIcon from "./image/1.png";
import searchIcon from "./image/2.png";
import mainCarImg from "./image/car1.png";
import thumb1 from "./image/car1.png";
import thumb2 from "./image/car2.png";
import thumb3 from "./image/car3.png";
import thumb4 from "./image/car4.png";
import thumb5 from "./image/car5.png";

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

      <div
        style={{
          width: 1440,
          height: 1024,
          position: "relative",
          background: "white",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: 986,
            height: 656,
            left: 354,
            top: 32,
            position: "absolute",
            background: "#C4C4C4",
            overflow: "hidden",
            borderRadius: 16,
          }}
        >
          <img
            style={{
              width: 1192,
              height: 847,
              left: -164,
              top: -96,
              position: "absolute",
            }}
            src={mainCarImg}
          />
          <div
            style={{
              width: 48,
              height: 48,
              left: 72,
              top: 352,
              position: "absolute",
              transform: "rotate(180deg)",
              transformOrigin: "top left",
              background: "#D9D9D9",
            }}
          />
        </div>
        <img
          style={{
            width: 222,
            height: 152,
            left: 100,
            top: 32,
            position: "absolute",
            borderRadius: 16,
          }}
          src={thumb1}
        />
        <img
          style={{
            width: 222,
            height: 152,
            left: 100,
            top: 200,
            position: "absolute",
            borderRadius: 16,
          }}
          src={thumb2}
        />
        <img
          style={{
            width: 222,
            height: 152,
            left: 100,
            top: 368,
            position: "absolute",
            borderRadius: 16,
          }}
          src={thumb3}
        />
        <img
          style={{
            width: 222,
            height: 152,
            left: 100,
            top: 536,
            position: "absolute",
            borderRadius: 16,
          }}
          src={thumb4}
        />
        <img
          style={{
            width: 222,
            height: 152,
            left: 100,
            top: 704,
            position: "absolute",
            borderRadius: 16,
          }}
          src={thumb5}
        />
        <div
          style={{
            padding: 10,
            left: 1118,
            top: 701,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 24,
              fontFamily: "Tajawal",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            {" "}
            هيونداي إلنترا 2025
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 1199,
            top: 750,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 20,
              fontFamily: "Tajawal",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            اتوماتيك
          </div>
          <div
            style={{
              width: 24,
              height: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 21.51,
                height: 23.99,
                left: 1.24,
                top: 0.01,
                position: "absolute",
                background: "#162087",
              }}
            />
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 946,
            top: 750,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 20,
              fontFamily: "Tajawal",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            128 HP
          </div>
          <div
            style={{
              width: 24,
              height: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 20.11,
                height: 21,
                left: 2.39,
                top: 1.5,
                position: "absolute",
                background: "#162087",
              }}
            />
            <div
              style={{
                width: 15.15,
                height: 15.67,
                left: 1.5,
                top: 5.33,
                position: "absolute",
                background: "#162087",
              }}
            />
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 862,
            top: 750,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 20,
              fontFamily: "Tajawal",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            92
          </div>
          <div
            style={{
              width: 24,
              height: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 3.03,
                height: 5.08,
                left: 7.46,
                top: 14.71,
                position: "absolute",
                background: "#162087",
              }}
            />
            <div
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#162087",
              }}
            />
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 664,
            top: 750,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 20,
              fontFamily: "Tajawal",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            مستورد من الامارات
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 1067,
            top: 750,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 20,
              fontFamily: "Tajawal",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            CC 1600
          </div>
          <div
            style={{
              width: 24,
              height: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 22,
                height: 16,
                left: 1,
                top: 4,
                position: "absolute",
                background: "#162087",
              }}
            />
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 1140,
            top: 812,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 20,
              fontFamily: "Tajawal",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            الميزات التكنولوجية
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 776,
            top: 807,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 20,
              fontFamily: "Tajawal",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            وسائل الأمان
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 515,
            top: 812,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 20,
              fontFamily: "Tajawal",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            الأبعاد
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 968,
            top: 851,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 16,
              fontFamily: "Tajawal",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            شاشة لمس 8 بوصة + Apple CarPlay / Android Auto
            <br />
            كاميرا خلفية عالية الدقة
            <br />
            شحن لاسلكي
            <br />
            نظام ملاحة ذكي
            <br />
            مساعد الفرامل التلقائي (AEB)
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 666,
            top: 851,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 16,
              fontFamily: "Tajawal",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            6 وسائد هوائية
            <br />
            نظام الثبات الإلكتروني (ESC)
            <br />
            نظام التنبيه عند الخروج عن المسار
            <br />
            حساسات أمامية وخلفية
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 385,
            top: 851,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "black",
              fontSize: 16,
              fontFamily: "Tajawal",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            الطول: 4.67 متر
            <br />
            العرض: 1.82 متر
            <br />
            الارتفاع: 1.43 متر
            <br />
            سعة الشنطة الخلفية: 474 لتر
          </div>
        </div>
        <div
          style={{
            padding: 10,
            left: 385,
            top: 722,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              color: "#162087",
              fontSize: 32,
              fontFamily: "DM Sans",
              fontWeight: "700",
              lineHeight: 30,
              wordWrap: "break-word",
            }}
          >
            $50,000
          </div>
        </div>
        <div
          style={{
            width: 225,
            height: 50,
            left: 98,
            top: 880,
            position: "absolute",
            background: "#162087",
            overflow: "hidden",
            borderRadius: 63,
            cursor: "pointer",
          }}
          onClick={() => navigate("/buy")}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/buy");
            }
          }}
        >
          <div
            style={{
              padding: 10,
              left: 39,
              top: 3,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div style={{ width: 24, height: 24, background: "#D9D9D9" }} />
            <div style={{ width: 13, height: 13, background: "white" }} />
            <div
              style={{
                textAlign: "right",
                color: "white",
                fontSize: 20,
                fontFamily: "Tajawal",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              اشتري الان
            </div>
          </div>
          <div
            style={{
              width: 24,
              height: 34,
              left: 32,
              top: 8,
              position: "absolute",
            }}
          />
        </div>
        <div
          style={{
            width: 1440,
            height: 901,
            left: -20,
            top: 1273,
            position: "absolute",
            background: "#F5F5F5",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 210,
              left: 1130,
              top: 16,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              gap: 16,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 210,
                justifyContent: "space-between",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: 200,
                    textAlign: "right",
                    color: "#162087",
                    fontSize: 20,
                    fontFamily: "Tajawal",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  سيارات للبيع جديده
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 0,
                outline: "1.50px #E8E8E8 solid",
                outlineOffset: "-0.75px",
              }}
            ></div>
          </div>
          <div
            style={{
              width: 292,
              height: 313,
              left: 1048,
              top: 102,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 292,
                height: 218.65,
                left: 0,
                top: 0,
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 292,
                  height: 218.65,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  left: 272,
                  top: 20,
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                width: 292,
                height: 94,
                left: 0,
                top: 219,
                position: "absolute",
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderLeft: "1px #E9E9E9 solid",
                borderRight: "1px #E9E9E9 solid",
                borderBottom: "1px #E9E9E9 solid",
              }}
            >
              <div
                style={{
                  width: 157,
                  left: 68,
                  top: 12.35,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 14,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 21,
                    textAlign: "right",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 18,
                    fontFamily: "DM Sans",
                    fontWeight: "500",
                    lineHeight: 21.6,
                    wordWrap: "break-word",
                  }}
                >
                  فورد ترانسيت_2021
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 30,
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 20,
                    fontFamily: "DM Sans",
                    fontWeight: "700",
                    lineHeight: 30,
                    wordWrap: "break-word",
                  }}
                >
                  $22,000
                </div>
              </div>
            </div>
            <img
              style={{
                width: 350,
                height: 243,
                left: 0,
                top: -12,
                position: "absolute",
              }}
              src="https://placehold.co/350x243"
            />
          </div>
          <div
            style={{
              width: 292,
              height: 313,
              left: 1046,
              top: 453,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 292,
                height: 218.65,
                left: 0,
                top: 0,
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 292,
                  height: 218.65,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  left: 272,
                  top: 20,
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                width: 292,
                height: 94,
                left: 0,
                top: 219,
                position: "absolute",
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderLeft: "1px #E9E9E9 solid",
                borderRight: "1px #E9E9E9 solid",
                borderBottom: "1px #E9E9E9 solid",
              }}
            >
              <div
                style={{
                  width: 157,
                  left: 68,
                  top: 12.35,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 14,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 21,
                    textAlign: "right",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 18,
                    fontFamily: "DM Sans",
                    fontWeight: "500",
                    lineHeight: 21.6,
                    wordWrap: "break-word",
                  }}
                >
                  فورد ترانسيت_2021
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 30,
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 20,
                    fontFamily: "DM Sans",
                    fontWeight: "700",
                    lineHeight: 30,
                    wordWrap: "break-word",
                  }}
                >
                  $22,000
                </div>
              </div>
            </div>
            <img
              style={{
                width: 350,
                height: 243,
                left: 0,
                top: -12,
                position: "absolute",
              }}
              src="https://placehold.co/350x243"
            />
          </div>
          <div
            style={{
              width: 292,
              height: 313,
              left: 732,
              top: 102,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 292,
                height: 218.65,
                left: 0,
                top: 0,
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 292,
                  height: 218.65,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  left: 272,
                  top: 20,
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                width: 292,
                height: 94,
                left: 0,
                top: 219,
                position: "absolute",
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderLeft: "1px #E9E9E9 solid",
                borderRight: "1px #E9E9E9 solid",
                borderBottom: "1px #E9E9E9 solid",
              }}
            >
              <div
                style={{
                  width: 157,
                  left: 68,
                  top: 12.35,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 14,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 21,
                    textAlign: "right",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 18,
                    fontFamily: "DM Sans",
                    fontWeight: "500",
                    lineHeight: 21.6,
                    wordWrap: "break-word",
                  }}
                >
                  فورد ترانسيت_2021
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 30,
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 20,
                    fontFamily: "DM Sans",
                    fontWeight: "700",
                    lineHeight: 30,
                    wordWrap: "break-word",
                  }}
                >
                  $22,000
                </div>
              </div>
            </div>
            <img
              style={{
                width: 350,
                height: 243,
                left: 0,
                top: -12,
                position: "absolute",
              }}
              src="https://placehold.co/350x243"
            />
          </div>
          <div
            style={{
              width: 292,
              height: 313,
              left: 730,
              top: 453,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 292,
                height: 218.65,
                left: 0,
                top: 0,
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 292,
                  height: 218.65,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  left: 272,
                  top: 20,
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                width: 292,
                height: 94,
                left: 0,
                top: 219,
                position: "absolute",
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderLeft: "1px #E9E9E9 solid",
                borderRight: "1px #E9E9E9 solid",
                borderBottom: "1px #E9E9E9 solid",
              }}
            >
              <div
                style={{
                  width: 157,
                  left: 68,
                  top: 12.35,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 14,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 21,
                    textAlign: "right",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 18,
                    fontFamily: "DM Sans",
                    fontWeight: "500",
                    lineHeight: 21.6,
                    wordWrap: "break-word",
                  }}
                >
                  فورد ترانسيت_2021
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 30,
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 20,
                    fontFamily: "DM Sans",
                    fontWeight: "700",
                    lineHeight: 30,
                    wordWrap: "break-word",
                  }}
                >
                  $22,000
                </div>
              </div>
            </div>
            <img
              style={{
                width: 350,
                height: 243,
                left: 0,
                top: -12,
                position: "absolute",
              }}
              src="https://placehold.co/350x243"
            />
          </div>
          <div
            style={{
              width: 292,
              height: 313,
              left: 416,
              top: 102,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 292,
                height: 218.65,
                left: 0,
                top: 0,
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 292,
                  height: 218.65,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  left: 272,
                  top: 20,
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                width: 292,
                height: 94,
                left: 0,
                top: 219,
                position: "absolute",
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderLeft: "1px #E9E9E9 solid",
                borderRight: "1px #E9E9E9 solid",
                borderBottom: "1px #E9E9E9 solid",
              }}
            >
              <div
                style={{
                  width: 157,
                  left: 68,
                  top: 12.35,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 14,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 21,
                    textAlign: "right",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 18,
                    fontFamily: "DM Sans",
                    fontWeight: "500",
                    lineHeight: 21.6,
                    wordWrap: "break-word",
                  }}
                >
                  فورد ترانسيت_2021
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 30,
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 20,
                    fontFamily: "DM Sans",
                    fontWeight: "700",
                    lineHeight: 30,
                    wordWrap: "break-word",
                  }}
                >
                  $22,000
                </div>
              </div>
            </div>
            <img
              style={{
                width: 350,
                height: 243,
                left: 0,
                top: -12,
                position: "absolute",
              }}
              src="https://placehold.co/350x243"
            />
          </div>
          <div
            style={{
              width: 292,
              height: 313,
              left: 414,
              top: 453,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 292,
                height: 218.65,
                left: 0,
                top: 0,
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 292,
                  height: 218.65,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  left: 272,
                  top: 20,
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                width: 292,
                height: 94,
                left: 0,
                top: 219,
                position: "absolute",
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderLeft: "1px #E9E9E9 solid",
                borderRight: "1px #E9E9E9 solid",
                borderBottom: "1px #E9E9E9 solid",
              }}
            >
              <div
                style={{
                  width: 157,
                  left: 68,
                  top: 12.35,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 14,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 21,
                    textAlign: "right",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 18,
                    fontFamily: "DM Sans",
                    fontWeight: "500",
                    lineHeight: 21.6,
                    wordWrap: "break-word",
                  }}
                >
                  فورد ترانسيت_2021
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 30,
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 20,
                    fontFamily: "DM Sans",
                    fontWeight: "700",
                    lineHeight: 30,
                    wordWrap: "break-word",
                  }}
                >
                  $22,000
                </div>
              </div>
            </div>
            <img
              style={{
                width: 350,
                height: 243,
                left: 0,
                top: -12,
                position: "absolute",
              }}
              src="https://placehold.co/350x243"
            />
          </div>
          <div
            style={{
              width: 292,
              height: 313,
              left: 100,
              top: 102,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 292,
                height: 218.65,
                left: 0,
                top: 0,
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 292,
                  height: 218.65,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  left: 272,
                  top: 20,
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                width: 292,
                height: 94,
                left: 0,
                top: 219,
                position: "absolute",
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderLeft: "1px #E9E9E9 solid",
                borderRight: "1px #E9E9E9 solid",
                borderBottom: "1px #E9E9E9 solid",
              }}
            >
              <div
                style={{
                  width: 157,
                  left: 68,
                  top: 12.35,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 14,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 21,
                    textAlign: "right",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 18,
                    fontFamily: "DM Sans",
                    fontWeight: "500",
                    lineHeight: 21.6,
                    wordWrap: "break-word",
                  }}
                >
                  فورد ترانسيت_2021
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 30,
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 20,
                    fontFamily: "DM Sans",
                    fontWeight: "700",
                    lineHeight: 30,
                    wordWrap: "break-word",
                  }}
                >
                  $22,000
                </div>
              </div>
            </div>
            <img
              style={{
                width: 350,
                height: 243,
                left: 0,
                top: -12,
                position: "absolute",
              }}
              src="https://placehold.co/350x243"
            />
          </div>
          <div
            style={{
              width: 292,
              height: 313,
              left: 98,
              top: 453,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 292,
                height: 218.65,
                left: 0,
                top: 0,
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 292,
                  height: 218.65,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  left: 272,
                  top: 20,
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                width: 292,
                height: 94,
                left: 0,
                top: 219,
                position: "absolute",
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderLeft: "1px #E9E9E9 solid",
                borderRight: "1px #E9E9E9 solid",
                borderBottom: "1px #E9E9E9 solid",
              }}
            >
              <div
                style={{
                  width: 157,
                  left: 68,
                  top: 12.35,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 14,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 21,
                    textAlign: "right",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 18,
                    fontFamily: "DM Sans",
                    fontWeight: "500",
                    lineHeight: 21.6,
                    wordWrap: "break-word",
                  }}
                >
                  فورد ترانسيت_2021
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 30,
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#050B20",
                    fontSize: 20,
                    fontFamily: "DM Sans",
                    fontWeight: "700",
                    lineHeight: 30,
                    wordWrap: "break-word",
                  }}
                >
                  $22,000
                </div>
              </div>
            </div>
            <img
              style={{
                width: 350,
                height: 243,
                left: 0,
                top: -12,
                position: "absolute",
              }}
              src="https://placehold.co/350x243"
            />
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
