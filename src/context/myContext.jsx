import { createContext, useState } from 'react';

const Context = createContext();
const Provider = ({ children }) => {
  const [isOpenMenuList, setIsOpenMenuList] = useState(false);
  return (
    <Context.Provider
      value={{
        isOpenMenuList,
        setIsOpenMenuList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
