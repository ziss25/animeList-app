import React, { useState } from 'react';
import bgHero1 from '../assets/one-piece-bg.jpg';
import bgHero2 from '../assets/one-piece-bg2.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgHero2})` }}>
      <div className="hero__layer"></div>
      <div className="hero__context">
        <h1 className="text-2xl text-[var(--primary)] font-bold mb-2 md:text-3xl">Unlimited Exploration into the World of Animation!</h1>
        <p className="mb-5 text-sm md:text-md">
          We invite you to go deeper into the world of anime filled with color and magic. Come on, start your journey on [...] today and discover the magic that can only be found in anime imaginations.
        </p>
        <button className="bg-[var(--primary)] px-5 py-2 rounded-md md:px-8">subscribe</button>
      </div>
    </section>
  );
};

export default Hero;
