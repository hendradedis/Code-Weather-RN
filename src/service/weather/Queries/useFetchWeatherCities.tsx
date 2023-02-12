import {APIClient} from '../../../utils/api';
import {useQuery} from 'react-query';
import {CITIES_API} from '../../../constants/reactQuery';
import {KEY_API} from '../../../utils/api/keyApiWeather';
import {IWeather} from '../../../appTypes/weather.type';

interface IOptions {
  enabled: boolean;
}

export const fetchWeatherCities = async (cities: string): Promise<IWeather> => {
  try {
    const response: any = await APIClient.get(
      `data/2.5/weather?q=${cities}&appid=${KEY_API}`,
    );
    return response;
  } catch (err: any) {
    console.error(
      'data/2.5/weather?fetchWeatherCities',
      'fetchWeatherCitiesku',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchWeatherCities = (
  cities: string,
  options: IOptions = {enabled: true},
) => {
  return useQuery<IWeather, Error>(
    CITIES_API,
    async () => {
      const response = await fetchWeatherCities(cities);
      if (!response) {
        throw new Error('fetchWeatherCities failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchWeatherCities;
