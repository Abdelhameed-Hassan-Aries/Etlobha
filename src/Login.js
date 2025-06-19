import React, { useState, useContext, useEffect } from "react";
import { authAPI } from "./services/clientAPI";
import { LayoutContext } from "./LayoutContext";
import { useAppContext } from "./contexts/AppContext";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./LoginSignup.module.css";

const Login = ({ onClose }) => {
  const { data: layoutData, dispatch: layoutDispatch } =
    useContext(LayoutContext);
  const { login, isEnglish } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState({
    phone: "",
    password: "",
    error: false,
    loading: false,
  });

  useEffect(() => {
    if (location.state && location.state.phone) {
      setData((prevData) => ({ ...prevData, phone: location.state.phone }));
    }
  }, [location.state]);

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    try {
      const responseData = await authAPI.login({
        phone: data.phone,
        password: data.password,
      });

      if (responseData.message) {
        setData({ phone: "", password: "", loading: false, error: false });

        // Update global authentication state
        const userData = responseData.user || {
          name: data.phone,
          phone: data.phone,
        };
        const token =
          responseData.token ||
          responseData.access_token ||
          JSON.stringify(responseData);

        // Store JWT for backward compatibility
        localStorage.setItem("jwt", JSON.stringify(responseData));

        // Use the login function which will set authToken and userData
        login(userData, token);

        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setData({
        ...data,
        loading: false,
        error:
          error.message ||
          (isEnglish
            ? "An error occurred during login"
            : "حدث خطأ أثناء تسجيل الدخول"),
        password: "",
      });
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalBox}>
          {/* القسم الأزرق */}
          <div className={styles.welcomeSection}>
            <h2>{isEnglish ? "Welcome Back!" : "مرحبًا بعودتك!"}</h2>
            <p>
              {isEnglish
                ? "Login to continue browsing cars and exclusive offers."
                : "سجل الدخول لمتابعة تصفح السيارات والعروض الحصرية."}
            </p>
            <button onClick={() => navigate("/signup")}>
              {isEnglish ? "Create New Account" : "إنشاء حساب جديد"}
            </button>
          </div>

          {/* قسم النموذج */}
          <div className={styles.formSection}>
            <span className={styles.closeButton} onClick={() => navigate("/")}>
              ×
            </span>

            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              {isEnglish ? "Login" : "تسجيل الدخول"}
            </h2>

            {layoutData.loginSignupError && (
              <div
                style={{
                  background: "#ffe5e5",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "15px",
                  color: "#900",
                }}
              >
                {isEnglish
                  ? "You must login to complete the purchase. Don't have an account? Create one."
                  : "يجب تسجيل الدخول لإتمام الشراء. لا تملك حساباً؟ قم بإنشاء حساب."}
              </div>
            )}

            <input
              type="tel"
              placeholder={isEnglish ? "Phone Number" : "رقم الهاتف"}
              className={styles.input}
              value={data.phone}
              onChange={(e) => {
                setData({ ...data, phone: e.target.value, error: false });
                layoutDispatch({ type: "loginSignupError", payload: false });
              }}
            />

            <input
              type="password"
              placeholder={isEnglish ? "Password" : "كلمة المرور"}
              className={styles.input}
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value, error: false });
                layoutDispatch({ type: "loginSignupError", payload: false });
              }}
            />

            {data.error && (
              <p
                style={{ color: "red", fontSize: "14px", marginBottom: "15px" }}
              >
                {data.error}
              </p>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              <label>
                <input type="checkbox" style={{ marginLeft: "5px" }} />{" "}
                {isEnglish ? "Remember me" : "تذكرني"}
              </label>
              <a
                // href="/forgit"
                style={{ color: "#555" }}
              >
                {isEnglish ? "? Forgot password" : "هل نسيت كلمة المرور ؟"}
              </a>
            </div>

            <button
              onClick={formSubmit}
              className={styles.button}
              disabled={data.loading}
            >
              {data.loading
                ? isEnglish
                  ? "Logging in..."
                  : "جاري تسجيل الدخول..."
                : isEnglish
                ? "Login"
                : "تسجيل الدخول"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
