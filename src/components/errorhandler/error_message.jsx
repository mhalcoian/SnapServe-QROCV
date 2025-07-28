function Toast({ isToastTop, isToastLeft, toastMessage }) {
  const classNames = [
    "toast",
    isToastTop ? "top_Yes" : "",
    isToastLeft ? "left_Yes" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div>
        <div className={classNames}>
          <span className="icon">?</span>
          <span>{toastMessage}</span>
        </div>
      </div>
    </>
  );
}

export default Toast;
