"use client";
import { ArrowLeft, Shield, Download, FileText, Users, Clock, Scale, Target, Award, Heart, Phone, Mail, Calendar, ChevronRight, ChevronLeft, Play, Pause, X, Info, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PenyelesaianSengketaPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showInfographic, setShowInfographic] = useState(false);

  // Data regulasi
  const regulations = [
    {
      title: "Perlem LKPP No 18 Tahun 2018",
      description: "Peraturan Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah tentang Layanan Penyelesaian Sengketa Kontrak Pengadaan Barang/Jasa Pemerintah",
      fileSize: "2.1 MB",
      type: "PDF"
    },
    {
      title: "Keputusan Deputi IV Nomor 5 Tahun 2025",
      description: "Petunjuk Teknis Penyelesaian Sengketa Pada Tahapan Konsiliasi",
      fileSize: "1.8 MB",
      type: "PDF"
    },
    {
      title: "Keputusan Deputi IV Nomor 1 Tahun 2025",
      description: "Petunjuk Teknis Penyelesaian Sengketa Pada Tahapan Mediasi",
      fileSize: "2.3 MB",
      type: "PDF"
    },
    {
      title: "Keputusan Deputi IV Nomor 2 Tahun 2025",
      description: "Petunjuk Teknis Penyelesaian Sengketa Pada Tahap Arbitrase",
      fileSize: "2.0 MB",
      type: "PDF"
    }
  ];

  // Data penyelenggara - Simplified to Names Only as requested
  const mediators = [
    { name: "Dr. Ahmad Wijaya, S.H., M.H.", role: "Kepala Bidang" },
    { name: "Drs. Bambang Sutrisno, M.M.", role: "Mediator Utama" },
    { name: "Siti Aminah, S.H., LL.M.", role: "Konsiliator" },
    { name: "Prof. Dr. Rudi Hermawan, S.H., M.Hum.", role: "Arbiter" },
    { name: "Diana Septiani, S.H., M.Kn.", role: "Mediator" },
    { name: "Ir. Joko Susilo, M.T.", role: "Ahli Teknis" },
    { name: "Budi Santoso, S.H.", role: "Sekretaris" },
    { name: "Ratna Dewi, S.Sos.", role: "Administrasi" },
  ];

  // Data asas sesuai Pasal 2 (Exact Text)
  const principles = [
    {
      title: "Objektif & Independen",
      description: "Layanan dilaksanakan secara objektif, tidak memihak (imparsial), dan independen",
      icon: Scale
    },
    {
      title: "Sederhana & Cepat",
      description: "Layanan dilaksanakan secara sederhana dan cepat",
      icon: Clock
    },
    {
      title: "Tertulis",
      description: "Keseluruhan proses layanan dilakukan secara tertulis",
      icon: FileText
    },
    {
      title: "Final & Mengikat",
      description: "Perjanjian Arbitrase antara Para Pihak meniadakan hak Para Pihak untuk mengajukan penyelesaian sengketa atau beda pendapat yang termuat dalam perjanjiannya ke Pengadilan Negeri",
      icon: Shield
    },
    {
      title: "Audi et Alteram Partem",
      description: "Memberi kesempatan dan mendengar Para Pihak secara seimbang (audi et alteram partem)",
      icon: Users
    },
    {
      title: "Patut",
      description: "Layanan diselenggarakan dengan cara yang patut, yakni Para Pihak diperlakukan dengan persamaan hak dan diberi kesempatan yang patut dan sama pada setiap tahapan proses",
      icon: Award
    },
    {
      title: "Komprehensif",
      description: "Akta perdamaian dan Putusan Arbitrase memuat pertimbangan atas semua hal yang dimohonkan/dituntut",
      icon: Target
    },
    {
      title: "Tidak Ultra Petita",
      description: "Putusan Arbitrase tidak boleh memuat hal yang melebihi tuntutan atau mengabulkan yang tidak dituntut (ultra petita)",
      icon: AlertTriangle
    }
  ];

  // Data tahapan dengan detail untuk modal
  const stages = [
    {
      stage: "Mediasi",
      duration: "30 Hari Kerja",
      extension: "Dapat diperpanjang 10 Hari Kerja",
      description: "Penyelesaian sengketa kontrak pengadaan di luar pengadilan melalui proses perundingan kedua belah pihak untuk mencapai kesepakatan yang dibantu oleh Mediator.",
      output: "Akta Kesepakatan Mediasi",
      actor: "Mediator",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-green-500/20 to-green-600/20",
      details: "Mediator bersifat netral dan membantu para pihak mencapai kesepakatan (fasilitator)."
    },
    {
      stage: "Konsiliasi",
      duration: "30 Hari Kerja",
      extension: "Dapat diperpanjang 10 Hari Kerja",
      description: "Penyelesaian sengketa kontrak pengadaan di luar pengadilan melalui proses perundingan kedua belah pihak untuk mencapai kesepakatan yang dibantu oleh Konsiliator.",
      output: "Kesepakatan Konsiliasi",
      actor: "Konsiliator",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-blue-500/20 to-blue-600/20",
      details: "Konsiliator bersifat netral dan aktif mengusulkan pilihan penyelesaian."
    },
    {
      stage: "Arbitrase",
      duration: "90 Hari Kerja",
      extension: "Dapat diperpanjang 30 Hari Kerja",
      description: "Penyelesaian sengketa kontrak pengadaan di luar pengadilan yang dilakukan oleh Arbiter atau Majelis Arbiter.",
      output: "Putusan Arbitrase",
      actor: "Arbiter / Majelis Arbiter",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-purple-500/20 to-purple-600/20",
      details: "Putusan bersifat final dan mengikat. Pemeriksaan dilakukan secara terbuka."
    }
  ];

  const exceptions = [
    "Sengketa yang berasal dari kontrak pengadaan yang sedang dilakukan penyidikan oleh pihak yang berwajib",
    "Sengketa yang pernah atau sedang disidangkan di Pengadilan dan/atau Lembaga Arbitrase lainnya"
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
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="ml-4">
                <div className="text-white/80 text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                  Layanan Penyelesaian
                </div>
                <div className="text-white text-lg md:text-xl font-bold">
                  SENGKETA KONTRAK PBJP
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Layanan Penyelesaian
              <br />
              <span className="text-red-200">Sengketa Kontrak</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Layanan alternatif penyelesaian sengketa kontrak pengadaan barang/jasa pemerintah
              melalui tahapan konsiliasi, mediasi, dan arbitrase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowInfographic(true)}
                className="bg-white text-red-800 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Info className="w-5 h-5 mr-2" />
                Ajukan Permohonan
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
        }}
      />
      <div className="relative z-10 min-h-full flex items-center justify-center py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Definisi & Pengecualian
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 shadow-xl">
              <div className="flex items-start mb-4">
                <div className="bg-red-500 text-white rounded-lg p-3 mr-4 md:mr-6 hidden md:block">
                  <FileText className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                    Apa itu LPS Kontrak Pengadaan?
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    <strong>Layanan Penyelesaian Sengketa Kontrak Pengadaan</strong> adalah layanan yang dibentuk sebagai alternatif penyelesaian Sengketa Kontrak Pengadaan Barang/Jasa Pemerintah.
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-4 italic">
                    (Pasal 1 Angka 2 Perlem LKPP No 18 Tahun 2018)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-red-200 shadow-xl">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 text-red-600 rounded-lg p-3 mr-4 md:mr-6 hidden md:block">
                  <AlertTriangle className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                    Sengketa yang Dikecualikan
                  </h3>
                  <ul className="space-y-3">
                    {exceptions.map((ex, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm md:text-base">
                        <span className="mr-2 text-red-500 mt-1">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs md:text-sm text-gray-500 mt-4 italic">
                    (Pasal 4 Perlem LKPP No 18 Tahun 2018)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 3: Jenis Layanan
    <div key="layanan" className="relative h-full w-full overflow-y-auto bg-gray-50">
      <div className="min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Jenis Layanan
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 text-sm md:text-lg">
              Klik pada kartu layanan untuk melihat detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {stages.map((stage, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(stage)}
                className="bg-white rounded-xl p-4 md:p-6 border-2 border-gray-100 hover:border-red-500 transition-all duration-300 hover:shadow-xl group text-left relative overflow-hidden"
              >
                <div className="relative h-40 md:h-48 rounded-lg overflow-hidden mb-4 md:mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${stage.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${stage.color}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg md:text-xl font-bold">{stage.stage}</h3>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-3 text-xs md:text-sm font-medium">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2 text-red-500" />
                  {stage.duration}
                </div>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                  {stage.description}
                </p>
                <div className="mt-auto flex items-center text-red-600 text-xs md:text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Lihat Detail <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Slide 4: Asas
    <div key="asas" className="relative h-full w-full overflow-y-auto bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-red-900/95 fixed" />
      <div className="relative z-10 min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Asas Penyelesaian Sengketa
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-300 mx-auto rounded-full" />
            <p className="text-red-100 mt-4 text-xs md:text-base">
              Berdasarkan Pasal 2 Perlem LKPP No 18 Tahun 2018
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="bg-white text-red-900 rounded-lg p-2 md:p-3 w-fit mb-3 md:mb-4">
                    <principle.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-2">{principle.title}</h3>
                  <p className="text-red-100 text-xs md:text-sm leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Slide 5: Penyelenggara (Simplified)
    <div key="penyelenggara" className="relative h-full w-full overflow-y-auto bg-gray-50">
      <div className="min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Penyelenggara Layanan
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 text-sm md:text-lg">
              Tim profesional yang siap membantu penyelesaian sengketa
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mediators.map((mediator, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{mediator.name}</h3>
                  <p className="text-red-600 text-xs md:text-sm font-medium">{mediator.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Slide 6: Cara Menggunakan (Redesigned)
    <div key="cara" className="relative h-full w-full overflow-y-auto bg-white">
      <div className="min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Menggunakan Layanan
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          {/* Timeline Style */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 md:-translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {[
                { title: "Ajukan Permohonan", desc: "Mengajukan permohonan tertulis & dokumen pendukung", icon: FileText },
                { title: "Verifikasi Dokumen", desc: "Tim LKPP memverifikasi kelengkapan dokumen", icon: Search },
                { title: "Penunjukan", desc: "Penunjukan mediator, konsiliator, atau arbiter", icon: Users },
                { title: "Proses Penyelesaian", desc: "Pelaksanaan mediasi, konsiliasi, atau arbitrase", icon: Clock },
                { title: "Kesepakatan/Putusan", desc: "Penandatanganan akta atau putusan final", icon: CheckCircle }
              ].map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}>
                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 md:w-12 md:h-12 bg-red-600 rounded-full border-4 border-white flex items-center justify-center text-white z-10 md:-translate-x-1/2 shadow-lg">
                    <step.icon className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center bg-red-50 rounded-2xl p-8 border border-red-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Siap Mengajukan Permohonan?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Segera selesaikan sengketa kontrak Anda dengan bantuan profesional dari LKPP.
            </p>
            <button
              onClick={() => setShowInfographic(true)}
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200 hover:-translate-y-1 inline-flex items-center"
            >
              <Info className="w-5 h-5 mr-2" />
              Ajukan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>,

    // Slide 7: Regulasi
    <div key="regulasi" className="relative h-full w-full overflow-y-auto bg-gray-50">
      <div className="min-h-full flex items-center py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Download Regulasi Terkait
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 text-sm md:text-lg">
              Dokumen peraturan dan petunjuk teknis penyelesaian sengketa
            </p>
          </div>
          <div className="space-y-4">
            {regulations.map((regulation, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="bg-red-100 rounded-xl p-3 md:p-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <FileText className="w-6 h-6 md:w-8 md:h-8 text-red-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">{regulation.title}</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3">{regulation.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-medium">{regulation.fileSize}</span>
                        <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-medium">{regulation.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 md:p-3 rounded-xl transition-colors group-hover:scale-110 shadow-md">
                    <Download className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Slide 8: Kontak
    <div key="kontak" className="relative h-full w-full overflow-y-auto bg-white">
      <div className="min-h-full flex items-center justify-center py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Informasi Kontak
            </h2>
            <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Telepon</h3>
              <p className="text-gray-600 text-sm md:text-base">(021) 1234-5678</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Mail className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Email</h3>
              <p className="text-gray-600 text-sm md:text-base">sengketa@lkpp.go.id</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Jam Operasional</h3>
              <p className="text-gray-600 text-sm md:text-base">Senin - Jumat<br />08:00 - 16:00 WIB</p>
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
    "Layanan",
    "Asas",
    "Penyelenggara",
    "Cara Menggunakan",
    "Regulasi",
    "Kontak"
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-white relative">
      {/* Navigation Controls */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4 items-end">
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

      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-50 flex gap-2">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 md:p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 md:p-3 rounded-full bg-red-600 shadow-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>

      {/* Back Button */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 z-50">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-red-600 transition-colors group bg-white/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm text-sm md:text-base"
        >
          <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali
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

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-40 md:h-48">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedService.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${selectedService.color}`} />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedService.stage}</h3>
                  <p className="opacity-90 text-sm md:text-base">Oleh: {selectedService.actor}</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center text-red-600 mb-2">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Jangka Waktu</span>
                    </div>
                    <p className="text-gray-900 font-medium">{selectedService.duration}</p>
                    <p className="text-gray-500 text-xs mt-1">{selectedService.extension}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center text-red-600 mb-2">
                      <FileText className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Output</span>
                    </div>
                    <p className="text-gray-900 font-medium">{selectedService.output}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Deskripsi</h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{selectedService.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Keterangan Tambahan</h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{selectedService.details}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infographic Modal */}
      <AnimatePresence>
        {showInfographic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowInfographic(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Alur Permohonan</h3>
                  <p className="text-gray-500 text-sm">Tahapan pengajuan penyelesaian sengketa</p>
                </div>
                <button
                  onClick={() => setShowInfographic(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="relative">
                  {/* Connecting Line */}
                  <div className="absolute left-6 md:left-8 top-8 bottom-8 w-1 bg-gray-100" />

                  {/* Steps */}
                  <div className="space-y-8 md:space-y-12 relative">
                    {[
                      {
                        title: "1. Registrasi Permohonan",
                        desc: "Pemohon mengajukan permohonan tertulis melalui Sekretariat Layanan.",
                        icon: FileText
                      },
                      {
                        title: "2. Evaluasi Pendahuluan",
                        desc: "Sekretariat memeriksa kelengkapan administrasi dan kesesuaian permohonan (10 hari kerja).",
                        icon: Search
                      },
                      {
                        title: "3. Penunjukan Mediator/Konsiliator/Arbiter",
                        desc: "Para Pihak sepakat menunjuk atau ditunjuk oleh Sekretariat jika tidak sepakat.",
                        icon: Users
                      },
                      {
                        title: "4. Proses Penyelesaian",
                        desc: "Pelaksanaan pertemuan Mediasi/Konsiliasi (30 hari) atau Sidang Arbitrase (90 hari).",
                        icon: Clock
                      },
                      {
                        title: "5. Kesepakatan / Putusan",
                        desc: "Penandatanganan Akta Perdamaian atau Pembacaan Putusan Arbitrase.",
                        icon: CheckCircle
                      }
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start relative">
                        <div className="bg-red-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg z-10 mr-4 md:mr-6 flex-shrink-0">
                          <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-4 md:p-6 flex-grow border border-gray-100 hover:border-red-200 transition-colors">
                          <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                          <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                <button
                  onClick={() =>
                    window.open('https://eoffice.lkpp.go.id/persuratan', '_blank', 'noopener,noreferrer')
                  }

                  className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center mx-auto"
                >
                  Saya Mengerti, Lanjutkan
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Search(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}