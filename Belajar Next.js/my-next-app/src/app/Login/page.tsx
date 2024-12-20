"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

const Login = () => {
  const [isMounted, setIsMounted] = useState(false); // State untuk memastikan komponen di-mount
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function untuk handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman
    if (!isMounted) return; // Cegah eksekusi jika belum di-mount

    console.log("Login successful!");

    // Redirect ke halaman dashboard
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">Selamat datang!</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Silakan masuk untuk mengakses akun</p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Email" required />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input type="password" id="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Password" required />
              <span className="absolute inset-y-0 right-3 flex items-center">👁️</span>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-200">
            Masuk
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Belum punya akun?{" "}
          <Link href="/register">
            <span className="text-pink-600 font-semibold hover:underline cursor-pointer">Daftar sekarang!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
