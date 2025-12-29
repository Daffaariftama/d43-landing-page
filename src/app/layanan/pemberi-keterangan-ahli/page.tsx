"use client";
import { ArrowLeft, Shield, Download, FileText, Users, Clock, Scale, Target, Award, Heart, Phone, Mail, Calendar, ChevronRight, ChevronLeft, Play, Pause, X, Info, CheckCircle, AlertTriangle, ExternalLink, Briefcase, Gavel, Search, Flag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PemberiKeteranganAhliPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showInfographic, setShowInfographic] = useState(false);

  // Data Lingkup Layanan
  const scopes = [
    { title: "Gelar Perkara", desc: "Diskusi/pra persidangan", icon: Users },
    { title: "Penyelidikan", desc: "Proses penyelidikan perkara", icon: Search },
    { title: "Penyidikan", desc: "Proses penyidikan perkara", icon: Search },
    { title: "Persidangan", desc: "Memberikan keterangan di sidang", icon: Gavel },
    { title: "Seminar Hukum", desc: "Permasalahan hukum inkracht", icon: FileText },
    { title: "Audit Investigatif", desc: "Pemeriksaan investigatif", icon: FileText },
    { title: "Alternatif Sengketa", desc: "Penyelesaian sengketa", icon: Scale },
    { title: "Penegakan Hukum", desc: "Kebutuhan lainnya", icon: Shield },
  ];

  // Data Pemohon
  const requesters = [
    {
      type: "Perkara Pidana",
      requester: "Kepolisian, Kejaksaan, KPK, Panitera/Majelis Hakim",
      icon: Shield
    },
    {
      type: "Perkara Perdata & TUN",
      requester: "Instansi Pemerintah, Panitera/Majelis Hakim",
      icon: Scale
    },
    {
      type: "Sengketa Kontrak",
      requester: "Para Pihak, Mediator, Konsiliator, Arbiter",
      icon: HandshakeIcon
    },
    {
      type: "Persaingan Usaha",
      requester: "Pimpinan Tinggi/Majelis Komisi KPPU RI",
      icon: Briefcase
    },
    {
      type: "Maladministrasi",
      requester: "Instansi Pemerintah / Ombudsman RI",
      icon: AlertTriangle
    }
  ];

  const slides = [
    // Slide 1: Hero
    <div key="hero" className="relative h-full w-full overflow-y-auto">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-800/70 fixed" />
      <div className="relative z-20 min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-2 md:p-3 rounded-2xl backdrop-blur-sm border border-white/30">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="ml-4">
                <div className="text-white/80 text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                  Layanan Hukum
                </div>
                <div className="text-white text-lg md:text-xl font-bold">
                  PEMBERI KETERANGAN AHLI (PKA)
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Layanan Pemberi
              <br />
              <span className="text-red-200">Keterangan Ahli</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Dukungan keterangan terkait regulasi pengadaan barang/jasa pemerintah untuk memastikan kepatuhan hukum yang transparan dan efisien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowInfographic(true)}
                className="bg-white text-red-800 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Info className="w-5 h-5 mr-2" />
                Daftar Permohonan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 2: Definisi
    <div key="definisi" className="relative h-full w-full overflow-y-auto bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      <div className="relative z-10 min-h-full flex items-center justify-center py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang Layanan
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-gray-200 shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-red-500 text-white rounded-2xl p-4 hidden md:block shrink-0">
                <Target className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Tujuan & Manfaat
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  Layanan ini secara khusus ditujukan untuk instansi-instansi yang memerlukan keterangan terkait regulasi dalam proses pengadaan barang dan jasa. Tujuan utamanya adalah untuk memberikan dukungan dan pemahaman yang lebih mendalam terhadap aturan-aturan yang berlaku.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-700">Sumber informasi regulasi yang terpercaya</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-700">Memastikan kepatuhan terhadap hukum</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-700">Meningkatkan transparansi & efisiensi</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-700">Sesuai standar otoritas terkait</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 3: Lingkup Layanan
    <div key="lingkup" className="relative h-full w-full overflow-y-auto bg-gray-50">
      <div className="min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Lingkup Pemberian Keterangan
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 text-sm md:text-lg">
              Jenis kegiatan yang dapat dilayani oleh PKA
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {scopes.map((scope, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-red-500 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <scope.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{scope.title}</h3>
                <p className="text-gray-600 text-sm">{scope.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Slide 4: Pemohon
    <div key="pemohon" className="relative h-full w-full overflow-y-auto bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-red-900/95 fixed" />
      <div className="relative z-10 min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Siapa yang Dapat Memohon?
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-300 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requesters.map((req, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-red-900 rounded-lg p-3 shrink-0">
                    <req.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">{req.type}</h3>
                    <p className="text-red-100 text-sm leading-relaxed">{req.requester}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Slide 5: Alur
    <div key="alur" className="relative h-full w-full overflow-y-auto bg-gray-50">
      <div className="min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Alur Permohonan
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 md:-translate-x-1/2" />
            <div className="space-y-8">
              {[
                { title: "Surat Permohonan", desc: "Pemohon menyampaikan surat via LOKAL/Eoffice", icon: Mail },
                { title: "Disposisi", desc: "Disposisi Surat Permohonan dari Direktur PPH ke Sekretariat", icon: FileText },
                { title: "Koordinasi", desc: "Informasi Kasus, Anggaran, dan Diskusi Gelar Perkara", icon: Users },
                { title: "Draft Penugasan", desc: "Direktur PPH menugaskan PKA dan Sekretariat membuat draft", icon: FileText },
                { title: "Penerbitan Surat", desc: "Penerbitan Surat Penugasan Ahli oleh Direktur PPH", icon: Award }
              ].map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}>
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 md:w-12 md:h-12 bg-red-600 rounded-full border-4 border-white flex items-center justify-center text-white z-10 md:-translate-x-1/2 shadow-lg">
                    <span className="font-bold text-xs md:text-base">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 6: Regulasi
    <div key="regulasi" className="relative h-full w-full overflow-y-auto bg-white">
      <div className="min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Dasar Hukum
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 text-sm md:text-lg">
              Regulasi yang menjadi landasan layanan PKA
            </p>
          </div>
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100 text-center">
            <FileText className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              SOP Pelayanan PKA PBJ LKPP
            </h3>
            <p className="text-lg text-gray-700 font-medium mb-8">
              No.15/SOP/D4.3/2022
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Unduh Dokumen
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">*Dokumen tersedia dalam format PDF</p>
          </div>
        </div>
      </div>
    </div>,

    // Slide 7: Kontak
    <div key="kontak" className="relative h-full w-full overflow-y-auto bg-gray-50">
      <div className="min-h-full flex items-center justify-center py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Ajukan Permohonan
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 text-sm md:text-lg">
              Sampaikan permohonan Anda melalui kanal berikut
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-center max-w-2xl mx-auto">
            <a
              href="https://lokal.lkpp.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 transition-colors">
                <ExternalLink className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">LOKAL LKPP</h3>
              <p className="text-gray-500 text-sm">lokal.lkpp.go.id</p>
            </a>
            <a
              href="https://eoffice.lkpp.go.id/persuratan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 transition-colors">
                <Mail className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">E-Office</h3>
              <p className="text-gray-500 text-sm">eoffice.lkpp.go.id</p>
            </a>
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

  const slideLabels = [
    "Beranda",
    "Tentang",
    "Lingkup",
    "Pemohon",
    "Alur",
    "Regulasi",
    "Kontak"
  ];

  // Helper component for icon
  function HandshakeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m22 22-5-10-5 10" />
        <path d="M22 2 11 13" />
        <path d="m8 2 4 4" />
        <path d="M2 22l6-6" />
        <path d="m2 11 2-2 5 5" />
      </svg>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-white relative">
      {/* Back Button */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-red-600 transition-colors group bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full shadow-lg text-sm md:text-base"
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
                ? "bg-red-600 scale-125"
                : "bg-gray-300 hover:bg-red-400 group-hover:border-red-200"
                }`}
            />
          </button>
        ))}
      </div>

      {/* Slide Navigation Buttons */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0 z-50 flex gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
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
          className="p-3 md:p-3 rounded-full bg-red-600 hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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

      {/* Infographic Modal */}
      <AnimatePresence>
        {showInfographic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setShowInfographic(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-white border-b border-gray-100 p-5 md:p-6 flex justify-between items-center z-10 sticky top-0">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Daftar Permohonan</h3>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">Pilih kanal untuk mengajukan permohonan</p>
                </div>
                <button
                  onClick={() => setShowInfographic(false)}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-red-600 p-2 rounded-full transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-5 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://lokal.lkpp.go.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-8 bg-red-50 hover:bg-red-100 border-2 border-red-100 hover:border-red-500 rounded-2xl transition-all duration-300 group text-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                      <ExternalLink className="w-8 h-8 text-red-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">LOKAL LKPP</h4>
                    <p className="text-gray-600 text-sm">Aplikasi Layanan Organisasi dan Tata Kelola Hukum</p>
                  </a>

                  <a
                    href="https://eoffice.lkpp.go.id/persuratan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-8 bg-gray-50 hover:bg-gray-100 border-2 border-gray-100 hover:border-gray-500 rounded-2xl transition-all duration-300 group text-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8 text-gray-700" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">E-Office LKPP</h4>
                    <p className="text-gray-600 text-sm">Sistem Persuratan Elektronik LKPP</p>
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 p-4 md:p-6 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setShowInfographic(false)}
                  className="px-6 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
