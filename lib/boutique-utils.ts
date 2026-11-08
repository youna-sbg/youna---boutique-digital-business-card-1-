import { BoutiqueConfig } from '../config/boutique';

/**
 * Checks whether a configuration string or object is genuinely set
 * and not an empty string or placeholder.
 */
export function isConfigured(value: string | number | null | undefined): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'number') return !isNaN(value);
  const trimmed = value.trim();
  if (trimmed === '') return false;
  const placeholders = [
    'pending',
    'not_set',
    'todo',
    'none',
    'به‌زودی',
    'به‌زودی اعلام می‌شود',
    'اعلام می‌شود',
  ];
  return !placeholders.includes(trimmed.toLowerCase());
}

/**
 * Normalizes phone numbers for tel: links.
 * Returns null if not properly configured.
 */
export function getTelUrl(phone?: string | null): string | null {
  if (!isConfigured(phone)) return null;
  const cleanPhone = phone!.replace(/[^\d+]/g, '');
  if (!cleanPhone || cleanPhone.length < 5) return null;
  return `tel:${cleanPhone}`;
}

/**
 * Builds a direct WhatsApp chat link (wa.me) with optional encoded message.
 * Returns null if not configured.
 */
export function getWhatsAppUrl(phone?: string | null, message?: string | null): string | null {
  if (!isConfigured(phone)) return null;
  const cleanPhone = phone!.replace(/[^\d]/g, '');
  if (!cleanPhone || cleanPhone.length < 7) return null;
  const baseUrl = `https://wa.me/${cleanPhone}`;
  if (message && message.trim()) {
    return `${baseUrl}?text=${encodeURIComponent(message.trim())}`;
  }
  return baseUrl;
}


/**
 * Builds an Instagram profile URL.
 * Supports both a full Instagram URL and a username.
 */
export function getInstagramUrl(handle?: string | null): string | null {
  if (!isConfigured(handle)) return null;

  const value = handle!.trim();

  if (/^https:\/\/(www\.)?instagram\.com\//i.test(value)) {
    return value;
  }

  const cleanHandle = value.replace(/^@/, '').trim();

  if (!cleanHandle) return null;

  return `https://www.instagram.com/${cleanHandle}`;
}


/**
 * Builds a map navigation URL from custom link, coordinates, or address query.
 * Returns null if no location info is configured.
 */
export function getMapNavigationUrl(
  location: Pick<BoutiqueConfig['location'], 'customMapsUrl' | 'coordinates' | 'addressFa' | 'cityFa'>
): string | null {
  if (isConfigured(location.customMapsUrl)) {
    return location.customMapsUrl;
  }

  const { lat, lng } = location.coordinates || {};
  if (lat !== null && lng !== null && typeof lat === 'number' && typeof lng === 'number') {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }

  if (isConfigured(location.addressFa)) {
    const query = `${location.cityFa || ''} ${location.addressFa}`.trim();
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  return null;
}

/**
 * Converts Western digits in a string to Persian digits.
 */
export function toPersianDigits(value: string | number): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(value).replace(/[0-9]/g, (w) => persianDigits[parseInt(w, 10)]);
}

/**
 * Generates standard vCard 3.0 content for the boutique
 * so mobile users can download and add YOUNA to their phone contacts.
 */
export function generateVCard(config: BoutiqueConfig): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:Boutique;YOUNA;;;`,
    `FN:${config.brand.nameEn} Boutique | ${config.brand.nameFa}`,
    `ORG:${config.brand.nameEn} Womenswear Boutique`,
    `TITLE:${config.brand.subtitleEn}`,
  ];

  if (isConfigured(config.contact.phone)) {
    lines.push(`TEL;TYPE=WORK,VOICE:${config.contact.phone}`);
  }

  if (isConfigured(config.contact.email)) {
    lines.push(`EMAIL;TYPE=WORK:${config.contact.email}`);
  }

  if (isConfigured(config.location.addressFa)) {
    lines.push(`ADR;TYPE=WORK:;;${config.location.addressFa};${config.location.cityFa};;;`);
  }

  if (isConfigured(config.contact.instagram)) {
    lines.push(`X-SOCIALPROFILE;type=instagram:https://instagram.com/${config.contact.instagram.replace(/^@/, '')}`);
  }

  if (isConfigured(config.share.websiteUrl)) {
    lines.push(`URL:${config.share.websiteUrl}`);
  }

  lines.push(`NOTE:${config.brand.taglineFa} - ${config.brand.welcomeFa}`);
  lines.push('END:VCARD');

  return lines.join('\r\n');
}
