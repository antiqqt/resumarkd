import { Editor } from '@/components/page/editor';
import { ScrollToTopButton } from '@/components/page/scroll-to-top-button';

export default function EditorPage() {
  return (
    <main className="min-h-screen pt-[4.75rem]">
      <div className="mx-auto flex max-w-7xl flex-col py-8 gap-y-8">
        <Editor />
        <ScrollToTopButton className="mx-auto flex lg:fixed lg:bottom-10 lg:right-10" />
      </div>
    </main>
  );
}
