// components/ArrayVisualizer/ArrayVisualizer.tsx
"use client";
import React, { useEffect, useState } from "react";
import Bar from "../Bar/Bar";

interface ArrayVisualizerProps {
  array?: number[]; 
}

const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({ array = [] }) => {
  const [computedArray, setComputedArray] = useState<number[]>([]);
  const maxBarHeight = 400;

  useEffect(() => {
    const maxArrayValue = array && Array.isArray(array) ? Math.max(...array) : 0;
    const newArray = array.map(value => (value / maxArrayValue) * maxBarHeight);

    if (JSON.stringify(newArray) !== JSON.stringify(computedArray)) {
      setComputedArray(newArray);
    }
  }, [array]);

  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      {computedArray.map((height, index) => {
        const color = "blue";
        return (
          <Bar
            key={index}
            value={array[index]}
            maxBarHeight={maxBarHeight}
            height={height}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default ArrayVisualizer;
