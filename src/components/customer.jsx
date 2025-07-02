import { useState, useRef, useEffect } from "react";
import PopularComponent from "./sections/popular";
import AppetizersComponent from "./sections/appetizers";
import Main_DishComponent from "./sections/main_dish";
import DessertsComponent from "./sections/desserts";
import DrinksComponent from "./sections/drinks";
import logo from "/images.png";

function customer() {
  const navItems = [
    <span className="navbar-category" key="popular">
      <img src={logo} alt="logo" style={{ height: "20px" }} />
      Popular
    </span>,
    <span className="navbar-category" key="appetizers">
      <img src={logo} alt="logo" style={{ height: "20px" }} />
      Appetizers
    </span>,
    <span className="navbar-category" key="main_dish">
      <img src={logo} alt="logo" style={{ height: "20px" }} />
      Main Dish
    </span>,
    <span className="navbar-category" key="desserts">
      <img src={logo} alt="logo" style={{ height: "20px" }} />
      Desserts
    </span>,
    <span className="navbar-category" key="drinks">
      <img src={logo} alt="logo" style={{ height: "20px" }} />
      Drinks
    </span>,
  ];

  const sectionComponents = [
    <PopularComponent />,
    <AppetizersComponent />,
    <Main_DishComponent />,
    <DessertsComponent />,
    <DrinksComponent />,
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  // change indicator effect
  useEffect(() => {
    const currentActiveEl = navRef.current[activeIndex];
    if (currentActiveEl) {
      setIndicatorStyle({
        left: currentActiveEl.offsetLeft,
        width: currentActiveEl.offsetWidth,
      });
    }
  }, [activeIndex]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      <header className="header">
        <img className="headerLogo" src={logo} alt="logo" />
        {/* burger menu */}
        <button
          className="open-btn material-symbols-outlined"
          onClick={() => setIsMenuOpen(true)}
        >
          menu
        </button>
      </header>

      {/* language */}
      <section className="section-1">
        <div className="lang-dropdown">
          <button className="lang-button" onClick={() => setIsOpen(!isOpen)}>
            🌐 {language} ▼
          </button>

          {isOpen && (
            <div className="lang-menu">
              {["EN", "KR"].map((lang) => (
                <div
                  key={lang}
                  className="lang-option"
                  onClick={() => changeLanguage(lang)}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>

        <h4>table-number</h4>
      </section>

      {/* navigation */}
      <nav className="navbar-container">
        <div className="navbar">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${index === activeIndex ? "active" : ""}`}
              ref={(el) => (navRef.current[index] = el)}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </div>
          ))}
          <div className="nav-indicator" style={indicatorStyle} />
        </div>
      </nav>

      {/* menu content */}
      {sectionComponents[activeIndex]}

      {/* transparent screen overlay */}
      {isOpen && (
        <div
          className="transparent-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* screen overlay */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* slidebar/flyout */}
      <div className={`slide-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
          {"<"}
        </button>
        <h2>What can I do for you?</h2>
      </div>
    </>
  );
}

export default customer;
