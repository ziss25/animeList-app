import { createContext, useEffect, useState } from 'react';

const Context = createContext();
const Provider = ({ children }) => {
  const [isOpenMenuList, setIsOpenMenuList] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  // as inputUser search
  const [querySearch, setQuerySearch] = useState('');
  // as page season
  const [years, setYears] = useState('2023');
  const [season, setSeason] = useState('fall');
  const [token, setToken] = useState('');

  return (
    <Context.Provider
      value={{
        isOpenMenuList,
        setIsOpenMenuList,
        scrollPosition,
        setScrollPosition,
        querySearch,
        setQuerySearch,
        years,
        setYears,
        season,
        setSeason,
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
