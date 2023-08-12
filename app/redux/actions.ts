export const SET_ALGORITHM = "SET_ALGORITHM";
export const START_SORTING = "START_SORTING";
export const RESET_ARRAY = "RESET_ARRAY";
export const UPDATE_ARRAY = "UPDATE_ARRAY";
export const SET_ARRAY = "SET_ARRAY";
export const SET_CURRENT_BUBBLE = "SET_CURRENT_BUBBLE";
export const SET_CURRENT_SWAPPERS = "SET_CURRENT_SWAPPERS";
export const SET_CURRENT_SORTED = "SET_CURRENT_SORTED";
export const SET_RUNNING = "SET_RUNNING";

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

export const setCurrentBubble = (indices: number[]) => ({
  type: SET_CURRENT_BUBBLE,
  payload: indices,
});

export const setCurrentSwappers = (indices: number[]) => ({
  type: SET_CURRENT_SWAPPERS,
  payload: indices,
});

export const setCurrentSorted = (indices: number[]) => ({
  type: SET_CURRENT_SORTED,
  payload: indices,
});

export const setRunning = (isRunning: boolean) => ({
  type: SET_RUNNING,
  payload: isRunning,
});

