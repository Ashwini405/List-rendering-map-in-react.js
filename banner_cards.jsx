import React from "react";
import "./Banner.css";

function Banner() {
  const smoothieImg =
    "https://food-mart-template.vercel.app/images/product-thumb-1.png";
  const fruitsImg =
    "https://tse1.mm.bing.net/th/id/OIP.22XOhxYrd_Pu__NkrGadMgHaEo?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3";
  const breadImg =
    "https://cdn.pixabay.com/photo/2014/12/15/13/40/bread-569071_1280.jpg";

  return (
    <div className="container">
      <div className="banner">
        <div className="banner-text">
          <h3 className="natural-text">100% Natural</h3>
          <h1>
            Fresh Smoothie <br /> & Summer Juice
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
            massa diam elementum.
          </p>
          <button className="shop-btn">SHOP NOW</button>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="banner-img">
          <img src={smoothieImg} alt="Smoothie Juice" />
        </div>
      </div>

      <div className="offers">
        <div className="offer-card" style={{ backgroundColor: "#E8F4E3" }}>
          <div className="offer-content">
            <h3>20% Off</h3>
            <p>SALE</p>
            <h2>Fruits & Vegetables</h2>
            <a href="#">Shop Collection →</a>
          </div>
          <div className="offer-img">
            <img src={fruitsImg} alt="Fruits and Vegetables" />
          </div>
        </div>

        <div className="offer-card" style={{ backgroundColor: "#F9EDEA" }}>
          <div className="offer-content">
            <h3>15% Off</h3>
            <p>SALE</p>
            <h2>Baked Products</h2>
            <a href="#">Shop Collection →</a>
          </div>
          <div className="offer-img">
            <img src={breadImg} alt="Baked Products" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
