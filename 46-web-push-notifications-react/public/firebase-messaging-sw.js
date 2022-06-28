importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js")


 
const firebaseConfig = {
  apiKey: "AIzaSyDubsKssL1b25TaHs0E35WZxm1qaGPFgmo",
  authDomain: "tutorial-push-web.firebaseapp.com",
  projectId: "tutorial-push-web",
  storageBucket: "tutorial-push-web.appspot.com",
  messagingSenderId: "863198138943",
  appId: "1:863198138943:web:5609daa808859212211e8a",
  measurementId: "G-NYJTHLV29F"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);


messaging.onBackgroundMessage(payload => {
    console.log("Recibiste mensaje mientras estabas ausente");
// previo a mostrar notificación
    const notificationTitle= payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    }


    return self.registration.showNotification(
        notificationTitle, 
        notificationOptions
    )
})