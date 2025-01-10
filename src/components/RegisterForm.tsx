import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  specialty: string;
  position: string;
  email: string;
  phone: string;
  motivation: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    specialty: '',
    position: '',
    email: '',
    phone: '',
    motivation: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const positions = [
    'Director de RR.PP',
    'Director de Eventos',
    'Director de Proyectos',
    'Director de Visitas Técnicas',
    'Director de Marketing',
    'Subdirector de Marketing',
    'Director de Publicidad',
    'Web Master'
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es requerido';
    }

    if (!formData.specialty.trim()) {
      newErrors.specialty = 'La especialidad es requerida';
    }

    if (!formData.position) {
      newErrors.position = 'Selecciona un cargo';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Ingresa un número válido de 9 dígitos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          fullName: '',
          specialty: '',
          position: '',
          email: '',
          phone: '',
          motivation: ''
        });
      }, 3000);
    } else {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
            Inscríbete
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Completa el formulario para postular a un cargo directivo en IEEE CIS UNI
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Ingresa tu nombre completo"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Especialidad *
              </label>
              <input
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.specialty ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Ej: Ingeniería de Sistemas"
              />
              {errors.specialty && (
                <p className="mt-1 text-sm text-red-500">{errors.specialty}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cargo al que postulas *
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.position ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
              >
                <option value="">Selecciona un cargo</option>
                {positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
              {errors.position && (
                <p className="mt-1 text-sm text-red-500">{errors.position}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="correo@ejemplo.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número Telefónico *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Ingresa tu número de celular"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Motivación (Opcional)
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Cuéntanos por qué te gustaría ser parte del equipo directivo"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-400 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar Postulación
            </button>

            {submitStatus === 'success' && (
              <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                <Check className="w-5 h-5" />
                <span>¡Tu postulación ha sido enviada con éxito!</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center justify-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span>Por favor, completa todos los campos requeridos correctamente.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;