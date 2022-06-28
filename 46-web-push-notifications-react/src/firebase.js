import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getMessaging } from "firebase/messaging"
 
const firebaseConfig = {
  apiKey: "AIzaSyDubsKssL1b25TaHs0E35WZxm1qaGPFgmo",
  authDomain: "tutorial-push-web.firebaseapp.com",
  projectId: "tutorial-push-web",
  storageBucket: "tutorial-push-web.appspot.com",
  messagingSenderId: "863198138943",
  appId: "1:863198138943:web:5609daa808859212211e8a",
  measurementId: "G-NYJTHLV29F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);