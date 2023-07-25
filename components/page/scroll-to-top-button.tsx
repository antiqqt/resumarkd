'use client';

import { cn } from '@/lib/cn';
import { ChevronUp } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useState
} from 'react';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

type Props = ComponentPropsWithoutRef<'button'> & {
  threshold?: number;
};

const ScrollToTopButton = ({ threshold = 50, className }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const showAfterThreshold = useCallback(() => {
    const hasExceededThreshold =
      document.body.scrollTop > threshold ||
      document.documentElement.scrollTop > threshold;


    setIsVisible(hasExceededThreshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', showAfterThreshold);

    return () => {
      window.removeEventListener('scroll', showAfterThreshold);
    };
  }, [showAfterThreshold]);

  return (
    <>
      {isVisible && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleScrollToTop}
                variant={'outline'}
                className={cn('w-10 rounded-full p-0', className)}
              >
                <ChevronUp />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="fonts-sans font-medium">Scroll back to top</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
};
export { ScrollToTopButton };
