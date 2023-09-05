import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Star from '../Elements/Stars';

const CardList = ({ data }) => {
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
        <div className="flex flex-col justify-evenly flex-wrap">
          <h3 className="text-base font-bold">{title}</h3>
          <p className="text-xs text-gray-300">
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
