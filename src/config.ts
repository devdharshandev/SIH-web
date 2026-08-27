/// <reference types="vite/client" />

/**
 * Application Configuration
 * Centralized settings for PackCheck AI website
 */

export const APP_CONFIG = {
  appName: 'PackCheck AI',
  tagline: 'AI-Assisted Legal Metrology Compliance & Inspection Platform',
  subTagline: 'SCAN • UNDERSTAND • CHECK • VERIFY • REPORT',
  hackathonInfo: {
    event: 'Smart India Hackathon 2026',
    stage: 'PROTOTYPE',
    problemStatement: '26034',
    domain: 'Legal Metrology (Packaged Commodities) Rules, 2011',
  },
  // Application URL for launching the inspection portal / Android client / web companion
  appUrl: (typeof import.meta !== 'undefined' && (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_APP_URL) || 'http://localhost:3000',
  officialResourcesUrl: 'https://consumeraffairs.nic.in/acts-and-rules/legal-metrology/the-legal-metrology-packaged-commodities-rules-2011',
};
