import MenuComponent from "./menu";

function appetizers({ cartItems, onAdd, onIncrement, onDecrement }) {
  return (
    <>
      <div className="card-container">
        <MenuComponent
          logo="./images.png"
          name="Dynamite Cheese Sticks"
          price={500}
          quantity={cartItems["Dynamite Cheese Sticks"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Spicy Chicken Wings"
          price={600}
          quantity={cartItems["Spicy Chicken Wings"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Spring Rolls"
          price={160}
          quantity={cartItems["Spring Rolls"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </>
  );
}

export default appetizers;
