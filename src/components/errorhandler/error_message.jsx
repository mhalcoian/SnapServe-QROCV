function Toast({ showToast }) {
  return (
    <>
      <div>
        <div className={`toast ${showToast ? "open" : "close"}`}>
          <span className="icon">?</span>
          <span>Cannot exceed maximum quantity of 20.</span>
        </div>
      </div>
    </>
  );
}

export default Toast;
