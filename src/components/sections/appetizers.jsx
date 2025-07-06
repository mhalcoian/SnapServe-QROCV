import MenuComponent from "./menu";

function appetizers({
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
          name="Dynamite Cheese Sticks"
          price={500}
          description=""
          quantity={cartItems["Dynamite Cheese Sticks"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Spicy Chicken Wings"
          price={600}
          description=""
          quantity={cartItems["Spicy Chicken Wings"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Spring Rolls"
          price={160}
          description=""
          quantity={cartItems["Spring Rolls"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Crispy Calamari Bites"
          price={457}
          description=""
          quantity={cartItems["Crispy Calamari Bites"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
      </div>
    </>
  );
}

export default appetizers;
