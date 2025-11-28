import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-green-800 text-center mb-10">
          Tentang Website Ini
        </h2>

        {/* ABOUT CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://i.pinimg.com/1200x/df/5f/d4/df5fd439090fb10dbd24fe0348163a16.jpg"
            alt="About Website"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Apa Itu Website Ini?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Website ini dibuat sebagai platform informasi dan edukasi 
              mengenai kegiatan lingkungan, program sosial, serta berbagai 
              aktivitas yang mendukung pembangunan lingkungan yang berkelanjutan.
              Tujuannya agar masyarakat bisa melihat, memahami, dan ikut 
              berpartisipasi dalam kegiatan yang dilaksanakan.
            </p>

            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Tujuan Website
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Menyediakan informasi lengkap mengenai program yang dijalankan.</li>
              <li>Memudahkan masyarakat mengikuti acara dan kegiatan.</li>
              <li>Menyebarkan edukasi tentang lingkungan dan keberlanjutan.</li>
              <li>Menjadi pusat dokumentasi dalam bentuk galeri foto dan video.</li>
            </ul>

            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Kenapa Web Ini Dibangun?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Web ini dibuat untuk menjawab kebutuhan penyampaian informasi yang 
              cepat, rapi, dan mudah diakses oleh masyarakat umum maupun peserta 
              kegiatan. Dengan adanya web ini, setiap program dapat dilihat secara 
              detail tanpa harus datang ke lokasi.
            </p>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-green-800 text-center mb-6">
            Hubungi Kami
          </h2>


          {/* CONTACT FORM */}
          <div className="mt-12 bg-green-50 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">

            <form className="space-y-5">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                  placeholder="Nama lengkap..."
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                  placeholder="Email kamu..."
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                  placeholder="Tulis pesanmu..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-all"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
