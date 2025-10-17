import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import '../styles/shop.css';

// Import images
import rekindleImage from '../assets/orangeBlueTopView.png';
import rekindle2Image from '../assets/coasterTopView.png';
import rekindle3Image from '../assets/orangeDrink.png';
import coasterStackImage from '../assets/coasterStack.png';
import twoDrinkImage from '../assets/twoDrink.png';
import cawpLogo from '../assets/CAWP.jpg';
import chopvalueLogo from '../assets/chopAlue.jpeg';
import ubcBookStore from "../assets/ubcBookStore.jpeg"


const Shop = ({ onNavigate }) => {
  return (
    <div className="shop-page">
      
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

      {/* Our Coasters Are Section */}
      <section className="coasters-features">
        <div className="coasters-container">
          <h2 className="coasters-title">our coasters are</h2>
          <div className="features-grid">
            <div className="feature-block">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Functionality</h3>
              <p className="feature-description">Durable and water-resistant</p>
            </div>
            <div className="feature-block">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Eco-Conscious</h3>
              <p className="feature-description">Traceable and compostable</p>
            </div>
            <div className="feature-block">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Youth-Powered</h3>
              <p className="feature-description">Developed by students</p>
            </div>
            <div className="feature-block">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Scalable & Accessible</h3>
              <p className="feature-description"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Functional and Storytelling Section */}
      <section className="functional-storytelling">
        <div className="functional-container">
          <h2 className="functional-title">functional and storytelling</h2>
          <div className="functional-content">
            <div className="coaster-stack-wrapper">
              <img 
                src={coasterStackImage} 
                alt="Stack of cork coasters" 
                className="coaster-stack-image"
              />
            </div>
            <div className="cocktails-wrapper">
              <img 
                src={twoDrinkImage} 
                alt="Two cocktails on coasters" 
                className="cocktails-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Partnerships Section */}
      <section className="partnerships">
        <div className="partnerships-container">
          <h2 className="partnerships-title">our partnerships</h2>
          <div className="partners-logos">
            <div className="partner-logo">
              <img 
                src={cawpLogo} 
                alt="CAWP Logo" 
                className="partner-image"
              />
            </div>
            <div className="partner-logo">
              <img 
                src={chopvalueLogo} 
                alt="CHOPVALUE Logo" 
                className="partner-image"
              />
            </div>
            <div className="partner-logo">
              <img 
                  src={ubcBookStore} 
                  alt="CHOPVALUE Logo" 
                  className="partner-image"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
