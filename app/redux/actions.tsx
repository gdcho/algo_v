export const SELECT_SORT_ALGORITHM = 'SELECT_SORT_ALGORITHM';
export const SORT_ARRAY = 'SORT_ARRAY';

export const selectSortAlgorithm = (sortAlgorithm: string) => ({
  type: SELECT_SORT_ALGORITHM,
  payload: sortAlgorithm,
});

export const sortArray = (sortedArray: number[]) => ({
  type: SORT_ARRAY,
  payload: sortedArray,
});

