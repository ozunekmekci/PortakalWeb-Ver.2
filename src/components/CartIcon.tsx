'use client';
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { count } = useCart();
  return (
    <Link href="/cart" className="relative inline-flex items-center group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 text-pink-600 group-hover:text-pink-800 transition"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25A3.75 3.75 0 0011.25 18h1.5a3.75 3.75 0 003.75-3.75V6.75A3.75 3.75 0 0012.75 3h-1.5A3.75 3.75 0 007.5 6.75v7.5z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">
          {count}
        </span>
      )}
    </Link>
  );
} 