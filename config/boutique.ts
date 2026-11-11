/**
 * YOUNA Boutique - Centralized Business Configuration
 * 
 * Edit this file to configure your boutique's real details.
 * Any field left empty ("") or set to null will gracefully display
 * the Persian placeholder «به‌زودی اعلام می‌شود» (Will be announced soon)
 * without generating broken or fake links.
 */

export interface BoutiqueConfig {
  brand: {
    nameEn: string;
    nameFa: string;
    subtitleEn: string;
    taglineEn: string;
    taglineFa: string;
    welcomeFa: string;
    closingFa: string;
    descriptionFa: string;
  };
  contact: {
    // International format e.g. "+989121234567" (leave empty if not ready)
    phone: string;
    // Local Persian display format e.g. "۰۹۱۲ ۱۲۳ ۴۵۶۷" or "۰۲۱ ۲۲۰۰ ۰۰۰۰"
    phoneDisplayFa: string;
    // WhatsApp phone number without spaces e.g. "989121234567"
    whatsapp: string;
    whatsappMessageFa: string;
    // Instagram handle without @ e.g. "youna_boutique"
    instagram: string;
    // Optional contact email
    email: string;
  };
  location: {
    storeNameFa: string;
    storeNameEn: string;
    // Physical address in Persian (leave empty if pending)
    addressFa: string;
    cityFa: string;
    // Precise GPS coordinates (set to null if pending)
    coordinates: {
      lat: number | null;
      lng: number | null;
    };
    // Direct Google Maps or Neshan / Balad link if available
    customMapsUrl: string;
  };
  hours: {
    // Schedule in Persian e.g. "شنبه تا پنجشنبه: 9:30 الی 21:30"
    scheduleFa: string;
    // Friday / Holiday notes e.g. "جمعه‌ها: 16:00 الی 21:30"
    holidayNotesFa: string;
  };
  share: {
    websiteUrl: string;
    qrCodeTitleFa: string;
  };
}

export const boutiqueConfig: BoutiqueConfig = {
  brand: {
    nameEn: "YOUNA",
    nameFa: "یونا",
    subtitleEn: "WOMENSWEAR / BOUTIQUE",
    taglineEn: "Beauty in simplicity, elegance in choice",
    taglineFa: "زیبایی در سادگی، ظرافت در انتخاب",
    welcomeFa: "به دنیای استایل یونا خوش آمدید.",
    closingFa: "با عشق برای استایل شما",
    descriptionFa: "بوتیک تخصصی پوشاک بانوان با تمرکز بر طراحی‌های مینیمال، مدرن و اصیل.",
  },
  contact: {
    // NOTE: Keep empty until real values are provided by the boutique owner
    phone: "+981132339131", 
    phoneDisplayFa: "011 3233 9131",
    whatsapp: "",
    whatsappMessageFa: "سلام، از طریق وب‌کارت یونا پیام می‌دهم.",
    instagram: "https://www.instagram.com/younashop4?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==",
    email: "",
  },
  location: {
    storeNameFa: "بوتیک یونا (YOUNA Boutique)",
    storeNameEn: "YOUNA Boutique",
    addressFa: "بابل خیابان مدرس بین مدرس 32 و 34 ",
    cityFa: "بابل",
    coordinates: {
      lat: null,
      lng: null,
    },
    customMapsUrl: "https://maps.app.goo.gl/oG9cd5buyFkapPv16",
  },
  hours: {
    scheduleFa: "صبح از ساعت 9:30 صبح الی 13 و بعد از ظهر از ساعت 4 الی 9:30 شب",
    holidayNotesFa: "جمعه‌ها: 4 الی 9:30 شب",
  },
  share: {
    websiteUrl: "https://younaboutique.com",
    qrCodeTitleFa: "اسکن کارت ویزیت دیجیتال یونا",
  },
};
