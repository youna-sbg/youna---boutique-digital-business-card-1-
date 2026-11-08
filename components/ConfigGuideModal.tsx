'use client';

import React from 'react';
import { X, CheckCircle2, AlertCircle, FileCode } from 'lucide-react';
import { boutiqueConfig } from '../config/boutique';
import { isConfigured } from '../lib/boutique-utils';

interface ConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfigGuideModal({ isOpen, onClose }: ConfigGuideModalProps) {
  if (!isOpen) return null;

  const fields = [
    { label: 'شماره تلفن (Phone)', val: boutiqueConfig.contact.phone, key: 'contact.phone' },
    { label: 'شماره واتساپ (WhatsApp)', val: boutiqueConfig.contact.whatsapp, key: 'contact.whatsapp' },
    { label: 'نام کاربری اینستاگرام (Instagram)', val: boutiqueConfig.contact.instagram, key: 'contact.instagram' },
    { label: 'آدرس فروشگاه (Address)', val: boutiqueConfig.location.addressFa, key: 'location.addressFa' },
    { label: 'ساعات کاری (Hours)', val: boutiqueConfig.hours.scheduleFa, key: 'hours.scheduleFa' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#D8C8C3] rounded-[22px] p-6 sm:p-8 shadow-2xl text-right max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="بستن راهنما"
          className="absolute top-4 left-4 p-2 text-[#756B68] hover:text-[#191919] hover:bg-black/5 rounded-[12px] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-[14px] bg-[#761D32]/10 text-[#761D32] flex items-center justify-center shrink-0">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h3 id="config-guide-title" className="text-lg font-medium text-[#191919]">
              راهنمای تکمیل اطلاعات بوتیک یونا
            </h3>
            <p className="text-xs text-[#756B68]">
              فایل مرکزی تنظیمات: <code className="bg-white px-1.5 py-0.5 rounded text-[#761D32] border border-[#D8C8C3]">config/boutique.ts</code>
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#756B68] font-light leading-relaxed mb-6">
          کلیه اطلاعات کسب‌وکار شما در این فایل تجمیع شده است. هر فیلدی که هنوز مقداردهی نشده باشد به صورت خودکار پیام 
          <span className="text-[#761D32] font-normal mx-1">«به‌زودی اعلام می‌شود»</span>
          نمایش می‌دهد و پیوندهای ناقص ایجاد نخواهد شد.
        </p>

        {/* Status of fields */}
        <div className="space-y-2.5 mb-6">
          {fields.map((f, i) => {
            const configured = isConfigured(f.val);
            return (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-white rounded-[14px] border border-[#D8C8C3]/60 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2">
                  {configured ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  )}
                  <span className="font-medium text-[#191919]">{f.label}</span>
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-[10px] ${
                    configured
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'bg-amber-50 text-amber-700 font-light'
                  }`}
                >
                  {configured ? 'ثبت شده' : 'به‌زودی'}
                </span>
              </div>
            );
          })}
        </div>

        <div className="bg-[#761D32]/5 border border-[#761D32]/15 rounded-[16px] p-4 text-xs text-[#501324] leading-relaxed">
          <p className="font-semibold mb-1">چگونه اطلاعات را ثبت کنید؟</p>
          <p>
            کافی است فایل <code className="font-mono font-bold text-[#761D32]">config/boutique.ts</code> را باز کرده و مقادیر دلخواه مانند تلفن، آی‌دی اینستاگرام و آدرس را جایگزین رشته‌های خالی نمایید.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-[#761D32] hover:bg-[#501324] text-[#F7F3ED] text-sm font-medium rounded-[14px] transition-colors"
          >
            متوجه شدم، بستن
          </button>
        </div>
      </div>
    </div>
  );
}
