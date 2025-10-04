import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/shop.css';

// Import images
import rekindleImage from '../assets/orangeBlueTopView.png';
import rekindle2Image from '../assets/coasterTopView.png';
import rekindle3Image from '../assets/orangeDrink.png';

const Shop = () => {
  return (
    <div className="shop-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>
        <div className="hero-wrapper">
          <img 
            src={rekindleImage} 
            alt="Cocktails and circular theme" 
            className="hero-image"
          />
          <div className="hero-text">
            <h2>
              <span className="invest">invest in something</span><br />
            </h2>
            <h1>
              <span className="circular">circular</span>
            </h1>
          </div>
        </div>
      </section>


      {/* Content Section */}
      <section className="content-section">
        <div className="content-container">
          <div className="content-image-wrapper">
            <img 
              src={rekindle3Image} 
              alt="Orange cocktail with cork coasters showcasing sustainable design" 
              className="content-image"
            />
          </div>
          <div className="content-text">
            <h2 className="content-title">
              transforming wood waste into something worth keeping.
            </h2>
            <p className="content-description">
              rekindle is building a "waste-to-worth" regenerative ecosystem, creating 
              opportunities to reimagine everyday items through community-driven design.
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="product-showcase">
        <div className="showcase-container">
          <div className="product-frame">
            <img 
              src={rekindle2Image} 
              alt="Cork coaster made from sustainable materials" 
              className="coaster-image"
            />
          </div>
          <div className="cta-section">
            <button className="shop-now-button" aria-label="Shop cork coasters now">
              shop now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
