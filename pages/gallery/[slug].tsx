import React from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { gql, useQuery } from '@apollo/client';
import { initializeApollo, addApolloState } from '../../lib/apolloClient';
import { useRouter } from 'next/router';
import CMSImage from '../../components/CMSImage';

// const GALLERIES_ID_QUERY = gql`
//   query {
//     items {
//       gallery {
//         slug
//       }
//     }
//   }
// `;

const GALLERY_QUERY = gql`
  query($slug: String) {
    items {
      gallery(filter: { slug: { _eq: $slug } }) {
        id
        name
        description
        slug
        thumbnail {
          id
        }
        images {
          directus_files_id {
            id
          }
        }
        tags
      }
    }
  }
`;

const GalleryItemPage: React.FC = () => {
  const router = useRouter();
  const { error, data } = useQuery(GALLERY_QUERY, {
    variables: { slug: router.query.slug },
  });

  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }

  const [item] = data?.items?.gallery;

  return (
    <div>
      <Link href="/gallery">
        <a>Go back</a>
      </Link>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <CMSImage id={item.thumbnail.id} alt={item.name} />
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const apolloClient = initializeApollo();

//   const { data } = await apolloClient.query({
//     query: GALLERIES_ID_QUERY,
//   });

//   const paths = data.items.gallery.map(({ slug }: any) => ({
//     params: { slug },
//   }));

//   return { paths, fallback: false };
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GALLERY_QUERY,
    variables: { slug: params?.slug },
  });
  return addApolloState(apolloClient, {
    props: {},
  });
};

export default GalleryItemPage;
