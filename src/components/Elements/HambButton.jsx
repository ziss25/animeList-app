import React, { useContext } from 'react';
import { Context } from '../../context/myContext';

const HambButton = ({ handleMenuList }) => {
  const { darkMode } = useContext(Context);

  return (
    <button onClick={handleMenuList}>
      <i className={`fa fa-bars text-2xl md:hidden ${!darkMode ? 'text-black' : null}`}></i>
    </button>
  );
};

export default HambButton;
