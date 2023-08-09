// components/Bar/Bar.tsx
"use client";
import React from 'react';

interface BarProps {
  value: number;
  maxBarHeight: number;
  height: number;
  color: string;
}

const Bar: React.FC<BarProps> = ({ value, maxBarHeight, height, color }) => {
  return <div className="bar" style={{ height: `${height}px`, backgroundColor: color }}></div>;
};

export default Bar;


