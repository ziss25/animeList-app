import React, { useContext } from 'react';
import { Context } from '../../context/myContext';

const LogoTitle = ({ style }) => {
  const { darkMode } = useContext(Context);

  return (
    <h1 className={`font-semibold ${style} ${!darkMode ? 'text-black' : 'text-white'}`}>
      soon<span className="text-[var(--primary)]">Flix</span>
    </h1>
  );
};

export default LogoTitle;
