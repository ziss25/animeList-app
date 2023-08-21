import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bgHero1 from '../assets/one-piece-bg.jpg';
import bgDemonSLayer from '../assets/demon-slayer.jpg';

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

  const getBgAnimeById = () => {
    if (listID === 21) {
      setBg(bgHero1);
    } else {
      setBg(bgDemonSLayer);
    }
  };

  useEffect(() => {
    getDetailAnimeByID();
    getBgAnimeById();
  }, []);

  return (
    <div className="hero " style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero__layer"></div>
      <div className="hero__context">
        <h1 className="text-4xl font-bold mb-2  2xl:text-6xl 2xl:mb-8">{title}</h1>
        <p className="mb-2 typograpy-oveflow md:text-md 2xl:text-2xl">{synopsis}</p>
        <div className="rating flex gap-5">
          <div className="raring__stars">
            <span className="fa fa-star checked text-[var(--primary)]"></span>
            <span className="fa fa-star checked text-[var(--primary)]"></span>
            <span className="fa fa-star checked text-[var(--primary)]"></span>
            <span className="fa fa-star checked text-[var(--primary)]"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="raring__number mb-3">
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
