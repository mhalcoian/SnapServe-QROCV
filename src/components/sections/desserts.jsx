import MenuComponent from "./menu";

function desserts({ cartItems, onAdd, onIncrement, onDecrement }) {
  return (
    <>
      <div className="card-container">
        <MenuComponent
          logo="./images.png"
          name="Mango Float"
          price={700}
          quantity={cartItems["Mango Float"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Chocolate Lava Cake"
          price={900}
          quantity={cartItems["Chocolate Lava Cake"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Classic Leche Flan"
          price={890}
          quantity={cartItems["Classic Leche Flan"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </>
  );
}

export default desserts;
