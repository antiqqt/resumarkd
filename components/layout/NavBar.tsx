import Image from 'next/image';
import { Button } from '../ui/button';

const NavBar = () => {
  return (
    <nav className="fixed w-full border-b-2 border-accent">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between px-8 pb-2 pt-4 text-primary md:flex-row">
        <section className="flex gap-x-4">
          <a
            href="#"
            className="inline-flex gap-x-2 rounded-md border border-transparent p-2 text-2xl font-semibold transition-colors hover:border-primary hover:bg-accent"
          >
            <Image
              src="./icon.svg"
              width={28}
              height={28}
              alt="Resumarkd icon"
            ></Image>
            Resumarkd
          </a>
        </section>

        <section className="flex gap-x-4">
          <Button asChild variant={'link'}>
            <a className="" href="#">
              How it works
            </a>
          </Button>

          <Button asChild variant={'link'}>
            <a className="" href="#">
              About us
            </a>
          </Button>
        </section>
      </div>
    </nav>
  );
};
export { NavBar };
