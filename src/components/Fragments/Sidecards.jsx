import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Elements/Button';
import Title from '../Elements/Title';
import CardList from '../Fragments/CardList';

const Sidecards = ({ dataFetch, title }) => {
  const [dataAnime, SetDataAnime] = useState([]);
  const [pagination, setPagination] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getAnimesTopByFavorite = async () => {
    const response = await dataFetch();
    SetDataAnime(response.data);
    setPagination(response.pagination);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getAnimesTopByFavorite();
  }, []);

  return (
    <div className="hidden absolute top-0 mx-4 px-4 right-2 w-[330px] h-[95%] overflow-auto flex-col gap-2 lg:flex 2xl:w-[400px] p-3">
      <Title title={title} style="mb-5 text-xl font-bold border-b-4 pb-1 border-[var(--primary)] inline-block text-center" />
      <div className="overflow-auto border-l overflow-x-hidden border-stone-700">
        {dataAnime.map((data, index) => (
          <CardList key={index} data={data} isLoading={isLoading} />
        ))}
      </div>
      <Button children="load more" />
    </div>
  );
};

export default Sidecards;
