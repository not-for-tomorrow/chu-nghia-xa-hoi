import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Coins, Gavel, BookOpen, Users, ChevronLeft, ChevronRight, MoveRight, Sparkles } from "lucide-react";

// DỮ LIỆU ĐẶC ĐIỂM (4 Lĩnh vực)
const characteristicsData = [
  {
    id:  1,
    title: "Kinh tế",
    subtitle: "Nền kinh tế nhiều thành phần",
    icon:  Coins,
    color: "bg-blue-600",
    lightColor: "bg-blue-100",
    textColor: "text-blue-600",
    content: "Tồn tại nền kinh tế nhiều thành phần, trong đó có các thành phần đối lập nhau.",
    highlight: "Vừa hợp tác vừa đấu tranh",
    detail: "Ví dụ:  Tại Nga thời Lênin có 5 thành phần (Gia trưởng, Hàng hóa nhỏ, Tư bản tư nhân, Tư bản nhà nước, Xã hội chủ nghĩa).",
    image: "https://images.unsplash. com/photo-1460925895917-afdab827c52f?w=600&q=80"
  },
  {
    id: 2,
    title:  "Chính trị",
    subtitle:  "Chuyên chính vô sản",
    icon:  Gavel,
    color: "bg-red-600",
    lightColor: "bg-red-100",
    textColor:  "text-red-600",
    content: "Thiết lập và tăng cường chuyên chính vô sản.",
    highlight: "Trấn áp và Xây dựng",
    detail: "Giai cấp công nhân nắm và sử dụng quyền lực nhà nước để trấn áp giai cấp tư sản và xây dựng xã hội mới.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80"
  },
  {
    id: 3,
    title: "Tư tưởng – Văn hóa",
    subtitle: "Đan xen cũ và mới",
    icon: BookOpen,
    color: "bg-amber-600",
    lightColor: "bg-amber-100",
    textColor:  "text-amber-600",
    content: "Tồn tại nhiều tư tưởng khác nhau, chủ yếu là cuộc đấu tranh giữa tư tưởng vô sản và tư tưởng tư sản.",
    highlight: "Xây dựng văn hóa mới",
    detail: "Từng bước xây dựng nền văn hóa XHCN, tiếp thu giá trị văn hóa dân tộc và tinh hoa nhân loại.",
    image: "https://images.unsplash. com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
  },
  {
    id: 4,
    title: "Xã hội",
    subtitle: "Cơ cấu xã hội phức tạp",
    icon: Users,
    color: "bg-green-600",
    lightColor: "bg-green-100",
    textColor:  "text-green-600",
    content: "Tồn tại nhiều giai cấp, tầng lớp xã hội.  Còn sự khác biệt giữa thành thị - nông thôn, lao động trí óc - chân tay.",
    highlight: "Liên minh công - nông",
    detail: "Các giai cấp, tầng lớp xã hội vừa hợp tác vừa đấu tranh với nhau trong khuôn khổ liên minh công - nông.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
  },
];

export const TransitionDetailsSection = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const activeData = characteristicsData[activeEventIndex];

  return (
    <section id="features" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity:  1, y:  0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Mục 3</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mt-2 mb-4">
            Đặc điểm cơ bản <span className="text-red-600">thời kỳ quá độ</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"/>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            4 lĩnh vực cơ bản với những đặc điểm đan xen giữa cái cũ và cái mới
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {characteristicsData. map((item, index) => (
            <button
              key={item. id}
              onClick={() => setActiveEventIndex(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === activeEventIndex 
                  ? `${item.color} text-white shadow-lg scale-105` 
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <item.icon size={18} />
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEventIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto min-h-[300px]">
                  <img 
                    src={activeData.image} 
                    alt={activeData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${activeData.color} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <activeData.icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
                      <h3 className="text-3xl font-bold">{activeData.title}</h3>
                      <p className="text-white/80 mt-2">{activeData. subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  <div className={`inline-flex items-center gap-2 ${activeData. lightColor} ${activeData.textColor} px-4 py-2 rounded-full text-sm font-bold mb-6`}>
                    <Sparkles size={16} />
                    Lĩnh vực {activeData.title}
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 leading-relaxed">
                    {activeData.content}
                  </h4>

                  <div className={`${activeData.lightColor} border-l-4 ${activeData.color. replace('bg-', 'border-')} p-6 rounded-r-xl mb-6`}>
                    <h5 className={`${activeData.textColor} font-bold mb-2 flex items-center gap-2`}>
                      ✨ Điểm nhấn:  {activeData.highlight}
                    </h5>
                    <p className="text-gray-700 leading-relaxed">
                      {activeData.detail}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <button 
                      onClick={() => setActiveEventIndex(prev => prev === 0 ? characteristicsData.length - 1 :  prev - 1)}
                      className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Trước</span>
                    </button>
                    <div className="flex gap-2">
                      {characteristicsData.map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === activeEventIndex ?  activeData.color :  'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <button 
                      onClick={() => setActiveEventIndex(prev => prev === characteristicsData. length - 1 ? 0 :  prev + 1)}
                      className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <span>Tiếp</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* KẾT LUẬN:  CHIẾC CẦU NỐI */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-red-800 via-red-900 to-red-800 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-8 uppercase tracking-wider">
                🌉 Hình tượng "Chiếc cầu nối"
              </h3>
              
              <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-lg font-bold mb-8">
                <span className="bg-gray-800/50 px-6 py-3 rounded-xl opacity-60 line-through decoration-red-400 decoration-2">
                  Xã hội Tư bản
                </span>
                <MoveRight className="w-8 h-8 text-yellow-500 animate-pulse hidden sm: block" />
                <span className="bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border-2 border-yellow-500 text-yellow-300">
                  ⏳ Thời kỳ quá độ
                </span>
                <MoveRight className="w-8 h-8 text-yellow-500 animate-pulse hidden sm:block" />
                <span className="bg-green-500/20 px-6 py-3 rounded-xl border border-green-400 text-green-300">
                  Xã hội Chủ nghĩa ✨
                </span>
              </div>
              
              <p className="text-white/90 max-w-3xl mx-auto text-lg italic leading-relaxed">
                "Không còn là bờ bên này, nhưng cũng chưa hoàn toàn sang đến bờ bên kia.  
                Là quá trình <strong className="text-yellow-300">đan xen, đấu tranh quyết liệt</strong> để cái mới dần thay thế cái cũ."
              </p>
            </div>
          </div>
        </motion. div>
      </div>
    </section>
  );
};