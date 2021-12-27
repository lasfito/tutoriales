import firebaseApp from "../firebase/credenciales";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
const db = getFirestore();

async function filtrarDatos(stringBusqueda) {
  const docusFiltrado = [];

  const collecionRef = collection(db, "productos");
  const queryTitulo = query(
    collecionRef,
    where("titulo", "==", stringBusqueda)
  );
  const querySku = query(collecionRef, where("sku", "==", stringBusqueda));

  const arraySnapshots = await Promise.all([
    getDocs(queryTitulo),
    getDocs(querySku),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      docusFiltrado.push(doc.data());
    });
  });
  return docusFiltrado;
}

export default filtrarDatos;
