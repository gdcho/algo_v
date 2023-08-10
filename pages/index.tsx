import React from "react";
import ArrayVisualizer from "../app/components/ArrayVisualizer/ArrayVisualizer";
import SortingControls from "../app/components/SortingControls/SortingControls";
import { useDispatch, useSelector } from "react-redux";
import { startSorting, resetArray, setAlgorithm } from "../app/redux/actions";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const sampleData = [5, 3, 8, 2, 6, 4, 7, 9, 1, 10, 3, 8, 2, 6, 4, 7, 9, 1, 10];

  const handleStartSorting = () => {
    dispatch(startSorting());
  };

  const handleReset = () => {
    dispatch(resetArray());
  };

  const handleAlgorithmChange = (algorithm: string) => {
    dispatch(setAlgorithm(algorithm));
  };

  return (
    <div>
      <h1>Algo V</h1>
      <SortingControls
        onStartSorting={handleStartSorting}
        onReset={handleReset}
        onAlgorithmChange={handleAlgorithmChange}
      />
      <ArrayVisualizer data={sampleData} />
      {/* Add other components as needed */}
    </div>
  );
};

export default Home;
