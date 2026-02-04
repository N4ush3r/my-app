import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Albert Geoff S. Buison',
  description: 'Current projects and works in progress.',
};

export default function ProjectsPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-32 px-4 min-h-[calc(100vh-64px)]">
      {/* Picture Frame */}
      <div className="relative bg-white dark:bg-zinc-800 p-8 shadow-2xl border-[20px] border-zinc-900 dark:border-zinc-700">
        {/* Inner Canvas */}
        <div className="flex h-64 w-64 sm:h-80 sm:w-80 items-center justify-center bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-900 shadow-inner">
          <p className="font-serif text-3xl italic text-zinc-400 dark:text-zinc-600 text-center">
            I have nothing
          </p>
        </div>
      </div>
    </section>
  );
}
