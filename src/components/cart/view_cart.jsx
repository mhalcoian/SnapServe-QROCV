function ViewCart({
  isCartListItems,
  setIsCartListItems,
  productQuantity,
  t,
  handleDecrement,
  handleIncrement,
}) {
  return (
    <>
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
    </>
  );
}

export default ViewCart;
