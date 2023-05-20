'use client';

import { useEffect, useRef, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';

const Editor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorValue, SetEditorValue] = useState('');

  useEffect(() => {
    if (!editorRef.current) return;

    const handleUpdate = EditorView.updateListener.of((view) => {
      SetEditorValue(view.state.doc.toString());
    });

    const initialState = EditorState.create({
      extensions: [
        keymap.of(defaultKeymap),
        markdown({
          base: markdownLanguage,
        }),
        EditorView.lineWrapping,
        handleUpdate,
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
    <article className="flex flex-col items-center p-8 pt-16">
      <div
        ref={editorRef}
        className="round w-full max-w-2xl rounded-lg border-2 border-secondary"
      ></div>
    </article>
  );
};
export { Editor };
