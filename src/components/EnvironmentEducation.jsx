import { Leaf, Recycle, Sun, TreePine, Users, Droplets } from "lucide-react";

export default function EnvironmentEducation() {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-emerald-600" />,
      title: "Kebiasaan Kecil, Dampak Besar",
      desc: "Mulai dari membawa tumbler, mengurangi plastik, hingga mematikan listrik saat tidak digunakan.",
      handle: [
        "Gunakan botol minum yang bisa diisi ulang.",
        "Bawa tas belanja kain untuk mengurangi kantong plastik.",
        "Gunakan transportasi umum, sepeda, atau jalan kaki.",
        "Cabut charger dan matikan lampu saat tidak digunakan.",
      ],
    },
    {
      icon: <TreePine className="w-10 h-10 text-emerald-600" />,
      title: "Alam Menjaga Kita",
      desc: "Alam menyediakan udara bersih, air segar, dan tanah subur. Menjaganya berarti menjaga hidup kita.",
      handle: [
        "Tanam pohon minimal 1–2 pohon per rumah setiap tahun.",
        "Rawat tanaman di halaman atau balkon sebagai penambah oksigen.",
        "Tidak membuang sampah sembarangan di sungai atau tanah.",
        "Ikut kegiatan bersih-bersih lingkungan di sekitar rumah.",
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-600" />,
      title: "Tanggung Jawab Bersama",
      desc: "Lingkungan bukan hanya tugas pemerintah. Semua orang punya peran dalam menjaga bumi.",
      handle: [
        "Ikut gotong royong kebersihan di lingkungan RT/RW.",
        "Bergabung dengan komunitas pecinta lingkungan.",
        "Ajak teman dan keluarga untuk ikut peduli.",
        "Laporkan pencemaran lingkungan ke pihak berwenang.",
      ],
    },
    {
      icon: <Recycle className="w-10 h-10 text-emerald-600" />,
      title: "Kurangi Sampah",
      desc: "Terapkan prinsip 3R: Reduce, Reuse, Recycle untuk mengurangi beban sampah di masa depan.",
      handle: [
        "Pisahkan sampah organik dan anorganik.",
        "Gunakan produk isi ulang dan minim kemasan.",
        "Daur ulang plastik, kertas, dan kaca.",
        "Manfaatkan sisa makanan menjadi kompos.",
      ],
    },
    {
      icon: <Droplets className="w-10 h-10 text-emerald-600" />,
      title: "Aksi Nyata Hari Ini",
      desc: "Hemat air, tanam pohon, dan ikuti program sosial ramah lingkungan.",
      handle: [
        "Kurangi durasi mandi, maksimal 5 menit.",
        "Gunakan air secukupnya saat mencuci piring.",
        "Tanam pohon di sekolah atau lingkungan rumah.",
        "Ikut kampanye lingkungan seperti Hari Bumi.",
      ],
    },
    {
      icon: <Sun className="w-10 h-10 text-emerald-600" />,
      title: "Sebarkan Kesadaran",
      desc: "Bagikan edukasi kepada keluarga dan teman untuk menciptakan gerakan yang lebih besar.",
      handle: [
        "Bagikan informasi lingkungan di media sosial.",
        "Ikut seminar atau webinar tentang lingkungan.",
        "Ajak keluarga menerapkan gaya hidup hijau.",
        "Bantu edukasi anak-anak sejak usia dini.",
      ],
    },
  ];

  return (
    <section className="py-24 bg-linear-to-br from-green-50 to-lime-100 relative overflow-hidden">
      
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-lime-300 rounded-full blur-3xl opacity-25"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        
        {/* Title Section */}
        <h2 className="text-5xl font-extrabold text-green-800 drop-shadow-sm">
          Edukasi Lingkungan
        </h2>
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          Pelajari cara-cara sederhana namun efektif untuk menjaga bumi, lengkap dengan langkah penanganannya.
        </p>

        {/* Feature Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl shadow-lg border bg-white/50 backdrop-blur-xl hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="flex justify-center mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold text-green-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">{item.desc}</p>

              <ul className="text-left space-y-2 text-gray-600">
                {item.handle.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <span className="text-green-600 font-bold">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
