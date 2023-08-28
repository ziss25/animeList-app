import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import HeroListShow from '../Fragments/HeroListShow';
import { dataHeroListID } from '../../data/data';

const Hero = () => {
  const [data, setData] = useState(dataHeroListID);

  return (
    <section className="hero-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className=""
      >
        {data.map((list, index) => (
          <SwiperSlide key={index}>
            <HeroListShow listID={list.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
