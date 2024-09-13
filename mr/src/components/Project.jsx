
import GalleryView from './GalleryView';
import Footer from './Footer';

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










const [projects, setProjects] = useState(0);
const [clients, setClients] = useState(0);
const [experts, setExperts] = useState(0);
const [isVisible, setIsVisible] = useState(false);

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
// Duration of the animation in ms
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






























































/* // about section related to the project  */
.about-section {
  padding: 50px 0;
  position: relative;
  overflow: hidden;
}

.about-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 1s ease-in;
}

.about-image {
  flex: 1;
  margin-right: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  transition: transform 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

.about-content {
  flex: 2;
  transition: transform 0.5s ease;
}

.about-content h3 {
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 1px;
}

.about-content h1 {
  font-size: 2.8rem;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.about-content p {
  font-size: 1.2rem;
  color: #d1d1d1;
  line-height: 1.6;
}

.read-more {
  font-size: 1.1rem;
  color: #00ff85;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #00ff85;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.read-more:hover {
  background-color: #00ff85;
  color: #000;
}

@media (max-width: 1100px) {
  .about-section {
    padding: 40px 0;
    position: relative;
    overflow: hidden;
  }
  .about-container {
    display: inline;
    width: 300px;
    
  }
  .about-image {
    flex: 1;
    margin-right: 5px;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  
  .about-image img {
    width: 320px;
    height: 160px;
    border-radius: 0;
    transition: transform 0.5s ease;
  }
  .about-content {
    flex: 1;
    transition: transform 0.5s ease;
  }

  .about-content h3 {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1px;
    justify-content: center;
    text-align: center;
  }
  
  .about-content h1 {
    font-size: 1.3rem;
    margin: 10px 0;
    padding: 10px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .about-content p {
    font-size: 15px;
    color: #d1d1d1;
    line-height: 1.6;
    margin: 10px;
    padding-bottom: 15px;
  }
  .about-content a{
    font-size: 1rem;
    color: #00ff85;
    text-decoration: none;
    padding: 10px 20px;
    border: 2px solid #00ff85;
    border-radius: 25px;
    transition: all 0.3s ease;
    margin-top: 100px;
  }

  section {
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 15px;
  }

}

















@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}































.web-design-agency {
  display: flex;
  overflow: hidden;
  padding: 20px;
  padding-left: 200px;
  padding-right: 200px;
  text-align: center;
  justify-content: center;
}

.text-block h1 {
  font-size: 8rem;
  letter-spacing: 9px;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
}

.text-animation {
  display: flex;
  opacity: 0;
  transform: translateX(-100px);
  animation: slideIn 0.8s forwards;
}

.text-animation:nth-child(1) {
  animation-delay: 0.5s; 

}


.text-animation:nth-child(3) {
  transform: translateX(50px); 
  animation: slideInRight 0.8s forwards;
  animation-delay: 1.5s; 
}

.text-static {
  opacity: 1; 
  color: transparent; /* Make the fill transparent */
  -webkit-text-stroke: 2px white;
}
#agency {
  margin-left: 200px;
}




@media (max-width: 1100px) {
  .web-design-agency {
    margin-top: -30px;
    display: flex;
    overflow: hidden;
    /* padding: 20px; */
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    justify-content: center;
  }

  .text-block h1 {
    font-size: 2rem;
    letter-spacing: 9px;
    font-weight: 900;
    color: #ffffff;
    text-align: center;
  }

  #web {
    text-align: center;
    margin-left:45px;
  }
  #agency {
    margin-left: 0;
  }
  
}





@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}





















/* servicess section  */
.statistics-section {
  color: #ffffff;
  text-align: center;
  padding: 50px 0;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
}

.outline-number {
  font-size: 5rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff; /* Outline text */
}

.filled-number {
  font-size: 5rem;
  font-weight: 900;
  color: #00ff85; /* Filled text */
}

.stat-label {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #ffffff;
}

.services-section {
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 20px 0;
}

.services-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.services-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #00ff85;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

.services-section h2::after {
  content: '';
  display: block;
  width: 70px;
  height: 4px;
  background-color: #00ff85;
  margin: 10px auto;
  border-radius: 5px;
}

.services-section p {
  font-size: 1.2rem;
  color: #b3b3b3;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .services-section {
    padding: 20px 13px;
  }

  .services-section h2 {
    font-size: 1rem;
  }

  .services-section p {
    font-size: 1rem;
  }
  .outline-number {
    font-size: 3rem;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1px #ffffff; /* Outline text */
  }
  
  .filled-number {
    font-size: 3rem;
    font-weight: 900;
    color: #00ff85; /* Filled text */
  }

  .stats-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
  }
  
  .stat-label {
    font-size: 1.1rem;
    margin-top: 10px;
    color: #ffffff;
  }

}


.outline-number,
.filled-number {
  transition: opacity 0.5s ease-in-out; /* Smooth transition */
}































.service-cards-container {
display: flex;
justify-content: center;
gap: 50px;
flex-wrap: wrap; /* Wrap the cards to fit in small screens */
padding: 20px;
}

.service-card {
background: #161b22;
overflow: hidden;
width: 300px; /* Default width for large screens */
position: relative;
text-align: center;
color: #ffffff;
transition: transform 0.4s ease, box-shadow 0.4s ease;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
backdrop-filter: blur(10px);
padding: 10px;
padding-left: 0;
padding-right: 0;
cursor: pointer;
margin-bottom: 20px; /* Space between cards */
}

.service-card.active {
transform: scale(1.05);
}

.service-card:hover {
transform: translateY(-10px);
box-shadow: 0 10px 30px rgba(47, 224, 117, 0.7);
}

.service-card:hover .expand-icon {
background-color: #2fe075;
}

.service-card h3 {
font-size: 1.1rem;
font-weight: bold;
letter-spacing: 1px;
}

.image-container {
overflow: hidden;
padding: 0;
}

.image-container img {
height: 100px;
width: 80%;
filter: grayscale(100%);
transition: filter 0.4s ease, transform 0.4s ease;
}

.service-card.active .image-container img,
.service-card:hover .image-container img {
filter: grayscale(0);
transform: scale(1.1);
}

.service-card:hover .icon-container svg {
transform: rotate(45deg);
transition: transform 0.4s ease;
}

/* Responsive styling for tablets and larger mobile devices */
@media (max-width: 1024px) {
.service-cards-container {
  gap: 30px; /* Adjust gap between cards */
  padding: 15px;
}

.service-card {
  width: 45%; /* Adjust card width to fit better on larger tablets */
  margin: 10px 0;
}

.image-container img {
  width: 90%;
}
}

/* Responsive styling for medium-sized mobile devices */
@media (max-width: 768px) {
.service-cards-container {
  gap: 20px;
  flex-direction: column; /* Stack cards vertically */
  align-items: center;
}

.service-card {
  width: 90%; /* Make card fill most of the screen */
  margin: 10px 0;
}

.image-container img {
  width: 100%; /* Make images fit fully inside the card */
  height: 170px;
}

.service-card h3 {
  font-size: 1rem; /* Adjust font size for smaller screens */
}
}

































import React, { useEffect, useState } from 'react';

import './Home.css';


import imm from './images/Design.png'
import homeimg from './images/myhome.jpg'



const Home = () => {

  return (
    <>
    <div className="hero-container">
      <div className="text-content">
        <h1>
          <span className="best">BEST</span>
          <span className="website">WEB APP</span>
          <span className="development">DEVELOPMENT</span>
        </h1>
      </div>

      <div className="graphic-container">
        <div className="graphic">
          <img src={imm} alt="" style={{ animation: 'awesomeColorChange 5s linear infinite' }} />
        </div>
      </div>
    </div>

      <div className="information">
        <img src={homeimg} alt="" className='btmimg'/>
      </div>
      </>
  );
};

export default Home;
