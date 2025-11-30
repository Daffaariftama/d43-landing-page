"use client"

const AboutUs = () => {
  return (
    <section id="profil" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main White Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-full -translate-y-10 translate-x-10 opacity-40"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
            {/* Left Content - Text */}
            <div className="flex-1 space-y-4 md:space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <div className="text-red-600 font-semibold text-xs md:text-sm tracking-wider uppercase">
                  Excellence in Public Procurement
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                  Redefining
                  <span className="block font-light text-red-600">Government</span>
                  <span className="block font-black bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                    Procurement
                  </span>
                </h1>
                <div className="text-gray-500 text-sm font-medium">Since 2007</div>
              </div>

              {/* Content Text */}
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Sebagai <span className="font-semibold text-red-600">otoritas pengadaan nasional</span>, kami menciptakan standar baru dalam transparansi dan efisiensi melalui solusi digital yang revolusioner.
                </p>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light italic border-l-2 border-red-200 pl-3">
                  "Inovasi untuk menciptakan nilai tambah bagi seluruh pemangku kepentingan."
                </p>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Dengan pendekatan <span className="font-medium text-red-600">human-centered design</span>, kami membangun sistem yang powerful dan accessible bagi semua pengguna.
                </p>
              </div>

              {/* Signature Section */}
              <div className="pt-2">
                <h2 className="text-lg md:text-xl font-bold text-gray-900">Raden Ari Widianto, SH., M.E.</h2>
                <h3 className="text-red-600 font-medium text-sm md:text-base">Direktur Penanganan Permasalahan Hukum</h3>
              </div>
            </div>

            {/* Right Side - Photo */}
            <div className="w-full lg:w-80 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Photo Container */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-3 md:p-4 shadow-lg border border-gray-100">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <img 
                    src="https://www.lkpp.go.id/uploads/pejabat/1740478254_19.png" 
                    alt="Direktur LKPP"
                    className="w-full aspect-square object-cover rounded-lg shadow-inner"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Core Values - Compact */}
          <div className="relative z-10 mt-6 md:mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                { title: "Digital First", icon: "💻" },
                { title: "Transparency", icon: "🔍" },
                { title: "Integrity", icon: "🛡️" },
                { title: "Innovation", icon: "🚀" }
              ].map((item, index) => (
                <div key={index} className="text-center p-3 bg-red-50 rounded-lg border border-red-100">
                  <div className="text-lg mb-1">{item.icon}</div>
                  <div className="font-semibold text-red-700 text-xs md:text-sm">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;