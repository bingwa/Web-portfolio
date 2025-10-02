'use client';

import TextType from '@/components/ui/text-type';
import GradientBlinds from '@/components/ui/gradient-blinds';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 w-full h-full">
        <GradientBlinds
          gradientColors={[
            '#0f172a', // slate-950
            '#1e293b', // slate-800
            '#334155', // slate-700
            '#475569', // slate-600
            '#3b82f6', // blue-500
            '#60a5fa', // blue-400
            '#334155', // slate-700
            '#1e293b'  // slate-800
          ]}
          angle={45}
          blindCount={20}
          blindMinWidth={40}
          noise={0.08}
          mouseDampening={0.15}
          mirrorGradient={false}
          spotlightRadius={0.4}
          spotlightSoftness={1.2}
          spotlightOpacity={0.8}
          distortAmount={0.3}
          shineDirection="left"
          mixBlendMode="normal"
          paused={false}
          dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 2}
          className="w-full h-full"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-transparent pointer-events-none" />
      
      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-8xl lg:text-9xl font-heading mb-6 text-white tracking-tight"
        >
          Brian
        </motion.h1>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-1 w-32 md:w-40 bg-blue-500 rounded-full mb-8"
        />
        
        <div className="mb-6 min-h-[3rem] flex items-center justify-center">
          <TextType
            text="Full-Stack Developer & Data Scientist"
            className="text-2xl md:text-3xl lg:text-4xl text-slate-100 font-heading tracking-wide"
            duration={80}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed font-body"
        >
          I build modern, responsive, and user-friendly web applications.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-base text-slate-400 mb-12 font-body"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Mombasa, Kenya</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap pointer-events-auto font-body"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-white/20 backdrop-blur-lg border border-white/30 text-white shadow-lg shadow-white/10 rounded-xl transition-all hover:bg-white/30 hover:border-white/40 flex items-center gap-2 font-medium"
          >
            <span>View Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-white/10 backdrop-blur-lg border border-white/20 text-slate-100 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all font-medium"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
