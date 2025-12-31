"use client";
import { ArrowLeft, MessageCircle, AlertTriangle, Scale, Shield, Users, Mail, Globe, Monitor, ExternalLink, ChevronRight, ChevronLeft, Flag, FileText, Briefcase, Building2, Gavel } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PengaduanPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    // Slide 1: Pengertian (Mix: Red Overlay + Image)
    <div key="pengertian" className="relative h-full w-full overflow-y-auto">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80")', // Professional meeting/discussion
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 to-red-800/80 fixed" />
      <div className="relative z-20 min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-2 md:p-3 rounded-2xl backdrop-blur-sm border border-white/30">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="ml-4">
                <div className="text-white/80 text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                  Layanan Pengaduan
                </div>
                <div className="text-white text-lg md:text-xl font-bold">
                  SISTEM PENGADUAN PBJ
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Layanan Pengaduan Pengadaan Barang/Jasa
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Layanan untuk memfasilitasi pengaduan yang disampaikan oleh Pengadu sehubungan dengan adanya indikasi penyimpangan dalam Pengadaan Barang/Jasa.
            </p>
            <button
              onClick={() => {
                setDirection(1);
                setCurrentSlide(1);
              }}
              className="bg-white text-red-800 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg flex items-center"
            >
              Pelajari Lebih Lanjut
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>,

    // Slide 2: Objek Pengaduan (White + Red Accents)
    <div key="objek" className="relative h-full w-full overflow-y-auto bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50/50 skew-x-12 transform origin-top-right pointer-events-none" />
      <div className="min-h-full flex items-center py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Objek Pengaduan
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Pengaduan yang disampaikan mencakup adanya indikasi pelanggaran:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Pelanggaran Administratif",
                desc: "Penyimpangan terhadap ketentuan peraturan perundang-undangan dalam proses PBJ.",
                icon: FileText
              },
              {
                title: "Persaingan Usaha",
                desc: "Indikasi persaingan usaha tidak sehat dalam proses pemilihan penyedia.",
                icon: AlertTriangle
              },
              {
                title: "Tindak Pidana",
                desc: "Indikasi korupsi, kolusi, dan nepotisme yang merugikan keuangan negara.",
                icon: Gavel
              }
            ].map((item, idx) => {
              // Create dynamic lucide icon component
              const Icon = item.icon === FileText ? Flag : item.icon; // Using Flag as proxy for FileText if needed, or import specifically

              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>,

    // Slide 3: Dasar Hukum (Red Background/Gradient)
    <div key="hukum" className="relative h-full w-full overflow-y-auto bg-gradient-to-br from-red-900 to-red-800 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 fixed pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', // Gavel/Law
        }}
      />

      <div className="min-h-full flex items-center py-12 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-red-500/20 px-3 py-1 rounded-full mb-6 border border-red-400/30">
                <Scale className="w-4 h-4 text-red-200" />
                <span className="text-sm font-medium text-red-100">Landasan Hukum</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Dasar Hukum &<br />Regulasi
              </h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-red-300" />
                    Perpres 16 Tahun 2018
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Pasal 77 mengamanatkan APIP menindaklanjuti pengaduan sesuai kewenangannya dan LKPP mengembangkan Sistem Pengaduan PBJ Pemerintah.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Scale className="w-5 h-5 mr-2 text-red-300" />
                    Peraturan LKPP No. 6 Tahun 2022
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Tentang Sistem Pengaduan Pengadaan Barang/Jasa Pemerintah.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-red-400/50 to-transparent" />

            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 blur-3xl opacity-20 animate-pulse" />
                <Scale className="w-48 h-48 text-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 4: Pelapor (White Mix)
    <div key="pelapor" className="relative h-full w-full overflow-y-auto bg-gray-50">
      <div className="min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Siapa yang Bisa Melaporkan?
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "Whistleblower", icon: AlertTriangle }, // Or another icon
              { label: "Orang Perseorangan", icon: Users },
              { label: "Kelompok Orang", icon: Users },
              { label: "Pelaku Usaha", icon: Briefcase },
              { label: "Instansi", icon: Building2 },
              { label: "Badan Hukum", icon: Scale }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-800">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Slide 5: Kanal & Alur (Mix)
    <div key="kanal" className="relative h-full w-full overflow-y-auto bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 fixed pointer-events-none"
        style={{
          backgroundImage: 'url("/images/pengaduan/alur-pengaduan.png")', // Using the alur image as faint background too? Or abstract
          backgroundSize: 'contain',
          backgroundPosition: 'right center'
        }}
      />
      <div className="min-h-full flex items-center py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kanal Pelaporan &<br />Alur Pengaduan
              </h2>
              <div className="w-20 h-1 bg-red-500 mb-8 rounded-full" />

              <div className="space-y-6">
                <a href="https://e-pengaduan.lkpp.go.id/hc/id" target="_blank" rel="noopener noreferrer"
                  className="block bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-500 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Monitor className="w-8 h-8 text-red-600 mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">Sistem Pengaduan PBJ</h3>
                        <p className="text-sm text-gray-500">e-pengaduan.lkpp.go.id</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                  </div>
                </a>

                <a href="https://eoffice.lkpp.go.id/persuratan" target="_blank" rel="noopener noreferrer"
                  className="block bg-white p-4 rounded-xl shadow-sm border-l-4 border-gray-400 hover:border-red-500 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="w-8 h-8 text-gray-600 group-hover:text-red-600 mr-4 transition-colors" />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">Persuratan Elektronik</h3>
                        <p className="text-sm text-gray-500">eoffice.lkpp.go.id</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                  </div>
                </a>

                <a href="https://lapor.go.id/" target="_blank" rel="noopener noreferrer"
                  className="block bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Globe className="w-8 h-8 text-blue-600 mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">SP4N LAPOR</h3>
                        <p className="text-sm text-gray-500">lapor.go.id</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                  </div>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
              <img
                src="/images/pengaduan/alur-pengaduan.png"
                alt="Alur Pengaduan"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-xs text-gray-500 mt-4">Alur dan mekanisme pengaduan barang/jasa pemerintah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const slideLabels = ["Beranda", "Objek", "Hukum", "Pelapor", "Kanal"];

  return (
    <div className="h-screen w-screen overflow-hidden bg-white relative">
      {/* Back Button */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-red-600 transition-colors group bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full shadow-lg text-sm md:text-base border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4 md:w-4 md:h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Kembali</span>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 md:gap-4 items-end">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className="group flex items-center gap-3"
          >
            <span
              className={`hidden md:block text-sm font-medium transition-all duration-300 ${currentSlide === index
                ? "text-red-600 translate-x-0 opacity-100"
                : "text-gray-400 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
            >
              {slideLabels[index]}
            </span>
            <div
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 border border-transparent ${currentSlide === index
                ? "bg-red-600 scale-125 shadow-lg shadow-red-500/30"
                : "bg-gray-300 hover:bg-red-400 group-hover:border-red-200"
                }`}
            />
          </button>
        ))}
      </div>

      {/* Slide Navigation Buttons */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0 z-50 flex gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-100">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 md:p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        <div className="flex md:hidden items-center justify-center px-3 text-sm font-medium text-gray-700">
          {currentSlide + 1} / {slides.length}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 md:p-3 rounded-full bg-red-600 hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md shadow-red-500/20"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>

      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// End of file
