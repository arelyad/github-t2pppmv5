import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  publicDir: 'public',

  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.ogg', '**/*.jpg', '**/*.png', '**/*.svg'],

  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

  server: {
    fs: {
      strict: false,
      allow: ['..'],
    },
    host: true,
    port: 5173,
    open: true,
    watch: {
      usePolling: true
    }
  },

  preview: {
    port: 5173,
    host: true,
    open: true
  }
});