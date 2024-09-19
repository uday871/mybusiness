import React from 'react';
import { useSpring, animated } from 'react-spring';
import './FooterAnimation.css';
const FooterAnimation = () => {
  const items = [
    { text: "Creative People", id: 1 },
    { text: "Good Reviews", id: 2 },
    { text: "Awesome Design", id: 3 },
    { text: "Fast Delivery", id: 4 },
  ];

  // Spring animation hook
  const AnimatedItem = ({ text }) => {
    const [styles, api] = useSpring(() => ({
      transform: 'scale(1)',
      config: { tension: 200, friction: 10 },
    }));

    return (
      <animated.div
        className="footer-animation__item"
        onMouseEnter={() => api.start({ transform: 'scale(1.2)' })}
        onMouseLeave={() => api.start({ transform: 'scale(1)' })}
        style={styles}
      >
        <span className="footer-animation__icon">✦</span> {text}
      </animated.div>
    );
  };

  return (
    <div className="footer-animation__container">
      {items.map(item => (
        <AnimatedItem key={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default FooterAnimation;
