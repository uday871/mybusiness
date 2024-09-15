

import React from 'react'

import WebIcon from '@mui/icons-material/Web';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import mobileapp from './images/mobileapp.webp'
import maintainance from './images/maintainance.png'
import website from './images/remove.png'
import { Link } from 'react-router-dom';

import './Home.css'



const Services = () => {
  


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

  return (
    <>
    <div className="servicecontainer">

    <div className="services-section" style={{justifyContent:'center',textAlign:'center'}}>
      <h2>Our Services</h2>
    <p>
      Comprehensive Website Services to Ignite Your Online Success. Empower
      Your Business with Powerful Online Services from our Website.
    </p>
  </div>

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
</div>
</>
    
  )
}



export default Services


