export const SET_ALGORITHM = "SET_ALGORITHM";
export const START_SORTING = "START_SORTING";
export const RESET_ARRAY = "RESET_ARRAY";

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
