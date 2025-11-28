import React from "react";
import { Link } from "react-router-dom";

export default function AksiSungaiBersih() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <img
        src="https://i.pinimg.com/1200x/70/fd/b1/70fdb198cfe15d77da2b95da6fc7eab8.jpg"
        alt="Aksi Sungai Bersih"
        className="w-full h-72 object-cover rounded-2xl mb-10"
      />

      <h1 className="text-4xl font-extrabold text-green-700 mb-6">
        Aksi Sungai Bersih
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Program ini mengajak masyarakat dan relawan untuk membersihkan sungai
        dari sampah plastik serta memberikan edukasi tentang bahaya limbah.
      </p>

      <Link
        to="/program/daftar-relawan?event=aksi-sungai"
        className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800"
      >
        Daftar Jadi Relawan 🌱
      </Link>
    </div>
  );
}
