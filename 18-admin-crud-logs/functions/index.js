const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.creacionProducto = functions.firestore
  .document("productos/{productoId}")
  .onCreate((snap) => {
    const producto = snap.data();

    db.collection("logs").add({
      accion: "Creación",
      fecha: new Date().toISOString(),
      producto: producto,
    });
  });

exports.eliminacionProducto = functions.firestore
  .document("productos/{productoId}")
  .onDelete((snap) => {
    const producto = snap.data();

    db.collection("logs").add({
      accion: "Eliminación",
      fecha: new Date().toISOString(),
      producto: producto,
    });
  });

exports.actualizacionProducto = functions.firestore
  .document("productos/{productoId}")
  .onUpdate((change) => {
    const productoPrevio = change.before.data();
    const productoActualizado = change.after.data();

    db.collection("logs").add({
      accion: "Actualización",
      fecha: new Date().toISOString(),
      productoPrevio,
      productoActualizado,
    });
  });
