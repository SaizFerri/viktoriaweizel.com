import Layout from "../components/Layout";
import SEO from "../components/SEO";

const PrivacyPolicyPage = () => {
  const seoItem = {
    title: "Datenschutzerklärung",
    description: `
      I'm Viktoria Weizel a photographer/nurse/traveler based in Berlin.
      Get a glimpse of my travels and life in Berlin through galleries and blog posts.
      Follow me on instagram @viktoria_weizel
    `,
  };

  return (
    <Layout classNames="privacy-policy">
      <SEO
        title={seoItem.title}
        item={seoItem}
        type="website"
        url="/privacy-policy"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="mb-4">
              Datenschutz
              <wbr />
              erklärung
            </h1>
            <h3 className="mb-3">Grundlegendes</h3>
            <p className="mb-3">
              Diese Datenschutzerklärung soll die Nutzer dieser Website über die
              Art, den Umfang und den Zweck der Erhebung und Verwendung
              personenbezogener Daten durch die Websitebetreiberin Viktoria
              Weizel informieren.
            </p>
            <p className="mb-3">
              Die Websitebetreiberin nimmt Ihren Datenschutz sehr ernst und
              behandelt Ihre personenbezogenen Daten vertraulich und
              entsprechend der gesetzlichen Vorschriften. Da durch neue
              Technologien und die ständige Weiterentwicklung dieser Webseite
              Änderungen an dieser Datenschutzerklärung vorgenommen werden
              können, empfehlen wir Ihnen sich die Datenschutzerklärung in
              regelmäßigen Abständen wieder durchzulesen.
            </p>
            <p className="mb-3">
              Definitionen der verwendeten Begriffe (z.B. “personenbezogene
              Daten” oder “Verarbeitung”) finden Sie in Art. 4 DSGVO.
            </p>
            <h3 className="mb-3">Zugriffsdaten</h3>
            <p className="mb-3">
              Wir, die Websitebetreiberin bzw. Seitenprovider, erheben aufgrund
              unseres berechtigten Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO)
              Daten über Zugriffe auf die Website und speichern diese als
              „Server-Logfiles“ auf dem Server der Website ab. Folgende Daten
              werden so protokolliert:
            </p>
            <ul className="list mb-3">
              <li className="list__item">Besuchte Website</li>
              <li className="list__item">
                Uhrzeit zum Zeitpunkt des Zugriffes
              </li>
              <li className="list__item">Menge der gesendeten Daten in Byte</li>
              <li className="list__item">
                Quelle/Verweis, von welchem Sie auf die Seite gelangten
              </li>
              <li className="list__item">Verwendeter Browser</li>
              <li className="list__item">Verwendetes Betriebssystem</li>
            </ul>
            <p className="mb-3">
              Die Server-Logfiles werden für maximal 6 Monate gespeichert und
              anschließend gelöscht. Die Speicherung der Daten erfolgt aus
              Sicherheitsgründen, um z. B. Missbrauchsfälle aufklären zu können.
              Müssen Daten aus Beweisgründen aufgehoben werden, sind sie solange
              von der Löschung ausgenommen bis der Vorfall endgültig geklärt
              ist.
            </p>
            <h3 className="mb-3">Reichweitenmessung & Cookies</h3>
            <p className="mb-3">
              Diese Website verwendet Cookies zur pseudonymisierten
              Reichweitenmessung, die entweder von unserem Server oder dem
              Server Dritter an den Browser des Nutzers übertragen werden. Bei
              Cookies handelt es sich um kleine Dateien, welche auf Ihrem
              Endgerät gespeichert werden. Ihr Browser greift auf diese Dateien
              zu. Durch den Einsatz von Cookies erhöht sich die
              Benutzerfreundlichkeit und Sicherheit dieser Website.
            </p>
            <p className="mb-3">
              Falls Sie nicht möchten, dass Cookies zur Reichweitenmessung auf
              Ihrem Endgerät gespeichert werden, können Sie die Cookies über
              Ihren Browser löschen.
            </p>
            <p className="mb-3">
              Gängige Browser bieten die Einstellungsoption, Cookies nicht
              zuzulassen. Hinweis: Es ist nicht gewährleistet, dass Sie auf alle
              Funktionen dieser Website ohne Einschränkungen zugreifen können,
              wenn Sie entsprechende Einstellungen vornehmen.
            </p>
            <h3 className="mb-3">
              Erfassung und Verarbeitung personenbezogener Daten
            </h3>
            <p className="mb-3">
              Die Websitebetreiberin erhebt, nutzt und gibt Ihre
              personenbezogenen Daten nur dann weiter, wenn dies im gesetzlichen
              Rahmen erlaubt ist oder Sie in die Datenerhebung einwilligen.
            </p>
            <p className="mb-3">
              Als personenbezogene Daten gelten sämtliche Informationen, welche
              dazu dienen, Ihre Person zu bestimmen und welche zu Ihnen
              zurückverfolgt werden können – also beispielsweise Ihr Name, Ihre
              E-Mail-Adresse und Telefonnummer.
            </p>
            <p className="mb-3">
              Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer
              Person zu machen. Zur Verbesserung unseres Online-Angebotes
              speichern wir jedoch (ohne Personenbezug) Ihre Zugriffsdaten auf
              diese Website. Zu diesen Zugriffsdaten gehören z. B. die von Ihnen
              angeforderte Datei oder der Name Ihres Internet-Providers. Durch
              die Anonymisierung der Daten sind Rückschlüsse auf Ihre Person
              nicht möglich.
            </p>
            <h3 className="mb-3">Umgang mit Kontaktdaten</h3>
            <p className="mb-3">
              Nehmen Sie mit uns als Websitebetreiber durch die angebotenen
              Kontaktmöglichkeiten Verbindung auf, werden Ihre Angaben
              gespeichert, damit auf diese zur Bearbeitung und Beantwortung
              Ihrer Anfrage zurückgegriffen werden kann. Ihre Daten werden nicht
              an Dritte weitergegeben.
            </p>
            <h3 className="mb-3">Umgang mit Kommentaren und Beiträgen</h3>
            <p className="mb-3">
              Hinterlassen Sie auf dieser Website einen Beitrag oder Kommentar,
              wird Ihre IP-Adresse gespeichert. Dies erfolgt aufgrund unserer
              berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO
              und dient der Sicherheit von uns als Websitebetreiber: Denn sollte
              Ihr Kommentar gegen geltendes Recht verstoßen, können wir dafür
              belangt werden, weshalb wir ein Interesse an der Identität des
              Kommentar- bzw. Beitragsautors haben.
            </p>
            <h3 className="mb-3">Google Analytics</h3>
            <p className="mb-3">
              Diese Website nutzt aufgrund unserer berechtigten Interessen zur
              Optimierung und Analyse unseres Online-Angebots im Sinne des Art.
              6 Abs. 1 lit. f. DSGVO den Dienst „Google Analytics“, welcher von
              der Google Inc. (1600 Amphitheatre Parkway Mountain View, CA
              94043, USA) angeboten wird. Der Dienst (Google Analytics)
              verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät
              gespeichert werden. Die durch die Cookies gesammelten
              Informationen werden im Regelfall an einen Google-Server in den
              USA gesandt und dort gespeichert.
            </p>
            <p className="mb-3">
              Google LLC hält das europäische Datenschutzrecht ein und ist unter
              dem Privacy-Shield-Abkommen zertifiziert:{" "}
              <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
              </a>
            </p>
            <p className="mb-3">
              Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse
              der Nutzer wird innerhalb der Mitgliedsstaaten der EU und des
              Europäischen Wirtschaftsraum und in den anderen Vertragsstaaten
              des Abkommens gekürzt. Nur in Einzelfällen wird die IP-Adresse
              zunächst ungekürzt in die USA an einen Server von Google
              übertragen und dort gekürzt. Durch diese Kürzung entfällt der
              Personenbezug Ihrer IP-Adresse. Die vom Browser übermittelte
              IP-Adresse des Nutzers wird nicht mit anderen von Google
              gespeicherten Daten kombiniert.
            </p>
            <p className="mb-3">
              Im Rahmen der Vereinbarung zur Auftragsdatenvereinbarung, welche
              wir als Websitebetreiber mit der Google Inc. geschlossen haben,
              erstellt diese mithilfe der gesammelten Informationen eine
              Auswertung der Websitenutzung und der Websiteaktivität und
              erbringt mit der Internetnutzung verbundene Dienstleistungen.
            </p>
            <p className="mb-3">
              Die von Google in unserem Auftrag erhobenen Daten werden genutzt,
              um die Nutzung unseres Online-Angebots durch die einzelnen Nutzer
              auswerten zu können, z. B. um Reports über die Aktivität auf der
              Website zu erstellen, um unser Online-Angebot zu verbessern.
            </p>
            <p className="mb-3">
              Sie haben die Möglichkeit, die Speicherung der Cookies auf Ihrem
              Gerät zu verhindern, indem Sie in Ihrem Browser entsprechende
              Einstellungen vornehmen. Es ist nicht gewährleistet, dass Sie auf
              alle Funktionen dieser Website ohne Einschränkungen zugreifen
              können, wenn Ihr Browser keine Cookies zulässt.
            </p>
            <p className="mb-3">
              Weiterhin können Sie durch ein Browser-Plugin verhindern, dass die
              durch Cookies gesammelten Informationen (inklusive Ihrer
              IP-Adresse) an die Google Inc. gesendet und von der Google Inc.
              genutzt werden. Folgender Link führt Sie zu dem entsprechenden
              Plugin:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout?hl=de">
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>
            </p>
            <p className="mb-3">
              Alternativ verhindern Sie mit einem Klick auf diesen Link, dass
              Google Analytics innerhalb dieser Website Daten über Sie erfasst.
              Mit dem Klick auf obigen Link laden Sie ein „Opt-Out-Cookie“
              herunter. Ihr Browser muss die Speicherung von Cookies also hierzu
              grundsätzlich erlauben. Löschen Sie Ihre Cookies regelmäßig, ist
              ein erneuter Klick auf den Link bei jedem Besuch dieser Website
              vonnöten.
            </p>
            <p className="mb-3">
              Hier finden Sie weitere Informationen zur Datennutzung durch die
              Google Inc.:
            </p>
            <ul className="list mb-3">
              <li className="list__item">
                <a href="https://policies.google.com/privacy/partners?hl=de">
                  https://policies.google.com/privacy/partners?hl=de
                </a>{" "}
                (Daten, die von Google-Partnern erhoben werden)
              </li>
              <li className="list__item">
                <a href="https://adssettings.google.de/authenticated">
                  https://adssettings.google.de/authenticated
                </a>{" "}
                (Einstellungen über Werbung, die Ihnen angezeigt wird)
              </li>
              <li className="list__item">
                <a href="https://policies.google.com/technologies/ads?hl=de">
                  https://policies.google.com/technologies/ads?hl=de
                </a>{" "}
                (Verwendung von Cookies in Anzeigen)
              </li>
            </ul>
            <h3 className="mb-3">Newsletter-Abonnement</h3>
            <p className="mb-3">
              Die Websitebetreiberin bietet Ihnen einen Newsletter an, in
              welchem sie Sie über aktuelle Geschehnisse und Angebote
              informiert. Möchten Sie den Newsletter abonnieren, müssen Sie eine
              valide E-Mail-Adresse angeben. Wenn Sie den Newsletter abonnieren,
              erklären Sie sich mit dem Newsletter-Empfang und den erläuterten
              Verfahren einverstanden.
            </p>
            <p className="mb-3">
              Widerruf und Kündigung: Ihre Einwilligung zum Erhalt des
              Newsletter können Sie jederzeit widerrufen und somit das
              Newsletter-Abonnement kündigen. Nach Ihrer Kündigung erfolgt die
              Löschung Ihre personenbezogenen Daten. Ihre Einwilligung in den
              Newsletterversand erlischt gleichzeitig. Am Ende jedes Newsletters
              finden Sie den Link zur Kündigung.
            </p>
            <h3 className="mb-3">Rechte des Nutzers</h3>
            <p className="mb-3">
              Sie haben als Nutzer das Recht, auf Antrag eine kostenlose
              Auskunft darüber zu erhalten, welche personenbezogenen Daten über
              Sie gespeichert wurden. Sie haben außerdem das Recht auf
              Berichtigung falscher Daten und auf die Verarbeitungseinschränkung
              oder Löschung Ihrer personenbezogenen Daten. Falls zutreffend,
              können Sie auch Ihr Recht auf Datenportabilität geltend machen.
              Sollten Sie annehmen, dass Ihre Daten unrechtmäßig verarbeitet
              wurden, können Sie eine Beschwerde bei der zuständigen
              Aufsichtsbehörde einreichen.
            </p>
            <h3 className="mb-3">Löschung von Daten</h3>
            <p className="mb-3">
              Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur
              Aufbewahrung von Daten (z. B. Vorratsdatenspeicherung) kollidiert,
              haben Sie ein Anrecht auf Löschung Ihrer Daten. Von uns
              gespeicherte Daten werden, sollten sie für ihre Zweckbestimmung
              nicht mehr vonnöten sein und es keine gesetzlichen
              Aufbewahrungsfristen geben, gelöscht. Falls eine Löschung nicht
              durchgeführt werden kann, da die Daten für zulässige gesetzliche
              Zwecke erforderlich sind, erfolgt eine Einschränkung der
              Datenverarbeitung. In diesem Fall werden die Daten gesperrt und
              nicht für andere Zwecke verarbeitet.
            </p>
            <h3 className="mb-3">Widerspruchsrecht</h3>
            <p className="mb-3">
              Nutzer dieser Webseite können von ihrem Widerspruchsrecht Gebrauch
              machen und der Verarbeitung ihrer personenbezogenen Daten zu jeder
              Zeit widersprechen.
            </p>
            <p className="mb-3">
              Wenn Sie eine Berichtigung, Sperrung, Löschung oder Auskunft über
              die zu Ihrer Person gespeicherten personenbezogenen Daten wünschen
              oder Fragen bzgl. der Erhebung, Verarbeitung oder Verwendung Ihrer
              personenbezogenen Daten haben oder erteilte Einwilligungen
              widerrufen möchten, wenden Sie sich bitte an folgende
              E-Mail-Adresse:{" "}
              <a href="mailto:contact@viktoriaweizel.com">
                contact@viktoriaweizel.com
              </a>
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

export default PrivacyPolicyPage;
