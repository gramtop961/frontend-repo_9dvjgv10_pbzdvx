import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400" />
            <span>StudioFlow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#products" className="hover:text-neutral-900 dark:hover:text-white transition">Products</a>
            <a href="#blog" className="hover:text-neutral-900 dark:hover:text-white transition">Blog</a>
            <a href="#home" className="px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">Let’s connect!</a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200/60 dark:border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-neutral-700 dark:text-neutral-300">
            <a href="#products" onClick={() => setOpen(false)} className="hover:text-neutral-900 dark:hover:text-white transition">Products</a>
            <a href="#blog" onClick={() => setOpen(false)} className="hover:text-neutral-900 dark:hover:text-white transition">Blog</a>
            <a href="#home" onClick={() => setOpen(false)} className="inline-flex justify-center px-3 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">Let’s connect!</a>
          </div>
        </div>
      )}
    </header>
  );
}
