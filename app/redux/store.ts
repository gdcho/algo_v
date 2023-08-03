// redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './reducers/sortReducer';

export const initializeStore = (preloadedState?: any) => {
  return configureStore({
    reducer: {
      sort: sortReducer,
    },
    preloadedState,
  });
};

const store = initializeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
