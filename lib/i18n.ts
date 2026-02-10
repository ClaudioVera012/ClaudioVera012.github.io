export const translations = {
  es: {
    // Navigation
    nav: {
      about: 'Sobre Mí',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    // Hero Section
    hero: {
      greeting: 'Hola, soy',
      name: 'Claudio Vera Díaz',
      title: 'Estudiante de Ingeniería Civil Química',
      subtitle: 'Especializado en Data Science & Programación',
      tagline: 'Transformando datos en soluciones para la ingeniería',
      cta: 'Contáctame',
      downloadCV: 'Descargar CV'
    },
    // About Section
    about: {
      title: 'Sobre Mí',
      subtitle: 'Conoce mi trayectoria profesional',
      intro: 'Estudiante de Ingeniería Civil Química de la Universidad de Concepción, con 2 años de experiencia como alumno ayudante de dos facultades. Actualmente realizando prácticas en CMPC Celulosa enfocado en tratamiento de datos, implementación de proyectos y Data Science.',
      description: 'Mi pasión por la ingeniería se combina con un sólido dominio de herramientas tecnológicas como Python, MATLAB y Octave. Me destaco por mi facilidad para el trabajo en equipo, adaptación al entorno y compromiso académico. He desarrollado aplicaciones de escritorio con utilidad práctica en ingeniería, aplicando métodos numéricos para resolver problemas complejos.',
      stats: {
        experience: 'Años de Experiencia',
        projects: 'Proyectos Completados',
        skills: 'Habilidades Técnicas'
      },
      values: {
        title: 'Mis Valores',
        innovation: 'Innovación',
        innovationDesc: 'Busco constantemente nuevas formas de aplicar tecnología a la ingeniería',
        teamwork: 'Trabajo en Equipo',
        teamworkDesc: 'Colaboración efectiva y comunicación clara son fundamentales',
        excellence: 'Excelencia Académica',
        excellenceDesc: 'Compromiso con el aprendizaje continuo y la mejora constante'
      }
    },
    // Experience Section
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Mi trayectoria laboral y académica',
      present: 'Actualidad',
      responsibilities: 'Responsabilidades:',
      achievements: 'Logros:',
      jobs: [
        {
          title: 'Alumno de Prácticas',
          company: 'CMPC Celulosa',
          location: 'Biobío, Chile',
          period: 'Diciembre 2025 - Actualidad',
          description: 'Colaboración directa en proyectos de investigación y desarrollo con enfoque en ciencia de datos e implementación de soluciones tecnológicas.',
          responsibilities: [
            'Tratamiento y análisis de datos complejos',
            'Implementación de proyectos de investigación y desarrollo',
            'Aplicación de Data Science en procesos industriales',
            'Desarrollo de soluciones tecnológicas para la industria'
          ]
        },
        {
          title: 'Asistente de Estudiantes',
          company: 'Ingeniería Química UdeC',
          location: 'Concepción, Biobío, Chile',
          period: 'Agosto 2025 - Actualidad',
          description: 'Apoyo académico especializado en el Departamento de Ingeniería Química.',
          responsibilities: [
            'Asesoría a estudiantes en materias de ingeniería química',
            'Desarrollo de material didáctico',
            'Coordinación de actividades académicas'
          ]
        },
        {
          title: 'Estudiante Ayudante',
          company: 'Universidad de Concepción',
          location: 'Concepción, Biobío, Chile',
          period: 'Marzo 2024 - Actualidad',
          description: 'Docencia cercana promoviendo alto compromiso académico en dos facultades.',
          responsibilities: [
            'Capacitación en lenguajes de programación (Python, MATLAB, Octave)',
            'Enseñanza de métodos numéricos aplicados a ingeniería',
            'Análisis y cálculo de problemas típicos de ingeniería',
            'Desarrollo de prácticas para Facultad de Ciencias Físicas y Matemáticas',
            'Creación de prácticas para Facultad de Ingeniería'
          ],
          achievements: [
            'Desarrollo de aplicaciones de escritorio para modelar equipos complejos',
            'Implementación exitosa de prácticas en dos facultades',
            'Alto índice de satisfacción de estudiantes'
          ]
        }
      ]
    },
    // Education Section
    education: {
      title: 'Educación',
      subtitle: 'Mi formación académica',
      status: 'En Curso',
      expected: 'Graduación Esperada',
      modality: 'Modalidad',
      degree: {
        title: 'Ingeniería Civil Química',
        institution: 'Universidad de Concepción (UdeC)',
        period: '2021 - 2026 (esperado)',
        modality: 'Presencial',
        description: 'Formación integral en ingeniería química con énfasis en procesos industriales, termodinámica, fenómenos de transporte y control de procesos. Complementado con sólidas bases en matemáticas, física y química aplicada.',
        highlights: [
          'Métodos numéricos aplicados',
          'Simulación de procesos',
          'Control y optimización',
          'Investigación y desarrollo'
        ]
      }
    },
    // Skills Section
    skills: {
      title: 'Habilidades',
      subtitle: 'Competencias técnicas y profesionales',
      technical: 'Habilidades Técnicas',
      soft: 'Habilidades Blandas',
      categories: {
        programming: 'Programación',
        engineering: 'Ingeniería',
        office: 'Herramientas Office',
        dataScience: 'Data Science',
        professional: 'Competencias Profesionales'
      },
      technicalSkills: [
        { name: 'GNU Octave', level: 90, category: 'programming' },
        { name: 'MATLAB', level: 90, category: 'programming' },
        { name: 'Python', level: 75, category: 'programming' },
        { name: 'Microsoft Office', level: 90, category: 'office' },
        { name: 'Microsoft Excel', level: 75, category: 'office' },
        { name: 'Aspen', level: 70, category: 'engineering' },
        { name: 'Análisis de Datos', level: 85, category: 'dataScience' },
        { name: 'Data Science', level: 80, category: 'dataScience' },
        { name: 'Métodos Numéricos', level: 85, category: 'engineering' },
        { name: 'Modelado de Procesos', level: 80, category: 'engineering' },
        { name: 'Simulación de Equipos', level: 75, category: 'engineering' }
      ],
      softSkills: [
        { name: 'Trabajo en Equipo', icon: 'Users' },
        { name: 'Liderazgo Académico', icon: 'Award' },
        { name: 'Resolución de Problemas', icon: 'Lightbulb' },
        { name: 'Adaptación al Entorno', icon: 'RefreshCw' },
        { name: 'Comunicación Efectiva', icon: 'MessageSquare' },
        { name: 'Compromiso Académico', icon: 'Target' },
        { name: 'Docencia y Mentoría', icon: 'GraduationCap' },
        { name: 'Pensamiento Analítico', icon: 'Brain' },
        { name: 'Organización', icon: 'Calendar' },
        { name: 'Toma de Decisiones', icon: 'CheckCircle' }
      ],
      languages: {
        title: 'Idiomas',
        spanish: 'Español',
        spanishLevel: 'Nativo',
        english: 'Inglés',
        englishLevel: 'Avanzado'
      }
    },
    // Projects Section
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Trabajos y desarrollos realizados',
      viewMore: 'Ver más',
      items: [
        {
          title: 'Aplicaciones de Escritorio para Ingeniería',
          description: 'Desarrollo de aplicaciones especializadas para modelar equipos complejos en ingeniería, facilitando cálculos y simulaciones.',
          technologies: ['Python', 'MATLAB', 'Métodos Numéricos'],
          highlights: [
            'Modelado de equipos complejos',
            'Interfaz gráfica intuitiva',
            'Cálculos precisos y eficientes'
          ]
        },
        {
          title: 'Prácticas para Facultad de Ciencias Físicas y Matemáticas',
          description: 'Diseño e implementación de prácticas académicas enfocadas en métodos numéricos y programación aplicada.',
          technologies: ['Octave', 'Python', 'Docencia'],
          highlights: [
            'Material didáctico completo',
            'Ejercicios prácticos aplicados',
            'Alto índice de aprobación'
          ]
        },
        {
          title: 'Prácticas para Facultad de Ingeniería',
          description: 'Desarrollo de material práctico para la enseñanza de programación y análisis numérico en ingeniería.',
          technologies: ['MATLAB', 'Python', 'Análisis Numérico'],
          highlights: [
            'Problemas reales de ingeniería',
            'Metodología práctica',
            'Retroalimentación positiva'
          ]
        },
        {
          title: 'Proyectos de I+D en CMPC Celulosa',
          description: 'Participación en proyectos de investigación y desarrollo con enfoque en tratamiento de datos y Data Science aplicado a la industria.',
          technologies: ['Python', 'Data Science', 'Análisis de Datos'],
          highlights: [
            'Análisis de datos industriales',
            'Implementación de soluciones',
            'Optimización de procesos'
          ]
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Contacto',
      subtitle: 'Trabajemos juntos',
      description: '¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.',
      info: {
        title: 'Información de Contacto',
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        locationValue: 'Talcahuano, Biobío, Chile',
        social: 'Redes Sociales'
      },
      form: {
        title: 'Envíame un Mensaje',
        name: 'Nombre Completo',
        namePlaceholder: 'Tu nombre',
        email: 'Correo Electrónico',
        emailPlaceholder: 'tu@email.com',
        subject: 'Asunto',
        subjectPlaceholder: 'Asunto del mensaje',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto o consulta...',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado exitosamente! Te responderé pronto.',
        error: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      }
    },
    // Footer
    footer: {
      rights: 'Todos los derechos reservados',
      developedBy: 'Desarrollado con',
      by: 'por'
    }
  },
  en: {
    // Navigation
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      greeting: 'Hi, I am',
      name: 'Claudio Vera Díaz',
      title: 'Chemical Engineering Student',
      subtitle: 'Specialized in Data Science & Programming',
      tagline: 'Transforming data into engineering solutions',
      cta: 'Contact Me',
      downloadCV: 'Download CV'
    },
    // About Section
    about: {
      title: 'About Me',
      subtitle: 'Learn about my professional journey',
      intro: 'Chemical Engineering student at Universidad de Concepción, with 2 years of experience as a teaching assistant in two faculties. Currently doing an internship at CMPC Celulosa focused on data processing, project implementation, and Data Science.',
      description: 'My passion for engineering combines with solid expertise in technological tools such as Python, MATLAB, and Octave. I excel in teamwork, environmental adaptation, and academic commitment. I have developed desktop applications with practical utility in engineering, applying numerical methods to solve complex problems.',
      stats: {
        experience: 'Years of Experience',
        projects: 'Completed Projects',
        skills: 'Technical Skills'
      },
      values: {
        title: 'My Values',
        innovation: 'Innovation',
        innovationDesc: 'Constantly seeking new ways to apply technology to engineering',
        teamwork: 'Teamwork',
        teamworkDesc: 'Effective collaboration and clear communication are fundamental',
        excellence: 'Academic Excellence',
        excellenceDesc: 'Commitment to continuous learning and constant improvement'
      }
    },
    // Experience Section
    experience: {
      title: 'Professional Experience',
      subtitle: 'My work and academic journey',
      present: 'Present',
      responsibilities: 'Responsibilities:',
      achievements: 'Achievements:',
      jobs: [
        {
          title: 'Intern',
          company: 'CMPC Celulosa',
          location: 'Biobío, Chile',
          period: 'December 2025 - Present',
          description: 'Direct collaboration on research and development projects focused on data science and implementation of technological solutions.',
          responsibilities: [
            'Processing and analysis of complex data',
            'Implementation of research and development projects',
            'Application of Data Science in industrial processes',
            'Development of technological solutions for the industry'
          ]
        },
        {
          title: 'Student Assistant',
          company: 'Chemical Engineering UdeC',
          location: 'Concepción, Biobío, Chile',
          period: 'August 2025 - Present',
          description: 'Specialized academic support in the Chemical Engineering Department.',
          responsibilities: [
            'Advising students in chemical engineering subjects',
            'Development of teaching materials',
            'Coordination of academic activities'
          ]
        },
        {
          title: 'Teaching Assistant',
          company: 'Universidad de Concepción',
          location: 'Concepción, Biobío, Chile',
          period: 'March 2024 - Present',
          description: 'Close teaching promoting high academic commitment in two faculties.',
          responsibilities: [
            'Training in programming languages (Python, MATLAB, Octave)',
            'Teaching numerical methods applied to engineering',
            'Analysis and calculation of typical engineering problems',
            'Development of practices for Faculty of Physical and Mathematical Sciences',
            'Creation of practices for Faculty of Engineering'
          ],
          achievements: [
            'Development of desktop applications to model complex equipment',
            'Successful implementation of practices in two faculties',
            'High student satisfaction rate'
          ]
        }
      ]
    },
    // Education Section
    education: {
      title: 'Education',
      subtitle: 'My academic background',
      status: 'In Progress',
      expected: 'Expected Graduation',
      modality: 'Modality',
      degree: {
        title: 'Chemical Engineering',
        institution: 'Universidad de Concepción (UdeC)',
        period: '2021 - 2026 (expected)',
        modality: 'On-campus',
        description: 'Comprehensive training in chemical engineering with emphasis on industrial processes, thermodynamics, transport phenomena, and process control. Complemented with solid foundations in mathematics, physics, and applied chemistry.',
        highlights: [
          'Applied numerical methods',
          'Process simulation',
          'Control and optimization',
          'Research and development'
        ]
      }
    },
    // Skills Section
    skills: {
      title: 'Skills',
      subtitle: 'Technical and professional competencies',
      technical: 'Technical Skills',
      soft: 'Soft Skills',
      categories: {
        programming: 'Programming',
        engineering: 'Engineering',
        office: 'Office Tools',
        dataScience: 'Data Science',
        professional: 'Professional Competencies'
      },
      technicalSkills: [
        { name: 'GNU Octave', level: 90, category: 'programming' },
        { name: 'MATLAB', level: 90, category: 'programming' },
        { name: 'Python', level: 75, category: 'programming' },
        { name: 'Microsoft Office', level: 90, category: 'office' },
        { name: 'Microsoft Excel', level: 75, category: 'office' },
        { name: 'Aspen', level: 70, category: 'engineering' },
        { name: 'Data Analysis', level: 85, category: 'dataScience' },
        { name: 'Data Science', level: 80, category: 'dataScience' },
        { name: 'Numerical Methods', level: 85, category: 'engineering' },
        { name: 'Process Modeling', level: 80, category: 'engineering' },
        { name: 'Equipment Simulation', level: 75, category: 'engineering' }
      ],
      softSkills: [
        { name: 'Teamwork', icon: 'Users' },
        { name: 'Academic Leadership', icon: 'Award' },
        { name: 'Problem Solving', icon: 'Lightbulb' },
        { name: 'Adaptability', icon: 'RefreshCw' },
        { name: 'Effective Communication', icon: 'MessageSquare' },
        { name: 'Academic Commitment', icon: 'Target' },
        { name: 'Teaching & Mentoring', icon: 'GraduationCap' },
        { name: 'Analytical Thinking', icon: 'Brain' },
        { name: 'Organization', icon: 'Calendar' },
        { name: 'Decision Making', icon: 'CheckCircle' }
      ],
      languages: {
        title: 'Languages',
        spanish: 'Spanish',
        spanishLevel: 'Native',
        english: 'English',
        englishLevel: 'Advanced'
      }
    },
    // Projects Section
    projects: {
      title: 'Featured Projects',
      subtitle: 'Works and developments accomplished',
      viewMore: 'View more',
      items: [
        {
          title: 'Desktop Applications for Engineering',
          description: 'Development of specialized applications to model complex equipment in engineering, facilitating calculations and simulations.',
          technologies: ['Python', 'MATLAB', 'Numerical Methods'],
          highlights: [
            'Modeling of complex equipment',
            'Intuitive graphical interface',
            'Accurate and efficient calculations'
          ]
        },
        {
          title: 'Practices for Faculty of Physical and Mathematical Sciences',
          description: 'Design and implementation of academic practices focused on numerical methods and applied programming.',
          technologies: ['Octave', 'Python', 'Teaching'],
          highlights: [
            'Complete teaching material',
            'Applied practical exercises',
            'High approval rate'
          ]
        },
        {
          title: 'Practices for Faculty of Engineering',
          description: 'Development of practical material for teaching programming and numerical analysis in engineering.',
          technologies: ['MATLAB', 'Python', 'Numerical Analysis'],
          highlights: [
            'Real engineering problems',
            'Practical methodology',
            'Positive feedback'
          ]
        },
        {
          title: 'R&D Projects at CMPC Celulosa',
          description: 'Participation in research and development projects focused on data processing and Data Science applied to industry.',
          technologies: ['Python', 'Data Science', 'Data Analysis'],
          highlights: [
            'Industrial data analysis',
            'Solution implementation',
            'Process optimization'
          ]
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Contact',
      subtitle: "Let's work together",
      description: 'Have a project in mind or want to collaborate? Feel free to contact me.',
      info: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Talcahuano, Biobío, Chile',
        social: 'Social Media'
      },
      form: {
        title: 'Send Me a Message',
        name: 'Full Name',
        namePlaceholder: 'Your name',
        email: 'Email Address',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or inquiry...',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully! I will reply soon.',
        error: 'There was an error sending the message. Please try again.'
      }
    },
    // Footer
    footer: {
      rights: 'All rights reserved',
      developedBy: 'Developed with',
      by: 'by'
    }
  }
}

export type Language = 'es' | 'en'
export type Translations = typeof translations.es