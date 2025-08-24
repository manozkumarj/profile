import { ArrowRight, Download } from 'lucide-react';
import myPhoto from './../assets/me.jpg';

const Hero = () => {
  return (
    <section className="flex-1 flex items-center justify-center px-6 py-12 pt-4 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-[180px] mx-auto rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 ring-4 ring-white shadow-xl">
            <img 
              src={myPhoto}
              alt="Manoj Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-xl text-gray-700 dark:text-gray-300 font-normal">
            Hi! I'm Manoj Kumar Jadala{' '}
            <span className="inline-block animate-bounce">👋</span>
          </h1>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Fullstack Web & Mobile Developer
            based in India.
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm a Fullstack Web & Mobile developer from Hyderabad, India. Having 9+ years of experience in multiple 
            technologies like React, Node, Python, etc.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Contact Me Button */}
          <button className="group flex items-center space-x-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="font-medium">Contact me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Resume Button */}
          <button className="group flex items-center space-x-3 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="font-medium">My resume</span>
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;