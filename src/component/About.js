const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exiciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you have never before
          </h3>
          <p className="paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
          <a href="http:" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="img/nat-1-large.jpg"
              alt="photo1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="img/nat-2-large.jpg"
              alt="photo2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="img/nat-3-large.jpg"
              alt="photo3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
