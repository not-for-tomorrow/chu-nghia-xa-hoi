import { motion } from "framer-motion";
import { Quote, GitMerge, AlertCircle, MapPin, Flag } from "lucide-react";

// ==================== PHẦN II HEADER ====================
export const PartTwoHeader = () => (
  <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 relative overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80" 
        alt="Revolution" 
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-800/90" />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
      <motion.div
        initial={{ opacity:  0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-yellow-400 text-lg font-medium uppercase tracking-widest">Phần II</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white font-serif mt-4">
          Thời kỳ Quá độ
        </h2>
        <p className="text-white/80 mt-4 text-lg">Lên Chủ nghĩa Xã hội</p>
        <div className="w-32 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
      </motion.div>
    </div>
  </section>
);

// ==================== 1. QUAN ĐIỂM CỦA MÁC VÀ LÊNIN ====================
export const TransitionViewsSection = () => (
  <section id="views" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <motion. div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center mb-16"
      >
        <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Mục 1</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mt-2">
          Quan điểm của <span className="text-red-600">C. Mác</span> và <span className="text-red-600">V.I. Lênin</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-4"/>
      </motion. div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* C. Mác */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80" 
                alt="Karl Marx" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/50 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-bold text-white">C. Mác</h3>
                <p className="text-white/80 text-sm">Phê phán cương lĩnh Gôta</p>
              </div>
            </div>
            <div className="p-6">
              <Quote className="w-10 h-10 text-red-200 mb-4" />
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "Giữa xã hội TBCN và xã hội CSCN là một thời kỳ <strong className="text-red-600">cải biến cách mạng</strong>...  Thích ứng với thời kỳ ấy là một thời kỳ quá độ chính trị, với nhà nước mang hình thức <strong className="text-red-600">chuyên chính vô sản</strong>."
              </p>
            </div>
          </div>
        </motion.div>

        {/* V.I.  Lênin */}
        <motion. div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=80" 
                alt="Lenin" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/50 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-bold text-white">V.I.  Lênin</h3>
                <p className="text-white/80 text-sm">Phát triển học thuyết Mác</p>
              </div>
            </div>
            <div className="p-6">
              <Quote className="w-10 h-10 text-red-200 mb-4" />
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "Về lý luận, không thể nghi ngờ gì được rằng giữa chủ nghĩa tư bản và chủ nghĩa cộng sản, có một <strong className="text-red-600">thời kỳ quá độ nhất định</strong>."
              </p>
            </div>
          </div>
        </motion. div>
      </div>

      {/* Định nghĩa */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white text-center"
      >
        <p className="text-lg leading-relaxed">
          👉 Đây là thời kỳ <strong className="text-yellow-300">cải biến sâu sắc và toàn diện</strong>, bắt đầu từ khi giai cấp công nhân giành chính quyền cho đến khi xây dựng xong những cơ sở của chủ nghĩa xã hội. 
        </p>
      </motion. div>
    </div>
  </section>
);

// ==================== 2. TÍNH TẤT YẾU VÀ LOẠI HÌNH ====================
export const TransitionTypesSection = () => (
  <section id="types" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion. div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center mb-16"
      >
        <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Mục 2</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mt-2">
          Tính tất yếu & <span className="text-red-600">Loại hình quá độ</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-4"/>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Tính tất yếu */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity:  1, x:  0 }}
          viewport={{ once:  true }}
          className="lg:col-span-5"
        >
          <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-200 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Tính tất yếu</h3>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" 
              alt="Process" 
              className="w-full h-40 object-cover rounded-xl mb-6"
            />

            <p className="text-gray-700 text-lg leading-relaxed">
              Thời kỳ quá độ là <strong className="text-amber-700">không thể bỏ qua</strong> vì xã hội mới không thể hình thành ngay lập tức từ xã hội cũ. 
            </p>

            <div className="mt-6 bg-white p-4 rounded-xl border border-amber-200">
              <p className="text-gray-600 text-sm">
                Cần thời gian để cải biến sâu sắc, triệt để trên mọi lĩnh vực đời sống xã hội. 
              </p>
            </div>
          </div>
        </motion. div>

        {/* Hai loại hình */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg: col-span-7"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center">
                <GitMerge className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold">Hai loại hình quá độ</h3>
            </div>

            <div className="space-y-6">
              {/* Quá độ trực tiếp */}
              <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-400 mb-2">Quá độ TRỰC TIẾP</h4>
                    <p className="text-gray-300">
                      Từ các nước TBCN <strong className="text-white">đã phát triển</strong> đi lên chủ nghĩa cộng sản. 
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-blue-300 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>Các nước Tây Âu phát triển</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quá độ gián tiếp */}
              <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-red-400 mb-2">Quá độ GIÁN TIẾP</h4>
                    <p className="text-gray-300">
                      Từ các nước <strong className="text-white">chưa trải qua CNTB phát triển</strong> (tiền tư bản) đi lên CNXH.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold">
                      <Flag className="w-4 h-4" />
                      Việt Nam thuộc loại hình này
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);