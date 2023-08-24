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
    <div className="top-rated-anime mt-5 border">
      <h1 className="mb-5 text-xl font-bold">up coming</h1>
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
