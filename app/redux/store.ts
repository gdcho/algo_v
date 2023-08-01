// redux/store.ts
import { createStore, combineReducers } from 'redux';
import sortReducer from './reducers/sortReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
