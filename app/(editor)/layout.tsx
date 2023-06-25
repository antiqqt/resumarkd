import { Header } from '@/components/layout/header';
import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function EditorLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
