import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContentEditor } from './ContentEditor';
import { DesignEditor } from './DesignEditor';

const Editor = () => {
  return (
    <Tabs defaultValue="content" asChild>
      <article className="flex flex-col gap-y-3 items-center p-2 pt-5">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="flex w-full justify-center">
          <ContentEditor />
        </TabsContent>
        <TabsContent value="design" className="flex justify-center">
          <DesignEditor />
        </TabsContent>
      </article>
    </Tabs>
  );
};
export { Editor };
