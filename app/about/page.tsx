import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-8 max-w-4xl mx-auto animate-fade-in pb-16">
      
      {/* SECTION 1: Intro Split Layer - Changed items-start to items-end & bumped gap to 12 */}
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16 w-full">
        
        {/* Profile Image Frame - Added 'group' to handle the hover state container */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex-shrink-0 cursor-pointer group">
          <img 
            src="/johirul_islam_shipu.jpg" 
            alt="Johirul Islam" 
            className="w-full h-full object-cover object-[center_22%] grayscale contrast-[1.15] brightness-[0.95] transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>

        {/* Identity Context Block - Removed pt-2 so it naturally aligns to the bottom baseline */}
        <div className="pb-1">
            <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-zinc-400 dark:text-zinc-500 mb-3">
            About
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 leading-none">
            Johirul Islam
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium text-[15px] leading-none">
            Senior Frontend Engineer · React & Next.js
            </p>
        </div>
        </div>

        {/* Section Divider Line - Added right after the header row to match the design reference */}
        <hr className="border-t border-zinc-200 dark:border-zinc-800/80 mb-12" />

      {/* SECTION 2: Narrative Text Layer */}
      <div className="space-y-6 text-[15px] text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed font-normal mb-16">
        <p>
         I started writing code over 7 years ago, diving deep into the JavaScript ecosystem back when frameworks were shifting rapidly and frontend architecture was finding its modern footing. What has kept me hooked ever since isn't just the thrill of a new framework; it’s the art of building clean, highly intuitive user interfaces that solve real-world problems under real-world constraints.
        </p>
        <p>
          Today, I build and architect high-performance frontend systems at Disrupt Technologies Ltd., focusing heavily on Next.js, React, and TypeScript. Over the years, I’ve worked across SaaS platforms, complex UI component libraries, and secure financial systems. I’ve learned firsthand what makes a frontend scalable, resilient, and actually maintainable long after the initial code is shipped.
        </p>
        <p>
          I treat frontend performance the same way I treat code quality: it has to remain stable under pressure, not just look good on a local dev server. The applications I build don’t just render pixels. They improve load times through smart server-side strategies, streamline complex state management, and provide accessible experiences for everyone. Not theoretically. Measurably.
        </p>
      </div>

      {/* Horizontal Structural Line Divider */}
      <hr className="border-t border-zinc-200 dark:border-zinc-800 my-16" />

      {/* SECTION 3: Matrix Highlights Grid */}
      <div className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-zinc-400 dark:text-zinc-500 mb-8">
          Highlights
        </p>
        
        {/* 2x2 Grid Container with custom subtle accent dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-zinc-200/60 dark:border-zinc-800/60">
          
          {/* Highlight Item 1 */}
          <div className="p-8 border-b border-r border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/30 dark:bg-zinc-950/10">
            <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 block mb-2">Experience</span>
            <p className="text-[15px] font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
              7+ years building and scaling web applications
            </p>
          </div>

          {/* Highlight Item 2 */}
          <div className="p-8 border-b border-r border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/30 dark:bg-zinc-950/10">
            <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 block mb-2">Current Role</span>
            <p className="text-[15px] font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
             Sr. Frontend Application Developer at Disrupt Technologies
            </p>
          </div>

          {/* Highlight Item 3 */}
          <div className="p-8 border-b border-r border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/30 dark:bg-zinc-950/10">
            <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 block mb-2">Key Projects</span>
            <p className="text-[15px] font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
              Cave Door SaaS, Dennemeyer UI Library, & Dhaka Bank Platform
            </p>
          </div>

          {/* Highlight Item 4 */}
          <div className="p-8 border-b border-r border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/30 dark:bg-zinc-950/10">
            <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 block mb-2">Expertise</span>
            <p className="text-[15px] font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
              Frontend Architecture, SSR/SSG Optimization, Design Systems
            </p>
          </div>

        </div>
      </div>

      {/* SECTION 4: Philosophy Core Block */}
      <div className="space-y-6 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-zinc-400 dark:text-zinc-500 mb-2">
          What I Believe
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl tracking-tight leading-[1.25] text-zinc-950 dark:text-zinc-50">
          The best interfaces disappear into the user's flow. They don’t make you think about how to interact with them; they just make the experience seamless.
        </h2>
        <div className="space-y-6 text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2">
          <p>
            Frontend development should be exactly the same. When I build a component library or a complex dashboard workflow, the ultimate goal is absolute predictability. Within minutes, a user shouldn't be thinking about the technology or the state management under the hood. They are just getting things done. Faster, smoother, and with fewer friction points slowing them down.
          </p>
          <p className="font-heading italic text-xl tracking-tight text-zinc-500 dark:text-zinc-400 pt-2 block">
            I don’t believe in over-engineering or hype cycles. I believe in clean code and shipping performance.
          </p>
        </div>

        {/* External History Trigger Anchor */}
        <div className="pt-8">
          <a 
            href="https://www.linkedin.com/in/johirul-islam-shipu/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center gap-1.5 font-medium text-[14px] text-zinc-900 dark:text-zinc-100 hover:opacity-75 transition-opacity"
          >
            Full professional history on LinkedIn
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 7h10v10M7 17 17 7"/></svg>
          </a>
        </div>
      </div>

    </div>
  );
}