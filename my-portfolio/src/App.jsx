import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


//  PROFESSIONAL SKILL BAR WITH COUNT-UP ANIMATION

function SkillBar({ name, level, icon }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        if (start <= level) {
          setProgress(start);
        } else {
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    }
  }, [isInView, level]);

  return (
    <motion.div
      ref={ref}
      className="mb-5 sm:mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 text-base sm:text-lg">{icon}</span>
          <p className="text-xs sm:text-sm font-medium text-gray-300 truncate max-w-[180px] sm:max-w-none">
            {name}
          </p>
        </div>
        <span className="text-[10px] sm:text-xs bg-cyan-400/10 px-2 sm:px-2.5 py-1 rounded-full text-cyan-400 font-mono font-semibold border border-cyan-400/30 whitespace-nowrap">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-800/60 rounded-full h-2 sm:h-2.5 backdrop-blur-sm">
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 sm:h-2.5 rounded-full shadow-lg shadow-cyan-500/30"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}


//  PROJECT CARD – FULLY RESPONSIVE GLASS MORPHISM
const ProjectCard = ({ title, category, description, tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <span className="relative inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 mb-3 sm:mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30">
        {category}
      </span>
      
      <h4 className="relative text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors pr-4">
        {title}
      </h4>
      
      <p className="relative text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
        {description}
      </p>
      
      <div className="relative flex flex-wrap gap-1.5 sm:gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-xs bg-white/5 text-gray-300 rounded-lg border border-white/10"
          >
            {item}
          </span>
        ))}
      </div>
      
      <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-br-2xl sm:rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};


//  SERVICE CARD – TOUCH OPTIMIZED & RESPONSIVE
const ServiceCard = ({ icon, title, description, gradient }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-500 group overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
      <div className="relative text-3xl sm:text-4xl mb-4 sm:mb-5">{icon}</div>
      <h4 className="relative text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h4>
      <p className="relative text-xs sm:text-sm text-gray-400 leading-relaxed">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.div>
  );
};


//  MOBILE NAVIGATION DRAWER – FULLY RESPONSIVE

const MobileNav = ({ isOpen, onClose, scrollToSection }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
        />
      )}

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-[280px] sm:w-[320px] bg-gradient-to-b from-gray-900 to-gray-950 border-l border-white/10 z-50 md:hidden shadow-2xl"
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col gap-6 mt-12">
            {["home", "services", "projects", "skills", "education", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  onClose();
                }}
                className="text-left text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors py-2 border-b border-white/10"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="mt-auto pt-8">
            <div className="text-sm text-gray-500">
              <p className="mb-2">Joseph Chiori</p>
              <p className="text-xs">Enterprise • IT • Web</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};


//  MAIN APP – FULLY RESPONSIVE PROFESSIONAL PORTFOLIO

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dynamic typing effect
  const titles = [
    "Web Developer",
    "Web Designer",
    "IT support specialist",
    "IT tutor",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Projects data – showcases Web, Design, IT Support, IT Services
  const projects = [
    {
      title: "web apps Management Information System",
      category: "Web Development",
      description:
        "complete web application for managing institutions data securely.",
      tech: ["React", "tailwind css", "Node.js", "PostgreSQL","mongodb", "REST API"],
    },
    {
      title: "IT TUTOR",
      category: "IT Services",
      description:
        "Offering teaching services in computer applications and web development",
      tech: ["Microsoft office suit", "html,css,javascript", "wordpress"],
    },
    {
      title: "Luxury Rental Marketplace",
      category: "Web Development & Design",
      description:
        "High-end car rental platform with immersive UI, 3D configurator, and real-time booking engine.",
      tech: ["Figma", "node js", "Tailwind css", "react", "Stripe API"],
    },
    {
      title: "data analysis",
      category: "IT Support",
      description:
        "Complete data analysis for financial firm.",
      tech: ["Python", "Pandas", "mysql"],
    },
    {
      title: "AI-Powered Admin Dashboard",
      category: "Web Development",
      description:
        "Predictive analytics dashboard for inventory forecasting with machine learning insights.",
      tech: ["Python", "TensorFlow","FastAPI"],
    },
    {
      title: "Windows 11 & Office 2021 Deployment",
      category: "IT Services",
      description:
        "Enterprise-wide migration for 500+ workstations with automated imaging and user training.",
      tech: ["SCCM", "PowerShell", "Intune", "Active Directory"],
    },
  ];

  // Education & certifications
  const education = [
    {
      degree: "DIPLOMA IN INFORMATION TECHNOLOGY",
      institution: "KIAMBU NATIONAL POLYTECHIC",
      period: "2023 – 2026",
      description: "Comprehensive IT curriculum covering programming, networking, database management, and cybersecurity fundamentals.",
    },
    {
      degree: "JavaScript Programming Certificate",
      institution: "CISCO NETWORKING ACADEMY",
      period: "2025 – 2026",
      description: "In-depth JavaScript programming course with hands-on labs and real-world projects.",
    },
        {
      degree: "python Programming Certificate",
      institution: "CISCO NETWORKING ACADEMY",
      period: "2026- now",
      description: "In-depth Python programming course with hands-on labs and real-world projects.",
    },
    {
      degree: "Advanced Web Development",
      institution: "Meta Backend Specialization",
      period: "2025 – 2026",
      description: "React, Node.js, PostgresQL, MongoDB, and Express.js for building scalable web applications with a focus on backend development.",
    },
  ];

  return (
    <div className="bg-[#030812] text-gray-200 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden">
      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        scrollToSection={scrollToSection}
      />

      {/* 
        PREMIUM NAVBAR – FULLY RESPONSIVE GLASS MORPHISM
      */}
      <nav className="fixed top-0 w-full z-50 bg-[#030812]/80 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Joseph Chiori<span className="text-cyan-400/60 hidden xs:inline">.</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-10 text-xs lg:text-sm font-medium">
            {["home", "services", "projects", "skills", "education", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* 
        HERO SECTION – FULLY RESPONSIVE
      */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 sm:pt-24 md:pt-32 overflow-hidden"
      >
        {/* Animated gradient orbs - responsive positioning */}
        <div className="absolute top-20 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-[30rem] md:w-[40rem] h-64 sm:h-[30rem] md:h-[40rem] bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30">
              Enterprise • IT • Web
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block sm:inline">
                Joseph
              </span>
            </h2>
            <div className="h-16 sm:h-20 mt-2">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light">
                I build & secure{" "}
                <span className="text-cyan-400 font-semibold border-r-4 border-cyan-400 pr-2 animate-pulse block sm:inline mt-1 sm:mt-0">
                  {titles[index]}
                </span>
              </p>
            </div>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Full-cycle digital solutions: from enterprise web development and 
              design to robust IT infrastructure, security audits, 
              and web app deployment.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 text-sm sm:text-base"
              >
                View Portfolio
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right column – responsive profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center relative order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-tilt" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-black/50">
                <img
                  src="profile.png"
                  alt="Joseph Chiori – Professional IT & Web Specialist"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }} 
                />
              </div>
              {/* Floating badge - responsive */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-4 sm:-bottom-5 -right-4 sm:-right-5 bg-gradient-to-br from-gray-900 to-gray-950 backdrop-blur-xl border border-cyan-400/30 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl"
              >
                <span className="text-xl sm:text-2xl font-bold text-cyan-400">2+</span>
                <span className="block text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">Years Experience</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        SERVICES – FULLY RESPONSIVE GRID
      */}
      <section id="services" className="py-16 sm:py-20 lg:py-32 bg-[#070b17] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-1.5 mb-4 sm:mb-5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30">
              Specialized Expertise
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent px-2">
              Integrated IT & Creative Services
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <ServiceCard
              icon="💻"
              title="Web Development"
              description="Scalable React/Node enterprise platforms, real‑time dashboards, and cloud‑native applications."
              gradient="from-cyan-500 to-blue-500"
            />
            <ServiceCard
              icon="🎨"
              title="web design"
              description="UX/UI design, Figma prototypes, and responsive interfaces for engaging digital experiences."
              gradient="from-purple-500 to-pink-500"
            />
            <ServiceCard
              icon="🛡️"
              title="IT Support"
              description="Windows 11/Office 2021 deployment, hardware servicing, helpdesk automation, user training."
              gradient="from-green-500 to-emerald-500"
            />
            <ServiceCard
              icon="⚙️"
              title="IT tutor"
              description="Comprehensive IT training in computer applications and web development."
              gradient="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </section>

      {/* 
        PROJECTS – RESPONSIVE GRID (1→2→3 COLUMNS)
      */}
      <section id="projects" className="py-16 sm:py-20 lg:py-32 bg-[#030812]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-1.5 mb-4 sm:mb-5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30">
              Featured Work
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent px-2">
              Enterprise & IT Solutions
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} index={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* 
        SKILLS – RESPONSIVE 1→2 COLUMNS
      */}
      <section id="skills" className="py-16 sm:py-20 lg:py-32 bg-[#070b17] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-1.5 mb-4 sm:mb-5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30">
              Core Competencies
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent px-2">
              Technical Mastery
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Technical Skills */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-1 h-6 sm:h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                Engineering & Development
              </h4>
              <SkillBar name="React" level={80} icon="⚛️" />
              <SkillBar name="Node.js / Express" level={80} icon="📦" />
              <SkillBar name="Python / Django" level={70} icon="🐍" />
              <SkillBar name="Tailwind CSS" level={85} icon="🎨" />
              <SkillBar name="PostgreSQL / MongoDB" level={82} icon="🗄️" />
            </div>

            {/* Professional IT Skills */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full" />
                IT Infrastructure & Support
              </h4>
              <SkillBar name="Windows 11 / Office 2021 Deployment" level={95} icon="🖥️" />
              <SkillBar name="tutoring services" level={92} icon="🛡️" />
              <SkillBar name="programming" level={80} icon="☁️" />
              <SkillBar name="Computer Servicing / Hardware" level={88} icon="🔧" />
              <SkillBar name="Active Directory / Intune" level={79} icon="📁" />
            </div>
          </div>
        </div>
      </section>

      {/* 
        EDUCATION – RESPONSIVE 1→2→3 COLUMNS
      */}
      <section id="education" className="py-16 sm:py-20 lg:py-32 bg-[#030812]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-1.5 mb-4 sm:mb-5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30">
              Academic & Professional
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent px-2">
              Education & Credentials
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-500 group"
              >
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-tr-2xl sm:rounded-tr-3xl" />
                <span className="inline-block px-2.5 sm:px-3 py-1 mb-4 sm:mb-5 text-[10px] sm:text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30">
                  {item.period}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{item.degree}</h4>
                <p className="text-cyan-400/80 text-xs sm:text-sm mb-3 sm:mb-4">{item.institution}</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        CONTACT – FULLY RESPONSIVE CTA
      */}
      <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-[#070b17] relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-blue-600/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 shadow-2xl"
          >
            <span className="inline-block text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">📬</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Let's build something
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
                {" "}exceptional
              </span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-2">
              Available for enterprise contracts, IT consulting, and full‑stack development.
              Response within 24 hours. and for project github repositories and contacting, please click the buttons below.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
              <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  href="mailto:josephchio21c@gmail.com?subject=Project%20Inquiry%20from%20Portfolio&body=Hi%20Joseph%2C%0A%0AMy%20Name%3A%20%5BEnter%20your%20name%5D%0AMy%20Email%3A%20%5BEnter%20your%20email%5D%0A%0AMessage%3A%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D"
  className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base"
>
  <span>📧</span> Send Email
</motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/254797211844"
                className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base"
              >
             <span>💬</span> WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/Chio-21c"
                className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base"
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        FOOTER – FULLY RESPONSIVE
      */}
      <footer className="bg-[#030812] border-t border-white/10 py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent order-2 md:order-1">
              Joseph Chiori<span className="text-cyan-400/60 hidden xs:inline">.</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-500 order-3 md:order-2 text-center px-2">
              © {new Date().getFullYear()} • Enterprise Web & IT Infrastructure
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 order-1 md:order-3">
              <span className="hover:text-cyan-400 transition cursor-pointer">Privacy</span>
              <span className="hover:text-cyan-400 transition cursor-pointer">Terms</span>
              <span className="hover:text-cyan-400 transition cursor-pointer">Imprint</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom animations */}
      <style>{`
        @keyframes tilt {
          0%, 100% { transform: rotate(-2deg) scale(1); }
          50% { transform: rotate(2deg) scale(1.02); }
        }
        .animate-tilt {
          animation: tilt 10s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 4s infinite ease-in-out;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
        }
      `}</style>
    </div>
  );
}