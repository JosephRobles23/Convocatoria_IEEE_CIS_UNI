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
    name: 'Eduardo Enrique Villegas',
    position: 'Presidente',
    background:
      'Estudiante de Ing. Electrónica, apasionado por la IA y el IoT, con conocimientos en desarrollo de software backend y en busca de crear soluciones tecnológicas innovadoras',
    linkedIn: 'https://www.linkedin.com/in/eduardo-enrique-villegas-bojorquez/',
    image:
      'https://i.postimg.cc/3xbw9Mtv/Eduardo-presentacion.png',
  },
  {
    name: 'Joseph Chuquipiondo Robles',
    position: 'Vice Presidente',
    background:
      'Estudiante de Ing. de Telecomunicaciones con experiencia en desarrollo de software y gestión de proyectos tecnológicos.',
    linkedIn: 'https://www.linkedin.com/in/joseph-chuquipiondo-robles-230733256/',
    image:
      'https://i.postimg.cc/VvHQqwFG/Joseph-Presentacion.png',
  },
  {
    name: 'Carlos Ramos Ilari',
    position: 'Tesorero',
    background:
      'Estudiante de Ingeniería Electrónica con conocimientos en gestión y finanzas, y una profunda pasión por la inteligencia artificial y el desarrollo de software.',
    linkedIn: 'https://www.linkedin.com/in/carlos-ayrton-ramos-ilari-b3187b278',
    image:
      'https://i.postimg.cc/pThDWY6m/Carlos-edici-n.png',
  },
  {
    name: 'Delia Ibarra',
    position: 'Secretaria',
    background:
      'Estudiante de Ingeniería de Sistemas en la UNI, apasionada por la ciberseguridad. Con experiencia en trabajo en equipo y liderazgo.',
    linkedIn: 'https://www.linkedin.com/in/delia-elizabeth-ibarra-julcahuanca-1628a9296/',
    image:
      'https://i.postimg.cc/GhzyG5YW/Delia-edici-n-definitiva.png',
  },
];

const teamImages = [
  'https://media.licdn.com/dms/image/v2/D4E22AQGRWy_dBDqv7Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1727678023314?e=1739404800&v=beta&t=b2lFtf5YUVOZOlHb6weil0TpotA_cMk6fTZDMFRxGTg',
  'https://media.licdn.com/dms/image/v2/D4E22AQGEJYWgLru4yA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727678023226?e=1739404800&v=beta&t=YJtiegBeaQPM-JABmQrq0XUbAYqUsY4so5E62OAUQQ0',
  'https://ieee-cis-uni.github.io/assets/img/JuntaCis.png',
  'https://i.postimg.cc/TP5D7WkG/CIS-UPC-evento.jpg',
  'https://i.postimg.cc/gjx7Ts64/CIS-3.jpg',
  'https://i.postimg.cc/C1ymm0sP/GrupoCIS.jpg',
  'https://i.postimg.cc/MZ5mjVNr/FotoCIS.jpg',
  'https://i.postimg.cc/pdzvhWKT/Curso-CIS.jpg',
  'https://i.postimg.cc/DZgLL3jb/CursoCIS.jpg',
  'https://i.postimg.cc/K8dF8kkw/Primera-reunicon.jpg',
  'https://i.postimg.cc/j2dYFymw/ULTIMA-CLASE.jpg',
  'https://i.postimg.cc/8PmtCqFS/gh-OOGLE-GROUP.jpg',

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
            <h3 className="text-2xl font-bold text-center text-purple-800 mb-6">
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
            <h3 className="text-2xl font-bold text-center text-purple-800 mb-6">
              Nuestra Visión
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
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
                <div className="px-6 pb-6">
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
