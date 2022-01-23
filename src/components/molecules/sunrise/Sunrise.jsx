import React from 'react';
import { FiSunrise } from 'react-icons/fi';
import FlexWrapper from '../HOC/FlexWrapper';

const Sunrise = ({ time }) => {
  return (
    <FlexWrapper unit={time}>
      <FiSunrise />
    </FlexWrapper>
  );
};

export default Sunrise;
