const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">
              Sobre <span className="font-bold">mí</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Soy desarrollador web con formación académica y aprendizaje
              autodidacta, apasionado por crear aplicaciones modernas,
              funcionales y visualmente atractivas.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Actualmente me especializo en tecnologías como Vite/React,
              Angular, TypeScript, Tailwind CSS y herramientas como Swagger para
              documentación y Git para control de versiones. Me enfoco en
              aplicar buenas prácticas de desarrollo, manteniendo un código
              limpio y escalable.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm">
                React
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm">
                TypeScript
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm">
                Python
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm">
                Django
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm">
                TailwindCSS
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm">
                GitHub
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop&crop=center"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
