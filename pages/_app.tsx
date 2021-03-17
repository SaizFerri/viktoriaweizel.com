import { useEffect } from "react";
import { useRouter } from "next/router";
import { CookieBanner } from "@palmabit/react-cookie-law";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "../lib/apolloClient";
import * as gtag from "../utils/gtag";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ApolloProvider client={apolloClient}>
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
      </ApolloProvider>
    </>
  );
}
