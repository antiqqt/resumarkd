'use client';

import { useState } from 'react';

import { Fragment, createElement } from 'react';
import rehypeParse from 'rehype-parse/lib';
import rehypeReact from 'rehype-react';
import rehypeSanitize from 'rehype-sanitize';
import { unified } from 'unified';

export default function PDFViewPage() {
  const [editorContent, setEditorContent] = useState('');

  const html = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSanitize)
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {},
    })
    .processSync(editorContent).result;

  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <textarea
          name="textarea"
          id="textarea"
          value={editorContent}
          onChange={(event) => setEditorContent(event.target.value)}
          className="absolute opacity-0"
        ></textarea>

        <article
          id="pdf"
          className="prose prose-zinc w-a4 max-w-none rounded-lg p-6 font-sans"
        >
          {html}
        </article>
      </div>
    </main>
  );
}
