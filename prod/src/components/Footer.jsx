import React from 'react';
import "../styles/footer.css";
import rekindleLogo from '../assets/RekindleBanner.png';
import threeCoasters from '../assets/threeCoasters.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div>
            <section className="rekindle-branding">
                <div className="branding-container">
                    <img 
                    src={rekindleLogo} 
                    alt="Rekindle Logo" 
                    className="rekindle-logo"
                    />
                </div>
            </section>
            <section className="footer-section">
                <div className="footer-container">
                    <div className="footer-column contact-column">
                    <h3 className="footer-title">Contact US</h3>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                        <span className="contact-text">rekindle.enactusubc.com</span>
                    </div>
                    <div className="social-media">
                        <a 
                        href="https://www.instagram.com/rekindle.ubc/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="Instagram"
                        >
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a 
                        href="https://www.linkedin.com/company/rekindleubc/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="LinkedIn"
                        >
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a 
                        href="https://www.facebook.com/rekindle.ubc/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="Facebook"
                        >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    </div>
                    </div>
                    <div className="footer-column policies-column">
                    <h3 className="policy-item">Return Policy</h3>
                    <h3 className="policy-item">Shipping Policy</h3>
                    <h3 className="policy-item">Terms of Service</h3>
                    </div>
                    <div className="footer-column coasters-column">
                        <img src={ threeCoasters} className="footer-coasters"></img>
                    </div>
                </div>
            </section>
        </div>
        
    );
};

export default Footer;