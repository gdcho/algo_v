import React, { useState, useEffect } from "react";
import ArrayVisualizer from "../app/components/ArrayVisualizer/ArrayVisualizer";
import SortingControls from "../app/components/SortingControls/SortingControls";
import {
  generateRandomArray,
  DEFAULT_ARRAY_LENGTH,
  DEFAULT_MIN_VALUE,
  DEFAULT_MAX_VALUE,
} from "../app/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { setArray } from "../app/redux/actions";
import { RootState } from "../app/redux/reducers";
import Image from "next/image";

const Home: React.FC = () => {
  const [arrayLength, setArrayLength] = useState<number>(DEFAULT_ARRAY_LENGTH);
  const [sampleData, setSampleData] = useState<number[]>(
    Array(DEFAULT_ARRAY_LENGTH).fill(DEFAULT_MIN_VALUE)
  );
  const dispatch = useDispatch();
  const array = useSelector((state: RootState) => state.array);

  useEffect(() => {
    const newArray = generateRandomArray(
      arrayLength,
      DEFAULT_MIN_VALUE,
      DEFAULT_MAX_VALUE
    );
    setSampleData(newArray);
    dispatch(setArray(newArray));
  }, [arrayLength, dispatch]);

  const handleElementCountChange = (count: number) => {
    setArrayLength(count);
    const newArray = generateRandomArray(
      count,
      DEFAULT_MIN_VALUE,
      DEFAULT_MAX_VALUE
    );
    dispatch(setArray(newArray));
  };

  return (
    <div className="center-container">
      <Image src="/images/algov.png" alt="algo v" width={100} height={100} />
      <SortingControls onElementCountChange={handleElementCountChange} />
      <ArrayVisualizer data={array} key={array.length} />
    </div>
  );
};

export default Home;
