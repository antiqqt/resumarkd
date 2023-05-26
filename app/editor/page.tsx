import { Editor } from '@/components/page/editor';

export default function Home() {
  return (
    <main className="min-h-screen pt-[4.75rem]">
      <div className="mx-auto flex max-w-7xl flex-col">
        <Editor />
      </div>
    </main>
  );
}
