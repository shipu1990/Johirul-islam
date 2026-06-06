import Image from "next/image";

export default function Home() {
  return (
    /* Added responsive page padding (px-4) to protect phone screen edges */
    <div className="flex flex-col items-center text-center pt-10 sm:pt-16 pb-12 px-4 max-w-4xl mx-auto">
      
      {/* 2. Circular Profile Avatar */}
      <div className="relative w-28 h-28 mb-10 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 cursor-pointer group">
        <Image
          src="/johirul_islam_shipu.jpg"
          alt="Johirul Islam"
          fill
          priority
          sizes="112px"
          className="object-cover grayscale contrast-[1.15] brightness-[0.95] transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      {/* 3. Hero Typography Header - Debugged for Mobile Text Scaling */}
      <h1 className="max-w-3xl font-heading text-4xl sm:text-5xl md:text-[72px] tracking-tight leading-[1.15] md:leading-[1.08] text-zinc-900 dark:text-zinc-50 mb-8">
        I architect<span className="text-[#a8a29e] font-normal italic"> frontends</span> 
        <span className="block sm:inline md:block mt-1 font-normal italic"> for complex systems</span>
      </h1>

      {/* 4. Description Paragraph */}
      <p className="max-w-xl text-sm sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 tracking-wide mb-10 font-normal">
        7+ years of frontend systems. Deeply passionate about architecting scalable web applications using React, Next.js, and TypeScript. Now helping engineering teams deliver rock-solid frontend infrastructure without the technical debt. No sloppy prop-drilling. No bloated bundles. Codebases that scale.
      </p>

      {/* 5. Center Content Grid Row Social Links */}
      <div className="flex items-center gap-6 text-[#a8a29e] dark:text-zinc-500">
        {/* LinkedIn */}
        <a href="#" className="hover:text-[#6b6560] dark:hover:text-zinc-300 transition-colors" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        {/* X / Twitter */}
        <a href="#" className="hover:text-[#6b6560] dark:hover:text-zinc-300 transition-colors" aria-label="X (Twitter)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>

        {/* Facebook */}
        <a href="#" className="hover:text-[#6b6560] dark:hover:text-zinc-300 transition-colors" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        {/* Website / Portfolio Globe */}
        <a href="#" className="hover:text-[#6b6560] dark:hover:text-zinc-300 transition-colors" aria-label="Website">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        </a>
      </div>
    </div>
  );
}