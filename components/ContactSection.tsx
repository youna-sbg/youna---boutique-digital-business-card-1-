
'use client';

import React from 'react';
import { Phone, Instagram, Compass, ExternalLink, ArrowLeft } from 'lucide-react';
import { boutiqueConfig } from '../config/boutique';
import {
  isConfigured,
  getTelUrl,
  getInstagramUrl,
  getMapNavigationUrl,
} from '../lib/boutique-utils';

export default function ContactSection() {
  const hasPhone = isConfigured(boutiqueConfig.contact.phone);
  const telUrl = getTelUrl(boutiqueConfig.contact.phone);

  const hasInstagram = isConfigured(boutiqueConfig.contact.instagram);
  const instagramUrl = getInstagramUrl(boutiqueConfig.contact.instagram);

  const instagramUsername =
    boutiqueConfig.contact.instagram.match(/instagram\.com\/([^/?]+)/)?.[1] ||
    boutiqueConfig.contact.instagram.replace(/^@/, '');

  const mapUrl = getMapNavigationUrl(boutiqueConfig.location);
  const hasMap = Boolean(mapUrl);

  return (
    <section className="w-full py-16 sm:py-24 bg-[#761D32] text-[#F7F3ED] relative overflow-hidden">
      {/* Subtle background ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#501324]/30 via-transparent to-[#501324]/50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-right mb-10 sm:mb-12">
          <p className="font-serif text-[11px] sm:text-xs tracking-[0.3em] text-[#D8C8C3] uppercase font-medium mb-1">
            CONTACT
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white">
            «با ما در تماس باشید»
          </h2>
        </div>

        {/* Primary Contact: Phone Call */}
        <div className="mb-6">
          <div className="bg-white/10 hover:bg-white/12 border border-white/15 rounded-[22px] p-6 sm:p-8 backdrop-blur-md transition-all shadow-lg hover:shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-[18px] bg-[#FAF7F2] text-[#761D32] flex items-center justify-center shadow-md shrink-0">
                  <Phone className="w-6 h-6 stroke-[1.75]" />
                </div>

                <div className="text-right">
                  <h3 className="text-lg sm:text-xl font-medium text-white mb-1">
                    تماس تلفنی
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D8C8C3] font-light">
                    {hasPhone
                      ? boutiqueConfig.contact.phoneDisplayFa || boutiqueConfig.contact.phone
                      : 'شماره به‌زودی اعلام می‌شود'}
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-auto">
                {hasPhone && telUrl ? (
                  <a
                    href={telUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF7F2] hover:bg-white text-[#761D32] font-medium text-sm rounded-[14px] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>برقراری تماس</span>
                    <Phone className="w-4 h-4 rotate-[-10deg]" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-[12px] text-xs text-[#D8C8C3]">
                    <span className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse" />
                    <span>به‌زودی فعال می‌شود</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Instagram and Store Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Instagram Card */}
          <div className="bg-white/8 hover:bg-white/12 border border-white/15 rounded-[22px] p-6 backdrop-blur-md transition-all flex flex-col justify-between group shadow-sm hover:shadow-md">
            <div>
              <div className="w-12 h-12 rounded-[16px] bg-white/15 text-[#FAF7F2] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Instagram className="w-5 h-5 stroke-[1.75]" />
              </div>

              <h4 className="text-base sm:text-lg font-medium text-white mb-1.5">
                اینستاگرام
              </h4>

              <p className="text-xs text-[#D8C8C3] font-light mb-6">
                @{instagramUsername}
              </p>
            </div>

            <div>
              {hasInstagram && instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-white/15 hover:bg-white text-white hover:text-[#761D32] text-xs font-medium rounded-[14px] transition-all"
                >
                  <span>مشاهده صفحه</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-white/5 text-[#D8C8C3]/70 text-xs rounded-[14px] cursor-default border border-white/10">
                  به‌زودی
                </span>
              )}
            </div>
          </div>

          {/* Store Navigation Card */}
          <div className="bg-white/8 hover:bg-white/12 border border-white/15 rounded-[22px] p-6 backdrop-blur-md transition-all flex flex-col justify-between group shadow-sm hover:shadow-md">
            <div>
              <div className="w-12 h-12 rounded-[16px] bg-white/15 text-[#FAF7F2] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5 stroke-[1.75]" />
              </div>

              <h4 className="text-base sm:text-lg font-medium text-white mb-1.5">
                مسیریابی فروشگاه
              </h4>

              <p className="text-xs text-[#D8C8C3] font-light mb-6">
                {hasMap ? 'هدایت از طریق نقشه' : 'به‌زودی اعلام می‌شود'}
              </p>
            </div>

            <div>
              {hasMap && mapUrl ? (
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-white/15 hover:bg-white text-white hover:text-[#761D32] text-xs font-medium rounded-[14px] transition-all"
                >
                  <span>مسیریابی</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-white/5 text-[#D8C8C3]/70 text-xs rounded-[14px] cursor-default border border-white/10">
                  به‌زودی
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
