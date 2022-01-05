import React from 'react';
import { FiWind } from 'react-icons/fi';
import FlexWrapper from '../HOC/FlexWrapper';

const WindSpeed = ({ speed }) => {
  return (
    <FlexWrapper unit={speed}>
      <FiWind />
    </FlexWrapper>
  );
};

export default WindSpeed;
