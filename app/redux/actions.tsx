// app/redux/actions.tsx
export const SELECT_SORT_ALGORITHM = 'SELECT_SORT_ALGORITHM';
export const SORT_ARRAY = 'SORT_ARRAY';
export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const SET_ANIMATIONS = "SET_ANIMATIONS";

export const selectSortAlgorithm = (sortAlgorithm: string) => ({
  type: SELECT_SORT_ALGORITHM,
  payload: sortAlgorithm,
});

export const sortArray = (sortedArray: number[]) => ({
  type: SORT_ARRAY,
  payload: sortedArray,
});

export const updateArray = (newArray: number[]) => ({
  type: UPDATE_ARRAY,
  payload: newArray,
});

export const setAnimations = (animations: any[]) => ({
  type: SET_ANIMATIONS,
  payload: animations,
});


