import Link from 'next/link';

const IndexPage = () => {
  return (
    <>
      <h1>Viktoria Weizel</h1>
      <p>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
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
