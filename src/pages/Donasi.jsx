import React, { useState } from "react";

export default function Donasi() {
  const [nominal, setNominal] = useState("");

  const preset = [10000, 20000, 50000, 100000, 200000];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-green-800 text-center mb-10">
        Donasi untuk Lingkungan 🌍
      </h1>

      <div className="bg-white shadow-xl rounded-3xl p-10 border">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Pilih Nominal Donasi
        </h2>

        {/* PRESET NOMINAL */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {preset.map((p) => (
            <button
              key={p}
              onClick={() => setNominal(p)}
              className={`p-4 rounded-xl border text-center font-semibold transition ${
                nominal === p
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Rp {p.toLocaleString("id-ID")}
            </button>
          ))}
        </div>

        {/* INPUT MANUAL */}
        <input
          type="number"
          value={nominal}
          onChange={(e) => setNominal(Number(e.target.value))}
          placeholder="Nominal lain..."
          className="w-full p-4 mb-8 border rounded-xl focus:ring-2 focus:ring-green-500"
        />

        {/* METODE PEMBAYARAN */}
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Metode Pembayaran
        </h3>

        <div className="space-y-4 mb-10">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="pay" className="w-5 h-5" />
            <span>Transfer Bank (BRI / BCA / Mandiri)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="pay" className="w-5 h-5" />
            <span>E-Wallet (DANA / OVO / GoPay)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="pay" className="w-5 h-5" />
            <span>QRIS</span>
          </label>
        </div>

        {/* BUTTON DONASI */}
        <button
          className="w-full py-4 bg-green-700 text-white rounded-xl font-semibold text-lg hover:bg-green-800 transition shadow-lg"
        >
          Donasi Sekarang
        </button>
      </div>

      {/* CATATAN */}
      <p className="text-center text-gray-500 mt-6">
        Terima kasih! Setiap rupiah yang Anda berikan sangat berarti bagi bumi kita 🌱
      </p>
    </section>
  );
}
