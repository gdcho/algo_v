// components/Bar/Bar.tsx
"use client";
import React, { useState, useEffect } from 'react';

type BarProps = {
  value: number;
  maxBarHeight: number;
};

const Bar: React.FC<BarProps> = ({ value, maxBarHeight }) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false); 
  }, []);

  const heightPercentage = (value / 1000) * 100; 
  const height = isServer 
    ? 0
    : (heightPercentage / 100) * maxBarHeight;

  return (
    <div
      style={{
        height: `${height}px`,
        width: '5px',
        backgroundColor: 'blue', 
        margin: '0 1px',
      }}
    ></div>
  );
};

export default Bar;

