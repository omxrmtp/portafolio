import React from 'react';

const HomeHeroSection = ({ setCurrentPage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background pattern/shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4 animate-fade-in-up">
          ¡Hola! soy <span className="text-blue-600">Omar</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up animation-delay-500">
          Desarrollador Web Junior con pasión por crear soluciones increíbles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-1000">
          <button
            onClick={() => setCurrentPage('about')}
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Continuar
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-3 bg-white text-blue-600 text-lg font-semibold rounded-full shadow-lg border border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Contáctame
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;