import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";
import Program from "./pages/Program";
import Galeri from "./pages/Galeri";
import Edukasi from "./pages/Edukasi";
import AcaraDetail from "./pages/AcaraDetail";
import Donasi from "./pages/Donasi";
import PenanamanNasional from "./components/program/PenanamanNasional";
import FormRelawan from "./components/program/FormRelawan";
import RestorasiKalimantan from "./components/program/RestorasiKalimantan";
import AksiSungaiBersih from "./components/program/AksiSungaiBersih";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/galeri" element={<Galeri />} />

          <Route path="/acara/:slug" element={<AcaraDetail />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/program/penanaman-nasional" element={<PenanamanNasional />} />
          <Route path="/program/restorasi-kalimantan" element={<RestorasiKalimantan />} />
          <Route path="/program/aksi-sungai" element={<AksiSungaiBersih />} />
          <Route path="/program/daftar-relawan" element={<FormRelawan />} />


          <Route path="/signin" element={<SignIn />} />

        </Routes> 
      </main>

      <Footer />
    </div>
  );
}
