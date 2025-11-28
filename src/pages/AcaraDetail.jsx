import { Link, useParams } from "react-router-dom";

export default function AcaraDetail() {
  const { slug } = useParams(); 

  // Contoh database kecil (bisa dibuat API nanti)
  const acaraData = {
    "gerakan-hijau-bersama": {
      title: "Gerakan Hijau Bersama",
      category: "Penanaman Pohon",
      date: "10 November 2025",
      location: "Desa Sukamakmur, Bogor",
      participants: "120 Relawan",
      headerImg:
        "https://i.pinimg.com/736x/8b/c2/a4/8bc2a48011dfe7d82ae8f7b215bf69ce.jpg",
      content: `
        Gerakan Hijau Bersama merupakan kegiatan tahunan yang dilakukan sebagai
        bentuk kepedulian masyarakat terhadap lingkungan.

        Pada acara ini, para relawan menanam lebih dari 500 bibit pohon di area
        perbukitan yang sebelumnya mengalami penggundulan. Selain penanaman,
        peserta juga diberikan edukasi mengenai perawatan pohon dan pentingnya
        menjaga ekosistem hutan untuk keberlanjutan hidup.

        Acara ini mendapat antusiasme besar dari warga sekitar dan komunitas pecinta alam.
        Diharapkan kegiatan ini terus menjadi inspirasi untuk gerakan hijau lainnya.
      `,
      gallery: [
        "https://i.pinimg.com/1200x/d5/f0/4f/d5f04fa672faaf42a1364b14ef3d5b75.jpg",
        "https://i.pinimg.com/1200x/96/32/25/963225fb3ec4ccf54648edd453076db4.jpg",
        "https://i.pinimg.com/736x/fb/e3/f4/fbe3f4cb5510867b9e20fb144e256952.jpg",
      ],
    },

    // Kamu bisa tambah acara lain di sini
    "edukasi-lingkungan": {
      title: "Edukasi Pengelolaan Sampah",
      category: "Sosialisasi Lingkungan",
      date: "2 Desember 2025",
      location: "SMAN 3 Jakarta",
      participants: "300 Siswa",
      headerImg:
        "https://i.pinimg.com/1200x/69/10/bc/6910bc8d047ad810d2e1a1126724106a.jpg",
      content: `
        Kegiatan edukasi mengenai pengelolaan sampah ini bertujuan untuk
        meningkatkan kesadaran generasi muda terhadap pentingnya memilah sampah
        sejak dini.

        Siswa diajarkan cara mendaur ulang, membuat eco-brick, hingga memahami
        konsep reduce, reuse dan recycle (3R).

        Program ini berjalan dengan sangat menyenangkan berkat interaksi edukatif
        antara fasilitator dan para siswa.
      `,
      gallery: [
        "https://i.pinimg.com/1200x/bd/43/70/bd4370cf891aa213d538038a568dbfbe.jpg",
        "https://i.pinimg.com/736x/fc/dc/f3/fcdcf34e30a57e90693b3bdd913f417c.jpg",
      ],
    },
  };

  const acara = acaraData[slug];

  if (!acara) {
    return (
      <div className="pt-28 text-center text-gray-700">
        <h1 className="text-3xl font-bold">Acara tidak ditemukan.</h1>
        <Link to="/program" className="text-green-700">Kembali</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-10">

      {/* Header Image */}
      <div className="w-full h-80 md:h-96 bg-cover bg-center rounded-b-3xl shadow-xl"
        style={{ backgroundImage: `url(${acara.headerImg})` }}>
        <div className="w-full h-full bg-black/40 flex items-center justify-center rounded-b-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl text-center px-4">
            {acara.title}
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-5xl mx-auto mt-10 px-6">
        <div className="grid md:grid-cols-4 gap-6 text-center text-gray-800">
          <div className="bg-white rounded-2xl shadow p-6 border">
            <h3 className="text-sm text-gray-500">Kategori</h3>
            <p className="font-semibold">{acara.category}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border">
            <h3 className="text-sm text-gray-500">Tanggal</h3>
            <p className="font-semibold">{acara.date}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border">
            <h3 className="text-sm text-gray-500">Lokasi</h3>
            <p className="font-semibold">{acara.location}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border">
            <h3 className="text-sm text-gray-500">Peserta</h3>
            <p className="font-semibold">{acara.participants}</p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 text-gray-700 leading-relaxed whitespace-pre-line text-lg">
          {acara.content}
        </div>

        {/* Gallery */}
        <h2 className="mt-14 text-2xl font-bold text-green-800">Dokumentasi</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {acara.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-2xl shadow-lg h-48 object-cover hover:scale-105 transition"
            />
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 mb-10 text-center">
          <Link
            to="/program"
            className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition shadow"
          >
            ← Kembali ke Program
          </Link>
        </div>
      </div>
    </div>
  );
}
