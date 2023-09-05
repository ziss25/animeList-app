import axios from 'axios';

const maxRetries = 3; // Maximum number of retry attempts
const delayBetweenRetries = 3000; // Delay in milliseconds before retrying (3 seconds)
const baseUrl = 'https://api.jikan.moe/v4';

// promises handle -- limit request
function makeRequestWithRetry(url, maxRetries, delay) {
  return new Promise((resolve, reject) => {
    function makeRequest(attempt) {
      fetch(url)
        .then((response) => {
          if (response.status === 429 && attempt < maxRetries) {
            console.log(`Received 429, retrying in ${delay / 1000} seconds...`);
            setTimeout(() => makeRequest(attempt + 1), delay);
          } else if (response.ok) {
            // console.log('ok');
            resolve(response);
          } else {
            reject(new Error(`Request failed with status: ${response.status}`));
          }
          return response;
        })
        .catch((error) => reject(error));
    }

    makeRequest(0);
  });
}

const fetchAnimesById = (id) => {
  return makeRequestWithRetry(`${baseUrl}/anime/${id}`, maxRetries, delayBetweenRetries)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => erorr);
  // https://api.jikan.moe/v4/anime/{id}
};

const fetchAnimesTopRated = () => {
  return makeRequestWithRetry(`${baseUrl}/top/anime`, maxRetries, delayBetweenRetries)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

const fetchAnimesUpComing = async () => {
  return makeRequestWithRetry(`${baseUrl}/seasons/upcoming?sfw=true`, maxRetries, delayBetweenRetries)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

const fetchAnimesSeasonNow = async (number) => {
  return makeRequestWithRetry(`https://api.jikan.moe/v4/seasons/now?page=${number}&sfw=true&filter=tv`, maxRetries, delayBetweenRetries)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

const fetchAnimesTopByFavorite = async (number) => {
  return makeRequestWithRetry(`${baseUrl}/top/anime?filter=favorite&page=${number}`, maxRetries, delayBetweenRetries)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

const fetchAnimesPicturesById = async (id) => {
  return makeRequestWithRetry(`${baseUrl}/anime/${id}/pictures`, maxRetries, delayBetweenRetries)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

const fetchAnimesSearch = async (query, type) => {
  if (type === 'all' || type === '') {
    return makeRequestWithRetry(`${baseUrl}/anime?q=${query}&sfw=true`, maxRetries, delayBetweenRetries)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  } else {
    return makeRequestWithRetry(`${baseUrl}/anime?q=${query}&sfw=true&type=${type}`, maxRetries, delayBetweenRetries)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  }
};

export { fetchAnimesTopRated, fetchAnimesUpComing, fetchAnimesSeasonNow, fetchAnimesById, fetchAnimesTopByFavorite, fetchAnimesPicturesById, fetchAnimesSearch };

// kalo ada pesan ini .... walapaun erorr tapi ia reject dan request lagi
// Failed to load resource: the server responded with a status of 429 (Too Many Requests)
