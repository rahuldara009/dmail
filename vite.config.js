
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CricketX/', // Add this line
  plugins: [react()]
});
