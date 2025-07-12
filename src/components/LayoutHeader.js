import React, { useState } from 'react';

const LayoutHeader = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Sobre Mí', page: 'about' },
    { name: 'Habilidades', page: 'skills' },
    { name: 'Proyectos', 'page': 'projects' },
    { name: 'Contacto', page: 'contact' },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Cierra el menú móvil al seleccionar una opción
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          <button onClick={() => handleNavClick('home')} className="focus:outline-none">
            Omxr<span className="text-blue-600">Dev</span>
          </button>
        </div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.page)}
                className={`text-lg font-medium transition-colors hover:text-blue-600 focus:outline-none ${
                  currentPage === item.page ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {/* Hamburger/Close Icon */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.page)}
                  className={`text-xl font-medium transition-colors hover:text-blue-600 focus:outline-none ${
                    currentPage === item.page ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;

// DONE