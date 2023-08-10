import { titleFont } from "../utils/fonts";

const Contact = () => {
  return (
    <div className="section-container">
      <section>
        <h3 className={titleFont.className}>Kontakt</h3>
        <p className="contact-line">Annette Wallner</p>
        <p className="contact-line">Telefon 08753 9672858</p>
        <p className="contact-line">Mobil 0171 8135785 </p>
        <p className="contact-line">
          <a href="mailto:drummer2504@gmail.com" className="email-link">
            drummer2504@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Contact;
