import { Autocomplete, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { CustomTextField } from '../utils/CustomMui';
import { fetchAnimesSearch } from '../api/apiMyAnimeList';
import Poster from '../components/Elements/Poster';

const Search = () => {
  const [dataResult, setDataResult] = useState([]);
  const [querySearch, setQuerySearch] = useState('');
  const [type, setType] = useState('');

  const typeCategory = [{ label: 'all' }, { label: 'tv' }, { label: 'movie' }, { label: 'special' }, { label: 'ona' }, { label: 'ova' }];

  const getAnimesSearch = async () => {
    const response = await fetchAnimesSearch(querySearch, type);
    console.log({ querySearch, type });
    setDataResult(response.data ?? []);
  };

  // mengambil value berdasarkan kita click item di option nya
  const handleOptionClick = (event, value) => {
    setQuerySearch(value);
    getAnimesSearch();
    console.log(value);
  };

  const handleTypeClick = (event, value) => {
    setType(value.label);
  };

  // value dari inpur user
  const handleInputUser = (e) => {
    setQuerySearch(e.target.value);
  };

  useEffect(() => {
    getAnimesSearch();
  }, [querySearch, type]);

  return (
    <div className="mt-16 min-h-screen bg-black max-w-4xl mx-auto px-5">
      <div className="search-group md:flex justify-between">
        <div className="search w-full  md:w-4/6 ">
          <Stack spacing={2}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              onChange={handleOptionClick}
              disableClearable
              options={dataResult.map((option, index) => option.title)}
              renderInput={(params) => (
                <CustomTextField
                  {...params}
                  label="search soonFlix"
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
        <div className="type w-full md:w-2/6 text-white scale-75 z-[9999] bg-white">
          <Autocomplete
            disableClearable
            onChange={handleTypeClick}
            id="combo-box-demo"
            options={typeCategory}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            renderInput={(params) => <TextField {...params} label="type" />}
          />
        </div>
      </div>

      {/* container cards poster search */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 2xl:grid-cols-6 mt-10 text-white relative z-10">
        {dataResult.map((anime, index) => (
          <div key={index} className="lg:cursor-pointer lg:hover:scale-110 transition-all duration-500">
            <div className="poster text-white animeRatedList h-max max-w-xs flex flex-col justify-center items-center relative">
              <div className="rounded-md overflow-hidden h-full">
                <img className="object-cover" src={anime.images.jpg.large_image_url} alt="" />
              </div>
              <div className="poster__body typograpy-overflow-title p-3 flex items-center justify-center w-full">
                {anime.title === querySearch ? <h1 className="typograpy-overflow-title text-center text-[var(--primary)]">{anime.title}</h1> : <h1 className="typograpy-overflow-title text-center">{anime.title}</h1>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
