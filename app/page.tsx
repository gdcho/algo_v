// app/page.tsx
"use client";
import React from 'react';
import Sorting from './components/Sorting/Sorting'; 
import Toolbar from './components/Toolbar/Toolbar';
import Body from './components/Body/Body';
import { Provider } from 'react-redux';
import { initializeStore } from './redux/store'; 

export default function Home() {
  const store = initializeStore({});  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="App">
          <Provider store={store}> 
            <Toolbar />
            <Body />
            <Sorting />
          </Provider>
        </div>
      </div>
    </main>
  );
}
