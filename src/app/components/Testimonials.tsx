'use client';

import { motion } from 'framer-motion';
import { CardStack } from '@/components/ui/card-stack';

export default function Testimonials() {
  const testimonials = [
    {
      id: 0,
      name: 'Denis Mulei',
      designation: 'Project Manager at Tech Solutions Inc.',
      content: (
        <p>
          Brian is an <span className="text-blue-400 font-semibold">exceptional developer</span> with a keen eye for detail. His ability to translate complex designs into pixel-perfect, functional code is remarkable. He was a great asset to our team.
        </p>
      ),
    },
    {
      id: 1,
      name: 'Hezbon Ombati',
      designation: 'Lead Engineer at Creative Minds',
      content: (
        <p>
          Working with Brian was a <span className="text-blue-400 font-semibold">pleasure</span>. He is not only technically skilled but also a great communicator who consistently delivered <span className="text-blue-400 font-semibold">high-quality work</span> on time. Highly recommended!
        </p>
      ),
    },
  ];

  return (
    <section id="testimonials" className="min-h-screen py-32 px-6 bg-slate-950 flex items-center relative">
      {/* Gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />
      
      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-slate-950 to-slate-900 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-heading text-white mb-12 text-center"
        >
          Testimonials
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-400 mb-20 text-center max-w-3xl mx-auto font-body"
        >
          What clients and colleagues say about working with me
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <CardStack items={testimonials} offset={15} scaleFactor={0.08} />
        </motion.div>
      </div>
    </section>
  );
}
