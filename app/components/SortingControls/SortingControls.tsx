import React from 'react';

interface SortingControlsProps {
  onStartSorting: () => void;
  onReset: () => void;
  onAlgorithmChange: (algorithm: string) => void;
}

const SortingControls: React.FC<SortingControlsProps> = ({
  onStartSorting,
  onReset,
  onAlgorithmChange,
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

      {/* slider to adjust speed or number of elements */}
    </div>
  );
};

export default SortingControls;
