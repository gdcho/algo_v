import React from 'react';
import { useDispatch } from 'react-redux';
import { startSorting, resetArray, setAlgorithm } from '../../redux/actions';

interface SortingControlsProps {
  onElementCountChange?: (count: number) => void; 
}

const SortingControls: React.FC<SortingControlsProps> = ({ onElementCountChange }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <select onChange={(e) => dispatch(setAlgorithm(e.target.value))}>
        <option value="bubbleSort">Bubble Sort</option>
        <option value="quickSort">Quick Sort</option>
        {/* <option value="mergeSort">Merge Sort</option> */}
        <option value="heapSort">Heap Sort</option>
        <option value="insertionSort">Insertion Sort</option>
        <option value="selectionSort">Selection Sort</option>
      </select>

      <button onClick={() => dispatch(startSorting())}>Start Sorting</button>
      <button onClick={() => dispatch(resetArray())}>Reset</button>

      <div>
        <label>Array Size: </label>
        <input 
          type="range" 
          min="10" 
          max="300" 
          defaultValue="100" 
          onChange={(e) => onElementCountChange && onElementCountChange(Number(e.target.value))} 
        />
      </div>
    </div>
  );
};

export default SortingControls;