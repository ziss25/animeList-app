import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/myContext';
import Button from '../Elements/Button';
import HambButton from '../Elements/HambButton';
import LogoTitle from '../Elements/LogoTitle';
import Navbar from '../Fragments/Navbar';
// import test from '../../assets/avatar/test.jpg';

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
      {/* jika ntar nanti mau adain fitur avatar border .... for next*/}
      <div className="flex items-center gap-2">
        <h4 className="font-semibold">ziss</h4>
        <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
          <img className="w-full h-full object-cover" src="https://i.ibb.co/rv81FZ0/e0984745e2cb.jpg" />
        </div>

        {/* <Button children="login" /> */}
      </div>
    </div>
  );
};

export default Headers;
