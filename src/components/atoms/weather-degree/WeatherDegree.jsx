import React from 'react';

const WeatherDegree = ({ children, fontSize, weatherUnit }) => {
  return (
    <div className={`weather-degree ${fontSize}`}>
      {children}
      <sup className='symbol'>&deg;</sup>
      <span className='unit'>{weatherUnit}</span>
    </div>
  );
};

export default WeatherDegree;
