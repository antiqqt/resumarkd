import Image from 'next/image';
import { Button } from '../ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Menu } from 'lucide-react';
import BannerIcon from "../../public/icon.svg";

const Header = () => {
  return (
    <header className="fixed w-full border-b border-border bg-inherit z-10">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between px-2 pb-2 pt-4 text-primary md:flex-row md:px-8">
        <a
          href="#"
          className="inline-flex gap-x-2 rounded-md border border-transparent p-2 font-mono text-2xl font-semibold transition-colors hover:border-primary"
        >
          <Image
            src={BannerIcon}
            width={28}
            height={28}
            alt="Resumarkd icon"
          ></Image>
          Resumarkd
        </a>

        <nav className="hidden gap-x-4 lg:flex">
          <Button asChild variant={'link'}>
            <a className="" href="#">
              How it works
            </a>
          </Button>

          <Button asChild variant={'link'}>
            <a className="" href="#">
              Why markdown?
            </a>
          </Button>
        </nav>

        <Popover>
          <PopoverTrigger className="inline-flex gap-x-2 rounded-md border border-transparent p-2 font-mono text-2xl font-semibold transition-colors hover:border-primary lg:hidden">
            <Menu />
          </PopoverTrigger>
          <PopoverContent className="w-max lg:hidden" align="end">
            <nav className="flex flex-col items-center justify-center gap-x-4">
              <Button asChild variant={'link'}>
                <a className="" href="#">
                  How it works
                </a>
              </Button>

              <Button asChild variant={'link'}>
                <a className="" href="#">
                  Why markdown?
                </a>
              </Button>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
export { Header };
