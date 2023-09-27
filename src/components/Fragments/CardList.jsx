import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/myContext';
import Star from '../Elements/Stars';

const CardList = ({ data }) => {
  const { darkMode } = useContext(Context);
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState([]);
  const [score, setScore] = useState('');

  const navigate = useNavigate();

  const handleData = () => {
    setTitle(data.title);
    setImg(data.images.jpg.large_image_url);
    setScore(data.score);
    setGenre(data.genres);
  };

  const handleCardClick = () => {
    const id = data.mal_id;
    navigate(`/poster/${id}`, { state: { to: 'backToHome' } });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <div className="myCards h-max mb-2" onClick={handleCardClick}>
        <div className="picture overflow-hidden rounded-md">
          <img src={img} />
        </div>
        <div
          className={`${darkMode ? 'text-white' : 'text-black'} 
        flex flex-col justify-evenly flex-wrap`}
        >
          <h3 className="text-base font-bold">{title}</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs`}>
            {genre.map((text, index) => (
              <span className="mr-1" key={index}>
                {text.name},
              </span>
            ))}
          </p>
          <Star stars={score} />
        </div>
      </div>
    </>
  );
};

export default CardList;
