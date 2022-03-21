import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext";
import { CarritoContextProvider } from "./contexts/carritoContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <UserContextProvider>
    <CarritoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CarritoContextProvider>
  </UserContextProvider>,
  document.getElementById("root")
);
