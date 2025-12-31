"use client";
import { motion } from "framer-motion";
import { Award, Clock, Heart, Quote, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Dr. Ahmad Wijaya",
      position: "Kepala Dinas PUPR Jawa Barat",
      content:
        "Layanan hukum LKPP sangat profesional dan membantu menyelesaikan permasalahan pengadaan dengan solusi tepat.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      rotation: "-rotate-3",
      delay: 0,
    },
    {
      name: "Diana Sari, S.H., M.H.",
      position: "Direktur BUMN",
      content:
        "Tim ahli LKPP memberikan pendapat hukum yang komprehensif. Analisis mendalam dan rekomendasinya praktis.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rotation: "rotate-2",
      delay: 0.1,
    },
    {
      name: "Budi Santoso",
      position: "Manager Pengadaan",
      content:
        "Proses mediasi LKPP sangat fair dan profesional. Berhasil menyelesaikan sengketa dengan solusi win-win.",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rotation: "rotate-4",
      delay: 0.2,
    },
    {
      name: "Maya Puspitasari",
      position: "Kepala Bagian Hukum",
      content:
        "Layanan pengaduan responsif dan transparan. Update status sangat membantu memantau perkembangan.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rotation: "-rotate-2",
      delay: 0.3,
    },
    {
      name: "Rizki Pratama",
      position: "Konsultan Hukum",
      content:
        "Pelayanan yang sangat memuaskan, tim responsif dan solutif dalam menangani kasus pengadaan.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rotation: "rotate-1",
      delay: 0.4,
    },
    {
      name: "Sarah Handayani",
      position: "Legal Officer",
      content:
        "Proses yang cepat dan transparan, sangat membantu perusahaan kami dalam penyelesaian sengketa.",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      rotation: "-rotate-4",
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-50 via-white to-red-50/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata <span className="text-red-600">Mereka</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Ribuan klien telah mempercayakan penyelesaian hukum pengadaan mereka
            pada LKPP
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              custom={testimonial.delay}
              className={`relative bg-white rounded-3xl shadow-xl border-2 p-6 transition-all duration-500 cursor-pointer transform ${testimonial.rotation
                } ${hoveredCard === index
                  ? "z-50 scale-105 shadow-2xl border-red-400 -translate-y-3"
                  : "z-40 hover:z-45 scale-100 border-gray-100 hover:border-red-200"
                }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              {/* Floating Quote Icon */}
              <motion.div
                className={`absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center ${hoveredCard === index ? "scale-110" : "scale-100"
                  } transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="w-4 h-4 text-white" />
              </motion.div>

              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-gray-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Star
                      className={`w-5 h-5 ${i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                        }`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 ${hoveredCard === index ? "opacity-100" : ""
                  } transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          variants={statsVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {[
            { number: "2K+", label: "Klien Terlayani", icon: Users },
            { number: "98%", label: "Tingkat Kepuasan", icon: Star },
            { number: "24/7", label: "Layanan Support", icon: Clock },
            { number: "100+", label: "Ahli Profesional", icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
