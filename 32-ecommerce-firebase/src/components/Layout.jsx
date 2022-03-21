import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useCarritoContext } from "../contexts/carritoContext";

function Layout({ children }) {
  const { carrito } = useCarritoContext();
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden relative">
      <header className="w-full text-white  bg-azul">
        <nav className="w-full flex items-center justify-between px-10 py-5">
          <Link to="/" className="font-bold italic text-3xl">
            {" "}
            LasfiStore
          </Link>
          <input
            className="bg-white rounded-md border-0 w-1/3  px-5 py-2 text-black"
            placeholder="¿Qué deseas buscar?"
          ></input>
          <div className="flex">
            <Link to="/carrito" className="mx-5 relative">
              <span
                className={`absolute w-3 h-3 rounded-full bg-red-600 top-0 right-0  translate-x-1/2 -translate-y-1/2  ${
                  carrito.length > 0 ? "opacity-100" : "opacity-0"
                }`}
              ></span>
              <AiOutlineShoppingCart size={30} />
            </Link>
            <Link to="/perfil">
              <AiOutlineUser size={30} />
            </Link>
          </div>
        </nav>
      </header>
      <main className="w-full h-full flex flex-col justify-center items-center">
        {children}
      </main>
      <footer className="mt-10 bg-black text-white py-5 px-10 w-full">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-bold text-xl"> LasfiStore</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
