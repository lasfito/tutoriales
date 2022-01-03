import React from "react";
//Importamos la aplicación/credenciales
import { Routes, Route } from "react-router-dom";
import { useUserContext } from "./contexts/userContext";
//views
import Home from "./views/Home";
import Login from "./views/Login";
import LoginUrl from "./views/LoginUrl";
import Success from "./views/Success";
//firebase
import firebaseApp from "./firebase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const { usuario, setUsuario } = useUserContext();

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login-url" element={<LoginUrl />} />
        <Route path="/success" element={<Success />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
