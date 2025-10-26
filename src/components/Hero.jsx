import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const titles = [
  'CSE Student',
  'Full‑Stack Developer',
  'Fintech & Systems Enthusiast',
];

function useTypewriter(words, speed = 70, pause = 1200) {
  const sequence = useMemo(() => words.flatMap((w) => [w]), [words]);
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const current = sequence[index % sequence.length];

    if (!deleting) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), speed / 1.6);
      } else {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, sequence, speed, pause]);

  return display + (deleting ? '' : '▍');
}

export default function Hero() {
  const typed = useTypewriter(titles);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] text-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for mood - pointer events disabled so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 ">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-indigo-500/20 to-sky-500/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for internships & projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-['Space_Grotesk'] text-4xl font-bold leading-tight sm:text-6xl"
        >
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Your Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 text-lg text-white/80 sm:text-xl"
        >
          {typed}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-balance text-white/70"
        >
          I design and build reliable web systems with a focus on performance, security, and great UX — blending clean code, product thinking, and a love for problem solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="group rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:brightness-110"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Subtle scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/60 sm:flex"
        >
          <span className="h-5 w-[1px] bg-gradient-to-b from-transparent via-white/60 to-transparent" />
          Scroll
          <span className="h-5 w-[1px] bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
