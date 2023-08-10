import React, { useState, useEffect } from "react";
import ArrayVisualizer from "../app/components/ArrayVisualizer/ArrayVisualizer";
import SortingControls from "../app/components/SortingControls/SortingControls";
import { useDispatch, useSelector } from "react-redux";
import { startSorting, resetArray, setAlgorithm } from "../app/redux/actions";
import { generateRandomArray, DEFAULT_ARRAY_LENGTH, DEFAULT_MIN_VALUE, DEFAULT_MAX_VALUE } from "../app/lib/utils"; 

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [arrayLength, setArrayLength] = useState<number>(DEFAULT_ARRAY_LENGTH);
  
  const [sampleData, setSampleData] = useState<number[]>(Array(DEFAULT_ARRAY_LENGTH).fill(DEFAULT_MIN_VALUE));

  useEffect(() => {
    setSampleData(generateRandomArray(arrayLength, DEFAULT_MIN_VALUE, DEFAULT_MAX_VALUE));
  }, [arrayLength]);

  const handleStartSorting = () => {
    dispatch(startSorting());
  };

  const handleReset = () => {
    dispatch(resetArray());
    setSampleData(generateRandomArray(arrayLength, DEFAULT_MIN_VALUE, DEFAULT_MAX_VALUE)); 
  };

  const handleAlgorithmChange = (algorithm: string) => {
    dispatch(setAlgorithm(algorithm));
  };

  const handleElementCountChange = (count: number) => {
    setArrayLength(count);
  };

  return (
    <div>
      <h1>Algo V</h1>
      <SortingControls
        onStartSorting={handleStartSorting}
        onReset={handleReset}
        onAlgorithmChange={handleAlgorithmChange}
        onElementCountChange={handleElementCountChange}
      />
      <ArrayVisualizer data={sampleData} />
      {/* Add other components as needed */}
    </div>
  );
};

export default Home;
