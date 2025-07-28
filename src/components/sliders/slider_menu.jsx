function SliderBarMenu({
  t,
  isMenuOpen,
  setIsMenuOpen,
  requestItems,
  handleRequestDecrement,
  handleRequestIncrement,
  setIsViewOrders,
  handleRequest,
  note,
  setNote,
  handleNoteRequest,
}) {
  return (
    <>
      <div className={`slider-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="slider-menu-header">
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            {"<"}
          </button>
          <h3>{t(`menu.title`)}</h3>
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
                <h3>{t(`menu.utensils.${title}`)}</h3>
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

                <button
                  className="request-submit"
                  onClick={() => handleRequest(`${title}`)}
                >
                  {t(`menu.request`)}
                </button>
              </div>
            </div>
          ))}

          {/* view orders */}
          <div className="view-orders">
            <div className="view-order-content">
              <div className="view-order-title">
                <span className="material-symbols-outlined">receipt</span>
                <h3>{t(`menu.myorders`)}</h3>
              </div>

              <button
                className="btn-view-orders"
                onClick={() => setIsViewOrders(true)}
              >
                {t(`menu.view`)}
              </button>
            </div>
          </div>

          {/* note */}
          <div className="request-note">
            <div className="note-label">
              <textarea
                id="note"
                placeholder=" "
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <label htmlFor="note" className="note">
                {t(`menu.note`)}
              </label>
            </div>
            <button
              className="btn-note-request"
              onClick={() => handleNoteRequest()}
            >
              <span className="material-symbols-outlined">send</span>
              {t(`menu.request`)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderBarMenu;
