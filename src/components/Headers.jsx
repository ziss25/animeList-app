import React, { useEffect, useState } from 'react';

const Headers = ({ setIsOpenMenuList }) => {
  const [isNavigateBg, setIsNavigateBg] = useState(false);

  const handleMenuList = () => {
    setIsOpenMenuList(true);
  };

  window.addEventListener('scroll', () => {
    setIsNavigateBg(window.scrollY);
  });

  return (
    <div className={isNavigateBg ? 'header-active-navigate' : 'header'}>
      <div className="flex items-center gap-7">
        <button onClick={handleMenuList}>
          <i className="fa fa-bars text-2xl md:hidden"></i>
        </button>
        <h2 className="font-semibold text-xl md:text-2xl 2xl:text-3xl">
          soon<span className="text-[var(--primary)]">Flix</span>{' '}
        </h2>
      </div>

      <nav>
        <ul className="hidden md:flex gap-10 text-sm md:text-md -translate-x-3 2xl:text-lg">
          <li className="cursor-pointer hover:text-[var(--primary)]">Home</li>
          <li className="cursor-pointer hover:text-[var(--primary)]">popular</li>
          <li className="cursor-pointer hover:text-[var(--primary)]">coming Soon</li>
          <li className="cursor-pointer hover:text-[var(--primary)]">search</li>
        </ul>
      </nav>

      <button className="px-6 py-1 font-semibold rounded-md text-sm bg-[var(--primary)] md:text-md md:px-8 2xl:text-lg 2xl:px-10 2xl:py-2 2xl:translate-y-1">log In</button>
    </div>
  );
};

export default Headers;
// 'fixed flex h-12 bg-black top-0 right-0 left-0 border z-30 text-white'
