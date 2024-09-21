import React, { useEffect, useState } from 'react';
import './AboutC1.css';


import website from '../images/business b1.webp';

import mystudio from '../images/mrstudio.mp4';

import AboutC2 from './AboutC2';
import FooterAnimation from './FooterAnimation';

const colors = ['#FF3CAC', '#784BA0', '#2B86C5', '#F8FF00', '#EE82EE', '#00FFFF', '#FF4500', '#FF1493'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const AboutC1 = () => {
  const title = "GAURISHANKAR";
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColors = title.split('').map(() => getRandomColor());
      setColorList(newColors);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const coloredLetters = title.split('').map((letter, index) => (
    <span
      key={index}
      className="colored-letter"
      style={{
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextStroke: `1px ${colorList[index] || 'white'}`,
        animation: `glow 2s infinite alternate, slideIn 0.6s ease-in-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
      }}
    >
      {letter}
    </span>
  ));

  return (
    <>
    <div className="about-sectionn">
      <div className="content-wrapper">
        <h1 className="main-title" style={{fontFamily: 'Twentieth Century', fontWeight: 'bolder' }}>
          <span className='MR'> MR </span> {coloredLetters}
        </h1>

        <div className="media-container">
          <h1 className='sub-titles'> at a </h1>
          <img
            src={website}
            alt="People collaborating at a desk"
            className="media-image"
          />

          <video
            src={mystudio}
            alt="Group discussion"
            className="media-video"
            autoPlay
            muted
            loop
          />
        </div>

        <h1 className='sub-title'> <span style={{ fontFamily: 'Twentieth Century' }}>MR STUDIO</span> <span> </span></h1>
      </div>

      <div className="footersection">
        <FooterAnimation/>
      </div>
    </div>
    <AboutC2/>
    </>
  );
};

export default AboutC1;
