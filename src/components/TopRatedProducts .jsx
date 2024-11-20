import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
const TopRatedProducts = () => {
  const { products } = useContext(ProductContext);

  // Filter products with a rating between 4.5 and 5
  const rateProducts = products.filter(
    (item) =>
      (item.category === "men's clothing" ||
        item.category === "women's clothing" ||
        item.category === "jewelery") &&
      item.rating?.rate >= 4.5 &&
      item.rating?.rate <= 5
  );
  console.log(rateProducts);

  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
      <h2
        style={{
          fontFamily: "en10",
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Our Top Products
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        style={{ padding: "30px 0" }}
      >
        {rateProducts.map((product) => (
          <SwiperSlide
            key={product.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "500px",
            }}
          >
            <div
              style={{
                width: "350px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "contain",
                      marginBottom: "20px",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "15px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {product.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#ff6347",
                      fontWeight: "bold",
                      transition: "color 0.3s ease",
                    }}
                  >
                    ⭐ {product.rating.rate}/5
                  </p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedProducts;
