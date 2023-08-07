// app/pages/index.tsx
"use client";
import React from "react";
import { Provider } from "react-redux";
import { initializeStore } from "../redux/store";
import dynamic from "next/dynamic";
import { selectSortAlgorithm } from "../redux/actions";
import Toolbar from "../components/Toolbar/Toolbar";
import Body from "../components/Body/Body";

const DynamicSorting = dynamic(() => import("../components/Sorting/Sorting"), {
  ssr: false,
});

const Home = ({ initialReduxState }) => {
  const store = initializeStore(initialReduxState);

  return (
    <div>
      <Provider store={store}>
        <Toolbar />
        <Body />
        <DynamicSorting />
      </Provider>
    </div>
  );
};

export async function getServerSideProps() {
  const reduxStore = initializeStore({});

  reduxStore.dispatch(selectSortAlgorithm("bubbleSort"));

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default Home;
