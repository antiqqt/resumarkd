import { Bold, Code, Italic, Link, Underline } from 'lucide-react';
import { ReactNode } from 'react';

type MenuButtonProps = {
  children: ReactNode;
};

const MenuButton = ({ children }: MenuButtonProps) => (
  <div className="p-2 flex justify-center items-center">
    <button type="button" className="border-r border-border">
      {children}
    </button>
  </div>
);

type ContentEditorMenuProps = {};

const ContentEditorMenu = (props: ContentEditorMenuProps) => {
  return (
    <ul className="flex px-4">
      <li className="border-r border-border"></li>
      <li className="border-r border-border flex items-center">
        <MenuButton>
          <Bold />
        </MenuButton>

        <MenuButton>
          <Italic />
        </MenuButton>

        <MenuButton>
          <Underline />
        </MenuButton>

        <MenuButton>
          <Link />
        </MenuButton>

        <MenuButton>
          <Code />
        </MenuButton>
      </li>
      <li className="border-r border-border"></li>
      <li className="border-r border-border"></li>
    </ul>
  );
};
export { ContentEditorMenu };
