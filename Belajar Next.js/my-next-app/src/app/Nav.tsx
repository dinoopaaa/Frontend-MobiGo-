"use client";

const Footer = () => {
  return (
    <nav className="sticky bottom-0 bg-white shadow-md py-3">
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
        <button className="text-gray-500 flex flex-col items-center" onClick={() => (window.location.href = "/help_center")}>
          📞 <span className="text-sm">Help</span>
        </button>
      </div>
    </nav>
  );
};

export default Footer;
