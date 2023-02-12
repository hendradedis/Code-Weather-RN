import {APIClient} from '../../../utils/api';
import {useQuery} from 'react-query';
import {LONGTITUDE_API} from '../../../constants/reactQuery';
import {KEY_API} from '../../../utils/api/keyApiWeather';
import {IWeather} from '../../../appTypes/weather.type';

interface IOptions {
  enabled: boolean;
}

export const fetchWeatherLontitude = async (
  latitude: number,
  longtitude: number,
): Promise<Array<IWeather>> => {
  try {
    const response: any = await APIClient.get(
      `data/2.5/weather?lat=${latitude}&lon=${longtitude}&cnt=1&appid=${KEY_API}`,
    );
    return response;
  } catch (err: any) {
    console.error(
      'data/2.5/weather?fetchWeatherLontitude',
      'fetchWeatherLontitude',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchWeatherLontitude = (
  latitude: number,
  longtitude: number,
  options: IOptions = {enabled: true},
) => {
  return useQuery<Array<IWeather>, Error>(
    LONGTITUDE_API,
    async () => {
      const response = await fetchWeatherLontitude(latitude, longtitude);
      if (!response) {
        throw new Error('fetchWeatherLontitude failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchWeatherLontitude;
