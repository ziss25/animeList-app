import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/myContext';
import HambButton from '../Elements/HambButton';
import LogoTitle from '../Elements/LogoTitle';
import Navbar from '../Fragments/Navbar';
import jwtDecode from 'jwt-decode';
import { Avatar } from '@mui/material';

const Headers = () => {
  const navigate = useNavigate();
  const { token } = useContext(Context);
  const [isScrollbg, setisScrollbg] = useState(false);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleMenuList = () => {
    setIsOpenMenuList(true);
  };

  window.addEventListener('scroll', () => {
    setisScrollbg(window.scrollY);
  });

  useEffect(() => {
    try {
      const decodedToken = jwtDecode(token);
      setName(decodedToken.username);
      setAvatar(decodedToken.avatar_url);
    } catch (error) {
      console.log('user belum login');
    }
  });

  return (
    <div className={isScrollbg ? 'header-active-navigate' : 'header'}>
      <div className="flex items-center gap-7">
        <HambButton handleMenuList={handleMenuList} />
        <LogoTitle style="text-xl md:text-2xl 2xl:text-3xl" />
      </div>
      <Navbar mode="desktop" />
      {!token ? (
        <button
          className="px-6 py-1 font-semibold rounded-md text-sm bg-[var(--primary)] md:text-md md:px-8 2xl:text-lg 2xl:px-10 2xl:py-2 2xl:translate-y-1"
          onClick={() => {
            navigate('/login');
          }}
        >
          login
        </button>
      ) : avatar ? (
        // jika ada avatar nya di db -> itu yg di pake
        <Avatar alt="Remy Sharp" src={avatar} />
      ) : (
        // kalo ga ada yaa avatart text aja
        <Avatar
          sx={{ backgroundColor: 'red' }} //
          alt={name}
          src="/broken-image.jpg"
        />
      )}
    </div>
  );
};

export default Headers;

{
  /* <div className="flex items-center gap-2">
<h4 className="font-semibold">ziss</h4>
<div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
  <img className="w-full h-full object-cover" src="https://i.ibb.co/rv81FZ0/e0984745e2cb.jpg" />
</div>
</div> */
}
