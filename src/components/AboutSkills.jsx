import { motion } from 'framer-motion';
import { Code2, Brain, Cpu, BookOpen, Sparkles, Rocket } from 'lucide-react';

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
            I'm a Computer Science & Engineering student passionate about building performant web apps, exploring machine learning, and solving challenging problems. I love crafting clean user experiences and writing maintainable code.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-cyan-400" /> Strong foundation in algorithms and data structures</li>
            <li className="flex items-center gap-3"><Rocket className="h-5 w-5 text-fuchsia-400" /> Interested in full‑stack and ML systems</li>
            <li className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-indigo-400" /> Active competitive programming and open‑source contributor</li>
          </ul>
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
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SkillCard
            icon={<Code2 className="h-6 w-6 text-cyan-400" />}
            title="Programming"
            items={[
              { name: 'C++', level: 85 },
              { name: 'Python', level: 90 },
              { name: 'JavaScript', level: 80 },
            ]}
          />
          <SkillCard
            icon={<Cpu className="h-6 w-6 text-fuchsia-400" />}
            title="Web & Systems"
            items={[
              { name: 'React', level: 85 },
              { name: 'Node.js', level: 70 },
              { name: 'Database', level: 75 },
            ]}
          />
          <SkillCard
            icon={<Brain className="h-6 w-6 text-indigo-400" />}
            title="Machine Learning"
            items={[
              { name: 'ML Basics', level: 70 },
              { name: 'Data Science', level: 65 },
              { name: 'PyTorch', level: 55 },
            ]}
          />
          <SkillCard
            icon={<Code2 className="h-6 w-6 text-emerald-400" />}
            title="Tools"
            items={[
              { name: 'Git / GitHub', level: 85 },
              { name: 'Docker', level: 60 },
              { name: 'Linux', level: 75 },
            ]}
          />
        </div>
      </div>
    </section>
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
