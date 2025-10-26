import { motion } from 'framer-motion';
import { Code2, Brain, Cpu, BookOpen, Sparkles, Rocket, ShieldCheck, Gauge } from 'lucide-react';

export default function AboutSkills() {
  return (
    <section id="about" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-20 h-56 w-56 rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-indigo-600/10 blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="text-white/70">
            I'm a Computer Science & Engineering student focused on building performant, secure, and accessible web products. I enjoy working across the stack, translating user needs into reliable systems, and shipping polished interfaces.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-cyan-400" /> Strong foundation in algorithms, data structures, and systems</li>
            <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-emerald-400" /> Security‑minded: authentication, input validation, and safe APIs</li>
            <li className="flex items-center gap-3"><Gauge className="h-5 w-5 text-fuchsia-400" /> Performance: profiling, caching, and responsive UI patterns</li>
            <li className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-indigo-400" /> Actively learning ML for practical product use‑cases</li>
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
            <Badge>Web Security</Badge>
            <Badge>REST APIs</Badge>
            <Badge>Responsive Design</Badge>
            <Badge>Unit Testing</Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/0 p-1">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <div id="skills" className="relative mx-auto mt-20 max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h3 className="font-['Space_Grotesk'] text-2xl font-semibold sm:text-3xl">Skills</h3>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur sm:flex"
          >
            <Rocket className="h-4 w-4 text-cyan-400" /> Fast learner, shipping with quality
          </motion.div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SkillCard
            icon={<Code2 className="h-6 w-6 text-cyan-400" />}
            title="Programming"
            items=[
              { name: 'C++', level: 85 },
              { name: 'Python', level: 90 },
              { name: 'JavaScript', level: 82 },
            ]
          />
          <SkillCard
            icon={<Cpu className="h-6 w-6 text-fuchsia-400" />}
            title="Web & Systems"
            items=[
              { name: 'React', level: 86 },
              { name: 'Node.js', level: 72 },
              { name: 'Databases', level: 78 },
            ]
          />
          <SkillCard
            icon={<Brain className="h-6 w-6 text-indigo-400" />}
            title="Machine Learning"
            items=[
              { name: 'ML Fundamentals', level: 72 },
              { name: 'Data Science', level: 68 },
              { name: 'PyTorch', level: 58 },
            ]
          />
          <SkillCard
            icon={<Code2 className="h-6 w-6 text-emerald-400" />}
            title="Tools"
            items=[
              { name: 'Git / GitHub', level: 88 },
              { name: 'Docker', level: 62 },
              { name: 'Linux', level: 78 },
            ]
          />
        </div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1"
    >
      {children}
    </motion.span>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 backdrop-blur-md"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06]">
          {icon}
        </div>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <div className="space-y-4">
        {items.map((s) => (
          <div key={s.name}>
            <div className="mb-1 flex items-center justify-between text-sm text-white/80">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
