
'use client';

import React from 'react';
import { Share2, UserPlus } from 'lucide-react';
import { boutiqueConfig } from '../config/boutique';
import { generateVCard } from '../lib/boutique-utils';

interface HeaderProps {
  onOpenShare: () => void;
}

export default function Header({ onOpenShare }: HeaderProps) {
  const handleDownloadVCard = () => {
    const vCardData = generateVCard(boutiqueConfig);
    const blob = new Blob([vCardData], {
      type: 'text/vcard;charset=utf-8;',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', 'YOUNA-Boutique.vcf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <header className="w-full border-b border-[#D8C8C3]/40 bg-[#F7F3ED]/90 backdrop-blur-md sticky top-0 z-30 transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Brand Monogram / Label */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#761D32] text-[#F7F3ED] flex items-center justify-center font-serif font-bold text-sm tracking-widest shadow-sm">
            Y
          </div>

          <div className="flex flex-col">
            <span className="font-serif tracking-[0.2em] text-xs font-semibold text-[#191919] uppercase">
              {boutiqueConfig.brand.nameEn}
            </span>

            <span className="text-[10px] text-[#756B68] font-light">
              کارت ویزیت دیجیتال
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadVCard}
            aria-label="ذخیره شماره در مخاطبین تلفن"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#191919] hover:text-[#761D32] bg-white hover:bg-[#FAF7F2] border border-[#D8C8C3]/70 rounded-[12px] shadow-2xs transition-all active:scale-95"
          >
            <UserPlus className="w-3.5 h-3.5 text-[#761D32]" />
            <span className="hidden xs:inline">ذخیره مخاطب</span>
          </button>

          <button
            onClick={onOpenShare}
            aria-label="اشتراک‌گذاری کارت ویزیت"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F7F3ED] bg-[#761D32] hover:bg-[#501324] rounded-[12px] shadow-sm transition-all active:scale-95"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>اشتراک</span>
          </button>
        </div>
      </div>
    </header>
  );
}
