import type { LoaderArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { db } from '~/utils/db.server';

export async function loader({ request, params }: LoaderArgs) {
	const { corta } = params;
	console.log('Server Hit');

	const link = await db.link.findFirst({
		where: {
			short: corta,
		},
	});

	if (!link) {
		return json({ error: 'Link not found' }, { status: 404 });
	}

	return redirect(`http://${link.original}`, {
		status: 302,
		headers: {
			'Cache-Control': 'public, max-age=31536000',
		},
	});
}
