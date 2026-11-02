import { projects, socialLinks } from '../data/portfolioData'

function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ProjectCard({ project, aosDelay }) {
  const isFlagship = project.isFlagship

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`rounded-2xl p-[1px] transition-all duration-300 ${
        isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500 hover:via-white/20 hover:to-red-500/60 shadow-lg shadow-red-950/20'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 md:bg-[#111111]/90 flex flex-col justify-between h-full">
        <div>
          {/* Header Row: Optional Badge Pill & Number */}
          <div className="flex items-center justify-between mb-4">
            {project.badge ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest">
                {project.badge}
              </span>
            ) : (
              <span />
            )}
            <span className="text-5xl font-black text-white/10 italic font-serif select-none">
              {project.number}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-red-600/20 hover:border-red-500/30 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-semibold transition-all hover:scale-105"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}

          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white text-xs md:text-sm font-semibold transition-all shadow-lg shadow-red-500/20 hover:scale-105"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs md:text-sm font-semibold cursor-not-allowed select-none">
              <ExternalLinkIcon className="w-4 h-4 opacity-50" />
              Demo Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Work that speaks for itself
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            A selection of production-ready web applications, IoT solutions, and productivity platforms I've engineered.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-6 md:gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Explore All Repositories Link */}
        {socialLinks.github && (
          <div data-aos="fade-up" className="text-center">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm hover:border-red-500/30 hover:scale-105 transition-all shadow-xl"
            >
              <GitHubIcon className="w-5 h-5" />
              <span>Explore All My Repositories</span>
              <svg
                className="w-4 h-4 fill-none stroke-current"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
