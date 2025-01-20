import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Visión</h3>
            <p className="text-gray-600">
              Ser el capítulo estudiantil líder en innovación y desarrollo
              tecnológico, formando profesionales comprometidos con la
              excelencia y el progreso de la sociedad.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Miembros</h3>
            <p className="text-gray-600">
              Nuestro equipo está conformado por estudiantes apasionados y
              comprometidos con la tecnología y la innovación, trabajando juntos
              para crear un impacto positivo en la comunidad universitaria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-md z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div>
              <img
                src="https://i.postimg.cc/PqYBWw7b/LOGO-CIS-UNI-SIN-FONDO.png"
                alt="Logo IEEE CIS UNI"
                className="h-8 md:h-10 lg:h-12 w-auto" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
              IEEE CIS UNI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('positions')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Cargos
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Sobre Nosotros
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf38s1E55-1v8bsVmJFjD3ie8OKD_ion2ntGHynM6sm-iMOqQ/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-400 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Inscríbete
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('positions')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Cargos
            </button>
            <button
              onClick={() => {
                setIsAboutOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Sobre Nosotros
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf38s1E55-1v8bsVmJFjD3ie8OKD_ion2ntGHynM6sm-iMOqQ/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => scrollToSection('register')}
              className="block w-full px-4 py-2 bg-gradient-to-r text-center from-purple-600 to-blue-400 text-white rounded-lg"
            >
              Inscríbete
            </a>
          </div>
        )}
      </div>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </header>
  );
};

export default Header;
