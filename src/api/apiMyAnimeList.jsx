import axios from 'axios';

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

const maxRetries = 3; // Maximum number of retry attempts
const delayBetweenRetries = 3000; // Delay in milliseconds before retrying (3 seconds)
const baseUrl = 'https://api.jikan.moe/v4';

const fetchAnimesTopRated = (query) => {
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

const fetchAnimesSeasonNow = async () => {
  return makeRequestWithRetry(`${baseUrl}/seasons/now`, maxRetries, delayBetweenRetries)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

export { fetchAnimesTopRated, fetchAnimesUpComing, fetchAnimesSeasonNow };
