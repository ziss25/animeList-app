import Title from '../components/Elements/Title';
import React, { useEffect, useState } from 'react';
import { fetchAnimesbgFilter } from '../api/apiMyAnimeList';
import ButtonTopITem from '../components/Elements/ButtonTopITem';
import { CircularProgress } from '@mui/material';
import ItemTop from '../components/Elements/ItemTop';
import { CustomPagination } from '../utils/CustomMui';
import { useNavigate } from 'react-router-dom';

const Top = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState('rank'); // default "" as rank
  const [isLoading, setisLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingPagination, setloadingPagination] = useState(true);
  const navigate = useNavigate();

  const getBgFilter = async () => {
    let filters;
    if (filter === 'rank') {
      filters = '';
    } else {
      filters = `?filter=${filter}`;
    }

    // console.log(filters);
    const response = await fetchAnimesbgFilter(filters, currentPage);
    setdata(response.data);
    setTotalPage(response.pagination.last_visible_page);
    setisLoading(false);
    setloadingPagination(false);
  };

  const handleClick = (event, value) => {
    setfilter(event.target.innerText);
    setisLoading(true);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setloadingPagination(true);
    setCurrentPage(value);
    console.log(value);
  };

  useEffect(() => {
    getBgFilter();
  }, [filter, currentPage]);

  return (
    <div className=" mt-16 min-h-screen max-w-3xl mx-auto text-white px-3">
      <section className="button-category-top mt-10 grid grid-cols-2 justify-items-center gap-2 md:gap-5 md:scale-75 ">
        <ButtonTopITem
          bgImages={`bg-[url('https://cdn.myanimelist.net/images/anime/1208/94745l.jpg')]`}
          title="rank" //
          layerColor="bg-red-600"
          handleClick={handleClick}
        />
        <ButtonTopITem
          bgImages={`bg-[url('https://cdn.myanimelist.net/images/anime/6/73245l.jpg')]`}
          title="bypopularity" //
          layerColor="bg-green-600"
          handleClick={handleClick}
        />
        <ButtonTopITem
          bgImages={`bg-[url('https://cdn.myanimelist.net/images/anime/1286/99889l.jpg')]`}
          title="favorite" //
          layerColor="bg-blue-600"
          handleClick={handleClick}
        />
        <ButtonTopITem
          bgImages={`bg-[url('https://cdn.myanimelist.net/images/anime/1171/109222l.jpg')]`}
          title="airing" //
          layerColor="bg-yellow-600"
          handleClick={handleClick}
        />
      </section>

      <section className="mt-5 flex justify-center">
        <Title title={`Top ${filter}`} style={'mb-5 text-xl text-white font-bold border-b-4 pb-1 border-[var(--primary)] inline-block'} />
      </section>

      <section className="relative ">
        {isLoading ? (
          <div className="scale-50 flex top-0 right-0 left-0 bottom-0 absolute justify-center">
            <CircularProgress />
          </div>
        ) : (
          <>
            {loadingPagination ? (
              <div className="relative mb-10 border border-black">
                <div className="scale-50 flex mb-10 top-0 right-0 left-0 bottom-0 absolute justify-center">
                  <CircularProgress />
                </div>
              </div>
            ) : (
              <section className="p-3">
                {data.map((anime, index) => (
                  <div
                    key={index}
                    className="myCardsTop mb-5"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/poster/${anime.mal_id}`, { state: { to: 'backToTop' } });
                    }}
                  >
                    <ItemTop anime={anime} filter={filter} />
                  </div>
                ))}
              </section>
            )}

            <div className=" flex justify-center mt-10">
              <CustomPagination
                count={totalPage} //
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
              />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Top;

// {data.length !== 0 ? (
//
// ) : null}
