import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Body = () => {
  const array = useSelector((state: RootState) => state.sort.array);

  return (
    <div>
      Array: {array.join(', ')}
    </div>
  );
};

export default Body;
