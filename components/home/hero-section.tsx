'use client';

import { useState } from "react";

export default function HeroSection() {
  const [isHoverHero, setIsHoverHero] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHoverHero(true)}
      onMouseLeave={() => setIsHoverHero(false)}
      className="w-100 h-100 rounded-2xl overflow-hidden transition-border duration-200"
      style={{
        border: `1px solid ${isHoverHero ? '#8145B5' : 'white'}`,
      }}
    >
      <img src="/images/hero.jpg" />
    </div>
  );
};
