import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

import { textFont } from "../utils/fonts";

export default function Imprint() {
  return (
    <div className="page">
      <Link className="back-arrow" href="/">
        <FiArrowLeft /> Zurück
      </Link>
      <div className={`${textFont.className} privacy-notice-imprint`}>
        <h1>Impressum</h1>
        <h2>Verantwortliche i.S.d. § 55 Abs. 2 RStV:</h2>
        <p>Annette Wallner</p>
        <div>
          <p className="contact-line">Höhenweg 7</p>
          <p className="contact-line">84091 Walkertshofen</p>
          <p className="contact-line">08753 9672858</p>
          <p className="contact-line">0171 8135785</p>
          <p className="contact-line">annette.wallner@t-online.de</p>
        </div>
        <h2>Haftungsausschluss</h2>
        <div>
          <h3>1. Inhalt des Onlineangebots</h3>
          <p>
            Der Autor übernimmt keinerlei Gewähr für die Aktualität,
            Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
            Informationen. Haftungsansprüche gegen den Autor, welche sich auf
            Schäden materieller oder ideeller Art beziehen, die durch die
            Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch
            die Nutzung fehlerhafter und unvollständiger Informationen
            verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens
            des Autors kein nachweislich vorsätzliches oder grob fahrlässiges
            Verschulden vorliegt. Alle Angebote sind freibleibend und
            unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der
            Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu
            verändern, zu ergänzen, zu löschen oder die Veröffentlichung
            zeitweise oder endgültig einzustellen.
          </p>
        </div>
        <div>
          <h3>2. Verweise und Links</h3>
          <p>
            Bei direkten oder indirekten Verweisen auf fremde Webseiten
            (Hyperlinks), die außerhalb des Verantwortungsbereiches des Autors
            liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall
            in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und
            es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle
            rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit
            ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen
            Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die
            aktuelle und zukünftige Gestaltung, die Inhalte oder die
            Urheberschaft der verlinkten/verknüpften Seiten hat der Autor
            keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich
            von allen Inhalten aller verlinkten /verknüpften Seiten, die nach
            der Linksetzung verändert wurden. Diese Feststellung gilt für alle
            innerhalb des eigenen Internetangebotes gesetzten Links und Verweise
            sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern,
            Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen
            anderen Formen von Datenbanken, auf deren Inhalt externe
            Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder
            unvollständige Inhalte und insbesondere für Schäden, die aus der
            Nutzung oder Nichtnutzung solcherart dargebotener Informationen
            entstehen, haftet allein der Anbieter der Seite, auf welche
            verwiesen wurde, nicht derjenige, der über Links auf die jeweilige
            Veröffentlichung lediglich verweist.
          </p>
        </div>
        <div>
          <h3>3. Urheber- und Kennzeichenrecht</h3>
          <p>
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
            verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu
            beachten, von ihm selbst erstellte Grafiken, Tondokumente,
            Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken,
            Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle
            innerhalb des Internetangebotes genannten und ggf. durch Dritte
            geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den
            Bestimmungen des jeweils gültigen Kennzeichenrechts und den
            Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein
            aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass
            Markenzeichen nicht durch Rechte Dritter geschützt sind! Das
            Copyright für veröffentlichte, vom Autor selbst erstellte Objekte
            bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder
            Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte
            in anderen elektronischen oder gedruckten Publikationen ist ohne
            ausdrückliche Zustimmung des Autors nicht gestattet.
          </p>
        </div>
      </div>
    </div>
  );
}
