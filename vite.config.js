import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo from /s25-portfolio/.
// Vercel serves davidstirling.me at the domain root, so asset URLs must not use that prefix.
const base = process.env.VERCEL ? '/' : '/s25-portfolio/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
