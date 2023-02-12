import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IWeather, IWeatherApp} from '../../appTypes/weather.type';

const defaultObject: IWeather = {
  coord: {lon: 0, lat: 0},
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'Rain clouds',
      icon: '04n',
    },
  ],
  base: '',
  main: {
    temp: 0,
    feels_like: 298.9,
    temp_min: 298.9,
    temp_max: 298.9,
    pressure: 10,
    humidity: 90,
    sea_level: 10001,
    grnd_level: 10001,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  clouds: {all: 0},
  dt: 0,
  sys: {
    country: 'ID',
    sunrise: 1671489073,
    sunset: 1671489073,
  },
  timezone: 25200,
  id: 0,
  name: '',
  cod: 0,
};

const initialState: IWeatherApp = {
  dataWeatherLonglan: defaultObject,
  dataWeatherCities: defaultObject,
};

const weatherSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setDataWeatherLonglan(state, action: PayloadAction<IWeather>) {
      state.dataWeatherLonglan = action.payload;
    },
    setDataWeatherCities(state, action: PayloadAction<IWeather>) {
      state.dataWeatherCities = action.payload;
    },
  },
});

export const {setDataWeatherLonglan, setDataWeatherCities} =
  weatherSlice.actions;

export default weatherSlice.reducer;
