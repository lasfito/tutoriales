import { test, expect } from '@playwright/test';

test('añadir todo', async ({ page }) => {
	// visitar app
	await page.goto('http://localhost:3000/');

	// add screenshot of the current page
	await page.screenshot({ path: `e2e/screenshots/foto.png` });
	// añadir todo
	await page.getByPlaceholder('Buy some milk').fill('comprar leche');
	await page.getByRole('button', { name: 'Add' }).click();

	// revisar que el todo haya sido añadido

	expect(await page.getByText('comprar leche')).toBeTruthy();
});
