"use client";
import { ArrowLeft, Shield, Download, FileText, Users, Clock, Scale, Target, Award, Heart, MapPin, Phone, Mail, Calendar, ChevronRight, Play, Pause } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function PenyelesaianSengketaPage() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate stages
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % stages.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const parallaxStyle = (speed: number = 0.5) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  // Data regulasi
  const regulations = [
    {
      title: "Perlem LKPP No 18 Tahun 2018",
      description: "Peraturan Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah tentang Penyelesaian Sengketa",
      fileSize: "2.1 MB",
      type: "PDF"
    },
    {
      title: "Keputusan Deputi IV Nomor 5 Tahun 2025",
      description: "Petunjuk Teknis Penyelesaian Sengketa Pada Tahapan Konsiliasi Pada Layanan Penyelesaian Sengketa Kontrak Pengadaan Barang/Jasa Pemerintah",
      fileSize: "1.8 MB",
      type: "PDF"
    },
    {
      title: "Keputusan Deputi IV Nomor 1 Tahun 2025",
      description: "Petunjuk Teknis Penyelesaian Sengketa Pada Tahapan Mediasi Pada Layanan Penyelesaian Sengketa Kontrak Pengadaan Barang/Jasa Pemerintah",
      fileSize: "2.3 MB",
      type: "PDF"
    },
    {
      title: "Keputusan Deputi IV Nomor 2 Tahun 2025",
      description: "Petunjuk Teknis Penyelesaian Sengketa Pada Tahap Arbitrase Pada Layanan Penyelesaian Sengketa Kontrak Pengadaan Barang/Jasa Pemerintah",
      fileSize: "2.0 MB",
      type: "PDF"
    },
    {
      title: "Keputusan Deputi IV Nomor 3 Tahun 2024",
      description: "Perubahan Atas Keputusan Deputi Bidang Hukum Dan Penyelesaian Sanggah Selaku Penanggung Jawab Layanan Penyelesaian Sengketa Kontrak Pengadaan Barang/Jasa Pemerintah Nomor 1 Tahun 2022 tentang Penyelenggaraan Layanan Penyelesaian Sengketa Kontrak Pengadaan Barang/Jasa Pemerintah",
      fileSize: "1.5 MB",
      type: "PDF"
    }
  ];

  // Data penyelenggara dengan foto
  const mediators = [
    { 
      name: "Dr. Ahmad Wijaya, S.H., M.H.", 
      position: "Kepala Bidang Penyelesaian Sengketa",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      experience: "15 Tahun"
    },
    { 
      name: "Drs. Bambang Sutrisno, M.M.", 
      position: "Mediator Utama",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      experience: "12 Tahun"
    },
    { 
      name: "Siti Aminah, S.H., LL.M.", 
      position: "Konsiliator",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      experience: "10 Tahun"
    },
    { 
      name: "Prof. Dr. Rudi Hermawan, S.H., M.Hum.", 
      position: "Arbiter",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      experience: "20 Tahun"
    },
    { 
      name: "Diana Septiani, S.H., M.Kn.", 
      position: "Mediator",
      photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      experience: "8 Tahun"
    },
    { 
      name: "Ir. Joko Susilo, M.T.", 
      position: "Ahli Teknis",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      experience: "14 Tahun"
    }
  ];

  // Data asas
  const principles = [
    {
      title: "Asas Keadilan",
      description: "Setiap pihak mendapatkan perlakuan yang sama dan berimbang dalam proses penyelesaian sengketa",
      icon: Scale
    },
    {
      title: "Asas Keterbukaan",
      description: "Proses penyelesaian sengketa dilaksanakan secara transparan dan dapat diakses oleh para pihak",
      icon: Target
    },
    {
      title: "Asas Efisiensi",
      description: "Penyelesaian sengketa dilaksanakan secara cepat, tepat, dan dengan biaya terjangkau",
      icon: Clock
    },
    {
      title: "Asas Kepastian Hukum",
      description: "Proses dan hasil penyelesaian sengketa memberikan kepastian hukum bagi para pihak",
      icon: Shield
    },
    {
      title: "Asas Kerahasiaan",
      description: "Proses mediasi dan konsiliasi dilaksanakan dengan menjaga kerahasiaan informasi para pihak",
      icon: Heart
    },
    {
      title: "Asas Sukarela",
      description: "Penyelesaian sengketa didasarkan pada kesepakatan dan kemauan para pihak",
      icon: Award
    }
  ];

  // Data tahapan dengan gambar
  const stages = [
    {
      stage: "Konsiliasi",
      duration: "14 Hari Kerja",
      description: "Tahap awal penyelesaian sengketa melalui konsiliator yang membantu para pihak mencari solusi",
      output: "Kesepakatan Konsiliasi",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      stage: "Mediasi",
      duration: "21 Hari Kerja",
      description: "Penyelesaian sengketa melalui mediator yang memfasilitasi perundingan para pihak",
      output: "Akta Kesepakatan Mediasi",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      stage: "Arbitrase",
      duration: "30 Hari Kerja",
      description: "Penyelesaian sengketa melalui arbiter yang memberikan putusan mengikat para pihak",
      output: "Putusan Arbitrase",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-purple-500/20 to-purple-600/20"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/60" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"
            style={parallaxStyle(0.3)}
          />
          <div 
            className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-red-300 rounded-full filter blur-3xl animate-pulse delay-1000"
            style={parallaxStyle(0.2)}
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => router.back()}
              className="flex items-center text-white hover:text-red-200 transition-colors group text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Logo/Brand */}
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm border border-white/30">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <div className="text-white/80 text-xs font-semibold tracking-wider uppercase">
                    Layanan Penyelesaian
                  </div>
                  <div className="text-white text-xl font-bold">
                    SENGKETA LKPP
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Penyelesaian
                <br />
                <span className="text-red-200">Sengketa</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">
                Layanan penyelesaian sengketa kontrak pengadaan barang/jasa pemerintah 
                melalui tahapan konsiliasi, mediasi, dan arbitrase
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-red-800 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                  Ajukan Permohonan
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 backdrop-blur-sm">
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Definisi Section with Parallax Image */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        />
        
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-red-900/30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Definisi
            </h2>
            <div className="w-16 h-0.5 bg-red-300 mx-auto rounded-full" />
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-start mb-4">
              <div className="bg-red-500 text-white rounded-lg p-2 mr-4">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Pasal 1 Perlem LKPP No 18 Tahun 2018
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  <strong>Penyelesaian Sengketa</strong> adalah penyelesaian perselisihan yang timbul dalam pelaksanaan kontrak pengadaan barang/jasa pemerintah melalui konsiliasi, mediasi, atau arbitrase.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm mt-3">
                  <strong>Kontrak Pengadaan Barang/Jasa Pemerintah</strong> adalah perjanjian antara PPK dan Penyedia Barang/Jasa untuk melaksanakan pekerjaan pengadaan barang/jasa pemerintah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Section with Dynamic Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Jenis Layanan
            </h2>
            <div className="w-16 h-0.5 bg-red-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 text-sm">
              Tiga tahapan penyelesaian sengketa yang tersedia
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center mb-8 space-x-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="flex space-x-2">
              {stages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeStage === index ? 'bg-red-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dynamic Stage Display */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            {stages.map((stage, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeStage === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${stage.image})`,
                    transform: `translateY(${scrollY * 0.2}px)`
                  }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stage.color}`} />
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center text-center text-white p-8">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{stage.stage}</h3>
                    <p className="text-lg md:text-xl mb-4">{stage.description}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        ⏱️ {stage.duration}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        📄 {stage.output}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stage Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <button
                key={index}
                onClick={() => setActiveStage(index)}
                className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  activeStage === index ? 'border-red-500 shadow-lg' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`bg-red-100 text-red-600 rounded-lg p-2 mr-3 ${
                    activeStage === index ? 'bg-red-500 text-white' : ''
                  }`}>
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{stage.stage}</h3>
                </div>
                <div className="flex items-center text-gray-600 mb-3 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {stage.duration}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {stage.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Asas Section with Parallax */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-red-800/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Asas Penyelesaian Sengketa
            </h2>
            <div className="w-16 h-0.5 bg-red-300 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-red-300 transition-all duration-300 hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-lg p-2 mr-4">
                    <principle.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{principle.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penyelenggara Section with Photo Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Penyelenggara Layanan
            </h2>
            <div className="w-16 h-0.5 bg-red-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 text-sm">
              Tim mediator, konsiliator, dan arbiter yang berpengalaman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediators.map((mediator, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-500 hover:scale-105 hover:shadow-xl group">
                {/* Photo with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={mediator.photo} 
                    alt={mediator.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-red-900/20 group-hover:bg-red-900/10 transition-colors" />
                  <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {mediator.experience} Pengalaman
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{mediator.name}</h3>
                  <p className="text-red-600 text-xs mb-3">{mediator.position}</p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Users className="w-3 h-3 mr-1" />
                    Professional Certified
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Menggunakan Layanan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cara Menggunakan Layanan
            </h2>
            <div className="w-16 h-0.5 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {[
              "Ajukan Permohonan - Mengajukan permohonan secara tertulis disertai dokumen pendukung yang lengkap",
              "Verifikasi Dokumen - Tim LKPP melakukan verifikasi kelengkapan dan keabsahan dokumen permohonan",
              "Penunjukan Penyelesai Sengketa - Penunjukan mediator, konsiliator, atau arbiter berdasarkan jenis sengketa",
              "Proses Penyelesaian - Pelaksanaan tahapan konsiliasi, mediasi, atau arbitrase sesuai ketentuan",
              "Kesepakatan/Putusan - Penandatanganan kesepakatan atau penerbitan putusan penyelesaian sengketa"
            ].map((step, index) => (
              <div key={index} className="flex items-start group">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="border-l-2 border-red-200 pl-4 py-2 group-hover:border-red-500 transition-colors">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">
                    {step.split(' - ')[0]}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {step.split(' - ')[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulasi Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Download Regulasi Terkait
            </h2>
            <div className="w-16 h-0.5 bg-red-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 text-sm">
              Dokumen peraturan dan petunjuk teknis penyelesaian sengketa
            </p>
          </div>

          <div className="space-y-4">
            {regulations.map((regulation, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-red-300 transition-all duration-300 group hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 rounded-lg p-2 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5 text-red-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{regulation.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{regulation.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-gray-500 text-xs">{regulation.fileSize}</span>
                        <span className="text-gray-500 text-xs">{regulation.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors group-hover:scale-110">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Informasi Kontak
            </h2>
            <div className="w-16 h-0.5 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <Phone className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Telepon</h3>
              <p className="text-gray-600 text-sm">(021) 1234-5678</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <Mail className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Email</h3>
              <p className="text-gray-600 text-sm">sengketa@lkpp.go.id</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <Calendar className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Jam Operasional</h3>
              <p className="text-gray-600 text-sm">Senin - Jumat<br />08:00 - 16:00 WIB</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}