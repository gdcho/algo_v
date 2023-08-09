// components/Sorting/Sorting.tsx
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateArray } from "../../redux/actions";
import ArrayVisualizer from "../ArrayVisualizer/ArrayVisualizer";

const Sorting = () => {
  const dispatch = useDispatch();
  const array = useSelector((state: RootState) => state.sort.array);
  const animations = useSelector((state: RootState) => state.sort.animations);

  useEffect(() => {
    if (animations.length > 0) {
      animations.forEach((animation: [number, number], index: number) => { 
        setTimeout(() => {
          const [i, j] = animation;
          if (array[i] > array[j]) {
            const newArray = [...array];
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            dispatch(updateArray(newArray));
          }
        }, index * 500); 
      });
    }
  }, [animations, array, dispatch]);

  return <ArrayVisualizer array={array} />;
};

export default Sorting;
