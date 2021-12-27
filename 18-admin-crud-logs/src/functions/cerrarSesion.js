import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function cerrarSesion() {
  signOut(auth);
}

export default cerrarSesion;
