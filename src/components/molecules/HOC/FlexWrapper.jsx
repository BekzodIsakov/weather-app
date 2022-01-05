import React from 'react';

const FlexWrapper = ({ children, unit }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        marginLeft: '2rem',
      }}
    >
      {children}
      <span style={{ marginLeft: '.8rem', lineHeight: '1em' }}>{unit}</span>
    </div>
  );
};

export default FlexWrapper;
