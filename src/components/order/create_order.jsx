function CreateOrders() {
  return (
    <>
      <div className="modal-box">
        <div className="modal-header">
          <h2>Order Confirmation</h2>
          <button className="close-button">✕</button>
        </div>

        <div className="modal-body">
          <div className="status-icon">✅</div>
          <h3 className="success-text">Your order was successfully placed</h3>

          <div className="order-info">
            <p>
              <strong>Order Number:</strong>
            </p>
            <p>
              <strong>Order Created At:</strong>
            </p>
            <p>
              <strong>Table Number:</strong>
            </p>
          </div>

          <div className="order-details">
            <h4>Order Details:</h4>
            {/* {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <div>
                  <p>{item.name}</p>
                  <p className="per-item">₱ each</p>
                </div>
                <div className="item-total">
                  <span>x</span>
                  <span>₱</span>
                </div>
              </div>
            ))} */}
          </div>
        </div>

        <div className="modal-footer">
          <div className="total-amount">
            <span>Total Amount</span>
            <strong>₱</strong>
          </div>
          <div className="countdown">Closing in: </div>
        </div>
      </div>
    </>
  );
}

export default CreateOrders;
