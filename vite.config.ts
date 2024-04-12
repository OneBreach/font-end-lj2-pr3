import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitest } from 'vitest';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider:'istanbul',
      exclude: ['src/Routes', 'vite-project', 'vite-project/src']
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js', 
  }
})