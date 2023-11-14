import React from 'react';

const Card = ({ title, children, icon }) => {
  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>{title}</h2>
        {icon}
        <div>{children}</div>
      </div>
    </div>
  );
};

const cardStyle = {
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  marginTop: '20px',
  backgroundColor: 'rgba(241, 195, 160, 0.6)',
  width: '50%', 
  maxheight: '20%',
};

const contentStyle = {
  padding: '20px',
};

const titleStyle = {
  borderBottom: '5px solid #000000',
  paddingBottom: '10px',
  marginBottom: '10px',
};


export default Card;
