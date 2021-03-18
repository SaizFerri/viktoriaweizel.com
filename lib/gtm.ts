import isClient from "../utils/isClient";

export const pageview = (url) => {
  if (isClient()) {
    (window as any).dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};
