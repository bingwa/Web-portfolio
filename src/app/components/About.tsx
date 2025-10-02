'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js',
    'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Supabase', 'Git', 'Vercel'
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]));

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const xPct = (event.clientX - centerX) / (rect.width / 2);
    const yPct = (event.clientY - centerY) / (rect.height / 2);
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="min-h-screen py-32 px-6 bg-slate-950 flex items-center relative">
      {/* Gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />
      
      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-slate-950 to-slate-900 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-heading text-white mb-20 text-center"
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 font-body"
          >
            <p className="text-xl text-slate-300 leading-relaxed">
              Hello! I'm <span className="text-blue-500 font-semibold">Brian</span>, a passionate full-stack developer with a love for creating beautiful and intuitive digital experiences.
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              I specialize in modern web technologies like <span className="text-blue-400">React</span>, <span className="text-blue-400">Next.js</span>, and <span className="text-blue-400">TypeScript</span>. I'm a firm believer in clean code, web standards, and the importance of great user experience.
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the coastal scenery of Mombasa.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative p-10 bg-slate-900/30 backdrop-blur-xl rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-heading text-white mb-8">Key Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-3 bg-slate-800/40 text-slate-200 rounded-xl text-sm font-body font-medium hover:bg-slate-700/50 transition-all cursor-default text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
