import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/impact.css'

// hero assets
import blueDrink from '../assets/blueDrinkOnWood.jpg'
import landFill from '../assets/truck.png'
import coasterStack from '../assets/coastersOnStone.jpg'
import twoCupsTop from '../assets/twoCupsTopView.jpg'

// icon assets
import ch4 from '../assets/ch4Logo.png'
import waste from '../assets/wasteDump.png'

const Impact = ({ onNavigate }) => {
  return (
    <div className="impact-page">

      {/* HERO */}
      <section className="impact-hero">
        <div className="hero-canvas">
          <img src={blueDrink} className="hero-drink" alt="blue drink on coaster" />
        </div>
        <div className="impact-title-wrap">
          <div className="impact-title-band" />
          <h1 className="impact-title">impact</h1>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-kicker">the problem</h2>
          <p className="lead">
            In provinces like British Columbia, where construction and forestry dominate the economy, this
            waste comes from two major sources:
          </p>

          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">4M+ tonnes</div>
              <div className="stat-text">
                from construction, renovation, and demolition (CRD), including framing offcuts and jobsite discards.
              </div>
            </div>
            <div className="stat">
              <div className="stat-number">1.75M tonnes</div>
              <div className="stat-text">
                from logging, deforestation, and sawmilling, where byproducts like bark and shavings often go unused.
              </div>
            </div>
            <div className="stat">
              <div className="stat-number">&lt;0.3%</div>
              <div className="stat-text">
                of wood waste is recycled in Canada, most ends up in landfills or incinerators due to high processing
                costs and limited infrastructure.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-kicker">why does it matter?</h2>

          <div className="why-grid">
            <div className="why-item">
              <img src={ch4} alt="CH4 icon" className="why-icon" />
              <div className="why-title">methane emissions</div>
              <div className="why-text">
                from anaerobic decomposition in landfills, releasing CH4, a greenhouse gas 84× more potent than CO2.
              </div>
            </div>
            <div className="why-item">
              <img src={waste} alt="Leachate icon" className="why-icon" />
              <div className="why-title">leachate pollution</div>
              <div className="why-text">
                when rainwater filters through wood waste, creating toxic runoff that contaminates soil and waterways.
              </div>
            </div>
            <div className="why-item">
              <img src={landFill} alt="Landfill icon" className="why-icon small" />
              <div className="why-title">landfill overload</div>
              <div className="why-text">
                the sheer volume of discarded wood occupies space and accelerates long-term capacity issues.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM IMAGERY */}
      <section className="bottom-images">
        <div className="container bottom-grid">
          <div className="bottom-left">
            <img src={coasterStack} alt="coaster stack" className="img-fill" />
          </div>
          <div className="bottom-right">
            <img src={twoCupsTop} alt="two drinks top view" className="img-fill" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Impact


