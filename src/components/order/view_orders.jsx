function ViewOrders({
  isViewOrders,
  totalAmount,
  setIsViewOrders,
  groupedOrders,
  expandedOrders,
  setExpandedOrders,
}) {
  return (
    <>
      <div className={`order-container ${isViewOrders ? "open" : ""}`}>
        <div className="order-header">
          <div>
            <h2>Orders for Table 1</h2>
            <p>
              Total Amount:{" "}
              {totalAmount.toLocaleString("en-PH", {
                style: "currency",
                currency: "PHP",
              })}
            </p>
          </div>
          <span onClick={() => setIsViewOrders(false)}>✕</span>
        </div>

        <div className="order-content">
          {Object.entries(groupedOrders).map(([ref, items]) => (
            <div key={ref} className="order-group">
              <div
                className={`order-group-header ${
                  expandedOrders.includes(ref) ? "open" : ""
                }`}
                onClick={() =>
                  setExpandedOrders((prev) =>
                    prev.includes(ref)
                      ? prev.filter((r) => r !== ref)
                      : [...prev, ref]
                  )
                }
              >
                <div>
                  <p className="ref">{ref}</p>
                  <p className="status">{items[0].order_status}</p>
                </div>
                {expandedOrders.includes(ref) ? (
                  <span className="extract-icon">^</span>
                ) : (
                  <span className="expand-icon">⌄</span>
                )}
              </div>

              <div
                className={`order-items-wrapper ${
                  expandedOrders.includes(ref) ? "open" : ""
                }`}
              >
                {expandedOrders.includes(ref) && (
                  <div className="order-items">
                    {items.map((item, index) => (
                      <div
                        key={`${ref}-${item.product_id}-${index}`}
                        className="order-item"
                      >
                        <div>
                          <p className="product-name">{item.product_name}</p>
                          <p className="qty">Qty: {item.quantity}</p>
                        </div>
                        <p className="price">
                          {item.price.toLocaleString("en-PH", {
                            style: "currency",
                            currency: "PHP",
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewOrders;
