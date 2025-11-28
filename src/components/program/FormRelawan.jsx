import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FormRelawan() {
  const [params] = useSearchParams();
  const eventName = params.get("event") || "-";

  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pendaftaran berhasil terkirim!\nTerima kasih telah menjadi relawan.");
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
        Form Pendaftaran Relawan
      </h1>

      <p className="text-gray-600 mb-4 text-center">
        Anda mendaftar untuk:{" "}
        <span className="font-semibold text-green-700">{eventName}</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="nama"
          placeholder="Nama lengkap"
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="telepon"
          placeholder="Nomor telepon"
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={handleChange}
          required
        />

        <textarea
          name="pesan"
          placeholder="Pesan atau motivasi (opsional)"
          className="w-full p-3 h-32 border border-gray-300 rounded-lg"
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
        >
          Kirim Pendaftaran
        </button>
      </form>
    </div>
  );
}
