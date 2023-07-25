'use client';

import { Fragment, createElement } from 'react';
import rehypeReact from 'rehype-react';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype/lib';
import { unified } from 'unified';
import { DesignPane } from './design-pane';

interface Props {
  editor: string;
}

const DesignEditor = ({ editor }: Props) => {
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
    <>
      <div className="round prose prose-zinc max-w-none min-h-[80vh] w-full rounded-lg border-2 border-border p-3 font-sans leading-6 sm:p-6">
        {md}
      </div>

      <DesignPane editor={editor} />
    </>
  );
};
export { DesignEditor };
