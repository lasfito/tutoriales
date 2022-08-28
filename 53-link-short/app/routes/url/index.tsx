import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { db } from '~/utils/db.server';

export async function action({ request }: ActionArgs) {
	const formData = await request.formData();
	const original = formData.get('original') as string;
	const short = formData.get('short') as string;

	if (!original || !short) {
		return redirect('/?error=missing');
	}

	const isShortAvailable = await db.link.findFirst({
		where: {
			short,
		},
	});

	if (isShortAvailable) {
		return redirect('/?error=unavailable');
	}

	const newlink = await db.link.create({
		data: {
			original,
			short,
		},
	});

	return redirect(`/?success=${newlink.short}`);
}
