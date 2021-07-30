import React, { useState } from 'react';
import Menu from '../../../Data/menu.json';
import './header.scss';

export const Header = () => {
  const [options] = useState(Menu.options);
  return (
    <header className='container'>
      <div className="logo-container"><img className="logo" src="" alt="Logo" /></div>
      <div className="options-container">
        {options.map((option) => {
          return <div key={option} className="option"> {option} </div>
        })}
      </div>
    </header>
  );
};