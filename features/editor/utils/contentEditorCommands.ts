import type { Editor } from '@tiptap/react';

export function getContentEditorCommands(editor: Editor) {
  return {
    undo: {
      action: editor.commands.undo,
    },

    redo: {
      action: editor.commands.redo,
    },

    bold: {
      isActive: editor.isActive('bold'),
      toggle: editor.chain().focus().toggleBold().run,
    },

    italic: {
      isActive: editor.isActive('italic'),
      toggle: editor.chain().focus().toggleItalic().run,
    },

    underline: {
      isActive: editor.isActive('underline'),
      toggle: editor.chain().focus().toggleUnderline().run,
    },

    bulletList: {
      isActive: editor.isActive('bulletList'),
      toggle: editor.chain().focus().toggleBulletList().run,
    },

    orderedList: {
      isActive: editor.isActive('orderedList'),
      toggle: editor.chain().focus().toggleOrderedList().run,
    },
  };
}
