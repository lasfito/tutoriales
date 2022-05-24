import { useState } from 'react';
import sendCustomEmail from './sendCustomEmail';

function App() {
	function submitHandler(e) {
		e.preventDefault();
		let correo = e.target.correo.value;
		let asunto = e.target.asunto.value;
		let texto = e.target.texto.value;
		sendCustomEmail(correo, asunto, texto);
		e.target.correo.value = e.target.asunto.value = e.target.texto.value = '';
	}

	return (
		<>
			<h1>Envía correo</h1>
			<form onSubmit={submitHandler}>
				<input type="text" name="correo" placeholder="Escribe la dirección" />
				<input type="text" name="asunto" placeholder="Escribe el asunto" />
				<input type="text" name="texto" placeholder="Escribe el texto" />

				<button type="submit">Enviar Correo</button>
			</form>
		</>
	);
}

export default App;
