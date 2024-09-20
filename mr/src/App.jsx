import React, { useState, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Helmet } from 'react-helmet';
import './App.css';

import bs from './components/images/bussinesslogo.png';

// Lazy loading large components for better performance
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Products = lazy(() => import('./components/Products'));
const Contact = lazy(() => import('./components/Contact'));
const Talk = lazy(() => import('./components/Talk'));
const UserMessage = lazy(() => import('./components/UserMessage'));
const AboutC1 = lazy(() => import('./components/mincomponents/AboutC1'));
const ContactC1 = lazy(() => import('./components/mincomponents/ContactC1'));
const FooterAnimation = lazy(() => import('./components/mincomponents/FooterAnimation'));
const VideoCapture = lazy(() => import('./components/mincomponents/VideoCapture'));

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Business App - Home</title>
        <meta name="description" content="Welcome to our business platform. Learn more about our services, products, and how to contact us." />
        <meta name="keywords" content="business, services, products, contact, about, talk" />
      </Helmet>

      <Router>
        <nav className="navbar">
          <div className="logocontainer">
            <div className="logo">
              <img src={bs} alt="Business Logo" className='logoimage' loading="lazy" />
            </div>
            <div className="logo" style={{ marginLeft: '0' }}>
              Business
            </div>
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutC1">About</Link></li>
            <li><Link to="/VideoCapture">Hidden</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/ContactC1">Contact Us</Link></li>
            <li className="cta"><Link to="/Talk" className="talk-btn">Let's Talk</Link></li>
          </ul>

          <IconButton className="menu-icon" onClick={toggleMobileMenu}>
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>

          <Drawer anchor="left" open={isMobileMenuOpen} onClose={closeMobileMenu}>
            <div className="sidebar">
              <List>
                <ListItem button onClick={closeMobileMenu}>
                  <ListItemIcon><HomeIcon style={{ color: "#00ff00" }} /></ListItemIcon>
                  <ListItemText><Link to="/">Home</Link></ListItemText>
                </ListItem>
                <ListItem button onClick={closeMobileMenu}>
                  <ListItemIcon><InfoIcon style={{ color: "#00ff00" }} /></ListItemIcon>
                  <ListItemText><Link to="/AboutC1">About</Link></ListItemText>
                </ListItem>
                <ListItem button onClick={closeMobileMenu}>
                  <ListItemIcon><ChatIcon style={{ color: "#00ff00" }} /></ListItemIcon>
                  <ListItemText><Link to="/ContactC1">Contact</Link></ListItemText>
                </ListItem>
                <ListItem button onClick={closeMobileMenu}>
                  <ListItemIcon><PhoneInTalkIcon style={{ color: "#00ff00" }} /></ListItemIcon>
                  <ListItemText><Link to="/Talk">Talk with me</Link></ListItemText>
                </ListItem>
                <ListItem button onClick={closeMobileMenu}>
                  <ListItemIcon><SettingsSuggestIcon style={{ color: "#00ff00" }} /></ListItemIcon>
                  <ListItemText><Link to="/Services">Services</Link></ListItemText>
                </ListItem>
                <ListItem button onClick={closeMobileMenu}>
                  <ListItemIcon><ContactsIcon style={{ color: "#00ff00" }} /></ListItemIcon>
                  <ListItemText><Link to="/UserMessage">UserMessage</Link></ListItemText>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Talk" element={<Talk />} />
            <Route path="/VideoCapture" element={<VideoCapture />} />
            <Route path="/FooterAnimation" element={<FooterAnimation />} />
            <Route path="/AboutC1" element={<AboutC1 />} />
            <Route path="/ContactC1" element={<ContactC1 />} />
            <Route path="/UserMessage" element={<UserMessage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
