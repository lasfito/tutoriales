import React, { useState } from "react";
import { useCarritoContext } from "../contexts/carritoContext";
import { useUserContext } from "../contexts/userContext";
import { Layout, CartItem } from "../components";
import { Link } from "react-router-dom";
import { loginEmail, createCheckoutSession } from "../functions/";
import { MdOutlineClose } from "react-icons/md";

function Carrito() {
  const { carrito } = useCarritoContext();

  const { user } = useUserContext();
  const [isModal, setIsModal] = useState(false);

  async function login(e) {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;
    const cuenta = await loginEmail(correo, password);
    console.log(cuenta);
    setIsModal(false);
    //funcion de compra
    createCheckoutSession(cuenta.user.uid, carrito);
    const btn = document.getElementById("buy-button");
    btn.isDisabled = true;
    btn.classList.add("bg-gray-500");
    btn.classList.add("cursor-not-allowed");
    btn.innerText = "Comprando...";
  }

  function LoginForm() {
    return (
      <form
        onSubmit={(e) => login(e)}
        className="flex flex-col w-full items-center"
      >
        <input
          className="w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md"
          type="text"
          name="email"
          placeholder="test@test.com"
        />
        <input
          className="w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md"
          type="password"
          name="password"
          placeholder="123456"
        />
        <button
          className="bg-azul
        px-5 py-2 rounded-md my-1 text-white
        hover:bg-blue-700
        "
        >
          Iniciar Sesión
        </button>
      </form>
    );
  }

  function isAuthenticated() {
    if (user) {
      // funcion de comprar
      createCheckoutSession(user.uid, carrito);
      const btn = document.getElementById("buy-button");
      btn.isDisabled = true;
      btn.classList.add("bg-gray-500");
      btn.classList.add("cursor-not-allowed");
      btn.innerText = "Comprando...";
    }
    if (!user) {
      // mostrar modal
      setIsModal(true);
    }
  }

  const Modal = () => (
    <div
      id="modal-comprar"
      className={`absolute top-0 left-0 bg-slate-600/40 w-screen h-screen z-30 backdrop-blur-sm flex flex-col justify-center items-center ${
        isModal ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-1/3 h-1/3 flex flex-col items-center justify-evenly">
        {" "}
        <span
          className="ml-auto mr-5 cursor-pointer"
          onClick={() => setIsModal(false)}
        >
          <MdOutlineClose />
        </span>
        <h3 className="font-bold text-slate-500 italic">
          Inicia Sesión para comprar:
        </h3>
        <LoginForm onSubmit={login} />
      </div>
    </div>
  );

  return (
    <Layout>
      <Modal />

      <h1 className="text-3xl font-bold my-10">Tu carrito:</h1>

      {carrito.length === 0 ? (
        <>
          <p className="text-xl">No hay productos en tu carrito</p>
          <Link to="/" className="text-azul underline my-3">
            Volver al inicio
          </Link>
        </>
      ) : (
        carrito?.map((producto) => <CartItem producto={producto} />)
      )}
      {carrito?.length > 0 && (
        <button
          id="buy-button"
          onClick={isAuthenticated}
          className="bg-slate-800 px-5 py-3 text-white"
        >
          {" "}
          COMPRAR
        </button>
      )}
    </Layout>
  );
}

export default Carrito;
