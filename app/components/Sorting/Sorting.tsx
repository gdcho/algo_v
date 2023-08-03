// components/Sorting/Sorting.tsx
"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortArray } from '../../redux/actions';
import { selectionSort } from '../../algo/selectionSort';
import { bubbleSort } from '../../algo/bubbleSort';
import { insertionSort } from '../../algo/insertionSort';
import { mergeSort } from '../../algo/mergeSort';
import { quickSort } from '../../algo/quickSort';
import { heapSort } from '../../algo/heapSort';
import { RootState } from '../../redux/store';

const sortFunctions = {
    selectionSort,
    bubbleSort,
    insertionSort,
    mergeSort,
    quickSort,
    heapSort,
};

const Sorting = () => {
  const dispatch = useDispatch();
  const array = useSelector((state: RootState) => state.sort.array);
  const sortAlgorithm = useSelector((state: RootState) => state.sort.sortAlgorithm);

  useEffect(() => {
    if (typeof window !== 'undefined' && sortAlgorithm) {
        dispatch(sortArray(sortFunctions[sortAlgorithm](array)));
    }
  }, [sortAlgorithm, array, dispatch]);

  return <div></div>;
};

export default Sorting;
