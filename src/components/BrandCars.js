import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { brandsAPI, ordersAPI } from "../services/clientAPI";
import { useAppContext } from "../contexts/AppContext";
import Header from "./Header";
import "./BrandCars.css";

const BrandCars = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useAppContext();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [brandName, setBrandName] = useState("");
  const [orderLoading, setOrderLoading] = useState({});

  useEffect(() => {
    fetchBrandCars();
  }, [brandId]);

  const fetchBrandCars = async () => {
    try {
      setLoading(true);
      const response = await brandsAPI.getCarsByBrand(brandId);

      if (response.data) {
        setCars(response.data);
        // Set brand name from the brand object
        if (response.brand) {
          setBrandName(
            response.brand.nameAr || response.brand.name || "براند غير محدد"
          );
        }
      }
    } catch (error) {
      console.error("Error fetching brand cars:", error);
      setError("حدث خطأ أثناء جلب سيارات البراند");
    } finally {
      setLoading(false);
    }
  };

  const handleCarClick = (carId) => {
    navigate(`/car/${carId}`);
  };

  const handleBuyClick = async (e, carId) => {
    e.stopPropagation();

    // Check if user is logged in
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    try {
      setOrderLoading((prev) => ({ ...prev, [carId]: true }));

      const response = await ordersAPI.createOrder({
        carId: carId,
        paymentMethod: "credit_card",
      });

      if (response.success) {
        alert("تم إضافة السيارة إلى طلباتك بنجاح!");
        navigate("/orders");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert(error.message || "حدث خطأ أثناء إنشاء الطلب");
    } finally {
      setOrderLoading((prev) => ({ ...prev, [carId]: false }));
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
      <div className="brand-cars-loading">
        <div className="loading-spinner"></div>
        <p>جاري تحميل السيارات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="brand-cars-error">
        <p>{error}</p>
        <button onClick={fetchBrandCars} className="retry-button">
          إعادة المحاولة
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="brand-cars-container">
        <div className="brand-cars-header">
          <button onClick={() => navigate("/brands")} className="back-button">
            ← العودة للبراندات
          </button>
          <h2>سيارات {brandName}</h2>
          <p>اختر من مجموعة متنوعة من السيارات المتاحة</p>
        </div>

        <div className="cars-grid">
          {cars.map((car) => (
            <div
              key={car.id}
              className="brand-cars-car-card"
              onClick={() => handleCarClick(car.id)}
            >
              <div className="brand-cars-car-image">
                {car.images && car.images.length > 0 ? (
                  <img
                    src={car.images[0]}
                    alt={car.nameAr}
                    onError={(e) => {
                      e.target.src = "/image/car1.png";
                    }}
                  />
                ) : (
                  <div className="brand-cars-car-placeholder">
                    <i className="fas fa-car"></i>
                  </div>
                )}
                {!car.isAvailable && (
                  <div className="brand-cars-sold-badge">مباع</div>
                )}
              </div>

              <div className="brand-cars-car-details">
                <h3 className="brand-cars-car-name">{car.nameAr}</h3>

                <div className="brand-cars-car-info">
                  <span className="brand-cars-car-year">{car.year}</span>
                  <span className="brand-cars-car-mileage">
                    {formatMileage(car.mileage)} كم
                  </span>
                </div>

                <div className="brand-cars-car-specs">
                  <div className="brand-cars-spec">
                    <i className="fas fa-gas-pump"></i>
                    <span>{car.fuelTypeAr}</span>
                  </div>
                  <div className="brand-cars-spec">
                    <i className="fas fa-cogs"></i>
                    <span>{car.transmissionAr}</span>
                  </div>
                  <div className="brand-cars-spec">
                    <i className="fas fa-palette"></i>
                    <span>{car.colorAr}</span>
                  </div>
                </div>

                <div className="brand-cars-car-price">
                  {formatPrice(car.price)}
                </div>

                <button
                  className={`brand-cars-buy-button ${
                    !car.isAvailable ? "disabled" : ""
                  }`}
                  onClick={(e) => handleBuyClick(e, car.id)}
                  disabled={!car.isAvailable || orderLoading[car.id]}
                >
                  {orderLoading[car.id]
                    ? "جاري المعالجة..."
                    : !car.isAvailable
                    ? "مباع"
                    : "شراء الآن"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {cars.length === 0 && (
          <div className="no-cars">
            <i className="fas fa-car"></i>
            <p>لا توجد سيارات متاحة لهذا البراند حالياً</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BrandCars;
