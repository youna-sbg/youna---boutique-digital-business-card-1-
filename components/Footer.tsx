import { boutiqueConfig } from '../config/boutique';
import { toPersianDigits } from '../lib/boutique-utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const persianYear = toPersianDigits(currentYear);

  return (
    <footer className="w-full border-t border-[#D8C8C3]/50 bg-[#F7F3ED] py-12 sm:py-16 mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
          {/* Persian Closing Statement & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-light text-[#756B68]">
              {boutiqueConfig.brand.closingFa}
            </p>
            <p className="text-xs text-[#756B68]/70 font-light">
              © {persianYear} {boutiqueConfig.brand.nameEn} BOUTIQUE. تمامی حقوق محفوظ است.
            </p>
          </div>

          {/* English Brand Wordmark */}
          <div className="flex flex-col items-center md:items-end">
            <span className="font-serif text-3xl font-normal tracking-wider text-[#191919]">
              {boutiqueConfig.brand.nameEn}
            </span>
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#756B68] uppercase font-medium mt-1">
              WOMENSWEAR & BOUTIQUE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
