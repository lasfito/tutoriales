import React from "react";
import ItemCard from "./ItemCard";

function ItemSection({ productos, title }) {
  return (
    <>
      <h3 className="text-2xl font-bold underline self-start ml-10 my-10">
        {" "}
        {title} :
      </h3>
      <ul className=" flex flex-row w-full justify-evenly items-center">
        {productos
          ? productos.map((p) => (
              <li key={p.id}>
                <ItemCard product={p} />
              </li>
            ))
          : null}
      </ul>
    </>
  );
}

export default ItemSection;
