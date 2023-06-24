import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

const PDF_NAME = 'pdf_resume.pdf';

interface Props {
  editor: string;
}

const DesignPane = ({ editor }: Props) => {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownloadPdf() {
    try {
      setIsDownloading(true);
      const response = await fetch('/api/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/pdf',
        },
        body: JSON.stringify({ editor }),
      });

      const blob = await response.blob();
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
    a.download = PDF_NAME;

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
              className="w-40"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
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
