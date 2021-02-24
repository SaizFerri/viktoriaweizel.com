import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import type { AppProps } from "next/app";
import SimpleReactLightbox from "simple-react-lightbox";
import "../styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ApolloProvider>
  );
}
