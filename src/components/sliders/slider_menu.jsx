function SliderBarMenu({
  isMenuOpen,
  setIsMenuOpen,
  requestItems,
  handleRequestDecrement,
  handleRequestIncrement,
  setIsViewOrders,
}) {
  return (
    <>
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
            <div className="request-form" key={i}>
              <div className="request-title">
                {i < 3 ? (
                  <span className="material-symbols-outlined">fork_spoon</span>
                ) : (
                  <span className="material-symbols-outlined">local_drink</span>
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
          ))}

          {/* view orders */}
          <div className="view-orders">
            <div className="view-order-content">
              <div className="view-order-title">
                <span className="material-symbols-outlined">receipt</span>
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
              <span className="material-symbols-outlined">send</span>Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderBarMenu;
