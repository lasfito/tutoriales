import React from "react";
import { useUserContext } from "../contexts/userContext";
import cerrarSesion from "../functions/cerrarSesion";

function Home() {
  const { usuario, setUsuario } = useUserContext();

  return (
    <div>
      Bienvenido, {usuario ? usuario.email : "inicia sesión por favor"}
      <button
        onClick={
          usuario
            ? () => cerrarSesion()
            : () => (window.location.href = "/login")
        }
      >
        {usuario ? "Cerrar Sesión" : "Iniciar Sesión"}
      </button>
    </div>
  );
}

export default Home;
