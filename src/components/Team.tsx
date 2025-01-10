import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Linkedin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TeamMember {
  name: string;
  position: string;
  background: string;
  linkedIn: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Eduardo Villegas',
    position: 'Presidente',
    background:
      'Ingeniero de Sistemas con experiencia en desarrollo de software y liderazgo de equipos. Especializado en inteligencia artificial y computación evolutiva.',
    linkedIn: 'https://www.linkedin.com/in/eduardo-villegas',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
  },
  {
    name: 'Joseph Chuquipiondo',
    position: 'Vice Presidente',
    background:
      'Especialista en sistemas de información y gestión de proyectos tecnológicos. Experiencia en implementación de soluciones empresariales.',
    linkedIn: 'https://www.linkedin.com/in/joseph-chuquipiondo',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
  },
  {
    name: 'Carlos',
    position: 'Tesorero',
    background:
      'Experto en gestión financiera y análisis de datos. Experiencia en optimización de recursos y planificación estratégica.',
    linkedIn: 'https://www.linkedin.com/in/carlos',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Delia',
    position: 'Secretaria',
    background:
      'Especialista en gestión administrativa y coordinación de eventos. Experiencia en organización y documentación de proyectos.',
    linkedIn: 'https://www.linkedin.com/in/delia',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
  },
];

const teamImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80',
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
          Sobre Nosotros
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conoce al equipo que lidera IEEE CIS UNI y nuestra visión para el
          futuro.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Team Members Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-6">
              Nuestro Equipo
            </h3>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              /* navigation */
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              className="team-carousel"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800">
                        {member.name}
                      </h4>
                      <p className="text-purple-600 font-semibold mb-4">
                        {member.position}
                      </p>
                      <p className="text-gray-600 mb-4">{member.background}</p>
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>Ver perfil de LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Team Images Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-6">
              Nuestra Visión
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{ delay: 5000 }}
                  loop={true}
                  className="team-images-carousel"
                >
                  {teamImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={image}
                          alt={`Team ${index + 1}`}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="p-6">
                  <p className="text-gray-600">
                    En IEEE CIS UNI, nos esforzamos por ser el capítulo
                    estudiantil líder en innovación y desarrollo tecnológico.
                    Nuestra misión es formar profesionales comprometidos con la
                    excelencia y el progreso de la sociedad, fomentando el
                    desarrollo de habilidades técnicas y blandas en nuestros
                    miembros.
                  </p>
                  <p className="text-gray-600 mt-4">
                    Trabajamos en equipo para crear un impacto positivo en la
                    comunidad universitaria, organizando eventos, desarrollando
                    proyectos innovadores y estableciendo conexiones valiosas
                    con la industria tecnológica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
