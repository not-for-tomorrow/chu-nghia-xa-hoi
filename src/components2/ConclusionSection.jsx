import { motion } from "framer-motion";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

// ==================== KẾT LUẬN CHUNG ====================
export const ConclusionSection = () => (
  <section id="conclusion" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
          Tổng kết bài thuyết trình
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-4"/>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Phần I */}
        <motion.div
          initial={{ opacity:  0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-200 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">I</div>
            <h3 className="text-2xl font-bold text-gray-900">Chủ nghĩa Xã hội</h3>
          </div>
          
          <ul className="space-y-4">
            {[
              "Khái niệm CNXH (4 góc độ)",
              "Giai đoạn đầu của hình thái CSCN",
              "Điều kiện ra đời (Kinh tế & Chính trị)",
              "6 đặc trưng bản chất"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Phần II */}
        <motion.div
          initial={{ opacity:  0, x:  30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border-2 border-yellow-200 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">II</div>
            <h3 className="text-2xl font-bold text-gray-900">Thời kỳ Quá độ</h3>
          </div>
          
          <ul className="space-y-4">
            {[
              "Quan điểm của C.  Mác và V. I.  Lênin",
              "Tính tất yếu của thời kỳ quá độ",
              "Hai loại hình:  Trực tiếp & Gián tiếp",
              "4 đặc điểm cơ bản (Kinh tế, Chính trị, Văn hóa, Xã hội)"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Thông điệp cuối */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
          <span>Việt Nam đang trong thời kỳ quá độ lên CNXH</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </motion.div>
    </div>
  </section>
);

// ==================== CẢM ƠN ====================
export const ThankYouSection = () => (
  <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80" 
        alt="Thank you background" 
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 to-red-800/90" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
      <motion.div
        initial={{ opacity:  0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
          <Star className="w-10 h-10 text-red-900" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white font-serif mb-6">
          Cảm ơn Thầy/Cô và các bạn <br/>
          <span className="text-yellow-400">đã lắng nghe! </span>
        </h2>
        
        <div className="w-32 h-1 bg-yellow-500 mx-auto rounded-full mb-8" />
        
        <p className="text-white/80 text-xl">
          Rất mong nhận được ý kiến đóng góp từ Thầy/Cô và các bạn. 
        </p>

        {/* Team info */}
        {/* <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
            <span className="text-yellow-400 font-bold">Người 1:</span>
            <span className="text-white ml-2">Mở đầu + Mục 1, 2</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
            <span className="text-yellow-400 font-bold">Người 2:</span>
            <span className="text-white ml-2">Mục 3, 4</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
            <span className="text-yellow-400 font-bold">Người 3:</span>
            <span className="text-white ml-2">Phần II</span>
          </div>
        </div> */}
      </motion.div>
    </div>
  </section>
);