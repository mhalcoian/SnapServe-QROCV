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
  const [isCardOpenModal, setIsCardOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState();
  const [showToast, setShowToast] = useState(false);
  const [isCartItems, setIsCartItems] = useState(false);
  const [isCartListItems, setIsCartListItems] = useState(false);

  const [requestItems, setRequestItems] = useState({});

  const handleCardModalOpen = (item) => {
    const quantityInCart = cartItems[item.name]?.quantity || 0;
    setModalItem({
      ...item,
      quantity: quantityInCart,
    });
    setIsCardOpenModal(true);
  };

  const handleCardModalClose = () => {
    setIsCardOpenModal(false);
    setModalItem(null);
  };

  const handleAdd = (item) => {
    setCartItems((prev) => ({
      ...prev,
      [item.name]: { ...item, quantity: 1 },
    }));
  };

  const handleIncrement = (item) => {
    if (cartItems[item.name].quantity < 20) {
      setCartItems((prev) => ({
        ...prev,
        [item.name]: {
          ...item,
          quantity: prev[item.name].quantity + 1,
        },
      }));
    } else {
      setShowToast(true); // error handler
      setTimeout(() => setShowToast(false), 3000); // hide after 3 seconds
    }
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

  const handleRequestIncrement = (title) => {
    setRequestItems((requestQuantity) => ({
      ...requestQuantity,
      [title]: {
        ...title,
        quantity: (requestQuantity[title]?.quantity || 0) + 1,
      },
    }));
  };

  const handleRequestDecrement = (title) => {
    if (requestItems[title]?.quantity > 0) {
      setRequestItems((requestQuantity) => ({
        ...requestQuantity,
        [title]: {
          ...title,
          quantity: (requestQuantity[title]?.quantity || 0) - 1,
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
      onOpenCardModal={handleCardModalOpen}
    />,
    <AppetizersComponent
      cartItems={cartItems}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOpenCardModal={handleCardModalOpen}
    />,
    <Main_DishComponent
      cartItems={cartItems}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOpenCardModal={handleCardModalOpen}
    />,
    <DessertsComponent
      cartItems={cartItems}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOpenCardModal={handleCardModalOpen}
    />,
    <DrinksComponent
      cartItems={cartItems}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOpenCardModal={handleCardModalOpen}
    />,
  ];

  // update modal quantity
  useEffect(() => {
    if (modalItem) {
      const updatedQuantity = cartItems[modalItem.name]?.quantity || 0;
      setModalItem((prev) => ({
        ...prev,
        quantity: updatedQuantity,
      }));
    }
  }, [cartItems]);

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

  // show cart items
  useEffect(() => {
    const hasItems =
      Object.values(cartItems).reduce(
        (total, item) => total + item.quantity,
        0
      ) > 0;

    setIsCartItems(hasItems);
  }, [cartItems]);

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

        <h4>Dine - In</h4>

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

      {/* main content */}
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
        <div className="slider-menu-header">
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            {"<"}
          </button>
          <h3>What can I do for you?</h3>
        </div>

        {/* request */}
        <div className="slider-menu-content">
          {/* utensils */}
          {["Spoon and Fork", "Spoon", "Fork", "Water"].map((title, i) => (
            <>
              <div className="request-form" key={i}>
                <div className="request-title">
                  {i < 3 ? (
                    <span class="material-symbols-outlined">fork_spoon</span>
                  ) : (
                    <span class="material-symbols-outlined">local_drink</span>
                  )}
                  <h3>{title}</h3>
                </div>
                <div className="request-content">
                  <div>
                    <button onClick={() => handleRequestDecrement(title)}>
                      -
                    </button>
                    <span>{requestItems[title]?.quantity || 0}</span>
                    <button onClick={() => handleRequestIncrement(title)}>
                      +
                    </button>
                  </div>

                  <button className="request-submit">Request</button>
                </div>
              </div>
            </>
          ))}

          {/* view orders */}
          <div className="view-orders">
            <div className="view-order-content">
              <div className="view-order-title">
                <span class="material-symbols-outlined">receipt</span>
                <h3>My Orders</h3>
              </div>

              <button className="btn-view-orders">View</button>
            </div>
          </div>

          {/* note */}
          <div className="request-note">
            <div className="note-label">
              <textarea id="note" placeholder=" " />
              <label htmlFor="note" className="note">
                Note
              </label>
            </div>
            <button className="btn-note-request">
              <span class="material-symbols-outlined">send</span>Request
            </button>
          </div>
        </div>
      </div>

      {/* toast */}
      <div>
        <div className={`toast ${showToast ? "open" : "close"}`}>
          <span className="icon">?</span>
          <span>Cannot exceed maximum quantity of 20.</span>
        </div>
      </div>

      {/* cart list items/ panel */}
      <div className={`cart-modal ${isCartListItems ? "open" : ""}`}>
        <div className="cart-header">
          <div className="header-cart-title">
            <h3 className="cart-title">Cart</h3>
          </div>
          <button
            className="close-btn"
            onClick={() => setIsCartListItems(false)}
          >
            ✕
          </button>
        </div>

        <div className="cart-body">
          {Object.values(cartItems).map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.logo} alt={item.name} className="item-image" />
              <div className="item-details">
                <div className="item-name">{item.name}</div>
                <div className="item-price">₱{item.price.toFixed(2)}</div>
              </div>
              <div className="item-controls">
                {item.quantity > 1 ? (
                  <button
                    className="control-btn subtract"
                    onClick={() => handleDecrement(item)}
                  >
                    −
                  </button>
                ) : (
                  <button
                    className="control-btn trash material-symbols-outlined"
                    onClick={() => handleDecrement(item)}
                  >
                    delete
                  </button>
                )}
                <div className="quantity-box">{item.quantity}</div>
                <button
                  className="control-btn add"
                  onClick={() => handleIncrement(item)}
                >
                  ＋
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <button
            className="add-more-btn"
            onClick={() => setIsCartListItems(false)}
          >
            Add More Items
          </button>
          <button className="place-order-btn">
            Place Order
            <span>
              ₱
              {Object.values(cartItems).reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
              .00
            </span>
          </button>
        </div>
      </div>

      {/* cart item list overlay */}
      {isCartListItems && (
        <div
          className="overlay"
          onClick={() => setIsCartListItems(false)}
        ></div>
      )}

      {/* cart */}
      <div
        className={`cart-bar ${isCartItems ? "show" : ""}`}
        onClick={() => setIsCartListItems(true)}
      >
        <div className="cart-icon material-symbols-outlined">
          shopping_cart
          <span className="cart-badge">
            {Object.values(cartItems).reduce(
              (total, item) => total + item.quantity,
              0
            )}
          </span>
        </div>
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

      {/* modal */}
      {isCardOpenModal && modalItem && (
        <div className={`modal-content ${isCardOpenModal ? "show" : ""}`}>
          <img
            className="modal-image"
            src={modalItem.logo}
            alt={modalItem.name}
          />
          <div className="menu-overlay modal-button-group">
            {modalItem.quantity === 0 ? (
              <button onClick={() => handleAdd(modalItem)}>+</button>
            ) : modalItem.quantity === 1 ? (
              <>
                <button
                  className="material-symbols-outlined"
                  onClick={() => handleDecrement(modalItem)}
                >
                  delete
                </button>
                <span>{modalItem.quantity}</span>
                <button onClick={() => handleIncrement(modalItem)}>+</button>
              </>
            ) : (
              <>
                <button onClick={() => handleDecrement(modalItem)}>-</button>
                <span>{modalItem.quantity}</span>
                <button onClick={() => handleIncrement(modalItem)}>+</button>
              </>
            )}
          </div>

          <div className="modal-footer">
            <p className="modal-description">{modalItem.description}</p>
            <p className="modal-price">
              ₱{modalItem.price.toLocaleString()}.00
            </p>
          </div>
        </div>
      )}

      {/* modal overlay */}
      {isCardOpenModal && (
        <div
          className="overlay"
          onClick={() => handleCardModalClose(false)}
        ></div>
      )}
    </>
  );
}

export default customer;
