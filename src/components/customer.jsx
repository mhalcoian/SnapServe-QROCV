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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const [cartItems, setCartItems] = useState({});

  const handleAdd = (item) => {
    setCartItems((prev) => ({
      ...prev,
      [item.name]: { ...item, quantity: 1 },
    }));
  };

  const handleIncrement = (item) => {
    setCartItems((prev) => ({
      ...prev,
      [item.name]: {
        ...item,
        quantity: prev[item.name].quantity + 1,
      },
    }));
  };

  const handleDecrement = (item) => {
    if (cartItems[item.name].quantity <= 1) {
      const newCart = { ...cartItems };
      delete newCart[item.name];
      setCartItems(newCart);
    } else {
      setCartItems((prev) => ({
        ...prev,
        [item.name]: {
          ...item,
          quantity: prev[item.name].quantity - 1,
        },
      }));
    }
  };

  const sectionComponents = [
    <PopularComponent
      cartItems={cartItems}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />,
    <AppetizersComponent
      cartItems={cartItems}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />,
    <Main_DishComponent
      cartItems={cartItems}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />,
    <DessertsComponent
      cartItems={cartItems}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />,
    <DrinksComponent
      cartItems={cartItems}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />,
  ];

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

        <h4>Table # 1</h4>
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

      {/* cart */}
      {Object.values(cartItems).reduce(
        (total, item) => total + item.quantity,
        0
      ) > 0 && (
        <div className="cart-bar">
          <span className="cart-icon material-symbols-outlined">
            shopping_cart
            <span className="cart-badge">
              {Object.values(cartItems).reduce(
                (total, item) => total + item.quantity,
                0
              )}
            </span>
          </span>
          <span className="cart-text">View cart</span>
          <span className="cart-price">
            ₱
            {Object.values(cartItems).reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            )}
            .00
          </span>
        </div>
      )}
    </>
  );
}

export default customer;
