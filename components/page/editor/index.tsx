'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContentEditor } from './content';
import { DesignEditor } from './design';
import { useContext, useState } from 'react';
import { useKeyPress } from '@/hooks/useKeyPress';
import { EditorHints } from './content/editor-hints';
import { EditorContext } from '@/components/providers/editor-provider';

const TABS = {
  MARKDOWN: 'markdown',
  DESIGN: 'design',
} as const;

type Tabs = typeof TABS;

const Editor = () => {
  const [currentTab, setCurrentTab] = useState<Tabs[keyof Tabs]>('markdown');
  const { editor, setEditor } = useContext(EditorContext);

  const switchTab = (e: globalThis.KeyboardEvent) => {
    e.preventDefault();
    if (currentTab === TABS.MARKDOWN) setCurrentTab(TABS.DESIGN);
    if (currentTab === TABS.DESIGN) setCurrentTab(TABS.MARKDOWN);
  };

  useKeyPress({
    keyCode: 'KeyE',
    callback: switchTab,
    modifiers: {
      shift: true,
    },
  });

  return (
    <Tabs
      value={currentTab}
      onValueChange={(value) => {
        const isValidTab = value === TABS.MARKDOWN || value === TABS.DESIGN;
        if (!isValidTab) return;

        setCurrentTab(value);
      }}
      asChild
    >
      <article className="mx-auto flex w-full max-w-prose flex-col items-center gap-y-5 px-4 py-8 md:px-6">
        <section className="flex gap-6">
          <TabsList asChild>
            <div className="w-56 justify-stretch gap-x-1 p-1">
              <TabsTrigger
                value={TABS.MARKDOWN}
                className="flex-1 capitalize transition-colors data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {TABS.MARKDOWN}
              </TabsTrigger>
              <TabsTrigger
                value={TABS.DESIGN}
                className="flex-1 capitalize transition-colors data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {TABS.DESIGN}
              </TabsTrigger>
            </div>
          </TabsList>
          <EditorHints />
        </section>

        <TabsContent value={TABS.MARKDOWN} asChild>
          <section className="flex w-full max-w-prose justify-center">
            <ContentEditor editor={editor} setEditor={setEditor} />
          </section>
        </TabsContent>
        <TabsContent value={TABS.DESIGN} asChild>
          <section className="flex w-full justify-center">
            <DesignEditor editor={editor} />
          </section>
        </TabsContent>
      </article>
    </Tabs>
  );
};

export { Editor };
