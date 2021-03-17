import React from "react";
import { FunctionComponent } from "react";
import DIRECTUS_URL from "../consts/directusBaseUrl";
import APP_URL from "../consts/appUrl";

interface SEOProps {
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

const defaultThumbnail = {
  id: "6bd18051-c9cd-4c2a-b0d5-0b02b51cf8ce",
  width: "1600",
  height: "768",
};

const SEO: FunctionComponent<SEOProps> = ({
  item,
  thumbnail,
  type = "article",
  url = "/",
}) => {
  const usedThumbnail = thumbnail ? thumbnail : defaultThumbnail;
  return (
    <>
      <meta name="author" content="Viktoria Weizel" />
      <meta name="description" content={item.description} />
      <meta itemProp="name" content={item.title} />
      <meta itemProp="description" content={item.description} />
      {item.tags && item.tags.length && (
        <meta name="keywords" content={item.tags.join(", ")} />
      )}
      <meta property="og:title" content={item.title} />
      <meta property="og:site_name" content={item.title} />
      <meta property="og:description" content={item.description} />
      <meta
        itemProp="image"
        content={`${DIRECTUS_URL}/assets/${usedThumbnail.id}`}
      />
      <meta
        property="og:image"
        itemProp="image"
        content={`${DIRECTUS_URL}/assets/${usedThumbnail.id}`}
      />
      <meta property="og:image:width" content={usedThumbnail.width} />
      <meta property="og:image:height" content={usedThumbnail.height} />
      <meta property="og:url" content={`${APP_URL}${url}`} />
      <meta property="og:type" content={type} />
    </>
  );
};

export default SEO;
