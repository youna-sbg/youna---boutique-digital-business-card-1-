import { boutiqueConfig } from '../config/boutique';
import { isConfigured } from '../lib/boutique-utils';
import { Store, MapPin, Phone, Clock } from 'lucide-react';

export default function StoreInfoSection() {
const infoRows = [
  {
    label: 'نام فروشگاه',
    value: boutiqueConfig.location.storeNameEn || boutiqueConfig.location.storeNameFa,
    isPending: false,
    icon: Store,
  },
  {
    label: 'آدرس',
    value: isConfigured(boutiqueConfig.location.addressFa)
      ? `${boutiqueConfig.location.cityFa}، ${boutiqueConfig.location.addressFa}`
      : 'به‌زودی اعلام می‌شود',
    isPending: !isConfigured(boutiqueConfig.location.addressFa),
    icon: MapPin,
  },
  {
    label: 'شماره تماس',
    value: isConfigured(boutiqueConfig.contact.phone)
      ? (boutiqueConfig.contact.phoneDisplayFa || boutiqueConfig.contact.phone)
      : 'به‌زودی اعلام می‌شود',
    isPending: !isConfigured(boutiqueConfig.contact.phone),
    icon: Phone,
  },
  {
    label: 'ساعات کاری',
    value: boutiqueConfig.hours.scheduleFa,
    holidayNotes: boutiqueConfig.hours.holidayNotesFa,
    isPending: !isConfigured(boutiqueConfig.hours.scheduleFa),
    icon: Clock,
  },
];


  return (
    <section className="w-full py-16 sm:py-24 bg-[#F7F3ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-right mb-10 sm:mb-12">
          <p className="font-serif text-[11px] sm:text-xs tracking-[0.3em] text-[#756B68] uppercase font-medium mb-1">
            THE BOUTIQUE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#191919]">
            «اطلاعات فروشگاه»
          </h2>
        </div>

        {/* Minimalist Editorial Information Table */}
        <div className="bg-white/90 border border-[#D8C8C3]/70 rounded-[22px] overflow-hidden shadow-2xs backdrop-blur-xs">
          <div className="divide-y divide-[#D8C8C3]/40">
            {infoRows.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div
                  key={idx}
                  className="px-6 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 hover:bg-[#FAF7F2]/60 transition-colors"
                >
                  {/* Label with micro icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[10px] bg-[#F7F3ED] text-[#761D32] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[#191919]">
                      {row.label}
                    </span>
                  </div>

                  {/* Value */}
<div dir="ltr" className="text-right sm:text-left pr-11 sm:pr-0">
  <span
    className={`text-sm sm:text-base ${
      row.isPending
        ? 'text-[#756B68]/80 font-light'
        : 'text-[#191919] font-normal'
    }`}
  >
    {row.value}
  </span>

  {row.label === 'ساعات کاری' && isConfigured(row.holidayNotes) && (
    <p className="mt-2 text-xs sm:text-sm text-[#761D32] font-medium">
      {row.holidayNotes}
    </p>
  )}
</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
