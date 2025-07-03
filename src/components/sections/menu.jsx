function menu({
  logo,
  name,
  price,
  quantity,
  onAdd,
  onIncrement,
  onDecrement,
}) {
  const item = { logo, name, price };

  return (
    <div className="card">
      <div className="menu-image-container">
        <img className="card-image" src={logo} alt={name} />
        <div className="menu-overlay button-group">
          {quantity === 0 ? (
            <button onClick={() => onAdd(item)}>+</button>
          ) : quantity === 1 ? (
            <>
              <button
                className="material-symbols-outlined"
                onClick={() => onDecrement(item)}
              >
                delete
              </button>
              <span>{quantity}</span>
              <button onClick={() => onIncrement(item)}>+</button>
            </>
          ) : (
            <>
              <button onClick={() => onDecrement(item)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => onIncrement(item)}>+</button>
            </>
          )}
        </div>
      </div>
      <h4 className="card-name">{name}</h4>
      <p className="card-price">₱{price}.00</p>
    </div>
  );
}

export default menu;
