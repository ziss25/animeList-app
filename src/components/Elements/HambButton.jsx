import React from 'react';

const HambButton = ({ handleMenuList }) => {
  return (
    <button onClick={handleMenuList}>
      <i className="fa fa-bars text-2xl md:hidden "></i>
    </button>
  );
};

export default HambButton;
