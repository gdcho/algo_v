// components/ArrayVisualizer/ArrayVisualizer.tsx
"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Bar from "../Bar/Bar";

const ArrayVisualizer: React.FC = () => {
  const array = useSelector((state: RootState) => state.sort.array);
  const maxBarHeight = 400;
  type ArrayElementType = number;

  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      {array.map((value: ArrayElementType, index: number) => (
        <Bar key={index} value={value} maxBarHeight={maxBarHeight} />
      ))}
    </div>
  );
};

export default ArrayVisualizer;
