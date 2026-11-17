import test from 'node:test';
import assert from 'node:assert/strict';
import {
  extensionForContentType,
  isValidAppsScriptUrl,
  normalizeLead,
  safeFileName,
} from '../functions/_shared.js';

const validLead = {
  submissionId: 'csk-submission-1234567890',
  privacyConsent: true,
  name: 'PT Contoh Indonesia',
  pic: 'Budi Santoso',
  picTitle: 'Marketing Manager',
  phone: '081234567890',
  email: 'budi@example.com',
  projectType: 'Rak display custom',
  industry: 'Retail',
  website: 'https://example.com',
  dimensions: '120 x 60 x 180 cm',
  quantity: '12',
  location: 'Jakarta Selatan',
  deadline: '2026-12-20',
  notes: 'Membutuhkan rak untuk beberapa outlet.',
  designLinks: ['https://drive.google.com/file/d/example/view'],
  utmSource: 'google',
  utmMedium: 'cpc',
  utmCampaign: 'rak-display-q4',
  utmTerm: 'vendor rak display',
  utmContent: 'search-ad-1',
  landingPage: '/layanan/rak-display-gondola/',
  referrerHost: 'google.com',
  gclid: 'CjwKCAiA-example_123',
};

test('normalizeLead accepts a valid B2B project brief and campaign attribution', () => {
  const lead = normalizeLead(validLead);
  assert.equal(lead.intakeType, 'project_brief');
  assert.equal(lead.privacyConsent, true);
  assert.equal(lead.quantity, 12);
  assert.equal(lead.utmSource, 'google');
  assert.equal(lead.utmCampaign, 'rak-display-q4');
  assert.equal(lead.gclid, 'CjwKCAiA-example_123');
  assert.equal(lead.designLinks.length, 1);
});

test('normalizeLead classifies partial briefs as quick contact', () => {
  const lead = normalizeLead({ ...validLead, dimensions: '', quantity: '', location: '', deadline: '' });
  assert.equal(lead.intakeType, 'quick_contact');
});

test('normalizeLead rejects unsafe URLs and malformed contact details', () => {
  assert.throws(() => normalizeLead({ ...validLead, website: 'http://example.com' }), /INVALID_WEBSITE/);
  assert.throws(() => normalizeLead({ ...validLead, designLinks: ['javascript:alert(1)'] }), /INVALID_DESIGNLINK/);
  assert.throws(() => normalizeLead({ ...validLead, phone: 'call-me' }), /INVALID_PHONE/);
  assert.throws(() => normalizeLead({ ...validLead, email: 'not-an-email' }), /INVALID_EMAIL/);
});

test('normalizeLead requires explicit privacy consent', () => {
  assert.throws(() => normalizeLead({ ...validLead, privacyConsent: false }), /PRIVACY_CONSENT_REQUIRED/);
  assert.throws(() => normalizeLead(({ privacyConsent, ...withoutConsent }) => withoutConsent)(validLead), /PRIVACY_CONSENT_REQUIRED/);
});

test('normalizeLead rejects invalid attribution metadata and click IDs', () => {
  assert.throws(() => normalizeLead({ ...validLead, landingPage: '//external.example/path' }), /INVALID_LANDING_PAGE/);
  assert.throws(() => normalizeLead({ ...validLead, referrerHost: 'https://google.com' }), /INVALID_REFERRER_HOST/);
  assert.throws(() => normalizeLead({ ...validLead, gclid: 'id with spaces' }), /INVALID_GCLID/);
});

test('Apps Script URL validation accepts only the expected HTTPS web app endpoint', () => {
  assert.equal(isValidAppsScriptUrl('https://script.google.com/macros/s/deployment-id/exec'), true);
  assert.equal(isValidAppsScriptUrl('http://script.google.com/macros/s/deployment-id/exec'), false);
  assert.equal(isValidAppsScriptUrl('https://evil.example/macros/s/deployment-id/exec'), false);
  assert.equal(isValidAppsScriptUrl('https://script.google.com/'), false);
});

test('file helpers accept only supported MIME types and sanitize file names', () => {
  assert.equal(extensionForContentType('application/pdf'), 'pdf');
  assert.equal(extensionForContentType('image/jpeg'), 'jpg');
  assert.equal(extensionForContentType('image/png'), 'png');
  assert.equal(extensionForContentType('text/html'), '');
  assert.equal(safeFileName('../brief\\design.pdf'), '_brief_design.pdf');
});
