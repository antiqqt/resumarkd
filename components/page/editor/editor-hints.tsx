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

const EditorHints = () => {
  return (
    <Popover>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-10 rounded-full p-0">
                <Info className="aspect-square w-full" />
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

        <ul className="mt-2 flex flex-col gap-y-1">
          <li>
            <p>
              Switch tab -{' '}
              <span className="rounded bg-border p-0.5 font-mono">Shift</span> +{' '}
              <span className="rounded bg-border p-0.5 font-mono">E</span>{' '}
            </p>
          </li>
          <li>
            <p>
              Show autocomplete -{' '}
              <span className="rounded bg-border p-0.5 font-mono">
                Ctrl/Command
              </span>{' '}
              + <span className="rounded bg-border p-0.5 font-mono">Space</span>{' '}
            </p>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export { EditorHints };
