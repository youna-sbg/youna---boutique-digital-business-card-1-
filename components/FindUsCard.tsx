'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { boutiqueConfig } from '../config/boutique';
import { getMapNavigationUrl, isConfigured } from '../lib/boutique-utils';

export default function FindUsCard() {
  const mapUrl = getMapNavigationUrl(boutiqueConfig.location);
  const isAddressConfigured = isConfigured(boutiqueConfig.location.addressFa);

  return (
    <section className="w-full pb-16 sm:pb-24 bg-[#F7F3ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#761D32] rounded-[22px] p-8 sm:p-10 text-[#F7F3ED] shadow-xl relative overflow-hidden">
          {/* Subtle architectural luxury pattern */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-[#501324]/40 blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            {/* Text & Icon Content */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[16px] bg-white/15 text-white flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="text-right">
                <h3 className="text-xl sm:text-2xl font-normal text-white mb-2">
                  «ما را پیدا کنید»
                </h3>
                <p className="text-xs sm:text-sm text-[#D8C8C3] font-light max-w-md leading-relaxed">
                  {isAddressConfigured
                    ? `${boutiqueConfig.location.cityFa}، ${boutiqueConfig.location.addressFa}`
                    : "آدرس فروشگاه به‌زودی اعلام می‌شود."}
                </p>
              </div>
            </div>

            {/* Navigation Button */}
            <div className="w-full md:w-auto">
              {mapUrl ? (
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#FAF7F2] hover:bg-white text-[#761D32] font-medium text-sm rounded-[14px] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>مسیریابی در نقشه</span>
                </a>
              ) : (
                <div className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-[#D8C8C3] font-light text-xs sm:text-sm rounded-[14px]">
                  <Navigation className="w-4 h-4 opacity-60" />
                  <span>مسیریابی به‌زودی</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
