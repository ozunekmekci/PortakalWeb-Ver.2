"use client";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  duration?: number;
}

export const Toast = ({ message, duration = 2500 }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] bg-brand-orange text-white px-6 py-3 rounded-xl shadow-2xl animate-fade-in font-semibold text-base flex items-center gap-2">
      <span>✔️</span>
      {message}
    </div>
  );
}; 