import { env } from '@/lib/env';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request: Request) {
  try {
    const { editorContent } = (await request.json()) as { editorContent: string };

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto(`${env.SITE_URL}/pdf-view`);
    await page.emulateMediaType('screen');

    const textareaSelector = '#textarea';
    await page.waitForSelector(textareaSelector);
    await page.type(textareaSelector, editorContent);

    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    return NextResponse.json(pdfBuffer);
  } catch {
    return NextResponse.json({
      error: {
        message: 'Internal Server Error',
        status: 500,
      },
    });
  }
}
