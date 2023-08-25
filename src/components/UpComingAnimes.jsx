import React, { useEffect, useState } from 'react';
import { fetchAnimesUpComing } from '../api/apiMyAnimeList';
import Poster from './Poster';
import { Swiper, SwiperSlide } from 'swiper/react';

const UpcomingAnimes = () => {
  const [dataUpComingAnimes, setDataUpComingAnimes] = useState([]);

  const getAnimesUpComing = async () => {
    const response = await fetchAnimesUpComing();
    setDataUpComingAnimes(response.data);
  };

  useEffect(() => {
    getAnimesUpComing();
  }, []);

  return (
    <div className="top-rated-anime mt-5 relative">
      <div className="sliderMarker-container">
        <div className="sliderMarker sliderMarker__right ">
          <i className="fa fa-caret-right text-[var(--primary)]  text-xl" aria-hidden="true"></i>
        </div>
        <div className="sliderMarker sliderMarker__left">
          <i className="fa fa-caret-left text-[var(--primary)]  text-xl" aria-hidden="true"></i>
        </div>
      </div>

      <h1 className="mb-5 text-xl font-bold border-b-4 pb-1 border-[var(--primary)] inline-block">Up Coming</h1>

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
        {dataUpComingAnimes.map((data, index) => (
          <SwiperSlide key={index}>
            <Poster data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default UpcomingAnimes;
