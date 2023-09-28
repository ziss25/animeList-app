import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/myContext';
import HambButton from '../Elements/HambButton';
import LogoTitle from '../Elements/LogoTitle';
import Navbar from '../Fragments/Navbar';
import jwtDecode from 'jwt-decode';
import { Avatar } from '@mui/material';
import { stringAvatar } from '../../utils/utilAvatar';
import ProfilePopUp from '../Elements/ProfilePopUp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import axios from 'axios';

const Headers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsOpenMenuList } = useContext(Context);
  const { openProfilePopUp, setOpenProfilePopUp } = useContext(Context);
  const { setLoginPage, IsLoginPage } = useContext(Context);
  const { statusLogin, setStatusLogin } = useContext(Context);
  const { darkMode, setDarkMode } = useContext(Context);
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
      setStatusLogin(true);
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

  // useEffect(() => {
  //   console.log(isScrollbg);
  // }, [isScrollbg]);

  useEffect(() => {
    getToken();
    parseToken();
  }, [IsLoginPage, token, openProfilePopUp, statusLogin]);

  return (
    <>
      {darkMode ? (
        <div className={`${isScrollbg ? 'header-active-navigate' : 'header'} `}>
          {/* <div className="header"> */}
          <div className="flex items-center gap-7 ">
            <HambButton handleMenuList={handleMenuList} />
            <LogoTitle style="text-xl md:text-2xl 2xl:text-3xl" />
          </div>
          <Navbar mode="desktop" />
          <div className="flex gap-5 items-center cursor-pointer">
            <DarkModeIcon onClick={() => setDarkMode(!darkMode)} />
            {!statusLogin || !token ? (
              <button
                className="px-6 py-1 font-semibold rounded-md text-sm bg-[var(--primary)] md:text-md md:px-8 2xl:text-lg 2xl:px-10 2xl:py-2 2xl:translate-y-1"
                onClick={() => {
                  setLoginPage(true);
                  // pada saat click tombol login akan di rediarect ke form login beserta path terakhir nya user... yg dimana jika user success login kembali ke path terakhir dia
                  navigate('/login', {
                    state: { dest: location.pathname },
                  });
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
        </div>
      ) : (
        <div className={`${isScrollbg ? 'header-active-light' : 'header--light'} `}>
          {/* <div className="header"> */}
          <div className="flex items-center gap-7 ">
            <HambButton handleMenuList={handleMenuList} />
            <LogoTitle style="text-xl md:text-2xl 2xl:text-3xl" />
          </div>
          <Navbar mode="desktop" />
          <div className="flex gap-5 items-center">
            <DarkModeIcon sx={{ color: 'black' }} onClick={() => setDarkMode(!darkMode)} />
            {!statusLogin || !token ? (
              <button
                className="px-6 py-1 font-semibold rounded-md text-sm bg-[var(--primary)] md:text-md md:px-8 2xl:text-lg 2xl:px-10 2xl:py-2 2xl:translate-y-1"
                onClick={() => {
                  setLoginPage(true);
                  // pada saat click tombol login akan di rediarect ke form login beserta path terakhir nya user... yg dimana jika user success login kembali ke path terakhir dia
                  navigate('/login', {
                    state: { dest: location.pathname },
                  });
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
        </div>
      )}
    </>
  );
};

export default Headers;
