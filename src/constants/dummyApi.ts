import {IWeather} from '../appTypes/weather.type';

export const WEATHER_DUMMY: IWeather = {
  coord: {
    lon: 107.6131,
    lat: -6.906,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'Rain clouds',
      icon: '04n',
    },
  ],
  base: 'stations',
  main: {
    temp: 294.53,
    feels_like: 295.1,
    temp_min: 294.53,
    temp_max: 294.53,
    pressure: 1008,
    humidity: 91,
    sea_level: 1008,
    grnd_level: 926,
  },
  visibility: 10000,
  wind: {
    speed: 0.14,
    deg: 324,
    gust: 0.47,
  },
  clouds: {
    all: 97,
  },
  dt: 1671476877,
  sys: {
    country: 'ID',
    sunrise: 1671489073,
    sunset: 1671534156,
  },
  timezone: 25200,
  id: 1650357,
  name: 'Bandung',
  cod: 200,
};
