import isClient from "../utils/isClient";

export const pageview = (url) => {
  const isProduction = process.env.NODE_ENV === "production";

  if (isClient() && isProduction) {
    (window as any).dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};
