import ParagraphImage from "./Image";
import { titleFont } from "../utils/fonts";

const Services = () => {
  return (
    <div className="section-container">
      <section>
        <h3 className={titleFont.className}>Unsere Leistungen</h3>
        <ParagraphImage
          src="/image-me.jpg"
          alt="Dominik Hülshorst spielt leidenschaftlich am Schlagzeug"
          className="paragraph-image"
          size={`(max-width: 768px) 100vw, (max-width: 1200px) 60vw`}
        />
        <div className="service">
          <span className="sub-heading">
            Vermittlung von Musiker und Bands aus dem Rock- und Popbereich
          </span>
          <br />
          <p>
            Sie nennen uns Ihr Event und wir finden die passenden Musiker.{" "}
            <br />
            Spielen Sie selbst in einer Band und es fällt ein Bandmitglied aus,
            helfen wir gerne mit einem Sub weiter.
          </p>
        </div>
        <ParagraphImage
          src="/image3.jpeg"
          alt="Buch Cover des Buches The Beat von Dominik Hülshorst"
          className="paragraph-image"
        />
        <div className="service">
          <span className="sub-heading">
            Sollten Sie als Buchautor eine Veröffentlichung planen unterstützen
            wir Sie gerne
          </span>
          <br />
          <p>
            Das Manuskript wird von uns gesichtet, in Form gebracht und an
            Verlagsagenturen zur Ansicht geschickt.
            <br />
            Auch die Vorbereitung zur Selbstvermarktung Ihres Buches können wir
            für Sie erledigen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
