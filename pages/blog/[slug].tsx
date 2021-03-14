import React, { FunctionComponent } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import GET_POST_BY_SLUG from "../../graphql/queries/blog/getPostBySlug.gql";
import BlogPost from "../../components/blog/BlogPost";
import DIRECTUS_URL from "../../consts/directusBaseUrl";
import APP_URL from "../../consts/appUrl";

const BlogDetailPage: FunctionComponent = () => {
  const router = useRouter();
  const { data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug: router.query.slug },
  });

  const [post] = data.items.posts;

  const head = () => (
    <Head>
      <title>{post.title}</title>
      <meta name="author" content="Viktoria Weizel" />
      <meta itemProp="name" content={post.name} />
      <meta itemProp="description" content={post.description} />
      <meta
        itemProp="image"
        content={`${DIRECTUS_URL}/assets/${post.thumbnail.id}`}
      />
      <meta property="og:title" content={post.title} />
      <meta property="og:site_name" content={post.title}></meta>
      <meta property="og:description" content={post.subtitle} />
      <meta
        property="og:image"
        itemProp="image"
        content={`${DIRECTUS_URL}/assets/${post.thumbnail.id}`}
      />
      <meta property="og:image:width" content={post.thumbnail.width} />
      <meta property="og:image:height" content={post.thumbnail.height} />
      <meta property="og:url" content={`${APP_URL}/blog/${post.slug}`} />
      <meta property="og:type" content="article" />
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
