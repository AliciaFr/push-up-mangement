import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="footer-item" href="/impressum">
        Impressum
      </Link>
      <Link className="footer-item" href="/datenschutzerklaerung">
        Datenschutzerklärung
      </Link>
    </div>
  );
};

export default Footer;
