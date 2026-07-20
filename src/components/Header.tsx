import React, { useState } from 'react';
import { Moon, Sun, ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About me',
      href: '#about',
    },
    {
      name: 'Tech-stack',
      href: '#tech-stack',
    },
    {
      name: 'Services',
      href: '#services',
    },
    // {
    //   name: 'My Work',
    //   href: '#work',
    // },
    {
      name: 'Contact me',
      href: '#contact',
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.getElementById('contact')?.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className="w-full px-6 py-6 lg:px-12 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href='/profile' className="text-2xl font-bold text-gray-900 dark:text-white">&#123; &lt;Manoj /&gt; &#125;</a>
            {/* <div className="w-2 h-2 bg-red-500 rounded-full"></div> */}
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item?.name}
                href={item?.href}
                className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 ${index === 0 ? 'font-medium text-gray-900 dark:text-white' : ''
                  }`}
              >
                {item?.name}
              </a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Contact button - Hidden on small screens */}
            <button className="hidden sm:flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" onClick={scrollToContact}>
              <span className="text-gray-700 dark:text-gray-300">Contact</span>
              <ArrowUpRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Mobile menu button - Visible on mobile only */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">&#123; &lt;Manoj /&gt; &#125;</span>
              {/* <div className="w-2 h-2 bg-red-500 rounded-full"></div> */}
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Mobile navigation */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={item?.name}>
                  <a
                    href={item?.href}
                    onClick={closeMobileMenu}
                    className={`block text-lg font-medium transition-colors duration-200 ${index === 0
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      }`}
                  >
                    {item?.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="font-medium">Contact me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;