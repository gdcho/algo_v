// redux/reducers/sortReducer.tsx

import { SELECT_SORT_ALGORITHM, SORT_ARRAY } from '../actions'; 

type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  sortAlgorithm: null,
  array: [],
  sortedArray: [],
  isRunning: false,
  animations: [],  
};

export const setAnimations = (animations: any[]) => ({
  type: 'SET_ANIMATIONS',
  payload: animations,
});

export const setIsRunning = (isRunning: boolean) => ({
  type: 'SET_IS_RUNNING',
  payload: isRunning,
});

const sortReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SELECT_SORT_ALGORITHM:
      return {
        ...state,
        sortAlgorithm: action.payload,
      };
    case SORT_ARRAY:
      return {
        ...state,
        array: action.payload,
      };
    case 'SET_ANIMATIONS':
      return {
        ...state,
        animations: action.payload,
      };
    default:
      return state;
  }
};

export default sortReducer;
