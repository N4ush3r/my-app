import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl py-6 px-4 flex flex-col items-center justify-center gap-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center space-x-6">
          <a href="https://github.com/N4ush3r" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
            <i className="pi pi-github" style={{ fontSize: '1.25rem' }}></i>
          </a>
          <a href="https://www.linkedin.com/in/albert-geoff-buison-9334b8337/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
            <i className="pi pi-linkedin" style={{ fontSize: '1.25rem' }}></i>
          </a>
          <Link href="/contact" aria-label="Contact" className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
            <i className="pi pi-envelope" style={{ fontSize: '1.25rem' }}></i>
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Albert Geoff S. Buison. All Rights Reserved.</p>
      </div>
    </footer>
  );
}