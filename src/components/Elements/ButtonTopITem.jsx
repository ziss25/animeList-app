import React from 'react';

const ButtonTopITem = ({ bgImages, title, layerColor, handleClick }) => {
  return (
    <div
      className={`text-white flex relative z-0  w-full justify-center items-center h-12 md:h-16 lg:h-20 rounded-md overflow-hidden bg-cover bg-center ${bgImages} hover:scale-110 transition transition duration-300 cursor-pointer`}
      onClick={handleClick}
      defaultValue="value"
    >
      <div className={`layer absolute top-0 left-0 right-0 bottom-0 opacity-50 ${layerColor}`}></div>
      <div className="text-white flex justify-center items-center absolute w-full h-full z-30 lg:text-2xl font-bold">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default ButtonTopITem;
