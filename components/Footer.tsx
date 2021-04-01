import Link from "next/link";
import { FunctionComponent } from "react";
import { FaInstagram } from "react-icons/fa";

const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__legal">
          <small>&#169;&nbsp;Copyright {year} Viktoria Weizel&nbsp;| </small>
          <Link href="/impressum">
            <a>
              <small>Impressum</small>
            </a>
          </Link>
        </div>
        <ul className="footer__social-list">
          <li className="footer__social-list-item">
            <a
              href="https://www.instagram.com/viktoria_weizel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
