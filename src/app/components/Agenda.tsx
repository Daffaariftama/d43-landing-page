import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const Agenda = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Dummy data for featured agenda
  const featuredAgenda = {
    title: "Rapat Koordinasi Nasional Pengadaan Barang/Jasa Pemerintah 2025",
    date: "10 Desember 2025",
    time: "09:00 - 16:00 WIB",
    location: "Hotel Bidakara, Jakarta",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Membangun sinergi dan kolaborasi untuk pengadaan yang lebih transparan, akuntabel, dan berkelanjutan menuju Indonesia Emas 2045."
  };

  // Dummy data for agenda list
  const agendaList = [
    {
      id: 1,
      title: "Sosialisasi Peraturan LKPP Terbaru",
      date: "12 Desember 2025",
      time: "09:00 - 12:00 WIB",
      type: "Webinar",
      status: "Akan Datang"
    },
    {
      id: 2,
      title: "Bimbingan Teknis Penggunaan SPSE v4.5",
      date: "15 Desember 2025",
      time: "08:00 - 16:00 WIB",
      type: "Offline",
      status: "Akan Datang"
    }
  ];

  // Calendar days generation (simplified)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentDay = 10; // Highlighted day

  return (
    <section id="agenda" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agenda Kegiatan
            </h2>
            <div className="w-20 h-1 bg-red-600 rounded-full mb-4" />
            <p className="text-gray-600 max-w-2xl">
              Ikuti berbagai kegiatan, sosialisasi, dan bimbingan teknis terbaru dari LKPP.
            </p>
          </div>
          <button className="hidden md:flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors mt-4 md:mt-0">
            Lihat Semua Agenda <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Featured Agenda */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={featuredAgenda.image}
                  alt={featuredAgenda.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    Agenda Utama
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 text-white">
                  <div className="flex items-center space-x-4 mb-3 text-sm md:text-base text-gray-200">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-red-400" />
                      {featuredAgenda.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-red-400" />
                      {featuredAgenda.time}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {featuredAgenda.title}
                  </h3>
                  <p className="text-gray-300 line-clamp-2 mb-6 hidden md:block">
                    {featuredAgenda.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors text-sm">
                      Daftar Sekarang
                    </button>
                    <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold transition-colors text-sm">
                      Detail Acara
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Agenda List */}
            <div className="space-y-4">
              {agendaList.map((agenda) => (
                <div key={agenda.id} className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="flex-shrink-0 w-full md:w-24 h-24 bg-red-50 rounded-lg flex flex-col items-center justify-center text-red-600 border border-red-100">
                    <span className="text-2xl font-bold">{agenda.date.split(' ')[0]}</span>
                    <span className="text-xs font-medium uppercase">{agenda.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${agenda.type === 'Webinar' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                        }`}>
                        {agenda.type}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {agenda.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 hover:text-red-600 transition-colors cursor-pointer">
                      {agenda.title}
                    </h4>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {agenda.status}
                    </span>
                  </div>
                  <button className="flex-shrink-0 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors self-end md:self-center">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Calendar Widget */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Kalender Agenda</h3>
                <p className="text-gray-500 text-xs">Jadwal kegiatan bulan ini</p>
              </div>

              <div className="p-6">
                {/* Month Selector */}
                <div className="flex items-center justify-between mb-6 bg-gray-50 p-2 rounded-lg">
                  <button className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all text-gray-600">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="font-bold text-gray-900">Desember 2025</span>
                  <button className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all text-gray-600">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                  {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((day, i) => (
                    <div key={i} className="text-xs font-medium text-gray-400 py-1">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day) => (
                    <button
                      key={day}
                      className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${day === currentDay
                          ? 'bg-red-600 text-white font-bold shadow-md'
                          : [10, 12, 15].includes(day)
                            ? 'bg-red-50 text-red-600 font-semibold hover:bg-red-100'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mini List for Selected Date */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md">
                      10 Des
                    </span>
                    <span className="text-[10px] text-gray-400">09:00 WIB</span>
                  </div>
                  <h5 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                    Rapat Koordinasi Nasional PBJP 2025
                  </h5>
                  <p className="text-xs text-gray-500 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> Hotel Bidakara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
            Lihat Semua Agenda <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
