import CardComponent from "../products/card";

function drinks({
  t,
  products,
  productQuantity,
  onAdd,
  onIncrement,
  onDecrement,
  onOpenCardModal,
}) {
  return (
    <>
      <div className="card-container">
        {products.map((p) => (
          <CardComponent
            key={p.id}
            id={p.id}
            logo={`https://api.snapserve.cubetech.cloud/storage${p.image_path}`}
            name={t(`products.drinks.${p.name}`)}
            price={Number(p.price)}
            description={t(`products.drinks.description.${p.description}`)}
            quantity={productQuantity[p.id]?.quantity || 0}
            onAdd={onAdd}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onOpenCardModal={onOpenCardModal}
          />
        ))}
      </div>
    </>
  );
}

export default drinks;
