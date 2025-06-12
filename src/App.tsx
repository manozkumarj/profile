import Header from './components/Header';
import Hero from './components/Hero';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="min-h-screen flex flex-col">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
      </div>
    </div>
  );
}

export default App;