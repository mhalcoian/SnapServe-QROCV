import { useState } from "react";
import MenuComponent from "./menu";

function popular() {
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

  return (
    <>
      <div className="MenuComponent-alignments">
        <MenuComponent
          logo="./images.png"
          name="Garlic Butter Shrimp"
          price={800}
          quantity={cartItems["Garlic Butter Shrimp"]?.quantity || 0}
          onAdd={handleAdd}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Korean BBQ Samgyeopsal"
          price={1000}
          quantity={cartItems["Korean BBQ Samgyeopsal"]?.quantity || 0}
          onAdd={handleAdd}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Cheesy Baked Mac"
          price={578}
          quantity={cartItems["Cheesy Baked Mac"]?.quantity || 0}
          onAdd={handleAdd}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>

      <div className="cart-bar">
        <span className="cart-icon">🛒</span>
        <span className="cart-badge">{Object.keys(cartItems).length}</span>
        <span className="cart-text">View cart</span>
        <span className="cart-price">Total</span>
      </div>
    </>
  );
}

export default popular;
