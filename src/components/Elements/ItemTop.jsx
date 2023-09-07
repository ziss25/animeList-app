import React from 'react';
import Star from './Stars';

const ItemTop = ({ anime, filter }) => {
  return (
    <>
      <img src={anime.images.jpg.large_image_url} alt="" />
      <div>
        {filter === 'rank' ? (
          <h1 className="text-xs font-bold">
            rank:<span className="text-[var(--primary)] ml-1">#{anime.rank}</span>
          </h1>
        ) : null}
        {filter === 'bypopularity' ? (
          <h1 className="text-xs font-bold">
            popularity:<span className="text-[var(--primary)] ml-1">#{anime.popularity}</span>
          </h1>
        ) : null}
        {filter === 'favorite' ? (
          <h1 className="text-xs font-bold">
            favorite: <span className="text-[var(--primary)] ml-1">{anime.favorites}</span>
          </h1>
        ) : null}
        <h1 className="typograpy-overflow-title text-lg mt-2 mb-2">{anime.title}</h1>
        <p className="typograpy-overflow-title text-xs">{anime.synopsis}</p>
        <div className="flex gap-3 items-center mt-2">
          <Star stars={anime.score} />
          <span className="text-xs">{anime.score} / 10</span>
        </div>
      </div>
    </>
  );
};

export default ItemTop;
