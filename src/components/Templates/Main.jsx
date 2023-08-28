import React from 'react';
import { fetchAnimesTopRated, fetchAnimesUpComing, fetchAnimesTopByFavorite } from '../../api/apiMyAnimeList';
import MainAnimes from '../Fragments/mainAnimes';
import SeasonNow from '../Fragments/SeasonNow';
import SideCards from './sideCards';

const Main = () => {
  return (
    <main className="p-5 text-white md:p-10 lg:relative">
      <div className="relative lg:pr-[375px] 2xl:pr-[500px]">
        <MainAnimes dataFetch={fetchAnimesTopRated} title="Top Rated" rated={true} />
        <MainAnimes dataFetch={fetchAnimesUpComing} title="Up Coming" />
        <SideCards dataFetch={fetchAnimesTopByFavorite} title="Most Favorite" />
      </div>
      <SeasonNow />
    </main>
  );
};

export default Main;
