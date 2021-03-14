import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import App from "next/app";
import Head from "next/head";
import { CookieBanner } from "@palmabit/react-cookie-law";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "../lib/apolloClient";
import * as gtag from "../utils/gtag";
import "../styles/index.scss";
import GA_TRACKING_ID from "../consts/gaId";

export default function MyApp({ Component, pageProps, cookies }) {
  const router = useRouter();
  const apolloClient = useApollo(pageProps);
  const [cookieConsented, setCookieConsented] = useState(
    cookies?.rcl_consent_given || false
  );

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
      <Head>
        {process.env.NODE_ENV === "production" && cookieConsented && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </Head>
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
          onAccept={() => setCookieConsented(true)}
        />
      </ApolloProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const cookies = appContext.ctx.req.cookies;

  return { ...appProps, cookies };
};
