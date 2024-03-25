import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://gamilmohamed.github.io/portfolio',
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true
      }
    },
    cors: true
  }
})