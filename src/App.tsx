import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Ingredients from './components/Ingredients';
import Products from './components/Products';
import Process from './components/Process';
import Legalitas from './components/Legalitas';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary-50 overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Benefits />
        <Ingredients />
        <Products />
        <Process />
        <Legalitas />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
