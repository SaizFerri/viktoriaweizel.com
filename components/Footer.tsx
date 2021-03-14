import { FunctionComponent } from "react";
import { FaInstagram } from "react-icons/fa";

const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <small>&#169;&nbsp;Copyright {year} Viktoria Weizel</small>
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
