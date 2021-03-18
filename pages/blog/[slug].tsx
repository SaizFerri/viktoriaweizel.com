import React, { FunctionComponent } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import GET_ALL_POST_SLUGS from "../../graphql/queries/blog/getAllSlugs.gql";
import GET_POST_BY_SLUG from "../../graphql/queries/blog/getPostBySlug.gql";
import COLLECTION_STATUS from "../../consts/collectionStatus";
import BlogPost from "../../components/blog/BlogPost";
import SEO from "../../components/SEO";
import IBlogPost from "../../interfaces/blogPost.interface";

interface BlogDetailPageProps {
  post: IBlogPost;
}

const BlogDetailPage: FunctionComponent<BlogDetailPageProps> = ({ post }) => {
  const router = useRouter();

  if (!post) {
    return <h1>Not found...</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const seoItem = {
    title: post.title,
    description: post.subtitle,
  };

  return (
    <Layout>
      <SEO
        title={post.title}
        item={seoItem}
        thumbnail={post.thumbnail}
        type="article"
        url={`/blog/${post.slug}`}
      />
      <BlogPost post={post}></BlogPost>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_ALL_POST_SLUGS,
    variables: {
      status: COLLECTION_STATUS,
    },
  });

  return {
    paths: data.items.posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_POST_BY_SLUG,
    variables: { slug: params?.slug },
  });

  return addApolloState(apolloClient, {
    props: {
      post: data.items.posts[0] || false,
    },
    revalidate: 1,
  });
};

export default BlogDetailPage;
