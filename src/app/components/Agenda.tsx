import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, ChevronLeft, ArrowRight, Video, X, ExternalLink } from 'lucide-react';

interface AgendaItem {
  id: number | string;
  title: string;
  date: string;
  time: string;
  location?: string;
  type?: string;
  status?: string;
  image?: string;
  description?: string;
  zoomLink?: string;
  fullLocation?: string;
  registrationLink?: string;
}

const Agenda = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedAgenda, setSelectedAgenda] = useState<AgendaItem | null>(null);
  const [calendarView, setCalendarView] = useState<'day' | 'month'>('day');

  // Dummy data for featured agenda
  const featuredAgenda: AgendaItem = {
    id: "featured",
    title: "Rapat Koordinasi Nasional Pengadaan Barang/Jasa Pemerintah 2025",
    date: "10 Desember 2025",
    time: "09:00 - 16:00 WIB",
    location: "Hotel Bidakara, Jakarta",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Membangun sinergi dan kolaborasi untuk pengadaan yang lebih transparan, akuntabel, dan berkelanjutan menuju Indonesia Emas 2045.",
    fullLocation: "Birawa Assembly Hall, Hotel Bidakara Jakarta. Jl. Gatot Subroto No.Kav. 71-73, RT.1/RW.1, Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870",
    registrationLink: "https://rakornas.lkpp.go.id/register",
    zoomLink: "https://zoom.us/j/1234567890"
  };

  // Dummy data for agenda list
  const agendaList: AgendaItem[] = [
    {
      id: 1,
      title: "Sosialisasi Peraturan LKPP Terbaru",
      date: "12 Desember 2025",
      time: "09:00 - 12:00 WIB",
      type: "Webinar",
      status: "Akan Datang",
      fullLocation: "Online via Zoom Meeting",
      zoomLink: "https://zoom.us/j/9876543210",
      registrationLink: "https://lkpp.go.id/sosialisasi/register"
    },
    {
      id: 2,
      title: "Bimbingan Teknis Penggunaan SPSE v4.5",
      date: "15 Desember 2025",
      time: "08:00 - 16:00 WIB",
      type: "Offline",
      status: "Akan Datang",
      location: "Gedung LKPP, Jakarta",
      fullLocation: "Ruang Pelatihan Lt. 2, Gedung LKPP. Kompleks Rasuna Epicentrum, Jl. Epicentrum Tengah Lot. 11B, Jakarta Selatan",
      registrationLink: "https://training.lkpp.go.id/register"
    }
  ];

  const handleAgendaClick = (agenda: AgendaItem) => {
    setSelectedAgenda(agenda);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const currentMonthName = months[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const currentDay = 10; // Highlighted day for demo

  return (
    <section id="agenda" className="py-16 md:py-24 bg-gray-50 relative">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Featured Agenda */}
          <div className="lg:col-span-2 space-y-6">
            <div
              onClick={() => handleAgendaClick(featuredAgenda)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-red-200 transition-colors">
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
                <div
                  key={agenda.id}
                  onClick={() => handleAgendaClick(agenda)}
                  className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-4 md:items-center cursor-pointer group"
                >
                  <div className="flex-shrink-0 w-full md:w-24 h-24 bg-red-50 rounded-lg flex flex-col items-center justify-center text-red-600 border border-red-100 group-hover:bg-red-100 transition-colors">
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
                    <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                      {agenda.title}
                    </h4>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {agenda.status}
                    </span>
                  </div>
                  <button className="flex-shrink-0 p-2 text-gray-400 group-hover:text-red-600 group-hover:bg-red-50 rounded-full transition-colors self-end md:self-center">
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
                <p className="text-gray-500 text-xs">Jadwal kegiatan & riwayat acara</p>
              </div>

              <div className="p-6">
                {/* Month Selector Header */}
                <div className="flex items-center justify-between mb-6 bg-gray-50 p-2 rounded-lg">
                  <button
                    onClick={prevMonth}
                    className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all text-gray-600"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCalendarView(calendarView === 'day' ? 'month' : 'day')}
                    className="font-bold text-gray-900 hover:text-red-600 transition-colors flex items-center gap-2"
                  >
                    {currentMonthName} {currentYear}
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all text-gray-600"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Calendar Grid View */}
                {calendarView === 'day' ? (
                  <>
                    <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                      {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((day, i) => (
                        <div key={i} className="text-xs font-medium text-gray-400 py-1">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 animate-in fade-in zoom-in duration-300">
                      {days.map((day) => (
                        <button
                          key={day}
                          className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${day === currentDay && currentDate.getMonth() === 11 // Highlight only if Dec
                            ? 'bg-red-600 text-white font-bold shadow-md'
                            : [10, 12, 15].includes(day) && currentDate.getMonth() === 11
                              ? 'bg-red-50 text-red-600 font-semibold hover:bg-red-100'
                              : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  // Month Selection View
                  <div className="grid grid-cols-3 gap-3 animate-in fade-in zoom-in duration-300">
                    {months.map((month, idx) => (
                      <button
                        key={month}
                        onClick={() => {
                          const newDate = new Date(currentDate);
                          newDate.setMonth(idx);
                          setCurrentDate(newDate);
                          setCalendarView('day');
                        }}
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${idx === currentDate.getMonth()
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600'
                          }`}
                      >
                        {month}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mini List for Selected Date */}
              {currentDate.getMonth() === 11 && ( // Only show dummy events for Dec
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <div
                    className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-all"
                    onClick={() => handleAgendaClick(featuredAgenda)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md">
                        10 Des
                      </span>
                      <span className="text-[10px] text-gray-400">09:00 WIB</span>
                    </div>
                    <h5 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2 hover:text-red-600 transition-colors">
                      Rapat Koordinasi Nasional PBJP 2025
                    </h5>
                    <p className="text-xs text-gray-500 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" /> Hotel Bidakara
                    </p>
                  </div>
                </div>
              )}

              {/* Fallback for other months */}
              {currentDate.getMonth() !== 11 && calendarView === 'day' && (
                <div className="p-8 text-center bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-500 text-sm">Tidak ada agenda pada bulan ini.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedAgenda && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedAgenda(null)}>
          <div
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAgenda(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {selectedAgenda.image && (
              <div className="w-full h-48 md:h-64 relative">
                <img
                  src={selectedAgenda.image}
                  alt={selectedAgenda.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 md:left-6">
                  <h3 className="text-white font-bold text-xl md:text-2xl line-clamp-2">
                    {selectedAgenda.title}
                  </h3>
                </div>
              </div>
            )}

            <div className="p-6 pt-2 md:p-8 md:pt-4">
              {!selectedAgenda.image && (
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pr-8">
                  {selectedAgenda.title}
                </h3>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full border border-red-100">
                  {selectedAgenda.status || "Akan Datang"}
                </span>
                {selectedAgenda.type && (
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                    {selectedAgenda.type}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      <Calendar className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Tanggal</p>
                      <p className="text-sm font-semibold text-gray-900">{selectedAgenda.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      <Clock className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Waktu</p>
                      <p className="text-sm font-semibold text-gray-900">{selectedAgenda.time}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {selectedAgenda.zoomLink ? (
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-2 rounded-lg mr-3">
                        <Video className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Link Zoom</p>
                        <a href={selectedAgenda.zoomLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline break-all">
                          {selectedAgenda.zoomLink}
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <div className="bg-gray-100 p-2 rounded-lg mr-3">
                        <MapPin className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Lokasi</p>
                        <p className="text-sm font-semibold text-gray-900">{selectedAgenda.location || "TBA"}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selectedAgenda.fullLocation && (
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" />
                    Lokasi Lengkap
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedAgenda.fullLocation}
                  </p>
                </div>
              )}

              {selectedAgenda.description && (
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Deskripsi Kegiatan</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedAgenda.description}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                {selectedAgenda.registrationLink && (
                  <a
                    href={selectedAgenda.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors text-center shadow-lg shadow-red-500/20 flex items-center justify-center"
                  >
                    Daftar Sekarang
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
                {selectedAgenda.zoomLink && (
                  <a
                    href={selectedAgenda.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors text-center shadow-lg shadow-blue-500/20 flex items-center justify-center"
                  >
                    Gabung Zoom
                    <Video className="w-4 h-4 ml-2" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedAgenda(null)}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-sm transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Agenda;
