import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchAnimesSeasonNow } from '../../api/apiMyAnimeList';
import Poster from '../Elements/Poster';

const SeasonNow = () => {
  const [data, setData] = useState([]);
  const [Isloading, setIsLoading] = useState(true);

  const getAnimesSeasonNow = async () => {
    const response = await fetchAnimesSeasonNow();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setData(response.data);
  };

  useEffect(() => {
    getAnimesSeasonNow();
  }, []);

  return (
    <>
      <div className="recomendation-Anime mt-10">
        <h1 className="mb-5 text-xl font-bold border-b-4 pb-1 border-[var(--primary)] inline-block">Season Now</h1>
        {Isloading ? (
          <div className="scale-50 flex justify-center">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 2xl:grid-cols-6">
            {data.map((anime, index) => (
              <div key={index} className="lg:cursor-pointer lg:hover:scale-110 transition-all duration-500">
                <Poster data={anime} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SeasonNow;
