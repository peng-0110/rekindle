import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Navigation */}
        <div className="navbar-left">
          <div className="nav-item dropdown">
            <button className="nav-link">
              Shop
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="nav-item dropdown">
            <button className="nav-link">
              Impact
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="nav-item dropdown">
            <button className="nav-link">
              About
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Center Logo */}
        <div className="navbar-center">
          <div className="logo">
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
                <path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20" 
                      fill="#A0522D" opacity="0.7"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">rekindle</span>
              <span className="logo-tagline">invest in something circular</span>
            </div>
          </div>
        </div>

        {/* Right Icons */}
        <div className="navbar-right">
          <button className="icon-button search-button" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="m17 17-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="icon-button cart-button" aria-label="Shopping Cart">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="19" r="1" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17" cy="19" r="1" stroke="currentColor" strokeWidth="2"/>
            </svg>
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
