import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Producto,
  Perfil,
  Carrito,
  Checkout,
  Login,
  NotFound,
} from "./views";
import { auth } from "./firebase/credenciales";
import { useUserContext } from "./contexts/userContext";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const { user, setUser } = useUserContext();
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) setUser(firebaseUser);
    if (!firebaseUser) setUser(null);
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="producto/:id" element={<Producto />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="carrito" element={<Carrito />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
