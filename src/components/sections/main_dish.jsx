import CardComponent from "../products/card";

function main_dish({
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
            name={t(`products.main dish.${p.name}`)}
            price={Number(p.price)}
            description={t(`products.main dish.description.${p.description}`)}
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

export default main_dish;
