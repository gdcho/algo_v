// app/redux/store.ts
import { configureStore, EnhancedStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import sortReducer from './reducers/sortReducer';

let store: EnhancedStore | undefined;

const reducers = {
  sort: sortReducer,
};

function initStore(initialState: any) {
  return configureStore({
    reducer: reducers,
    preloadedState: initialState,
  });
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

// Define RootState type
export type RootState = StateFromReducersMapObject<typeof reducers>;
