import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Body = () => {
  const sortedArray = useSelector((state: RootState) => state.sort.sortedArray);

  return (
    <div>
      Sorted Array: {sortedArray.join(', ')}
    </div>
  );
};

export default Body;
