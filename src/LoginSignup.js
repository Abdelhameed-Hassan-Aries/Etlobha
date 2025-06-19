import React, { useState, useContext } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { LayoutContext } from "../index";
import { useNavigate } from "react-router-dom";
import styles from "./LoginSignup.module.css";

const LoginSignup = () => {
  const { data, dispatch } = useContext(LayoutContext);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const toggleModal = () => {
    dispatch({ type: "loginSignupModalToggle", payload: false });
    dispatch({ type: "loginSignupError", payload: false });
    navigate("/");
  };

  return (
    <>
      {data.loginSignupModal && (
        <div className={styles.overlay}>
          <div className={styles.modalContainer}>
            <div className={styles.modalBox}>
              {/* القسم الأزرق */}
              <div className={styles.welcomeSection}>
                <h2>{login ? "مرحباً بعودتك!" : "مرحباً بك!"}</h2>
                <p>
                  {login
                    ? "سجل الدخول لمتابعة تصفح السيارات."
                    : "هل لديك حساب؟"}
                </p>
                <button onClick={() => setLogin(!login)}>
                  {login ? "إنشاء حساب جديد" : "تسجيل الدخول"}
                </button>
              </div>

              {/* نموذج الدخول أو التسجيل */}
              <div className={styles.formSection}>
                <span className={styles.closeButton} onClick={toggleModal}>
                  ×
                </span>
                {login ? (
                  <Login onSwitchToSignup={() => setLogin(false)} />
                ) : (
                  <Signup onSwitchToLogin={() => setLogin(true)} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignup;
