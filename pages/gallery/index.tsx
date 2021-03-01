import { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import GalleryList from "../../components/gallery/GalleryList";
import Layout from "../../components/Layout";
import GET_ALL_GALLERIES from "../../graphql/queries/gallery/getAllGalleries.gql";
import COLLECTION_STATUS from '../../consts/collectionStatus';

const variables = {
  status: COLLECTION_STATUS,
};

const GalleryPage: FunctionComponent = () => {
  const { data } = useQuery(GET_ALL_GALLERIES, { variables });

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
    query: GET_ALL_GALLERIES,
    variables,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default GalleryPage;
