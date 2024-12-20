// pages/index.js
"use client"

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto py-10">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-6">Frequently Asked Question</h1>
        <div className="bg-white shadow rounded-md">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={() => toggleFAQ(index)}>
                <span className="text-gray-700 font-medium">{item.question}</span>
                <span className="text-gray-500">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && <div className="p-4 text-gray-600">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "Apa saja jenis pijat yang ditawarkan di Djemari?",
    answer: "Kami menawarkan berbagai jenis pijat, mulai dari pijat tradisional, pijat relaksasi, pijat refleksi, hingga pijat khusus untuk ibu hamil.",
  },
  {
    question: "Bagaimana cara memesan jadwal pijat di Djemari?",
    answer: "Anda dapat memesan jadwal pijat melalui aplikasi atau menghubungi kami secara langsung.",
  },
  {
    question: "Berapa harga untuk pijat di Djemari?",
    answer: "Harga bervariasi tergantung jenis pijat yang dipilih. Silakan cek daftar harga di aplikasi kami.",
  },
  {
    question: "Apakah ada paket pijat yang ditawarkan di Djemari?",
    answer: "Ya, kami menawarkan paket pijat dengan harga lebih terjangkau.",
  },
  {
    question: "Apakah terapis di Djemari berpengalaman?",
    answer: "Terapis kami telah berpengalaman dan bersertifikat.",
  },
];
