import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-white/70 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h2 className="text-2xl font-extrabold text-green-700 tracking-tight">
          PeLinku<span className="text-green-900">🌳</span>
        </h2>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-green-700 font-medium">
          <Link to="/" className="hover:text-green-900 transition">Beranda</Link>
          <Link to="/program" className="hover:text-green-900 transition">Program</Link>
          <Link to="/edukasi" className="hover:text-green-900 transition">Edukasi</Link>
          <Link to="/galeri" className="hover:text-green-900 transition">About</Link>
        </div>

        <Link
          to="/signin"
          className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white! rounded-xl shadow font-medium transition"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
  