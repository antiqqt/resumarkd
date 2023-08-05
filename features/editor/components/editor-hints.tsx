import { HelpCircle, Info } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useEffect, useState } from 'react';

const EditorHints = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-10 rounded-full p-0">
                <HelpCircle className="aspect-square w-full" />
                <span className="sr-only">Show hotkeys</span>
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p className="fonts-sans font-medium">Hotkeys</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <PopoverContent className="w-max text-sm">
        <h3 className="text-base font-semibold tracking-tight">
          Keyboard shortcuts
        </h3>

        <ul className="mt-2 flex flex-col">
          <li className="py-2 border-t border-border">
            <p>
              Switch tab -
              <code className="inline-flex rounded bg-border py-1 px-2 font-mono mx-1">
                Shift
              </code>
              +
              <code className="inline-flex rounded bg-border py-1 px-2 font-mono mx-1">
                E
              </code>
            </p>
          </li>
          <li className="last:pb-0 py-2 border-t border-border">
            <p>
              Show autocomplete -
              <code className="inline-flex rounded bg-border py-1 px-2 mx-1">
                Ctrl/Command
              </code>
              +
              <code className="inline-flex rounded bg-border py-1 px-2 mx-1">
                Space
              </code>
            </p>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export { EditorHints };
