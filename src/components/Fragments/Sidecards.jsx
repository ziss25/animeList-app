import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Title from '../Elements/Title';
import CardList from '../Fragments/CardList';
import SkeletonMostFavorite from '../Elements/SkeletonMostFavorite';
import { Context } from '../../context/myContext';

const Sidecards = ({ dataFetch, title }) => {
  const { darkMode } = useContext(Context);
  const [dataAnime, SetDataAnime] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('load more');
  const [arrSkeleton] = useState(['', '', '', '', '', '', '', '']);

  const getAnimesTopByFavorite = async () => {
    const response = await dataFetch(count);
    SetDataAnime([...dataAnime, ...response.data]);
    setText('load more');
    // setPagination(response.pagination);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const handleLoadMore = () => {
    setText('loading...');
    setCount(count + 1);
  };

  useEffect(() => {
    getAnimesTopByFavorite();
    // console.log(count);
    console.log(dataAnime);
  }, [count]);

  return (
    <>
      <div className="hidden absolute top-0  px-4 right-2 w-[330px] h-[90%] overflow-auto flex-col gap-2 lg:flex 2xl:w-[450px] p-3">
        <Title title={title} style="mb-5 text-xl font-bold border-b-4 pb-1 border-[var(--primary)] inline-block text-center" />

        <div
          className={`
          ${darkMode ? 'border-stone-700' : 'border-stone-300'} 
          overflow-auto  border-l pl-5 overflow-x-hidden
          `} //
        >
          {isLoading
            ? // data loading
              arrSkeleton.map((data, index) => <SkeletonMostFavorite key={index} />)
            : // data masuk
              dataAnime.map((data, index) => <CardList key={index} data={data} />)}
          <button className="px-6 py-2 w-full mt-10 font-semibold rounded-md text-sm bg-[var(--primary)] md:text-md md:px-8 2xl:text-lg 2xl:px-10 2xl:py-2 2xl:translate-y-1" onClick={handleLoadMore}>
            {text}
          </button>
        </div>
      </div>
    </>
  );
};
export default Sidecards;
