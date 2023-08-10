import { combineReducers } from '@reduxjs/toolkit';
import { arrayReducer } from '../redux/reducers/arrayReducer';
import { algorithmReducer } from '../redux/reducers/algorithmReducer';
import { statusReducer } from '../redux/reducers/statusReducer';
import { settingsReducer } from '../redux/reducers/settingsReducer';

const rootReducer = combineReducers({
  array: arrayReducer,
  algorithm: algorithmReducer,
  status: statusReducer,
  settings: settingsReducer,
});

export default rootReducer;
