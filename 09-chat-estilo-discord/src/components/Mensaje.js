import React from "react";

import { Avatar } from "@material-ui/core";

function Mensaje({ mensajeFirebase }) {
  return (
    <div className="message">
      <Avatar src={mensajeFirebase.foto} />

      <div className="message__info">
        <h4>
          {mensajeFirebase.usuario}
          <span className="message__timestamp">
            {new Date(mensajeFirebase.id).toLocaleString}
          </span>
        </h4>

        <p>{mensajeFirebase.mensaje}</p>
      </div>
    </div>
  );
}

export default Mensaje;
