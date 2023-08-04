// app/pages/_app.tsx
"use client";
import '../globals.css';
import type { AppProps } from 'next/app'
import { useStore } from '../redux/store'; 

function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
      <Component {...pageProps} />
  );
}

export default App;


