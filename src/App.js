import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeHeroSection from './components/HomeHeroSection';
import AboutMeSection from './components/AboutMeSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import LayoutFooter from './components/LayoutFooter';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeHeroSection setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutMeSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeHeroSection setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow pt-16"> {/* pt-16 para compensar el header fijo */}
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
}

export default App;

// DONE