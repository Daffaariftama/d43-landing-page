"use client";
import { MapPin, Phone, Mail, Instagram, Twitter, Youtube, Linkedin, ArrowUp } from "lucide-react";
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
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="bg-white rounded-xl p-2 shadow-lg">
                  <img
                    src="https://www.lkpp.go.id/assets/images/logo/Logo_1b.png"
                    alt="Logo LKPP"
                    className="h-12 sm:h-16 w-auto"
                  />
                </div>
                <div className="border-l border-gray-600/50 pl-4">
                  <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    LEMBAGA KEBIJAKAN
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    PENGADAAN BARANG/JASA PEMERINTAH
                  </div>
                  <div className="text-red-400 text-sm font-medium mt-1">
                    Inovasi • Integritas • Profesional
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Membangun tata kelola pengadaan barang/jasa pemerintah yang transparan, 
                akuntabel, dan berintegritas untuk mendukung pembangunan nasional.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span className="text-sm">Jl. Medan Merdeka Selatan No. 13 Jakarta 10110</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-red-400" />
                  <span className="text-sm">(021) 345-6789</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-red-400" />
                  <span className="text-sm">info@lkpp.go.id</span>
                </div>
              </div>
            </div>

            {/* Social & Newsletter Section */}
            <div className="space-y-8">
              
              {/* Social Media */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Terhubung Dengan Kami</h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="group flex items-center justify-center w-12 h-12 rounded-xl bg-gray-700/50 hover:bg-red-600 border border-gray-600/50 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gray-800/30 rounded-2xl border border-gray-700/50 p-6">
                <h3 className="text-white font-semibold text-lg mb-3">Tetap Terinformasi</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Dapatkan update terbaru tentang kebijakan dan layanan pengadaan pemerintah.
                </p>
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium text-sm transition-colors hover:transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 LKPP. Hak Cipta Dilindungi Undang-Undang.
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-xl border border-red-500/50 shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:transform hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default ModernFooter;