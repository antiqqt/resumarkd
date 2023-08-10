import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Columns,
  Italic,
  Link,
  List,
  ListOrdered,
  Paintbrush,
  Palette,
  Redo,
  SeparatorHorizontal,
  Underline,
  Undo,
  WrapText,
} from 'lucide-react';
import { ReactNode } from 'react';

import { cn } from '@/lib/cn';
import type { Editor } from '@tiptap/react';
import Image from 'next/image';
import ThreeColumnsIcon from './../assets/three-columns.svg';

type MenuButtonProps = {
  children: ReactNode;
  tooltip: string;
  isActive?: boolean;
  onClick?: () => void;
};

const MenuButton = ({
  tooltip,
  children,
  isActive,
  onClick,
}: MenuButtonProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant={'ghost'}
          className={cn(
            'p-2 rounded-none',
            `${isActive ? 'bg-violet-200 hover:bg-violet-200' : ''}`,
          )}
          onClick={onClick}
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="fonts-sans font-medium">{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

type ContentEditorMenuProps = {
  editor: Editor;
};

const ContentEditorMenu = ({ editor }: ContentEditorMenuProps) => {
  const { undo, redo, bold, italic, underline } = {
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
  };

  return (
    <ul className="flex">
      <li className="flex items-center">
        <MenuButton tooltip="Undo" onClick={undo.action}>
          <Undo />
        </MenuButton>

        <MenuButton tooltip="Redo" onClick={redo.action}>
          <Redo />
        </MenuButton>
      </li>
      <li className="self-stretch w-px bg-border"></li>

      <li className="flex items-center">
        <MenuButton
          tooltip="Bold"
          isActive={bold.isActive}
          onClick={bold.toggle}
        >
          <Bold />
        </MenuButton>

        <MenuButton
          tooltip="Italic"
          isActive={italic.isActive}
          onClick={italic.toggle}
        >
          <Italic />
        </MenuButton>

        <MenuButton
          tooltip="Underline"
          isActive={underline.isActive}
          onClick={underline.toggle}
        >
          <Underline />
        </MenuButton>

        <MenuButton tooltip="Link">
          <Link />
        </MenuButton>
      </li>
      <li className="self-stretch w-px bg-border"></li>

      <li className="flex items-center">
        <MenuButton tooltip="Text color">
          <Palette />
        </MenuButton>

        <MenuButton tooltip="Highlight">
          <Paintbrush />
        </MenuButton>
      </li>
      <li className="self-stretch w-px bg-border"></li>

      <li className="flex items-center">
        <MenuButton tooltip="Bullet list">
          <List />
        </MenuButton>

        <MenuButton tooltip="Ordered list">
          <ListOrdered />
        </MenuButton>
      </li>
      <li className="self-stretch w-px bg-border"></li>

      <li className="flex items-center">
        <MenuButton tooltip="Align left">
          <AlignLeft />
        </MenuButton>

        <MenuButton tooltip="Align center">
          <AlignCenter />
        </MenuButton>

        <MenuButton tooltip="Align right">
          <AlignRight />
        </MenuButton>
      </li>
      <li className="self-stretch w-px bg-border"></li>

      <li className="flex items-center">
        <MenuButton tooltip="Horizontal separator">
          <SeparatorHorizontal />
        </MenuButton>

        <MenuButton tooltip="Line break">
          <WrapText />
        </MenuButton>
      </li>
      <li className="self-stretch w-px bg-border"></li>

      <li className="flex items-center">
        <MenuButton tooltip="Two Columns">
          <Columns />
        </MenuButton>

        <MenuButton tooltip="Three Columns">
          <Image
            priority
            src={ThreeColumnsIcon}
            alt="Three columns"
            className="w-6 aspect-square"
          />
        </MenuButton>
      </li>
    </ul>
  );
};
export { ContentEditorMenu };
