import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, FileText } from 'lucide-react';

const timeline = [
  {
    title: 'Bachelor of Technology in CSE',
    org: 'Your University',
    period: '2022 — Present',
    details: 'Coursework: DSA, OS, DBMS, Networks, OOP, ML. Activities: Coding club lead, 2x hackathon finalist.'
  },
  {
    title: 'Software Engineering Intern',
    org: 'Tech Startup',
    period: 'Summer 2024',
    details: 'Built internal dashboards, automated reporting, and improved API response times by ~30%.'
  },
  {
    title: 'Open Source Contributor',
    org: 'Various',
    period: '2023 — Present',
    details: 'Contributed features and fixes to frontend tooling and ML libraries used by thousands.'
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export default function TimelineContact() {
  return (
    <section id="experience" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute bottom-10 right-16 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-['Space_Grotesk'] text-3xl font-bold sm:text-4xl">Experience & Education</h2>

        <div className="relative mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative border-l border-white/15 pl-6">
              {timeline.map((itemData, idx) => (
                <motion.div
                  key={itemData.title}
                  variants={item}
                  className="relative mb-10"
                >
                  <span className="absolute -left-[9px] top-1 block h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow" />
                  <h3 className="text-lg font-semibold">{itemData.title}</h3>
                  <p className="text-sm text-white/70">{itemData.org} · {itemData.period}</p>
                  <p className="mt-2 text-white/80">{itemData.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <ContactCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard() {
  return (
    <div id="contact" className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-['Space_Grotesk'] text-2xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-white/70">Have an opportunity, project, or question? Send a message.</p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90 transition hover:bg-white/10"
        >
          <FileText className="h-4 w-4" /> Resume
        </a>
      </div>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);
          const subject = encodeURIComponent(`Portfolio Inquiry from ${data.get('name')}`);
          const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`);
          window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input name="name" required placeholder="Your name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none ring-indigo-500/30 placeholder:text-white/50 focus:ring-2" />
          <input name="email" required type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none ring-indigo-500/30 placeholder:text-white/50 focus:ring-2" />
        </div>
        <textarea name="message" required rows={4} placeholder="Message" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none ring-indigo-500/30 placeholder:text-white/50 focus:ring-2" />
        <motion.button
          whileHover={{ y: -1, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 font-semibold text-white transition hover:brightness-110"
        >
          Send Message
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">
            <Linkedin className="h-5 w-5 text-cyan-400" /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">
            <Github className="h-5 w-5 text-fuchsia-400" /> GitHub
          </a>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            <Mail className="h-5 w-5 text-indigo-400" /> your.email@example.com
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            <MapPin className="h-5 w-5 text-emerald-400" /> City, Country
          </div>
        </motion.div>
      </form>
    </div>
  );
}
