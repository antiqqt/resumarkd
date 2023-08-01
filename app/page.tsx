import { Hero } from '@/components/page/hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="-translate-y-1/2">
        <Hero />
      </div>
    </main>
  );
}
