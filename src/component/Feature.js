import React from "react";
import PropTypes from "prop-types";

const defaultFeatures = [
  {
    iconClass: "icon-basic-world",
    title: "Explore the world",
    text: "It is a long established fact that a reader will be distracted by",
  },
  {
    iconClass: "icon-basic-compass",
    title: "Meet Nature",
    text: "It is a long established fact that a reader will be distracted by",
  },
  {
    iconClass: "icon-basic-map",
    title: "Find Your Way",
    text: "It is a long established fact that a reader will be distracted by",
  },
  {
    iconClass: "icon-basic-heart",
    title: "Live a healthier life",
    text: "It is a long established fact that a reader will be distracted by",
  },
];

const Feature = ({ features = defaultFeatures }) => {
  return (
    <section className="section-features" aria-label="Features">
      <div className="row">
        {features.map((f, i) => (
          <div className="col-1-of-4" key={i}>
            <div className="feature-box">
              <i className={`feature-box__icon ${f.iconClass}`}></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                {f.title}
              </h3>
              <p className="feature-box__text">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Feature.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      iconClass: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default Feature;
