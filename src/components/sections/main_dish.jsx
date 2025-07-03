import MenuComponent from "./menu";

function main_dish({ cartItems, onAdd, onIncrement, onDecrement }) {
  return (
    <>
      <div className="card-container">
        <MenuComponent
          logo="./images.png"
          name="Beef Bulgogi Rice Bowl"
          price={1200}
          quantity={cartItems["Beef Bulgogi Rice Bowl"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Creamy Tuscan Chicken Pasta"
          price={1500}
          quantity={cartItems["Creamy Tuscan Chicken Pasta"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Chicken Adobo"
          price={180}
          quantity={cartItems["Chicken Adobo"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <MenuComponent
          logo="./images.png"
          name="Grilled Fish"
          price={250}
          quantity={cartItems["Grilled Fish"]?.quantity || 0}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </>
  );
}

export default main_dish;
