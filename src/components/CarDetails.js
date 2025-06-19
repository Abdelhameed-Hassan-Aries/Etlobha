import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { carsAPI, ordersAPI } from "../services/clientAPI";
import { getBrandById } from "../data/carsData";
import Header from "./Header";
import "./CarDetails.css";

const CarDetails = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderLoading, setOrderLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    fetchCarDetails();
  }, [carId]);

  const fetchCarDetails = async () => {
    try {
      setLoading(true);
      const response = await carsAPI.getCarById(carId);

      if (response.success && response.data) {
        setCar(response.data);
        setSelectedImage(0);
      }
    } catch (error) {
      console.error("Error fetching car details:", error);
      setError("حدث خطأ أثناء جلب تفاصيل السيارة");
    } finally {
      setLoading(false);
    }
  };

  const handleBuyNow = async () => {
    try {
      setOrderLoading(true);

      // Check if user is logged in
      const currentUser = JSON.parse(
        localStorage.getItem("otlobha_current_user") || "null"
      );
      if (!currentUser) {
        navigate("/login");
        return;
      }

      const response = await ordersAPI.createOrder({
        carId: car.id,
        paymentMethod: "credit_card",
      });

      if (response.success) {
        alert("تم إنشاء الطلب بنجاح!");
        navigate("/orders");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert(error.message || "حدث خطأ أثناء إنشاء الطلب");
    } finally {
      setOrderLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatMileage = (mileage) => {
    return new Intl.NumberFormat().format(mileage);
  };

  if (loading) {
    return (
      <div className="car-details-loading">
        <div className="loading-spinner"></div>
        <p>جاري تحميل تفاصيل السيارة...</p>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="car-details-error">
        <p>{error || "السيارة غير موجودة"}</p>
        <button onClick={() => navigate(-1)} className="back-button">
          العودة
        </button>
      </div>
    );
  }

  const brand = getBrandById(car.brandId);

  return (
    <>
      <Header />
      <div className="car-details-container">
        {/* Header */}
        <div className="car-details-header">
          <button onClick={() => navigate(-1)} className="back-button">
            ← العودة
          </button>
          <div className="breadcrumb">
            <span onClick={() => navigate("/")} className="breadcrumb-link">
              الرئيسية
            </span>
            <span className="breadcrumb-separator">/</span>
            <span
              onClick={() => navigate("/brands")}
              className="breadcrumb-link"
            >
              البراندات
            </span>
            <span className="breadcrumb-separator">/</span>
            <span
              onClick={() => navigate(`/brands/${car.brandId}/cars`)}
              className="breadcrumb-link"
            >
              {brand?.nameAr}
            </span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{car.nameAr}</span>
          </div>
        </div>

        <div className="car-details-content">
          {/* Image Gallery */}
          <div className="car-gallery">
            <div className="main-image">
              <img
                src={car.images[selectedImage]}
                alt={car.nameAr}
                onError={(e) => {
                  e.target.src = "/image/car1.png"; // Fallback image
                }}
              />
              {!car.isAvailable && <div className="sold-overlay">مباع</div>}
            </div>

            {car.images.length > 1 && (
              <div className="image-thumbnails">
                {car.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${car.nameAr} ${index + 1}`}
                    className={`thumbnail ${
                      selectedImage === index ? "active" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                    onError={(e) => {
                      e.target.src = "/image/car1.png"; // Fallback image
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Car Information */}
          <div className="car-info">
            <div className="car-header">
              <h1 className="car-title">{car.nameAr}</h1>
              <div className="car-brand">
                <img
                  src={brand?.logo}
                  alt={brand?.nameAr}
                  className="brand-logo"
                />
                <span>{brand?.nameAr}</span>
              </div>
            </div>

            <div className="car-price">
              <span className="price">{formatPrice(car.price)}</span>
              <span className="currency-note">السعر بالدولار الأمريكي</span>
            </div>

            <div className="car-basic-info">
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">السنة</span>
                  <span className="info-value">{car.year}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">المسافة المقطوعة</span>
                  <span className="info-value">
                    {formatMileage(car.mileage)} كم
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">الحالة</span>
                  <span className="info-value">{car.conditionAr}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">نوع الوقود</span>
                  <span className="info-value">{car.fuelTypeAr}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">ناقل الحركة</span>
                  <span className="info-value">{car.transmissionAr}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">اللون</span>
                  <span className="info-value">{car.colorAr}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">نوع الهيكل</span>
                  <span className="info-value">{car.bodyTypeAr}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">سعة المحرك</span>
                  <span className="info-value">{car.engineCapacity}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">عدد المقاعد</span>
                  <span className="info-value">{car.seats}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">عدد الأبواب</span>
                  <span className="info-value">{car.doors}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">الموقع</span>
                  <span className="info-value">{car.locationAr}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="car-description">
              <h3>الوصف</h3>
              <p>{car.descriptionAr}</p>
            </div>

            {/* Features */}
            <div className="car-features">
              <h3>المميزات</h3>
              <div className="features-grid">
                {car.featuresAr.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <i className="fas fa-check"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="car-actions">
              <button
                className={`buy-button ${!car.isAvailable ? "disabled" : ""}`}
                onClick={handleBuyNow}
                disabled={!car.isAvailable || orderLoading}
              >
                {orderLoading
                  ? "جاري المعالجة..."
                  : car.isAvailable
                  ? "شراء الآن"
                  : "مباع"}
              </button>

              <button
                className="contact-button"
                onClick={() => setShowContactModal(true)}
              >
                تواصل مع البائع
              </button>

              <button
                className="share-button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: car.nameAr,
                      text: car.descriptionAr,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("تم نسخ الرابط");
                  }
                }}
              >
                مشاركة
              </button>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        {showContactModal && (
          <div
            className="modal-overlay"
            onClick={() => setShowContactModal(false)}
          >
            <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>معلومات البائع</h3>
                <button
                  className="close-button"
                  onClick={() => setShowContactModal(false)}
                >
                  ×
                </button>
              </div>
              <div className="modal-content">
                <p>
                  <strong>الاسم:</strong> أحمد محمد
                </p>
                <p>
                  <strong>الهاتف:</strong> +966 50 123 4567
                </p>
                <p>
                  <strong>البريد الإلكتروني:</strong> ahmed@example.com
                </p>
                <p>
                  <strong>الموقع:</strong> {car.locationAr}
                </p>
                <div className="contact-actions">
                  <a
                    href="tel:+966501234567"
                    className="contact-action-btn call-btn"
                  >
                    <i className="fas fa-phone"></i>
                    اتصال
                  </a>
                  <a
                    href="https://wa.me/966501234567"
                    className="contact-action-btn whatsapp-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                    واتساب
                  </a>
                  <a
                    href="mailto:ahmed@example.com"
                    className="contact-action-btn email-btn"
                  >
                    <i className="fas fa-envelope"></i>
                    بريد إلكتروني
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CarDetails;
