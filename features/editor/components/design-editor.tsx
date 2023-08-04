'use client';

import { Fragment, createElement } from 'react';
import rehypeReact from 'rehype-react';
import rehypeSanitize from 'rehype-sanitize';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import { DesignPane } from './design-pane';

interface Props {
  editorContent: string;
}

const DesignEditor = ({ editorContent }: Props) => {
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
    <>
      <section className="round break-words prose prose-zinc max-w-none min-h-[80.5vh] w-full rounded-lg border border-border p-6 font-sans leading-6">
        {html}
      </section>

      <DesignPane editorContent={editorContent} />
    </>
  );
};
export { DesignEditor };
