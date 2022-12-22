import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IWeather, IWeatherApp} from '../../appTypes/weather.type';

const initialState: IWeatherApp = {
  dataWeatherLonglan: undefined,
  dataWeatherCities: undefined,
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
