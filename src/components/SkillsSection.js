import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'PHP', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-purple-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9l-1-4H6l-1 4H3l2-7h3l1 4h2l1-4h3l2 4h-2l-1 4h-2l-1-4h-2l-1 4z"/>
      </svg>
    ) },
    { name: 'MySQL', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
      </svg>
    ) },
    { name: 'JavaScript', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9l-1-4H6l-1 4H3l2-7h3l1 4h2l1-4h3l2 4h-2l-1 4h-2l-1-4h-2l-1 4z"/>
      </svg>
    ) },
    { name: 'TypeScript', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9l-1-4H6l-1 4H3l2-7h3l1 4h2l1-4h3l2 4h-2l-1 4h-2l-1-4h-2l-1 4z"/>
      </svg>
    ) },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Mis Habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;