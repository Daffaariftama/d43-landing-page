"use client";
import { useState } from "react";
import { FileText, Shield, Users, Target, TrendingUp, CheckCircle, ArrowRight, Scale, BookOpen, Clock } from "lucide-react";

const Kebijakan = () => {
  const [activeTab, setActiveTab] = useState("strategis");

  const kebijakanData = {
    strategis: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Pengadaan Barang/Jasa Elektronik",
        description: "Implementasi sistem pengadaan secara elektronik untuk meningkatkan transparansi dan akuntabilitas",
        date: "2024",
        status: "Aktif",
        detail: "Kebijakan ini mengatur pelaksanaan pengadaan barang/jasa pemerintah melalui sistem elektronik (e-procurement) untuk memastikan transparansi, efisiensi, dan akuntabilitas dalam proses pengadaan."
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Peningkatan Kapasitas SDM Pengadaan",
        description: "Program sertifikasi dan pelatihan berkelanjutan bagi aparatur pengadaan pemerintah",
        date: "2023",
        status: "Aktif",
        detail: "Kebijakan pengembangan kompetensi sumber daya manusia di bidang pengadaan barang/jasa pemerintah melalui program sertifikasi dan pelatihan berjenjang."
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Penggunaan Produk Dalam Negeri",
        description: "Pengutamaan produk dalam negeri dalam pengadaan barang/jasa pemerintah",
        date: "2024",
        status: "Aktif",
        detail: "Kebijakan yang mendorong penggunaan produk dalam negeri untuk mendukung pertumbuhan ekonomi lokal dan kemandirian bangsa."
      }
    ],
    operasional: [
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Standar Prosedur Operasional",
        description: "Pedoman teknis pelaksanaan pengadaan barang/jasa pemerintah",
        date: "2024",
        status: "Revisi",
        detail: "Panduan lengkap untuk pelaksanaan teknis pengadaan barang/jasa pemerintah yang mengacu pada prinsip-prinsip good governance."
      },
      {
        icon: <Scale className="w-8 h-8" />,
        title: "Pengawasan dan Pengendalian",
        description: "Mekanisme pengawasan internal dalam proses pengadaan",
        date: "2023",
        status: "Aktif",
        detail: "Sistem pengawasan yang komprehensif untuk memastikan setiap proses pengadaan berjalan sesuai dengan peraturan yang berlaku."
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "Penanganan Pengaduan",
        description: "Prosedur standar penanganan pengaduan masyarakat",
        date: "2024",
        status: "Aktif",
        detail: "Mekanisme yang jelas dan transparan dalam menangani pengaduan masyarakat terkait pelaksanaan pengadaan barang/jasa."
      }
    ],
    hukum: [
      {
        icon: <BookOpen className="w-8 h-8" />,
        title: "Peraturan Pengadaan Barang/Jasa",
        description: "Kerangka hukum utama pengadaan barang/jasa pemerintah",
        date: "2024",
        status: "Aktif",
        detail: "Landasan hukum utama yang mengatur seluruh aspek pengadaan barang/jasa pemerintah di Indonesia."
      },
      {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Kepatuhan dan Etika",
        description: "Pedoman perilaku dan kode etik dalam pengadaan",
        date: "2023",
        status: "Aktif",
        detail: "Panduan etika dan perilaku yang harus dipatuhi oleh semua pihak yang terlibat dalam proses pengadaan."
      },
      {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Inovasi Pengadaan",
        description: "Regulasi untuk mendorong inovasi dalam pengadaan",
        date: "2024",
        status: "Baru",
        detail: "Kebijakan yang mendorong penerapan inovasi dan teknologi dalam proses pengadaan untuk meningkatkan efisiensi."
      }
    ]
  };

  const stats = [
    { number: "15+", label: "Kebijakan Strategis", icon: <Target className="w-6 h-6" /> },
    { number: "45+", label: "Peraturan Operasional", icon: <FileText className="w-6 h-6" /> },
    { number: "98%", label: "Tingkat Kepatuhan", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "12", label: "Inovasi Terbaru", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <section id="kebijakan" className="py-16 bg-gradient-to-br from-gray-900 to-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-800/30 border border-red-600/50 mb-6">
            <FileText className="w-5 h-5 mr-2 text-red-300" />
            <span className="text-red-300 text-sm font-medium">Kebijakan & Regulasi</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Kerangka <span className="text-red-300">Kebijakan</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Membangun sistem pengadaan yang transparan, akuntabel, dan berintegritas melalui kebijakan yang komprehensif
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-300/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-red-300">{stat.icon}</div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: "strategis", label: "Strategis", icon: <Target className="w-5 h-5" /> },
            { id: "operasional", label: "Operasional", icon: <FileText className="w-5 h-5" /> },
            { id: "hukum", label: "Hukum", icon: <Scale className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="mr-3">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Kebijakan Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {kebijakanData[activeTab as keyof typeof kebijakanData].map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-300/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
            >
              {/* Icon & Status */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-red-300 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "Aktif" 
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : item.status === "Baru"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                }`}>
                  {item.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Detail */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Tahun Terbit</span>
                  <span className="text-white font-medium">{item.date}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Action Button */}
              <button className="mt-6 flex items-center text-red-300 hover:text-red-200 font-medium transition-colors duration-300 group/btn">
                Selengkapnya
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Butuh Informasi Kebijakan Lebih Lanjut?
            </h3>
            <p className="text-red-100 text-lg sm:text-xl mb-8 leading-relaxed">
              Akses database lengkap kebijakan dan regulasi pengadaan barang/jasa pemerintah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Lihat Semua Kebijakan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Konsultasi Kebijakan
              </button>
            </div>
          </div>
        </div>

        {/* Info Tambahan */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Clock className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-gray-400 text-sm">
              Terakhir diperbarui: Desember 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kebijakan;