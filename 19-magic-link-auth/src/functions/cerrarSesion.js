import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

export default function cerrarSesion() {
  signOut(auth);
}
