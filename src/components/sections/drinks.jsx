import CardComponent from "../products/card";

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
        <CardComponent
          logo="./images.png"
          name="Iced Caramel Macchiato"
          price={300}
          description="A refreshing blend of espresso, milk, and caramel syrup over ice."
          quantity={cartItems["Iced Caramel Macchiato"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Fresh Mango Shake"
          price={200}
          description="Smooth and creamy mango shake made with ripe mangoes and fresh milk."
          quantity={cartItems["Fresh Mango Shake"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Lemon Ice Tea"
          price={180}
          description="Classic black tea infused with zesty lemon and served chilled."
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
