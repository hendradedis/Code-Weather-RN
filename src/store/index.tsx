import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';

import locationReducer from './Location';
import weatherReducer from './Weather';

const reducers = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['location, weather'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return middlewares;
  },
});

const persistor = persistStore(store);
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export {store, persistor, persistReducer};
