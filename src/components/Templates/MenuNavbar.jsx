import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/myContext';
import LogoTitle from '../Elements/LogoTitle';
import LayerMenuNavbar from '../Fragments/LayerMenuNavbar';
import Navbar from '../Fragments/Navbar';

const MenuNavbar = () => {
  const { isOpenMenuList, setIsOpenMenuList } = useContext(Context);
  const { darkMode } = useContext(Context);

  let classMenu;
  if (isOpenMenuList) {
    classMenu = `${darkMode ? 'menuNavbarMobile' : 'menuNavbarMobile--light'} menuNavbar_active `;
  } else {
    classMenu = `${darkMode ? 'menuNavbarMobile' : 'menuNavbarMobile--light'}`;
  }

  const handleMenuList = () => {
    setIsOpenMenuList(false);
  };

  return (
    <>
      <div className={classMenu}>
        <LogoTitle style="text-3xl text-center my-8" />
        <div className="Menu px-6">
          <h3 className="text-xl mb-3">Menu</h3>
          <Navbar mode="mobile" />
        </div>
      </div>

      {isOpenMenuList ? <LayerMenuNavbar handleMenuList={handleMenuList} /> : null}
    </>
  );
};

export default MenuNavbar;
