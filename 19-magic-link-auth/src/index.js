import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//incorporamos estilos via global
import "./styles/global.css";
//contextos
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
