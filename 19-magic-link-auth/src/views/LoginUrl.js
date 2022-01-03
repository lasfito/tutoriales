import React from "react";
import atraparInicioSesion from "../functions/atraparInicioSesion";

function LoginUrl() {
  React.useEffect(() => {
    //correr funcion que atrape el inicio de sesión
    atraparInicioSesion(window.location.href);
  }, []);

  return <div>Cargando...</div>;
}

export default LoginUrl;
