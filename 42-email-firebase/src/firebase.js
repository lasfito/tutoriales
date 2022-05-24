// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCO_9Vl7HMwiutrLV1xviDl4QygycP-LQE',
	authDomain: 'fir-correo-react.firebaseapp.com',
	projectId: 'fir-correo-react',
	storageBucket: 'fir-correo-react.appspot.com',
	messagingSenderId: '43892220877',
	appId: '1:43892220877:web:7be8d1d86357371987da84',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
