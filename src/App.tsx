import { useEffect, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import { useTheme } from './hooks/useTheme';
import ContactForm from './components/ContactForm';
import { Toaster } from 'react-hot-toast';
import { ArrowUp } from 'lucide-react';
import Footer from './components/Footer';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="min-h-screen flex flex-col">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <TechStack />
        <Services />
        <ContactForm />
        <Footer />
        <button
          type="button"
          className={`fixed bottom-7 right-7 p-3 cursor-pointer bg-black dark:bg-white text-white dark:text-black rounded-full z-50 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-8 h-8 transition-transform duration-200 hover:translate-y-[-2px]" />
        </button>
      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#fff",
            color: "#363636",
          },
        }}
      />
    </div>
  );
}

export default App;