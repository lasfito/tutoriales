import { chromium } from 'playwright';

// generar resultados de Google

async function getResultsFromGoogle(query, browser) {
	const page = await browser.newPage();
	await page.goto('https://www.google.com/');
	await page.waitForSelector('input[name="q"]');
	await page.type('input[name="q"]', query);
	await page.keyboard.press('Enter');

	await page.waitForNavigation({ waitUntil: 'networkidle' });

	const listadoResultados = await page.evaluate(() => {
		let resultados = [];
		document
			.querySelectorAll('div[data-header-feature] div a')
			.forEach((anchor, index) => {
				resultados.push({
					index: index,
					title: anchor.innerText,
					url: anchor.href,
				});
			});

		return resultados;
	});

	return listadoResultados;
}

// visitar resultados y extraer informacion
async function visitResultAndGetContent(resultado, browser) {
	const page = await browser.newPage();
	await page.goto(resultado.url);
	await page.waitForLoadState('domcontentloaded');

	const content = await page.evaluate(() => {
		const rawText =
			document.querySelector('main')?.innerText ||
			document.querySelector('body')?.innerText;

		return rawText;
	});

	return content;
}

async function startScraping(query) {
	const browser = await chromium.launch();
	const allTexts = [];

	const listadoResultados = await getResultsFromGoogle(query, browser);
	// síncrono
	/* listadoResultados.forEach(resultado => {
		visitResultAndGetContent(resultado, browser);
	}); */

	//asíncrono
	for await (const url of listadoResultados) {
		const contenido = await visitResultAndGetContent(url, browser);
		allTexts.push(contenido);
	}

	console.log(allTexts);
	await browser.close();
}

let queryTerminal = process.argv.slice(2)[0];
startScraping(queryTerminal);
