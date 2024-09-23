// LoadingPage.jsx
import React from 'react';
import './LoadingPage.css';

const LoadingPage = () => {
    return (
        <div className="loading-container">
            <div className="circle-wrapper">
                <div className="arc arc-yellow"></div>
                <div className="arc arc-cyan"></div>
                <div className="arc arc-red"></div>
                <div className="center-glow"></div>
                <div className="center-circle"></div>
            </div>
        </div>
    );
};

export default LoadingPage;
