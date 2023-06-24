'use client';

import { EditorProvider } from '@/components/providers/editor-provider';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <EditorProvider>{children}</EditorProvider>;
};
export default Providers;
