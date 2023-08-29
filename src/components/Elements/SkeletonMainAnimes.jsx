import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonMainAnimes = () => {
  return (
    <div className="poster animeRatedList h-max max-w-xs flex flex-col gap-2 items-center relative">
      <div className="rounded-md overflow-hidden w-[90px] h-full md:w-36 lg:w-28">
        <Skeleton height={250} sx={{ bgcolor: '#6b7280' }} />
      </div>
      <div className="poster__body flex justify-center w-full -translate-y-8">
        <Skeleton width={80} height={10} sx={{ bgcolor: '#6b7280' }} />
      </div>
    </div>
  );
};

export default SkeletonMainAnimes;
