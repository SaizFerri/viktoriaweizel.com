import Head from "next/head";
import React, { FunctionComponent } from "react";
import Layout from "../../components/Layout";
import { GetServerSideProps } from "next";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import GET_ALL_POSTS from "../../graphql/queries/blog/getAllPosts.gql";
import { useQuery } from "@apollo/client";
import COLLECTION_STATUS from "../../consts/collectionStatus";
import BlogCard from "../../components/blog/BlogCard";

const variables = {
  status: COLLECTION_STATUS,
};

const BlogPage: FunctionComponent = () => {
  const { data } = useQuery(GET_ALL_POSTS, { variables });

  const head = () => (
    <Head>
      <title>Blog</title>
    </Head>
  );

  return (
    <Layout head={head}>
      <div className="container mt-4">
        <div className="row">
          {(data?.items?.posts || []).map(
            ({ id, title, subtitle, date_created, thumbnail, slug }) => {
              return (
                <div className="col-lg-4" key={id}>
                  <BlogCard
                    title={title}
                    createdOn={date_created}
                    subtitle={subtitle}
                    thumbnail={thumbnail}
                    slug={slug}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_POSTS,
    variables,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default BlogPage;
