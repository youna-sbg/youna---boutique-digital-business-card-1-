import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isConfigured,
  getTelUrl,
  getWhatsAppUrl,
  getInstagramUrl,
  getMapNavigationUrl,
  toPersianDigits,
  generateVCard,
} from '../lib/boutique-utils';
import { boutiqueConfig } from '../config/boutique';

test('isConfigured correctly identifies empty and placeholder values', () => {
  assert.equal(isConfigured(''), false);
  assert.equal(isConfigured('   '), false);
  assert.equal(isConfigured(null), false);
  assert.equal(isConfigured(undefined), false);
  assert.equal(isConfigured('به‌زودی اعلام می‌شود'), false);
  assert.equal(isConfigured('PENDING'), false);

  assert.equal(isConfigured('+989121234567'), true);
  assert.equal(isConfigured('تهران، خیابان فرشته'), true);
  assert.equal(isConfigured(35.7), true);
});

test('getTelUrl creates sanitized tel links or returns null', () => {
  assert.equal(getTelUrl(''), null);
  assert.equal(getTelUrl(null), null);
  assert.equal(getTelUrl('+98 (912) 123-4567'), 'tel:+989121234567');
  assert.equal(getTelUrl('09121234567'), 'tel:09121234567');
  assert.equal(getTelUrl('123'), null); // too short
});

test('getWhatsAppUrl builds valid wa.me URLs with message', () => {
  assert.equal(getWhatsAppUrl(''), null);
  assert.equal(getWhatsAppUrl('989121234567'), 'https://wa.me/989121234567');
  assert.equal(
    getWhatsAppUrl('+98 912 123 4567', 'سلام یونا'),
    'https://wa.me/989121234567?text=%D8%B3%D9%84%D8%A7%D9%85%20%DB%8C%D9%88%D9%86%D8%A7'
  );
});

test('getInstagramUrl handles handles with or without @', () => {
  assert.equal(getInstagramUrl(''), null);
  assert.equal(getInstagramUrl('youna.boutique'), 'https://instagram.com/youna.boutique');
  assert.equal(getInstagramUrl('@youna_boutique'), 'https://instagram.com/youna_boutique');
});

test('getMapNavigationUrl prioritizes custom URL, coordinates, then address', () => {
  // Empty
  assert.equal(
    getMapNavigationUrl({
      customMapsUrl: '',
      coordinates: { lat: null, lng: null },
      addressFa: '',
      cityFa: '',
    }),
    null
  );

  // Address
  const addressUrl = getMapNavigationUrl({
    customMapsUrl: '',
    coordinates: { lat: null, lng: null },
    addressFa: 'خیابان ولیعصر',
    cityFa: 'تهران',
  });
  assert.ok(addressUrl?.includes('google.com/maps/search/'));

  // Coordinates
  const coordsUrl = getMapNavigationUrl({
    customMapsUrl: '',
    coordinates: { lat: 35.792, lng: 51.423 },
    addressFa: 'خیابان ولیعصر',
    cityFa: 'تهران',
  });
  assert.equal(coordsUrl, 'https://www.google.com/maps/dir/?api=1&destination=35.792,51.423');

  // Custom maps URL override
  const customUrl = getMapNavigationUrl({
    customMapsUrl: 'https://nshn.ir/abc',
    coordinates: { lat: 35.792, lng: 51.423 },
    addressFa: 'خیابان ولیعصر',
    cityFa: 'تهران',
  });
  assert.equal(customUrl, 'https://nshn.ir/abc');
});

test('toPersianDigits converts western digits to Persian', () => {
  assert.equal(toPersianDigits('YOUNA 2025'), 'YOUNA ۲۰۲۵');
  assert.equal(toPersianDigits('0912'), '۰۹۱۲');
});

test('generateVCard produces valid standard vCard content', () => {
  const vcard = generateVCard(boutiqueConfig);
  assert.ok(vcard.startsWith('BEGIN:VCARD'));
  assert.ok(vcard.includes('FN:YOUNA Boutique | یونا'));
  assert.ok(vcard.endsWith('END:VCARD'));
});
