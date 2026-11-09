import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Long-lived vendor chunks: they change far less often than the app code
        manualChunks: {
          react: ['react', 'react-dom', 'react-dom/client'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
