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

  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
    className: "gallery-teaser-slider",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        }
      },
    ]
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
            {(posts?.items?.posts || []).map(
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
              <Link href="/blog">
                <a>See all posts &#129042;</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <h2 className="section__title">Galleries</h2>
          </div>
        </div>
        <Slider {...sliderSettings} ref={slider}>
          {(galleries?.items?.gallery || []).map(({ name, thumbnail, slug }) => (
            <div key={slug} className="gallery-teaser-slider__item">
              <div className="aspect-ratio-16x9 aspect-ratio--cover">
                <Image image={thumbnail} alt={thumbnail.title} />
                <h3 className="gallery-teaser-slider__item-title">{name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {/* <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-12">
              <iframe
                src="https://open.spotify.com/embed/track/01D7nX5t321cgGgehXH0MU"
                width="100%"
                height="80"
                frameBorder="0"
                allowTransparency={true}
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}
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
