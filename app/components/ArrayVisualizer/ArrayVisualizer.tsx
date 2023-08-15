import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

interface ArrayVisualizerProps {
  data: number[];
}

const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({ data }) => {
  const maxValue = Math.max(...data);

  const currentBubble = useSelector((state: RootState) => state.currentBubble);
  const currentSwappers = useSelector(
    (state: RootState) => state.currentSwappers
  );
  const currentSorted = useSelector((state: RootState) => state.currentSorted);

  const [indices, setIndices] = useState<number[]>(data.map((_, i) => i));

  useEffect(() => {
    if (currentSwappers.length === 2) {
      const [i, j] = currentSwappers;
      const newIndices = [...indices];
      [newIndices[i], newIndices[j]] = [newIndices[j], newIndices[i]];
      setIndices(newIndices);
    }
  }, [currentSwappers]);

  useEffect(() => {
    setIndices(data.map((_, i) => i));
}, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        height: "300px",
        marginTop: "50px",
      }}
    >
      {data.map((value, index) => (
  <div
    key={index}
    style={{
      height: `${(value / maxValue) * 100}%`,
      width: "5px",
      margin: "0 1px",
      backgroundColor: getColor(index),
    }}
  ></div>
))}

    </div>
  );

  function getColor(index: number): string {
    if (currentSwappers.includes(index)) return "red";
    if (currentBubble.includes(index)) return "yellow";
    if (currentSorted.includes(index)) return "green";
    return "blue";
  }
};

export default ArrayVisualizer;