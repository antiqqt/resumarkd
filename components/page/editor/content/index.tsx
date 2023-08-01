'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { type Dispatch, type SetStateAction } from 'react';

interface Props {
  editorContent: string;
  setEditorContent: Dispatch<SetStateAction<string>>;
}

const ContentEditor = ({ editorContent, setEditorContent }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: editorContent,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
    autofocus: true,
    editable: true,
    editorProps: {
      attributes: {
        class:
          'selection:bg-violet-200 w-full prose prose-zinc max-w-none min-h-[79vh] round rounded-lg border border-border p-3 font-sans leading-6 sm:p-6',
      },
    },
  });

  return <EditorContent editor={editor} className="w-full" />;
};

export { ContentEditor };
