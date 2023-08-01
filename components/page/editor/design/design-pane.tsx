import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { MimeTypes } from '@/lib/constants';
import { Loader2 } from 'lucide-react';
import { HTTP_METHODS } from 'next/dist/server/web/http';
import { useEffect, useState } from 'react';

const INIT_PDF_NAME = 'pdf_resume.pdf';

type ApiPDFResponseBody = {
  data: number[];
  type: string;
};

interface Props {
  editorContent: string;
}

const DesignPane = ({ editorContent }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPDFDownloading, setIsPDFDownloading] = useState(false);

  async function handleDownloadPdf() {
    try {
      setIsPDFDownloading(true);
      const response = await fetch('/api/pdf', {
        method: HTTP_METHODS[3],
        headers: {
          'Content-Type': MimeTypes.JSON,
        },
        body: JSON.stringify({ editorContent }),
      });

      if (!response.ok) throw new Error('Download failed');

      const { data } = (await response.json()) as ApiPDFResponseBody;
      const bufferSource = new Uint8Array(data);
      const blob = new Blob([bufferSource], {
        type: MimeTypes.PDF,
      });

      downloadBlob(blob);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPDFDownloading(false);
    }
  }

  function downloadBlob(blob: Blob) {
    const blobURL = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobURL;
    a.download = INIT_PDF_NAME;

    a.click();
    URL.revokeObjectURL(blobURL);
    a.remove();
  }

  useEffect(() => setIsModalOpen(true), []);

  return (
    <Sheet
      modal={false}
      open={isModalOpen}
      onOpenChange={(open) => {
        console.log('open', open);

        setIsModalOpen(open);
      }}
    >
      <SheetContent
        side="bottom"
        // Disable modal close on all "onClickOutside"-like handlers
        // See: https://www.radix-ui.com/docs/primitives/components/dialog#content
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="mx-auto max-w-screen-xl">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button disabled={isPDFDownloading} onClick={handleDownloadPdf}>
              {isPDFDownloading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  This might take a while
                </>
              ) : (
                <>Download as PDF</>
              )}
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export { DesignPane };
