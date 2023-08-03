// app/pages/_app.tsx
"use client";
import '../globals.css';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { initializeStore } from '../redux/store'; 

function App({ Component, pageProps }: AppProps) {
  const store = initializeStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

