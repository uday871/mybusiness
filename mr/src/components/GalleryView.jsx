import React from 'react';
import { motion } from 'framer-motion';
import './GalleryView.css';
import homeimg from './images/myhome.jpg'

const GalleryView = () => {
  return (
    <div className="gallery-container">
      <motion.div
        className="heading-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h5>Recent Works Gallery</h5>
        <h1>Let's Look at Our Recent Project Gallery</h1>
        <motion.button
          className="view-more-btn"
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.7)' }}
          whileTap={{ scale: 0.9 }}
        >
          View More Projects →
        </motion.button>
      </motion.div>



      
      <hr />

      
      <div className="gallery-content">
        <motion.div
          className="project-info"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          <h2>01</h2>
          <h3>Ecommerce</h3>
        </motion.div>


        <motion.div
          className="project-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.5 } }}
        >
          <img src={homeimg} alt="Project" />
        </motion.div>

        <motion.div
          className="circle-arrow"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          whileHover={{ rotate: 90, scale: 1.2 }}
        >
          <i className="arrow-icon">↗</i>
        </motion.div>
      </div>
      
      <hr />
      <div className="gallery-content">
        <motion.div
          className="project-info"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          <h2>02</h2>
          <h3>Ecommerce</h3>
        </motion.div>


        <motion.div
          className="project-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.5 } }}
        >
          <img src={homeimg} alt="Project" />
        </motion.div>

        <motion.div
          className="circle-arrow"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          whileHover={{ rotate: 90, scale: 1.2 }}
        >
          <i className="arrow-icon">↗</i>
        </motion.div>
      </div>
      
      <hr />
      <div className="gallery-content">
        <motion.div
          className="project-info"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          <h2>03</h2>
          <h3>Ecommerce</h3>
        </motion.div>


        <motion.div
          className="project-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.5 } }}
        >
          <img src={homeimg} alt="Project" />
        </motion.div>

        <motion.div
          className="circle-arrow"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          whileHover={{ rotate: 90, scale: 1.2 }}
        >
          <i className="arrow-icon">↗</i>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryView;
