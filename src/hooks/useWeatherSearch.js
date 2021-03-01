import { useRef, useState } from 'react';

import { getLocationInfo, getWeatherInfo } from '../api/WeatherApi';
import { validate } from '../shared';

export const useWeatherSearch = () => {
  const inputRef = useRef();
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState();

  const handleSearch = () => {
    const query = inputRef.current.value;
    const error = validate(query);
    setError(error);
    !error && onSubmit(query);
    setSearchResults([]);
  };

  const onSubmit = async (query) => {
    try {
      const location = await getLocationInfo(query);
      const weather = await getWeatherInfo(location?.data[0]?.woeid);
      setSearchResults(weather.data.consolidated_weather);
    } catch {
      console.log('City is not found');
    }
  };

  return {
    inputRef,
    handleSearch,
    searchResults,
    error,
  };
};
