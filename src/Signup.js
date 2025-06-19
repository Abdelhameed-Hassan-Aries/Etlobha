import React, { useState } from "react";
import { authAPI } from "./services/clientAPI";
import { useAppContext } from "./contexts/AppContext";
import { useNavigate } from "react-router-dom";
import styles from "./LoginSignup.module.css";

const Signup = ({ onClose, onSwitchToLogin }) => {
  const { isEnglish } = useAppContext();
  const [data, setData] = useState({
    phone: "",
    password: "",
    cPassword: "",
    error: false,
    loading: false,
    success: false,
  });

  const navigate = useNavigate();

  const formSubmit = async () => {
    setData({ ...data, loading: true });

    if (data.cPassword !== data.password) {
      return setData({
        ...data,
        error: isEnglish ? "Passwords do not match" : "كلمة المرور غير متطابقة",
        loading: false,
      });
    }

    try {
      const responseData = await authAPI.register({
        phone: data.phone,
        password: data.password,
      });

      if (responseData.message) {
        setData({
          phone: "",
          password: "",
          cPassword: "",
          loading: false,
          error: false,
          success: true,
        });
        // Redirect to login page with phone
        navigate("/login", { state: { phone: data.phone } });
      }
    } catch (error) {
      console.error("Signup error:", error);
      setData({
        ...data,
        loading: false,
        error:
          error.message ||
          (isEnglish
            ? "An error occurred while creating the account"
            : "حدث خطأ أثناء إنشاء الحساب"),
        password: "",
        cPassword: "",
      });
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalBox}>
          {/* القسم الأزرق (مرحبا بك) */}
          <div className={styles.welcomeSection}>
            <h2>{isEnglish ? "Welcome!" : "مرحباً بك!"}</h2>
            <p>{isEnglish ? "Already have an account?" : "هل لديك حساب؟"}</p>
            <button onClick={() => navigate("/login")}>
              {isEnglish ? "Login" : "تسجيل الدخول"}
            </button>
          </div>

          {/* القسم الأبيض - نموذج التسجيل */}
          <div className={styles.formSection}>
            <span className={styles.closeButton} onClick={() => navigate("/")}>
              ×
            </span>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                {isEnglish ? "Create Account" : "إنشاء حساب"}
                <i className="fas fa-user-plus"></i>
              </h3>

              <div className={styles.socialIcons}>
                <img
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="Google"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/facebook.png"
                  alt="Facebook"
                />
              </div>
            </div>

            <input
              type="tel"
              placeholder={isEnglish ? "Phone Number" : "رقم الهاتف"}
              className={styles.input}
              value={data.phone}
              onChange={(e) =>
                setData({
                  ...data,
                  phone: e.target.value,
                  error: false,
                  success: false,
                })
              }
            />

            <input
              type="password"
              placeholder={isEnglish ? "Password" : "كلمة المرور"}
              className={styles.input}
              value={data.password}
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                  error: false,
                  success: false,
                })
              }
            />

            <input
              type="password"
              placeholder={isEnglish ? "Confirm Password" : "تأكيد كلمة المرور"}
              className={styles.input}
              value={data.cPassword}
              onChange={(e) =>
                setData({
                  ...data,
                  cPassword: e.target.value,
                  error: false,
                  success: false,
                })
              }
            />

            {data.error && (
              <p
                style={{ color: "red", fontSize: "14px", marginBottom: "15px" }}
              >
                {data.error}
              </p>
            )}

            <button
              onClick={formSubmit}
              className={styles.button}
              disabled={data.loading}
            >
              {data.loading
                ? isEnglish
                  ? "Creating..."
                  : "جارٍ الإنشاء..."
                : isEnglish
                ? "Create Account"
                : "إنشاء حساب"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
