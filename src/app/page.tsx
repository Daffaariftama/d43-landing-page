// "use client";
// import { Menu, Play, Search, X } from "lucide-react";
// import { useCallback, useEffect, useState } from "react";
// import AboutUs from "@/app/components/AboutUs"; // Import komponen AboutUs
// import Layanan from "@/app/components/Layanan";
// import ModernFooter from "@/app/components/ModernFooter";
// import TestimonialsSection from "@/app/components/TestimonialSection";

// const LKPPWebsite = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const slides = [
//     {
//       title: "Tata Kelola Pengadaan yang Profesional dan Berintegritas",
//       subtitle:
//         "Bersama membangun pengadaan barang dan jasa pemerintah yang transparan",
//       image:
//         "https://img.okezone.com/content/2022/08/21/11/2651558/pos-indonesia-tayang-di-e-katalog-nasional-lkpp-GYeJPNNUlB.jpeg",
//     },
//     {
//       title: "Inovasi untuk Pelayanan Publik yang Lebih Baik",
//       subtitle: "Meningkatkan efisiensi dan efektivitas pengadaan pemerintah",
//       image:
//         "https://assetd.kompas.id/vkG46ylF28gmMeWANA3yh8jxhCw=/fit-in/1280xorig/filters:format(webp):quality(65)/https://asset.kgnewsroom.com/photo/pre/2025/08/06/6f1862af-6783-49c8-832f-96cc21e2868e_jpg.jpg",
//     },
//     {
//       title: "Kolaborasi Menuju Indonesia Maju",
//       subtitle: "Mendorong terciptanya ekosistem pengadaan yang berkelanjutan",
//       image: "https://picsum.photos/seed/lkpp3/1920/1080",
//     },
//   ];

//   // Pindahkan deklarasi handleSlideChange sebelum useEffect yang menggunakannya
//   const handleSlideChange = useCallback((index: number) => {
//   if (isAnimating) return;
//   setIsAnimating(true);
//   setCurrentSlide(index);
//   setTimeout(() => setIsAnimating(false), 800);
// }, [isAnimating]); // ← TAMBAHKAN INI (dependency array)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleSlideChange((currentSlide + 1) % slides.length);
//     }, 4000); // 10 detik
//     return () => clearInterval(timer);
//   }, [currentSlide, handleSlideChange, slides.length]);

//   const nextSlide = () => {
//     handleSlideChange((currentSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
//   };

//   const openVideo = () => {
//     setShowVideo(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeVideo = () => {
//     setShowVideo(false);
//     document.body.style.overflow = "auto";
//   };

//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         closeVideo();
//       }
//     };

//     if (showVideo) {
//       document.addEventListener("keydown", handleEscape);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [showVideo]);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           isMenuOpen
//             ? "bg-red-800/95"
//             : isScrolled
//             ? "bg-red-800/95 backdrop-blur-md shadow-lg border-b border-white/10"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center space-x-2 sm:space-x-3">
//               <img
//                 src="https://www.lkpp.go.id/assets/images/logo/Logo_1b.png"
//                 alt="Logo LKPP"
//                 className="h-8 sm:h-10 md:h-12 w-auto"
//               />
//               <div className="border-l border-white/30 pl-2 sm:pl-3">
//                 <div className="text-xs sm:text-sm font-bold leading-tight">
//                   DIREKTORAT PENANGANGAN
//                 </div>
//                 <div className="text-xs sm:text-sm font-bold leading-tight">
//                   PERMASALAHAN HUKUM
//                 </div>
//               </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
//               <a
//                 href="#profil"
//                 className="text-sm hover:text-red-300 transition-colors"
//               >
//                 Profil
//               </a>
//               <a
//                 href="#kebijakan"
//                 className="text-sm hover:text-red-300 transition-colors"
//               >
//                 Kebijakan
//               </a>
//               <a
//                 href="#layanan"
//                 className="text-sm hover:text-red-300 transition-colors"
//               >
//                 Layanan
//               </a>
//               <a
//                 href="#informasi"
//                 className="text-sm hover:text-red-300 transition-colors"
//               >
//                 Informasi
//               </a>
//               <a
//                 href="#berita"
//                 className="text-sm hover:text-red-300 transition-colors"
//               >
//                 Berita
//               </a>
//               <a
//                 href="#data"
//                 className="text-sm hover:text-red-300 transition-colors"
//               >
//                 Data & Statistik
//               </a>
//               <a
//                 href="#kontak"
//                 className="text-sm hover:text-red-300 transition-colors"
//               >
//                 Kontak
//               </a>
//             </div>

//             {/* Search & Mobile Menu */}
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               <button className="hover:text-red-300 transition-colors">
//                 <Search size={18} className="sm:w-5 sm:h-5" />
//               </button>
//               <button
//                 className="lg:hidden hover:text-red-300 transition-colors"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 <Menu size={22} className="sm:w-6 sm:h-6" />
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-white/10 pt-4">
//               <a
//                 href="#profil"
//                 className="block text-sm hover:text-red-300 transition-colors"
//               >
//                 Profil
//               </a>
//               <a
//                 href="#kebijakan"
//                 className="block text-sm hover:text-red-300 transition-colors"
//               >
//                 Kebijakan
//               </a>
//               <a
//                 href="#layanan"
//                 className="block text-sm hover:text-red-300 transition-colors"
//               >
//                 Layanan
//               </a>
//               <a
//                 href="#informasi"
//                 className="block text-sm hover:text-red-300 transition-colors"
//               >
//                 Informasi
//               </a>
//               <a
//                 href="#berita"
//                 className="block text-sm hover:text-red-300 transition-colors"
//               >
//                 Berita
//               </a>
//               <a
//                 href="#data"
//                 className="block text-sm hover:text-red-300 transition-colors"
//               >
//                 Data & Statistik
//               </a>
//               <a
//                 href="#kontak"
//                 className="block text-sm hover:text-red-300 transition-colors"
//               >
//                 Kontak
//               </a>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Video Modal */}
//       {showVideo && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
//           <div className="relative w-full max-w-4xl mx-4">
//             <button
//               onClick={closeVideo}
//               className="absolute -top-12 right-0 text-white hover:text-red-300 transition-colors z-10"
//             >
//               <X size={32} />
//             </button>

//             <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
//               <iframe
//                 src="https://www.youtube.com/embed/mu9KetVUmdo?autoplay=1&enablejsapi=1"
//                 title="Profil LKPP"
//                 className="w-full h-full"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 frameBorder="0"
//               />
//             </div>

//             <div className="mt-4 text-center">
//               <h3 className="text-xl font-bold text-white">
//                 Profil Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP)
//               </h3>
//               <p className="text-gray-300 mt-2">
//                 Mengenal lebih dekat visi, misi, dan peran LKPP dalam pengadaan
//                 barang/jasa pemerintah
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Hero Section */}
//       <div className="relative h-screen overflow-hidden pt-16 sm:pt-20">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-all duration-1000 ease-out ${
//                 currentSlide === index
//                   ? "opacity-100 scale-100 z-10"
//                   : index === (currentSlide - 1 + slides.length) % slides.length
//                   ? "opacity-0 scale-95 z-0"
//                   : "opacity-0 scale-105 z-0"
//               }`}
//             >
//               <img
//                 src={slide.image}
//                 alt="Hero background"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Background Image Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-red-800/50 to-transparent z-10"></div>

//         {/* Vignette Effect */}
//         <div
//           className="absolute inset-0 z-10"
//           style={{
//             background:
//               "radial-gradient(ellipse 120% 100% at 80% 50%, transparent 40%, rgba(60,0,0,0.8) 100%)",
//           }}
//         ></div>

//         {/* Decorative Background Pattern */}
//         <div className="absolute inset-0 opacity-10 z-10">
//           <div className="absolute top-20 left-10 w-64 h-64 bg-red-400 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 h-full flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 py-6">
//           <div className="flex-1 flex items-center min-h-0">
//             <div className="w-full">
//               <div className="max-w-full lg:max-w-3xl">
//                 <div
//                   className={`transition-all duration-800 ease-out ${
//                     isAnimating
//                       ? "opacity-0 transform translate-x-[-30px]"
//                       : "opacity-100 transform translate-x-0"
//                   }`}
//                 >
//                   {/* Hanya ubah ukuran mobile saja */}
//                   <p className="text-red-200 text-base sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-3 md:mb-4">
//                     {slides[currentSlide].subtitle}
//                   </p>
//                   {/* Hanya ubah ukuran mobile saja */}
//                   <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 sm:mb-6 md:mb-8 leading-tight">
//                     {slides[currentSlide].title}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="pb-8 sm:pb-8 md:pb-12 lg:pb-16">
//             <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-6 lg:gap-8">
//               <div className="flex items-center">
//                 <div className="flex space-x-4 sm:space-x-3 md:space-x-4">
//                   {slides.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handleSlideChange(index)}
//                       disabled={isAnimating}
//                       className="group flex flex-col items-center space-y-2 sm:space-y-1 sm:space-y-2 disabled:cursor-not-allowed"
//                     >
//                       {/* Hanya ubah ukuran mobile saja */}
//                       <span
//                         className={`text-xl sm:text-base md:text-xl lg:text-2xl font-bold transition-all ${
//                           currentSlide === index
//                             ? "text-white scale-110"
//                             : "text-white/40"
//                         }`}
//                       >
//                         0{index + 1}
//                       </span>
//                       {/* Hanya ubah ukuran mobile saja */}
//                       <div
//                         className={`h-1.5 sm:h-1 rounded-full transition-all duration-500 ${
//                           currentSlide === index
//                             ? "bg-red-300 w-10 sm:w-8 md:w-10 lg:w-16"
//                             : "bg-white/30 w-8 sm:w-6 md:w-8 lg:w-12"
//                         }`}
//                       ></div>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Hanya ubah ukuran mobile saja */}
//               <button
//                 onClick={openVideo}
//                 className="group flex items-center space-x-3 sm:space-x-2 sm:space-x-3 hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 sm:px-4 sm:py-2 border border-white/20 hover:border-red-300/50 w-full lg:w-auto justify-center sm:justify-start"
//               >
//                 <div className="w-12 h-12 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-red-300 transition-all duration-300 shadow-lg">
//                   <Play
//                     size={20}
//                     className="sm:w-4 sm:h-4 text-red-900 ml-1"
//                     fill="currentColor"
//                   />
//                 </div>
//                 <div className="text-left">
//                   {/* Hanya ubah ukuran mobile saja */}
//                   <span className="text-base sm:text-sm font-medium block">
//                     Tonton Video Profil
//                   </span>
//                   <span className="text-sm sm:text-xs text-gray-300">
//                     Tentang LKPP
//                   </span>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* About Us Section */}
//       <AboutUs />
//       <Layanan />
//       <TestimonialsSection />

//       {/* Footer */}
//       <ModernFooter />
//     </div>
//   );
// };

// export default LKPPWebsite;







// sementara

"use client";
import { Menu, Play, Search, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import AboutUs from "@/app/components/AboutUs";
import Layanan from "@/app/components/Layanan";
import Agenda from "@/app/components/Agenda";
import ModernFooter from "@/app/components/ModernFooter";
import TestimonialsSection from "@/app/components/TestimonialSection";

const LKPPWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Tutup mobile menu jika terbuka
      setIsMenuOpen(false);

      // Smooth scroll ke element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const slides = [
    {
      title: "Tata Kelola Pengadaan yang Profesional dan Berintegritas",
      subtitle: "Bersama membangun pengadaan barang dan jasa pemerintah yang transparan",
      image: "https://img.okezone.com/content/2022/08/21/11/2651558/pos-indonesia-tayang-di-e-katalog-nasional-lkpp-GYeJPNNUlB.jpeg",
    },
    {
      title: "Inovasi untuk Pelayanan Publik yang Lebih Baik",
      subtitle: "Meningkatkan efisiensi dan efektivitas pengadaan pemerintah",
      image: "https://assetd.kompas.id/vkG46ylF28gmMeWANA3yh8jxhCw=/fit-in/1280xorig/filters:format(webp):quality(65)/https://asset.kgnewsroom.com/photo/pre/2025/08/06/6f1862af-6783-49c8-832f-96cc21e2868e_jpg.jpg",
    },
    {
      title: "Kolaborasi Menuju Indonesia Maju",
      subtitle: "Mendorong terciptanya ekosistem pengadaan yang berkelanjutan",
      image: "https://picsum.photos/seed/lkpp3/1920/1080",
    },
  ];

  const handleSlideChange = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide, handleSlideChange, slides.length]);

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  const openVideo = () => {
    setShowVideo(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setShowVideo(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeVideo();
      }
    };

    if (showVideo) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showVideo]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isMenuOpen
          ? "bg-red-800/95"
          : isScrolled
            ? "bg-red-800/95 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/logo-lkpp.png"
                alt="Logo LKPP"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
              <div className="border-l border-white/30 pl-2 sm:pl-3">
                <div className="text-xs sm:text-sm font-bold leading-tight">
                  DIREKTORAT PENANGANGAN
                </div>
                <div className="text-xs sm:text-sm font-bold leading-tight">
                  PERMASALAHAN HUKUM
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {/* Menu yang tersedia */}
              <button
                onClick={() => scrollToSection('profil')}
                className="text-sm hover:text-red-300 transition-colors flex items-center space-x-1"
              >
                <span>Profil</span>
              </button>

              <button
                onClick={() => scrollToSection('layanan')}
                className="text-sm hover:text-red-300 transition-colors flex items-center space-x-1"
              >
                <span>Layanan</span>
              </button>

              {/* Menu dalam development */}
              <div className="relative group">
                <button
                  disabled
                  className="text-sm text-gray-400 opacity-60 cursor-not-allowed flex items-center space-x-1 transition-all"
                >
                  <span>Kebijakan</span>
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Tooltip on Hover */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-yellow-500 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                  Dalam Pengembangan
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-500 rotate-45"></div>
                </div>
              </div>

              <div className="relative group">
                <button
                  disabled
                  className="text-sm text-gray-400 opacity-60 cursor-not-allowed flex items-center space-x-1 transition-all"
                >
                  <span>Informasi</span>
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Tooltip on Hover */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-yellow-500 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                  Dalam Pengembangan
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-500 rotate-45"></div>
                </div>
              </div>

              <div className="relative group">
                <button
                  disabled
                  className="text-sm text-gray-400 opacity-60 cursor-not-allowed flex items-center space-x-1 transition-all"
                >
                  <span>Berita</span>
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Tooltip on Hover */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-yellow-500 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                  Dalam Pengembangan
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-500 rotate-45"></div>
                </div>
              </div>

              <div className="relative group">
                <button
                  disabled
                  className="text-sm text-gray-400 opacity-60 cursor-not-allowed flex items-center space-x-1 transition-all"
                >
                  <span>Data & Statistik</span>
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Tooltip on Hover */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-yellow-500 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                  Dalam Pengembangan
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-500 rotate-45"></div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('kontak')}
                className="text-sm hover:text-red-300 transition-colors flex items-center space-x-1"
              >
                <span>Kontak</span>
              </button>
            </div>

            {/* Search & Mobile Menu */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button className="hover:text-red-300 transition-colors">
                <Search size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                className="lg:hidden hover:text-red-300 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={22} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-white/10 pt-4">
              {/* Menu yang tersedia */}
              <button
                onClick={() => scrollToSection('profil')}
                className="block text-sm hover:text-red-300 transition-colors w-full text-left py-2"
              >
                Profil
              </button>

              <button
                onClick={() => scrollToSection('layanan')}
                className="block text-sm hover:text-red-300 transition-colors w-full text-left py-2"
              >
                Layanan
              </button>

              {/* Menu dalam development */}
              <div className="relative group py-2">
                <div className="flex items-center justify-between text-sm text-gray-400 opacity-60 cursor-not-allowed">
                  <span>Kebijakan</span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-yellow-400 text-xs">Soon</span>
                  </div>
                </div>
              </div>

              <div className="relative group py-2">
                <div className="flex items-center justify-between text-sm text-gray-400 opacity-60 cursor-not-allowed">
                  <span>Informasi</span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-yellow-400 text-xs">Soon</span>
                  </div>
                </div>
              </div>

              <div className="relative group py-2">
                <div className="flex items-center justify-between text-sm text-gray-400 opacity-60 cursor-not-allowed">
                  <span>Berita</span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-yellow-400 text-xs">Soon</span>
                  </div>
                </div>
              </div>

              <div className="relative group py-2">
                <div className="flex items-center justify-between text-sm text-gray-400 opacity-60 cursor-not-allowed">
                  <span>Data & Statistik</span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-yellow-400 text-xs">Soon</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('kontak')}
                className="block text-sm hover:text-red-300 transition-colors w-full text-left py-2"
              >
                Kontak
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-red-300 transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/mu9KetVUmdo?autoplay=1&enablejsapi=1"
                title="Profil LKPP"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">
                Profil Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP)
              </h3>
              <p className="text-gray-300 mt-2">
                Mengenal lebih dekat visi, misi, dan peran LKPP dalam pengadaan
                barang/jasa pemerintah
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden pt-16 sm:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${currentSlide === index
                ? "opacity-100 scale-100 z-10"
                : index === (currentSlide - 1 + slides.length) % slides.length
                  ? "opacity-0 scale-95 z-0"
                  : "opacity-0 scale-105 z-0"
                }`}
            >
              <img
                src={slide.image}
                alt="Hero background"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-red-800/50 to-transparent z-10"></div>

        {/* Vignette Effect */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 80% 50%, transparent 40%, rgba(60,0,0,0.8) 100%)",
          }}
        ></div>

        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex-1 flex items-center min-h-0">
            <div className="w-full">
              <div className="max-w-full lg:max-w-3xl">
                <div
                  className={`transition-all duration-800 ease-out ${isAnimating
                    ? "opacity-0 transform translate-x-[-30px]"
                    : "opacity-100 transform translate-x-0"
                    }`}
                >
                  <p className="text-red-200 text-base sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-3 md:mb-4">
                    {slides[currentSlide].subtitle}
                  </p>
                  <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 sm:mb-6 md:mb-8 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-8 sm:pb-8 md:pb-12 lg:pb-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-6 lg:gap-8">
              <div className="flex items-center">
                <div className="flex space-x-4 sm:space-x-3 md:space-x-4">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      disabled={isAnimating}
                      className="group flex flex-col items-center space-y-2 sm:space-y-1 sm:space-y-2 disabled:cursor-not-allowed"
                    >
                      <span
                        className={`text-xl sm:text-base md:text-xl lg:text-2xl font-bold transition-all ${currentSlide === index
                          ? "text-white scale-110"
                          : "text-white/40"
                          }`}
                      >
                        0{index + 1}
                      </span>
                      <div
                        className={`h-1.5 sm:h-1 rounded-full transition-all duration-500 ${currentSlide === index
                          ? "bg-red-300 w-10 sm:w-8 md:w-10 lg:w-16"
                          : "bg-white/30 w-8 sm:w-6 md:w-8 lg:w-12"
                          }`}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={openVideo}
                className="group flex items-center space-x-3 sm:space-x-2 sm:space-x-3 hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 sm:px-4 sm:py-2 border border-white/20 hover:border-red-300/50 w-full lg:w-auto justify-center sm:justify-start"
              >
                <div className="w-12 h-12 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-red-300 transition-all duration-300 shadow-lg">
                  <Play
                    size={20}
                    className="sm:w-4 sm:h-4 text-red-900 ml-1"
                    fill="currentColor"
                  />
                </div>
                <div className="text-left">
                  <span className="text-base sm:text-sm font-medium block">
                    Tonton Video Profil
                  </span>
                  <span className="text-sm sm:text-xs text-gray-300">
                    Tentang LKPP
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sections yang tersedia saja */}
      <section id="profil">
        <AboutUs />
      </section>

      <section id="layanan">
        <Layanan />
      </section>

      <section id="agenda">
        <Agenda />
      </section>

      <TestimonialsSection />

      <section id="kontak">
        <ModernFooter />
      </section>
    </div>
  );
};

export default LKPPWebsite;