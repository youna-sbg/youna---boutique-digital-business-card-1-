import React from 'react';
import { boutiqueConfig } from '../config/boutique';

export default function BrandHero() {
  return (
    <section className="w-full pt-10 pb-12 sm:pt-16 sm:pb-20 relative overflow-hidden">
      {/* Decorative luxury architectural lines - minimal, high-end */}
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-[#761D32]/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-24 h-px bg-gradient-to-r from-transparent to-[#D8C8C3]/50 pointer-events-none hidden md:block" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top category label */}
        <div className="text-right sm:text-right mb-4">
          <p className="font-serif text-[11px] sm:text-xs tracking-[0.35em] text-[#756B68] uppercase font-medium">
            {boutiqueConfig.brand.subtitleEn}
          </p>
        </div>

        {/* Prominent YOUNA Wordmark */}
        <div className="mb-8 sm:mb-12 select-none">
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight text-[#191919] leading-none transition-all">
            {boutiqueConfig.brand.nameEn}
          </h1>
        </div>

        {/* Editorial Asymmetric Typography Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end pt-2 border-t border-[#D8C8C3]/50">
          {/* Welcome Tag / Note - Right side on RTL (start) or Left */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/80 border border-[#D8C8C3]/60 rounded-[16px] shadow-2xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#761D32]" />
              <p className="text-xs sm:text-sm text-[#756B68] font-light leading-relaxed">
                {boutiqueConfig.brand.welcomeFa}
              </p>
            </div>
          </div>

          {/* Persian Tagline - High Fashion Serif & Persian Display */}
          <div className="md:col-span-7 order-1 md:order-2 text-right">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-[#191919] leading-tight md:leading-snug">
              <span className="block text-[#761D32] font-normal">
                «{boutiqueConfig.brand.taglineFa.split('،')[0]}،
              </span>
              <span className="block mt-1 text-[#191919]">
                {boutiqueConfig.brand.taglineFa.split('،')[1]?.trim() || ''}»
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
