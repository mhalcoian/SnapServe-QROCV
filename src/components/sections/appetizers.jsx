import CardComponent from "../products/card";

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
        <CardComponent
          logo="./images.png"
          name="Dynamite Cheese Sticks"
          price={500}
          description="Crispy spring rolls filled with gooey cheese and a hint of spice."
          quantity={cartItems["Dynamite Cheese Sticks"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Spicy Chicken Wings"
          price={600}
          description="Juicy chicken wings tossed in a house-made spicy glazed."
          quantity={cartItems["Spicy Chicken Wings"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Spring Rolls"
          price={160}
          description="Vegetables-stuffed rolls wrapped and fried to crisp perfection, served with sweet chili dip."
          quantity={cartItems["Spring Rolls"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Crispy Calamari Bites"
          price={457}
          description="Tender squid rings, lightly breaded and fried, served with garlic aioli."
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
