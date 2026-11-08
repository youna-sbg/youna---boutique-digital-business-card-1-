'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Share2, QrCode } from 'lucide-react';
import { boutiqueConfig } from '../config/boutique';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : boutiqueConfig.share.websiteUrl;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${boutiqueConfig.brand.nameEn} Boutique`,
          text: `${boutiqueConfig.brand.taglineFa} - ${boutiqueConfig.brand.welcomeFa}`,
          url: currentUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-sm bg-[#FAF7F2] border border-[#D8C8C3] rounded-[22px] p-6 shadow-2xl text-right">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="بستن پنجره"
          className="absolute top-4 left-4 p-2 text-[#756B68] hover:text-[#191919] hover:bg-black/5 rounded-[12px] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 pt-2">
          <div className="w-12 h-12 rounded-[16px] bg-[#761D32]/10 text-[#761D32] flex items-center justify-center mx-auto mb-3">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 id="share-modal-title" className="text-lg font-medium text-[#191919]">
            اشتراک‌گذاری کارت دیجیتال
          </h3>
          <p className="text-xs text-[#756B68] mt-1">
            بوتیک تخصصی پوشاک بانوان {boutiqueConfig.brand.nameEn}
          </p>
        </div>

        {/* Minimalist Visual QR Code Representation */}
        <div className="bg-white p-4 rounded-[18px] border border-[#D8C8C3]/60 mb-6 flex flex-col items-center justify-center shadow-2xs">
          <div className="w-40 h-40 bg-[#FAF7F2] rounded-[14px] border border-dashed border-[#D8C8C3] flex flex-col items-center justify-center p-3 text-center relative overflow-hidden group">
            {/* SVG Luxury QR Code Pattern */}
            <svg
              className="w-32 h-32 text-[#761D32]"
              viewBox="0 0 100 100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="QR Code"
            >
              {/* Corner 1 */}
              <rect x="5" y="5" width="26" height="26" rx="4" fill="currentColor" />
              <rect x="9" y="9" width="18" height="18" rx="2" fill="#FAF7F2" />
              <rect x="13" y="13" width="10" height="10" rx="1.5" fill="currentColor" />
              {/* Corner 2 */}
              <rect x="69" y="5" width="26" height="26" rx="4" fill="currentColor" />
              <rect x="73" y="9" width="18" height="18" rx="2" fill="#FAF7F2" />
              <rect x="77" y="13" width="10" height="10" rx="1.5" fill="currentColor" />
              {/* Corner 3 */}
              <rect x="5" y="69" width="26" height="26" rx="4" fill="currentColor" />
              <rect x="9" y="73" width="18" height="18" rx="2" fill="#FAF7F2" />
              <rect x="13" y="77" width="10" height="10" rx="1.5" fill="currentColor" />
              {/* Data modules */}
              <rect x="36" y="8" width="6" height="6" rx="1" />
              <rect x="46" y="14" width="6" height="6" rx="1" />
              <rect x="56" y="8" width="6" height="6" rx="1" />
              <rect x="38" y="24" width="8" height="8" rx="1.5" />
              <rect x="52" y="24" width="8" height="8" rx="1.5" />
              <rect x="8" y="38" width="6" height="6" rx="1" />
              <rect x="20" y="44" width="6" height="6" rx="1" />
              <rect x="8" y="52" width="8" height="8" rx="1.5" />
              {/* Center brand mark */}
              <rect x="42" y="42" width="16" height="16" rx="3" fill="#501324" />
              <circle cx="50" cy="50" r="4" fill="#FAF7F2" />
              <rect x="68" y="38" width="6" height="6" rx="1" />
              <rect x="80" y="44" width="6" height="6" rx="1" />
              <rect x="70" y="54" width="8" height="8" rx="1.5" />
              <rect x="84" y="54" width="6" height="6" rx="1" />
              <rect x="36" y="68" width="8" height="8" rx="1.5" />
              <rect x="48" y="72" width="6" height="6" rx="1" />
              <rect x="58" y="68" width="8" height="8" rx="1.5" />
              <rect x="40" y="82" width="6" height="6" rx="1" />
              <rect x="52" y="84" width="8" height="8" rx="1.5" />
              <rect x="70" y="74" width="6" height="6" rx="1" />
              <rect x="82" y="80" width="8" height="8" rx="1.5" />
            </svg>
          </div>
          <span className="text-[11px] text-[#756B68] font-light mt-2 flex items-center gap-1.5">
            <QrCode className="w-3.5 h-3.5" />
            {boutiqueConfig.share.qrCodeTitleFa}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleCopy}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#D8C8C3] hover:border-[#761D32]/50 text-[#191919] text-xs sm:text-sm font-medium rounded-[14px] shadow-2xs transition-all active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">لینک کارت کپی شد!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#761D32]" />
                <span>کپی کردن لینک این صفحه</span>
              </>
            )}
          </button>

          <button
            onClick={handleNativeShare}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#761D32] hover:bg-[#501324] text-[#F7F3ED] text-xs sm:text-sm font-medium rounded-[14px] shadow-sm transition-all active:scale-98"
          >
            <Share2 className="w-4 h-4" />
            <span>اشتراک‌گذاری مستقیم</span>
          </button>
        </div>
      </div>
    </div>
  );
}
