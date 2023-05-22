'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContentEditor } from './content-editor';
import { DesignEditor } from './design-editor';
import { useState } from 'react';

const Editor = () => {
  const [editorValue, setEditorValue] = useState('');

  return (
    <Tabs defaultValue="markdown" asChild>
      <article className="flex flex-1 flex-col items-center gap-y-3 px-4 py-8">
        <TabsList asChild>
          <section className="w-56 justify-stretch gap-x-1 p-1">
            <TabsTrigger
              value="markdown"
              className="flex-1 transition-colors hover:bg-slate-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Markdown
            </TabsTrigger>
            <TabsTrigger
              value="design"
              className="flex-1 transition-colors hover:bg-slate-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Design
            </TabsTrigger>
          </section>
        </TabsList>
        <TabsContent value="markdown" asChild>
          <section className="flex h-full w-full justify-center">
            <ContentEditor
              editorValue={editorValue}
              setEditorValue={setEditorValue}
            />
          </section>
        </TabsContent>
        <TabsContent value="design" asChild>
          <section className="flex h-full w-full justify-center">
            <DesignEditor editorValue={editorValue} />
          </section>
        </TabsContent>
      </article>
    </Tabs>
  );
};
export { Editor };
