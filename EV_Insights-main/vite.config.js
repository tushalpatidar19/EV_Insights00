import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes asset paths relative, so the build works under any
// GitHub Pages project URL (https://<user>.github.io/<repo>/) without edits.
export default defineConfig({
  base: './',
  plugins: [react()],
});
