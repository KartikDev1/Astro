"use client";

import { useState } from "react";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className="w-6 h-6 text-white fill-current"
  >
    <path d="M13.601 2.326A7.854 7.854 0 0 0 8.008 0C3.675 0 .14 3.534.14 7.867c0 1.386.363 2.737 1.052 3.927L0 16l4.329-1.136a7.84 7.84 0 0 0 3.68.933h.003c4.333 0 7.868-3.534 7.868-7.867a7.855 7.855 0 0 0-2.279-5.604zM8.012 14.445h-.002a6.48 6.48 0 0 1-3.301-.902l-.236-.14-2.568.674.686-2.503-.154-.257a6.487 6.487 0 0 1-.992-3.45c0-3.58 2.915-6.495 6.495-6.495a6.45 6.45 0 0 1 4.6 1.905 6.46 6.46 0 0 1 1.904 4.59c-.002 3.582-2.917 6.498-6.498 6.498z" />
    <path d="M11.56 9.428c-.195-.1-1.153-.57-1.331-.636-.178-.066-.307-.1-.437.1-.13.198-.502.636-.616.767-.112.132-.227.149-.421.05-.195-.1-.823-.304-1.567-.969-.58-.517-.972-1.155-1.086-1.35-.113-.198-.012-.303.086-.402.088-.088.195-.23.293-.347.097-.116.13-.198.195-.33.065-.132.033-.248-.017-.347-.049-.1-.437-1.056-.6-1.445-.159-.38-.321-.329-.437-.335l-.372-.006a.714.714 0 0 0-.518.248c-.178.198-.68.665-.68 1.622 0 .959.697 1.884.794 2.016.097.132 1.372 2.095 3.322 2.936.464.2.825.32 1.107.41.465.148.888.127 1.222.077.373-.056 1.153-.471 1.315-.926.162-.454.162-.843.113-.926-.048-.083-.178-.132-.372-.23z" />
  </svg>
);

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = "919136913355"; // Your WhatsApp number
  const message = "Hello! I would like to know more about your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
            <div className="text-sm font-medium">Chat with us on WhatsApp</div>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        )}

        {/* Main Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#0b4f3d]/55 shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]">
            <WhatsAppIcon />
          </span>

          {/* Outer halo pulse */}
          <span className="absolute inset-0 rounded-full border border-[#167a5a] opacity-70 animate-haloPulse"></span>
        </a>

        {/* Notification Badge (optional - can be enabled for unread messages) */}
        {/* <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
          1
        </span> */}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes haloPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.06);
            opacity: 0.35;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }

        .animate-haloPulse {
          animation: haloPulse 2.2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
