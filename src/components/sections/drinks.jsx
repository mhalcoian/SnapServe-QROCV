import MenuComponent from "./menu";

function drinks({ cartItems, onAdd, onIncrement, onDecrement }) {
  return (
    <>
      <div className="card-container">
        <MenuComponent
          logo="./images.png"
          name="Iced Caramel Macchiato"
          price={300}
          quantity={cartItems["Iced Caramel Macchiato"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Fresh Mango Shake"
          price={200}
          quantity={cartItems["Fresh Mango Shake"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Lemon Ice Tea"
          price={180}
          quantity={cartItems["Lemon Ice Tea"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </>
  );
}

export default drinks;
