import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
})
