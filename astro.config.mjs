import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Update this to: https://YOUR-USERNAME.github.io
  site: 'https://YOUR-USERNAME.github.io',

  // Update this to: /YOUR-REPO-NAME/
  // If using a custom domain or username.github.io repo, set to: '/'
  base: '/YOUR-REPO-NAME',

  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
