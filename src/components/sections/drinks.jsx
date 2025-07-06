import MenuComponent from "./menu";

function drinks({
  cartItems,
  onAdd,
  onIncrement,
  onDecrement,
  onOpenCardModal,
}) {
  return (
    <>
      <div className="card-container">
        <MenuComponent
          logo="./images.png"
          name="Iced Caramel Macchiato"
          price={300}
          description=""
          quantity={cartItems["Iced Caramel Macchiato"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Fresh Mango Shake"
          price={200}
          description=""
          quantity={cartItems["Fresh Mango Shake"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Lemon Ice Tea"
          price={180}
          description=""
          quantity={cartItems["Lemon Ice Tea"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
      </div>
    </>
  );
}

export default drinks;
