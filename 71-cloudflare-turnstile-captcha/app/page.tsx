'use client';
import Script from 'next/script';

declare global {
	interface Window {
		turnstile: any;
	}
}

export default function Home() {
	const submitHandler = async (e: any) => {
		e.preventDefault();

		const token = window.turnstile.getResponse();

		const serverValidation = await fetch('/api/cf', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ token }),
		});

		const { success } = await serverValidation.json();

		if (success) {
			// continue el form submission...
			alert('Eres humano. Formulario enviado');
		} else {
			window.turnstile.reset();
			alert('Intenta de nuevo');
		}
	};
	return (
		<>
			<Script
				src="https://challenges.cloudflare.com/turnstile/v0/api.js"
				async
				defer
			></Script>
			<main className="flex flex-col justify-center items-center w-screen h-screen">
				<form onSubmit={submitHandler} method="POST" className="flex flex-col">
					<input type="text" placeholder="username" />
					<input type="password" placeholder="password" />

					<button type="submit" value="Submit">
						Log in
					</button>

					<div
						className="cf-turnstile"
						data-sitekey="0x4AAAAAAAHS-Hx_bt9HbsKH"
						data-callback="javascriptCallback"
						data-theme="light"
						data-language="es"
					></div>
				</form>
			</main>
		</>
	);
}
