/* ============================================================
   IEEE LANANO 2026 — Complete Production JavaScript
   Latin American Conference on Nanotechnology
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initSmoothScroll();
  initCountdown();
  initLanguageToggle();
  initScrollAnimations();
  initScopeTabs();
  initCounters();
  initParticles();
  initSpeakersFilter();
});

/* ============================================================
   TRANSLATIONS
   ============================================================ */

const translations = {
  es: {
    // Nav
    'nav-about': 'Acerca de',
    'nav-scope': 'Alcance',
    'nav-process': 'Proceso',
    'nav-dates': 'Fechas',
    'nav-speakers': 'Ponentes',
    'nav-cfp': 'Convocatoria',
    'nav-sponsors': 'Patrocinadores',
    'nav-contact': 'Contacto',
    'nav-submit': 'Postular',

    // Hero
    'hero-badge': 'Noviembre 3-6, 2026 — Yachay Tech University',
    'hero-subtitle': 'Latin American Conference on Nanotechnology',
    'hero-title': 'IEEE LANANO 2026 PAPER TRAINING',
    'hero-description': 'La segunda Conferencia Latinoamericana IEEE sobre Nanotecnología. Una plataforma presencial para científicos, ingenieros y educadores de todo el mundo para presentar investigaciones de vanguardia en nanociencia y nanotecnología. Incluye un programa de training especializado.',
    'hero-btn-submit': 'Postular Artículo',
    'hero-btn-more': 'Saber Más',
    'countdown-label': 'La conferencia comienza en',
    'countdown-days': 'Días',
    'countdown-hours': 'Horas',
    'countdown-minutes': 'Minutos',
    'countdown-seconds': 'Segundos',

    // About
    'about-label': 'Acerca del evento',
    'about-title': 'Impulsando la Innovación en Nanotecnología',
    'about-description': 'IEEE LANANO es una conferencia internacional anual que fomenta la colaboración y acelera el intercambio de conocimiento en nanociencia y nanotecnología entre investigadores de América Latina y el mundo.',
    'about-card1-title': 'Investigación de Vanguardia',
    'about-card1-text': 'Presenta y descubre las últimas innovaciones en nanomateriales, nanoelectrónica, nanotecnología en ciencias de la vida y más.',
    'about-card2-title': 'Colaboración Global',
    'about-card2-text': 'Conecta con investigadores internacionales y locales que actuarán como coautores para fortalecer tu investigación.',
    'about-card3-title': 'Publicación IEEE Xplore',
    'about-card3-text': 'Los artículos aceptados serán publicados en IEEE Xplore Digital Library, asegurando amplia difusión e indexación.',
    'about-card4-title': 'Training Presencial',
    'about-card4-text': 'Asiste a sesiones de training especializadas en Yachay Tech University. Los participantes se agrupan por afinidad temática con ponentes como coautores.',
    'stat-speakers': 'Ponentes',
    'stat-countries': 'Países',
    'stat-articles': 'Artículos',
    'stat-days': 'Días',

    // Scope
    'scope-label': 'Alcance de la conferencia',
    'scope-title': 'Áreas Temáticas',
    'scope-description': 'Explora las áreas de investigación que abarca la conferencia, cada una con impacto transformador en la ciencia y tecnología actual.',
    'scope-tab1': 'Nanomateriales Avanzados',
    'scope-tab2': 'Nanoelectrónica',
    'scope-tab3': 'Ciencias de la Vida',
    'scope-tab4': 'ML en Nanotecnología',
    'scope-tab5': 'Tecnología Cuántica',
    'scope-tab6': 'Nanodispositivos',
    'scope-tab7': 'Nanorobótica',

    'scope1-title': 'Nanomateriales Avanzados',
    'scope1-desc': 'Investigación en grafeno, nanotubos de carbono, materiales 2D, nanocompositos y nanomateriales funcionales. Esta área abarca el diseño, síntesis y caracterización de materiales a escala nanométrica con propiedades únicas para aplicaciones en energía, electrónica, medicina y medio ambiente.',
    'scope1-impact': 'Los nanomateriales están revolucionando el almacenamiento de energía con baterías de grafeno que cargan en minutos, filtros de agua basados en nanotubos que eliminan el 99.9% de contaminantes, y recubrimientos autolimpiantes inspirados en la naturaleza. El mercado global de nanomateriales superará los $30 mil millones para 2027.',

    'scope2-title': 'Nuevas Tendencias en Nanoelectrónica',
    'scope2-desc': 'Exploración de transistores moleculares, puntos cuánticos, espintrónica y electrónica flexible a escala nanométrica. La nanoelectrónica está redefiniendo los límites de la computación y las comunicaciones con dispositivos cada vez más pequeños y eficientes.',
    'scope2-impact': 'Los transistores de 2nm ya son realidad, permitiendo chips con 50 mil millones de transistores. La electrónica flexible basada en nanomateriales está creando dispositivos vestibles y pantallas plegables. Se proyecta que el mercado de nanoelectrónica alcance $120 mil millones para 2028.',

    'scope3-title': 'Nanotecnología en Ciencias de la Vida',
    'scope3-desc': 'Aplicaciones de la nanotecnología en medicina, farmacología y biotecnología. Incluye sistemas de entrega de fármacos dirigidos, biosensores nanométricos, ingeniería de tejidos y diagnóstico molecular avanzado.',
    'scope3-impact': 'Las nanopartículas de ARNm hicieron posibles las vacunas COVID-19. Hoy, la nanomedicina permite detectar cáncer en etapas tempranas con biosensores de grafeno y administrar quimioterapia directamente a tumores, reduciendo efectos secundarios en un 70%. El mercado de nanomedicina crecerá a $350 mil millones para 2030.',

    'scope4-title': 'Machine Learning en Nanotecnología',
    'scope4-desc': 'Integración de inteligencia artificial y aprendizaje automático para el descubrimiento acelerado de nanomateriales, predicción de propiedades y optimización de procesos de nanofabricación.',
    'scope4-impact': 'Los modelos de ML están reduciendo el tiempo de descubrimiento de nuevos nanomateriales de años a semanas. Redes neuronales predicen propiedades de nanopartículas con 95% de precisión, y algoritmos genéticos optimizan la síntesis de nanoestructuras complejas, acelerando la innovación exponencialmente.',

    'scope5-title': 'Tecnología Cuántica',
    'scope5-desc': 'Computación cuántica, sensores cuánticos, comunicaciones cuánticas y materiales cuánticos. Esta área explora cómo los fenómenos cuánticos a escala nanométrica pueden revolucionar la tecnología.',
    'scope5-impact': 'Los computadores cuánticos con qubits superconductores de escala nanométrica están resolviendo problemas antes imposibles. Los sensores cuánticos ofrecen precisión sin precedentes para diagnóstico médico y navegación. Se estima que la economía cuántica generará $850 mil millones para 2040.',

    'scope6-title': 'Nanodispositivos y Nanofabricación',
    'scope6-desc': 'Técnicas avanzadas de litografía, autoensamblaje molecular, nanoimprint y fabricación aditiva a escala nanométrica. Incluye el diseño y manufactura de dispositivos funcionales a escala atómica.',
    'scope6-impact': 'La litografía ultravioleta extrema (EUV) permite fabricar estructuras de 3nm. El autoensamblaje de ADN está creando nanoestructuras programables con precisión atómica. Los metasuperficies nanofabricadas están revolucionando la óptica con lentes planas ultrafinas.',

    'scope7-title': 'Nanorobótica',
    'scope7-desc': 'Máquinas moleculares, nanomotores, nanorobots médicos y sistemas autónomos a escala nanométrica. La nanorobótica combina nanotecnología, robótica e inteligencia artificial para crear sistemas capaces de operar a escala molecular.',
    'scope7-impact': 'Nanorobots de ADN ya navegan el torrente sanguíneo para entregar fármacos con precisión. Nanomotores alimentados por luz descontaminan aguas residuales. Se proyecta que la nanorobótica transformará la medicina, la manufactura y la remediación ambiental, con un mercado de $15 mil millones para 2030.',

    'scope-impact-label': 'Impacto Actual',

    // Process
    'process-label': 'Cómo funciona',
    'process-title': 'Proceso de Participación',
    'process-description': 'Sigue estos pasos para participar en IEEE LANANO 2026 y presentar tu investigación.',
    'process1-title': 'Registro y Formación de Grupos',
    'process1-text': 'Regístrate en la conferencia y serás asignado a un grupo de investigación según tu área de afinidad temática.',
    'process2-title': 'Asignación de Coautores',
    'process2-text': 'Ponentes internacionales y locales serán asignados como coautores para guiar y fortalecer tu investigación.',
    'process3-title': 'Desarrollo de Investigación',
    'process3-text': 'Trabaja en colaboración con tu grupo y coautores para desarrollar un artículo científico original (4-6 páginas).',
    'process4-title': 'Postulación del Artículo',
    'process4-text': 'Envía tu artículo a través del sistema de postulación. Será sometido a revisión por pares para evaluar calidad y relevancia.',
    'process5-title': 'Presentación Presencial',
    'process5-text': 'Presenta tu investigación en la conferencia presencial en Yachay Tech ante la comunidad científica internacional. Los artículos aceptados se publican en IEEE Xplore.',

    // Dates
    'dates-label': 'Fechas importantes',
    'dates-title': 'Calendario 2026',
    'dates-description': 'Marca estas fechas en tu calendario para no perderte ninguna oportunidad.',
    'date1-month': 'JUL',
    'date1-day': '12',
    'date1-title': 'Fecha límite de resúmenes',
    'date1-text': 'Último día para enviar tu resumen de investigación.',
    'date2-month': 'AGO',
    'date2-day': '02',
    'date2-title': 'Fecha límite de artículos',
    'date2-text': 'Último día para enviar el artículo completo (4-6 páginas).',
    'date3-month': 'SEP',
    'date3-day': '13',
    'date3-title': 'Registro anticipado',
    'date3-text': 'Aprovecha la tarifa reducida para registro temprano.',
    'date4-month': 'NOV',
    'date4-day': '3-6',
    'date4-title': 'Conferencia IEEE LANANO 2026',
    'date4-text': 'Cuatro días de presentaciones, training y networking presencial en Yachay Tech.',

    // Speakers
    'speakers-label': 'Ponentes',
    'speakers-title': 'Ponentes Invitados',
    'speakers-description': 'Investigadores internacionales y locales de alto nivel que actuarán como coautores y guías en el proceso de investigación.',
    'speakers-filter-all': 'Todos',
    'speakers-filter-international': 'Internacionales',
    'speakers-filter-local': 'Locales',
    'speaker-tba': 'Por confirmar',
    'speaker-institution-tba': 'Institución por confirmar',
    'speaker-badge-international': 'Internacional',
    'speaker-badge-local': 'Local',

    // CFP
    'cfp-label': 'Convocatoria de artículos',
    'cfp-title': 'Call for Papers',
    'cfp-description': 'Invitamos la postulación de artículos originales para el segundo volumen de los Proceedings de IEEE LANANO.',
    'cfp-highlight-title': 'Publicación en IEEE Xplore',
    'cfp-highlight-text': 'Los proceedings serán publicados en IEEE Xplore Digital Library, asegurando amplia difusión e indexación de las contribuciones aceptadas.',
    'cfp-format-title': 'Formato de Postulación',
    'cfp-format-1': 'Artículos regulares originales de 4 a 6 páginas',
    'cfp-format-2': 'Contribuciones novedosas en los tópicos principales',
    'cfp-format-3': 'Proceso de revisión por pares',
    'cfp-format-4': 'Manuscritos en formato IEEE',
    'cfp-sidebar-title': 'Mándanos tu propuesta',
    'cfp-sidebar-text': 'Envía tu manuscrito a través de nuestro sistema de postulación.',
    'cfp-sidebar-btn': 'Ir al Formulario de Postulación',
    'cfp-sidebar-ref': 'Consulta el volumen anterior de los proceedings como referencia.',
    'cfp-sidebar-ref-link': 'Ver Proceedings Anteriores',

    // Sponsors
    'sponsors-label': 'Organizadores y patrocinadores',
    'sponsors-title': 'Nuestros Aliados',
    'sponsors-organized': 'Organizado por',
    'sponsors-sponsored': 'Co-patrocinado por',
    'sponsors-supported': 'Con el apoyo de',

    // Contact
    'contact-label': 'Contacto',
    'contact-title': 'Contáctanos',
    'contact-description': '¿Tienes preguntas? No dudes en escribirnos.',
    'contact-email-label': 'Correo Electrónico',
    'contact-linkedin-label': 'LinkedIn',
    'contact-instagram-label': 'Instagram',
    'contact-form-name': 'Nombre completo',
    'contact-form-email': 'Correo electrónico',
    'contact-form-subject': 'Asunto',
    'contact-form-message': 'Mensaje',
    'contact-form-submit': 'Enviar Mensaje',

    // Footer
    'footer-about-title': 'IEEE LANANO 2026',
    'footer-about-text': 'Conferencia presencial organizada por la rama estudiantil IEEE NTC de Yachay Tech University.',
    'footer-links-title': 'Enlaces Rápidos',
    'footer-resources-title': 'Recursos',
    'footer-contact-title': 'Contacto',
    'footer-copyright': '2026 IEEE - Todos los derechos reservados. IEEE es la organización profesional técnica más grande del mundo dedicada al avance de la tecnología en beneficio de la humanidad.',
    'tag-1-1': 'Grafeno',
    'tag-1-2': 'Nanotubos',
    'tag-1-3': 'Materiales 2D',
    'tag-1-4': 'Nanocompositos',
    'tag-2-1': 'Transistores',
    'tag-2-2': 'Spintronica',
    'tag-2-3': 'Electronica Flexible',
    'tag-2-4': 'Puntos Cuanticos',
    'tag-3-1': 'Drug Delivery',
    'tag-3-2': 'Biosensores',
    'tag-3-3': 'Ingenieria de Tejidos',
    'tag-3-4': 'Diagnostico',
    'tag-4-1': 'Deep Learning',
    'tag-4-2': 'Prediccion',
    'tag-4-3': 'Descubrimiento',
    'tag-4-4': 'Optimizacion',
    'tag-5-1': 'Qubits',
    'tag-5-2': 'Criptografia',
    'tag-5-3': 'Sensores',
    'tag-5-4': 'Materiales Cuanticos',
    'tag-6-1': 'Litografia EUV',
    'tag-6-2': 'Autoensamblaje',
    'tag-6-3': 'Nanoimprint',
    'tag-6-4': 'Fabricacion Aditiva',
    'tag-7-1': 'Nanomotores',
    'tag-7-2': 'Nanorobots',
    'tag-7-3': 'Maquinas Moleculares',
    'tag-7-4': 'Sistemas Autonomos'
  },

  en: {
    // Nav
    'nav-about': 'About',
    'nav-scope': 'Scope',
    'nav-process': 'Process',
    'nav-dates': 'Dates',
    'nav-speakers': 'Speakers',
    'nav-cfp': 'Call for Papers',
    'nav-sponsors': 'Sponsors',
    'nav-contact': 'Contact',
    'nav-submit': 'Submit',

    // Hero
    'hero-badge': 'November 3-6, 2026 — Yachay Tech University',
    'hero-subtitle': 'Latin American Conference on Nanotechnology',
    'hero-title': 'IEEE LANANO 2026 PAPER TRAINING',
    'hero-description': 'The second IEEE Latin American Conference on Nanotechnology. An in-person platform for scientists, engineers, and educators worldwide to showcase cutting-edge research in nanoscience and nanotechnology. Features a specialized training program.',
    'hero-btn-submit': 'Submit Paper',
    'hero-btn-more': 'Learn More',
    'countdown-label': 'The conference starts in',
    'countdown-days': 'Days',
    'countdown-hours': 'Hours',
    'countdown-minutes': 'Minutes',
    'countdown-seconds': 'Seconds',

    // About
    'about-label': 'About the event',
    'about-title': 'Driving Innovation in Nanotechnology',
    'about-description': 'IEEE LANANO is an annual international conference that fosters collaboration and accelerates the exchange of knowledge in nanoscience and nanotechnology among researchers from Latin America and around the world.',
    'about-card1-title': 'Cutting-Edge Research',
    'about-card1-text': 'Present and discover the latest innovations in nanomaterials, nanoelectronics, nanotechnology in life sciences and more.',
    'about-card2-title': 'Global Collaboration',
    'about-card2-text': 'Connect with international and local researchers who will serve as co-authors to strengthen your research.',
    'about-card3-title': 'IEEE Xplore Publication',
    'about-card3-text': 'Accepted papers will be published in IEEE Xplore Digital Library, ensuring broad dissemination and indexing.',
    'about-card4-title': 'In-Person Training',
    'about-card4-text': 'Attend specialized training sessions at Yachay Tech University. Participants are grouped by thematic affinity with speakers as co-authors.',
    'stat-speakers': 'Speakers',
    'stat-countries': 'Countries',
    'stat-articles': 'Articles',
    'stat-days': 'Days',

    // Scope
    'scope-label': 'Conference scope',
    'scope-title': 'Thematic Areas',
    'scope-description': 'Explore the research areas covered by the conference, each with transformative impact on current science and technology.',
    'scope-tab1': 'Advanced Nanomaterials',
    'scope-tab2': 'Nanoelectronics',
    'scope-tab3': 'Life Sciences',
    'scope-tab4': 'ML in Nanotechnology',
    'scope-tab5': 'Quantum Technology',
    'scope-tab6': 'Nanodevices',
    'scope-tab7': 'Nanorobotics',

    'scope1-title': 'Advanced Nanomaterials',
    'scope1-desc': 'Research in graphene, carbon nanotubes, 2D materials, nanocomposites, and functional nanomaterials. This area covers the design, synthesis, and characterization of materials at the nanoscale with unique properties for applications in energy, electronics, medicine, and the environment.',
    'scope1-impact': 'Nanomaterials are revolutionizing energy storage with graphene batteries that charge in minutes, nanotube-based water filters that remove 99.9% of contaminants, and nature-inspired self-cleaning coatings. The global nanomaterials market will exceed $30 billion by 2027.',

    'scope2-title': 'New Trends in Nanoelectronics',
    'scope2-desc': 'Exploration of molecular transistors, quantum dots, spintronics, and flexible nanoscale electronics. Nanoelectronics is redefining the limits of computing and communications with increasingly smaller and more efficient devices.',
    'scope2-impact': '2nm transistors are now a reality, enabling chips with 50 billion transistors. Flexible electronics based on nanomaterials are creating wearable devices and foldable screens. The nanoelectronics market is projected to reach $120 billion by 2028.',

    'scope3-title': 'Nanotechnology in Life Sciences',
    'scope3-desc': 'Applications of nanotechnology in medicine, pharmacology, and biotechnology. Includes targeted drug delivery systems, nanoscale biosensors, tissue engineering, and advanced molecular diagnostics.',
    'scope3-impact': 'mRNA nanoparticles made COVID-19 vaccines possible. Today, nanomedicine enables early cancer detection with graphene biosensors and delivers chemotherapy directly to tumors, reducing side effects by 70%. The nanomedicine market will grow to $350 billion by 2030.',

    'scope4-title': 'Machine Learning in Nanotechnology',
    'scope4-desc': 'Integration of artificial intelligence and machine learning for accelerated nanomaterial discovery, property prediction, and nanofabrication process optimization.',
    'scope4-impact': 'ML models are reducing the time to discover new nanomaterials from years to weeks. Neural networks predict nanoparticle properties with 95% accuracy, and genetic algorithms optimize the synthesis of complex nanostructures, exponentially accelerating innovation.',

    'scope5-title': 'Quantum Technology',
    'scope5-desc': 'Quantum computing, quantum sensors, quantum communications, and quantum materials. This area explores how quantum phenomena at the nanoscale can revolutionize technology.',
    'scope5-impact': 'Quantum computers with nanoscale superconducting qubits are solving previously impossible problems. Quantum sensors offer unprecedented precision for medical diagnostics and navigation. The quantum economy is estimated to generate $850 billion by 2040.',

    'scope6-title': 'Nanodevices and Nanofabrication',
    'scope6-desc': 'Advanced lithography techniques, molecular self-assembly, nanoimprint, and additive manufacturing at the nanoscale. Includes the design and manufacturing of functional devices at the atomic scale.',
    'scope6-impact': 'Extreme ultraviolet (EUV) lithography enables fabrication of 3nm structures. DNA self-assembly is creating programmable nanostructures with atomic precision. Nanofabricated metasurfaces are revolutionizing optics with ultra-thin flat lenses.',

    'scope7-title': 'Nanorobotics',
    'scope7-desc': 'Molecular machines, nanomotors, medical nanorobots, and autonomous systems at the nanoscale. Nanorobotics combines nanotechnology, robotics, and artificial intelligence to create systems capable of operating at the molecular scale.',
    'scope7-impact': 'DNA nanorobots already navigate the bloodstream to deliver drugs with precision. Light-powered nanomotors decontaminate wastewater. Nanorobotics is projected to transform medicine, manufacturing, and environmental remediation, with a market of $15 billion by 2030.',

    'scope-impact-label': 'Current Impact',

    // Process
    'process-label': 'How it works',
    'process-title': 'Participation Process',
    'process-description': 'Follow these steps to participate in IEEE LANANO 2026 and present your research.',
    'process1-title': 'Registration and Group Formation',
    'process1-text': 'Register for the conference and you will be assigned to a research group based on your thematic area of interest.',
    'process2-title': 'Co-author Assignment',
    'process2-text': 'International and local speakers will be assigned as co-authors to guide and strengthen your research.',
    'process3-title': 'Research Development',
    'process3-text': 'Work collaboratively with your group and co-authors to develop an original scientific paper (4-6 pages).',
    'process4-title': 'Paper Submission',
    'process4-text': 'Submit your paper through the submission system. It will undergo peer review to evaluate quality and relevance.',
    'process5-title': 'In-Person Presentation',
    'process5-text': 'Present your research at the conference in Yachay Tech before the international scientific community. Accepted papers are published in IEEE Xplore.',

    // Dates
    'dates-label': 'Important dates',
    'dates-title': 'Calendar 2026',
    'dates-description': 'Mark these dates in your calendar to not miss any opportunity.',
    'date1-month': 'JUL',
    'date1-day': '12',
    'date1-title': 'Abstract submission deadline',
    'date1-text': 'Last day to submit your research abstract.',
    'date2-month': 'AUG',
    'date2-day': '02',
    'date2-title': 'Full paper deadline',
    'date2-text': 'Last day to submit the complete paper (4-6 pages).',
    'date3-month': 'SEP',
    'date3-day': '13',
    'date3-title': 'Early-bird registration',
    'date3-text': 'Take advantage of the reduced rate for early registration.',
    'date4-month': 'NOV',
    'date4-day': '3-6',
    'date4-title': 'IEEE LANANO 2026 Conference',
    'date4-text': 'Four days of presentations, training, and in-person networking at Yachay Tech.',

    // Speakers
    'speakers-label': 'Speakers',
    'speakers-title': 'Invited Speakers',
    'speakers-description': 'High-level international and local researchers who will serve as co-authors and guides in the research process.',
    'speakers-filter-all': 'All',
    'speakers-filter-international': 'International',
    'speakers-filter-local': 'Local',
    'speaker-tba': 'To be announced',
    'speaker-institution-tba': 'Institution TBA',
    'speaker-badge-international': 'International',
    'speaker-badge-local': 'Local',

    // CFP
    'cfp-label': 'Call for papers',
    'cfp-title': 'Call for Papers',
    'cfp-description': 'We invite the submission of original papers for the second volume of the IEEE LANANO Proceedings.',
    'cfp-highlight-title': 'IEEE Xplore Publication',
    'cfp-highlight-text': 'The proceedings will be published in IEEE Xplore Digital Library, ensuring broad dissemination and indexing of accepted contributions.',
    'cfp-format-title': 'Submission Format',
    'cfp-format-1': 'Original regular papers of 4 to 6 pages',
    'cfp-format-2': 'Novel contributions in the main conference topics',
    'cfp-format-3': 'Peer review process',
    'cfp-format-4': 'Manuscripts in IEEE format',
    'cfp-sidebar-title': 'Send Us Your Proposal',
    'cfp-sidebar-text': 'Submit your manuscript through our submission system.',
    'cfp-sidebar-btn': 'Go to Submission Form',
    'cfp-sidebar-ref': 'Check the previous volume of the proceedings for reference.',
    'cfp-sidebar-ref-link': 'View Previous Proceedings',

    // Sponsors
    'sponsors-label': 'Organizers and sponsors',
    'sponsors-title': 'Our Partners',
    'sponsors-organized': 'Organized by',
    'sponsors-sponsored': 'Co-sponsored by',
    'sponsors-supported': 'Supported by',

    // Contact
    'contact-label': 'Contact',
    'contact-title': 'Contact Us',
    'contact-description': 'Have questions? Feel free to reach out.',
    'contact-email-label': 'Email',
    'contact-linkedin-label': 'LinkedIn',
    'contact-instagram-label': 'Instagram',
    'contact-form-name': 'Full name',
    'contact-form-email': 'Email address',
    'contact-form-subject': 'Subject',
    'contact-form-message': 'Message',
    'contact-form-submit': 'Send Message',

    // Footer
    'footer-about-title': 'IEEE LANANO 2026',
    'footer-about-text': 'In-person conference organized by the IEEE NTC Student Branch at Yachay Tech University.',
    'footer-links-title': 'Quick Links',
    'footer-resources-title': 'Resources',
    'footer-contact-title': 'Contact',
    'footer-copyright': '2026 IEEE - All rights reserved. IEEE is the world\'s largest technical professional organization dedicated to advancing technology for the benefit of humanity.',
    'tag-1-1': 'Graphene',
    'tag-1-2': 'Nanotubes',
    'tag-1-3': '2D Materials',
    'tag-1-4': 'Nanocomposites',
    'tag-2-1': 'Transistors',
    'tag-2-2': 'Spintronics',
    'tag-2-3': 'Flexible Electronics',
    'tag-2-4': 'Quantum Dots',
    'tag-3-1': 'Drug Delivery',
    'tag-3-2': 'Biosensors',
    'tag-3-3': 'Tissue Engineering',
    'tag-3-4': 'Diagnostics',
    'tag-4-1': 'Deep Learning',
    'tag-4-2': 'Prediction',
    'tag-4-3': 'Discovery',
    'tag-4-4': 'Optimization',
    'tag-5-1': 'Qubits',
    'tag-5-2': 'Cryptography',
    'tag-5-3': 'Sensors',
    'tag-5-4': 'Quantum Materials',
    'tag-6-1': 'EUV Lithography',
    'tag-6-2': 'Self-assembly',
    'tag-6-3': 'Nanoimprint',
    'tag-6-4': 'Additive Manufacturing',
    'tag-7-1': 'Nanomotors',
    'tag-7-2': 'Nanorobotics',
    'tag-7-3': 'Molecular Machines',
    'tag-7-4': 'Autonomous Systems'
  }
};


/* ============================================================
   1. HEADER — Scroll shrink + active nav link tracking
   ============================================================ */

function initHeader() {
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const navIndicator = document.getElementById('nav-indicator');
  const navLinksContainer = document.querySelector('.nav-links');

  if (!header) return;

  let ticking = false;
  let activeLink = null;

  function moveIndicator(link) {
    if (!navIndicator || !link) return;
    const li = link.parentElement;
    navIndicator.style.width = `${link.offsetWidth}px`;
    navIndicator.style.left = `${li.offsetLeft}px`;
    navIndicator.classList.add('visible');
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      // Toggle compact header
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Determine which section is in view
      let currentSectionId = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentSectionId = section.getAttribute('id');
        }
      });

      // Update active nav link
      let hasActiveDesktopLink = false;
      navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href === `#${currentSectionId}`) {
          link.classList.add('active');
          activeLink = link;
          if (navIndicator && link.closest('.nav-links')) {
            if (navLinksContainer && !navLinksContainer.matches(':hover')) {
                moveIndicator(link);
            }
            hasActiveDesktopLink = true;
          }
        }
      });
      
      if (!hasActiveDesktopLink && navIndicator && navLinksContainer && !navLinksContainer.matches(':hover')) {
        navIndicator.classList.remove('visible');
        activeLink = null;
      }

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial call

  // Add hover logic for the sliding drop
  if (navLinksContainer && navIndicator) {
      navLinks.forEach(link => {
          if (link.closest('.nav-links')) {
              link.addEventListener('mouseenter', () => {
                  moveIndicator(link);
              });
          }
      });

      navLinksContainer.addEventListener('mouseleave', () => {
          if (activeLink) {
              moveIndicator(activeLink);
          } else {
              navIndicator.classList.remove('visible');
          }
      });
  }
}


/* ============================================================
   2. MOBILE MENU
   ============================================================ */

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamburger || !mobileMenu) return;

  const mobileLinks = mobileMenu.querySelectorAll('a');

  function openMenu() {
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when a link inside the menu is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside the menu
  document.addEventListener('click', (e) => {
    if (
      mobileMenu.classList.contains('active') &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}


/* ============================================================
   3. SMOOTH SCROLL
   ============================================================ */

function initSmoothScroll() {
  const HEADER_OFFSET = 80;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const targetPosition = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });
}


/* ============================================================
   4. COUNTDOWN TIMER
   ============================================================ */

function initCountdown() {
  const targetDate = new Date('2026-11-03T09:00:00').getTime();

  const elDays = document.getElementById('countdown-days');
  const elHours = document.getElementById('countdown-hours');
  const elMinutes = document.getElementById('countdown-minutes');
  const elSeconds = document.getElementById('countdown-seconds');

  if (!elDays || !elHours || !elMinutes || !elSeconds) return;

  function update() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      elDays.textContent = '00';
      elHours.textContent = '00';
      elMinutes.textContent = '00';
      elSeconds.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}


/* ============================================================
   5. LANGUAGE TOGGLE (ES / EN)
   ============================================================ */

function initLanguageToggle() {
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');

  if (!btnEs || !btnEn) return;

  let currentLang = localStorage.getItem('lanano-lang') || 'es';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lanano-lang', lang);

    const dict = translations[lang];
    if (!dict) return;

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;

      // For input placeholders
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    // Toggle active class on buttons
    if (lang === 'es') {
      btnEs.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnEs.classList.remove('active');
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  btnEs.addEventListener('click', () => applyLanguage('es'));
  btnEn.addEventListener('click', () => applyLanguage('en'));

  // Apply stored preference on load
  applyLanguage(currentLang);
}


/* ============================================================
   6. SCROLL ANIMATIONS (IntersectionObserver)
   ============================================================ */

function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}


/* ============================================================
   7. SCOPE TABS
   ============================================================ */

function initScopeTabs() {
  const tabs = document.querySelectorAll('.scope-tab');
  const panels = document.querySelectorAll('.scope-panel');

  if (tabs.length === 0 || panels.length === 0) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const panelId = tab.getAttribute('data-panel');

      // Deactivate all
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      // Activate selected
      tab.classList.add('active');
      const targetPanel = document.getElementById(panelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Ensure first tab is active by default (if none is set via HTML)
  if (!document.querySelector('.scope-tab.active')) {
    tabs[0].classList.add('active');
    const firstPanelId = tabs[0].getAttribute('data-panel');
    const firstPanel = document.getElementById(firstPanelId);
    if (firstPanel) firstPanel.classList.add('active');
  }
}


/* ============================================================
   8. ANIMATED COUNTERS
   ============================================================ */

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0) return;

  // easeOutExpo easing
  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000; // ms
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = Math.round(easedProgress * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach((el) => observer.observe(el));
}


/* ============================================================
   9. PARTICLE CANVAS (Molecular / Nanotech feel)
   ============================================================ */

function initParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  let PARTICLE_COUNT = 80;
  const CONNECTION_DISTANCE = 150;
  const COLORS = ['#00A6A0', '#00BCD4', '#006CB7'];

  let particles = [];
  let animationId = null;
  let width = 0;
  let height = 0;

  function resize() {
    width = document.documentElement.scrollWidth;
    height = document.documentElement.scrollHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Dynamically calculate particle count based on document area
    // Roughly 80 particles per 1000px of height
    PARTICLE_COUNT = Math.min(Math.floor((height / 1000) * 80), 500);
    createParticles();
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isBright = Math.random() < 0.2; // 20% are bright molecular nodes
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: isBright ? 2 + Math.random() * 1.5 : 1 + Math.random() * 1.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: isBright ? 0.8 + Math.random() * 0.2 : 0.3 + Math.random() * 0.4,
        isBright: isBright,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const lineOpacity = (1 - dist / CONNECTION_DISTANCE) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 188, 212, ${lineOpacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();

      // Glow for bright nodes
      if (p.isBright) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(p.x, p.y, p.radius * 0.5, p.x, p.y, p.radius * 2.5);
        gradient.addColorStop(0, p.color.replace(')', ', 0.25)').replace('rgb', 'rgba').replace('#', ''));
        // Simpler glow approach
        ctx.fillStyle = `rgba(0, 188, 212, ${p.opacity * 0.15})`;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }
  }

  function update() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;
    }
  }

  function animate() {
    update();
    draw();
    animationId = requestAnimationFrame(animate);
  }

  // Initialize
  resize();
  createParticles();
  animate();

  // Handle resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      // Re-distribute particles that are now outside bounds
      particles.forEach((p) => {
        if (p.x > width) p.x = Math.random() * width;
        if (p.y > height) p.y = Math.random() * height;
      });
    }, 150);
  });

  // Pause animation when hero is not visible (performance)
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!animationId) animate();
        } else {
          if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
          }
        }
      });
    },
    { threshold: 0 }
  );

  heroObserver.observe(hero);
}


/* ============================================================
   10. SPEAKERS FILTER
   ============================================================ */

function initSpeakersFilter() {
  const filterBtns = document.querySelectorAll('.speakers-filter-btn');
  const speakerCards = document.querySelectorAll('.speaker-card');

  if (filterBtns.length === 0 || speakerCards.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterType = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards with fade animation
      speakerCards.forEach((card) => {
        const cardType = card.getAttribute('data-type');
        const shouldShow = filterType === 'all' || cardType === filterType;

        if (card.hideTimeout) {
          clearTimeout(card.hideTimeout);
          card.hideTimeout = null;
        }

        if (shouldShow) {
          card.style.display = '';
          // Force a reflow so the display change is registered before animating
          void card.offsetWidth;
          
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          card.style.opacity = '1';
          card.style.transform = 'scale(1) translateY(0)';
        } else {
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95) translateY(10px)';

          // Hide after transition
          card.hideTimeout = setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}
