import React from 'react';

const LogoTitle = ({ style }) => {
  return (
    <h1 className={`font-semibold ${style}`}>
      soon<span className="text-[var(--primary)]">Flix</span>
    </h1>
  );
};

export default LogoTitle;
