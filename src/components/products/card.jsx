function card({
  logo,
  name,
  price,
  description,
  quantity,
  onAdd,
  onIncrement,
  onDecrement,
  onOpenCardModal,
}) {
  const item = { logo, name, price, description };

  return (
    <>
      <div className="card" onClick={() => onOpenCardModal(item)}>
        <div>
          <img className="card-image" src={logo} alt={name} />
          <div className="card-button-group">
            {quantity === 0 ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd(item);
                }}
              >
                +
              </button>
            ) : quantity === 1 ? (
              <>
                <button
                  className="material-symbols-outlined"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDecrement(item);
                  }}
                >
                  delete
                </button>
                <span>{quantity}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onIncrement(item);
                  }}
                >
                  +
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDecrement(item);
                  }}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onIncrement(item);
                  }}
                >
                  +
                </button>
              </>
            )}
          </div>
        </div>
        <h4 className="card-name">{name}</h4>
        <p className="card-price">₱{price}.00</p>
      </div>
    </>
  );
}

export default card;
