import React, { FunctionComponent } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import Masonry from "../../components/Masonry";
import Image from "../../components/Image";
import GET_GALLERY_BY_SLUG from "../../graphql/queries/gallery/getGalleryBySlug.gql";
import GET_ALL_GALLERY_SLUGS from "../../graphql/queries/gallery/getAllSlugs.gql";
import SEO from "../../components/SEO";
import IGalleryItem from "../../interfaces/galleryItem.interface";
import COLLECTION_STATUS from "../../consts/collectionStatus";

interface GalleryItemPageProps {
  gallery: IGalleryItem;
}

const GalleryItemPage: FunctionComponent<GalleryItemPageProps> = ({
  gallery,
}) => {
  const router = useRouter();

  if (!gallery) {
    return <h1>Not found...</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const seoItem = {
    title: gallery.name,
    description: gallery.description,
    tags: gallery.tags,
  };

  return (
    <Layout>
      <SEO
        title={gallery.name}
        item={seoItem}
        thumbnail={gallery.thumbnail}
        type="article"
        url={`/gallery/${gallery.slug}`}
      />
      <div className="container">
        <div className="gallery-page">
          <h1 className="gallery-page__title">{gallery.name}</h1>
          <p className="gallery-page__description">{gallery.description}</p>
          <Masonry withLightbox>
            {(gallery.images || []).map(({ image }) => (
              <Image
                key={image.id}
                image={image}
                alt={image?.title || "Gallery image"}
                classNames="cursor-pointer bg-color-grey"
              />
            ))}
          </Masonry>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_ALL_GALLERY_SLUGS,
    variables: {
      status: COLLECTION_STATUS,
    },
  });

  return {
    paths: data.items.gallery.map((gallery) => ({
      params: { slug: gallery.slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_GALLERY_BY_SLUG,
    variables: { slug: params?.slug },
  });

  return addApolloState(apolloClient, {
    props: {
      gallery: data.items.gallery[0] || false,
    },
    revalidate: 1,
  });
};

export default GalleryItemPage;
