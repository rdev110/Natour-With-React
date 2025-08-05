import React from "react";
import PropTypes from "prop-types";

const defaultImages = [
  {
    src: "img/nat-1-large.jpg",
    alt: "Mountain landscape with sunrise",
    modifierClass: "composition__photo--p1",
  },
  {
    src: "img/nat-2-large.jpg",
    alt: "Forest and river view",
    modifierClass: "composition__photo--p2",
  },
  {
    src: "img/nat-3-large.jpg",
    alt: "Hiker overlooking valley",
    modifierClass: "composition__photo--p3",
  },
];

const About = ({
  title = "Exciting tours for adventurous people",
  sections = [
    {
      heading: "You're going to fall in love with nature",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      heading: "Live adventures like you have never before",
      body: "It is a long established fact that a reader will be distracted by the readable content...",
    },
  ],
  ctaText = "Learn more →",
  ctaHref = "#tours", // by default scroll to tours section
  images = defaultImages,
}) => {
  const handleCtaClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(ctaHref);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="section-about"
      aria-label="About adventurous tours"
    >
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">{title}</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          {sections.map((sec, idx) => (
            <div key={idx} style={{ marginBottom: "1.5rem" }}>
              <h3 className="heading-tertiary u-margin-bottom-small">
                {sec.heading}
              </h3>
              <p className="paragraph">{sec.body}</p>
            </div>
          ))}

          <a
            href={ctaHref}
            className="btn-text"
            aria-label={ctaText}
            onClick={handleCtaClick}
          >
            {ctaText}
          </a>
        </div>

        <div className="col-1-of-2">
          <div className="composition" aria-label="Photo composition">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`composition__photo ${img.modifierClass}`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  title: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      modifierClass: PropTypes.string,
    })
  ),
};

export default About;
