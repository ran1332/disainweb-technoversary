import React from "react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Penanaman Pohon Nasional",
    desc: "Gerakan besar penanaman ribuan bibit di berbagai kota Indonesia.",
    img: "https://i.pinimg.com/736x/4b/c9/94/4bc994ffafb44e0ac5dfc40d1ffaef41.jpg",
    link: "/program/penanaman-nasional",
  },
  {
    title: "Restorasi Hutan Kalimantan",
    desc: "Program pemulihan kawasan hutan yang rusak akibat kebakaran.",
    img: "https://i.pinimg.com/736x/66/e9/9f/66e99fac3739b8313e08491890850bf9.jpg",
    link: "/program/restorasi-kalimantan",
  },
  {
    title: "Aksi Sungai Bersih",
    desc: "Mengajak relawan membersihkan sungai dari sampah plastik.",
    img: "https://i.pinimg.com/1200x/70/fd/b1/70fdb198cfe15d77da2b95da6fc7eab8.jpg",
    link: "/program/aksi-sungai",
  },
];

function ProgramCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-green-700 text-center mb-14">
        Program Kegiatan Pelingku 2025
      </h2>

      {/* LIST PROGRAM */}
      <div className="grid md:grid-cols-3 gap-10 mb-20">
        {programs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>

              {/* FIXED BUTTON */}
              <Link
                to={item.link}
                className="inline-block px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all"
              >
                Lihat Program
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION DONASI BESAR */}
      <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
          alt="Hutan hijau"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Jadilah Bagian dari Perubahan
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mb-8 drop-shadow">
            Setiap donasi Anda membantu penanaman bibit pohon, perawatan tanaman,
            hingga edukasi lingkungan untuk masyarakat.
          </p>

          <Link
            to="/donasi"
            className="bg-green-600 hover:bg-green-700 transition px-10 py-4 text-lg font-semibold rounded-xl shadow-lg"
          >
            Donasi Sekarang 🌱
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramCards;
