import React from "react";

function CartItem({ producto }) {
  return (
    <div className="w-1/2 mx-auto  flex justify-around items-center text-xl border-slate-200 border-2 my-3 rounded-lg">
      <div className="w-1/4">
        <img src={producto.images[0]} alt="" className="w-2/3 rounded-md" />
      </div>
      <div>
        <h3>{producto.name}</h3>
      </div>
      <div>
        <p>${producto.price.unit_amount / 100}</p>
      </div>
    </div>
  );
}

export default CartItem;
