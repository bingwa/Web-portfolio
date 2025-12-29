'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Tech Support Platform',
    description: 'A full-featured tech support company site built with React, showcasing products, cart functionality, and a checkout process.',
    image: '/projects/Mun.png', // Add your screenshot here
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://munteksolutions.netlify.app/'
  },
  {
    id: 2,
    title: 'Fleet Manager',
    description: 'A Fleet Management System that helps Fleet Owners manage their fleet of Trucks and keep track of their expenses',
    image: '/projects/FLM.png', // Add your screenshot here
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth'],
    link: 'https://fleetmanagerapp.netlify.app/'
  },
  {
    id: 3,
    title: 'Fueling Africa Aviation',
    description: 'Platform that helps connect Investors to opportunities in Sustainable fuel for aviation as well offer the latest updates on everything related to Sustainable Energy',
    image: '/projects/FAA.png', // Add your screenshot here
    tech: ['React', 'Supabase', 'Tailwind', 'Vercel'],
    link: 'www.fuelingafricanaviation.com'
  },
  {
    id: 4,
    title: 'Uncover Kenya Blog',
    description: 'A modern day blog made for Kenyans to inform them on the many ways the current government is failing them',
    image: '/projects/uncover.png', // Add your screenshot here
    tech: ['React', 'Neon', 'Tailwind', 'Vercel'],
    link: 'https://uncover-delta.vercel.app'
  },
  {
    id: 5,
    title: 'Kowluxe',
    description: 'An online store plus landing page used to showcase and advertise hair oil products by a brand known as kowluxe based in the United States',
    image:'/projects/kow.png',
    tech:['NextJs','Vercel','Typescript','Shopify'],
    link:'https://www.kowluxe.com/'
  }

];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6 bg-slate-900 flex items-center relative">
      {/* Gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none" />
      
      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-slate-900 to-slate-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-heading text-white mb-20 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-800/50 hover:border-blue-500/50 transition-all h-full flex flex-col shadow-xl hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative h-56 bg-slate-800/50 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                
                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-heading text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 font-body leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-xs font-body font-medium border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white shadow-lg shadow-white/10 rounded-xl transition-all hover:bg-white/30 hover:border-white/40 text-center font-body font-medium flex items-center justify-center gap-2"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
