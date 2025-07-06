import MenuComponent from "./menu";

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
        <MenuComponent
          logo="./images.png"
          name="Beef Bulgogi Rice Bowl"
          price={1200}
          description=""
          quantity={cartItems["Beef Bulgogi Rice Bowl"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Creamy Tuscan Chicken Pasta"
          price={1500}
          description=""
          quantity={cartItems["Creamy Tuscan Chicken Pasta"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Chicken Adobo"
          price={180}
          description=""
          quantity={cartItems["Chicken Adobo"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onOpenCardModal={onOpenCardModal}
        />
        <MenuComponent
          logo="./images.png"
          name="Grilled Fish"
          price={250}
          description=""
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
