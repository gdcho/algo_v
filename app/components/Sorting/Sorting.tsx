// components/Sorting/Sorting.tsx
"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimations } from '../../redux/reducers/sortReducer';
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
  const animations = useSelector((state: RootState) => state.sort.animations);

  useEffect(() => {
    if (sortAlgorithm) {
      const animations = sortFunctions[sortAlgorithm](array);
      dispatch(setAnimations(animations));
    }
  }, [sortAlgorithm, array, dispatch]);

  useEffect(() => {
    animations.forEach(([i, j], index) => {
      setTimeout(() => {
      }, index * 100);
    });
  }, [animations]);

  return <div></div>;
};
export default Sorting;
