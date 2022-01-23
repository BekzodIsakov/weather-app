import React from 'react';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { AiOutlinePercentage } from 'react-icons/ai';

const Humidity = ({ percentage }) => {
  return (
    <div className='humidity'>
      <MdOutlineWaterDrop size={26} />
      <span>{percentage} </span>
      <AiOutlinePercentage size={'1.05em'} />
    </div>
  );
};

export default Humidity;
