import { CompletionContext } from '@codemirror/autocomplete';

export function autocompletionSnippets(context: CompletionContext) {
  const word = context.matchBefore(/\w*/);
  if (!word) return null;
  if (word.from == word.to && !context.explicit) return null;

  return {
    from: word.from,
    options: [
      { label: 'h1', apply: '# ', type: 'text', detail: 'Heading level 1' },
      { label: 'h2', apply: '## ', type: 'text', detail: 'Heading level 2' },
      { label: 'h3', apply: '### ', type: 'text', detail: 'Heading level 3' },

      { label: 'ul', apply: '- ', type: 'property', detail: 'Unordered list' },
      { label: 'ol', apply: '1. ', type: 'property', detail: 'Ordered list' },

      { label: 'bold', apply: '**text**', type: 'text', detail: 'Bold text' },
      { label: 'italic', apply: '*text*', type: 'text', detail: 'Italic text' },
      {
        label: 'strike',
        apply: '~text~',
        type: 'text',
        detail: 'Strikethrough text',
      },
      { label: 'code', apply: '``text``', type: 'text', detail: 'Code block' },

      {
        label: 'img',
        apply: '![Title](Url)',
        type: 'property',
        detail: 'Image',
      },
      { label: 'a', apply: '[Title](Url)', type: 'text', detail: 'Link' },
      {
        label: 'blockquote',
        apply: '> ',
        type: 'property',
        detail: 'Quote block',
      },
      { label: 'hr', apply: '---', type: 'property', detail: 'Horizontal rule' },

      {
        label: 'table',
        apply: `| a | b  |  c |  d  |\n| - | :- | -: | :-: |`,
        type: 'property',
        detail: 'Table',
      },
      {
        label: 'task',
        apply: '* [x] to do',
        type: 'property',
        detail: 'Tasklist',
      },
      {
        label: 'note',
        apply: `A note[^1]
        [^1]: Big note.`,
        type: 'property',
        detail: 'Footnote',
      },
    ],
  };
}
