'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Maintained your precise font configurations and color values
const commonLinkClasses = "relative text-[13px] uppercase tracking-[0.08em] font-medium pb-2 sm:pb-5 text-[#a8a29e] transition-opacity duration-200 hover:opacity-70 block whitespace-nowrap";

function NavLink({ 
  href, 
  children, 
  isMounted, 
  onClick,
  target, 
  rel 
}: { 
  href: string; 
  children: React.ReactNode; 
  isMounted: boolean; 
  onClick?: () => void;
  target?: string;
  rel?: string;
}) {
  const pathname = usePathname();
  const isActive = isMounted && pathname === href;

  return (
    <Link href={href} className={commonLinkClasses} target={target} rel={rel} onClick={onClick}>
      <span className={isActive ? "text-[#6b6560] dark:text-zinc-200" : ""}>
        {children}
      </span>
      {isActive && (
        <span className="absolute left-0 -bottom-[1px] sm:-bottom-[1px] h-[1px] w-full bg-[#6b6560] dark:bg-zinc-200 z-10 hidden sm:block" />
      )}
    </Link>
  );
}

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="bg-bg-nav border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-4 sm:pb-0 flex flex-col sm:flex-row sm:justify-between sm:items-end w-full">
        
        {/* Brand Row: Logo, Theme Toggle, and Hamburger Trigger */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Link 
            href="/" 
            className="font-heading text-2xl tracking-tight transition-opacity duration-200 hover:opacity-70 pb-2 sm:pb-4 inline-block"
            onClick={() => setIsOpen(false)}
          >
            Johirul Islam.
          </Link>
          
          {/* Mobile Interactions Group (Theme + Hamburger) */}
          <div className="flex items-center gap-2 sm:hidden">
            {/* Mobile Dark Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-50 transition-transform active:scale-95 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {mounted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              ) : (
                <div className="w-4 h-4" />
              )}
            </button>

            {/* Hamburger / Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 cursor-pointer focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                /* Dynamic Close X Icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                /* Dynamic Hamburger Menu Lines Icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Link Stack */}
        <div className={`
          ${isOpen ? 'flex animate-fade-in' : 'hidden'} 
          sm:flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-10 w-full sm:w-auto pt-4 sm:pt-0
        `}>
          
          {/* Link List Container */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto">
            <NavLink href="/" isMounted={mounted} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink href="/projects" isMounted={mounted} onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink href="/stack" isMounted={mounted} onClick={() => setIsOpen(false)}>Stack</NavLink>
            <NavLink href="/about" isMounted={mounted} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink href="/contact" isMounted={mounted} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <NavLink 
              href="/johirul_islam_shipu_cv.pdf" 
              isMounted={mounted}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Downloads
            </NavLink>
          </div>

          {/* Regular Desktop Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="hidden sm:flex w-8 h-8 mb-4 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-50 transition-transform active:scale-95 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {mounted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}