import React, { useState, useEffect } from "react";
import { brandsAPI } from "../services/clientAPI";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Brands.css";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      const response = await brandsAPI.getAllBrands();

      if (response.data) {
        setBrands(response.data);
      }
    } catch (error) {
      console.error("Error fetching brands:", error);
      setError("حدث خطأ أثناء جلب البراندات");
    } finally {
      setLoading(false);
    }
  };

  const handleBrandClick = (brandId) => {
    navigate(`/brands/${brandId}/cars`);
  };

  if (loading) {
    return (
      <div className="brands-loading">
        <div className="loading-spinner"></div>
        <p>جاري تحميل البراندات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="brands-error">
        <p>{error}</p>
        <button onClick={fetchBrands} className="retry-button">
          إعادة المحاولة
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="brands-container">
        <div className="brands-header">
          <h2>جميع البراندات</h2>
          <p>اختر البراند المفضل لديك لاستعراض السيارات</p>
        </div>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="brands-brand-card"
              onClick={() => handleBrandClick(brand.id)}
            >
              <div className="brands-brand-logo">
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} />
                ) : (
                  <div className="brands-brand-placeholder">
                    {brand.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="brands-brand-name">{brand.nameAr}</h3>
            </div>
          ))}
        </div>

        {brands.length === 0 && (
          <div className="no-brands">
            <p>لا توجد براندات متاحة حالياً</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Brands;
