import { db } from "../firebase/credenciales";
import { doc, collection, getDocs, getDoc } from "firebase/firestore";

async function getProductById(id) {
  try {
    const collectionRef = collection(db, "products");
    const docuRef = doc(collectionRef, id);
    const snapDoc = await getDoc(docuRef);
    const producto = snapDoc.data();
    // obtenemos el/los precio(s) del producto
    const precioSnaps = await getDocs(collection(snapDoc.ref, "prices"));
    producto.price = precioSnaps.docs[0].data();
    producto.priceId = precioSnaps.docs[0].id;
    return producto;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export default getProductById;
