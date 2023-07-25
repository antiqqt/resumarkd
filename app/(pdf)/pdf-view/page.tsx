'use client';

import { useState } from 'react';

import { Fragment, createElement } from 'react';
import rehypeReact from 'rehype-react';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype/lib';
import { unified } from 'unified';

export default function PDFViewPage() {
  const [editor, setEditor] = useState('');

  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {},
    })
    .processSync(editor).result;

  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <textarea
          name="textarea"
          id="textarea"
          value={editor}
          onChange={(event) => setEditor(event.target.value)}
          className="absolute opacity-0"
        ></textarea>

        <article
          id="pdf"
          className="prose prose-zinc w-a4 max-w-none rounded-lg p-6 font-sans"
        >
          {md}
        </article>
      </div>
    </main>
  );
}
