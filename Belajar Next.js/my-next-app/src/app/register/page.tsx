import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">Daftar sekarang</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Daftarkan diri Anda untuk mendapatkan akses ke berbagai fitur dan layanan.</p>

        {/* Form */}
        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Email" />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input type="password" id="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Password" />
              <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">👁️</span>
            </div>
          </div>

          {/* Konfirmasi Password */}
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Konfirmasi Password
            </label>
            <div className="relative">
              <input type="password" id="confirm-password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Konfirmasi Password" />
              <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">👁️</span>
            </div>
          </div>

          {/* Button Buat Akun */}
          <button type="submit" className="w-full py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-200">
            Buat Akun
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Sudah punya akun?{" "}
          <Link href="/login">
            <span className="text-pink-600 font-semibold hover:underline cursor-pointer">Masuk di sini!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
