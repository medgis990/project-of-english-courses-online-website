
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Ensures process.env.API_KEY is available during build/dev
    'process.env': process.env
  },
  server: {
    port: 3000
  }
});
