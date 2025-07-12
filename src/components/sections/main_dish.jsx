import CardComponent from "../products/card";

function main_dish({
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
          name="Beef Bulgogi Rice Bowl"
          price={1200}
          description="Tender marinated beef stir-fried with onions and sesame seeds, served over rice."
          quantity={cartItems["Beef Bulgogi Rice Bowl"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Creamy Tuscan Chicken Pasta"
          price={1500}
          description="Chiken breast in a creamy garlic parmesan sauce with sundried tomatoes and spinach."
          quantity={cartItems["Creamy Tuscan Chicken Pasta"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Chicken Adobo"
          price={180}
          description="Tender chicken simmered in soy sauce, vinegar, garlic, and spices."
          quantity={cartItems["Chicken Adobo"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <CardComponent
          logo="./images.png"
          name="Grilled Fish"
          price={250}
          description="Grilled fish with lemons and served with a dip."
          quantity={cartItems["Grilled Fish"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
      </div>
    </>
  );
}

export default main_dish;
