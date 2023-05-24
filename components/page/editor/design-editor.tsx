'use client';

import { Fragment, ReactNode, createElement } from 'react';
import rehypeReact from 'rehype-react';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype/lib';
import { unified } from 'unified';

interface Props {
  editorValue: string;
}

const DesignEditor = ({ editorValue }: Props) => {
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
    .processSync(editorValue).result;

  return (
    <div className="round prose prose-zinc w-full max-w-2xl rounded-lg border-2 border-secondary p-6 font-sans">
      {md}
    </div>
  );
};
export { DesignEditor };
