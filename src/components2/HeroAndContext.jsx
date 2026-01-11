import { motion } from "framer-motion";
import { BookOpen, Users, Lightbulb, GraduationCap, ChevronDown, Target } from "lucide-react";

// ==================== MỞ ĐẦU (HERO) ====================
export const HeroSection = () => (
  <section id="intro" className="relative h-screen flex items-center justify-center overflow-hidden bg-red-900">
    {/* IMAGE BACKGROUND */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620? w=1920&q=80"
        alt="Revolution background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 sepia-[0.3]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/85 via-red-950/70 to-red-900/90" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 border border-yellow-500/50 bg-red-950/50 backdrop-blur-sm px-4 py-1. 5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-yellow-200 text-sm font-medium tracking-wider uppercase">Học thuyết Mác – Lênin</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 mb-6 font-serif drop-shadow-sm uppercase">
          Chủ nghĩa xã hội & <br /> Thời kỳ quá độ
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8">
          Con đường phát triển tất yếu của xã hội loài người. 
        </p>

        {/* Nội dung bài trình bày */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl">
            <span className="text-yellow-400 font-bold">Phần I: </span>
            <span className="text-white ml-2">Chủ nghĩa xã hội</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl">
            <span className="text-yellow-400 font-bold">Phần II:</span>
            <span className="text-white ml-2">Thời kỳ quá độ</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-yellow-500/60"
      >
        <span className="text-xs uppercase tracking-widest">Bắt đầu thuyết trình</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </div>
  </section>
);

// ==================== PHẦN I HEADER ====================
export const PartOneHeader = () => (
  <section className="py-16 bg-gradient-to-r from-red-800 to-red-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img 
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80" 
        alt="Background" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-yellow-400 text-lg font-medium uppercase tracking-widest">Phần I</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white font-serif mt-4">
          Chủ nghĩa Xã hội
        </h2>
        <div className="w-32 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
      </motion.div>
    </div>
  </section>
);

// ==================== 1. KHÁI NIỆM (4 GÓC ĐỘ) ====================
export const ConceptSection = () => (
  <section id="concept" className="py-20 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Mục 1</span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-2 font-serif">
          Khái niệm <span className="text-red-600">Chủ nghĩa xã hội</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"/>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Chủ nghĩa xã hội được tiếp cận dưới <strong>4 góc độ</strong> toàn diện
        </p>
      </motion.div>

      <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            icon: Users, 
            number: "01",
            title: "Phong trào thực tiễn", 
            desc: "Của quần chúng lao động đấu tranh chống áp bức, bóc lột.",
            color: "from-blue-500 to-blue-700",
            image: "https://images.unsplash. com/photo-1591848478625-de43268e6fb8?w=400&q=80"
          },
          { 
            icon:  Lightbulb, 
            number:  "02",
            title: "Trào lưu tư tưởng", 
            desc: "Phản ánh khát vọng về một xã hội công bằng, tiến bộ.",
            color: "from-amber-500 to-orange-600",
            image:  "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&q=80"
          },
          { 
            icon:  GraduationCap, 
            number: "03",
            title: "Khoa học", 
            desc: "Chủ nghĩa xã hội khoa học do C.  Mác và Ph. Ăngghen sáng lập.",
            color: "from-green-500 to-emerald-700",
            image:  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80"
          },
          { 
            icon:  BookOpen, 
            number: "04",
            title:  "Chế độ xã hội", 
            desc: "Giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
            color: "from-red-500 to-red-700",
            image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&q=80"
          },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
            {/* Image */}
            <div className="h-32 overflow-hidden">
              <img 
                src={item.image} 
                alt={item. title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 h-32 bg-gradient-to-br ${item.color} opacity-80`} />
              <div className="absolute top-4 left-4 text-white/30 text-4xl font-bold">{item.number}</div>
            </div>
            
            <div className="p-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);