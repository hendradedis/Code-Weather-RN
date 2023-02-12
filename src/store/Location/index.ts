import {ILocationApp, ILocationApps} from '../../appTypes/location.type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ILocationApps = {
  loading: false,
  location: {},
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setAppLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setLocationApp(state, action: PayloadAction<ILocationApp>) {
      state.location = action.payload;
    },
  },
});

export const {setAppLoading, setLocationApp} = locationSlice.actions;

export default locationSlice.reducer;
