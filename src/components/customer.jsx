import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import api from "../api";
import PopularComponent from "./sections/popular";
import AppetizersComponent from "./sections/appetizers";
import Main_DishComponent from "./sections/main_dish";
import DessertsComponent from "./sections/desserts";
import DrinksComponent from "./sections/drinks";

function customer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState({});
  const [isCardOpenModal, setIsCardOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState();
  const [showToast, setShowToast] = useState(false);
  const [isCartItems, setIsCartItems] = useState(false);
  const [isCartListItems, setIsCartListItems] = useState(false);

  const [requestItems, setRequestItems] = useState({});

  const [logo, setLogo] = useState("");
  const [navItems, setNavItems] = useState([]);

  const [isViewOrders, setIsViewOrders] = useState(false);
  const [orders, setOrders] = useState([]);
  const [expandedOrders, setExpandedOrders] = useState([]);

  const handleCardModalOpen = (item) => {
    const quantityInCart = productQuantity[item.id]?.quantity || 0;
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
    setProductQuantity((prev) => ({
      ...prev,
      [item.id]: { ...item, quantity: 1 },
    }));
  };

  const handleIncrement = (item) => {
    if (productQuantity[item.id].quantity < 20) {
      setProductQuantity((prev) => ({
        ...prev,
        [item.id]: {
          ...item,
          quantity: prev[item.id].quantity + 1,
        },
      }));
    } else {
      setShowToast(true); // error handler
      setTimeout(() => setShowToast(false), 3000); // hide after 3 seconds
    }
  };

  const handleDecrement = (item) => {
    if (productQuantity[item.id].quantity <= 1) {
      const newProductQuantity = { ...productQuantity };
      delete newProductQuantity[item.id];
      setProductQuantity(newProductQuantity);
    } else {
      setProductQuantity((prev) => ({
        ...prev,
        [item.id]: {
          ...item,
          quantity: prev[item.id].quantity - 1,
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

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsOpen(false);
  };

  const sectionComponents = [
    <PopularComponent
      t={t}
      products={products}
      productQuantity={productQuantity}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOpenCardModal={handleCardModalOpen}
    />,
    <AppetizersComponent
      t={t}
      products={products}
      productQuantity={productQuantity}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOpenCardModal={handleCardModalOpen}
    />,
    <Main_DishComponent
      t={t}
      products={products}
      productQuantity={productQuantity}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOpenCardModal={handleCardModalOpen}
    />,
    <DessertsComponent
      t={t}
      products={products}
      productQuantity={productQuantity}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOpenCardModal={handleCardModalOpen}
    />,
    <DrinksComponent
      t={t}
      products={products}
      productQuantity={productQuantity}
      onAdd={handleAdd}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOpenCardModal={handleCardModalOpen}
    />,
  ];

  // update modal quantity
  useEffect(() => {
    if (modalItem) {
      const updatedQuantity = productQuantity[modalItem.id]?.quantity || 0;
      setModalItem((prev) => ({
        ...prev,
        quantity: updatedQuantity,
      }));
    }
  }, [productQuantity]);

  // change indicator effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentActiveEl = navRef.current[activeIndex];
      if (currentActiveEl) {
        setIndicatorStyle({
          left: currentActiveEl.offsetLeft,
          width: currentActiveEl.offsetWidth,
        });
      }
    }, 100);

    const categoryId = activeIndex + 1;
    const hash =
      "eyJhcGlfdG9rZW4iOiJYOUlETUlLTWVFMktHNm1BTkhZM3ppUTJWVG1VbGZRdCIsInV1aWQiOiI3YTc1NmNlNy01ZDI3LTQwNGItOGMxZC03NGViMjM3NjY4NDAifQ==.ADqnddCCwdnSa3dx-sLgVw6dhk5qcIBN3KyK5OSfBMk=";

    const fetchProducts = async () => {
      try {
        const response = await api.get(
          `/guests/categories/${categoryId}/products`,
          {
            params: { hash },
          }
        );

        setProducts(response.data.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  // fetch data from api
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const hash =
          "eyJhcGlfdG9rZW4iOiJYOUlETUlLTWVFMktHNm1BTkhZM3ppUTJWVG1VbGZRdCIsInV1aWQiOiI3YTc1NmNlNy01ZDI3LTQwNGItOGMxZC03NGViMjM3NjY4NDAifQ==.ADqnddCCwdnSa3dx-sLgVw6dhk5qcIBN3KyK5OSfBMk=";
        const response = await api.get("/guests/orders/table", {
          params: { hash },
        });
        setOrders(response.data.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const hash =
          "eyJhcGlfdG9rZW4iOiJYOUlETUlLTWVFMktHNm1BTkhZM3ppUTJWVG1VbGZRdCIsInV1aWQiOiI3YTc1NmNlNy01ZDI3LTQwNGItOGMxZC03NGViMjM3NjY4NDAifQ==.ADqnddCCwdnSa3dx-sLgVw6dhk5qcIBN3KyK5OSfBMk=";

        const response = await api.get("/guests/categories", {
          params: { hash },
        });

        const items = response.data?.data.map((item) => ({
          id: item.id,
          label: item.description,
          icon: `https://api.snapserve.cubetech.cloud/storage${item.icon_path}`,
        }));

        setNavItems(items);
      } catch (err) {
        console.error("Failed to load nav items:", err);
      }
    };

    const fetchLogo = async () => {
      try {
        const hash =
          "eyJhcGlfdG9rZW4iOiJYOUlETUlLTWVFMktHNm1BTkhZM3ppUTJWVG1VbGZRdCIsInV1aWQiOiI3YTc1NmNlNy01ZDI3LTQwNGItOGMxZC03NGViMjM3NjY4NDAifQ==.ADqnddCCwdnSa3dx-sLgVw6dhk5qcIBN3KyK5OSfBMk=";
        const response = await api.get("/guests/current", {
          params: { hash },
        });

        const path = response.data?.data?.thumbnail_path;
        if (path) {
          setLogo(`https://api.snapserve.cubetech.cloud/storage${path}`);
        }
      } catch (err) {
        console.error("Failed to load logo:", err);
      }
    };

    fetchLogo();
    fetchCategories();
    fetchOrders();
  }, []);

  // show cart items
  useEffect(() => {
    const hasItems =
      Object.values(productQuantity).reduce(
        (total, item) => total + item.quantity,
        0
      ) > 0;

    setIsCartItems(hasItems);
  }, [productQuantity]);

  // keep the group orders expanded
  useEffect(() => {
    if (orders.length > 0) {
      const refs = [...new Set(orders.map((o) => o.reference_no))];
      setExpandedOrders(refs);
    }
  }, [orders]);

  const groupedOrders = orders.reduce((acc, item) => {
    const ref = item.reference_no;
    if (!acc[ref]) acc[ref] = [];
    acc[ref].push(item);
    return acc;
  }, {});

  const totalAmount = orders.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <header className="header">
        <img className="headerLogo" src={logo} alt="logo" />
        <h3 className="headerTitle">{t("welcome")}</h3>
        {/* burger menu */}
        <button
          className="open-btn material-symbols-outlined"
          onClick={() => setIsMenuOpen(true)}
        >
          menu
        </button>
      </header>

      {/* language */}
      <div className="sub-header">
        <div className="lang-dropdown">
          <button className="lang-button" onClick={() => setIsOpen(!isOpen)}>
            🌐 {i18n.language.toUpperCase()} ▼
          </button>

          {isOpen && (
            <div className="lang-menu">
              {["en", "kr"].map((lang) => (
                <div
                  key={lang}
                  className="lang-option"
                  onClick={() => changeLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>

        <h4>{t("dine_in")}</h4>

        <h4>{t("table")} # 1</h4>
      </div>

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
              <div className="navbar-category" key={item.id}>
                <img src={item.icon} alt={item.label} width={24} height={24} />
                {t(`sections.${item.label}`)}
              </div>
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
      <div className={`slider-menu ${isMenuOpen ? "open" : ""}`}>
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

              <button
                className="btn-view-orders"
                onClick={() => setIsViewOrders(true)}
              >
                View
              </button>
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

      {/* view orders content */}
      <div className={`order-container ${isViewOrders ? "open" : ""}`}>
        <div className="order-header">
          <div>
            <h2>Orders for Table 1</h2>
            <p>
              Total Amount:{" "}
              {totalAmount.toLocaleString("en-PH", {
                style: "currency",
                currency: "PHP",
              })}
            </p>
          </div>
          <span onClick={() => setIsViewOrders(false)}>x</span>
        </div>

        <div className="order-content">
          {Object.entries(groupedOrders).map(([ref, items]) => (
            <div key={ref} className="order-group">
              <div
                className={`order-group-header ${
                  expandedOrders.includes(ref) ? "open" : ""
                }`}
                onClick={() =>
                  setExpandedOrders((prev) =>
                    prev.includes(ref)
                      ? prev.filter((r) => r !== ref)
                      : [...prev, ref]
                  )
                }
              >
                <div>
                  <p className="ref">{ref}</p>
                  <p className="status">{items[0].order_status}</p>
                </div>
                {expandedOrders.includes(ref) ? (
                  <span className="extract-icon">^</span>
                ) : (
                  <span className="expand-icon">⌄</span>
                )}
              </div>

              <div
                className={`order-items-wrapper ${
                  expandedOrders.includes(ref) ? "open" : ""
                }`}
              >
                {expandedOrders.includes(ref) && (
                  <div className="order-items">
                    {items.map((item) => (
                      <div key={item.product_id} className="order-item">
                        <div>
                          <p className="product-name">{item.product_name}</p>
                          <p className="qty">Qty: {item.quantity}</p>
                        </div>
                        <p className="price">
                          {item.price.toLocaleString("en-PH", {
                            style: "currency",
                            currency: "PHP",
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
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
          {Object.values(productQuantity).map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.logo} alt={item.name} className="item-image" />
              <div className="item-details">
                <div className="item-name">
                  {t(`products.${item.category_name}.${item.name}`, {
                    defaultValue: item.name,
                  })}
                </div>
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
              {Object.values(productQuantity)
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </button>
        </div>
      </div>

      {/* order confirmation */}

      <div className="modal-box">
        <div className="modal-header">
          <h2>Order Confirmation</h2>
          <button className="close-button">✕</button>
        </div>

        <div className="modal-body">
          <div className="status-icon">✅</div>
          <h3 className="success-text">Your order was successfully placed</h3>

          <div className="order-info">
            <p>
              <strong>Order Number:</strong>
            </p>
            <p>
              <strong>Order Created At:</strong>
            </p>
            <p>
              <strong>Table Number:</strong>
            </p>
          </div>

          <div className="order-details">
            <h4>Order Details:</h4>
            {/* {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <div>
                  <p>{item.name}</p>
                  <p className="per-item">₱ each</p>
                </div>
                <div className="item-total">
                  <span>x</span>
                  <span>₱</span>
                </div>
              </div>
            ))} */}
          </div>
        </div>

        <div className="modal-footer">
          <div className="total-amount">
            <span>Total Amount</span>
            <strong>₱</strong>
          </div>
          <div className="countdown">Closing in: </div>
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
            {Object.values(productQuantity).reduce(
              (total, item) => total + item.quantity,
              0
            )}
          </span>
        </div>
        <span className="cart-text">View cart</span>
        <span className="cart-price">
          ₱
          {Object.values(productQuantity)
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)}
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
            <p className="modal-price">₱{modalItem.price.toFixed(2)}</p>
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

      {isViewOrders && (
        <div
          className="view-orders-overlay"
          onClick={() => setIsViewOrders(false)}
        ></div>
      )}

      {/* {isViewOrders && (
        <div
          className="view-orders-overlay"
          onClick={() => setIsViewOrders(false)}
        ></div>
      )} */}
    </>
  );
}

export default customer;
