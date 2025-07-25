function CartButton({ isCartItems, setIsCartListItems, productQuantity }) {
  return (
    <>
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
    </>
  );
}

export default CartButton;
