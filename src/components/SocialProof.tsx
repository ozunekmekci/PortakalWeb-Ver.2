import React from "react";
import Image from "next/image";

interface Review {
  name: string;
  avatar?: string;
  date?: string;
  rating: number;
  text: string;
  username?: string; // Instagram kullanıcı adı
}

interface Badge {
  icon: string;
  title: string;
  desc: string;
  bgClass?: string;
}

interface SocialProofProps {
  reviews: Review[];
  badges: Badge[];
  showInstagramFollow?: boolean;
  instagramUrl?: string;
}

const INSTAGRAM_GRADIENT = "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]";
const INSTAGRAM_LOGO = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="url(#ig-gradient)"/>
    <defs>
      <linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f9ce34"/>
        <stop offset="0.5" stopColor="#ee2a7b"/>
        <stop offset="1" stopColor="#6228d7"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="5.5" stroke="white" strokeWidth="2"/>
    <circle cx="18" cy="6" r="1.2" fill="white"/>
  </svg>
);

const DEFAULT_AVATAR = "/images/avatars/default.jpg";

export const SocialProof: React.FC<SocialProofProps> = ({ reviews, badges, showInstagramFollow = true, instagramUrl = "https://instagram.com/portakalcicegiatolye" }) => {
  return (
    <section className="mt-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Reviews */}
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative bg-white/80 rounded-2xl p-6 flex flex-col items-center shadow animate-fade-in border border-pink-100"
            >
              {/* Instagram Logo */}
              <span className="absolute top-4 right-4">{INSTAGRAM_LOGO}</span>
              {/* Avatar with Instagram Gradient */}
              <div className={`w-14 h-14 mb-2 rounded-full p-1 ${INSTAGRAM_GRADIENT} flex items-center justify-center`}>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                  <Image
                    src={review.avatar || DEFAULT_AVATAR}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Instagram Username */}
              <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 mb-1">
                @{(review.username || review.name.toLowerCase().replace(/[^a-z0-9]/gi, "")).replace(/\s+/g, "")}
              </span>
              <blockquote className="italic text-gray-700 text-center mb-2">“{review.text}”</blockquote>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className={idx < Math.round(review.rating) ? "text-yellow-400" : "text-gray-300"}>
                    ★
                  </span>
                ))}
                <span className="text-xs text-gray-500 ml-1">{review.rating.toFixed(1)}</span>
              </div>
              <span className="font-bold text-brand-orange">- {review.name}</span>
              {review.date && <span className="text-xs text-gray-400 mt-1">{review.date}</span>}
            </div>
          ))}

          {/* Badges */}
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 flex flex-col items-center shadow animate-fade-in ${badge.bgClass || "bg-brand-blue/60"}`}
            >
              <span className="text-4xl mb-2">{badge.icon}</span>
              <div className="font-bold text-lg text-gray-800 mb-1">{badge.title}</div>
              <div className="text-gray-600 text-sm text-center">{badge.desc}</div>
            </div>
          ))}
        </div>
        {/* Instagram Takip Alanı */}
        {showInstagramFollow && (
          <div className="flex flex-col items-center mt-10">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            >
              <span className="w-6 h-6">{INSTAGRAM_LOGO}</span>
              Bizi Instagram'da Takip Edin
            </a>
            <span className="text-xs text-gray-500 mt-2">@portakalcicegiatolye</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialProof; 