import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/NicoVillarroelM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicol%C3%A1s-villarroel-meza-045b71257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:mezanicolas10@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © 2025 Nicolás Villarroel
        </p>
      </div>
    </footer>
  );
};

export default Footer;