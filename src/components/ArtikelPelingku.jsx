import { Link } from "react-router-dom";

export default function ArtikelPelingku() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto text-gray-700 leading-relaxed space-y-32">

      {/* SECTION 1 — TEKS KIRI, GAMBAR KANAN */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-green-800 mb-4">
            Selamatkan Lingkungan, Selamatkan Masa Depan
          </h1>
          <p className="text-lg">
            Bumi kita semakin tua. Hutan ditebang, udara tercemar, dan satwa
            kehilangan habitatnya. Namun, masih ada harapan...
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1523978591478-c753949ff840"
            alt="Tanam pohon"
            className="w-full h-80 md:h-[420px] object-cover"
          />
        </div>
      </div>

      {/* SECTION 2 — GAMBAR KIRI, TEKS KANAN */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-xl order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Relawan alam"
            className="w-full h-80 md:h-[420px] object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Ayo Bergerak Bersama!
          </h2>
          <p className="text-lg">
            Pelingku hadir untuk menggerakkan aksi nyata: mengajak masyarakat...
          </p>
        </div>
      </div>

      {/* SECTION 3 — DONASI */}
      <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl">
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
            Setiap donasi Anda digunakan untuk penanaman bibit pohon...
          </p>

          {/* 🔥 Tombol Donasi diarahkan ke /donasi */}
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
