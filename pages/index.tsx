import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => {
  const seoItem = {
    title: "Viktoria Weizel – Travel, Photography & Lifestyle",
    description: `
      I'm Viktoria Weizel a photographer/nurse/traveler based in Berlin.
      Get a glimpse of my travels and life in Berlin through galleries and blog posts.
      Follow me on instagram @viktoria_weizel
    `,
  };

  return (
    <Layout>
      <SEO title={seoItem.title} item={seoItem} type="website" url="/" />
      <div className="container">
        <h1>Viktoria Weizel</h1>
        <p>
          Check out my&nbsp;
          <Link href="/gallery">
            <a>gallery&nbsp;</a>
          </Link>
          and my&nbsp;
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default IndexPage;
