import React from 'react';
import { useDispatch } from 'react-redux';
import { selectSortAlgorithm } from '../../redux/actions';

const Toolbar = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(selectSortAlgorithm(event.target.value));
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select a sort algorithm</option>
      <option value="selectionSort">Selection Sort</option>
      <option value="bubbleSort">Bubble Sort</option>
      <option value="insertionSort">Insertion Sort</option>
      <option value="mergeSort">Merge Sort</option>
      <option value="quickSort">Quick Sort</option>
      <option value="heapSort">Heap Sort</option>
    </select>
  );
};

export default Toolbar;
