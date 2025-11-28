import { useState } from "react";
import { GalleryModal } from "./GalleryModal";

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    {
      type: "image",
      url: "https://i.pinimg.com/736x/8b/c2/a4/8bc2a48011dfe7d82ae8f7b215bf69ce.jpg",
      category: "Penanaman Pohon",
      title: "Gerakan Hijau Bersama",
      desc: "Kegiatan gotong royong penanaman bibit pohon di area perkampungan.",
      link: "/acara/gerakan-hijau-bersama"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      category: "Sosialisasi",
      title: "Edukasi Lingkungan",
      desc: "Pengenalan dampak sampah dan cara pengelolaan kepada masyarakat.",
      link: "/acara/edukasi-lingkungan"
    },
    {
      type: "video",
      url: "https://youtu.be/gDibiM1bskY?si=jwfn-c7KFoMhwHXN",
      category: "Video Dokumentasi",
      title: "Aksi Peduli Bumi",
      desc: "Dokumentasi lengkap perjalanan aksi bersih sungai dan penanaman pohon.",
      link: "/acara/aksi-peduli-bumi"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Bersih Sungai",
      title: "Aksi Cinta Sungai",
      desc: "Membersihkan aliran sungai dari sampah plastik bersama relawan.",
      link: "/acara/aksi-cinta-sungai"
    },
    {
      type: "image",
      url: "https://i.pinimg.com/736x/8e/ca/74/8eca745e4917585b3f9afbb3986a472d.jpg",
      category: "Komunitas",
      title: "Kolaborasi Anak Muda",
      desc: "Generasi muda bergabung untuk menjaga lingkungan secara berkelanjutan.",
      link: "/acara/kolaborasi-anak-muda"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
      category: "Reboisasi",
      title: "Menghidupkan Hutan",
      desc: "Penanaman kembali area hutan yang mengalami kerusakan.",
      link: "/acara/menghidupkan-hutan"
    },
  ];

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-5xl font-extrabold mb-12 text-green-800 text-center">
        Galeri Kegiatan
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg border bg-white group hover:-translate-y-2 transition-all duration-500"
          >
            {/* Klik gambar/video = buka modal */}
            <div onClick={() => setSelectedItem(item)}>
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700 cursor-pointer"
                />
              ) : (
                <div className="relative w-full h-56 bg-black overflow-hidden cursor-pointer">
                  <iframe
                    src={item.url}
                    className="w-full h-full pointer-events-none"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="text-white text-lg font-semibold bg-white/20 px-4 py-2 rounded-xl backdrop-blur-md">
                      Play Video ▶
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Konten */}
            <div className="p-6">
              <p className="text-xs text-gray-500 tracking-wide mb-1">
                {item.category.toUpperCase()}
              </p>

              <h3 className="text-xl font-bold text-green-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Learn More → diarahkan ke halaman acara */}
              <a
                href={item.link}
                className="text-green-700 font-semibold hover:text-green-900 inline-block"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <GalleryModal item={selectedItem} close={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
