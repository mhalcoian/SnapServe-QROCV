import CardComponent from "../products/card";

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
        <CardComponent
          logo="./images.png"
          name="Mango Float"
          price={700}
          description="Layers of graham crackers, sweet mangoes, and creamy whipped filling."
          quantity={cartItems["Mango Float"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Chocolate Lava Cake"
          price={900}
          description="Warm, rich chocolate cake with a gooey molten center, served with vanilla ice cream."
          quantity={cartItems["Chocolate Lava Cake"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Classic Leche Flan"
          price={890}
          description="Smooth and creamy caramel custard with a rich, melt-in-your-mouth texture."
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
