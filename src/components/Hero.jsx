import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import HeroListShow from './HeroListShow';
import { dataHeroListID } from '../data/data';

const Hero = () => {
  const [data, setData] = useState(dataHeroListID);

  return (
    <section className="">
      <Swiper spaceBetween={0} slidesPerView={1}>
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
