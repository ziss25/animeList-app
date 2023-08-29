import React, { useEffect, useState } from 'react';
import Star from '../Elements/Stars';

const CardList = ({ data, isLoading }) => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState([]);
  const [score, setScore] = useState('');

  const handleData = () => {
    setTitle(data.title);
    setImg(data.images.jpg.large_image_url);
    setScore(data.score);
    setGenre(data.genres);
  };

  useEffect(() => {
    handleData();
  });

  return (
    <>
      <div className="card h-max mb-2">
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

{
  /* <Skeleton sx={{ bgcolor: '#aeaeae' }} />
<Skeleton sx={{ bgcolor: '#aeaeae' }} />
<Skeleton width={80} sx={{ bgcolor: '#aeaeae' }} /> */
}
