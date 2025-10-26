import { motion } from 'framer-motion';
import { BookOpen, Mail, Linkedin, FileText, MapPin } from 'lucide-react';

const timeline = [
  {
    title: 'Built motion-rich portfolio system',
    place: 'Personal Project',
    time: '2025',
    desc: 'A reusable portfolio engine with 3D hero, dynamic theming, and framer-motion choreography.'
  },
  {
    title: 'Frontend Engineer Internship',
    place: 'Tech Startup',
    time: '2024',
    desc: 'Delivered interactive dashboards and component libraries with performance budgets.'
  },
  {
    title: 'B.S. in Computer Science',
    place: 'University',
    time: '2023',
    desc: 'Specialized in HCI and systems — blending usability with robust engineering.'
  }
];

export default function TimelineContact() {
  return (
    <section id="experience" className="relative w-full bg-gradient-to-b from-black to-[#06060b] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-500/10 via-fuchsia-500/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-widest text-white/60">Experience</p>
          <h2 className="font-['Manrope'] text-3xl font-bold sm:text-4xl">Journey</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-400/60 via-violet-400/60 to-cyan-400/60" />
          <div className="space-y-10">
            {timeline.map((t, idx) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: idx * 0.06, type: 'spring', stiffness: 140, damping: 18 }}
                className="relative ml-8 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="absolute -left-8 top-5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-white shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{t.title}</h3>
                  <span className="text-xs text-white/60">{t.time}</span>
                </div>
                <p className="text-sm text-white/70">{t.place}</p>
                <p className="mt-2 text-sm text-white/80">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140, damping: 16 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/15 via-violet-600/10 to-cyan-500/15 p-6 backdrop-blur-xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-amber-300" />
            <h3 className="font-semibold">Let’s build something remarkable</h3>
          </div>
          <p className="max-w-3xl text-sm text-white/80">
            I’m available for internships, freelance opportunities, and collaborations. If you have a product idea or need help polishing your interface with motion and 3D, let’s talk.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
              <FileText className="h-4 w-4" /> Resume
            </a>
            <span className="ml-auto inline-flex items-center gap-2 text-xs text-white/60">
              <MapPin className="h-3.5 w-3.5" /> Remote / Open to relocate
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
