'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContentEditor } from './content-editor';
import { DesignEditor } from './design-editor';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useKeyPress } from '@/lib/hooks/useKeyPress';

const TABS = {
  MARKDOWN: 'markdown',
  DESIGN: 'design',
} as const;

type Tabs = typeof TABS;

const Editor = () => {
  const [currentTab, setCurrentTab] = useState<Tabs[keyof Tabs]>('markdown');
  const [editorValue, setEditorValue] = useState('');

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
        <TabsList asChild>
          <section className="w-56 justify-stretch gap-x-1 p-1">
            <TabsTrigger
              value={TABS.MARKDOWN}
              className="flex-1 capitalize transition-colors hover:bg-slate-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {TABS.MARKDOWN}
            </TabsTrigger>
            <TabsTrigger
              value={TABS.DESIGN}
              className="flex-1 capitalize transition-colors hover:bg-slate-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {TABS.DESIGN}
            </TabsTrigger>
          </section>
        </TabsList>
        <TabsContent value={TABS.MARKDOWN} asChild>
          <section className="flex w-full max-w-prose justify-center">
            <ContentEditor
              editorValue={editorValue}
              setEditorValue={setEditorValue}
            />
          </section>
        </TabsContent>
        <TabsContent value={TABS.DESIGN} asChild>
          <section className="flex w-full justify-center">
            <DesignEditor editorValue={editorValue} />
          </section>
        </TabsContent>
      </article>
    </Tabs>
  );
};

export { Editor };
