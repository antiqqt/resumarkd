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
import { useState } from 'react';

const INIT_PDF_NAME = 'pdf_resume.pdf';

type ApiPDFResponseBody = {
  data: number[];
  type: string;
};

interface Props {
  editor: string;
}

const DesignPane = ({ editor }: Props) => {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownloadPdf() {
    try {
      setIsDownloading(true);
      const response = await fetch('/api/pdf', {
        method: HTTP_METHODS[3],
        headers: {
          'Content-Type': MimeTypes.JSON,
        },
        body: JSON.stringify({ editor }),
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
      setIsDownloading(false);
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

  return (
    <Sheet defaultOpen modal={false}>
      <SheetContent position="bottom" size="sm" disableBackdrop>
        <div className="mx-auto max-w-screen-xl">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button
              disabled={isDownloading}
              onClick={handleDownloadPdf}
            >
              {isDownloading ? (
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
