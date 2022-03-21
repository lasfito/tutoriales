import { db } from "../firebase/credenciales";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function () {
  const collectionRef = collection(db, "products");
  const filtrarActivos = query(collectionRef, where("active", "==", true));
  const snaps = await getDocs(filtrarActivos);
  const productos = [];
  // ciclo asíncrono para obtener los precios junto con la descripción del producto
  for await (const snap of snaps.docs) {
    const producto = snap.data();
    producto.id = snap.id;
    const precioSnaps = await getDocs(collection(snap.ref, "prices"));
    producto.price = precioSnaps.docs[0].data();
    producto.priceId = precioSnaps.docs[0].id;
    productos.push(producto);
  }

  return productos;
}
