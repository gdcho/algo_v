// redux/reducers/sortReducer.tsx

import { SELECT_SORT_ALGORITHM, SORT_ARRAY } from '../actions'; 

const generateRandomArray = (length: number): number[] => {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 1000)); 
  }
  return array;
};

const RESIZE_ARRAY = 'RESIZE_ARRAY';

export const resizeArray = (newSize: number) => ({
  type: RESIZE_ARRAY,
  payload: generateRandomArray(newSize),
});

type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  sortAlgorithm: null,
  array: generateRandomArray(100), 
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
    case RESIZE_ARRAY:
      return {
        ...state,
        array: action.payload,
      };
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
