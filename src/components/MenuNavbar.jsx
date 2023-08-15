import React from 'react';

const MenuNavbar = ({ isOpenMenuList, setIsOpenMenuList }) => {
  const handleMenuList = () => {
    setIsOpenMenuList(false);
  };

  return (
    <>
      {isOpenMenuList ? (
        <div className="md:hidden fixed z-50 bg-gray-800 w-4/6 top-0 left-0 bottom-0 text-white">
          <h1 className="text-3xl text-center my-8">
            Soon<span className="text-[var(--primary)]">flix</span>
          </h1>
          <div className="Menu px-6">
            <h3 className="text-xl mb-3">Menu</h3>
            <div className=" px-5 flex flex-col gap-3">
              <div className="p-2 flex gap-5 items-center rounded-md overflow-hidden hover:bg-[var(--primary)]">
                <i className="fa fa-home text-xl" aria-hidden="true"></i>
                <h5>Home</h5>
              </div>
              <div className="p-2 flex gap-5 items-center rounded-md overflow-hidden hover:bg-[var(--primary)]">
                <i className="fa fa-fire" aria-hidden="true"></i>
                <h5>Popular</h5>
              </div>
              <div className="p-2 flex gap-5 items-center rounded-md overflow-hidden hover:bg-[var(--primary)]">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <h5>UpComing</h5>
              </div>
              <div className="p-2 flex gap-5 items-center rounded-md overflow-hidden hover:bg-[var(--primary)]">
                <i className="fa fa-search" aria-hidden="true"></i>
                <h5>Search</h5>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isOpenMenuList ? (
        <button className="md:hidden  menuNavbar__Layer fixed bg-black top-0 right-0 left-0 bottom-0 z-40 opacity-50" onClick={handleMenuList}>
          ada
        </button>
      ) : null}
    </>
  );
};

export default MenuNavbar;
