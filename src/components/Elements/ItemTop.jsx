import React from 'react';
import Star from './Stars';
import medalBronze from '../../assets/svg/medalBronze.svg';
import medalGold from '../../assets/svg/medalGold.svg';
import medalSilver from '../../assets/svg/medalSilver.svg';

const ItemTop = ({ anime, filter, index, currentPage }) => {
  return (
    <>
      {/* rank medal */}
      {filter === 'rank' && (
        <div className="absolute -top-1 -left-4 z-10">
          {anime.rank == 1 && <img src={medalGold} width={40} />}
          {anime.rank == 2 && <img src={medalSilver} width={40} />}
          {anime.rank == 3 && <img src={medalBronze} width={40} />}
        </div>
      )}

      {/* bypopularity medal */}
      {filter === 'bypopularity' && (
        <div className="absolute -top-1 -left-4 z-10">
          {anime.popularity == 1 && <img src={medalGold} width={40} />}
          {anime.popularity == 2 && <img src={medalSilver} width={40} />}
          {anime.popularity == 3 && <img src={medalBronze} width={40} />}
        </div>
      )}

      {/* favorite medal */}
      {filter === 'favorite' && currentPage === 1 ? (
        <div className="absolute -top-1 -left-4 z-10">
          {index == 0 && <img src={medalGold} width={40} />}
          {index == 1 && <img src={medalSilver} width={40} />}
          {index == 2 && <img src={medalBronze} width={40} />}
        </div>
      ) : null}

      <img src={anime.images.jpg.large_image_url} alt="" />

      <div>
        {filter === 'rank' && (
          <h1 className="text-xs font-bold">
            rank:<span className="text-[var(--primary)] ml-1">#{anime.rank}</span>
          </h1>
        )}
        {filter === 'bypopularity' && (
          <h1 className="text-xs font-bold">
            popularity:<span className="text-[var(--primary)] ml-1">#{anime.popularity}</span>
          </h1>
        )}
        {filter === 'favorite' && (
          <h1 className="text-xs font-bold">
            favorite: <span className="text-[var(--primary)] ml-1">{anime.favorites}</span>
          </h1>
        )}

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
