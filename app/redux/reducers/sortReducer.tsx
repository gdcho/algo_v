import { SELECT_SORT_ALGORITHM, SORT_ARRAY } from '../actions';

const initialState = {
  sortAlgorithm: null,
  array: [],  
  sortedArray: [],
};

interface Action {
  type: typeof SELECT_SORT_ALGORITHM | typeof SORT_ARRAY;
  payload: any;  
}

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
        sortedArray: action.payload,
      };
    default:
      return state;
  }
};

export default sortReducer;
