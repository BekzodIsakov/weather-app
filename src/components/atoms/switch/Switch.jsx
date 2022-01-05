import React from 'react';
import { useSetTheme } from '../../../hooks/useSetTheme';

import './Switch.scss';

const Switch = () => {
  const { setTheme, selectedTheme } = useSetTheme();

  return (
    <label
      className='switch'
      htmlFor='checkbox'
      tabIndex={0}
      onKeyDown={(e) => {
        e.key === 'Enter' && setTheme();
      }}
    >
      <input
        id='checkbox'
        type='checkbox'
        checked={selectedTheme == 'dark' && true}
      />
      <span className='track' onClick={setTheme}>
        <span className={'thumb'}></span>
      </span>
    </label>
  );
};

export default Switch;
