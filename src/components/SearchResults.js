import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchAll } from "../data/carsData";
import { useAppContext } from "../contexts/AppContext";
import Header from "./Header";
import searchIcon from "../image/2.png";
import "./SearchResults.css";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState({ cars: [], brands: [] });
  const [loading, setLoading] = useState(true);
  const [currentQuery, setCurrentQuery] = useState("");
  const query = searchParams.get("q") || "";
  const { isEnglish } = useAppContext();

  useEffect(() => {
    setCurrentQuery(query);
  }, [query]);

  useEffect(() => {
    handleSearch();
  }, [query]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 300));
      const results = searchAll(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCarClick = (carId) => {
    navigate(`/car/${carId}`);
  };

  const handleBrandClick = (brandId) => {
    navigate(`/brands/${brandId}/cars`);
  };

  const handleNewSearch = () => {
    if (currentQuery.trim()) {
      setSearchParams({ q: currentQuery.trim() });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNewSearch();
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
      <div className="search-results-loading">
        <div className="loading-spinner"></div>
        <p>جاري البحث...</p>
      </div>
    );
  }

  const totalResults = searchResults.cars.length + searchResults.brands.length;

  return (
    <>
      <Header />
      <div className="search-results-container">
        {/* Search Bar */}
        <div className="search-page-header">
          <div className="search-bar-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder={
                  isEnglish ? "Search for a car..." : "ابحث عن سيارة..."
                }
                value={currentQuery}
                onChange={(e) => setCurrentQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="search-input"
              />
              <button className="search-button" onClick={handleNewSearch}>
                <img src={searchIcon} alt="Search" className="search-icon" />
              </button>
            </div>
          </div>

          <div className="search-info">
            <h2>
              {isEnglish
                ? `Search results for: "${query}"`
                : `نتائج البحث عن: "${query}"`}
            </h2>
            <p>
              {isEnglish
                ? `Found ${totalResults} results (${searchResults.cars.length} cars, ${searchResults.brands.length} brands)`
                : `تم العثور على ${totalResults} نتيجة (${searchResults.cars.length} سيارة، ${searchResults.brands.length} براند)`}
            </p>
          </div>
        </div>

        <div className="search-results-content">
          {/* Brands Results */}
          {searchResults.brands.length > 0 && (
            <section className="search-section">
              <h3 className="section-title">
                البراندات ({searchResults.brands.length})
              </h3>
              <div className="brands-grid">
                {searchResults.brands.map((brand) => (
                  <div
                    key={brand.id}
                    className="brand-card"
                    onClick={() => handleBrandClick(brand.id)}
                  >
                    <div className="brand-logo">
                      <img src={brand.logo} alt={brand.nameAr} />
                    </div>
                    <div className="brand-info">
                      <h4 className="brand-name">{brand.nameAr}</h4>
                      <p className="brand-description">{brand.descriptionAr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Cars Results */}
          {searchResults.cars.length > 0 && (
            <section className="search-section">
              <h3 className="section-title">
                السيارات ({searchResults.cars.length})
              </h3>
              <div className="cars-grid">
                {searchResults.cars.map((car) => (
                  <div
                    key={car.id}
                    className="car-card"
                    onClick={() => handleCarClick(car.id)}
                  >
                    <div className="car-image">
                      <img
                        src={car.images[0]}
                        alt={car.nameAr}
                        onError={(e) => {
                          e.target.src = "/image/car1.png";
                        }}
                      />
                      {!car.isAvailable && (
                        <div className="sold-badge">مباع</div>
                      )}
                    </div>

                    <div className="car-details">
                      <h4 className="car-name">{car.nameAr}</h4>

                      <div className="car-info">
                        <span className="car-year">
                          {isEnglish ? "Year: " : "السنة: "}
                          {car.year}
                        </span>
                        <span className="car-mileage">
                          {isEnglish ? "Mileage: " : "المسافة: "}
                          {formatMileage(car.mileage)} {isEnglish ? "km" : "كم"}
                        </span>
                      </div>

                      <div className="car-specs">
                        <div className="spec">
                          <i className="fas fa-gas-pump"></i>
                          <span>{car.fuelTypeAr}</span>
                        </div>
                        <div className="spec">
                          <i className="fas fa-cogs"></i>
                          <span>{car.transmissionAr}</span>
                        </div>
                        <div className="spec">
                          <i className="fas fa-palette"></i>
                          <span>{car.colorAr}</span>
                        </div>
                      </div>

                      <div className="car-footer">
                        <div className="car-price">
                          {formatPrice(car.price)}
                        </div>
                        <div className="car-location">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{car.locationAr}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* No Results */}
          {totalResults === 0 && (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>لم يتم العثور على نتائج</h3>
              <p>جرب البحث بكلمات مختلفة أو تحقق من الإملاء</p>
              <div className="search-suggestions">
                <h4>اقتراحات البحث:</h4>
                <div className="suggestion-tags">
                  <span onClick={() => navigate("/search?q=toyota")}>
                    تويوتا
                  </span>
                  <span onClick={() => navigate("/search?q=bmw")}>
                    بي ام دبليو
                  </span>
                  <span onClick={() => navigate("/search?q=mercedes")}>
                    مرسيدس
                  </span>
                  <span onClick={() => navigate("/search?q=sedan")}>سيدان</span>
                  <span onClick={() => navigate("/search?q=suv")}>
                    دفع رباعي
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
