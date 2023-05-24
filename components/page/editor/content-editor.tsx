'use client';

import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { autocompletion } from '@codemirror/autocomplete';
import { autocompletionSnippets } from '@/lib/completionSnippets';

interface Props {
  editorValue: string;
  setEditorValue: Dispatch<SetStateAction<string>>;
}

const ContentEditor = ({ editorValue, setEditorValue }: Props) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const handleUpdate = EditorView.updateListener.of((viewUpdate) => {
      if (!viewUpdate.docChanged) return;

      setEditorValue(view.state.doc.toString());
    });

    const initialState = EditorState.create({
      doc: editorValue,
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
      className="round w-full max-w-2xl rounded-lg border-2 border-secondary leading-6"
    ></div>
  );
};
export { ContentEditor };
