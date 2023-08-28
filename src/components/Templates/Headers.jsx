import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/myContext';
import Button from '../Elements/Button';
import HambButton from '../Elements/HambButton';
import LogoTitle from '../Elements/LogoTitle';
import Navbar from '../Fragments/Navbar';

const Headers = () => {
  const [isScrollbg, setisScrollbg] = useState(false);
  const { setIsOpenMenuList } = useContext(Context);

  const handleMenuList = () => {
    setIsOpenMenuList(true);
  };

  window.addEventListener('scroll', () => {
    setisScrollbg(window.scrollY);
  });

  return (
    <div className={isScrollbg ? 'header-active-navigate' : 'header'}>
      <div className="flex items-center gap-7">
        <HambButton handleMenuList={handleMenuList} />
        <LogoTitle style="text-xl md:text-2xl 2xl:text-3xl" />
      </div>
      <Navbar mode="desktop" />
      <Button children="login" />
    </div>
  );
};

export default Headers;
