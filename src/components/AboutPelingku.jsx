// src/components/AboutPelingku.jsx
import React from "react";

export default function AboutPelingku() {
  return (
    <section className="relative py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Gambar kiri */}
          <div className="order-1 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="https://i.pinimg.com/736x/59/83/b8/5983b8612bb3838fe8487d4f3350bf31.jpg"
                alt="Sejarah Pelingku - ilustrasi"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="mt-4 text-sm text-gray-500">
              Foto: aktivitas komunitas Pelingku — aksi bersih-bersih & edukasi lingkungan.
            </div>
          </div>

          {/* Teks kanan */}
          <div className="order-2 lg:order-2">
            <div className="mb-4">
              <div className="inline-block h-1 w-14 bg-emerald-400 rounded" />
            </div>

            <h2 className="text-4xl font-extrabold mb-4">Sejarah Pelingku</h2>

            <p className="text-lg text-gray-600 mb-6 max-w-xl">
              Pelingku (Pelihara Lingkungan Kita) lahir dari kepedulian sekelompok mahasiswa 
              dan warga terhadap menurunnya kebersihan lingkungan. Dimulai sebagai program 
              bersih-bersih kampung, Pelingku kini berkembang sebagai gerakan edukasi, 
              penanaman pohon, hingga pengelolaan sampah terpadu.
            </p>

            {/* Timeline */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold">2019 — Awal Gerakan</div>
                  <div className="text-gray-500">
                    Dimulai dari kegiatan bersih-bersih dan edukasi kecil untuk masyarakat sekitar.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold">2021 — Program Penanaman</div>
                  <div className="text-gray-500">
                    Berkolaborasi dengan sekolah dan komunitas menanam ratusan pohon.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold">2023 — Bank Sampah</div>
                  <div className="text-gray-500">
                    Program bank sampah dan workshop daur ulang mulai dijalankan secara rutin.
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 max-w-md">
              <div className="bg-emerald-50 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-500">Pohon Ditanam</div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold">1200+</div>
                <div className="text-xs text-gray-500">Relawan</div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold">80+</div>
                <div className="text-xs text-gray-500">Workshop</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 items-center">
              <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold shadow">
                Bergabung Sekarang
              </button>

              <button className="px-6 py-3 border border-emerald-300 text-emerald-700 rounded-xl font-semibold bg-white/60 backdrop-blur">
                Pelajari Gerakan Kami
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
