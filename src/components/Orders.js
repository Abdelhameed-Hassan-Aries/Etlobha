import React, { useState, useEffect } from "react";
import { ordersAPI } from "../services/clientAPI";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import Header from "./Header";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { isEnglish } = useAppContext();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await ordersAPI.getMyOrders();

      if (response.data) {
        setOrders(response.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("حدث خطأ أثناء جلب الطلبات");

      // If unauthorized, redirect to login
      if (
        error.message.includes("401") ||
        error.message.includes("Unauthorized")
      ) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#28a745";
      case "pending":
        return "#ffc107";
      case "failed":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return isEnglish ? "Completed" : "مكتمل";
      case "pending":
        return isEnglish ? "Pending" : "قيد الانتظار";
      case "failed":
        return isEnglish ? "Failed" : "فشل";
      default:
        return isEnglish ? "Unknown" : "غير محدد";
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SAR",
    }).format(price);
  };

  const formatDate = (dateString) => {
    if (!dateString) return isEnglish ? "Not specified" : "غير محدد";

    try {
      const date = new Date(dateString);

      // Check if date is valid
      if (isNaN(date.getTime())) {
        return isEnglish ? "Invalid date" : "تاريخ غير صحيح";
      }

      return date.toLocaleDateString(isEnglish ? "en-US" : "ar-SA", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return isEnglish ? "Invalid date" : "تاريخ غير صحيح";
    }
  };

  if (loading) {
    return (
      <div className="orders-loading">
        <div className="loading-spinner"></div>
        <p>{isEnglish ? "Loading orders..." : "جاري تحميل الطلبات..."}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders-error">
        <p>{error}</p>
        <button onClick={fetchOrders} className="retry-button">
          {isEnglish ? "Retry" : "إعادة المحاولة"}
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="orders-container">
        <div className="orders-header">
          <h2>{isEnglish ? "My Orders" : "طلباتي"}</h2>
          <p>
            {isEnglish
              ? "Track all your orders and payment status"
              : "تتبع جميع طلباتك وحالة الدفع"}
          </p>
        </div>

        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <h3>
                    {isEnglish ? `Order #${order.id}` : `طلب رقم #${order.id}`}
                  </h3>
                  <p className="order-date">{formatDate(order.created_at)}</p>
                </div>
                <div
                  className="order-status"
                  style={{
                    backgroundColor: getStatusColor(order.payment_status),
                  }}
                >
                  {getStatusText(order.payment_status)}
                </div>
              </div>

              <div className="order-content">
                {order.car && (
                  <div className="car-info">
                    <div className="car-image">
                      {order.car.images && order.car.images.length > 0 ? (
                        <img
                          src={
                            order.car.images.find((img) => img.is_main)
                              ?.image_path ||
                            order.car.images[0]?.image_path ||
                            order.car.images[0] ||
                            "/image/car1.png"
                          }
                          alt={order.car.name}
                          onError={(e) => {
                            e.target.src = "/image/car1.png";
                          }}
                        />
                      ) : order.car.image ? (
                        <img
                          src={order.car.image}
                          alt={order.car.name}
                          onError={(e) => {
                            e.target.src = "/image/car1.png";
                          }}
                        />
                      ) : (
                        <div className="car-placeholder">
                          <i className="fas fa-car"></i>
                        </div>
                      )}
                    </div>

                    <div className="car-details">
                      <h4>{order.car.name}</h4>
                      <p>
                        <strong>{isEnglish ? "Brand:" : "الماركة:"}</strong>{" "}
                        {order.car.brand?.name}
                      </p>
                      <p>
                        <strong>{isEnglish ? "Model:" : "الموديل:"}</strong>{" "}
                        {order.car.model?.name}
                      </p>
                      <p>
                        <strong>{isEnglish ? "Year:" : "السنة:"}</strong>{" "}
                        {order.car.year}
                      </p>
                    </div>
                  </div>
                )}

                <div className="order-details">
                  <div className="payment-info">
                    <p>
                      <strong>
                        {isEnglish ? "Payment Method:" : "طريقة الدفع:"}
                      </strong>{" "}
                      {order.payment_method}
                    </p>
                    <p>
                      <strong>{isEnglish ? "Amount:" : "المبلغ:"}</strong>{" "}
                      {formatPrice(order.amount)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-actions">
                {order.payment_status === "pending" && (
                  <button
                    className="action-button primary"
                    onClick={() => navigate(`/payment/${order.id}`)}
                  >
                    {isEnglish ? "Complete Payment" : "إكمال الدفع"}
                  </button>
                )}
                {order.payment_status === "completed" && (
                  <button
                    className="action-button success"
                    onClick={() => navigate(`/orders/${order.id}`)}
                  >
                    {isEnglish ? "View Details" : "عرض التفاصيل"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="no-orders">
            <i className="fas fa-shopping-cart"></i>
            <p>{isEnglish ? "No orders yet" : "لا توجد طلبات حتى الآن"}</p>
            <button
              className="browse-cars-button"
              onClick={() => navigate("/")}
            >
              {isEnglish ? "Browse Cars" : "تصفح السيارات"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
