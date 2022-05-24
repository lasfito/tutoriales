import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function sendCustomEmail(email, subject, body) {
	const collectionRef = collection(db, 'mail');
	const emailContent = {
		to: email,
		message: {
			subject: subject,
			text: body,
			html: `<p>${body}</p>`,
		},
	};
	console.log('listo para ser enviado');
	return await addDoc(collectionRef, emailContent);
}
