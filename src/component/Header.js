import React from "react";
import PropTypes from "prop-types";

const Header = ({
  logoSrc = "img/logo-white.png",
  logoAlt = "logo",
  mainTitle = "OUT DOORS",
  subTitle = "Is where life happens",
  ctaText = "DISCOVER OUR TOURS",
  ctaHref = "#",
}) => {
  return (
    <header className="header" aria-label="Hero section">
      <div className="header__logo-box">
        <img
          src={logoSrc}
          alt={logoAlt}
          className="header__logo"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">{mainTitle}</span>
          <span className="heading-primary--sub">{subTitle}</span>
        </h1>
        <a
          href={ctaHref}
          className="btn btn--white btn--animated"
          aria-label={ctaText}
        >
          {ctaText}
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
};

export default Header;
