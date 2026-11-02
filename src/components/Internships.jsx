import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Top Row: Duration & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-white/60 uppercase text-xs tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-white text-[10px] font-semibold uppercase tracking-wider select-none">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white leading-tight mb-1">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-xs font-bold tracking-widest mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
            Skills Gained:
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-white/90">
            {intern.skills.map((skill, sIdx) => (
              <li key={sIdx} className="flex items-start gap-2">
                <span className="text-black font-black mt-0.5">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies */}
      <div className="border-t border-white/10 pt-4 mt-auto">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2">
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {intern.tech.map((t, tIdx) => (
            <span
              key={tIdx}
              className="font-mono text-xs px-2.5 py-1 rounded-lg bg-black/30 text-white/80 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Internships() {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top Torn-Paper SVG Divider (flows from previous dark section) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative Pulsing Black Star (bottom-left at 20% opacity) */}
      <svg
        className="absolute bottom-10 left-8 w-10 h-10 text-black fill-current opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base max-w-xl mx-auto font-medium">
            Practical development internships, real-world application engineering, and industrial software training.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={index} intern={intern} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

