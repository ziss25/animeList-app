import React, { useEffect, useState } from 'react';
import { fetchAnimesTopRated } from '../api/apiMyAnimeList';
import Poster from './Poster';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const TopRatedAnimes = () => {
  const [dataAnimeTopRanked, SetdataAnimeTopRanked] = useState([]);

  const getAnimesTopRated = async () => {
    const response = await fetchAnimesTopRated();
    SetdataAnimeTopRanked(response.data);
  };

  useEffect(() => {
    getAnimesTopRated();
    console.log(dataAnimeTopRanked);
  }, []);

  return (
    <div className="top-rated-anime relative">
      <div className="sliderMarker-container">
        <div className="sliderMarker sliderMarker__right ">
          <i className="fa fa-caret-right text-[var(--primary)]  text-xl" aria-hidden="true"></i>
        </div>
        <div className="sliderMarker sliderMarker__left">
          <i className="fa fa-caret-left text-[var(--primary)]  text-xl" aria-hidden="true"></i>
        </div>
      </div>

      <h1 className="mb-5 text-xl font-bold border-b-4 pb-1 border-[var(--primary)] inline-block">Top Rated</h1>

      <Swiper
        slidesPerView={5}
        breakpoints={{
          '@0.00': {
            slidesPerView: 3,
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
