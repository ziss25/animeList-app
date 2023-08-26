import React from 'react';
import { CircularProgress } from '@mui/material';
const GlobalLoading = () => {
  return (
    <div className="flex justify-center items-center bg-black w-screen h-screen">
      <CircularProgress />
    </div>
  );
};

export default GlobalLoading;
