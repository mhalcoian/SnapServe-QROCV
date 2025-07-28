function CardModal({
  isCardOpenModal,
  modalItem,
  handleAdd,
  handleDecrement,
  handleIncrement,
}) {
  return (
    <>
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

          <div className="modal-desc-price-container">
            <p className="modal-description">{modalItem.description}</p>
            <p className="modal-price">₱{modalItem.price.toFixed(2)}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CardModal;
