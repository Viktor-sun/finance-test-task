import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tickersReducer from './tickers/tickers-reducer';

const tickersOffPersistConfig = {
  key: 'tickersOff',
  storage,
  whitelist: ['fetchedTickersOff'],
};

const persistedReducer = persistReducer(
  tickersOffPersistConfig,
  tickersReducer,
);

const store = configureStore({
  reducer: {
    tickers: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
