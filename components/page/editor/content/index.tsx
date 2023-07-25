'use client';

import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { autocompletion } from '@codemirror/autocomplete';
import { autocompletionSnippets } from '@/components/page/editor/content/completion-snippets';

interface Props {
  editor: string;
  setEditor: Dispatch<SetStateAction<string>>;
}

const ContentEditor = ({ editor, setEditor }: Props) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const handleUpdate = EditorView.updateListener.of((viewUpdate) => {
      if (!viewUpdate.docChanged) return;

      setEditor(view.state.doc.toString());
    });

    const initialState = EditorState.create({
      doc: editor,
      extensions: [
        keymap.of(defaultKeymap),
        markdown({
          base: markdownLanguage,
        }),
        autocompletion(),
        EditorView.lineWrapping,
        handleUpdate,
        markdownLanguage.data.of({
          autocomplete: autocompletionSnippets,
        }),
      ],
    });

    const view = new EditorView({
      state: initialState,
      parent: editorRef.current,
    });

    view.focus();

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div
      ref={editorRef}
      className="min-h-[80vh] round w-full rounded-lg border-2 border-border leading-6"
    ></div>
  );
};
export { ContentEditor };
