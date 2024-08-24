import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 // base: '/reactapp/movie', 
  base: 'https://nknk1410.github.io/movie-react-app',
})
