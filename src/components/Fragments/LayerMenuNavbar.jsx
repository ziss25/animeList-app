import React from 'react';

const LayerMenuNavbar = ({ handleMenuList }) => {
  return <button className="menuNavbar__Layer fixed md:hidden bg-black top-0 right-0 left-0 bottom-0 z-40 opacity-90" onClick={handleMenuList}></button>;
};

export default LayerMenuNavbar;
