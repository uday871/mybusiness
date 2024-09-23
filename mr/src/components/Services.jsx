

import React from 'react'

import WebIcon from '@mui/icons-material/Web';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import mobileapp from './images/mobileapp.webp'
import maintainance from './images/maintainance.webp'
import website from './images/side.webp'

import { Link } from 'react-router-dom';

import website1 from './images/mrbr.webp';

import './Home.css'
import './Services.css'



const Services = () => {
  


  const services = [
    {
      id: '/ContactC1',
      title: 'Website Development',
      icon:  <WebIcon style={{ fontSize: 70 }} />,
      image: website,
      active: true,
    },
    {
      id:'/ContactC1',
      title: 'App Development',
      icon: <AppSettingsAltIcon style={{ fontSize: 70 }} />,
      image: mobileapp,
      active: true,
    },
    {
      id:'/ContactC1',
      title: 'Maintainance',
      icon:  <BuildCircleIcon style={{ fontSize: 70 }} />,
      image: maintainance,
      active: true,
    },
  ];

  return (
    <>
    <div className="servicecontainer">
      <div className="servicesvideos">
        <img src={website1} alt="" className='servicesimage'/>
      </div>

    <div className="services-section" style={{justifyContent:'center',textAlign:'center'}}>
      <h2>Our Services</h2>
    <p>
      Comprehensive Website Services to Ignite Your Online Success. Empower
      Your Business with Powerful Online Services from our Website.
    </p>
  </div>

<div className="service-cards-container">
{services.map((service, index) => (
    <Link key={index} to={`${service.id}`} className={`service-card ${service.active ? 'active' : ''}`}>
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


