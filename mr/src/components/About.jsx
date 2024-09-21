import React from 'react'
import website from './images/slide.webp'
import './About.css'

const About = () => {
  return (
 <>
<section className="about-section">
<div className="about-container">

  <div className="about-image">
    <img src={website} alt="About Us" />
  </div>

  <div className="about-content">
    <h3>About Company</h3>
    <h1>Our Main Goal to Satisfy Local & Global Clients</h1>
    <p>
      At <strong>MR TEAM</strong>, we understand that your online presence is more than just code and graphics; it's the digital heartbeat of your brand. That's why we specialize in creating custom web solutions tailored to your unique needs.
    </p>
    <a href="/read-more" className="read-more">Read More →</a>
  </div>
</div>
</section>




<section className="web-design-agency">
<div className="text-block">
  <h1>
    <span className="text-animation" id="web">WEB </span>
    <span className="text-static" id="design">DESIGN</span>
    <span className="text-animation" id="agency">AGENCY</span>
  </h1>
</div>
</section>
</>
  )
}

export default About