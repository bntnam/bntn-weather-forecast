import { useRef, useState } from 'react';

import { getLocationInfo, getWeatherInfo } from '../api/WeatherApi';
import { setLoading } from '../context/app';
import { validate } from '../shared';
import { useAppContext } from './useAppContext';

export const useWeatherSearch = () => {
  const inputRef = useRef();
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState();
  const { dispatch } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    const error = validate(query);
    !error && onSubmit(query);
    setError(error);
    setShowResults(true);
    setSearchResults([]);
  };

  const onSubmit = async (query) => {
    setLoading(dispatch, true);

    try {
      const location = await getLocationInfo(query);
      const weather = await getWeatherInfo(location?.data[0]?.woeid);
      setCityName(location?.data[0]?.title);
      setSearchResults(weather?.data.consolidated_weather);
      inputRef.current.value = '';
    } catch {
      console.log('City is not found');
    } finally {
      setLoading(dispatch, false);
    }
  };

  return {
    inputRef,
    handleSearch,
    searchResults,
    error,
    showResults,
    cityName,
  };
};
