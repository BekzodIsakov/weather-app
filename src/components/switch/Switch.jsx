import React from 'react';
import { useSetTheme } from '../../hooks/useSetTheme';

import './Switch.scss';

const Switch = () => {
  const setTheme = useSetTheme();

  return (
    <label className='switch' htmlFor='checkbox'>
      <input id='checkbox' type='checkbox' />
      <span className='track' onClick={setTheme}>
        <span className='thumb'></span>
      </span>
    </label>
  );
};

export default Switch;
