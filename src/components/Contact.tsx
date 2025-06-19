import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí se implementaría la lógica de envío
    alert("¡Mensaje enviado! Te responderé pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            ¿Interesado en <span className="font-bold">contactarme?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Si tienes una oportunidad laboral o proyecto interesante, me
            encantaría conocer más detalles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Información de contacto
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  mezanicolas10@gmail.com
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  github.com/NicoVillarroelM
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  linkedin.com/in/nicolas-villarroel-meza
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Estoy abierto a nuevas oportunidades laborales y colaboraciones en
              proyectos innovadores. No dudes en contactarme para discutir
              posibles colaboraciones.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 font-medium"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
