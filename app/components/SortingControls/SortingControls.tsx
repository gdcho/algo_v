import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { startSorting, resetArray, setAlgorithm } from "../../redux/actions";
import "./SortingControls.css";

interface SortingControlsProps {
  onElementCountChange?: (count: number) => void;
}

type AlgorithmName =
  | "bubbleSort"
  | "quickSort"
  | "heapSort"
  | "insertionSort"
  | "selectionSort";

const algorithmTimeComplexities: {
  [key: string]: { average: string; worst: string };
} = {
  bubbleSort: { average: "O(n²)", worst: "O(n²)" },
  quickSort: { average: "O(n log n)", worst: "O(n²)" },
  heapSort: { average: "O(n log n)", worst: "O(n log n)" },
  insertionSort: { average: "O(n²)", worst: "O(n²)" },
  selectionSort: { average: "O(n²)", worst: "O(n²)" },
  // mergeSort: { average: 'O(n log n)', worst: 'O(n log n)' },
};

const SortingControls: React.FC<SortingControlsProps> = ({
  onElementCountChange,
}) => {
  const dispatch = useDispatch();
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<AlgorithmName>("bubbleSort");

  useEffect(() => {
    const DEFAULT_ARRAY_SIZE = 80;
    if (!localStorage.getItem("arraySize")) {
      localStorage.setItem("arraySize", DEFAULT_ARRAY_SIZE.toString());
    }
  }, []);

  const complexities =
    algorithmTimeComplexities[
      selectedAlgorithm as keyof typeof algorithmTimeComplexities
    ];

  return (
    <div>
      <select
        onChange={(e) => {
          const algorithm = e.target.value as AlgorithmName;
          setSelectedAlgorithm(algorithm);
          dispatch(setAlgorithm(algorithm));
        }}
      >
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
          max="150"
          defaultValue="80"
          onChange={(e) =>
            onElementCountChange && onElementCountChange(Number(e.target.value))
          }
        />
      </div>
      <br />
      <div>Average Time Complexity: {complexities.average}</div>
      <div>Worst Time Complexity: {complexities.worst}</div>
    </div>
  );
};

export default SortingControls;
