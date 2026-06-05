import Link from 'next/link';

interface Project {
  title: string;
  category: string;
  role: string;
  architecture: string;
  engineering: string;
  result: string;
  link?: string;
  // Senior Designer layout patch: Explicit unique colors per item
  badgeStyle: string; 
}

const PROJECTS_DATA: Project[] = [
  {
    title: "GreenDelta Insurance Module",
    category: "Website, E-Commerce",
    role: "Lead Frontend Architect",
    architecture: "Mediator Pattern, Proxy Pattern, Finite State Machines (FSM)",
    engineering: "Structured a transactional checkout pipeline employing the mediator pattern to coordinate complex cart logic, utilizing a proxy pattern for runtime validation and an isolated finite state machine for multi-tiered insurance steps.",
    result: "Replaced error-prone legacy cart states with a completely deterministic, lightweight user flow that maximized code maintainability and decreased checkout abandonment.",
    link: "#",
    badgeStyle: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
  },
  {
    title: "Cave Door SaaS Engine",
    category: "Enterprise Cloud Application",
    role: "Senior Frontend Developer",
    architecture: "Micro-Frontends, Monorepo Architecture, Clean Architecture",
    engineering: "Decoupled highly dependent business views into domain-driven workspaces. Developed a strict core communication layer powered by event-driven message paths to guarantee completely isolated module deployments.",
    result: "Cut continuous integration deployment times down significantly while allowing autonomous teams to ship updates without runtime dependencies or collision risks.",
    badgeStyle: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
  },
  {
    title: "Dennemeyer UI Library",
    category: "Design System, Tooling",
    role: "Frontend Engineer / Lead Tooling",
    architecture: "Atomic Design, Component-Driven Development, Zero-Runtime CSS",
    engineering: "Architected and distributed a unified component system engineered with highly accessible headless primitives. Enforced strict token rules and layout boundaries via custom-linted build hooks.",
    result: "Unified visual continuity across 4 disparate enterprise application suites, reducing initial feature layout timelines for product teams from days to hours.",
    badgeStyle: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
  },
  {
    title: "Dhaka Bank Digital Platform",
    category: "Financial Systems, Banking",
    role: "Senior Application Developer",
    architecture: "Command Query Responsibility Segregation (CQRS) Client Layer, Web Crypto API",
    engineering: "Engineered secure client-side transaction ledgers utilizing state persistence layers. Wrapped balance checks and sensitive workflows in strict cryptographic filters directly at the client layer.",
    result: "Eliminated out-of-order component updates during sporadic networks and maintained rock-solid security profiles adhering to modern regional compliance audits.",
    badgeStyle: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
  },
  {
    title: "Atlas Design Engine",
    category: "Graphics, Web Graphics Vector Editor",
    role: "Systems Architect",
    architecture: "Command Pattern, Quadtree Spatial Indexing, Canvas Optimization",
    engineering: "Designed a multi-level structural undo/redo layer using command design implementations. Integrated quadtree canvas algorithms to optimize point-intersection collision hits over thousands of canvas elements.",
    result: "Achieved ultra-smooth rendering performance clocks at 60 FPS under massive vector stress loads without layout drops or browser memory compilation leaks.",
    badgeStyle: "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400"
  },
  {
    title: "Vanguard Supply Chain Core",
    category: "Logistics, Analytics Portal",
    role: "Frontend Team Lead",
    architecture: "Reactive Extensions (RxJS), Event Sourcing, Virtualized Grid Layouts",
    engineering: "Configured highly performant telemetry ingestion modules utilizing stream pipe transformations. Bound updates natively onto virtualized rows to securely manage live layout refreshes.",
    result: "Successfully enabled logistics managers to analyze complex multi-stop routes live without pinning or stalling browser processes or main script threads.",
    badgeStyle: "bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400"
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-8 max-w-4xl mx-auto animate-fade-in pb-24 px-4">
      
      {/* Page Header Section */}
      <div className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-zinc-400 dark:text-zinc-500 mb-2">
          Projects
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
          Selected Works
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-[15px] max-w-3xl leading-relaxed font-normal">
          A curated selection of enterprise applications, financial systems, and design engines built over the years. 
          Rather than just assembling features, my focus is on designing predictable frontend systems—leveraging 
          proven architectural patterns, strict state hygiene, and modern rendering strategies to build software that scales cleanly.
        </p>
      </div>

      {/* Structural Timeline Rows Stack */}
      <div className="space-y-0 border-t border-zinc-200 dark:border-zinc-800/60">
        {PROJECTS_DATA.map((project, idx) => (
          <div 
            key={idx} 
            className="py-14 border-b border-zinc-200 dark:border-zinc-800/60 grid grid-cols-1 md:grid-cols-12 gap-12 items-start group hover:bg-zinc-50/30 dark:hover:bg-zinc-950/5 transition-colors duration-200 -mx-4 px-4 rounded-xl"
          >
            {/* Left Column: Category Info, Title, & Spaced Metadata Info */}
            <div className="md:col-span-5 space-y-6">
              
              {/* Colorful, individual backgrounds applied directly below dynamically */}
              <div className="flex items-center gap-2.5">
                <span className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-[4px] tracking-normal ${project.badgeStyle}`}>
                  0{idx + 1}
                </span>
                <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Heading Titles */}
              <h3 className="font-heading text-2xl sm:text-3xl tracking-tight text-zinc-900 dark:text-zinc-50">
                {project.link ? (
                  <a href={project.link} className="hover:underline inline-flex items-center gap-1.5 group/link">
                    {project.title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"><path d="M7 7h10v10M7 17 17 7"/></svg>
                  </a>
                ) : (
                  project.title
                )}
              </h3>

              {/* Metadata Stack - Safe Block Layout (No Overlaps) */}
              <div className="space-y-4 pt-1 text-[15px]">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-zinc-400 dark:text-zinc-500 w-28 shrink-0 font-medium">Role:</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-medium">{project.role}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-zinc-400 dark:text-zinc-500 w-28 shrink-0 font-medium">Architecture:</span>
                  <span className="text-zinc-600 dark:text-zinc-400 font-mono text-[13px] leading-relaxed break-words">
                    {project.architecture}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Case Narrative */}
            <div className="md:col-span-7 space-y-6 pt-1 md:pt-12">
              <div className="space-y-2">
                <strong className="text-zinc-800 dark:text-zinc-200 font-medium block uppercase tracking-wider text-[11px]">
                  The Engineering
                </strong>
                <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.engineering}
                </p>
              </div>
              
              <div className="space-y-2">
                <strong className="text-zinc-800 dark:text-zinc-200 font-medium block uppercase tracking-wider text-[11px]">
                  The Result
                </strong>
                <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.result}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}