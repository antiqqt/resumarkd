import { Editor } from '@/components/page/Editor';

export default function Home() {
  return (
    <main className="min-h-screen pt-[4.75rem]">
      <div className="flex max-w-7xl flex-col">
        <Editor />
      </div>
    </main>
  );
}
