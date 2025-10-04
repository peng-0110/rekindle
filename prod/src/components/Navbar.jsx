import React, { useState } from 'react';
import '../styles/navbar.css';
import banner from '../assets/RekindleBanner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Navigation */}
        <div className="navbar-left">
          {['Shop', 'Impact', 'About'].map((item) => (
            <div className="nav-item dropdown" key={item}>
              <button
                className={`nav-link ${activeItem === item ? 'active' : ''}`}
                onClick={() => setActiveItem(item)}
              >
                {item}
                <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
              </button>
            </div>
          ))}
        </div>


        {/* Center Logo */}
        <div className="navbar-center">
              <img src={banner} alt="Rekindle Banner" className="banner-image"/>
        </div>

        {/* Right Icons */}
        <div className="navbar-right">
          <button className="icon-button search-button" aria-label="Search">
            <FontAwesomeIcon icon={faSearch} className="dropdown-icon" />
          </button>
          <button className="icon-button cart-button" aria-label="Shopping Cart">
            <FontAwesomeIcon icon={faShoppingCart} className="dropdown-icon" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav-item">
            <button className="mobile-nav-link">Shop</button>
          </div>
          <div className="mobile-nav-item">
            <button className="mobile-nav-link">Impact</button>
          </div>
          <div className="mobile-nav-item">
            <button className="mobile-nav-link">About</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
