import Link from "next/link";
import React, { FunctionComponent } from "react";

const Hero: FunctionComponent<{}> = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <h1 className="hero__title">Hi, I'm Viktoria</h1>
            <h3 className="hero__subtitle">
              Passionate traveler <br /> & photographer.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Link href="/gallery">
              <a className="button--white">Gallery</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
