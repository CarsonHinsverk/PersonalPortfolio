import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import mdx from '@mdx-js/rollup';

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdx(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  optimizeDeps: {
    exclude: ['mdx/types']
  },
  build: {
    rollupOptions: {
      external: ['mdx/types']
    }
  }
})
