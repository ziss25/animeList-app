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
  const [IsLoginPage, setLoginPage] = useState(false);
  const [openProfilePopUp, setOpenProfilePopUp] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [statusLogin, setStatusLogin] = useState(false);
  // as light mode
  const [darkMode, setDarkMode] = useState(true);

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
        IsLoginPage,
        setLoginPage,
        openProfilePopUp,
        setOpenProfilePopUp,
        isOpenProfile,
        setIsOpenProfile,
        statusLogin,
        setStatusLogin,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
