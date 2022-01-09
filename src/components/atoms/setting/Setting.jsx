import React, { useEffect, useRef } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

import './Setting.scss';

const Setting = ({ children }) => {
  const dropdown = useRef();
  const button = useRef();

  useEffect(() => {
    if (dropdown.current) {
      dropdown.current.addEventListener(
        'mouseover',
        () =>
          (button.current.style.transform = 'translateX(-50%) rotateZ(90deg)')
      );

      button.current.addEventListener(
        'mouseover',
        () =>
          (button.current.style.transform = 'translateX(-50%) rotateZ(90deg)')
      );

      dropdown.current.addEventListener(
        'mouseleave',
        () => (button.current.style.transform = 'translateX(-50%) rotateZ(0)')
      );
      button.current.addEventListener(
        'mouseleave',
        () => (button.current.style.transform = 'translateX(-50%) rotateZ(0)')
      );
    }
  });

  return (
    <div className='setting'>
      <h4>Temperature</h4>
      <div className='option'>
        Celcius
        <button ref={button}>
          <RiArrowRightSLine className='arrow-icon' size={'2rem'} />
        </button>
        <div className='dropdown' ref={dropdown}>
          <ul>
            <li>dropdown 1</li>
            <li>dropdown 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Setting;
