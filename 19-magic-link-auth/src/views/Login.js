import React from "react";
import enviarEnlaceLogin from "../functions/enviarEnlaceLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const correo = e.target.formCorreo.value;
  
    enviarEnlaceLogin(correo);
    window.localStorage.setItem("correo", correo);
    navigate("/success");
  }

  return (
    <div>
      <h1>Inicia Sesión</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Correo:
          <input type="email" id="formCorreo" />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
