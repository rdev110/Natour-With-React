import React from "react";

const navItems = [
  { href: "#about", label: "About Natours" },
  { href: "#benefits", label: "Your benefits" },
  { href: "#tours", label: "Popular tours" },
  // { href: "#stories", label: "Stories" },
  { href: "#book", label: "Book now" },
];

const Navigation = () => {
  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile nav
    const toggle = document.getElementById("navi-toggle");
    if (toggle) toggle.checked = false;
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        aria-label="Toggle navigation"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav" aria-label="Main navigation">
        <ul className="navigation__list">
          {navItems.map((item, idx) => (
            <li className="navigation__item" key={item.href}>
              <a
                href={item.href}
                className="navigation__link"
                onClick={(e) => handleClick(e, item.href)}
              >
                <span>{String(idx + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
