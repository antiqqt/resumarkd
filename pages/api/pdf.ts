import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.goto('http://localhost:3000/editor');
    await page.emulateMediaType('screen');

    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    return res.status(200).send(pdfBuffer);
  } catch (error) {
    return res.status(500);
  }
}
