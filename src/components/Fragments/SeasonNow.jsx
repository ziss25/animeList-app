import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchAnimesSeasonNow } from '../../api/apiMyAnimeList';
import { CustomPagination } from '../../utils/CustomMui';
import Poster from '../Elements/Poster';

const SeasonNow = () => {
  const [data, setData] = useState([]);
  const [Isloading, setIsLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getAnimesSeasonNow = async () => {
    const response = await fetchAnimesSeasonNow(currentPage);
    setTotalPage(response.pagination.last_visible_page);
    setData(response.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handlePageChange = (event, value) => {
    setIsLoading(true);
    setCurrentPage(value);
  };

  useEffect(() => {
    getAnimesSeasonNow();
  }, [currentPage]);

  return (
    <>
      <div className="recomendation-Anime mt-10">
        <h1 className="mb-5 text-xl font-bold border-b-4 pb-1 border-[var(--primary)] inline-block">Season Now</h1>

        {Isloading ? (
          <div className="scale-50 flex justify-center">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 2xl:grid-cols-6">
            {data.map((anime, index) => (
              <div key={index} className="lg:cursor-pointer lg:hover:scale-110 transition-all duration-500">
                <Poster data={anime} />
              </div>
            ))}
          </div>
        )}

        <div className=" flex justify-center mt-3">
          <CustomPagination
            count={totalPage} //
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default SeasonNow;
