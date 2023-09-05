import { createContext, useEffect, useState } from 'react';

const Context = createContext();
const Provider = ({ children }) => {
  const [isOpenMenuList, setIsOpenMenuList] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  // as inputUser search
  const [querySearch, setQuerySearch] = useState('');
  return (
    <Context.Provider
      value={{
        isOpenMenuList,
        setIsOpenMenuList,
        scrollPosition,
        setScrollPosition,
        querySearch,
        setQuerySearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
