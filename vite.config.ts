import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '_react/main.js',
        assetFileNames: '_react/style.css',
        chunkFileNames: `assets/[name].[ext]`,
      }
    }
  }
})