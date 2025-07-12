import React from 'react';

const AboutMeSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="/images/yo.png" // La imagen debe estar en public/images/yo.jpg
              alt="Foto de perfil"
              className="rounded-full w-80 h-80 object-cover shadow-xl border-4 border-blue-100 mx-auto"
            />
          </div>
          <div className="md:w-2/3 text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              ¡Holaa! Soy un desarrollador web junior con una sed insaciable de aprender y crear. Mi viaje en el mundo de la programación comenzó con la curiosidad de entender cómo funcionan las cosas detrás de la pantalla, y desde entonces, no he parado de construir y experimentar.
            </p>
            <p className="mb-4">
              Me especializo en el desarrollo backend con <span className="font-semibold text-blue-600">PHP</span> y <span className="font-semibold text-blue-600">MySQL</span>, donde disfruto diseñando bases de datos y APIs eficientes. Pero no me quedo solo ahí, también me encanta darle vida a las interfaces con <span className="font-semibold text-blue-600">JavaScript</span> y <span className="font-semibold text-blue-600">TypeScript</span>, asegurando que cada pixel cuente y la experiencia de usuario sea de primera.
            </p>
            <p>
              Siempre estoy buscando nuevos retos y oportunidades para aplicar mis conocimientos y crecer profesionalmente. Si tienes un proyecto interesante o simplemente quieres echar un café virtual, ¡no dudes en contactarme!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;