import axios from 'axios';
const baseUrl = 'https://api.jikan.moe/v4';

const fetchAnimesTopRated = async (query) => {
  const { data } = await axios.get(baseUrl + '/top/anime');
  return data.data;
};

const fetchAnimesUpComing = async (query) => {
  const { data } = await axios.get(baseUrl + '/seasons/upcoming?sfw=true');
  return data.data;
};

const fetchAnimesSeasonNow = async (query) => {
  const { data } = await axios.get(baseUrl + '/seasons/now');
  return data.data;
};

export { fetchAnimesTopRated, fetchAnimesUpComing, fetchAnimesSeasonNow };
