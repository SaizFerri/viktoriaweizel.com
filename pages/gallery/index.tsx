import React from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { gql, useQuery } from '@apollo/client';
import { initializeApollo, addApolloState } from '../../lib/apolloClient';

const GALLERIES_QUERY = gql`
  query {
    items {
      gallery {
        name
        slug
        thumbnail {
          id
        }
      }
    }
  }
`;

const GalleryPage: React.FC = () => {
  const { data } = useQuery(GALLERIES_QUERY);

  return (
    <div>
      <h1>Gallery page</h1>
      <ul>
        {(data?.items.gallery || []).map(({ slug, name }) => (
          <li key={name}>
            <Link href={`/gallery/${encodeURIComponent(slug)}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GALLERIES_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default GalleryPage;
