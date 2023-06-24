'use client';

import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from 'react';

type EditorContextType = {
  editor: string;
  setEditor: Dispatch<SetStateAction<string>>;
};

const initialContext = {
  editor: '',
  setEditor: () => {},
};

export const EditorContext = createContext<EditorContextType>(initialContext);

interface Props {
  children: ReactNode;
}

const EditorProvider = ({ children }: Props) => {
  const [editor, setEditor] = useState(initialContext.editor);

  return (
    <EditorContext.Provider value={{ editor, setEditor }}>
      {children}
    </EditorContext.Provider>
  );
};
export { EditorProvider };
