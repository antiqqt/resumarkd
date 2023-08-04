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

import ThreeColumnsIcon from './../assets/three-columns.svg';
import Image from 'next/image';

type MenuButtonProps = {
  children: ReactNode;
  tooltip: string;
};

const MenuButton = ({ tooltip, children }: MenuButtonProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button type="button" variant={'ghost'} className="p-2 rounded-none">
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="fonts-sans font-medium">{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

type ContentEditorMenuProps = {};

const ContentEditorMenu = (props: ContentEditorMenuProps) => {
  return (
    <ul className="flex">
      <li className="flex items-center">
        <MenuButton tooltip="Undo">
          <Undo />
        </MenuButton>

        <MenuButton tooltip="Redo">
          <Redo />
        </MenuButton>
      </li>
      <li className="self-stretch w-px bg-border"></li>

      <li className="flex items-center">
        <MenuButton tooltip="Bold">
          <Bold />
        </MenuButton>

        <MenuButton tooltip="Italic">
          <Italic />
        </MenuButton>

        <MenuButton tooltip="Underline">
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
