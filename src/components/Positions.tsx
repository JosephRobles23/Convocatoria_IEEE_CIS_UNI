import React from 'react';
import { Users, Calendar, Lightbulb, Building, Share2, Palette, Megaphone, Code } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Position {
  title: string;
  icon: React.ReactNode;
  description: string;
  responsibilities: string[];
  benefits: string[];
  backgroundImage: string;
}

const positions: Position[] = [
  {
    title: 'Director de RR.PP',
    icon: <Users className="w-8 h-8" />,
    description: 'Lidera las relaciones públicas y establece conexiones estratégicas.',
    responsibilities: [
      'Gestionar relaciones con otras organizaciones',
      'Coordinar eventos de networking',
      'Desarrollar estrategias de comunicación'
    ],
    benefits: [
      'Desarrollo de habilidades de comunicación',
      'Networking profesional',
      'Experiencia en gestión de relaciones',
      'Incursión en proyectos con el equipo'
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80'
  },
  {
    title: 'Director de Eventos',
    icon: <Calendar className="w-8 h-8" />,
    description: 'Organiza y coordina eventos impactantes para la comunidad.',
    responsibilities: [
      'Planificar y ejecutar eventos',
      'Gestionar presupuestos',
      'Coordinar con proveedores y speakers',
    ],
    benefits: [
      'Experiencia en gestión de proyectos',
      'Desarrollo de habilidades organizativas',
      'Contacto con profesionales del sector',
      'Incursión en proyectos con el equipo'
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80'
  },
  {
    title: 'Director de Proyectos',
    icon: <Lightbulb className="w-8 h-8" />,
    description: 'Lidera iniciativas innovadoras y proyectos tecnológicos.',
    responsibilities: [
      'Gestionar proyectos técnicos',
      'Coordinar equipos de desarrollo',
      'Establecer objetivos y plazos'
    ],
    benefits: [
      'Experiencia en gestión de proyectos técnicos',
      'Desarrollo de liderazgo',
      'Portfolio de proyectos reales'
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    title: 'Sub Director de Proyectos',
    icon: <Lightbulb className="w-8 h-8" />,
    description: 'Apoya en la gestión y ejecución de proyectos innovadores.',
    responsibilities: [
      'Asistir en la gestión de proyectos',
      'Supervisar equipos de desarrollo',
      'Monitorear avances y resultados'
    ],
    benefits: [
      'Experiencia en gestión de proyectos',
      'Desarrollo de habilidades técnicas',
      'Trabajo con tecnologías emergentes',
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Director de Visitas Técnicas',
    icon: <Building className="w-8 h-8" />,
    description: 'Coordina visitas a empresas y centros tecnológicos.',
    responsibilities: [
      'Gestionar relaciones con empresas',
      'Organizar visitas técnicas',
      'Coordinar logística de visitas'
    ],
    benefits: [
      'Networking con empresas',
      'Experiencia en gestión de eventos',
      'Desarrollo de relaciones profesionales',
      'Incursión en proyectos con el equipo'
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    title: 'Director de Marketing',
    icon: <Share2 className="w-8 h-8" />,
    description: 'Desarrolla estrategias de marketing y promoción.',
    responsibilities: [
      'Crear estrategias de marketing',
      'Gestionar redes sociales',
      'Desarrollar contenido promocional'
    ],
    benefits: [
      'Acceso a Canva Premium',
      'Incursión en proyectos con el equipo',
      'Experiencia en marketing digital',
      'Portfolio de campañas'
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Sub Director de Marketing',
    icon: <Palette className="w-8 h-8" />,
    description: 'Apoya en la implementación de estrategias de marketing.',
    responsibilities: [
      'Crear contenido digital',
      'Administrar redes sociales',
      'Analizar métricas de marketing'
    ],
    benefits: [
      'Acceso a Canva Premium',
      'Experiencia en marketing digital',
      'Desarrollo de habilidades creativas',
      'Incursión en proyectos con el equipo'
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80'
  },
  {
    title: 'Director de Publicidad',
    icon: <Megaphone className="w-8 h-8" />,
    description: 'Gestiona la publicidad y promoción del capítulo.',
    responsibilities: [
      'Diseñar campañas publicitarias',
      'Crear material promocional',
      'Gestionar presencia en medios'
    ],
    benefits: [
      'Portfolio publicitario',
      'Experiencia en diseño',
      'Incursión en proyectos con el equipo',
      'Desarrollo de marca personal'
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
  },
  {
    title: 'Web Master',
    icon: <Code className="w-8 h-8" />,
    description: 'Gestiona y mantiene la presencia digital del capítulo.',
    responsibilities: [
      'Mantener sitio web',
      'Implementar nuevas funcionalidades',
      'Gestionar infraestructura digital',
      'Incursión en proyectos con el equipo'
    ],
    benefits: [
      'Experiencia en desarrollo web',
      'Portfolio de proyectos',
      'Aprendizaje de nuevas tecnologías'
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80'
  }
];

const PositionCard: React.FC<{ position: Position }> = ({ position }) => {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg group h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${position.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 to-blue-900/90" />
      </div>

      <div className="relative p-8 h-full flex flex-col">
        <div className="text-white mb-6">
          {position.icon}
          <h3 className="text-2xl font-bold mt-4">{position.title}</h3>
          <p className="text-gray-300 mt-2">{position.description}</p>
        </div>

        <div className="flex-grow space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-2">Responsabilidades</h4>
            <ul className="text-gray-300 space-y-1">
              {position.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-2">Beneficios</h4>
            <ul className="text-gray-300 space-y-1">
              {position.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf38s1E55-1v8bsVmJFjD3ie8OKD_ion2ntGHynM6sm-iMOqQ/viewform?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={scrollToRegister}
          className="mt-8 w-full py-3 bg-gradient-to-r text-center from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Postular a este cargo
        </a>
      </div>
    </div>
  );
};

const Positions: React.FC = () => {
  return (
    <section id="positions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 pb-2 bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
          Conoce nuestros cargos
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explora las diferentes oportunidades para formar parte de nuestro equipo
          directivo y contribuir al crecimiento de la comunidad IEEE CIS UNI.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="positions-carousel"
        >
          {positions.map((position, index) => (
            <SwiperSlide key={index}>
              <PositionCard position={position} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Positions;