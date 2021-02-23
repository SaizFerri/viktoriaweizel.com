import React from 'react';

interface IImage {
  id: string;
  alt: string;
  classNames?: string;
}

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

// const IMAGE_QUERY_BY_ID = gql`
//   query($id: ID) {
//     files(filter: { id: { _eq: $id } }) {
//       id
//       tags
//       width
//       height
//     }
//   }
// `;

const CMSImage: React.FC<IImage> = ({ id, alt, classNames }) => {
  // const { loading, data, error } = useQuery(IMAGE_QUERY_BY_ID, {
  //   variables: { id },
  // });

  return <img src={`${DIRECTUS_URL}/assets/${id}`} alt={alt} className={classNames} />;
};

export default CMSImage;
