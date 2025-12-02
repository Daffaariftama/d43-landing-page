"use client";
import { MapPin, Phone, Instagram, Twitter, Youtube, Linkedin, ArrowUp, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const ModernFooter = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialMedia = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/lkpp_ri/",
      icon: Instagram,
      color: "hover:bg-pink-600 hover:border-pink-500"
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/LKPP_RI",
      icon: Twitter,
      color: "hover:bg-blue-400 hover:border-blue-400"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UChe-LX458R4dQcCEr1Efanw",
      icon: Youtube,
      color: "hover:bg-red-600 hover:border-red-500"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/lembaga-kebijakan-barang-jasa-pemerintah?originalSubdomain=id",
      icon: Linkedin,
      color: "hover:bg-blue-700 hover:border-blue-600"
    },
  ];

  return (
    <footer className="bg-[#0B0F19] border-t border-white/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Brand Section - Left Side (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2.5 rounded-2xl shadow-xl shadow-red-900/10">
                  <img
                    src="https://www.lkpp.go.id/assets/images/logo/Logo_1b.png"
                    alt="Logo LKPP"
                    className="h-12 sm:h-14 w-auto"
                  />
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-white leading-tight tracking-tight">
                    LEMBAGA KEBIJAKAN
                    <br />
                    <span className="text-red-500">PENGADAAN BARANG/JASA</span>
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 font-medium">
                    PEMERINTAH REPUBLIK INDONESIA
                  </p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-base max-w-md">
                Membangun sistem pengadaan yang kredibel dan mensejahterakan bangsa.
                Transformasi digital untuk pengadaan yang lebih transparan, akuntabel, dan efisien.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">
                  Inovasi
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                  Integritas
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                  Profesional
                </span>
              </div>
            </div>

            {/* Spacer (1 col) */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Contact & Social - Right Side (6 cols) */}
            <div className="lg:col-span-6 space-y-10">

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-colors group">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-all text-red-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Alamat Kantor</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Kompleks Rasuna Epicentrum, Jl. Epicentrum Tengah Lot 11 B,
                    Jakarta Selatan, DKI Jakarta 12940
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-colors group">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-all text-red-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Kontak Kami</h4>
                  <p className="text-gray-400 text-sm mb-1">Call Center & Whatsapp</p>
                  <a href="tel:+6283890294556" className="text-white font-medium hover:text-red-400 transition-colors">
                    +62 838‑9029‑4556
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-red-500" />
                  Media Sosial Resmi
                </h4>
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP).
            </div>
            <div className="flex items-center space-x-6 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg shadow-red-600/30 transition-all duration-300 hover:transform hover:scale-110 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default ModernFooter;