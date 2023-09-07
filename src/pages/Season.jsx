import React, { useEffect } from 'react';
import Title from '../components/Elements/Title';
import { fetchAnimesSeasonsList, fetchAnimesSeasons } from '../api/apiMyAnimeList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/myContext';
import { CustomPagination } from '../utils/CustomMui';
import { CircularProgress } from '@mui/material';

const Season = () => {
  const [seasonList, setSeasonList] = useState([]);
  const { years, setYears, season, setSeason } = useContext(Context);
  const [data, setData] = useState([]);
  const [loadingPagination, setloadingPagination] = useState(true);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const getAnimesSeasonsList = async () => {
    const response = await fetchAnimesSeasonsList();
    setSeasonList(response.data);
  };

  const getAnimesSeasons = async () => {
    const response = await fetchAnimesSeasons(years, season, currentPage);
    setData(response.data);
    setTotalPage(response.pagination.last_visible_page);
    setloadingPagination(false);
    setLoading(false);
  };

  const handleSeasonListYear = (event) => {
    setYears(event.target.value);
    setLoading(true);
    setCurrentPage(1);
  };

  const handleSeasonListSeason = (event) => {
    setSeason(event.target.value);
    setLoading(true);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setloadingPagination(true);
    setCurrentPage(value);
  };

  useEffect(() => {
    getAnimesSeasonsList();
    getAnimesSeasons();
  }, [years, season, currentPage]);

  return (
    <div className="min-h-screen mt-16 px-5 max-w-3xl  mx-auto">
      <Title title="season" style={'mb-5 text-xl text-white font-bold border-b-4 pb-1 border-[var(--primary)] inline-block'} />
      <div className="grop-category flex gap-5  justify-between">
        <select className="select select-bordered select w-full max-w-xs" onChange={handleSeasonListSeason}>
          <option disabled selected>
            {season}
          </option>
          <option>winter</option>
          <option>spring</option>
          <option>summer</option>
          <option>fall</option>
        </select>

        <select className="select select-bordered select w-full max-w-xs" onChange={handleSeasonListYear}>
          <option disabled selected>
            {years}
          </option>
          {seasonList.map((year, index) => (
            <option key={index}>{year.year}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center mt-20 md:mt-32 scale-75">
          <CircularProgress />
        </div>
      ) : (
        <>
          <section className="grid relative grid-cols-2 gap-5 mt-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
            {loadingPagination ? (
              <div className="scale-50 flex  top-0 right-0 left-0 bottom-0 absolute justify-center">
                <CircularProgress />
              </div>
            ) : (
              data.map((anime, index) => (
                <div
                  key={index}
                  className="lg:cursor-pointer lg:hover:scale-110 transition-all duration-500"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/poster/${anime.mal_id}`, { state: { to: 'backToSeason' } });
                  }}
                >
                  <div className="poster text-white animeRatedList h-max max-w-xs flex flex-col justify-center items-center relative">
                    <div className="rounded-md overflow-hidden h-full">
                      <img className="object-cover" src={anime.images.jpg.large_image_url} alt="" />
                    </div>
                    <div className="poster__body typograpy-overflow-title p-3 flex items-center justify-center w-full">
                      <h1 className="typograpy-overflow-title text-center font-extrabold">{anime.title}</h1>
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>

          {data.length !== 0 ? (
            <div className=" flex justify-center mt-10">
              <CustomPagination
                count={totalPage} //
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
              />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Season;
