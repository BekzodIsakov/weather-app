import React from 'react';

const WeatherFeature = ({ icon, data, unit }) => {
  return (
    <div className="weather-feature">
      {icon}
      <span>
        {data} {unit}
      </span>
    </div>
  );
};

export default WeatherFeature;
