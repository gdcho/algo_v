//components/Body/Body.tsx
"use client";
import React, { useState, useEffect } from "react";
import ArrayVisualizer from "../ArrayVisualizer/ArrayVisualizer"; 

const Body = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    const generateRandomArray = (length: number): number[] => {
      const arr: number[] = [];
      for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 1000));
      }
      return arr;
    };

    setArray(generateRandomArray(50));
  }, []);

  return (
    <div>
      <h2>Visualized Array:</h2>
      <ArrayVisualizer array={array} />
    </div>
  );
};

export default Body;
