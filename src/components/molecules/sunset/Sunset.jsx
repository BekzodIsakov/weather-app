import React from 'react';
import { FiSunset } from 'react-icons/fi';
import FlexWrapper from '../HOC/FlexWrapper';

const Sunset = ({ time }) => {
  return (
    <FlexWrapper unit={time}>
      <FiSunset />
    </FlexWrapper>
  );
};

export default Sunset;
