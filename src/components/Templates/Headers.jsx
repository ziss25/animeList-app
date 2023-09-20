import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/myContext';
import HambButton from '../Elements/HambButton';
import LogoTitle from '../Elements/LogoTitle';
import Navbar from '../Fragments/Navbar';
import jwtDecode from 'jwt-decode';
import { Avatar } from '@mui/material';
import { stringAvatar } from '../../utils/utilAvatar';
import ProfilePopUp from '../Elements/ProfilePopUp';
import axios from 'axios';

const Headers = () => {
  const navigate = useNavigate();
  const { setIsOpenMenuList } = useContext(Context);
  const { openProfilePopUp, setOpenProfilePopUp } = useContext(Context);
  const { setLoginPage, IsLoginPage } = useContext(Context);
  const [token, setToken] = useState('');
  const [isScrollbg, setisScrollbg] = useState(false);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const getToken = async () => {
    try {
      const response = await axios.get('https://cute-tan-jaguar-cap.cyclic.cloud/token', {
        withCredentials: true,
      });
      setToken(response.data.accessToken);
    } catch (err) {
      console.log('user belum login ');
    }
  };

  const parseToken = async () => {
    try {
      const decodedToken = await jwtDecode(token);
      setName(decodedToken.name);
      setAvatar(decodedToken.avatar_url);
    } catch (error) {
      console.log('tidak ada token');
    }
  };

  const handleMenuList = () => {
    setIsOpenMenuList(true);
  };

  window.addEventListener('scroll', () => {
    setisScrollbg(window.scrollY);
  });

  useEffect(() => {
    getToken();
    parseToken();
  }, [IsLoginPage, token, openProfilePopUp]);

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
            setLoginPage(true);
            navigate('/login');
          }}
        >
          login
        </button>
      ) : avatar ? (
        // jika ada avatar nya di db -> itu yg di pake
        <div>
          <Avatar
            alt={name}
            src={avatar}
            onClick={() => {
              setOpenProfilePopUp(!openProfilePopUp);
            }}
          />
        </div>
      ) : (
        // kalo ga ada yaa avatart text aja
        <div className="relative">
          <div className="cursor-pointer">
            <Avatar
              {...stringAvatar(name)}
              onClick={() => {
                setOpenProfilePopUp(!openProfilePopUp);
              }}
            />
          </div>
        </div>
      )}

      {openProfilePopUp === true ? (
        <ProfilePopUp
          setToken={setToken} //
          setOpenProfilePopUp={setOpenProfilePopUp}
        />
      ) : null}
    </div>
  );
};

export default Headers;
