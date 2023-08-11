export const SET_ALGORITHM = "SET_ALGORITHM";
export const START_SORTING = "START_SORTING";
export const RESET_ARRAY = "RESET_ARRAY";
export const UPDATE_ARRAY = "UPDATE_ARRAY";
export const SET_ARRAY = "SET_ARRAY";

export const setAlgorithm = (algorithm: string) => ({
  type: SET_ALGORITHM,
  payload: algorithm,
});

export const startSorting = () => ({
  type: START_SORTING,
});

export const resetArray = () => ({
  type: RESET_ARRAY,
});

export const updateArray = (sortedArray: number[]) => ({
  type: UPDATE_ARRAY, 
  payload: sortedArray,
});

export const setArray = (array: number[]) => ({
  type: SET_ARRAY,
  payload: array,
});

