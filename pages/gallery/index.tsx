import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import GalleryList from "../../components/gallery/GalleryList";
import Layout from "../../components/Layout";

const GALLERIES_QUERY = gql`
  query {
    items {
      gallery(sort: "-date_created") {
        id
        name
        slug
        thumbnail {
          id
          width
          height
        }
      }
    }
  }
`;

const GalleryPage: React.FC = () => {
  const { data } = useQuery(GALLERIES_QUERY);

  const head = () => (
    <Head>
      <title>Gallery</title>
    </Head>
  );

  return (
    <Layout head={head}>
      <div className="container">
        <GalleryList items={data?.items?.gallery} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GALLERIES_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default GalleryPage;
