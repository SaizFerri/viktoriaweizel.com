import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ImpressumPage = () => {
  const seoItem = {
    title: "Impressum",
    description: `
      I'm Viktoria Weizel a photographer/nurse/traveler based in Berlin.
      Get a glimpse of my travels and life in Berlin through galleries and blog posts.
      Follow me on instagram @viktoria_weizel
    `,
  };

  return (
    <Layout>
      <SEO
        title={seoItem.title}
        item={seoItem}
        type="website"
        url="/impressum"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="mb-4">Impressum</h1>
            <p>Die folgenden Angaben entsprechen den Vorgaben von § 5 TMG:</p>
            <br />
            <p>Viktoria Weizel</p>
            <br />
            <p>Kontaktdaten:</p>
            <br />
            <div>
              <p>
                Telefon: <a href="tel:+4915206133837">+49 (0) 15206133837</a>
              </p>
            </div>
            <div>
              <p>
                E-Mail-Adresse:{" "}
                <a href="mailto:contact@viktoriaweizel.com">
                  contact@viktoriaweizel.com
                </a>
              </p>
            </div>
            <br />
            <p>Haftung für Inhalte:</p>
            <br />
            <p>
              Im Sinne von § 7 Absatz 1 TMG sind wir für die eigenen Inhalte auf
              dieser Webseite verantwortlich. Durch §§ 8 bis einschließlich 10
              TMG sind wir aber nicht verpflichtet, gespeicherte oder
              übermittelte fremde Inhalte zu überwachen oder diese auf
              Rechtswidrigkeit zu prüfen. Das befreit uns jedoch nicht von der
              Pflicht, der Sperrung und Entfernung von Informationen nach
              geltenden Gesetzen nachzukommen.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default ImpressumPage;
