import React from 'react';

interface SortingControlsProps {
  onStartSorting: () => void;
  onReset: () => void;
  onAlgorithmChange: (algorithm: string) => void;
  onElementCountChange?: (count: number) => void; 
}

const SortingControls: React.FC<SortingControlsProps> = ({
  onStartSorting,
  onReset,
  onAlgorithmChange,
  onElementCountChange,
}) => {
  return (
    <div>
      <select onChange={(e) => onAlgorithmChange(e.target.value)}>
        <option value="bubbleSort">Bubble Sort</option>
        <option value="quickSort">Quick Sort</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="heapSort">Heap Sort</option>
        <option value="insertionSort">Insertion Sort</option>
        <option value="selectionSort">Selection Sort</option>
      </select>

      <button onClick={onStartSorting}>Start Sorting</button>
      <button onClick={onReset}>Reset</button>

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
