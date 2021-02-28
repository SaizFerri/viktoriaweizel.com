import React, { FunctionComponent } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import GET_POST_BY_SLUG from "../../graphql/queries/blog/getPostBySlug.gql";
import BlogPost from "../../components/blog/BlogPost";

const BlogDetailPage: FunctionComponent = () => {
  const router = useRouter();
  const { data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug: router.query.slug },
  });

  const [post] = data.items.posts;

  const head = () => (
    <Head>
      <title>{post.title}</title>
    </Head>
  );
  return (
    <Layout head={head}>
      <BlogPost post={post}></BlogPost>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
}) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_POST_BY_SLUG,
    variables: { slug: params?.slug },
  });

  if (!data.items.posts.length) {
    res.setHeader("location", "/blog");
    res.statusCode = 302;
    res.end();

    return { props: {} };
  }

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default BlogDetailPage;
