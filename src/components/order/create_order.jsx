import { useEffect, useState } from "react";

function CreateOrders({ isOrderPlaced, orderRefs, productQuantity }) {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (isOrderPlaced) {
      const countdown = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            window.location.replace(window.location.href);
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [isOrderPlaced]);

  const handleClose = () => {
    window.location.replace(window.location.href);
  };

  return (
    <>
      <div className={`modal-box ${isOrderPlaced ? "open" : ""}`}>
        <div className="modal-header">
          <h2>Order Confirmation</h2>
          <button className="close-button" onClick={() => handleClose()}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="status-icon">✅</div>
          <h3 className="success-text">Your order was successfully placed</h3>

          <div className="order-info">
            <p>
              <strong>Order Number: {orderRefs.reference_no}</strong>
            </p>
            <p>
              <strong>Order Created At: {orderRefs.order_date}</strong>
            </p>
            <p>
              <strong>Table Number: {orderRefs.table_no}</strong>
            </p>
          </div>

          <h4>Order Details:</h4>

          <div className="order-details">
            {Object.values(productQuantity).map((item) => (
              <div key={item.id} className="order-item">
                <div>
                  <p>{item.name}</p>
                  <p className="per-item">₱{item.price.toFixed(2)} each</p>
                </div>
                <div className="item-total">
                  <span>x{item.quantity}</span>
                  {", "}
                  <span>₱{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <div className="total-amount">
            <span>Total Amount</span>
            <strong>
              ₱
              {Object.values(productQuantity)
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </strong>
          </div>
          <div className="countdown">Closing in: {secondsLeft}</div>
        </div>
      </div>
    </>
  );
}

export default CreateOrders;
