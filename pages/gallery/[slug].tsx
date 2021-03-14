import React, { FunctionComponent } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import Masonry from "../../components/Masonry";
import Image from "../../components/Image";
import GET_GALLERY_BY_SLUG from "../../graphql/queries/gallery/getGalleryBySlug.gql";
import DIRECTUS_URL from "../../consts/directusBaseUrl";
import APP_URL from "../../consts/appUrl";

const GalleryItemPage: FunctionComponent = () => {
  const router = useRouter();
  const { error, data } = useQuery(GET_GALLERY_BY_SLUG, {
    variables: { slug: router.query.slug },
  });

  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }

  const [item] = data?.items?.gallery;
  console.log(item);

  const head: FunctionComponent = () => (
    <Head>
      <title>{item.name}</title>
      <meta name="author" content="Viktoria Weizel" />
      <meta name="description" content={item.description} />
      <meta itemProp="name" content={item.name} />
      <meta itemProp="description" content={item.description} />
      <meta
        itemProp="image"
        content={`${DIRECTUS_URL}/assets/${item.thumbnail.id}`}
      />
      <meta property="og:title" content={item.name} />
      <meta property="og:site_name" content={item.name}></meta>
      <meta property="og:description" content={item.description} />
      {item.tags.length && (
        <meta name="keywords" content={item.tags.join(", ")} />
      )}
      <meta
        property="og:image"
        itemProp="image"
        content={`${DIRECTUS_URL}/assets/${item.thumbnail.id}`}
      />
      <meta property="og:image:width" content={item.thumbnail.width} />
      <meta property="og:image:height" content={item.thumbnail.height} />
      <meta property="og:url" content={`${APP_URL}/gallery/${item.slug}`} />
      <meta property="og:type" content="article" />
    </Head>
  );

  return (
    <Layout head={head}>
      <div className="container">
        <div className="gallery-page">
          <h1 className="gallery-page__title">{item.name}</h1>
          <p className="gallery-page__description">{item.description}</p>
          <Masonry withLightbox>
            {(item.images || []).map(({ image }) => (
              <Image
                key={image.id}
                image={image}
                alt={image?.title || "Gallery image"}
                classNames="cursor-pointer bg-color-grey"
              />
            ))}
          </Masonry>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_GALLERY_BY_SLUG,
    variables: { slug: params?.slug },
  });
  return addApolloState(apolloClient, {
    props: {},
  });
};

export default GalleryItemPage;
