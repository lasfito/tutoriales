import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import global from './global.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Acortador de URLs',
	viewport: 'width=device-width,initial-scale=1',
});

// add global styling to remix app

export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: global }];
};

export default function App() {
	return (
		<html lang="es">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
