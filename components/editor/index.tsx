'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContentEditor } from './ContentEditor';
import { DesignEditor } from './DesignEditor';
import { useState } from 'react';

const Editor = () => {
  const [editorValue, setEditorValue] = useState('');

  return (
    <Tabs defaultValue="content" asChild>
      <article className="flex flex-col items-center gap-y-3 p-4">
        <TabsList asChild>
          <section>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </section>
        </TabsList>
        <TabsContent value="content" asChild>
          <section className="flex w-full justify-center">
            <ContentEditor
              editorValue={editorValue}
              setEditorValue={setEditorValue}
            />
          </section>
        </TabsContent>
        <TabsContent value="design" asChild>
          <section className="flex justify-center">
            <DesignEditor />
          </section>
        </TabsContent>
      </article>
    </Tabs>
  );
};
export { Editor };
