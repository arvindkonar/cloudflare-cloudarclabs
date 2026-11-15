import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cloudarclabs.com',

  // Keep all CSS in external files so the strict Content-Security-Policy
  // in public/_headers (style-src 'self') works without exceptions.
  build: {
    inlineStylesheets: 'never',
  },
});
