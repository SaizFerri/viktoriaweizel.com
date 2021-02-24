import Head from "next/head";
import React, { FunctionComponent } from "react";
import Layout from "../../components/Layout";

const BlogPage: FunctionComponent = () => {
  const head = () => (
    <Head>
      <title>Blog</title>
    </Head>
  );

  return (
    <Layout head={head}>
      <div>Blog page</div>
    </Layout>
  );
};

export default BlogPage;
