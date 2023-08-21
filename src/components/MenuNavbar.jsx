import React, { useContext, useEffect } from 'react';
import { Context } from '../context/myContext';
import Navbar from './Navbar';

const MenuNavbar = () => {
  const { isOpenMenuList, setIsOpenMenuList } = useContext(Context);

  let classMenu;
  if (isOpenMenuList) {
    classMenu = 'menuNavbarMobile menuNavbar_active';
  } else {
    classMenu = 'menuNavbarMobile';
  }

  const handleMenuList = () => {
    setIsOpenMenuList(false);
  };

  return (
    <>
      <div className={classMenu}>
        <h1 className="text-3xl text-center my-8">
          Soon<span className="text-[var(--primary)]">flix</span>
        </h1>
        <div className="Menu px-6">
          <h3 className="text-xl mb-3">Menu</h3>
          <Navbar mode="mobile" />
        </div>
      </div>

      {isOpenMenuList ? (
        <button className="md:hidden  menuNavbar__Layer fixed bg-black top-0 right-0 left-0 bottom-0 z-40 opacity-90" onClick={handleMenuList}>
          ada
        </button>
      ) : null}
    </>
  );
};

export default MenuNavbar;
