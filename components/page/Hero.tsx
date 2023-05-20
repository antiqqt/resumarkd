import Link from 'next/link';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section className="pt-10 flex items-center justify-center md:pt-28">
      <div className="max-w-screen-md">
        <div className="flex flex-col gap-y-3 text-center md:gap-y-5">
          <h1 className="flex flex-col font-mono text-3xl font-bold text-primary md:text-5xl">
            <span>Create beautiful resumes</span>
            <span>with Markdown</span>
          </h1>
          <div className="text-base leading-relaxed text-primary text-opacity-25 md:text-lg">
            <p>Quick and easy.</p>
            <p>
              Make your resume{' '}
              <span className="bg-purple-200 px-1">stand out</span> from the
              rest.
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 md:mt-8">
          <Button asChild size={'lg'}>
            <Link href="/editor">Try it out</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export { Hero };
