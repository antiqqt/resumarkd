import { CompletionContext } from '@codemirror/autocomplete';

export function autocompletionSnippets(context: CompletionContext)  {
  const word = context.matchBefore(/\w*/);
  if (!word) return null;
  if (word.from == word.to && !context.explicit) return null;

  return {
    from: word.from,
    options: [
      { label: 'h1', type: 'text', apply: '# ', detail: 'heading level 1' },
      { label: 'h2', type: 'text', apply: '## ', detail: 'heading level 2' },
      { label: 'h3', type: 'text', apply: '### ', detail: 'heading level 3' },
    ],
  };
}
