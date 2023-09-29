import React, { useContext } from 'react';
import { Context } from '../../context/myContext';
import LogoTitle from '../Elements/LogoTitle';
import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { IconButton } from '@mui/material';

const Footer = () => {
  const { darkMode } = useContext(Context);
  return (
    <section className={`footer p-5 bg-zinc-900 ${!darkMode && 'bg-zinc-100'}`}>
      <div className={`container flex gap-5 flex-col md:flex-row md:justify-between items-center text-white mx-auto`}>
        <LogoTitle style="text-xl md:text-2xl 2xl:text-3xl " />
        <div className={`border-t  md:border-none ${darkMode ? 'text-white border-gray-700' : 'text-black border-gray-300'}`}>
          <ul className="flex justify-center mt-3 ">
            <IconButton
              href={'#'} //
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                className="cursor-pointer "
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontSize: 20,

                  '&:hover': {
                    color: '#FF0000',
                  },
                }}
              />
            </IconButton>
            <IconButton
              href={'https://api.whatsapp.com/send?phone=6281347435827&text=Hello'}
              target="_blank" //
              rel="noopener noreferrer"
            >
              <WhatsAppIcon
                className="cursor-pointer"
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontSize: 20,

                  '&:hover': {
                    color: '#FF0000',
                  },
                }}
              />
            </IconButton>
            <IconButton
              href={'https://github.com/ziss25'} //
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                className="cursor-pointer"
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontSize: 20,

                  '&:hover': {
                    color: '#FF0000',
                  },
                }}
              />
            </IconButton>
            <IconButton
              href={'https://www.youtube.com/watch?v=C2Dj3NM80RM'} //
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon
                className="cursor-pointer"
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontSize: 20,

                  '&:hover': {
                    color: '#FF0000',
                  },
                }}
              />
            </IconButton>
          </ul>
          <p className="md:mt-0 text-xs hover:text-[var(--primary)] cursor-pointer mt-5">
            <CopyrightIcon sx={{ fontSize: 15 }} /> <span>zisscode. All rigths reserved</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
