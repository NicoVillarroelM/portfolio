import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            ¿Interesado en <span className="font-bold">contactarme?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Si tienes una oportunidad laboral o proyecto interesante, me
            encantaría conocer más detalles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="https://github.com/NicoVillarroelM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              GitHub
            </h3>
            <p className="text-gray-600 dark:text-gray-300">@NicoVillarroelM</p>
          </a>

          <a
            href="https://www.linkedin.com/in/nicol%C3%A1s-villarroel-meza-045b71257/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nicolás Villarroel
            </p>
          </a>

          <a
            href="mailto:mezanicolas10@gmail.com"
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              mezanicolas10@gmail.com
            </p>
          </a>
        </div>

        <div className="text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Estoy abierto a nuevas oportunidades laborales y colaboraciones en
              proyectos innovadores. No dudes en contactarme para discutir
              posibles colaboraciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
