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

  const head: FunctionComponent = () => (
    <Head>
      <title>{item.name}</title>
      <meta name="description" content={item.description} />
    </Head>
  );

  return (
    <Layout head={head}>
      <div className="container">
        <div className="gallery-page">
          <h1 className="gallery-page__title">{item.name}</h1>
          <p className="gallery-page__description">{item.description}</p>
          <Masonry withLightbox>
            {(item.images || [])
              .filter(({ image }) => image !== null)
              .map(({ image }) => (
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
