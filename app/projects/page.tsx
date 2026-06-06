import Link from 'next/link';

interface Project {
  title: string;
  category: string;
  role: string;
  architecture: string;
  engineering: string;
  result: string;
  link?: string;
  badgeStyle: string; 
}

const PROJECTS_DATA: Project[] = [
  {
    title: "Cave Door SaaS Platform",
    category: "SaaS Platform",
    role: "Senior Frontend Engineer",
    architecture: "Custom Hooks Pattern, Observer Pattern, Adapter Pattern, Controlled/Uncontrolled Components",
    engineering: "Built a real-time data ingestion portal using isolated custom hooks for state machine transitions, employing an internal observer pattern for stream updates and an adapter pattern to normalize Meta Graph API payloads.",
    result: "Achieved strict separation of concerns within a highly asynchronous data ecosystem, enabling smooth graph rendering and bulletproof error boundaries.",
    badgeStyle: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
  },
   {
    title: "Dennemeyer UI Library",
    category: "System, Docs",
    role: "Senior Frontend Engineer",
    architecture: "Atomic Design Pattern, Render Props, Singleton Pattern, Higher-Order Components (HOC)",
    engineering: "Constructed a robust corporate design ecosystem using the atomic design pattern, introducing flexible layout customizations via render props and injecting accessibility (WCAG) criteria using structural HOCs.",
    result: "Created an accessible, bulletproof component library that minimized layout regressions and served as a single, maintainable source of truth across development teams.",
    badgeStyle: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
  },
  {
    title: "Dhaka Bank Credit Card Platform",
    category: "Website, App",
    role: "Senior Frontend Engineer",
    architecture: "Component-Driven Architecture, Compound Components, Facade Pattern, State Hoisting",
    engineering: "Developed a multi-step onboarding funnel using compound components to isolate heavy form logic, abstracting API communications behind a unified data facade while maintaining step progression via strict state hoisting.",
    result: "Delivered a modular, secure platform that separated presentation from business rules, drastically accelerating form rendering times and runtime stability.",
    badgeStyle: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
  },
  {
    title: "NRB Bank Onboarding Platform",
    category: "Website, Onboarding",
    role: "Senior Frontend Engineer",
    architecture: "Strategy Pattern, Provider Pattern, Container-Presentational Pattern, Memoization",
    engineering: "Fabricated a scalable KYC validation module leveraging the strategy pattern to dynamically switch validation rules, distributing global identity states through the provider pattern while keeping views decoupled.",
    result: "Engineered an elastic, low-latency financial platform capable of processing secure verification pipelines with zero unnecessary component re-renders.",
    badgeStyle: "bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400"
  },
  
  {
    title: "LankaBangla Finance Portal",
    category: "Website, ECRM",
    role: "Senior Frontend Engineer",
    architecture: "Repository Pattern, Factory Pattern, Pub-Sub Architecture, Single Responsibility Principle",
    engineering: "Designed an enterprise-grade analytics dashboard that decoupled network layers using the repository pattern, generated chart instances dynamically via a factory pattern, and isolated event streaming with pub-sub.",
    result: "Unified scattered data streams into a single performant data hub, allowing teams to append new analytics configurations without mutating core UI shells.",
    badgeStyle: "bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400"
  },
 
  {
    title: "GreenDelta Insurance Module",
    category: "Website, E-Commerce",
    role: "Frontend Developer",
    architecture: "Mediator Pattern, Proxy Pattern, Finite State Machines (FSM), Clean Architecture",
    engineering: "Structured a transactional checkout pipeline employing the mediator pattern to coordinate complex cart logic, utilizing a proxy pattern for runtime validation and a finite state machine for multi-tiered insurance steps.",
    result: "Replaced error-prone legacy cart states with a deterministic, lightweight user flow that maximized code maintainability and decreased checkout abandonment.",
    link: "#",
    badgeStyle: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-8 max-w-4xl mx-auto animate-fade-in pb-24 px-4">
      
      {/* Page Header Section */}
      <div className="mb-16 md:mb-20">
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
            className="py-10 md:py-14 border-b border-zinc-200 dark:border-zinc-800/60 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start group hover:bg-zinc-50/30 dark:hover:bg-zinc-950/5 transition-colors duration-200 rounded-xl sm:-mx-4 sm:px-4"
          >
            {/* Left Column: Category Info, Title, & Spaced Metadata Info */}
            <div className="md:col-span-5 space-y-4 md:space-y-6">
              
              {/* Category Badge & Label */}
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

              {/* Metadata Stack - Safe Block Layout */}
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