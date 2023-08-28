import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      className="px-6 py-1 font-semibold rounded-md text-sm bg-[var(--primary)] md:text-md md:px-8 2xl:text-lg 2xl:px-10 2xl:py-2 2xl:translate-y-1"
      onClick={() => {
        alert('maaf masih tahap pengembangan');
      }}
    >
      {children}
    </button>
  );
};

export default Button;
