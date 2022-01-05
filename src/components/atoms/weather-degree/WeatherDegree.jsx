import React from 'react';
import './WeatherDegree.scss';

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
