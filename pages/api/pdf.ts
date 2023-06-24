import { request } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    if (request.method !== 'POST') return response.status(500);

    const origin = request.headers.origin;
    const { editorValue = '' } = request.body;

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.goto(`${origin}/editor`);
    await page.emulateMediaType('screen');

    await page.type('.cm-line', editorValue);

    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    return response.status(200).send(pdfBuffer);
  } catch (error) {
    return response.status(500);
  }
}
