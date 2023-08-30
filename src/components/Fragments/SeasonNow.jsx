import React, { useEffect, useState } from 'react';
import { fetchAnimesSeasonNow } from '../../api/apiMyAnimeList';
import Poster from '../Elements/Poster';
import SkeletonMainAnimes from '../Elements/SkeletonMainAnimes';

const SeasonNow = () => {
  const [data, setData] = useState([]);
  const [Isloading, setIsLoading] = useState(true);

  const getAnimesSeasonNow = async () => {
    // cek local ada apa tidak ?
    const response = JSON.parse(localStorage.getItem('localDataSeasonNow')) || (await fetchAnimesSeasonNow());
    setData(response.data);
    // save data
    sessionStorage.setItem('localDataSeasonNow', JSON.stringify(response));
  };

  useEffect(() => {
    getAnimesSeasonNow();
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="recomendation-Anime mt-10">
      <h1 className="mb-5 text-xl font-bold border-b-4 pb-1 border-[var(--primary)] inline-block">Season Now</h1>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 2xl:grid-cols-6">
        {data.map((anime, index) => (
          <div key={index} className="lg:cursor-pointer lg:hover:scale-110 transition-all duration-500">
            <Poster data={anime} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonNow;
