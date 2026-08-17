import { useEffect, useState } from 'react';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram,
  FaBus, FaCar, FaUsers, FaGraduationCap, FaChalkboardTeacher, FaDumbbell,
  FaMusic, FaLaptop, FaPaintBrush, FaSwimmer, FaFutbol, FaBasketballBall,
  FaVolleyballBall, FaCertificate, FaHandsHelping, FaClock, FaArrowRight,
  FaCheckCircle, FaUniversity, FaChild, FaHeart, FaBookOpen, FaAward, FaBars, FaTimes
} from 'react-icons/fa';
import { MdSportsVolleyball } from 'react-icons/md';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.stat-item');
    elements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#sports', label: 'Sports' },
    { href: '#transport', label: 'Transport' },
    { href: '#why-us', label: 'Why Us' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased overflow-x-hidden">
      {/* Top Bar - Contact Info */}
      <div className="bg-[#1a2a3a] text-white/90 text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 border-b border-[#c9a84c]/30 relative z-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-1 sm:gap-2">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 md:gap-4">
            <a href="tel:0720922721" className="flex items-center gap-1 hover:text-[#c9a84c] transition-colors whitespace-nowrap">
              <FaPhone className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
              <span className="hidden xs:inline">0720 922721</span>
            </a>
            <span className="hidden xs:inline text-white/30">|</span>
            <a href="tel:0722233007" className="hidden xs:flex items-center gap-1 hover:text-[#c9a84c] transition-colors whitespace-nowrap">
              <FaPhone className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
              <span>0722 233007</span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <a href="mailto:thomeelite2015@gmail.com" className="hidden md:flex items-center gap-1 hover:text-[#c9a84c] transition-colors truncate max-w-[120px] sm:max-w-[150px]">
              <FaEnvelope className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 flex-shrink-0" />
              <span className="truncate">thomeelite2015@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="hidden sm:inline text-white/80 text-[9px] sm:text-xs">📌 P.O. Box 600 - 00618 Ruaraka</span>
            <span className="bg-[#c9a84c]/20 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[#c9a84c] font-semibold text-[7px] sm:text-[10px] md:text-xs whitespace-nowrap">
              AT THOME PEFA CHURCH
            </span>
          </div>
        </div>
      </div>

      {/* Navigation - responsive with mobile menu */}
      <nav className={`bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100 transition-shadow duration-300 ${scrolled ? 'shadow-xl' : 'shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1a2a3a] rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md flex-shrink-0 overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Thome Elite Academy Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <h1 className="font-bold text-[#1a2a3a] text-sm sm:text-base md:text-xl tracking-tight">
                  THOME ELITE
                </h1>
                <p className="text-[6px] sm:text-[8px] md:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[#5a6b7a] font-medium">
                  Strive to Excel
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3 lg:gap-8 text-[#2a3a4a] font-medium text-sm lg:text-base">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-[#c9a84c] transition-colors border-b-2 border-transparent hover:border-[#c9a84c] pb-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a 
                href="#register" 
                className="bg-[#c9a84c] hover:bg-[#b8973a] text-[#1a2a3a] font-semibold px-2.5 sm:px-4 md:px-7 py-1 sm:py-1.5 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                Register Now
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors text-[#1a2a3a]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" /> : <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-3 border-t border-gray-100 bg-white">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="text-[#2a3a4a] hover:text-[#c9a84c] transition-colors px-2 py-1.5 text-sm font-medium border-l-2 border-transparent hover:border-[#c9a84c] pl-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href="#register" 
                  className="bg-[#c9a84c] hover:bg-[#b8973a] text-[#1a2a3a] font-semibold px-4 py-2 rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300 text-center mx-2 mt-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - with school-photo as background */}
      <section className="relative overflow-hidden min-h-[90vh] sm:min-h-[85vh] md:min-h-[80vh] lg:min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/school-photo.png" 
            alt="Thome Elite Academy" 
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a26]/90 via-[#1a2a3a]/80 to-[#0f1a26]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a26]/70 via-transparent to-[#0f1a26]/30"></div>
        </div>

        <div className="absolute top-0 right-0 w-[150px] sm:w-[300px] md:w-[500px] h-[150px] sm:h-[300px] md:h-[500px] bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[150px] sm:w-[250px] md:w-[400px] h-[150px] sm:h-[250px] md:h-[400px] bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-10 sm:py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            <div className="text-white text-center lg:text-left">
              <p className="text-[#c9a84c] font-semibold text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase mb-2 sm:mb-3 flex items-center justify-center lg:justify-start gap-1 sm:gap-2">
                <span className="w-4 sm:w-6 md:w-8 h-0.5 bg-[#c9a84c]"></span>
                Nurturing Today
              </p>
              <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-2 sm:mb-4 md:mb-6 tracking-tight">
                LEADING <br className="hidden sm:block" />
                <span className="text-[#c9a84c]">TOMORROW!</span>
              </h2>
              <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-3 sm:mb-6 md:mb-10 leading-relaxed px-2 sm:px-0">
                A holistic learning environment where every child discovers their potential, 
                grows in character and excels in academics, talents and sports.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                <a href="#register" className="bg-[#c9a84c] hover:bg-[#b8973a] text-[#1a2a3a] font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3.5 rounded-full text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2">
                  <span>Enroll Now</span>
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <span className="inline-flex items-center px-2.5 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full text-[9px] sm:text-xs md:text-sm text-white/90 border border-white/10">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#c9a84c] rounded-full mr-1 sm:mr-1.5 md:mr-2.5 animate-pulse"></span>
                  Limited Spaces Available
                </span>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Who We Are - Logo removed */}
      <section id="about" className="py-10 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <span className="text-[#c9a84c] font-semibold text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">About Us</span>
              <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1a2a3a] mt-2 mb-2 sm:mb-5 leading-tight">
                WHO WE ARE
              </h3>
              <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#c9a84c] rounded-full mx-auto md:mx-0 mb-4 sm:mb-6 md:mb-8"></div>
              <p className="text-[#4a5a6a] text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0">
                Thome Elite Academy is a holistic institution committed to providing quality education, 
                character development and a nurturing environment that brings out the best in every learner.
              </p>
              <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-sm mx-auto md:mx-0">
                <div className="stat-item opacity-0 translate-y-8 transition-all duration-700 bg-gray-50 p-3 sm:p-4 md:p-5 rounded-xl border border-gray-100 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#c9a84c]">10+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-[#5a6b7a] font-medium">Years of Excellence</div>
                </div>
                <div className="stat-item opacity-0 translate-y-8 transition-all duration-700 delay-100 bg-gray-50 p-3 sm:p-4 md:p-5 rounded-xl border border-gray-100 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#c9a84c]">500+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-[#5a6b7a] font-medium">Happy Students</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#1a2a3a] to-[#2a3a4a] border border-gray-200 flex items-center justify-center">
                <div className="text-center p-6 sm:p-8 md:p-12">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-[#c9a84c]/10 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#c9a84c]" />
                  </div>
                  <h4 className="text-white font-bold text-lg sm:text-xl md:text-2xl">Excellence in Education</h4>
                  <p className="text-white/60 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Building Future Leaders</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-5 w-16 sm:w-28 md:w-40 h-16 sm:h-28 md:h-40 bg-[#c9a84c]/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 w-14 sm:w-24 md:w-32 h-14 sm:h-24 md:h-32 bg-[#c9a84c]/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Activities - responsive */}
      <section id="programs" className="py-10 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 md:mb-16">
            <span className="text-[#c9a84c] font-semibold text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">Our Programs</span>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1a2a3a] mt-2 leading-tight px-2">
              HOLISTIC EDUCATION FOR A BRIGHT FUTURE
            </h3>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#c9a84c] rounded-full mx-auto mt-3 sm:mt-4 md:mt-5"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { name: 'Ballet', icon: <FaPaintBrush className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, desc: 'Creative Expression' },
              { name: 'Skating', icon: <MdSportsVolleyball className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, desc: 'Coordination & Fun' },
              { name: 'Computer Studies', icon: <FaLaptop className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, desc: 'Digital Literacy' },
              { name: 'Music', icon: <FaMusic className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, desc: 'Artistic Development' }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl p-3 sm:p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#c9a84c]/30 text-center hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-[#c9a84c]/10 rounded-2xl flex items-center justify-center mx-auto mb-1.5 sm:mb-3 md:mb-5 group-hover:bg-[#c9a84c]/20 transition-colors text-[#1a2a3a]">
                  {item.icon}
                </div>
                <h4 className="font-bold text-[#1a2a3a] text-sm sm:text-base md:text-xl">{item.name}</h4>
                <p className="text-[#5a6b7a] text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports - responsive */}
      <section id="sports" className="py-10 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 md:mb-16">
            <span className="text-[#c9a84c] font-semibold text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">Sports</span>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1a2a3a] mt-2 leading-tight">
              SPORTING ACTIVITIES
            </h3>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#c9a84c] rounded-full mx-auto mt-3 sm:mt-4 md:mt-5"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { name: 'Football', icon: <FaFutbol className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" /> },
              { name: 'Basketball', icon: <FaBasketballBall className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" /> },
              { name: 'Volleyball', icon: <FaVolleyballBall className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" /> },
              { name: 'Swimming', icon: <FaSwimmer className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" /> }
            ].map((sport, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2a3a] to-[#2a3a4a] p-3 sm:p-5 md:p-8 text-center min-h-[100px] sm:min-h-[140px] md:min-h-[200px] flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="absolute inset-0 bg-[#c9a84c]/5 group-hover:bg-[#c9a84c]/15 transition-colors"></div>
                <div className="relative z-10 text-white">
                  <div className="text-[#c9a84c] mb-0.5 sm:mb-2 md:mb-4">{sport.icon}</div>
                  <h4 className="font-bold text-sm sm:text-lg md:text-2xl">{sport.name}</h4>
                  <p className="text-white/60 text-[8px] sm:text-xs md:text-sm font-medium">Sports Program</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Section - with school-bus and school-van */}
      <section id="transport" className="py-10 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 md:mb-16">
            <span className="text-[#c9a84c] font-semibold text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">Transport</span>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1a2a3a] mt-2 leading-tight">
              SAFE & RELIABLE TRANSPORT
            </h3>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#c9a84c] rounded-full mx-auto mt-3 sm:mt-4 md:mt-5"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-500">
              <div className="h-36 sm:h-48 md:h-56 bg-[#1a2a3a] flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/school-bus.png" 
                  alt="School Bus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-5 md:p-6">
                <h4 className="font-bold text-[#1a2a3a] text-sm sm:text-lg md:text-xl flex items-center gap-2">
                  <FaBus className="text-[#c9a84c] w-4 h-4 sm:w-5 sm:h-5" />
                  School Bus Service
                </h4>
                <p className="text-[#5a6b7a] text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
                  Comfortable and safe transportation for all students with designated pickup and drop-off points.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-500">
              <div className="h-36 sm:h-48 md:h-56 bg-[#1a2a3a] flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/school-van.png" 
                  alt="School Van" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-5 md:p-6">
                <h4 className="font-bold text-[#1a2a3a] text-sm sm:text-lg md:text-xl flex items-center gap-2">
                  <FaCar className="text-[#c9a84c] w-4 h-4 sm:w-5 sm:h-5" />
                  Staff Transport
                </h4>
                <p className="text-[#5a6b7a] text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
                  Dedicated vehicles for staff and special school trips ensuring convenience and punctuality.
                </p>
              </div>
            </div>
            <div className="bg-[#1a2a3a] rounded-2xl p-4 sm:p-5 md:p-8 text-white shadow-lg flex flex-col justify-center border border-[#c9a84c]/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#c9a84c]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#c9a84c]" />
                </div>
                <h4 className="font-bold text-sm sm:text-lg md:text-xl">Why Choose Us?</h4>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-white/80 text-[10px] sm:text-xs md:text-sm">
                <li className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-[#c9a84c] mt-0.5">•</span>
                  <span>Professional and experienced drivers</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-[#c9a84c] mt-0.5">•</span>
                  <span>Regular vehicle maintenance</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-[#c9a84c] mt-0.5">•</span>
                  <span>Safe and secure transport system</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-[#c9a84c] mt-0.5">•</span>
                  <span>Punctual pickup and drop-off</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - responsive */}
      <section id="why-us" className="py-10 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 md:mb-16">
            <span className="text-[#c9a84c] font-semibold text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">Why Us</span>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1a2a3a] mt-2 leading-tight">
              WHY CHOOSE THOME ELITE?
            </h3>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#c9a84c] rounded-full mx-auto mt-3 sm:mt-4 md:mt-5"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { title: 'Serene Environment', icon: <FaUniversity className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, desc: 'Peaceful learning atmosphere' },
              { title: 'Modern Facilities', icon: <FaChalkboardTeacher className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, desc: 'State-of-the-art classrooms' },
              { title: 'Balanced Meals', icon: <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, desc: 'Nutritious and healthy food' },
              { title: 'Co-curricular', icon: <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, desc: 'Holistic development' },
              { title: 'Excellent Staff', icon: <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, desc: 'Qualified teachers' },
              { title: 'Caring Teachers', icon: <FaHandsHelping className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, desc: 'Individual attention' },
              { title: 'Christian Values', icon: <FaBookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, desc: 'Moral foundation' },
              { title: 'Affordable Fees', icon: <FaAward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, desc: 'Value for money' }
            ].map((item, index) => (
              <div key={index} className="group bg-gray-50 rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 hover:border-[#c9a84c]/30 hover:-translate-y-1 sm:hover:-translate-y-2 flex items-start gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors text-[#1a2a3a] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2a3a] text-[10px] sm:text-xs md:text-sm">{item.title}</h4>
                  <p className="text-[#5a6b7a] text-[8px] sm:text-[10px] md:text-xs mt-0.5 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA - responsive */}
      <section id="register" className="py-10 sm:py-16 md:py-20 lg:py-28 bg-[#1a2a3a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-[#c9a84c]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-[#c9a84c]/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-2 sm:mb-3 md:mb-5 leading-tight">
            REGISTER <span className="text-[#c9a84c]">NOW!</span>
          </h3>
          <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Limited spaces available. Secure your child's place at Thome Elite Academy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center">
            <a href="#" className="bg-[#c9a84c] hover:bg-[#b8973a] text-[#1a2a3a] font-semibold px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              <span>Enroll Now</span>
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
            <a href="tel:0720922721" className="border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2">
              <FaPhone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - responsive */}
      <footer className="bg-[#0f1a26] text-white/80 py-6 sm:py-12 md:py-16 border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start mb-2 sm:mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1a2a3a] rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md flex-shrink-0 overflow-hidden border border-[#c9a84c]/20">
                  <img 
                    src="/logo.png" 
                    alt="Thome Elite Academy Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base md:text-lg">THOME ELITE ACADEMY</h4>
                  <p className="text-[8px] sm:text-[10px] md:text-xs text-white/60">AT THOME PEFA CHURCH</p>
                </div>
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#c9a84c] italic font-medium">"Strive to Excel"</p>
              <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start mt-3 sm:mt-4 md:mt-5">
                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#c9a84c]/20 transition-colors text-white/60 hover:text-[#c9a84c]">
                  <FaFacebook className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </a>
                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#c9a84c]/20 transition-colors text-white/60 hover:text-[#c9a84c]">
                  <FaTwitter className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </a>
                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#c9a84c]/20 transition-colors text-white/60 hover:text-[#c9a84c]">
                  <FaInstagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </a>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="font-semibold text-white mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Contact</h5>
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 text-[10px] sm:text-xs md:text-sm">
                <p className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 md:gap-3 text-white/70 hover:text-white transition-colors">
                  <FaPhone className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-[#c9a84c]" />
                  <span>0720 922721 / 0722 233007</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 md:gap-3 text-white/70 hover:text-white transition-colors break-all">
                  <FaEnvelope className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-[#c9a84c] flex-shrink-0" />
                  <span className="break-all">thomeelite2015@gmail.com</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 md:gap-3 text-white/70 hover:text-white transition-colors">
                  <FaMapMarkerAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-[#c9a84c] flex-shrink-0" />
                  <span>P.O. Box 600 - 00618 Ruaraka</span>
                </p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="font-semibold text-white mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Quick Links</h5>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5 text-[10px] sm:text-xs md:text-sm">
                <li><a href="#about" className="text-white/70 hover:text-[#c9a84c] transition-colors">About Us</a></li>
                <li><a href="#programs" className="text-white/70 hover:text-[#c9a84c] transition-colors">Programs</a></li>
                <li><a href="#sports" className="text-white/70 hover:text-[#c9a84c] transition-colors">Sports</a></li>
                <li><a href="#transport" className="text-white/70 hover:text-[#c9a84c] transition-colors">Transport</a></li>
                <li><a href="#register" className="text-white/70 hover:text-[#c9a84c] transition-colors">Register</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="font-semibold text-white mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Newsletter</h5>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/60 mb-2 sm:mb-3 md:mb-4">Subscribe for updates</p>
              <div className="flex flex-col sm:flex-row">
                <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-full sm:rounded-r-none px-3 sm:px-4 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c9a84c]/50 w-full sm:flex-1" />
                <button className="bg-[#c9a84c] hover:bg-[#b8973a] text-[#1a2a3a] font-semibold px-3 sm:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full sm:rounded-l-none text-[10px] sm:text-xs md:text-sm transition-colors mt-1.5 sm:mt-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6 md:pt-8 text-center text-[10px] sm:text-xs md:text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Thome Elite Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;