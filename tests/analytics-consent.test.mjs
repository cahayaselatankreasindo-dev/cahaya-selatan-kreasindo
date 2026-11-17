import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const base = await readFile(new URL('../src/layouts/Base.astro', import.meta.url), 'utf8');
const inquiryForm = await readFile(new URL('../src/components/LeadInquiryForm.astro', import.meta.url), 'utf8');

test('Google Analytics loads only after an accepted analytics choice', () => {
  assert.match(base, /if \(localStorage\.getItem\(CONSENT_KEY\) === 'accepted'\) loadAnalytics\(\)/);
  assert.match(base, /window\.cskHasAnalyticsConsent = function \(\)[\s\S]*?return localStorage\.getItem\(CONSENT_KEY\) === 'accepted'/);
});

test('analytics consent keeps advertising storage denied', () => {
  assert.match(base, /analytics_storage: 'granted',[\s\S]*?ad_storage: 'denied',[\s\S]*?ad_user_data: 'denied',[\s\S]*?ad_personalization: 'denied'/);
  assert.match(base, /analytics_storage: 'denied',[\s\S]*?ad_storage: 'denied',[\s\S]*?ad_user_data: 'denied',[\s\S]*?ad_personalization: 'denied'/);
});

test('website click and lead conversion events require current analytics consent', () => {
  assert.match(base, /typeof window\.cskHasAnalyticsConsent !== 'function' \|\| !window\.cskHasAnalyticsConsent\(\)/);
  assert.match(inquiryForm, /typeof window\.cskHasAnalyticsConsent === 'function' && window\.cskHasAnalyticsConsent\(\)/);
});
