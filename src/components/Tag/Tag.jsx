import React from 'react';

export const Tag = ({ service }) => {
  return (
    <div className="tag">
      <img src="/assets/icons/service_icon.svg" alt="" />
      <p>{service}</p>
    </div>
  );
};
