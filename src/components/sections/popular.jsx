import MenuComponent from "./menu";

function popular() {
  return (
    <>
      <div className="menu-alignments">
        <MenuComponent
          logo="./images.png"
          name="Garlic Butter Shrimp"
          price={800}
        />
        <MenuComponent
          logo="./images.png"
          name="Korean BBQ Samgyeopsal"
          price={1000}
        />
        <MenuComponent
          logo="./images.png"
          name="Cheesy Baked Mac"
          price={578}
        />
      </div>
    </>
  );
}

export default popular;
