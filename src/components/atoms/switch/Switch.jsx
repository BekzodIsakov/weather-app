import React from 'react';

const Switch = ({checked, onClick}) => {
  return (
    <label
      className='switch'
      htmlFor='checkbox'
      tabIndex={0}
      onKeyDown={(e) => {
        e.key === 'Enter' && onClick();
      }}
    >
      <input
        id='checkbox'
        type='checkbox'
        checked={checked}
      />
      <span className='track' onClick={onClick}>
        <span className={'thumb'}></span>
      </span>
    </label>
  );
};

export default Switch;
