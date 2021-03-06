import React from 'react';

const WeatherStatusImg = ({ src, alt, size }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`weather-status-img weather-status-img--${size}`}
    />
  );
};

export default WeatherStatusImg;
