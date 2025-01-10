import React from 'react';
import { CircuitBoard, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <CircuitBoard className="text-purple-400" size={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                IEEE CIS UNI
              </span>
            </div>
            <p className="text-gray-400">
              Capítulo estudiantil dedicado a la innovación y el desarrollo tecnológico
              en la Universidad Nacional de Ingeniería.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-purple-400" />
                <a href="mailto:ieee.cis@uni.edu.pe" className="text-gray-400 hover:text-white transition-colors">
                  ieee.cis@uni.edu.pe
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-purple-400" />
                <span className="text-gray-400">+51 123 456 789</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-purple-400 mt-1" />
                <span className="text-gray-400">
                  Av. Túpac Amaru 210, Rímac<br />
                  Lima, Perú
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cargos Disponibles
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inscripciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IEEE CIS UNI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;