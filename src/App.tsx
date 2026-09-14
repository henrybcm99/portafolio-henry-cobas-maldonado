import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Code2, Github, Globe2, GraduationCap, Languages, Linkedin, Mail, Menu, Moon, Palette, Sun, X } from 'lucide-react';

type Language = 'en' | 'es' | 'pt';

type Copy = {
  nav: { about: string; experience: string; education: string; contact: string };
  hero: { eyebrow: string; title: string; accent: string; body: string; cta: string; secondary: string };
  labels: { experience: string; education: string; skills: string; languages: string; contact: string; references: string; interests: string; available: string; download: string };
  about: { title: string; body: string; stats: string[] };
  contact: { title: string; body: string; button: string };
  jobs: { role: string; company: string; period: string; bullets: string[] }[];
  education: { degree: string; school: string; period: string; detail: string };
};

const copy: Record<Language, Copy> = {
  en: {
    nav: { about: 'About', experience: 'Experience', education: 'Education', contact: 'Contact' },
    hero: {
      eyebrow: 'Front-end developer',
      title: 'Designing digital',
      accent: 'experiences with purpose.',
      body: 'I turn complex ideas into clear, accessible and high-performing interfaces. Based in  Ponta Grossa, I build products that feel as good as they work.',
      cta: 'Let’s work together',
      secondary: 'View experience',
    },
    labels: {
      experience: 'Selected experience',
      education: 'Education',
      skills: 'Core skills',
      languages: 'Languages',
      contact: 'Contact',
      references: 'References',
      interests: 'Interests',
      available: 'Available for new projects',
      download: 'Download CV',
    },
    about: {
      title: 'A thoughtful developer with a product mindset.',
      body: 'Front-end developer with over three years of experience crafting engaging, functional user interfaces. Proficient in HTML, CSS and JavaScript, with strong experience in UX, responsive web design and accessibility. I thrive in cross-functional teams and care about the details that make digital products feel effortless.',
      stats: ['3+ years experience', '15+ core skills', 'Cuba / Remote'],
    },
    contact: { title: 'Have a project in mind?', body: 'Let’s create something useful, memorable and beautifully considered.', button: 'Start a conversation' },
    jobs: [
      {
        role: 'Front-end developer',
        company: 'K8N Soft',
        period: 'Dec 2022 — Nov 2023',
        bullets: [
          'Developed and optimized user interfaces, improving load times and overall experience.',
          'Collaborated with cross-functional teams to deliver responsive design for mobile users.',
          'Integrated RESTful APIs and modern JavaScript frameworks for scalable applications.',
          'Implemented accessibility standards to expand the product’s reach.',
        ],
      },
      {
        role: 'Front-end developer',
        company: 'CIGED · Center for Computer Science',
        period: 'Dec 2023 — May 2025',
        bullets: [
          'Built and optimized web application interfaces with a focus on engagement and accessibility.',
          'Streamlined front-end processes using JavaScript frameworks and reusable patterns.',
          'Conducted usability testing and applied feedback to improve customer satisfaction.',
          'Trained junior developers and encouraged stronger collaboration across the team.',
        ],
      },
      {
        role: 'Front-end developer',
        company: 'Software Solutions',
        period: 'Sep 2024 — May 2025',
        bullets: [
          'Developed responsive web applications and improved page-load performance.',
          'Partnered with UX/UI designers to translate product concepts into polished features.',
          'Integrated RESTful APIs and Stripe payments to extend product functionality.',
          'Conducted A/B testing to make feature decisions with confidence.',
        ],
      },
    ],
    education: { degree: 'Computer Science Engineer', school: 'University of Computer Sciences (UCI)', period: 'Aug 2017 — Dec 2023', detail: 'Computer Science · Havana, Cuba' },
  },
  es: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', education: 'Formación', contact: 'Contacto' },
    hero: {
      eyebrow: 'Desarrollador front-end',
      title: 'Diseño experiencias',
      accent: 'digitales con propósito.',
      body: 'Convierto ideas complejas en interfaces claras, accesibles y de alto rendimiento. Desde Ponta Grossa, creo productos que funcionan tan bien como se sienten.',
      cta: 'Trabajemos juntos',
      secondary: 'Ver experiencia',
    },
    labels: {
      experience: 'Experiencia seleccionada',
      education: 'Formación',
      skills: 'Habilidades clave',
      languages: 'Idiomas',
      contact: 'Contacto',
      references: 'Referencias',
      interests: 'Intereses',
      available: 'Disponible para nuevos proyectos',
      download: 'Descargar CV',
    },
    about: {
      title: 'Un desarrollador atento con mentalidad de producto.',
      body: 'Desarrollador front-end con más de tres años de experiencia creando interfaces atractivas y funcionales. Domino HTML, CSS y JavaScript, con experiencia en UX, diseño web responsive y accesibilidad. Disfruto trabajar con equipos multidisciplinarios y cuidar los detalles que hacen que un producto digital se sienta simple.',
      stats: ['+3 años de experiencia', '+15 habilidades clave', 'Cuba / Remoto'],
    },
    contact: { title: '¿Tienes un proyecto en mente?', body: 'Creemos algo útil, memorable y cuidadosamente diseñado.', button: 'Iniciar una conversación' },
    jobs: [
      {
        role: 'Desarrollador front-end',
        company: 'K8N Soft',
        period: 'Dic 2022 — Nov 2023',
        bullets: [
          'Desarrollé y optimicé interfaces, mejorando los tiempos de carga y la experiencia general.',
          'Colaboré con equipos multidisciplinarios para entregar diseños responsive para móviles.',
          'Integré APIs RESTful y frameworks modernos de JavaScript para aplicaciones escalables.',
          'Implementé estándares de accesibilidad para ampliar el alcance del producto.',
        ],
      },
      {
        role: 'Desarrollador front-end',
        company: 'CIGED · Centro de Informática',
        period: 'Dic 2023 — May 2025',
        bullets: [
          'Construí y optimicé interfaces para aplicaciones web enfocadas en el engagement y la accesibilidad.',
          'Agilicé procesos front-end usando frameworks de JavaScript y patrones reutilizables.',
          'Realicé pruebas de usabilidad y apliqué feedback para mejorar la satisfacción del cliente.',
          'Capacité a desarrolladores junior y reforcé la colaboración del equipo.',
        ],
      },
      {
        role: 'Desarrollador front-end',
        company: 'Software Solutions',
        period: 'Sep 2024 — May 2025',
        bullets: [
          'Desarrollé aplicaciones web responsive y mejoré el rendimiento de carga.',
          'Trabajé junto a diseñadores UX/UI para convertir conceptos en funcionalidades pulidas.',
          'Integré APIs RESTful y pagos con Stripe para ampliar la funcionalidad del producto.',
          'Realicé pruebas A/B para tomar decisiones de producto con mayor confianza.',
        ],
      },
    ],
    education: {
      degree: 'Ingeniero en Ciencias Informáticas',
      school: 'Universidad de las Ciencias Informáticas (UCI)',
      period: 'Ago 2017 — Dic 2023',
      detail: 'Ciencias Informáticas · La Habana, Cuba',
    },
  },
  pt: {
    nav: { about: 'Sobre mim', experience: 'Experiência', education: 'Formação', contact: 'Contato' },
    hero: {
      eyebrow: 'Desenvolvedor front-end',
      title: 'Criando experiências',
      accent: 'digitais com propósito.',
      body: 'Transformo ideias complexas em interfaces claras, acessíveis e de alto desempenho. De Ponta Grossa, crio produtos que funcionam tão bem quanto parecem.',
      cta: 'Vamos trabalhar juntos',
      secondary: 'Ver experiência',
    },
    labels: {
      experience: 'Experiência selecionada',
      education: 'Formação',
      skills: 'Habilidades principais',
      languages: 'Idiomas',
      contact: 'Contato',
      references: 'Referências',
      interests: 'Interesses',
      available: 'Disponível para novos projetos',
      download: 'Baixar CV',
    },
    about: {
      title: 'Um desenvolvedor atento com mentalidade de produto.',
      body: 'Desenvolvedor front-end com mais de três anos de experiência criando interfaces envolventes e funcionais. Especialista em HTML, CSS e JavaScript, com experiência em UX, design web responsivo e acessibilidade. Gosto de trabalhar em equipes multidisciplinares e cuidar dos detalhes que tornam um produto digital simples.',
      stats: ['+3 anos de experiência', '+15 habilidades principais', 'Cuba / Remoto'],
    },
    contact: { title: 'Tem um projeto em mente?', body: 'Vamos criar algo útil, memorável e cuidadosamente pensado.', button: 'Iniciar uma conversa' },
    jobs: [
      {
        role: 'Desenvolvedor front-end',
        company: 'K8N Soft',
        period: 'Dez 2022 — Nov 2023',
        bullets: [
          'Desenvolvi e otimizei interfaces, melhorando o tempo de carregamento e a experiência geral.',
          'Colaborei com equipes multidisciplinares para entregar design responsivo para dispositivos móveis.',
          'Integrei APIs RESTful e frameworks modernos de JavaScript para aplicações escaláveis.',
          'Implementei padrões de acessibilidade para ampliar o alcance do produto.',
        ],
      },
      {
        role: 'Desenvolvedor front-end',
        company: 'CIGED · Centro de Informática',
        period: 'Dez 2023 — Mai 2025',
        bullets: [
          'Criei e otimizei interfaces para aplicações web com foco em engajamento e acessibilidade.',
          'Simplifiquei processos front-end usando frameworks JavaScript e padrões reutilizáveis.',
          'Realizei testes de usabilidade e apliquei feedback para melhorar a satisfação do cliente.',
          'Treinei desenvolvedores juniores e incentivei a colaboração da equipe.',
        ],
      },
      {
        role: 'Desenvolvedor front-end',
        company: 'Software Solutions',
        period: 'Set 2024 — Mai 2025',
        bullets: [
          'Desenvolvi aplicações web responsivas e melhorei o desempenho de carregamento.',
          'Trabalhei com designers UX/UI para transformar conceitos em funcionalidades refinadas.',
          'Integrei APIs RESTful e pagamentos Stripe para ampliar a funcionalidade do produto.',
          'Realizei testes A/B para tomar decisões de produto com confiança.',
        ],
      },
    ],
    education: {
      degree: 'Engenheiro de Ciências da Computação',
      school: 'Universidade de Ciências Informáticas (UCI)',
      period: 'Ago 2017 — Dez 2023',
      detail: 'Ciências da Computação · Havana, Cuba',
    },
  },
};

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'RESTful APIs', 'Tailwind CSS', 'Material UI', 'Django', 'Usability testing', 'Accessibility'];
const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Advanced' },
  { name: 'Portuguese', level: 'Conversational' },
];

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const t = copy[language];

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setLanguageOpen(false);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Henry Cobas Maldonado home">
          <span>HC</span>
          <strong>
            henry cobas <em>maldonado</em>
          </strong>
        </a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t.nav.about}
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            {t.nav.experience}
          </a>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            {t.nav.education}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t.nav.contact}
          </a>
        </nav>
        <div className="header-actions">
          <div className="language-picker">
            <button className="control-button" onClick={() => setLanguageOpen(!languageOpen)} aria-label="Change language">
              <Globe2 size={17} />
              <span>{language.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>
            {languageOpen && (
              <div className="language-menu">
                {(['en', 'es', 'pt'] as Language[]).map((item) => (
                  <button key={item} className={language === item ? 'selected' : ''} onClick={() => changeLanguage(item)}>
                    {item === 'en' ? 'English' : item === 'es' ? 'Español' : 'Português'}
                    {language === item && <Check size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="icon-button" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle color theme">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              {t.labels.available}
            </div>
            <p className="kicker">{t.hero.eyebrow}</p>
            <h1>
              {t.hero.title}
              <br />
              <span>{t.hero.accent}</span>
            </h1>
            <p className="hero-text">{t.hero.body}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                {t.hero.cta}
                <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#experience">
                {t.hero.secondary}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-glow" />
              <div className="portrait-monogram">HCM</div>
              <div className="portrait-label">
                <span>Based in</span>
                <strong>Ponta Grossa, Brasil</strong>
              </div>
            </div>
            <div className="floating-note note-top">
              <Code2 size={17} />
              <span>
                Clean code
                <br />
                <b>good design</b>
              </span>
            </div>
            <div className="floating-note note-bottom">
              <Palette size={17} />
              <span>
                Available
                <br />
                <b>for freelance</b>
              </span>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-label">
            <span>{t.nav.about}</span>
          </div>
          <div className="about-content">
            <div>
              <h2>{t.about.title}</h2>
              <p>{t.about.body}</p>
            </div>
            <div className="stats">
              {t.about.stats.map((stat) => (
                <div className="stat" key={stat}>
                  <strong>{stat.split(' ')[0]}</strong>
                  <span>{stat.substring(stat.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section-shell" id="experience">
          <div className="section-label">
            <span>{t.labels.experience}</span>
          </div>
          <div className="section-heading">
            <h2>
              Where I’ve made
              <br />
              <i>an impact.</i>
            </h2>
            <BriefcaseBusiness size={27} />
          </div>
          <div className="timeline">
            {t.jobs.map((job, index) => (
              <article className="job" key={job.company}>
                <div className="job-index">0{index + 1}</div>
                <div className="job-main">
                  <div className="job-title">
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company}</p>
                    </div>
                    <time>{job.period}</time>
                  </div>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="details section-shell" id="education">
          <div className="details-column">
            <div className="section-label">
              <span>{t.labels.education}</span>
            </div>
            <div className="education-card">
              <GraduationCap size={25} />
              <div>
                <h3>{t.education.degree}</h3>
                <p>{t.education.school}</p>
                <span>{t.education.period}</span>
                <small>{t.education.detail}</small>
              </div>
            </div>
          </div>
          <div className="details-column">
            <div className="section-label">
              <span>{t.labels.skills}</span>
            </div>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="languages-title">
              <Languages size={18} />
              <span>{t.labels.languages}</span>
            </div>
            <div className="language-list">
              {languages.map((item) => (
                <div key={item.name}>
                  <span>{item.name}</span>
                  <small>{item.level}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-mark">HC</div>
          <div>
            <div className="section-label">
              <span>{t.labels.contact}</span>
            </div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.body}</p>
            <a className="button primary" href="mailto:henrycobas99@gmail.com">
              {t.contact.button}
              <Mail size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <div>
          <a className="brand" href="#top">
            <span>HC</span>
            <strong>
              henry cobas <em>maldonado</em>
            </strong>
          </a>
          <p>© Henry Cobas Maldonado</p>
        </div>
        <div className="footer-links">
          <a href="mailto:henrycobas99@gmail.com">
            <Mail size={16} />
            Email
          </a>
          <a href="https://github.com/henrybcm99" target="_blank" rel="noreferrer">
            <Github size={16} />
            Github
          </a>
          <a href="https://linkedin.com/in/henry-cobas-maldonado-142957247" target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
        <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top <ArrowUpRight size={16} />
        </button>
      </footer>
    </div>
  );
}

export default App;
