"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ArrayVisualizer from "../ArrayVisualizer/ArrayVisualizer"; 

const Body = () => {
  const array = useSelector((state: RootState) => state.sort.array);

  return (
    <div>
      <h2>Visualized Array:</h2>
      <ArrayVisualizer />
    </div>
  );
};

export default Body;
