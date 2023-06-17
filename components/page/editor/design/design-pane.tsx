import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const PDF_NAME = 'pdf_resume.pdf';

const DesignPane = () => {
  async function handleDownloadPdf() {
    try {
      const response = await fetch('http://localhost:3000/api/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });
      const blob = await response.blob();
      downloadBlob(blob);
    } catch (error) {
      console.error(error);
    }
  }

  function downloadBlob(blob: Blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = PDF_NAME;

    a.click();
    URL.revokeObjectURL(url);
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
            <Button onClick={handleDownloadPdf}>Download PDF</Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export { DesignPane };
