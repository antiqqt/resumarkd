'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { type Dispatch, type SetStateAction } from 'react';
import { ContentEditorMenu } from './content-editor-menu';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';

interface Props {
  editorContent: string;
  setEditorContent: Dispatch<SetStateAction<string>>;
}

const ContentEditor = ({ editorContent, setEditorContent }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content: editorContent,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
    autofocus: true,
    editable: true,
  });

  return (
    <section className="selection:bg-violet-200 flex flex-col w-full min-h-[80.5vh] round rounded-lg border border-border font-sans">
      {editor && (
        <header className="border-b border-border">
          <ContentEditorMenu editor={editor}></ContentEditorMenu>
        </header>
      )}

      <EditorContent
        editor={editor}
        className="grow prose prose-zinc px-6 pb-6 max-w-none"
      />
    </section>
  );
};

export { ContentEditor };
