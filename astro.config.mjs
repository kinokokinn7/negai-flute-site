import { defineConfig } from 'astro/config';
// Actions supplies the actual GitHub Pages URL. Local builds work at / by default.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
});
