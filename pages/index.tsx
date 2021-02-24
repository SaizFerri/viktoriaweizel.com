import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const IndexPage = () => {
  const head = () => (
    <Head>
      <title>Viktoria Weizel</title>
    </Head>
  );
  return (
    <Layout head={head}>
      <h1>Viktoria Weizel</h1>
      <p>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: GALLERY_QUERY,
//   });

//   return addApolloState(apolloClient, {
//     props: {},
//     revalidate: 60,
//   });
// }

export default IndexPage;
