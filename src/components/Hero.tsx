import React from 'react';

const Hero: React.FC = () => {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
            Únete al Equipo Directivo de
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              IEEE CIS UNI
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 animate-fade-in-delay">
            Sé parte de una comunidad apasionada por la tecnología y la innovación.
            Desarrolla tus habilidades de liderazgo y haz crecer tu red profesional.
          </p>

          <button
            onClick={scrollToRegister}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-400 text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 animate-bounce"
          >
            ¡Postula Ahora!
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </div>
  );
};

export default Hero;