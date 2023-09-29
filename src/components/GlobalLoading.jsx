import React, { useContext } from 'react';
import { CircularProgress } from '@mui/material';
import { Context } from '../context/myContext';

const GlobalLoading = () => {
  const { darkMode } = useContext(Context);

  return (
    <div className={`flex fixed top-0 right-0 left-0 bottom-0 justify-center items-center  w-screen h-screen ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <CircularProgress />
    </div>
  );
};

export default GlobalLoading;
