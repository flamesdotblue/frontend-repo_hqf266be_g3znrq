import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce Dashboard',
    desc: 'A motion-first analytics suite with shimmering gradients, realtime charts, and buttery interactions.',
    tags: ['React', 'Framer Motion', 'Tailwind']
  },
  {
    title: '3D Workflow Explorer',
    desc: 'Interactive 3D scenes paired with smart UI overlays to tell complex product stories.',
    tags: ['Spline', 'React', 'UX']
  },
  {
    title: 'Secure DevOps Starter',
    desc: 'Batteries-included template with auth, API, and CI — built for velocity and quality.',
    tags: ['FastAPI', 'MongoDB', 'CI/CD']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-[#070711] to-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-widest text-white/60">Projects</p>
          <h2 className="font-['Manrope'] text-3xl font-bold sm:text-4xl">Selected Work</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            A mix of production builds, prototypes, and explorations — each focused on craft, performance, and a memorable feel.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 140, damping: 16 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Faux preview with moving sheen */}
              <div className="relative h-40 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_40%)]" />
                <motion.div
                  aria-hidden
                  className="absolute -inset-x-10 -top-1/2 h-[200%] rotate-12 bg-gradient-to-b from-white/10 to-transparent"
                  animate={{ x: ['-10%', '110%'] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                />
              </div>

              <div className="relative z-10 space-y-3 p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-white/70">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full border border-white/15 bg-black/30 px-2 py-0.5 text-xs text-white/70">{t}</span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <a href="#" className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/15">
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
