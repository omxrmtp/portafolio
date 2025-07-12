import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario, por ejemplo, a un servicio de backend o Formspree
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Pronto me pondré en contacto contigo.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Contáctame</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-y"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Enviar Mensaje
            </button>
            <a
              href="https://wa.me/+51970590193" // Cambia por tu número real
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center mt-2"
            >
              Whatsapp
            </a>

          </form>
        </div>
        <div className="mt-12 text-center text-gray-700">
          <p className="mb-4">También puedes encontrarme en:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/omxrmtp" // Reemplaza con tu GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.804 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.807 24 17.306 24 12 24 5.373 18.627 0 12 0z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/omar-montes-14a308230" // Reemplaza con tu LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;