import MenuComponent from "./menu";

function popular({
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
          name="Garlic Butter Shrimp"
          price={800}
          description="Succulent shrimp sauteed in rich garlic butter sauce, served with steamed rice."
          quantity={cartItems["Garlic Butter Shrimp"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Korean BBQ Samgyeopsal"
          price={1000}
          description="Grilled pork belly with dipping sauces, lettuce wraps, and kimchi on the side."
          quantity={cartItems["Korean BBQ Samgyeopsal"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Cheesy Baked Mac"
          price={578}
          description="Creamy macaroni in a rich tomotato-meat sauce, topped with melted cheese and baked to golden perfection."
          quantity={cartItems["Cheesy Baked Mac"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
      </div>
    </>
  );
}

export default popular;
