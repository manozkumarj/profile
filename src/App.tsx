import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import { useTheme } from './hooks/useTheme';
import ContactForm from './components/ContactForm';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

function App() {
  const { isDark, toggleTheme } = useTheme();

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