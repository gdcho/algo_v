import React from 'react';

interface ArrayVisualizerProps {
  data: number[];
  highlightedIndices?: number[];
}

const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({ data, highlightedIndices = [] }) => {
  const maxValue = Math.max(...data);
  console.log("Data:", data);
console.log("Max Value:", maxValue);
console.log("Highlighted Indices:", highlightedIndices);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', height: '300px', marginTop: '50px'}}>
      {data.map((value, index) => (
        <div
          key={index}
          style={{
            height: `${(value / maxValue) * 100}%`,
            width: '5px',
            margin: '0 1px',
            backgroundColor: highlightedIndices.includes(index) ? 'red' : 'blue', 
          }}
        ></div>
      ))}
    </div>
  );
};

export default ArrayVisualizer;
