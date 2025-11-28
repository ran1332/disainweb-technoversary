import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-green-800 text-white pt-14 pb-8 mt-16 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide">HutanHijau.io</h2>
          <p className="mt-3 text-sm text-green-100 leading-relaxed">
            Bergerak bersama menjaga bumi. Hijaukan masa depan dengan edukasi,
            aksi, dan kolaborasi untuk masa depan yang lebih hijau.
          </p>
        </div>

        {/* Google Maps */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Lokasi Kami</h3>
          <div className="rounded-xl overflow-hidden border border-green-600 shadow-lg">
            <iframe
              title="Lokasi HutanHijau"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.597471358138!2d106.81663537480567!3d-6.189027693804948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3eecdbe41c3%3A0x5a9c5f50a7619c51!2sMonas!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak</h3>
          <ul className="space-y-3 text-sm text-green-100">
            <li>Email: support@hutanhijau.io</li>
            <li>WhatsApp: +62 812-3456-7890</li>
            <li>Lokasi: Jakarta, Indonesia</li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-300 transition">
              <Facebook size={26} />
            </a>
            <a href="#" className="hover:text-green-300 transition">
              <Instagram size={26} />
            </a>
            <a href="#" className="hover:text-green-300 transition">
              <Twitter size={26} />
            </a>
            <a href="#" className="hover:text-green-300 transition">
              <Youtube size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-600 mt-10 pt-6 text-center text-sm text-green-200">
        © 2025 HutanHijau.io — Generasi Hijau, Masa Depan Lebih Maju
      </div>
    </footer>
  );
}
