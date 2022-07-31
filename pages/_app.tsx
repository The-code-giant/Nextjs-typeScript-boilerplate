import { ApolloProvider } from '@apollo/client';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { useApollo } from '../lib/apollo';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
