import React from 'react';
import Card from './Card';

const Announcements = ({ title, InnerCard}) => {
    return (
    <div>
      <Card title={title}>
        {InnerCard}{}
      </Card>
    </div>
    );
  };

export default Announcements;
