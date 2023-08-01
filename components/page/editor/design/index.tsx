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
      <div className="round break-words prose prose-zinc max-w-none min-h-[79vh] w-full rounded-lg border border-border p-3 font-sans leading-6 sm:p-6">
        {html}
      </div>

      <DesignPane editorContent={editorContent} />
    </>
  );
};
export { DesignEditor };
