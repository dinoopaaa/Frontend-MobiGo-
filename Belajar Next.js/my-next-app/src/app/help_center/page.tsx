"use client";
import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function HelpCenter() {
  const [messages, setMessages] = useState([
    {
      sender: "user",
      text: "Halo, saya ingin tanya-tanya tentang layanan pijat di djemari. Ada paket pijat apa saja ya?",
    },
    {
      sender: "djemari",
      text: "Selamat pagi! Terima kasih sudah menghubungi djemari reflexology & massage. Kami senang bisa membantu. Djemari menyediakan berbagai paket pijat yang disesuaikan dengan kebutuhan Anda, mulai dari pijat relaksasi, pijat tradisional, hingga pijat khusus untuk meredakan nyeri otot. Apakah Anda memiliki keluhan tertentu yang ingin diatasi?",
    },
    {
      sender: "user",
      text: "Saya sering merasa pegal di bahu. Ada paket pijat yang cocok untuk mengatasi masalah itu?",
    },
    {
      sender: "djemari",
      text: "Tentu ada! Kami memiliki paket pijat khusus untuk meredakan nyeri bahu. Apakah Anda ingin kami jadwalkan sesi untuk Anda?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <div className=" min-h-full">
       <div className="sticky top-0">
        <div className="bg-white shadow rounded px-4 py-2 text-grey-700 font-semibold text-center">Help Center</div>
      </div>
      <div className="mx-auto min-h-screen bg-white shadow-md rounded-lg">
    <div className="p-4 space-y-4 h-full overflow-y-hidden">
      {messages.map((message, index) => (
        <div key={index}>
          {message.sender === "djemari" && (
            <strong className="text-xs text-gray-600">Djemari</strong> 
          )}
          <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-3 rounded-lg text-sm max-w-full break-words ${
                message.sender === "user" ? "bg-red-100 shadow rounded text-black-900" : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>



      {/* Form Chat di atas navbar dengan jarak */}
      <div className="p-2 border-t sticky bottom-[68.8px] z-10 bg-white shadow">
        <div className="flex">
          <input type="text" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Ketik pesan" value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleSend} className="ml-2 bg-red-500 text-white rounded-lg p-2 hover:bg-red-600 focus:ring-2 focus:ring-red-400">
            <PaperAirplaneIcon className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
