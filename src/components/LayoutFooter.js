import React from 'react';

const LayoutFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-4">
          Hecho con <span className="text-red-500">❤</span> por Omar
        </p>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Derechos reservados por OmxrDv.
        </p>
      </div>
    </footer>
  );
};

export default LayoutFooter;