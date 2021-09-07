import { useEffect, useRef } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Slider from "react-slick";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import GET_ALL_POSTS from "../graphql/queries/blog/getAllPosts.gql";
import GET_ALL_GALLERIES from "../graphql/queries/gallery/getAllGalleries.gql";
import COLLECTION_STATUS from "../consts/collectionStatus";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BlogCard from "../components/blog/BlogCard";
import { useTheme } from "../components/ThemeProvider";
import ETheme from "../enums/theme.enum";
import Image from "../components/Image";
import ArrowRightSmall from "../components/ArrowRightSmall";
import sliderSettings from "../consts/galleryTeaserSliderSettings";
import LinkWithIcon from "../components/LinkWithIcon";

const blogVariables = {
  status: COLLECTION_STATUS,
  limit: 4,
};

const galleryVariables = {
  status: COLLECTION_STATUS,
  limit: 4,
};

const IndexPage = ({ postsData, galleryData }) => {
  const { data: posts } = postsData;
  const { data: galleries } = galleryData;
  const { setTheme } = useTheme();
  const slider = useRef();

  const seoItem = {
    title: "Viktoria Weizel – Travel, Photography & Lifestyle",
    description: `
      I'm Viktoria Weizel a photographer/nurse/traveler based in Berlin.
      Get a glimpse of my travels and life in Berlin through galleries and blog posts.
      Follow me on instagram @viktoria_weizel
    `,
  };

  useEffect(() => {
    setTheme(ETheme.DARK);
  }, []);

  return (
    <Layout classNames="no-padding">
      <SEO title={seoItem.title} item={seoItem} type="website" url="/" />
      <Hero />
      <section className="section">
        <div className="container">
          <div className="row">
            <h2 className="section__title">Latest blog posts</h2>
          </div>
          <div className="row">
            {(posts?.posts || []).map(
              ({ id, title, subtitle, date_created, thumbnail, slug }) => {
                return (
                  <div className="col-12 col-md-12 col-lg-6 col-xl-6" key={id}>
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
          <div className="row">
            <div className="col-12">
              <LinkWithIcon title="See all posts" href="/blog">
                <ArrowRightSmall />
              </LinkWithIcon>
            </div>
          </div>
        </div>
      </section>
      <section className="section mb-5">
        <div className="container">
          <div className="row">
            <h2 className="section__title">Galleries</h2>
          </div>
        </div>
        <Slider {...sliderSettings} ref={slider}>
          {(galleries?.gallery || []).map(({ name, thumbnail, slug }) => (
            <div key={slug} className="gallery-teaser-slider__item">
              <Link href={`/gallery/${slug}`}>
                <a>
                  <div className="aspect-ratio-16x9 aspect-ratio--cover">
                    <Image image={thumbnail} alt={thumbnail.title} />
                    <h3 className="gallery-teaser-slider__item-title">
                      {name}
                    </h3>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </Slider>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const postsData = await apolloClient.query({
    query: GET_ALL_POSTS,
    variables: blogVariables,
  });

  const galleryData = await apolloClient.query({
    query: GET_ALL_GALLERIES,
    variables: galleryVariables,
  });

  return addApolloState(apolloClient, {
    props: {
      postsData,
      galleryData,
    },
    revalidate: 1,
  });
};

export default IndexPage;
