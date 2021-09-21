import React from "react";
import { app } from "./fb";

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div>
      <h1>Bienvenido, sesión iniciada, wapetón.</h1>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
