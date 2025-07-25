import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { v4 as uuidv4 } from 'uuid';

// https://vite.dev/config/
export default defineConfig({
plugins: [react(),tailwindcss()],
  server: {
    hmr: {
      protocol: 'ws', // Ensure WebSocket is used
      host: 'localhost', // Ensure it's trying to connect to localhost
    },
  },
})