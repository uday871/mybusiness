import React from 'react';
import './Home.css';
import imm from './images/Design.png';
import homeimg from './images/myhome.jpg';

import mobileapp from './images/mobileapp.webp'
import maintainance from './images/maintainance.png'
import website from './images/remove.png'
import { Link } from 'react-router-dom';

import WebIcon from '@mui/icons-material/Web';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import GalleryView from './GalleryView';
import Footer from './Footer';

import { useState,useEffect } from 'react';
import AwesomeRainbowCursor from './AwesomeRainbowCursor';


const Home = () => {

const [projects, setProjects] = useState(0);
const [clients, setClients] = useState(0);
const [experts, setExperts] = useState(0);
const [isVisible, setIsVisible] = useState(false);
  const services = [
  {
    id:1,
    title: 'Website Development',
    icon:  <WebIcon style={{ fontSize: 70 }} />,
    image: website,
    active: true,
  },
  {
    id:2,
    title: 'App Development',
    icon: <AppSettingsAltIcon style={{ fontSize: 70 }} />,
    image: mobileapp,
    active: true,
  },
  {
    id:3,
    title: 'Maintainance',
    icon:  <BuildCircleIcon style={{ fontSize: 70 }} />,
    image: maintainance,
    active: true,
  },
];

 


const counts = {
  projects: 250,
  clients: 125,
  experts: 25,
};

useEffect(() => {
  const handleScroll = () => {
    const section = document.querySelector('.statistics-section');
    const { top } = section.getBoundingClientRect();
    if (top < window.innerHeight && !isVisible) {
      setIsVisible(true);
      startCounting();
    }
  };

  const startCounting = () => {
    const duration = 2000; 
    const interval = 50; 
    const projectStep = Math.ceil(counts.projects / (duration / interval));
    const clientStep = Math.ceil(counts.clients / (duration / interval));
    const expertStep = Math.ceil(counts.experts / (duration / interval));

    let projectCount = 0;
    let clientCount = 0;
    let expertCount = 0;

    const counterInterval = setInterval(() => {
      if (projectCount < counts.projects) {
        projectCount += projectStep;
        setProjects(Math.min(projectCount, counts.projects));
      }
      if (clientCount < counts.clients) {
        clientCount += clientStep;
        setClients(Math.min(clientCount, counts.clients));
      }
      if (expertCount < counts.experts) {
        expertCount += expertStep;
        setExperts(Math.min(expertCount, counts.experts));
      }
      if (projectCount >= counts.projects && clientCount >= counts.clients && expertCount >= counts.experts) {
        clearInterval(counterInterval);
      }
    }, interval);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [isVisible]);









  return (
    <>
      <div className="maincontainer" style={{backgroundColor:''}}>
        <div className="hero-container" style={{backgroundColor:''}}>
          <div className="text-content">
            <h1>
              <span className="best">BEST</span>
              <span className="website">WEB APP</span>
              <span className="development">DEVELOPMENT</span>
            </h1>
          </div>

          <div className="graphic-container">
            <div className="graphic">
              <img src={imm} alt="Graphic" className="graphic-img" />
              {/* <AwesomeRainbowCursor/> */}
            </div>
          </div>
          
        </div>
        <div className="information">
          <img src={homeimg} alt="Home" className="btmimg" />
        </div>
        


        
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







<section className="statistics-section">
    <div className="stats-container">
      <div className="stat-item">
        <span className="outline-number">{projects}</span>
        <p className="stat-label">PROJECTS</p>
      </div>
      <div className="stat-item">
        <span className="filled-number">{clients}</span>
        <p className="stat-label">CLIENTS</p>
        <a href="#all-services" className="services-link">All Services</a>
      </div>
      <div className="stat-item">
        <span className="outline-number">{experts}</span>
        <p className="stat-label">EXPERTS</p>
      </div>
    </div>



    <div className="services-section">
      <h2>Our Services</h2>
      <p>
        Comprehensive Website Services to Ignite Your Online Success. Empower
        Your Business with Powerful Online Services from our Web Application.
      </p>
    </div>
    
  </section>




  <div className="service-cards-container">
  {services.map((service, index) => (
    <Link key={index} to={`/cart/${service.id}`} className={`service-card ${service.active ? 'active' : ''}`}>
      <div className="icon-container">
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <div className="image-container">
        <img src={service.image} alt={service.title} />
      </div>
    </Link>
  ))}
</div>


<GalleryView/>
<hr />
<Footer/> 


        
      </div>
    </>
  );
};

export default Home;
