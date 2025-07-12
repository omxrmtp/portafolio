import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Sistema de Gestión de Inventario',
      description: 'Desarrollo de un sistema robusto para la gestión de inventario, incluyendo seguimiento de productos, órdenes y proveedores. Implementado con PHP y MySQL.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      link: '#', // Placeholder para el enlace del proyecto
    },
    {
      title: 'Plataforma de E-commerce Simple',
      description: 'Creación de una tienda en línea básica con carrito de compras, gestión de usuarios y pasarela de pago simulada. Frontend con JavaScript y backend con PHP.',
      tech: ['JavaScript', 'PHP', 'MySQL'],
      link: '#',
    },
    {
      title: 'Aplicación de Tareas con TypeScript',
      description: 'Una aplicación de lista de tareas interactiva, construida con TypeScript para una mayor robustez y escalabilidad. Incluye funcionalidades CRUD.',
      tech: ['TypeScript', 'JavaScript'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Ver Proyecto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;