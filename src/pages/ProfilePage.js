import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import Header from "../components/Header";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { isEnglish, user, login } = useAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: user?.name || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = isEnglish
        ? "Username is required"
        : "اسم المستخدم مطلوب";
    }

    if (formData.newPassword && formData.newPassword.length < 6) {
      newErrors.newPassword = isEnglish
        ? "Password must be at least 6 characters"
        : "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = isEnglish
        ? "Passwords do not match"
        : "كلمات المرور غير متطابقة";
    }

    if (formData.newPassword && !formData.currentPassword) {
      newErrors.currentPassword = isEnglish
        ? "Current password is required to change password"
        : "كلمة المرور الحالية مطلوبة لتغيير كلمة المرور";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update user data in context
      const updatedUser = {
        ...user,
        name: formData.username,
      };

      // Update the user in context
      login(updatedUser, localStorage.getItem("authToken"));

      setMessage(
        isEnglish
          ? "Profile updated successfully!"
          : "تم تحديث الملف الشخصي بنجاح!"
      );

      // Clear password fields
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    } catch (error) {
      setMessage(
        isEnglish
          ? "An error occurred while updating profile"
          : "حدث خطأ أثناء تحديث الملف الشخصي"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div
        className={`profile-container ${isEnglish ? "ltr" : "rtl"}`}
        dir={isEnglish ? "ltr" : "rtl"}
      >
        <div className="profile-header">
          <h1 className="profile-title">
            {isEnglish ? "Profile Settings" : "إعدادات الملف الشخصي"}
          </h1>
          <p className="profile-subtitle">
            {isEnglish
              ? "Manage your account information and preferences"
              : "إدارة معلومات حسابك وتفضيلاتك"}
          </p>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-section">
                <h2 className="section-title">
                  {isEnglish ? "Account Information" : "معلومات الحساب"}
                </h2>

                <div className="form-group">
                  <label htmlFor="username" className="form-label">
                    {isEnglish ? "Username" : "اسم المستخدم"}
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`form-input ${errors.username ? "error" : ""}`}
                    placeholder={
                      isEnglish ? "Enter your username" : "أدخل اسم المستخدم"
                    }
                  />
                  {errors.username && (
                    <span className="error-message">{errors.username}</span>
                  )}
                </div>
              </div>

              <div className="form-section">
                <h2 className="section-title">
                  {isEnglish ? "Change Password" : "تغيير كلمة المرور"}
                </h2>

                <div className="form-group">
                  <label htmlFor="currentPassword" className="form-label">
                    {isEnglish ? "Current Password" : "كلمة المرور الحالية"}
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    className={`form-input ${
                      errors.currentPassword ? "error" : ""
                    }`}
                    placeholder={
                      isEnglish
                        ? "Enter current password"
                        : "أدخل كلمة المرور الحالية"
                    }
                  />
                  {errors.currentPassword && (
                    <span className="error-message">
                      {errors.currentPassword}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="newPassword" className="form-label">
                    {isEnglish ? "New Password" : "كلمة المرور الجديدة"}
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className={`form-input ${
                      errors.newPassword ? "error" : ""
                    }`}
                    placeholder={
                      isEnglish
                        ? "Enter new password"
                        : "أدخل كلمة المرور الجديدة"
                    }
                  />
                  {errors.newPassword && (
                    <span className="error-message">{errors.newPassword}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
                    {isEnglish
                      ? "Confirm New Password"
                      : "تأكيد كلمة المرور الجديدة"}
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`form-input ${
                      errors.confirmPassword ? "error" : ""
                    }`}
                    placeholder={
                      isEnglish
                        ? "Confirm new password"
                        : "أكد كلمة المرور الجديدة"
                    }
                  />
                  {errors.confirmPassword && (
                    <span className="error-message">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
              </div>

              {message && (
                <div
                  className={`message ${
                    message.includes("success") || message.includes("بنجاح")
                      ? "success"
                      : "error"
                  }`}
                >
                  {message}
                </div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="btn btn-secondary"
                >
                  {isEnglish ? "Cancel" : "إلغاء"}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading
                    ? isEnglish
                      ? "Saving..."
                      : "جاري الحفظ..."
                    : isEnglish
                    ? "Save Changes"
                    : "حفظ التغييرات"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
