import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, icon, to }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      to={to}
      style={{ ...linkStyles, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={cardStyle}>
        <div style={contentStyle}>
          <h2 style={titleStyle}>{title}</h2>
          {icon}
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

const cardStyle = {
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  backgroundColor: 'rgba(241, 195, 160, 0.6)',
  width: '300px',
  transition: 'transform 0.3s ease-in-out',
};

const contentStyle = {
  padding: '20px',
};

const titleStyle = {
  borderBottom: '5px solid #000000',
  paddingBottom: '10px',
  marginBottom: '10px',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit',
};

export default Card;
