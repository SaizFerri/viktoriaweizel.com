import React, { FunctionComponent } from "react";
import Link from "next/link";

const Navbar: FunctionComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__logo">
          <Link href="/">
            <a>
              <img src="/images/vk-logo.svg" alt="Logo" />
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
