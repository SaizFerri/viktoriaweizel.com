import { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import ETheme from "../enums/theme.enum";
import ThemeToggler from "./ThemeToggler";
import { useRouter } from "next/router";

const Navbar: FunctionComponent = () => {
  const [isNotTop, setIsNotTop] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const isHome = router.route === "/";

  const changeTheme = (e) => {
    if (e.target.checked) {
      setTheme(ETheme.DARK);
      return;
    }

    setTheme(ETheme.LIGHT);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNotTop(() => true);
      return;
    }

    setIsNotTop(() => false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav className={`navbar ${isHome ? "ignore-theme" : ""} ${isNotTop ? "has-background" : ""}`}>
      <div className="navbar__content">
        <div className="navbar__logo">
          <Link href="/">
            <a>
              <img
                src={`${
                  theme === ETheme.LIGHT && !isHome
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
          {!isHome && (
            <li className="navbar__menu-item">
              <ThemeToggler onToggle={changeTheme} />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
