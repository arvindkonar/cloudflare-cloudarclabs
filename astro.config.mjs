import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set this to your live domain once it is attached in Cloudflare,
  // e.g. site: 'https://your-domain.com'
  // site: '',

  // Keep all CSS in external files so the strict Content-Security-Policy
  // in public/_headers (style-src 'self') works without exceptions.
  build: {
    inlineStylesheets: 'never',
  },
});
