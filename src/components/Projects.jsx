import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Note Summarizer',
    desc: 'A web app that summarizes lecture notes using transformer models with clean, exportable outputs.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Competitive Programming Kit',
    desc: 'Template library and visualizer for graphs and DP with interactive problem notebooks.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Personal Portfolio (this site)',
    desc: 'Modern, animated and responsive portfolio with 3D Spline hero and slick interactions.',
    image: 'https://images.unsplash.com/photo-1623697899817-2e067e4a4036?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZXJzb25hbCUyMFBvcnRmb2xpbyUyMCUyOHRoaXMlMjBzaXRlJTI5fGVufDB8MHx8fDE3NjE1MTM0NDV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Vision Assistant',
    desc: 'Small CNN-powered app for classifying everyday objects on-device.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">Hover to preview. Click to view code or a live demo.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, image, github, demo, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20"
    >
      <div className="relative aspect-video overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-70" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-white/70">{desc}</p>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110"
          >
            <ExternalLink className="h-4 w-4" /> Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
