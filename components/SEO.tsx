import React from "react";
import { FunctionComponent } from "react";
import DIRECTUS_URL from "../consts/directusBaseUrl";
import APP_URL from "../consts/appUrl";
import Head from "next/head";

interface SEOProps {
  title: string;
  item: {
    title: string;
    description: string;
    tags?: string[];
  };
  thumbnail?: {
    id: string;
    width: string;
    height: string;
  };
  type?: string;
  url?: string;
}

const SEO: FunctionComponent<SEOProps> = ({
  title,
  item,
  thumbnail,
  type = "article",
  url = "/",
}) => {
  const defaultThumbnail = {
    id: "6bd18051-c9cd-4c2a-b0d5-0b02b51cf8ce",
    width: "1600",
    height: "768",
  };
  const usedThumbnail = thumbnail ? thumbnail : defaultThumbnail;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width" />
      <meta key="author" name="author" content="Viktoria Weizel" />
      <link rel="canonical" href={`${APP_URL}${url}`} key="canonical" />
      <meta key="description" name="description" content={item.description} />
      <meta itemProp="name" content={item.title} />
      <meta itemProp="description" content={item.description} />
      {item.tags && item.tags.length && (
        <meta name="keywords" content={item.tags.join(", ")} />
      )}
      <meta key="og:title" property="og:title" content={item.title} />
      <meta key="og:site_name" property="og:site_name" content={item.title} />
      <meta
        key="og:description"
        property="og:description"
        content={item.description}
      />
      <meta key="og:url" property="og:url" content={`${APP_URL}${url}`} />
      <meta key="og:type" property="og:type" content={type} />
      <meta
        key="og:image"
        property="og:image"
        content={`${DIRECTUS_URL}/assets/${usedThumbnail.id}`}
      />
      <meta
        key="og:image:width"
        property="og:image:width"
        content={usedThumbnail.width}
      />
      <meta
        key="og:image:height"
        property="og:image:height"
        content={usedThumbnail.height}
      />
      <meta
        property="image"
        itemProp="image"
        content={`${DIRECTUS_URL}/assets/${usedThumbnail.id}`}
      />
    </Head>
  );
};

export default SEO;
