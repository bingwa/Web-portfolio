import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
