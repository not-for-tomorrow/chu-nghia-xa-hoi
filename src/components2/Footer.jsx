// components/Footer.jsx
import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-red-900 via-red-950 to-black text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
      
      {/* Star pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.5'%3E%3Cpath d='M30 5l2.5 5.1 5.6.8-4 3.9.9 5.5L30 18l-5 2.3.9-5.5-4-3.9 5.6-.8L30 5z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo */}
              <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-900" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400">
                  Chủ nghĩa Mác - Lênin
                </h3>
                <span className="text-xs text-yellow-200/70">CNXH & Thời kỳ quá độ</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Dự án số hóa và phổ biến Chủ nghĩa Mác - Lênin đến với thế hệ trẻ 
              thông qua công nghệ 3D hiện đại, giúp việc học tập trở nên sinh động và hấp dẫn hơn.
            </p>

            {/* Quote */}
            <div className="p-4 bg-white/5 rounded-xl border border-yellow-500/20">
              <p className="text-yellow-100 italic text-sm">
                "Việc gì lợi cho dân ta phải hết sức làm. Việc gì hại đến dân ta phải hết sức tránh."
              </p>
              <p className="text-yellow-400 text-xs mt-2">— Hồ Chí Minh</p>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {[
                { href: "https://www.facebook.com/nguyen.huy.510844/", icon: "M22.676 0H1.326C.596 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.797.142v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.327C24 .594 23.405 0 22.676 0" },
                { href: "https://www.youtube.com/@nguyenhuy7027", icon: "M23.5 6.2a4.9 4.9 0 0 0-3.4-3.4C17.9 2.2 12 2.2 12 2.2s-5.9 0-8.1.6A4.9 4.9 0 0 0 .5 6.2 51.6 51.6 0 0 0 0 12a51.6 51.6 0 0 0 .5 5.8 4.9 4.9 0 0 0 3.4 3.4c2.2.6 8.1.6 8.1.6s5.9 0 8.1-.6a4.9 4.9 0 0 0 3.4-3.4A51.6 51.6 0 0 0 24 12a51.6 51.6 0 0 0-.5-5.8ZM9.6 15.5v-7L16 12l-6.4 3.5Z" },
                { href: "https://github.com/not-for-tomorrow", icon: "M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3.2 1.5 4 .9.1-.9.5-1.5.8-1.8-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 0 1 1.3-3.2 4.3 4.3 0 0 1 .1-3.1s1-.3 3.3 1.3a11.2 11.2 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.4 1 .4 2.1.1 3.1a4.7 4.7 0 0 1 1.3 3.2c0 4.7-2.9 5.7-5.6 6 .5.4.9 1.2.9 2.4V23c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" },
                { href: "https://x.com/NNH49946258", icon: "M18.244 2H21.3l-6.52 7.45L22.5 22h-6.73l-5.27-6.86L4.35 22H1.29l7-8-7-12h6.73l4.77 6.22L18.244 2Zm-1.18 18h1.86L7.08 4H5.14l11.92 16Z" },
                { href: "https://www.linkedin.com/in/nguy%E1%BB%85n-huy-83a0ab29a/", icon: "M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm-.75 6.5h3.01V21H4.23V10ZM10 10h2.88v1.5h.04c.4-.8 1.38-1.64 2.84-1.64 3.03 0 3.6 2 3.6 4.62V21h-3v-4.6c0-1.1 0-2.52-1.54-2.52s-1.78 1.2-1.78 2.44V21H10V10Z" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-red-900 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              {
                title: "Nội dung",
                links: ["Sổ tay 3D", "Bookmark", "Tài liệu", "Video"]
              },
              // {
              //   title: "Tư tưởng",
              //   links: ["Tiểu sử Bác", "Các bài viết", "Di chúc", "Câu nói"]
              // },
              {
                title: "Học tập",
                links: ["Hướng dẫn", "Bài giảng", "Câu hỏi", "Thảo luận"]
              },
              {
                title: "Liên hệ",
                links: ["Về chúng tôi", "Đóng góp", "Hỗ trợ", "Góp ý"]
              }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-yellow-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>© {year} Chủ nghĩa Mác - Lênin. Dự án phi lợi nhuận.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Điều khoản</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Bảo mật</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Liên hệ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  