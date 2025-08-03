const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="img/logo-white.png" alt="logo" className="header__logo"></img>
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">OUT DOORS</span>
          <span className="heading-primary--sub">Is where life happens</span>
        </h1>
        <a href="http" className="btn btn--white btn--animated">
          DISCOVER OUR TOURS
        </a>
      </div>
    </header>
  );
};

export default Header;
