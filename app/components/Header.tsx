import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold text-emerald-600 dark:text-emerald-400 sm:text-xl">
            Albert Geoff S. Buison
          </Link>
          <nav className="flex items-center space-x-4 text-sm font-medium sm:space-x-6">
            <Link href="/about" className="flex items-center gap-2 text-zinc-800 transition-colors hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400" aria-label="About me">
              <i className="pi pi-user text-xl sm:text-base"></i>
              <span className="hidden sm:inline">About</span>
            </Link>
            <Link href="/projects" className="flex items-center gap-2 text-zinc-800 transition-colors hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400" aria-label="My projects">
              <i className="pi pi-briefcase text-xl sm:text-base"></i>
              <span className="hidden sm:inline">Projects</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-zinc-800 transition-colors hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400" aria-label="Contact me">
              <i className="pi pi-envelope text-xl sm:text-base"></i>
              <span className="hidden sm:inline">Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}