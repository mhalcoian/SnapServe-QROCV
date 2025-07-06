import MenuComponent from "./menu";

function desserts({
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
          name="Mango Float"
          price={700}
          description=""
          quantity={cartItems["Mango Float"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Chocolate Lava Cake"
          price={900}
          description=""
          quantity={cartItems["Chocolate Lava Cake"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Classic Leche Flan"
          price={890}
          description=""
          quantity={cartItems["Classic Leche Flan"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
      </div>
    </>
  );
}

export default desserts;
