import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonMostFavorite = () => {
  return (
    <div className="myCards flex ml-2">
      <div className="">
        <Skeleton width={80} height={130} sx={{ bgcolor: '#aeaeae' }} />
      </div>
      <div className="flex justify-center  flex-col ml-5">
        <Skeleton width={120} height={10} sx={{ bgcolor: '#aeaeae' }} />
        <Skeleton width={150} height={10} sx={{ bgcolor: '#aeaeae' }} />
        <Skeleton width={60} height={10} sx={{ bgcolor: '#aeaeae' }} />
      </div>
    </div>
  );
};

export default SkeletonMostFavorite;
