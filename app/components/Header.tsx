import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-emerald-600/90 backdrop-blur-sm dark:bg-emerald-900/90 border-b border-emerald-500 dark:border-emerald-800 shadow-sm">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-rainbow {
            background-size: 200% 200%;
            animation: rainbow 3s ease infinite;
          }
        `
      }} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group text-lg font-bold bg-white px-4 py-1.5 rounded-full shadow-sm hover:bg-zinc-50 transition-all hover:scale-110 sm:text-xl">
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-rainbow bg-clip-text text-emerald-600 group-hover:text-transparent transition-colors">
              Home
            </span>
          </Link>
          <nav className="flex items-center space-x-4 text-sm font-medium sm:space-x-6">
            <Link href="/about" className="flex items-center gap-2 text-white/90 px-3 py-1.5 rounded-full transition-all hover:bg-white hover:text-emerald-600 hover:scale-110" aria-label="About me">
              <i className="pi pi-user text-xl sm:text-base"></i>
              <span className="hidden sm:inline">About</span>
            </Link>
            <Link href="/projects" className="flex items-center gap-2 text-white/90 px-3 py-1.5 rounded-full transition-all hover:bg-white hover:text-emerald-600 hover:scale-110" aria-label="My projects">
              <i className="pi pi-briefcase text-xl sm:text-base"></i>
              <span className="hidden sm:inline">Projects</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-white/90 px-3 py-1.5 rounded-full transition-all hover:bg-white hover:text-emerald-600 hover:scale-110" aria-label="Contact me">
              <i className="pi pi-envelope text-xl sm:text-base"></i>
              <span className="hidden sm:inline">Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}