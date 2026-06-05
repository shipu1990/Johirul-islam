'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Updated text color utility straight to your fixed token: #a8a29e
const commonLinkClasses = "relative text-[13px] uppercase tracking-[0.08em] font-medium pb-5 text-[#a8a29e] transition-opacity duration-200 hover:opacity-70 block";

function NavLink({ 
  href, 
  children, 
  isMounted, 
  target, 
  rel 
}: { 
  href: string; 
  children: React.ReactNode; 
  isMounted: boolean; 
  target?: string;
  rel?: string;
}) {
  const pathname = usePathname();
  const isActive = isMounted && pathname === href;

  return (
    <Link href={href} className={commonLinkClasses} target={target} rel={rel}>
      {/* If active, apply your exact active color #6b6560, else keep default */}
      <span className={isActive ? "text-[#6b6560] dark:text-zinc-200" : ""}>
        {children}
      </span>
      {isActive && (
        // Border color matched directly to your active text token #6b6560
        <span className="absolute left-0 -bottom-[1px] h-[1px] w-full bg-[#6b6560] dark:bg-zinc-200 z-10" />
      )}
    </Link>
  );
}

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

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
      <div className="max-w-4xl mx-auto px-6 pt-4 pb-0 flex justify-between items-end w-full">
        {/* Left side: Logo expands naturally */}
        <div>
          <Link href="/" className="font-heading text-2xl tracking-tight transition-opacity duration-200 hover:opacity-70 pb-4 inline-block">
            Johirul Islam.
          </Link>
        </div>

        {/* Right side: Wraps both links and the theme toggle tightly together at the far right edge */}
        <div className="flex items-end gap-10">
          {/* Clean spaced navigation link list */}
          <div className="flex gap-8">
            <NavLink href="/" isMounted={mounted}>Home</NavLink>
            <NavLink href="/projects" isMounted={mounted}>Projects</NavLink>
            <NavLink href="/stack" isMounted={mounted}>Stack</NavLink>
            <NavLink href="/about" isMounted={mounted}>About</NavLink>
            <NavLink href="/contact" isMounted={mounted}>Contact</NavLink>
            
            {/* Downloads item configured to point to your PDF and load it into a clean, new tab */}
            <NavLink 
              href="/johirul_islam_shipu_cv.pdf" 
              isMounted={mounted}
              target="_blank"
              rel="noopener noreferrer"
            >
              Downloads
            </NavLink>
          </div>

          {/* Theme Toggle Button sitting right next to Contact link with an clean gap-10 margin shift */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 mb-4 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-50 transition-transform active:scale-95 cursor-pointer"
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