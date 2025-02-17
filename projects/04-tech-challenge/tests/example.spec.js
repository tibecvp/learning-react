// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173';
const CAT_IMAGE_ENPOINT = 'https://cataas.com/cat/says'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.innerText('p');
  const image = await page.$('img');

  const imageSrc = await image?.getAttribute('src');

  await expect(text?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMAGE_ENPOINT)).toBeTruthy()
});
