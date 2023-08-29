import React from 'react';

const StarsLogo = ({ rating }) => {
  return (
    <div className="absolute top-1 -left-1 bg-[var(--primary)] px-3 scale-75 py-1 flex items-center rounded-xl text-sm gap-2">
      {rating ? (
        <>
          <p className="">{rating}</p>
          <i className="fa fa-star" aria-hidden="true"></i>
        </>
      ) : (
        <>
          <p className="">{'-'}</p>
          <i className="fa fa-star" aria-hidden="true"></i>
        </>
      )}
    </div>
  );
};

export default StarsLogo;
