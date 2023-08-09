// app/components/Toolbar/Toolbar.tsx
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSortAlgorithm, setAnimations } from "../../redux/actions"; 
import { setIsRunning } from "../../redux/reducers/sortReducer";
import { RootState } from "../../redux/store";
import { bubbleSort } from "../../algo/bubbleSort"
import { selectionSort } from "../../algo/selectionSort"
import { insertionSort } from "../../algo/insertionSort"
import { mergeSort } from "../../algo/mergeSort"
import { quickSort } from "../../algo/quickSort"
import { heapSort } from "../../algo/heapSort"

const sortFunctions = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
};

const Toolbar = () => {
  const dispatch = useDispatch();
  const sortAlgorithm = useSelector((state: RootState) => state.sort.sortAlgorithm);
  const array = useSelector((state: RootState) => state.sort.array);

  const handleStart = () => {
    if (sortAlgorithm) {
      const animations = sortFunctions[sortAlgorithm](array);
      dispatch(setAnimations(animations));
    }
  };

  return (
    <div>
      {/* Other toolbar elements */}
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Toolbar;
