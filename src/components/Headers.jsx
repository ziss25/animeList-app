import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/myContext';
import Navbar from './Navbar';

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
        <button onClick={handleMenuList}>
          <i className="fa fa-bars text-2xl md:hidden"></i>
        </button>
        <h2 className="font-semibold text-xl md:text-2xl 2xl:text-3xl">
          soon<span className="text-[var(--primary)]">Flix</span>{' '}
        </h2>
      </div>

      <Navbar mode="desktop" />

      <button
        className="px-6 py-1 font-semibold rounded-md text-sm bg-[var(--primary)] md:text-md md:px-8 2xl:text-lg 2xl:px-10 2xl:py-2 2xl:translate-y-1"
        onClick={() => {
          alert('maaf masih tahap pengembangan');
        }}
      >
        log In
      </button>
    </div>
  );
};

export default Headers;
