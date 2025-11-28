import React from "react";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* YOUTUBE BACKGROUND */}
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/mSAH2CfyWrc?autoplay=1&mute=1&controls=0&loop=1&playlist=mSAH2CfyWrc&showinfo=0&modestbranding=1"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* GRADIENT BAWAH AGAR TEKS TERBACA */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/80"></div>

      {/* TEXT DI DALAM VIDEO (POSISI DI BAGIAN BAWAH) */}
      <div className="absolute bottom-16 w-full flex flex-col items-center px-6 text-center z-10">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-wide">
          Program Penghijauan Pelingku 2025
        </h1>

        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mt-4 drop-shadow-md">
          Gerakan bersama untuk menghadirkan lingkungan yang lebih hijau dan berkelanjutan.
        </p>
      </div>
    </section>
  );
}
