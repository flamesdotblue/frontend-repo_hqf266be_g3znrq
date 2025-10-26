import { motion } from 'framer-motion';
import { Rocket, Sparkles, Zap, Github, ExternalLink } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Decorative gradient veils that won't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-fuchsia-500/20 via-violet-500/10 to-transparent blur-2xl" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-4xl flex-col items-center gap-6"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-xs tracking-wide text-white/90">Tech-forward • Motion-rich • Playfully modern</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-['Manrope'] text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
          >
            Build bold, beautiful, and blazing-fast
            <span className="relative ml-3 inline-block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
              digital experiences
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-base text-white/80 sm:text-lg"
          >
            I craft interactive interfaces with 3D flair, immersive motion, and production-grade engineering. From concept to polished product.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgb(99_102_241_/_0.45)]"
            >
              <Rocket className="h-4 w-4" /> Explore Work
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm text-white/90 backdrop-blur-md hover:bg-white/15"
            >
              <Github className="h-4 w-4" /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm text-white/90 backdrop-blur-md hover:bg-white/15"
            >
              <ExternalLink className="h-4 w-4" /> Contact
            </motion.a>
          </motion.div>

          {/* Animated chips */}
          <div className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {['Framer Motion', '3D Spline', 'Tailwind CSS', 'FastAPI', 'MongoDB', 'React'].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.06, type: 'spring', stiffness: 120, damping: 16 }}
                className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating spark accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 1 }}
          className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Zap className="h-3.5 w-3.5 text-cyan-300" />
            Scroll to explore
          </div>
        </motion.div>
      </div>
    </section>
  );
}
