import axios from 'axios';

export const getLocationInfo = (query) => {
  return axios.get(`/api/location/search/?query=${query}`);
};

export const getWeatherInfo = (woeid) => {
  return axios.get(`/api/location/${woeid}/`);
};
