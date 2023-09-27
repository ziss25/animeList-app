import React, { useContext } from 'react';
import { Context } from '../../context/myContext';

const Title = ({ title, style }) => {
  const { darkMode } = useContext(Context);
  return <h1 className={`${style} ${darkMode ? 'text-white' : 'text-black'}`}>{title}</h1>;
};

export default Title;
