import { FunctionComponent } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import ETheme from "../enums/theme.enum";
import ThemeToggler from "./ThemeToggler";

const Navbar: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = (e) => {
    if (e.target.checked) {
      setTheme(ETheme.DARK);
      return;
    }

    setTheme(ETheme.LIGHT);
  };

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__logo">
          <Link href="/">
            <a>
              <img
                src={`${
                  theme === ETheme.LIGHT
                    ? "/images/logo.svg"
                    : "/images/logo_nightmode.svg"
                }`}
                alt="Logo"
              />
            </a>
          </Link>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li className="navbar__menu-item">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="navbar__menu-item">
            <ThemeToggler onToggle={changeTheme} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
