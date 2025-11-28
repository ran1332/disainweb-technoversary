import React from "react";
import { Link } from "react-router-dom";

export default function RestorasiKalimantan() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <img
        src="https://i.pinimg.com/736x/66/e9/9f/66e99fac3739b8313e08491890850bf9.jpg"
        alt="Restorasi Kalimantan"
        className="w-full h-72 object-cover rounded-2xl mb-10"
      />

      <h1 className="text-4xl font-extrabold text-green-700 mb-6">
        Restorasi Hutan Kalimantan
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Program ini berfokus pada pemulihan kawasan hutan yang rusak akibat
        kebakaran serta aktivitas ilegal. Relawan membantu menanam bibit,
        memantau kondisi lahan, dan memberikan edukasi ke masyarakat sekitar.
      </p>

      <Link
        to="/program/daftar-relawan?event=restorasi-kalimantan"
        className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800"
      >
        Daftar Jadi Relawan 🌱
      </Link>
    </div>
  );
}
