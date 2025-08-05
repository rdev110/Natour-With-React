import React from "react";
import PropTypes from "prop-types";

const defaultTours = [
  {
    id: "sea-explorer",
    name: "The Sea Explorer",
    duration: "3 day tours",
    capacity: "Up to 30 people",
    guides: "2 tour guides",
    stay: "sleep in cozy hotels",
    difficulty: "easy",
    price: "$297",
    pictureClass: "card__picture--1",
    backClass: "card__side--back-1",
    ctaHref: "#book", // scroll to booking section
  },
  {
    id: "forest-hiker",
    name: "The Forest Hiker",
    duration: "7 day tours",
    capacity: "Up to 40 people",
    guides: "6 tour guides",
    stay: "sleep in provided tents",
    difficulty: "medium",
    price: "$497",
    pictureClass: "card__picture--2",
    backClass: "card__side--back-2",
    ctaHref: "#book",
  },
  {
    id: "snow-adventurer",
    name: "The Snow Adventurer",
    duration: "5 day tours",
    capacity: "Up to 15 people",
    guides: "3 tour guides",
    stay: "sleep in provided tents",
    difficulty: "hard",
    price: "$897",
    pictureClass: "card__picture--3",
    backClass: "card__side--back-3",
    ctaHref: "#book",
  },
];

const TourCard = ({ tour }) => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture ${tour.pictureClass}`}></div>
          <h4 className="card__heading">
            <span
              className={`card__heading-span ${`card__heading-span--${
                tour.id.split("-")[0]
              }`}`}
            >
              {tour.name}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>{tour.duration}</li>
              <li>{tour.capacity}</li>
              <li>{tour.guides}</li>
              <li>{tour.stay}</li>
              <li>Difficulty: {tour.difficulty}</li>
            </ul>
          </div>
        </div>
        <div className={`card__side card__side--back ${tour.backClass}`}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">{tour.price}</p>
            </div>
            <a
              href={tour.ctaHref}
              className="btn btn--white"
              onClick={(e) => handleScroll(e, tour.ctaHref)}
            >
              Book now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    guides: PropTypes.string.isRequired,
    stay: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    pictureClass: PropTypes.string.isRequired,
    backClass: PropTypes.string.isRequired,
    ctaHref: PropTypes.string,
  }).isRequired,
};

const Tours = ({
  title = "Most Popular Tours",
  tours = defaultTours,
  discoverHref = "#book", // default: scroll to booking
  discoverText = "Discover all tours",
}) => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tours" className="section-tours" aria-label="Popular tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">{title}</h2>
      </div>
      <div className="row">
        {tours.map((t) => (
          <TourCard key={t.id} tour={t} />
        ))}
      </div>
      <div className="u-margin-top-huge u-center-text">
        <a
          href={discoverHref}
          className="btn btn--green"
          onClick={(e) => handleScroll(e, discoverHref)}
        >
          {discoverText}
        </a>
      </div>
    </section>
  );
};

Tours.propTypes = {
  title: PropTypes.string,
  tours: PropTypes.arrayOf(TourCard.propTypes.tour),
  discoverHref: PropTypes.string,
  discoverText: PropTypes.string,
};

export default Tours;
