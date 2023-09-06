import { Autocomplete } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { CustomTextField } from '../utils/CustomMui';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/myContext';
import axios from 'axios';

const Search = () => {
  const [dataResult, setDataResult] = useState([]);
  const [type, setType] = useState('');
  const { querySearch, setQuerySearch } = useContext(Context);
  const navigate = useNavigate();

  let searchTimer; // Timer untuk penundaan
  const typeCategory = [{ label: 'all' }, { label: 'tv' }, { label: 'movie' }, { label: 'special' }, { label: 'ona' }, { label: 'ova' }];

  const getAnimesSearch = () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(async () => {
      try {
        const response = await axios(`https://api.jikan.moe/v4/anime?q=${querySearch}&sfw=true${type}`);
        setDataResult(response.data.data);
      } catch (error) {
        clearTimeout(searchTimer);
      }
    }, 1000);
  };

  getAnimesSearch();

  // mengambil value berdasarkan kita click item di option nya
  const handleOptionClick = (event, value) => {
    setQuerySearch(value);
  };

  const handleTypeClick = (event, value) => {
    if (event.target.value === 'all') {
      setType('');
    } else {
      setType(`&type=${event.target.value}`);
    }
  };

  // value dari inpur user
  const handleInputUser = (e) => {
    setQuerySearch(e.target.value);
  };

  useEffect(() => {
    getAnimesSearch();
    console.log(type);
  }, [querySearch, type]);

  return (
    <div className="mt-20 md:mt-24 min-h-screen bg-black max-w-xl lg:max-w-4xl mx-auto px-5">
      <div className="search-group md:flex justify-between">
        <div className="search w-full md:w-8/12 ">
          <Stack spacing={2}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              onChange={handleOptionClick}
              disableClearable
              options={dataResult.map((option, index) => option.title)}
              sx={{
                border: '1px solid #3f3f46',
                padding: '1px',
              }}
              renderInput={(params) => (
                <CustomTextField
                  {...params}
                  label="search soonFlix"
                  placeholder={querySearch}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                  onChange={handleInputUser}
                />
              )}
            />
          </Stack>
        </div>
        <div className="w-full md:w-3/12 mt-5 md:mt-0">
          <select className="select  w-full h-full" onChange={handleTypeClick}>
            {typeCategory.map((type, index) => (
              <option>{type.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* container cards poster search */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 2xl:grid-cols-6 mt-10 text-white relative z-10">
        {dataResult.map((anime, index) => (
          <div
            key={index}
            className="lg:cursor-pointer lg:hover:scale-110 transition-all duration-500"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/poster/${anime.mal_id}`, { state: { to: 'backToSearch' } });
            }}
          >
            <div className="poster text-white animeRatedList h-max max-w-xs flex flex-col justify-center items-center relative">
              {anime.title === querySearch ? (
                // if sesuai dengan option border red
                <div className="rounded-md overflow-hidden h-full border-4 border-red-800">
                  <img className="object-cover" src={anime.images.jpg.large_image_url} alt="" />
                </div>
              ) : (
                // if tidak sesuai dengan option border white
                <div className="rounded-md overflow-hidden h-full">
                  <img className="object-cover" src={anime.images.jpg.large_image_url} alt="" />
                </div>
              )}
              <div className="poster__body typograpy-overflow-title p-3 flex items-center justify-center w-full">
                {anime.title === querySearch ? (
                  // if sesuai dengan option text red
                  <h1 className="typograpy-overflow-title text-center text-[var(--primary)] font-extrabold">{anime.title}</h1>
                ) : (
                  // if tidak sesuai dengan option text white
                  <h1 className="typograpy-overflow-title text-center">{anime.title}</h1>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
