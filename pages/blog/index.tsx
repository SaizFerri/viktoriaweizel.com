import { FunctionComponent } from "react";
import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import GET_ALL_POSTS from "../../graphql/queries/blog/getAllPosts.gql";
import { useQuery } from "@apollo/client";
import COLLECTION_STATUS from "../../consts/collectionStatus";
import BlogCard from "../../components/blog/BlogCard";
import SEO from "../../components/SEO";

const variables = {
  status: COLLECTION_STATUS,
  limit: -1,
};

const BlogPage: FunctionComponent = () => {
  const { data } = useQuery(GET_ALL_POSTS, { variables });

  const seoItem = {
    title: "Blog",
    description: "Welcome to my blog!",
  };

  return (
    <Layout>
      <SEO title={seoItem.title} item={seoItem} type="website" url="/blog" />
      <div className="container">
        <div className="row">
          {(data?.posts || []).map(
            ({ id, title, subtitle, date_created, thumbnail, slug }) => {
              return (
                <div className="col-12 col-md-6 col-lg-6 col-xl-6" key={id}>
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

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_POSTS,
    variables,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

export default BlogPage;
