import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Elements/Button';
import Title from '../Elements/Title';
import CardList from '../Fragments/CardList';
import SkeletonMostFavorite from '../Elements/SkeletonMostFavorite';

const Sidecards = ({ dataFetch, title }) => {
  const [dataAnime, SetDataAnime] = useState([]);
  const [pagination, setPagination] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [arrSkeleton] = useState(['', '', '', '', '', '', '', '']);

  const getAnimesTopByFavorite = async () => {
    // const response = await dataFetch();
    // SetDataAnime(response.data);
    // setPagination(response.pagination);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);

    const response = JSON.parse(localStorage.getItem('localDataSideCard')) || (await dataFetch());
    SetDataAnime(response.data);
    // setPagination(response.pagination);
    // save data
    setTimeout(() => {
      sessionStorage.setItem('localDataSideCard', JSON.stringify(response));
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    getAnimesTopByFavorite();
  }, []);

  return (
    <>
      <div className="hidden absolute top-0 mx-4 px-4 right-2 w-[330px] h-[95%] overflow-auto flex-col gap-2 lg:flex 2xl:w-[400px] p-3">
        <Title title={title} style="mb-5 text-xl font-bold border-b-4 pb-1 border-[var(--primary)] inline-block text-center" />

        <div className="overflow-auto border-l overflow-x-hidden border-stone-700">
          {isLoading
            ? // data loading
              arrSkeleton.map((data, index) => <SkeletonMostFavorite key={index} />)
            : // data masuk
              dataAnime.map((data, index) => <CardList key={index} data={data} />)}
        </div>

        <Button children="load more" />
      </div>
    </>
  );
};
export default Sidecards;
