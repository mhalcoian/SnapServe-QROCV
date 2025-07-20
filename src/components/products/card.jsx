function card({
  id,
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
  const item = { id, logo, name, price, description };

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
        <h1 className="card-name">{name}</h1>
        <h1 className="card-price">₱{price.toFixed(2)}</h1>
      </div>
    </>
  );
}

export default card;
