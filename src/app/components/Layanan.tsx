"use client";
import { Scale, Gavel, Users, MessageCircle, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LayananSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const router = useRouter();

  const layanan = [
    {
      id: "pemberi-keterangan-ahli",
      icon: Scale,
      title: "Pemberi Keterangan Ahli",
      description: "Layanan penyediaan keterangan ahli dalam proses hukum pengadaan barang/jasa pemerintah dengan standar profesional dan berintegritas."
    },
    {
      id: "pemberian-pendapat-hukum",
      icon: Gavel,
      title: "Pemberian Pendapat Hukum",
      description: "Penyusunan dan pemberian pendapat hukum terkait aspek legalitas dalam pengadaan barang/jasa pemerintah."
    },
    {
      id: "advisor",
      icon: Users,
      title: "Advisor",
      description: "Konsultasi dan pendampingan hukum dalam penyelesaian permasalahan pengadaan barang/jasa pemerintah."
    },
    {
      id: "pengaduan",
      icon: MessageCircle,
      title: "Pengaduan",
      description: "Layanan pengaduan masyarakat terkait pelaksanaan pengadaan barang/jasa pemerintah dengan mekanisme yang transparan."
    },
    {
      id: "penyelesaian-sengketa",
      icon: Shield,
      title: "Layanan Penyelesaian Sengketa",
      description: "Mediasi dan penyelesaian sengketa pengadaan barang/jasa pemerintah melalui mekanisme yang adil dan berimbang."
    }
  ];

  // Fungsi untuk handle klik card - navigasi ke halaman layanan
  const handleCardClick = (layananId: string) => {
    router.push(`/layanan/${layananId}`);
  };

  return (
    <section id="layanan" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Layanan Kami
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Berbagai layanan unggulan untuk mendukung tata kelola pengadaan barang/jasa pemerintah 
            yang profesional dan berintegritas
          </p>
        </div>

        {/* Layanan Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {layanan.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 hover:bg-gray-700/50 rounded-xl border border-gray-700 hover:border-red-500/30 p-4 md:p-6 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => handleCardClick(item.id)}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-red-500/10 border border-red-500/20 mb-4 group-hover:bg-red-500/20 transition-colors mx-auto">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
              </div>
              
              {/* Title */}
              <h3 className="text-sm md:text-base font-semibold text-white text-center mb-2 md:mb-3 line-clamp-2 group-hover:text-red-300 transition-colors">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-gray-400 text-center leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>

              {/* Arrow indicator */}
              <div className="flex justify-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4 text-red-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-800/30 rounded-xl border border-gray-700 p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              Butuh Bantuan Layanan Hukum?
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Tim ahli kami siap membantu menyelesaikan permasalahan hukum terkait pengadaan barang/jasa pemerintah
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors"
                onClick={() => router.push('/layanan/pengaduan')}
              >
                Konsultasi Sekarang
              </button>
              <button 
                className="border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors"
                onClick={() => router.push('/layanan/penyelesaian-sengketa')}
              >
                Lihat Informasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananSection;