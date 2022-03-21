import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, createCheckoutSession } from "../functions";
import { useCarritoContext } from "../contexts/carritoContext";
import { useUserContext } from "../contexts/userContext";
import { Layout } from "../components/";

function Producto() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { carrito, setCarrito } = useCarritoContext();
  const { user } = useUserContext();
  useEffect(() => {
    async function getProductInfo() {
      const product = await getProductById(id);
      console.log("producto", product);
      if (!product) {
        window.location = "/notfound";
      }
      setProductInfo(product);
    }
    getProductInfo();
  }, [id]);

  function addToCart() {
    setCarrito([...carrito, productInfo]);
  }

  return (
    <Layout>
      <div className="w-full h-full flex items-center justify-between">
        <div id="producto-izquierda" className="w-1/2 p-10">
          <img
            src={productInfo?.images[0]}
            alt={productInfo?.name}
            className="max-w-full h-auto"
          />
        </div>
        <div
          id="producto-derecha "
          className="w-1/2 h-full flex flex-col items-center justify-evenly"
        >
          <h1 className="text-5xl font-bold underline">{productInfo?.name}</h1>
          <p className="italic">{productInfo?.description}</p>
          <div className="flex items-center w-full justify-evenly">
            <button
              onClick={addToCart}
              className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 hover:scale-105"
            >
              AÑADIR A CARRITO
            </button>
            <button
              id="buy-button-producto"
              onClick={() => {
                addToCart();
                createCheckoutSession(user.uid, [{ ...productInfo }]);
                const btn = document.getElementById("buy-button-producto");
                btn.isDisabled = true;
                btn.classList.add("bg-gray-500");
                btn.classList.add("cursor-not-allowed");
                btn.innerText = "Comprando...";
              }}
              className="bg-red-600 text-white px-5 py-3 rounded-md hover:bg-red-800 hover:scale-105"
            >
              COMPRAR AHORA
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Producto;
