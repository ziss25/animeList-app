import React, { useEffect, useState } from 'react';
import { fetchAnimesSeasonNow } from '../api/apiMyAnimeList';
import Poster from './Poster';

const SeasonNow = () => {
  const [data, setData] = useState([]);

  const getAnimesSeasonNow = async () => {
    const response = await fetchAnimesSeasonNow();
    setData(response);
  };

  useEffect(() => {
    getAnimesSeasonNow();
  }, []);

  return (
    <div className="recomendation-Anime mt-5">
      <h1 className="mb-5 text-xl font-bold">Season Now</h1>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
        {data.map((anime, index) => (
          <Poster key={index} data={anime} />
        ))}
      </div>
    </div>
  );
};

export default SeasonNow;
