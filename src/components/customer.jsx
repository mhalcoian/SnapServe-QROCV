import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import api from "../api";
import Header from "./headers/header";
import SliderBarMenu from "./sliders/slider_menu";
import PopularComponent from "./sections/popular";
import AppetizersComponent from "./sections/appetizers";
import Main_DishComponent from "./sections/main_dish";
import DessertsComponent from "./sections/desserts";
import DrinksComponent from "./sections/drinks";
import CardModal from "./products/card_modal";
import CartButton from "./cart/cart_button";
import ViewCart from "./cart/view_cart";
import CreateOrders from "./order/create_order";
import ViewOrders from "./order/view_orders";
import Toast from "./errorhandler/error_message";

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
      <Header
        logo={logo}
        t={t}
        setIsMenuOpen={setIsMenuOpen}
        setIsOpen={setIsOpen}
        i18n={i18n}
        isOpen={isOpen}
        changeLanguage={changeLanguage}
        navItems={navItems}
        activeIndex={activeIndex}
        navRef={navRef}
        setActiveIndex={setActiveIndex}
        indicatorStyle={indicatorStyle}
      />

      {/* page renders */}
      <div className="main-content">{sectionComponents[activeIndex]}</div>

      <CardModal
        isCardOpenModal={isCardOpenModal}
        modalItem={modalItem}
        handleAdd={handleAdd}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />

      <SliderBarMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        requestItems={requestItems}
        handleRequestDecrement={handleRequestDecrement}
        handleRequestIncrement={handleRequestIncrement}
        setIsViewOrders={setIsViewOrders}
      />

      <CartButton
        isCartItems={isCartItems}
        setIsCartListItems={setIsCartListItems}
        productQuantity={productQuantity}
      />

      <ViewCart
        isCartListItems={isCartListItems}
        setIsCartListItems={setIsCartListItems}
        productQuantity={productQuantity}
        t={t}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />

      {/* <CreateOrders /> */}

      <ViewOrders
        isViewOrders={isViewOrders}
        totalAmount={totalAmount}
        setIsViewOrders={setIsViewOrders}
        groupedOrders={groupedOrders}
        expandedOrders={expandedOrders}
        setExpandedOrders={setExpandedOrders}
      />

      <Toast showToast={showToast} />

      {/* cart item list overlay */}
      {isCartListItems && (
        <div
          className="overlay"
          onClick={() => setIsCartListItems(false)}
        ></div>
      )}

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
