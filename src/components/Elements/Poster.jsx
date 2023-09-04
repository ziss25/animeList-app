import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/myContext';

const Poster = ({ data, index, rated }) => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [rating, setRating] = useState('');
  const { setScrollPosition } = useContext(Context);

  const navigate = useNavigate();

  const getDataList = () => {
    setTitle(data.title);
    setImg(data.images.jpg.large_image_url);
    setRating(data.score);
  };

  const handleCardClick = () => {
    const id = data.mal_id;
    console.log(id);
    navigate(`/poster/${id}`, { scroll: false });
    setScrollPosition(window.scrollY);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <>
      <div key={index} className="poster  animeRatedList h-max max-w-xs flex flex-col justify-center items-center relative" onClick={handleCardClick}>
        {rated ? (
          <div className="absolute top-0 -left-1 bg-[var(--primary)] px-3 scale-75 py-1 flex items-center rounded-full text-sm gap-2">
            <p className="">{rating}</p>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        ) : null}
        <div className="rounded-md overflow-hidden h-full">
          <img className="object-cover" src={img} alt="" />
        </div>
        <div className="poster__body typograpy-overflow-title p-3 flex items-center justify-center w-full">
          <h1 className="typograpy-overflow-title text-center">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Poster;
