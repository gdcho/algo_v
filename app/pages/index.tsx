// app/pages/index.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { initializeStore } from '../redux/store';
import dynamic from 'next/dynamic';
import { selectSortAlgorithm } from '../redux/actions';

const DynamicSorting = dynamic(
  () => import('../components/Sorting/Sorting'),
  { ssr: false }
)

const Home = ({initialReduxState}) => {
  const store = initializeStore(initialReduxState);

  return (
    <div>
      <h1>Welcome to Algo Visualizer</h1>
      <Provider store={store}>
        <DynamicSorting />
      </Provider>
    </div>
  );
};

export async function getServerSideProps() {
  const reduxStore = initializeStore({});
  
  reduxStore.dispatch(selectSortAlgorithm('bubbleSort'));
  
  return { props: { initialReduxState: reduxStore.getState() } };
}

export default Home;

