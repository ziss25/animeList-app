import React from 'react';
import { CircularProgress } from '@mui/material';
const GlobalLoading = () => {
  return (
    <div className="flex fixed top-0 right-0 left-0 bottom-0 justify-center items-center  w-screen h-screen bg-black">
      <CircularProgress />
    </div>
  );
};

export default GlobalLoading;
