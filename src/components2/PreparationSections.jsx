import { motion } from "framer-motion";
import { GitBranch, Database, Globe, Heart, Shield, Layers, Users, Zap, TrendingUp, AlertTriangle, Quote, ArrowRight } from "lucide-react";

// ==================== 2. GIAI ĐOẠN HÌNH THÁI ====================
export const StagesSection = () => (
  <section id="stages" className="py-20 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity:  1, y:  0 }} 
        viewport={{ once: true }} 
        className="text-center mb-16"
      >
        <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Mục 2</span>
        <h2 className="text-3xl md: text-4xl font-bold text-gray-900 font-serif mb-4 mt-2">
          Giai đoạn của hình thái KT-XH <br/>
          <span className="text-red-600">Cộng sản chủ nghĩa</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"/>
      </motion.div>

      {/* Quote của Mác */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16"
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600 relative">
          <Quote className="absolute top-4 right-4 text-red-100 w-16 h-16" />
          <p className="text-xl text-gray-700 italic leading-relaxed relative z-10">
            "Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một <strong className="text-red-600">thời kỳ quá độ</strong>."
          </p>
          <p className="text-red-600 font-bold mt-4">— C. Mác</p>
        </div>
      </motion.div>

      {/* Sơ đồ giai đoạn - Thiết kế mới */}
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-gray-300 via-red-500 to-yellow-500 rounded-full transform -translate-y-1/2" />
        
        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {/* TBCN */}
          <motion.div
            initial={{ opacity:  0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-200 p-8 rounded-2xl border-2 border-gray-300 relative">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80" 
                alt="Capitalism" 
                className="w-full h-32 object-cover rounded-xl mb-4 opacity-60"
              />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                Xã hội cũ
              </span>
              <h4 className="text-xl font-bold text-gray-700 mt-2">Tư bản Chủ nghĩa</h4>
              <p className="text-gray-500 text-sm mt-2">Chế độ chiếm hữu tư nhân</p>
            </div>
            <ArrowRight className="hidden lg:block w-8 h-8 text-gray-400 mx-auto mt-4" />
          </motion.div>

          {/* CNXH - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center lg:-mt-8"
          >
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-2xl shadow-2xl relative transform lg:scale-110 border-4 border-yellow-400">
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80" 
                alt="Socialism" 
                className="w-full h-32 object-cover rounded-xl mb-4 opacity-70"
              />
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-red-900 px-4 py-1. 5 rounded-full text-xs font-bold uppercase shadow-lg">
                Giai đoạn thấp
              </span>
              <h4 className="text-2xl font-bold text-white mt-2">Chủ nghĩa Xã hội</h4>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg mt-4 inline-block">
                <span className="text-yellow-300 font-semibold text-sm">⏳ Thời kỳ quá độ</span>
              </div>
              <p className="text-white/80 text-sm mt-4 italic">"Vẫn còn mang dấu vết của xã hội cũ"</p>
            </div>
          </motion.div>

          {/* CNCS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay:  0.4 }}
            className="text-center"
          >
            <ArrowRight className="hidden lg:block w-8 h-8 text-yellow-500 mx-auto mb-4 rotate-180" />
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-2xl border-2 border-yellow-400 relative">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" 
                alt="Communism" 
                className="w-full h-32 object-cover rounded-xl mb-4 opacity-70"
              />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                Giai đoạn cao
              </span>
              <h4 className="text-xl font-bold text-yellow-800 mt-2">Chủ nghĩa Cộng sản</h4>
              <p className="text-yellow-700 text-sm mt-2">Xã hội lý tưởng</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

// ==================== 3. ĐIỀU KIỆN RA ĐỜI ====================
export const ConditionsSection = () => (
  <section id="conditions" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center mb-16"
      >
        <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Mục 3</span>
        <h2 className="text-3xl md: text-4xl font-bold text-gray-900 font-serif mt-2">
          Điều kiện <span className="text-red-600">ra đời</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-4"/>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Điều kiện Kinh tế */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity:  1, x:  0 }} 
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-blue-600 text-sm font-semibold uppercase">Thứ nhất</span>
                <h3 className="text-2xl font-bold text-gray-900">Điều kiện Kinh tế</h3>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" 
              alt="Economy" 
              className="w-full h-40 object-cover rounded-xl mb-6"
            />

            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">Lực lượng sản xuất phát triển mang tính <strong className="text-blue-600">xã hội hóa</strong> cao. </span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-gray-700">Mâu thuẫn gay gắt với chế độ <strong className="text-red-600">chiếm hữu tư nhân</strong> TBCN.</span>
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-xl mt-6 border-l-4 border-blue-500">
              <p className="text-gray-600 italic text-sm">
                "Khi quan hệ sản xuất trở thành <strong>xiềng xích</strong>...  thời đại cách mạng xã hội bắt đầu."
              </p>
              <p className="text-blue-600 font-semibold text-sm mt-2">— C. Mác & Ph. Ăngghen</p>
            </div>
          </div>
        </motion. div>

        {/* Điều kiện Chính trị - Xã hội */}
        <motion. div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-red-600 text-sm font-semibold uppercase">Thứ hai</span>
                <h3 className="text-2xl font-bold text-gray-900">Chính trị - Xã hội</h3>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80" 
              alt="Revolution" 
              className="w-full h-40 object-cover rounded-xl mb-6"
            />

            <ul className="space-y-4">
              {[
                { text: "Sự trưởng thành vượt bậc của Giai cấp công nhân (con đẻ của đại công nghiệp).", keyword: "Giai cấp công nhân" },
                { text: "Đấu tranh giai cấp phát triển thành Cách mạng vô sản.", keyword: "Cách mạng vô sản" },
                { text:  "Thiết lập nhà nước Chuyên chính vô sản để xây dựng xã hội mới.", keyword: "Chuyên chính vô sản" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700" dangerouslySetInnerHTML={{ 
                    __html: item.text. replace(item.keyword, `<strong class="text-red-600">${item. keyword}</strong>`) 
                  }} />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ==================== 4. ĐẶC TRƯNG BẢN CHẤT ====================
export const CharacteristicsSection = () => (
  <section id="characteristics" className="py-20 bg-gray-900 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80" 
        alt="Background" 
        className="w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-gray-900/95 to-gray-900" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity:  0, y:  20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once:  true }} 
        className="text-center mb-16"
      >
        <span className="text-yellow-400 font-semibold uppercase tracking-wider text-sm">Mục 4</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4 mt-2">
          Đặc trưng <span className="text-yellow-400">bản chất</span>
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"/>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          6 đặc trưng cơ bản của Chủ nghĩa Xã hội theo C. Mác, Ph. Ăngghen và V. I. Lênin
        </p>
      </motion.div>

      <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            icon: Heart, 
            title: "Mục tiêu Nhân văn", 
            desc: "Giải phóng giai cấp, xã hội, con người.  Tạo điều kiện phát triển toàn diện.",
            color: "from-pink-500 to-red-500",
            image:  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80"
          },
          { 
            icon:  Database, 
            title: "Kinh tế", 
            desc:  "Phát triển cao dựa trên LLSX hiện đại & chế độ công hữu về TLSX.",
            color: "from-blue-500 to-cyan-500",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
          },
          { 
            icon:  Layers, 
            title: "Chính trị", 
            desc: "Do nhân dân lao động làm chủ.",
            color: "from-purple-500 to-indigo-500",
            image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80"
          },
          { 
            icon: Shield, 
            title: "Nhà nước", 
            desc: "Kiểu mới, mang bản chất GCCN, đại diện cho lợi ích nhân dân.",
            color: "from-emerald-500 to-green-500",
            image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=400&q=80"
          },
          { 
            icon: GitBranch, 
            title: "Văn hóa", 
            desc:  "Phát triển cao, kế thừa tinh hoa dân tộc & nhân loại.",
            color: "from-amber-500 to-orange-500",
            image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?w=400&q=80"
          },
          { 
            icon: Globe, 
            title: "Dân tộc & Quốc tế", 
            desc: "Bình đẳng, đoàn kết giữa các dân tộc, hữu nghị quốc tế.",
            color: "from-cyan-500 to-blue-500",
            image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=80"
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-500"
          >
            {/* Image */}
            <div className="h-32 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item. title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50`} />
            </div>

            <div className="p-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center -mt-12 relative z-10 shadow-lg mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Kết luận Phần I */}
      <motion.div
        initial={{ opacity:  0, y:  30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-yellow-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 text-center"
      >
        <p className="text-xl text-white leading-relaxed">
          👉 Như vậy, chủ nghĩa xã hội không phải là một khái niệm trừu tượng, mà là một <strong className="text-yellow-400">giai đoạn lịch sử – xã hội</strong> có cơ sở khoa học và thực tiễn rõ ràng.
        </p>
      </motion.div>
    </div>
  </section>
);