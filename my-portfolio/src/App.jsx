import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

// SEO COMPONENT
const SEO = () => {
  useEffect(() => {
    // Set page title
    document.title =
      "Joseph Chiori - Web Developer & IT Specialist | Portfolio 2026";

    // Define all meta tags
    const metaTags = [
      // Primary Meta Tags
      {
        name: "description",
        content:
          "Professional Web Developer, IT Specialist & Web Designer from Kenya. 2+ years experience in React, Node.js, IT Support, Windows 11/Office 2021 Deployment, and Enterprise Web Applications. Hire me for your next project.",
      },
      {
        name: "keywords",
        content:
          "Joseph Chiori, Web Developer Kenya, IT Specialist Nairobi, Web Designer, React Developer, Node.js Developer, IT Support, Windows 11 Deployment, Office 2021 Installation, Computer Servicing, IT Tutor, Kiambu National Polytechnic, Cisco Certified, Kenyan Web Developer",
      },
      { name: "author", content: "Joseph Chiori" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },

      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://josephchiori.vercel.app" },
      {
        property: "og:title",
        content: "Joseph Chiori - Web Developer & IT Specialist | Kenya",
      },
      {
        property: "og:description",
        content:
          "Professional Web Developer, IT Specialist & Web Designer. Specializing in React, Node.js, IT Support, and Enterprise Web Solutions.",
      },
      {
        property: "og:image",
        content: "https://josephchiori.vercel.app/profile.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Joseph Chiori - Professional Web Developer & IT Specialist",
      },
      { property: "og:site_name", content: "Joseph Chiori Portfolio" },
      { property: "og:locale", content: "en_US" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Joseph Chiori - Web Developer & IT Specialist",
      },
      {
        name: "twitter:description",
        content:
          "2+ years experience in React, Node.js, IT Support & Enterprise Web Solutions. Available for hire.",
      },
      {
        name: "twitter:image",
        content: "https://josephchiori.vercel.app/profile.png",
      },
      { name: "twitter:image:alt", content: "Joseph Chiori Portfolio" },
    ];

    // Update or create meta tags
    metaTags.forEach((tag) => {
      const { name, property, content } = tag;
      const selector = name
        ? `meta[name="${name}"]`
        : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);

      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        if (name) meta.setAttribute("name", name);
        if (property) meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    });

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://josephchiori.vercel.app");

    // Set favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.setAttribute("rel", "icon");
      document.head.appendChild(favicon);
    }
    favicon.setAttribute("href", "/favicon.png");
    favicon.setAttribute("type", "image/png");

    // Add schema.org JSON-LD
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Joseph Chiori",
      url: "https://josephchiori.vercel.app",
      image: "https://josephchiori.vercel.app/profile.png",
      sameAs: ["https://github.com/Chio-21c", "https://wa.me/254797211844"],
      jobTitle: ["Web Developer", "IT Specialist", "Web Designer", "IT Tutor"],
      description:
        "Professional Web Developer, IT Specialist, and Web Designer with 2+ years experience in React, Node.js, IT Support, and Enterprise Solutions.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KE",
      },
    };

    const oldScript = document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }, []);

  return null;
};

// CONTACT FORM MODAL - FULLY RESPONSIVE

const ContactFormModal = ({ isOpen, onClose }) => {
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/josephchio21c@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => {
          onClose();
          setFormStatus(null);
        }, 3000);
      } else {
        setFormStatus("error");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
      />

      {/* Modal - Perfect height for all devices */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-137.5 z-50 max-h-[90vh] overflow-y-auto"
      >
        <div className="bg-linear-to-br from-gray-900 via-gray-900 to-gray-950 border border-cyan-400/30 rounded-2xl shadow-2xl shadow-cyan-500/30 p-5 sm:p-6 md:p-8 mx-2">
          {/* Header - More compact */}
          <div className="flex justify-between items-center mb-4 sm:mb-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Let's Connect
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                I'll reply within 24h
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all"
              aria-label="Close contact form"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Form - Compact spacing */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Hidden config */}
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission from Joseph Chiori Portfolio"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="" />

            {/* Name Field - Smaller padding */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1 ml-1"
              >
                Your Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Joe"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1 ml-1"
              >
                Your Email <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="joe@example.com"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1 ml-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry / IT Support"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
              />
            </div>

            {/* Message Field - Smaller rows */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1 ml-1"
              >
                Your Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="3"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all resize-none"
              />
            </div>

            {/* Status Messages - Compact */}
            {formStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-xs sm:text-sm flex items-center gap-2"
              >
                <span>✓</span> Message sent! I'll reply within 24h.
              </motion.div>
            )}

            {formStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-xs sm:text-sm flex items-center gap-2"
              >
                <span>✗</span> Failed to send. Email me directly at
                josephchio21c@gmail.com
              </motion.div>
            )}

            {/* Buttons - More compact */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-5 py-2.5 sm:px-6 sm:py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span>✉️ Send Message</span>
                )}
              </motion.button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 text-xs sm:text-sm"
              >
                Cancel
              </button>
            </div>

            {/* Trust Badge - Minimal */}
            <p className="text-[10px] sm:text-xs text-center text-gray-500 pt-1">
              ✓ Goes to josephchio21c@gmail.com • No spam
            </p>
          </form>
        </div>
      </motion.div>
    </>
  );
};

// PROFESSIONAL SKILL BAR WITH COUNT-UP ANIMATION

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
          <p className="text-xs sm:text-sm font-medium text-gray-300 truncate max-w-45 sm:max-w-none">
            {name}
          </p>
        </div>
        <span className="text-[10px] sm:text-xs bg-cyan-400/10 px-2 sm:px-2.5 py-1 rounded-full text-cyan-400 font-mono font-semibold border border-cyan-400/30 whitespace-nowrap">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-800/60 rounded-full h-2 sm:h-2.5 backdrop-blur-sm">
        <motion.div
          className="bg-linear-to-r from-cyan-400 to-blue-500 h-2 sm:h-2.5 rounded-full shadow-lg shadow-cyan-500/30"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

// PROJECT CARD – FULLY RESPONSIVE GLASS MORPHISM

const ProjectCard = ({ title, category, description, tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative bg-linear-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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

      <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-tl from-cyan-400/10 to-transparent rounded-br-2xl sm:rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

// SERVICE CARD – TOUCH OPTIMIZED & RESPONSIVE

const ServiceCard = ({ icon, title, description, gradient }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-500 group overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
      />
      <div className="relative text-3xl sm:text-4xl mb-4 sm:mb-5">{icon}</div>
      <h4 className="relative text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
        {title}
      </h4>
      <p className="relative text-xs sm:text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.div>
  );
};

// MOBILE NAVIGATION DRAWER – FULLY RESPONSIVE
const MobileNav = ({ isOpen, onClose, scrollToSection }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-70 sm:w-[320px] bg-linear-to-b from-gray-900 to-gray-950 border-l border-white/10 z-50 md:hidden shadow-2xl"
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-12">
            {[
              "home",
              "services",
              "projects",
              "skills",
              "education",
              "contact",
            ].map((item) => (
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

// MAIN APP – FULLY RESPONSIVE PROFESSIONAL PORTFOLIO

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // Dynamic typing effect
  const titles = [
    "Web Developer",
    "Web Designer",
    "IT Support Specialist",
    "IT Tutor",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  // Smooth scroll
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Projects data
  const projects = [
    {
      title: "Web Apps Management Information System",
      category: "Web Development",
      description:
        "Complete web application for managing institutions data securely.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "REST API",
      ],
    },
    {
      title: "IT Tutor",
      category: "IT Services",
      description:
        "Offering teaching services in computer applications and web development",
      tech: ["Microsoft Office Suite", "HTML/CSS/JavaScript", "WordPress"],
    },
    {
      title: "Luxury Rental Marketplace",
      category: "Web Development & Design",
      description:
        "High-end car rental platform with immersive UI, 3D configurator, and real-time booking engine.",
      tech: ["Figma", "Node.js", "Tailwind CSS", "React", "Stripe API"],
    },
    {
      title: "Data Analysis",
      category: "IT Support",
      description: "Complete data analysis for financial firm.",
      tech: ["Python", "Pandas", "MySQL"],
    },
    {
      title: "AI-Powered Admin Dashboard",
      category: "Web Development",
      description:
        "Predictive analytics dashboard for inventory forecasting with machine learning insights.",
      tech: ["Python", "TensorFlow", "FastAPI"],
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
      description:
        "Comprehensive IT curriculum covering programming, networking, database management, and cybersecurity fundamentals.",
    },
    {
      degree: "JavaScript Programming Certificate",
      institution: "CISCO NETWORKING ACADEMY",
      period: "2025 – 2026",
      description:
        "In-depth JavaScript programming course with hands-on labs and real-world projects.",
    },
    {
      degree: "Python Programming Certificate",
      institution: "CISCO NETWORKING ACADEMY",
      period: "2026 - now",
      description:
        "In-depth Python programming course with hands-on labs and real-world projects.",
    },
    {
      degree: "Advanced Web Development",
      institution: "Meta Backend Specialization",
      period: "2025 – 2026",
      description:
        "React, Node.js, PostgreSQL, MongoDB, and Express.js for building scalable web applications.",
    },
  ];

  return (
    <div className="bg-[#030812] text-gray-200 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden">
      {/* SEO Component */}
      <SEO />

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
      />

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#030812]/80 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Joseph Chiori
            <span className="text-cyan-400/60 hidden xs:inline">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-10 text-xs lg:text-sm font-medium">
            {[
              "home",
              "services",
              "projects",
              "skills",
              "education",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 sm:pt-24 md:pt-32 overflow-hidden"
      >
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-120 md:w-160 h-64 sm:h-120 md:h-160 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block sm:inline">
                Joseph
              </span>
            </h1>
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
              design to robust IT infrastructure, security audits, and web app
              deployment.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 text-sm sm:text-base"
              >
                View Portfolio
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setContactFormOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* Right column – profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center relative order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-tilt" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-black/50">
                <img
                  src="/profile.png"
                  alt="Joseph Chiori – Professional Web Developer & IT Specialist from Kenya"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 20%" }}
                  loading="eager"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-4 sm:-bottom-5 -right-4 sm:-right-5 bg-linear-to-br from-gray-900 to-gray-950 backdrop-blur-xl border border-cyan-400/30 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl"
              >
                <span className="text-xl sm:text-2xl font-bold text-cyan-400">
                  2+
                </span>
                <span className="block text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                  Years Experience
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 sm:py-20 lg:py-32 bg-[#070b17] relative"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent px-2">
              Integrated IT & Creative Services
            </h2>
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
              title="Web Design"
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
              title="IT Tutor"
              description="Comprehensive IT training in computer applications and web development."
              gradient="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent px-2">
              Enterprise & IT Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} index={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 lg:py-32 bg-[#070b17] relative"
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent" />
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent px-2">
              Technical Mastery
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Technical Skills */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-1 h-6 sm:h-8 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full" />
                Engineering & Development
              </h3>
              <SkillBar name="React" level={80} icon="⚛️" />
              <SkillBar name="Node.js / Express" level={80} icon="📦" />
              <SkillBar name="Python / Django" level={70} icon="🐍" />
              <SkillBar name="Tailwind CSS" level={85} icon="🎨" />
              <SkillBar name="PostgreSQL / MongoDB" level={82} icon="🗄️" />
            </div>

            {/* Professional IT Skills */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-1 h-6 sm:h-8 bg-linear-to-b from-blue-400 to-purple-500 rounded-full" />
                IT Infrastructure & Support
              </h3>
              <SkillBar
                name="Windows 11 / Office 2021 Deployment"
                level={95}
                icon="🖥️"
              />
              <SkillBar name="Tutoring Services" level={92} icon="📚" />
              <SkillBar name="Programming" level={80} icon="💻" />
              <SkillBar
                name="Computer Servicing / Hardware"
                level={88}
                icon="🔧"
              />
              <SkillBar name="Active Directory / Intune" level={79} icon="📁" />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent px-2">
              Education & Credentials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-linear-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-500 group"
              >
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-bl from-cyan-400/20 to-transparent rounded-tr-2xl sm:rounded-tr-3xl" />
                <span className="inline-block px-2.5 sm:px-3 py-1 mb-4 sm:mb-5 text-[10px] sm:text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30">
                  {item.period}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-cyan-400/80 text-xs sm:text-sm mb-3 sm:mb-4">
                  {item.institution}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-32 bg-[#070b17] relative overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 shadow-2xl"
          >
            <span className="inline-block text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
              📬
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Let's build something
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
                {" "}
                exceptional
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-2">
              Available for enterprise contracts, IT consulting, and full‑stack
              development. Response within 24 hours. For project GitHub
              repositories and direct contact, please click the buttons below.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setContactFormOpen(true)}
                className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base"
              >
                <span>📧</span> Send Message
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/254797211844"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base"
              >
                <span>💬</span> WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/Chio-21c"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base"
              >
                GitHub
              </motion.a>
                            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/joseph-chiori-303265280/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base"
              >
                linkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030812] border-t border-white/10 py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent order-2 md:order-1">
              Joseph Chiori
              <span className="text-cyan-400/60 hidden xs:inline">.</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-500 order-3 md:order-2 text-center px-2">
              © {new Date().getFullYear()} • Enterprise Web & IT Infrastructure
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 order-1 md:order-3">
              <button className="hover:text-cyan-400 transition cursor-pointer">
                Privacy
              </button>
              <button className="hover:text-cyan-400 transition cursor-pointer">
                Terms
              </button>
              <button className="hover:text-cyan-400 transition cursor-pointer">
                Imprint
              </button>
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
