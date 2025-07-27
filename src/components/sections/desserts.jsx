import CardComponent from "../products/card";

function desserts({
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
            name={p.name}
            price={Number(p.price)}
            description={p.description}
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

export default desserts;
