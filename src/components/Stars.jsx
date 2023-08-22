import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Star = ({ stars }) => {
  const result = stars / 2;
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return <span key={index}>{result >= index + 1 ? <FaStar className="icon text-[var(--primary)]" /> : result >= number ? <FaStarHalfAlt className="icon text-[var(--primary)]" /> : <AiOutlineStar className="icon" />}</span>;
  });

  return <div className="flex">{ratingStar}</div>;
};

export default Star;
