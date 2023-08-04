// app/components/Toolbar/Toolbar.tsx
import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { selectSortAlgorithm } from '../../redux/actions';
import { setIsRunning } from '../../redux/reducers/sortReducer'; 
import { RootState } from '../../redux/store'; 

const Toolbar = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state: RootState) => state.sort.isRunning);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectSortAlgorithm(event.target.value));
  };

  const handleStart = () => {
    dispatch(setIsRunning(true));
  };

  const handleStop = () => {
    dispatch(setIsRunning(false));
  };

  return (
    <div>
      <select onChange={handleChange}>
      </select>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
    </div>
  );
};

export default Toolbar;
