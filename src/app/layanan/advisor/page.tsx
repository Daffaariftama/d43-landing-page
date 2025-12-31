"use client";
import { ArrowLeft, FileText, Target, Shield, CheckCircle, Phone, Mail, Calendar, ChevronRight, ChevronLeft, Info, Download, ExternalLink, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProbityAdvicePage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    // Slide 1: Hero
    <div key="hero" className="relative h-full w-full overflow-y-auto">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593113598332-956a630cd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-800/70 fixed" />
      <div className="relative z-20 min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-2 md:p-3 rounded-2xl backdrop-blur-sm border border-white/30">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="ml-4">
                <div className="text-white/80 text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                  Layanan Hukum
                </div>
                <div className="text-white text-lg md:text-xl font-bold">
                  PROBITY ADVICE
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Probity Advice
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Layanan pemberian pendapat atau saran pada tiap tahapan pengadaan untuk mencapai value for money dalam Pengadaan Barang/Jasa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setDirection(1);
                  setCurrentSlide(1);
                }}
                className="bg-white text-red-800 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Info className="w-5 h-5 mr-2" />
                Pelajari Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 2: Definisi & Tujuan
    <div key="definisi" className="relative h-full w-full overflow-y-auto bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 fixed pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      <div className="min-h-full flex items-center py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Definisi & Tujuan
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Definisi Probity Advice
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                Probity Advice dapat didefinisikan sebagai kegiatan pemberian pendapat atau saran yang dapat dilakukan pada tiap tahapan pengadaan yang menerapkan prinsip probity sekaligus manajemen risiko yang bertujuan untuk mencapai value for money dalam Pengadaan Barang/Jasa (BAB II Huruf A Lampiran Keputusan Deputi IV Nomor 4 Tahun 2025).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Maksud & Tujuan
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4 text-justify">
                Maksud Probity Advice ini adalah untuk meningkatkan integritas pelayanan publik melalui Probity Advice atas proses pengadaan barang/jasa yang berdasarkan pada peraturan dan prosedur pengadaan barang/jasa.
              </p>
              <ul className="space-y-2">
                {[
                  "Mewujudkan Pengadaan Barang/Jasa yang menghasilkan Value for money.",
                  "Meningkatkan akuntabilitas Pengadaan Barang/Jasa.",
                  "Mewujudkan pelaksanaan Pengadaan Barang/Jasa bebas konflik kepentingan dan adil.",
                  "Menjaga kepercayaan publik terhadap proses Pengadaan Barang/Jasa.",
                  "Mengelola risiko permasalahan pengadaan.",
                  "Memberikan alternatif solusi terkait permasalahan Pengadaan Barang/Jasa."
                ].map((goal, idx) => (
                  <li key={idx} className="flex items-start text-sm md:text-base text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 3: Ruang Lingkup & Kriteria
    <div key="ruang-lingkup" className="relative h-full w-full overflow-y-auto bg-gray-50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 fixed pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      <div className="min-h-full flex items-center py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Ruang Lingkup & Kriteria
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ruang Lingkup */}
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-XL font-bold text-gray-900 mb-4">Ruang Lingkup Layanan</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                Ruang lingkup Probity Advice adalah kegiatan pendampingan pengadaan barang/jasa di lingkungan Kementerian/Lembaga/Perangkat Daerah/BUMN/BUMD/BLU/BLUD/ PTN-BH/Instansi Lainnya yang menggunakan APBN, APBD dan/atau Keuangan Negara serta telah memenuhi kriteria paket pengadaan yang dapat dilakukan Probity Advice.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mt-4 font-semibold">
                Probity Advice dapat dilakukan pada semua tahapan Pengadaan Barang/Jasa.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 mb-3">Tahap Pengadaan Barang/Jasa Pemerintah</h4>
                <img
                  src="/images/probity/tahap-pengadaan.png"
                  alt="Tahap Pengadaan Barang/Jasa Pemerintah"
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
            </div>

            {/* Kriteria */}
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kriteria Paket Pengadaan</h3>
              <p className="text-gray-600 text-sm mb-4">
                Kriteria paket pengadaan/pekerjaan yang dapat dilayani untuk diberikan layanan Probity Advice antara lain:
              </p>
              <ul className="space-y-3">
                {[
                  "Proyek strategis nasional dan/atau proyek strategis daerah;",
                  "Penugasan khusus dari presiden;",
                  "Yang sebagian atau seluruhnya dibiayai dari pinjaman/hibah luar negeri;",
                  "Penanganan keadaan darurat; dan/atau",
                  "Penugasan oleh Kepala LKPP berdasarkan usulan K/L/PD/Pemerintah Desa/BUMN/BUMD/dll."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 4: Tahapan (Image)
    <div key="tahapan" className="relative h-full w-full overflow-y-auto bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 fixed pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      <div className="min-h-full flex items-center py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Tahap Probity Advice
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-red-100 -z-10 transform -translate-y-1/2 rounded-full" />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
                  {[
                    {
                      step: "01",
                      title: "Permohonan",
                      desc: "K/L/PD mengajukan permohonan tertulis",
                      icon: FileText
                    },
                    {
                      step: "02",
                      title: "Telaahan",
                      desc: "Verifikasi dokumen & urgensi oleh LKPP",
                      icon: Target
                    },
                    {
                      step: "03",
                      title: "Penugasan",
                      desc: "Penunjukan Tim Probity Advisor",
                      icon: Shield
                    },
                    {
                      step: "04",
                      title: "Pelaksanaan",
                      desc: "Pendampingan & pemberian saran",
                      icon: CheckCircle
                    },
                    {
                      step: "05",
                      title: "Laporan",
                      desc: "Penyusunan laporan hasil pendampingan",
                      icon: FileText
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="relative flex flex-col items-center group">
                      {/* Number Badge */}
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-red-50 text-red-600 flex items-center justify-center text-lg md:text-xl font-bold shadow-sm group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 z-10 mb-4">
                        {item.step}
                      </div>

                      {/* Card */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm w-full min-h-[160px] flex flex-col items-center text-center group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 relative z-20">
                        <div className="bg-red-50 p-3 rounded-full mb-3 group-hover:bg-red-100 transition-colors">
                          <item.icon className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>

                      {/* Line for Mobile */}
                      {idx !== 4 && (
                        <div className="md:hidden w-1 h-8 bg-red-100 my-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 5: Regulasi
    <div key="regulasi" className="relative h-full w-full overflow-y-auto bg-gray-50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 fixed pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80")',
        }}
      />
      <div className="min-h-full flex items-center py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Regulasi Terkait
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-red-100 p-4 rounded-xl">
                <FileText className="w-8 h-8 md:w-12 md:h-12 text-red-600" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Keputusan Deputi IV Nomor 4 Tahun 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Tentang Pedoman Probity Advice Pengadaan Barang/Jasa Pemerintah
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">PDF Document</span>
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-medium">Regulasi Terbaru</span>
                </div>
              </div>
              <a
                href="https://jdih.lkpp.go.id/" // Placeholder, user didn't provide specific URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium shadow-md"
              >
                <Download className="w-5 h-5 mr-2" />
                Kunjungi JDIH
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 6: Kontak
    <div key="kontak" className="relative h-full w-full overflow-y-auto bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 fixed pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80")',
        }}
      />
      <div className="min-h-full flex items-center justify-center py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Informasi Kontak
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Telepon</h3>
                    <p className="text-gray-600">+62 838‑9029‑4556</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">layanan@lkpp.go.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <ExternalLink className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Persuratan Online</h3>
                    <a href="https://eoffice.lkpp.go.id/persuratan" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline break-all">
                      https://eoffice.lkpp.go.id/persuratan
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Calendar className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Jumat | 08:00 - 16:00 WIB</p>
                  </div>
                </div>
              </div>
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

  const slideLabels = [
    "Beranda",
    "Definisi",
    "Ruang Lingkup",
    "Tahapan",
    "Regulasi",
    "Kontak"
  ];

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

      {/* Slide Navigation Buttons - Always visible at bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0 z-50 flex gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 md:p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        {/* Slide indicator on mobile */}
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
    </div>
  );
}
