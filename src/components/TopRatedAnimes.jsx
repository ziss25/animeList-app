import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import { fetchAnimesTopRated } from '../api/apiMyAnimeList';
import Poster from './Poster';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const TopRatedAnimes = () => {
  const baseUrl = 'https://api.jikan.moe/v4';
  const [dataAnimeTopRanked, SetdataAnimeTopRanked] = useState([]);

  const fetchAnimesTopRated = async (query) => {
    const { data } = await axios.get(baseUrl + '/top/anime');
    SetdataAnimeTopRanked(data.data);
  };

  useEffect(() => {
    fetchAnimesTopRated();
    console.log(dataAnimeTopRanked);
  }, []);

  return (
    <div className="top-rated-anime">
      <h1 className="mb-5 text-xl font-bold">Top Rated</h1>
      <Swiper
        slidesPerView={5}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        spaceBetween={10}
        className=""
      >
        {dataAnimeTopRanked.map((data, index) => (
          <SwiperSlide key={index}>
            <Poster data={data} rated={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedAnimes;
