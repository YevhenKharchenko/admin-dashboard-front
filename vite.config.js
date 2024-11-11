import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { globalStylesOptions } from './global.styles.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: globalStylesOptions,
        api: 'modern-compiler',
      },
    },
  },
});
