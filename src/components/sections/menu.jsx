import "/images.png";

function menu(props) {
  return (
    <>
      <div className="card">
        <img className="card-image" src={props.logo} alt="logo" />
        <h4 className="card-name">{props.name}</h4>
        <h4 className="card-price">{props.price}</h4>
      </div>
    </>
  );
}

export default menu;
