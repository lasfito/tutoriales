import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { token } = await request.json();
	const secret = process.env.TURNSTILE_SECRET_KEY;
	const ip = request.headers.get('x-forwarded-for');

	if (!secret || !ip || !token) {
		return NextResponse.json(
			{ error: 'Missing required parameters' },
			{ status: 400 }
		);
	}

	// Validate the token by calling the
	// "/siteverify" API endpoint.
	let formData = new FormData();
	formData.append('secret', secret);
	formData.append('response', token);
	formData.append('remoteip', ip);

	const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
	const result = await fetch(url, {
		body: formData,
		method: 'POST',
	});

	const { success } = await result.json();

	return NextResponse.json({ success });
}
