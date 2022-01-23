import React from 'react';

const WeatherDegree = ({ children, fontSize, unit }) => {
  return (
    <div className={`weather-degree ${fontSize}`}>
      {children}
      <sup className='symbol'>&deg;</sup>
      <span className='unit'>{unit}</span>
    </div>
  );
};

export default WeatherDegree;
