// app/pages/index.tsx
import React from 'react';
import { initializeStore } from '../redux/store';
import dynamic from 'next/dynamic';
import { selectSortAlgorithm } from '../redux/actions';

const DynamicSorting = dynamic(
  () => import('../components/Sorting/Sorting'),
  { ssr: false }
)

const Home = () => {
  return (
    <div>
      <h1>Welcome to Algo Visualizer</h1>
      <DynamicSorting />
    </div>
  );
};

export async function getServerSideProps() {
  const store = initializeStore();
  
  // Dispatch an action to set the initial sortAlgorithm
  store.dispatch(selectSortAlgorithm('bubbleSort'));
  
  return { props: { initialReduxState: store.getState() } };
}


export default Home;
