import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { bgOnePiece, bgDemonSLayer, bgNaruto, bgJujutsu, bgChainsawMan } from '../assets/index-img';
import Star from './Stars';

const HeroListShow = ({ listID }) => {
  const [title, setTitle] = useState('');
  const [score, setScore] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [bg, setBg] = useState('');

  const getDetailAnimeByID = async () => {
    const data = await axios.get(`https://api.jikan.moe/v4/anime/${listID}`);
    setTitle(data.data.data.title);
    setScore(data.data.data.score);
    setSynopsis(data.data.data.synopsis);
  };

  //  validate dan mengambil background sesuai dengan id bg nya
  const getBgAnimeById = () => {
    switch (listID) {
      case 21:
        setBg(bgOnePiece);
        break;
      case 1735:
        setBg(bgNaruto);
        break;
      case 40748:
        setBg(bgJujutsu);
        break;
      case 38000:
        setBg(bgDemonSLayer);
        break;
      case 44511:
        setBg(bgChainsawMan);
        break;
    }
  };

  useEffect(() => {
    getDetailAnimeByID();
    getBgAnimeById();
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero__layer--full"></div>
      <div className="hero__layer--bottomToTop"></div>
      <div className="hero__context z-50">
        <h1 className="text-4xl font-bold mb-2  2xl:text-6xl 2xl:mb-8">{title}</h1>
        <p className="mb-2 typograpy-oveflow md:text-md 2xl:text-2xl">{synopsis}</p>
        <div className="rating flex gap-5 items-center my-3 2xl:text-2xl">
          <Star stars={score} />
          <div className="raring__number ">
            <span>{score}</span>
            <span className="mx-2">/</span>
            <span>10</span>
          </div>
        </div>
        <button className="px-6 py-2 font-semibold rounded-sm text-sm bg-[var(--primary)] md:text-md md:px-10 2xl:text-lg 2xl:px-14 2xl:py-2 2xl:translate-y-1">detail</button>
      </div>
    </div>
  );
};

export default HeroListShow;
