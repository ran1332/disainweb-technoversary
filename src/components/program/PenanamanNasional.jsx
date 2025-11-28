import React from "react";
import { Link } from "react-router-dom";

export default function PenanamanNasional() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <img
        src="https://i.pinimg.com/736x/4b/c9/94/4bc994ffafb44e0ac5dfc40d1ffaef41.jpg"
        alt="Penanaman Nasional"
        className="w-full h-72 object-cover rounded-2xl mb-10"
      />

      <h1 className="text-4xl font-extrabold text-green-700 mb-6">
        Penanaman Pohon Nasional
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Program ini merupakan gerakan besar untuk menanam ribuan bibit di berbagai
        kota Indonesia. Bertujuan mengurangi polusi udara dan meningkatkan
        kualitas lingkungan hidup masyarakat.
      </p>

      <p className="text-gray-700 leading-relaxed mb-10">
        Relawan akan mendapatkan pengalaman langsung dalam kegiatan penghijauan,
        dokumentasi, edukasi lingkungan, dan pengelolaan bibit tanaman.
      </p>

      <Link
        to="/program/daftar-relawan?event=penanaman-nasional"
        className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800"
      >
        Daftar Jadi Relawan 🌱
      </Link>
    </div>
  );
}
