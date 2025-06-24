import { projects } from "../constants/Projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300 py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6">
            Mis <span className="font-bold">Proyectos</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Una selección de proyectos que demuestran mi experiencia en diseño
            UX/UI y desarrollo frontend.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10 auto-rows-fr" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/20 backdrop-blur-sm text-blue-200 px-3 py-1.5 rounded-full text-xs border border-blue-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;