import { motion } from "framer-motion";
// FIX: Import các icon mạng xã hội từ lucide-react thay vì dùng thẻ <svg> dài dòng lỗi
import { Github, Facebook, Youtube } from "lucide-react";

const teamMembers = [
  {
    name: "Nguyễn Nhất Huy",
    studentId: "SE184256",
    role: "Team Leader, Full-stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/116622843?v=4",
    description: "Đa năng trong cả frontend và backend. Luôn học hỏi công nghệ mới để nâng cao kỹ năng.",
    skills: ["React", "Node.js", "Project Management"],
  },
  {
    name: "Nguyễn Hoàng Thiên",
    studentId: "SE182297",
    role: "Full-stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/235820068?v=4",
    description: "Chuyên về giao diện người dùng và trải nghiệm người dùng. Yêu thích thiết kế đẹp và hiệu suất cao.",
    skills: ["React", "Java", "Spring Boot"],
  },
  {
    name: "Dương Hoàng Long",
    studentId: "SE182281",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ManhHung&backgroundColor=ffd5dc",
    description: "Tập trung vào xây dựng hệ thống backend vững chắc và tối ưu hóa hiệu suất ứng dụng.",
    skills: ["Java", "Spring Boot", "Database"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Đội Ngũ <span className="text-red-600">Phát Triển</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi là nhóm sinh viên đam mê công nghệ, cùng nhau xây dựng những sản phẩm chất lượng
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.studentId}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative w-full max-w-[320px] flex-shrink-0"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 h-full flex flex-col">
                {/* Card Header */}
                <div className="h-24 bg-gradient-to-r from-red-600 to-red-800 relative flex-shrink-0">
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="pt-14 pb-6 px-6 text-center flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-semibold text-sm mb-1">{member.role}</p>
                  <p className="text-gray-500 text-xs font-mono mb-4">{member.studentId}</p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]">
                    {member.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* FIX: Social Icons dùng Lucide React - Sạch sẽ, không lỗi SVG */}
                    <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                      <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors">
                        <Github size={18} />
                      </motion.a>
                      <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                        <Facebook size={18} />
                      </motion.a>
                      <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors">
                        <Youtube size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-lg px-8 py-6 border border-red-100">
            <p className="text-gray-700 italic text-lg">"Cùng nhau, chúng tôi biến ý tưởng thành hiện thực"</p>
            <p className="text-red-600 font-semibold mt-2">— FPT University Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;