import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  const head = () => (
    <Head>
      <title>Viktoria Weizel</title>
    </Head>
  );
  return (
    <Layout head={head}>
      <div className="container">
        <h1>Viktoria Weizel</h1>
        <p>
          Check out my
          <Link href="/gallery">
            <a> gallery</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // const apolloClient = initializeApollo();

  // await apolloClient.query({
  //   query: GALLERY_QUERY,
  // });

  // return addApolloState(apolloClient, {
  //   props: {},
  //   revalidate: 60,
  // });
  return { props: {} };
}

export default IndexPage;
