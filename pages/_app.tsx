import { ApolloProvider } from "@apollo/client";
import { CookieBanner } from "@palmabit/react-cookie-law";
import Head from "next/head";
import { useState } from "react";
import GoogleTagManager from "../components/GoogleTagManager";
import { ThemeProvider } from "../components/ThemeProvider";
import { GTM_ID } from "../consts/gaId";
import { useApollo } from "../lib/apolloClient";
import "../styles/index.scss";
import isClient from "../utils/isClient";

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  const [hasConsent, setHasConsent] = useState(false);

  const onAccept = () => {
    // Prevent calling during rendering
    setTimeout(() => {
      if (isClient() && !hasConsent) {
        setHasConsent(() => true);
      }
    }, 1);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <GoogleTagManager>
          <Head>
            {hasConsent && (
              <script
                data-random={new Date().getTime()}
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`,
                }}
              />
            )}
            <script
              id="mcjs"
              dangerouslySetInnerHTML={{
                __html:
                  '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c37b98e4ca7cf2c929e981bad/47465280f075bee41b3a0eb73.js");',
              }}
            ></script>
          </Head>
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
            policyLink="/privacy-policy"
            managePreferencesButtonText={"Open cookie jar"}
            wholeDomain={true}
            showStatisticsOption={false}
            showMarketingOption={false}
            preferencesDefaultChecked={true}
            statisticsDefaultChecked={false}
            marketingDefaultChecked={false}
            onAccept={() => onAccept()}
          />

          {hasConsent && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          )}
        </GoogleTagManager>
      </ThemeProvider>
    </ApolloProvider>
  );
}
