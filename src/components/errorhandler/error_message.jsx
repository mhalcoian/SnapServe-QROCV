function Toast({ t, showToast }) {
  return (
    <>
      <div>
        <div className={`toast ${showToast ? "open" : "close"}`}>
          <span className="icon">?</span>
          <span>{t(`error_message_max`)}</span>
        </div>
      </div>
    </>
  );
}

export default Toast;
