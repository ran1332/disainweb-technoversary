import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function SignIn() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Berhasil daftar!");
    } catch (err) {
      alert(err.message);
    }
  };

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login sukses!");
    } catch (err) {
      alert(err.message);
    }
  };

  // LOGIN GOOGLE
  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Login Google sukses!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          {isRegister ? "Daftar Akun" : "Masuk"}
        </h2>

        <form
          onSubmit={isRegister ? handleRegister : handleLogin}
          className="space-y-4"
        >
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              placeholder="Email kamu..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            {isRegister ? "Daftar" : "Masuk"}
          </button>
        </form>

        {/* Google login */}
        <button
        onClick={handleGoogle}
        className="flex items-center justify-center gap-3 w-full py-3 px-4 border rounded-xl hover:bg-gray-100 transition font-medium mt-3"
        >
        <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
        />
        Login dengan Google
        </button>




        {/* Switch Mode */}
        <p className="text-center mt-6 text-gray-600">
          {isRegister ? "Sudah punya akun?" : "Belum punya akun?"}

          <span
            onClick={() => setIsRegister(!isRegister)}
            className="text-green-700 font-semibold cursor-pointer ml-1"
          >
            {isRegister ? "Masuk" : "Daftar"}
          </span>
        </p>
      </div>
    </div>
  );
}
