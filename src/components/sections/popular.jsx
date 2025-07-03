import MenuComponent from "./menu";

function popular({ cartItems, onAdd, onIncrement, onDecrement }) {
  return (
    <>
      <div className="card-container">
        <MenuComponent
          logo="./images.png"
          name="Garlic Butter Shrimp"
          price={800}
          quantity={cartItems["Garlic Butter Shrimp"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Korean BBQ Samgyeopsal"
          price={1000}
          quantity={cartItems["Korean BBQ Samgyeopsal"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Cheesy Baked Mac"
          price={578}
          quantity={cartItems["Cheesy Baked Mac"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </>
  );
}

export default popular;
