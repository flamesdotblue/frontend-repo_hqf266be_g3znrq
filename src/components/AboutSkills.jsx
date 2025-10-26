import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Gauge, Code2 } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Systems Thinking',
    desc: 'I design modular architectures that scale, stay maintainable, and feel premium.'
  },
  {
    icon: ShieldCheck,
    title: 'Security by Design',
    desc: 'Auth, validation, and safe defaults built-in from day one — not as an afterthought.'
  },
  {
    icon: Gauge,
    title: 'Performance',
    desc: 'Motion that feels silky smooth at 60fps, with Lighthouse-friendly optimizations.'
  },
  {
    icon: Code2,
    title: 'DX & Tooling',
    desc: 'Clean code, type safety, and CI-ready workflows for reliable delivery.'
  }
];

export default function AboutSkills() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-[#070711] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-widest text-white/60">About</p>
          <h2 className="font-['Manrope'] text-3xl font-bold sm:text-4xl">
            Elegant engineering for ambitious products
          </h2>
          <p className="mt-3 max-w-3xl text-white/70">
            I blend product sensibilities with strong engineering to build interfaces that feel alive — carefully choreographed motion, thoughtful UX, and reliable backends.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 140, damping: 16 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-cyan-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 font-semibold">{f.title}</h3>
                <p className="text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
