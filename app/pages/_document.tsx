// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { Provider } from 'react-redux';
import { initializeStore } from '../redux/store';

interface MyDocumentInitialProps extends DocumentInitialProps {
  initialReduxState: any;
}

class MyDocument extends Document<MyDocumentInitialProps> {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
      const reduxStore = initializeStore({}); 
  
      return { ...initialProps, initialReduxState: reduxStore.getState() };
    }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Provider store={initializeStore(this.props.initialReduxState)}>
            <Main />
            <NextScript />
          </Provider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
