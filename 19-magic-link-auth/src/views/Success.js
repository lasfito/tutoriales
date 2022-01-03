import React from "react";

function Success() {
  const correo = window.localStorage.getItem("correo");

  return <div>Enlace enviado a {correo}</div>;
}

export default Success;
