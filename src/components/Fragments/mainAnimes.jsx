import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Poster from '../Elements/Poster';
import 'swiper/css/navigation';
import 'swiper/css';
import SliderMarker from '../Elements/SliderMarker';
import Title from '../Elements/Title';
import { Skeleton } from '@mui/material';

const MainAnimes = ({ dataFetch, title, rated }) => {
  const [dataAnime, SetDataAnime] = useState([]);
  const [Isloading, setIsLoading] = useState(true);
  const getAnimesTopRated = async () => {
    const response = await dataFetch();
    SetDataAnime(response.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getAnimesTopRated();
  }, []);

  return (
    <div className="top-rated-anime relative">
      <SliderMarker />
      <Title title={title} style="mb-5 text-xl font-bold border-b-4 pb-1 border-[var(--primary)] inline-block" />
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
        {dataAnime.map((data, index) => (
          <SwiperSlide key={index}>
            <Poster data={data} rated={rated} Isloading={Isloading} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainAnimes;
