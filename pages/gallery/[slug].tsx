import React, { FunctionComponent } from "react";
import Link from "next/link";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { gql, useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Masonry from "../../components/Masonry";
import Image from "../../components/Image";

const GALLERY_QUERY = gql`
  query($slug: String) {
    items {
      gallery(filter: { slug: { _eq: $slug } }) {
        id
        name
        description
        slug
        thumbnail {
          id
          width
          height
        }
        images {
          image {
            id
            title
            width
            height
          }
        }
        tags
      }
    }
  }
`;

const GalleryItemPage: FunctionComponent = () => {
  const router = useRouter();
  const { error, data } = useQuery(GALLERY_QUERY, {
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
        <Link href="/gallery">
          <a>Go back</a>
        </Link>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <Masonry withLightbox>
          {(item.images || []).map(({ image }) => (
            <Image
              key={image.id}
              image={image}
              alt={image.title}
              classNames="cursor-pointer"
            />
          ))}
        </Masonry>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GALLERY_QUERY,
    variables: { slug: params?.slug },
  });
  return addApolloState(apolloClient, {
    props: {},
  });
};

export default GalleryItemPage;
