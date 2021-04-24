import { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import GalleryList from "../../components/gallery/GalleryList";
import Layout from "../../components/Layout";
import GET_ALL_GALLERIES from "../../graphql/queries/gallery/getAllGalleries.gql";
import COLLECTION_STATUS from "../../consts/collectionStatus";
import SEO from "../../components/SEO";

const variables = {
  status: COLLECTION_STATUS,
  limit: -1,
};

const GalleryPage: FunctionComponent = () => {
  const { data } = useQuery(GET_ALL_GALLERIES, { variables });

  const seoItem = {
    title: "Gallery",
    description: "Welcome to my gallery!",
  };

  return (
    <Layout>
      <SEO title={seoItem.title} item={seoItem} type="website" url="/gallery" />
      <div className="container">
        <GalleryList items={data?.items?.gallery} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_GALLERIES,
    variables,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

export default GalleryPage;
