import Link from 'next/link';

export default function ContactPage() {
  return (
    /* Added responsive side margins (px-4), center layout alignment (mx-auto), and clean base bottom padding */
    <div className="pt-8 max-w-3xl mx-auto animate-fade-in px-4 pb-24">
      
      {/* Upper Category Track Label */}
      <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-zinc-400 dark:text-zinc-500 mb-3">
        Contact
      </p>

      {/* Large Display Title - Ensured scale works elegantly everywhere */}
      <h1 className="font-heading text-4xl sm:text-6xl tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
        Let’s talk.
      </h1>

      {/* Descriptive Intro text */}
      <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
        Whether you are looking to turn complex designs into pixel-perfect code, launch a scalable SaaS platform, or bring a seasoned React developer onto your engineering team.
      </p>

      {/* Horizontal Divider Line */}
      <hr className="border-t border-zinc-200 dark:border-zinc-800 my-12" />

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
        
        {/* Left Action Column */}
        <div className="space-y-10">
          {/* Action Blocks 1: Training Hook */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.12em] font-semibold text-zinc-400 dark:text-zinc-500 mb-3">
              Book a Training
            </h3>
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-1.5 font-medium text-zinc-950 dark:text-zinc-50 hover:opacity-70 transition-opacity text-[15px]"
            >
              Schedule a discovery call
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 7h10v10M7 17 17 7"/>
              </svg>
            </a>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
              30-minute call to discuss your team, stack, and goals.
            </p>
          </div>

          {/* Action Blocks 2: Direct Mail Hook */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.12em] font-semibold text-zinc-400 dark:text-zinc-500 mb-3">
              Email
            </h3>
            {/* Added block layout and word-break rules to prevent email text clipping on mobile viewports */}
            <a 
              href="mailto:shipu.johirul2023@gmail.com" 
              className="block font-medium text-zinc-950 dark:text-zinc-50 hover:opacity-70 transition-opacity text-[15px] break-words"
            >
              shipu.johirul2023@gmail.com
            </a>
          </div>
        </div>

        {/* Right Socials Block Column ("Elsewhere") */}
        <div>
          <h3 className="text-[11px] uppercase tracking-[0.12em] font-semibold text-zinc-400 dark:text-zinc-500 mb-4">
            Elsewhere
          </h3>

          <div className="space-y-3.5">
            {/* Social Link Wrapper Item: LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-800/50 transition-colors group-hover:bg-zinc-200/50 dark:group-hover:bg-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <span className="text-[14px] font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 transition-colors">LinkedIn</span>
            </a>

            {/* Social Link Wrapper Item: Twitter / X */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-800/50 transition-colors group-hover:bg-zinc-200/50 dark:group-hover:bg-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </div>
              <span className="text-[14px] font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 transition-colors">Twitter / X</span>
            </a>

            {/* Social Link Wrapper Item: Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-800/50 transition-colors group-hover:bg-zinc-200/50 dark:group-hover:bg-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              <span className="text-[14px] font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 transition-colors">Facebook</span>
            </a>

            {/* Social Link Wrapper Item: Blog Node */}
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-800/50 transition-colors group-hover:bg-zinc-200/50 dark:group-hover:bg-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <span className="text-[14px] font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 transition-colors">Blog</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}