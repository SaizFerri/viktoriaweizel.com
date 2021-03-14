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
  thumbnail: {
    id: string;
    width: string;
    height: string;
  };
  type: string;
  url: string;
}

const SEO: FunctionComponent<SEOProps> = ({
  item,
  thumbnail,
  url = "/",
  type = "article",
}) => {
  return (
    <>
      <meta name="author" content="Viktoria Weizel" />
      <meta itemProp="name" content={item.title} />
      <meta itemProp="description" content={item.description} />
      <meta
        itemProp="image"
        content={`${DIRECTUS_URL}/assets/${thumbnail.id}`}
      />
      {item.tags && item.tags.length && (
        <meta name="keywords" content={item.tags.join(", ")} />
      )}
      <meta property="og:title" content={item.title} />
      <meta property="og:site_name" content={item.title} />
      <meta property="og:description" content={item.description} />
      <meta
        property="og:image"
        itemProp="image"
        content={`${DIRECTUS_URL}/assets/${thumbnail.id}`}
      />
      <meta property="og:image:width" content={thumbnail.width} />
      <meta property="og:image:height" content={thumbnail.height} />
      <meta property="og:url" content={`${APP_URL}${url}`} />
      <meta property="og:type" content={type} />
    </>
  );
};

export default SEO;
