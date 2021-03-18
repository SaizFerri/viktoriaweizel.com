import { CookieBanner } from "@palmabit/react-cookie-law";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "../lib/apolloClient";
import GoogleTagManager from "../components/GoogleTagManager";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <GoogleTagManager>
        <Component {...pageProps} />

        <CookieBanner
          message="We use cookies 🍪 just to track visits to our website, we do not store personal details. Our cookies do not contain chocolate chips and are gluten free."
          className="cookie-banner"
          styles={{
            dialog: {},
            message: {},
            container: {},
            policy: {},
            buttonWrapper: {},
            button: {},
          }}
          managePreferencesButtonText={"Open cookie jar"}
          wholeDomain={true}
          showStatisticsOption={false}
          showMarketingOption={false}
          preferencesDefaultChecked={true}
          statisticsDefaultChecked={false}
          marketingDefaultChecked={false}
          onAccept={() => {}}
        />
      </GoogleTagManager>
    </ApolloProvider>
  );
}
