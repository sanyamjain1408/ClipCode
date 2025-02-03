import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    // react(),
    tailwindcss(),
    // plugins: [react()],
    
  ],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})