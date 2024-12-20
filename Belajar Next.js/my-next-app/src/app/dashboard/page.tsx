"use client"
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Button } from "@/components/ui/button"; // Import komponen dari ShadCN UI
import { Card } from "@/components/ui/card"; // Import komponen dari ShadCN UI
import HelpCenter from "../help_center/page";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHelpCenter, setshowHelpCenter] = useState(false);

  // Data untuk promo banner
  const promoData = [
    {
      title: "Diskon 25%",
      description: "Nikmati Diskon 25% untuk Transaksi Pertamamu!",
      imageUrl: "https://via.placeholder.com/400x200",
    },
    {
      title: "Promo Spesial",
      description: "Dapatkan Hadiah Menarik dengan Setiap Pembelian!",
      imageUrl: "https://via.placeholder.com/400x200",
    },
    {
      title: "Voucher Gratis",
      description: "Voucher Gratis untuk Semua Pengguna Baru!",
      imageUrl: "https://via.placeholder.com/400x200",
    },
  ];

  // Fungsi untuk berpindah ke slide berikutnya
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % promoData.length);
  };

  // Fungsi untuk berpindah ke slide sebelumnya
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + promoData.length) % promoData.length);
  };

  // Konfigurasi swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      {showHelpCenter ? (
        <HelpCenter />
      ):(
        <>
      {/* Header */}
      <header className="bg-pink-800 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Home</h1>
        <div className="relative">
          <input type="text" placeholder="Search" className="px-4 py-2 rounded-full text-gray-700 focus:outline-none" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">🔍</button>
        </div>
      </header>

      {/* Promo Banner Carousel */}
      <div className="p-4">
        <div
          className="relative bg-pink-200 rounded-lg p-4 flex items-center justify-between shadow-md"
          {...swipeHandlers} // Menambahkan swipe handlers
        >
          <div className="flex flex-col w-full md:w-3/4">
            <p className="text-pink-700 font-semibold">{promoData[activeIndex].title}</p>
            <p className="text-gray-600 text-sm">{promoData[activeIndex].description}</p>
            <Button className="mt-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700">Booking Sekarang</Button>
          </div>
          <div className="w-1/4">
            <img src={promoData[activeIndex].imageUrl} alt="Promo" className="w-full h-auto rounded-md object-cover" />
          </div>
        </div>
      </div>

      {/* Booking Button */}
      <div className="p-4">
        <Button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">+ Booking Massage</Button>
        <div className="mt-4 text-center">
          <Button className="border-2 border-gray-300 text-gray-700 py-2 px-6 rounded-lg">Layanan</Button>
        </div>
      </div>

      {/* Recommendations */}
      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">Recommend</h2>
          <a href="#" className="text-pink-600 text-sm font-semibold">
            Lihat Semua
          </a>
        </div>
        {/* Tabs */}
        <div className="flex space-x-4 mb-4">
          <button className="text-pink-600 font-semibold border-b-2 border-pink-600 pb-2">All</button>
          <button className="text-gray-500">Refleksi</button>
          <button className="text-gray-500">Terapi</button>
          <button className="text-gray-500">Pijat Sehat</button>
        </div>

        {/* Card List */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
            <img src="https://via.placeholder.com/80" alt="Refleksi 60 Menit" className="w-20 h-20 rounded-lg object-cover" />
            <div>
              <h3 className="font-semibold text-gray-800">Refleksi 60 Menit</h3>
              <p className="text-sm text-gray-600">Nikmati relaksasi dan peremajaan tubuh dengan refleksi selama 60...</p>
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <span className="mr-4">💰 Rp 75.000</span>
                <span>⏱️ 60 Menit</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
            <img src="https://via.placeholder.com/80" alt="Refleksi 90 Menit" className="w-20 h-20 rounded-lg object-cover" />
            <div>
              <h3 className="font-semibold text-gray-800">Refleksi 90 Menit</h3>
              <p className="text-sm text-gray-600">Perpanjang pengalaman relaksasi Anda dengan refleksiologi selama 90...</p>
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <span className="mr-4">💰 Rp 105.000</span>
                <span>⏱️ 90 Menit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      {/* <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-3">
        <div className="flex justify-around">
          <button className="text-pink-600 flex flex-col items-center">
            🏠 <span className="text-sm">Home</span>
          </button>
          <button className="text-gray-500 flex flex-col items-center">
            📋 <span className="text-sm">Order</span>
          </button>
          <button className="text-gray-500 flex flex-col items-center">
            👤 <span className="text-sm">Profile</span>
          </button>
          <button className="text-gray-500 flex flex-col items-center" onClick={() => setshowHelpCenter(true)}>
            📞 <span className="text-sm">Help</span>
          </button>
        </div>
      </nav> */}
      </>
        )}
    </div>
  );
};

export default Dashboard;
