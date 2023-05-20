'use client';

import { useEffect, useRef, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';

const ContentEditor = () => {
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
    <div
      ref={editorRef}
      className="round w-full max-w-xl rounded-lg border-2 border-secondary"
    ></div>
  );
};
export { ContentEditor };
